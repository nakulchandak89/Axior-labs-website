import React, { ReactNode } from 'react';

export interface StatusPillProps {
  label: string;
  variant: 'live' | 'active' | 'monitoring' | 'processing';
}

export interface IntelligenceCardProps {
  title: string;
  body: string;
  icon: any; // LucideIcon
  status?: StatusPillProps;
  variant: 'dark' | 'light';
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: any; // LucideIcon
  iconPosition?: 'left' | 'right';
  href?: string;
}
