import { works, categories } from '../data/works';
import { journalEntries } from '../data/journal';
import { sideProjects } from '../data/projects';
import { studioInfo, team, timeline, awards } from '../data/about';
import type { WorkProject, WorkCategory, JournalEntry, SideProject, StudioInfo, TeamMember, TimelineMilestone, Award } from '../types';

// Toggle this to false when Sanity is connected
const USE_MOCK = true;

// --- Work ---
export async function fetchWorks(): Promise<WorkProject[]> {
  if (USE_MOCK) return works;
  // TODO: Sanity GROQ query
  return [];
}

export async function fetchFeaturedWorks(): Promise<WorkProject[]> {
  if (USE_MOCK) return works.filter(w => w.featured).sort((a, b) => a.order - b.order);
  return [];
}

export async function fetchWorkBySlug(slug: string): Promise<WorkProject | null> {
  if (USE_MOCK) return works.find(w => w.slug === slug) || null;
  return null;
}

export async function fetchWorkCategories(): Promise<WorkCategory[]> {
  if (USE_MOCK) return categories;
  return [];
}

// --- Journal ---
export async function fetchJournalEntries(): Promise<JournalEntry[]> {
  if (USE_MOCK) return journalEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return [];
}

export async function fetchLatestJournal(limit: number = 3): Promise<JournalEntry[]> {
  const entries = await fetchJournalEntries();
  return entries.slice(0, limit);
}

export async function fetchJournalBySlug(slug: string): Promise<JournalEntry | null> {
  if (USE_MOCK) return journalEntries.find(j => j.slug === slug) || null;
  return null;
}

// --- Projects ---
export async function fetchSideProjects(): Promise<SideProject[]> {
  if (USE_MOCK) return sideProjects;
  return [];
}

// --- About ---
export async function fetchStudioInfo(): Promise<StudioInfo> {
  if (USE_MOCK) return studioInfo;
  return studioInfo; // fallback
}

export async function fetchTeam(): Promise<TeamMember[]> {
  if (USE_MOCK) return team;
  return [];
}

export async function fetchTimeline(): Promise<TimelineMilestone[]> {
  if (USE_MOCK) return timeline;
  return [];
}

export async function fetchAwards(): Promise<Award[]> {
  if (USE_MOCK) return awards;
  return [];
}
