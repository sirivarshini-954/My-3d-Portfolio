export interface BtnListType {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export interface ProjectListType {
  id: number;
  name: string;
  subHeading: string;
  description: string;
  demoLink: string;
  sourceLink: string;
  techStack: string[];
}
