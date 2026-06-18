import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      // Server-side validation
      const validatedData = contactSchema.parse(req.body);

      const { name, email, subject, message } = validatedData;
      
      const designatedEmailAddress = process.env.DESIGNATED_EMAIL_ADDRESS || "contact@example.com";
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      // Ensure submitted messages are sent to a designated email address
      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${email}>`, // sender address (might need to use your own depending on SMTP relay rules)
          replyTo: email,
          to: designatedEmailAddress,
          subject: subject,
          text: message,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        });

        console.log(`Email successfully sent to ${designatedEmailAddress}`);
      } else {
        // Fallback for demo when SMTP is not configured
        console.log("\n=============================");
        console.log("Mock Email Sending:");
        console.log(`To: ${designatedEmailAddress}`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: ${subject}`);
        console.log(`Message:\n${message}`);
        console.log("=============================\n");
        console.log("Notice: SMTP not configured. Printing to console instead.");
      }

      res.status(200).json({ success: true, message: "Your message has been sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation failed
        res.status(400).json({ success: false, errors: error.issues });
        return;
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "An error occurred while sending your message. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
