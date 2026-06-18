/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { IntelligenceHub } from './components/visualizations/IntelligenceHub';
import { Problem } from './components/sections/Problem';
import { HowItWorks } from './components/sections/HowItWorks';
import { Platform } from './components/sections/Platform';
import { LiveDeployment } from './components/sections/LiveDeployment';
import { Industries } from './components/sections/Industries';
import { TechFoundation } from './components/sections/TechFoundation';
import { Vision } from './components/sections/Vision';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white antialiased selection:bg-indigo-600/30 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <IntelligenceHub />
        <Problem />
        <HowItWorks />
        <Platform />
        <LiveDeployment />
        <Industries />
        <TechFoundation />
        <Vision />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
