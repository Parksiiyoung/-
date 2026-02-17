import type { NavItem, SocialLink } from '../types';

export const SITE = {
  name: 'BITNANEUN',
  nameKo: '빛나는',
  tagline: 'Design Studio',
  founded: 2006,
  anniversary: 20,
  email: 'hello@bitnaneun.com',
  url: 'https://bitnaneun.com',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', labelKo: '작업', path: '/work' },
  { label: 'Journal', labelKo: '저널', path: '/journal' },
  { label: 'Projects', labelKo: '프로젝트', path: '/projects' },
  { label: 'About', labelKo: '소개', path: '/about' },
  { label: 'Contact', labelKo: '연락', path: '/contact' },
];

export const AUTH_NAV_ITEMS: NavItem[] = [
  { label: 'Admin', path: '/admin', auth: 'admin' },
  { label: 'Portal', path: '/portal', auth: 'client' },
  { label: 'Intranet', path: '/intranet', auth: 'team' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/bitnaneun', label: '@bitnaneun' },
  { platform: 'Behance', url: 'https://behance.net/bitnaneun', label: 'Behance' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/bitnaneun', label: 'LinkedIn' },
];

export const WORK_CATEGORIES = [
  { id: '1', name: 'Branding', nameKo: '브랜딩', slug: 'branding' },
  { id: '2', name: 'Editorial', nameKo: '에디토리얼', slug: 'editorial' },
  { id: '3', name: 'Digital', nameKo: '디지털', slug: 'digital' },
  { id: '4', name: 'Space', nameKo: '공간', slug: 'space' },
  { id: '5', name: 'Campaign', nameKo: '캠페인', slug: 'campaign' },
  { id: '6', name: 'Identity', nameKo: '아이덴티티', slug: 'identity' },
] as const;

export const JOURNAL_CATEGORIES = [
  { value: 'news' as const, label: 'News', labelKo: '뉴스' },
  { value: 'essay' as const, label: 'Essay', labelKo: '에세이' },
  { value: 'update' as const, label: 'Update', labelKo: '업데이트' },
  { value: 'event' as const, label: 'Event', labelKo: '이벤트' },
];
