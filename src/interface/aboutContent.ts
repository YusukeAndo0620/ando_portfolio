export interface IntroductionContent {
  label: string;
  description: string;
  style: string;
}
export interface AboutHistoryContent {
  year: string;
  description: string;
  style: string;
}

export interface AboutContentType {
  title: string;
  src: string;
  style: string;
  introductionList: IntroductionContent[];
  aboutHistoryList: AboutHistoryContent[];
}
