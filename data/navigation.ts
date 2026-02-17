import type { NavItem } from '../types';

export const mainNavigation: NavItem[] = [
  { label: 'Work', labelKo: '작업', path: '/work' },
  { label: 'Journal', labelKo: '저널', path: '/journal' },
  { label: 'Projects', labelKo: '프로젝트', path: '/projects' },
  { label: 'About', labelKo: '소개', path: '/about' },
  { label: 'Contact', labelKo: '연락', path: '/contact' },
];

export const adminNavigation: NavItem[] = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Works', path: '/admin/works' },
  { label: 'Journal', path: '/admin/journal' },
  { label: 'Projects', path: '/admin/projects' },
];

export const portalNavigation: NavItem[] = [
  { label: 'Dashboard', path: '/portal' },
  { label: 'Projects', path: '/portal/projects' },
];

export const intranetNavigation: NavItem[] = [
  { label: 'Board', path: '/intranet' },
  { label: 'Resources', path: '/intranet/resources' },
];
