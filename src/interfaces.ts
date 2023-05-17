export interface Program {
  id: string;
  display_title: string;
  short_title: string;
  thumbnail_img_url: string;
}

export interface Session {
  id: string;
  created_at: string;
  end_date: string;
  name: string;
  start_date: string;
  status: string;
  program: Program[];
}

export interface SelectOption {
  value: string;
  label: string;
}
