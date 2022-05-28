export interface SelectContent {
  id: number;
  label: string;
  value: string;
  selected: boolean;
  style: string;
}

export interface SettingContentType {
  id: number;
  title: string;
  description: string;
  style: string;
  selectList: SelectContent[];
}
