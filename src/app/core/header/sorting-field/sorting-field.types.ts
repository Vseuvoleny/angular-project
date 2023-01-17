export interface Option {
  title: string;
  withInput?: boolean;
  active: boolean;
  status: Status;
}

export type Status = 'idle' | 'increase' | 'decrease';
