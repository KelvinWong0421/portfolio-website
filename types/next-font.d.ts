declare module '@next/font/google' {
  export interface FontOptions {
    subsets?: string[];
    display?: string;
    weight?: string | number | (string | number)[];
    style?: string;
  }

  export function Inter(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
  };
} 