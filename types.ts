// types.ts
import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  children: ReactNode;
}

export interface CardTitleProps {
  children: ReactNode;
}

export interface CardContentProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  prefix?: ReactNode;
}