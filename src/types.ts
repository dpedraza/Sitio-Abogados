export type SectionId = 'inicio' | 'areas' | 'abogados' | 'blog' | 'contacto' | 'propuesta';

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  detailedDescription?: string;
  keyPoints?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  description: string;
  education?: string[];
  contactEmail?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
}
