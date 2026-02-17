// ========================================
// BITNANEUN Studio — Type Definitions
// ========================================

// --- Work / Portfolio ---
export interface WorkCategory {
  id: string;
  name: string;
  nameKo: string;
  slug: string;
}

export interface WorkCredit {
  role: string;
  name: string;
}

export interface WorkProject {
  id: string;
  slug: string;
  title: string;
  titleKo?: string;
  category: WorkCategory;
  year: number;
  client?: string;
  thumbnail: string;
  images: string[];
  description: string;
  descriptionKo?: string;
  credits: WorkCredit[];
  tags: string[];
  featured: boolean;
  order: number;
}

// --- Journal / Blog ---
export type JournalCategory = 'news' | 'essay' | 'update' | 'event';

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  titleKo?: string;
  excerpt: string;
  content: string;
  date: string;
  category: JournalCategory;
  thumbnail?: string;
  author?: string;
}

// --- Side Projects ---
export type ProjectType = 'magazine' | 'media-art' | 'experimental' | 'tool';

export interface SideProject {
  id: string;
  slug: string;
  title: string;
  titleKo?: string;
  type: ProjectType;
  year: number;
  description: string;
  thumbnail: string;
  url?: string;
  tags: string[];
}

// --- About / Studio ---
export interface TeamMember {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface TimelineMilestone {
  year: number;
  title: string;
  titleKo?: string;
  description?: string;
}

export interface Award {
  year: number;
  title: string;
  organization: string;
  project?: string;
}

export interface StudioInfo {
  name: string;
  nameKo: string;
  founded: number;
  description: string;
  descriptionKo: string;
  philosophy: string;
  philosophyKo: string;
  email: string;
  phone?: string;
  address: string;
  addressKo: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

// --- Auth ---
export type UserRole = 'admin' | 'client' | 'team';

export interface AuthState {
  isAuthenticated: boolean;
  role: UserRole | null;
  token: string | null;
}

// --- Client Portal ---
export type ProjectStatus = 'active' | 'completed' | 'paused';
export type LinkType = 'picflow' | 'figma' | 'drive' | 'notion' | 'other';

export interface ProjectLink {
  type: LinkType;
  label: string;
  url: string;
}

export interface PortalProject {
  id: string;
  clientId: string;
  name: string;
  nameKo?: string;
  status: ProjectStatus;
  links: ProjectLink[];
  updatedAt: string;
}

// --- Intranet ---
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface BoardTask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assignee?: string;
  dueDate?: string;
  priority: TaskPriority;
  projectId: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  url?: string;
  content?: string;
  updatedAt: string;
}

// --- Navigation ---
export interface NavItem {
  label: string;
  labelKo?: string;
  path: string;
  auth?: UserRole;
}
