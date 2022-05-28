export interface DevelopmentPhaseContent {
  definition: boolean;
  basicDesign: boolean;
  detailDesign: boolean;
  coding: boolean;
  unitTest: boolean;
  integrationTest: boolean;
  systemTest: boolean;
  maintenance: boolean;
}
export interface AchievementContent {
  label: string;
  description: string;
  archievement: string;
  style: string;
}

export interface WorksContentType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  period: string;
  src: string;
  style: string;
  selected: boolean;
  developmentPhase: DevelopmentPhaseContent;
  achievementList: AchievementContent[];
}
