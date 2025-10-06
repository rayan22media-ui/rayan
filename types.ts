export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
