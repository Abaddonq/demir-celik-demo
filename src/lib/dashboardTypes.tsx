export type ThemeForm = {
  mode: boolean;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

export type Department = {
  id: number;
  name: string;
};

export type Staff = {
  id: number;
  name: string;
  surname: string;
  title: string;
  phone?: string;
  email: string;
  departments?: Department[];
  responsible_labs?: string | null;
  image_url?: string | null;
};

export type LoadingState = {
  departments: boolean;
  staff: boolean;
  theme: boolean;
};