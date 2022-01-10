export type Theme = {
  scheme: 'dark' | 'light';
  colors: {
    primary: string;
    background: string;
    text: string;
    muted: string;
    success: string;
    error: string;
  };
  fonts: {
    regular: string;
    bold: string;
    monospace: string;
  };
  spacing: {
    xss: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  sizes: {
    xss: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
};
