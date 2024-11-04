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

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  className?: string;
  prefix?: ReactNode;
}

export interface FolderItemProps {
  folder: {
    id: string;
    name: string;
    icon: ReactNode;
    subfolders: string[];
  };
  isExpanded: boolean;
  toggleFolder: (id: string) => void;
}
