export interface SkillCintent {
  label: string;
  experience: number;
  level: number;
  style: string;
}

export interface SkillContentType {
  title: string;
  description: string;
  iconClass: string;
  style: string;
  contentList: SkillCintent[];
}
