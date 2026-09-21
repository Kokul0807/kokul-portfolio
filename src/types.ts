export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface SkillDetail {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'tools';
  proficiency: number;
  experienceLevel: string;
  description: string;
  highlightProjects: string[];
  icon: string;
}

export interface CodeDemo {
  id: string;
  title: string;
  language: 'cpp' | 'python' | 'java' | 'html-css';
  code: string;
  output: string;
  description: string;
}
