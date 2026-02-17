import type { StudioInfo, TeamMember, TimelineMilestone, Award } from '../types';

export const studioInfo: StudioInfo = {
  name: 'BITNANEUN',
  nameKo: '빛나는',
  founded: 2006,
  description: 'BITNANEUN is a design studio based in Seoul, specializing in branding, editorial, digital, and space design. We believe in the power of simplicity and the beauty of restraint.',
  descriptionKo: '빛나는은 서울을 기반으로 브랜딩, 에디토리얼, 디지털, 공간 디자인을 전문으로 하는 디자인 스튜디오입니다. 간결함의 힘과 절제의 아름다움을 믿습니다.',
  philosophy: 'Design is making the invisible visible. We pursue minimalism not as mere aesthetic, but as a discipline — removing everything unnecessary until only the essential remains.',
  philosophyKo: '디자인은 보이지 않는 것을 보이게 하는 일입니다. 우리가 추구하는 미니멀리즘은 단순한 미학이 아닌 하나의 태도입니다 — 불필요한 것을 모두 걷어내고 본질만 남길 때까지.',
  email: 'hello@bitnaneun.com',
  phone: '+82-2-123-4567',
  address: '12 Seongsu-ro, Seongdong-gu, Seoul, Korea',
  addressKo: '서울특별시 성동구 성수로 12',
  social: [
    { platform: 'Instagram', url: 'https://instagram.com/bitnaneun', label: '@bitnaneun' },
    { platform: 'Behance', url: 'https://behance.net/bitnaneun', label: 'Behance' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/bitnaneun', label: 'LinkedIn' },
  ],
};

export const team: TeamMember[] = [
  {
    id: '1',
    name: '박시영',
    nameEn: 'Park Siyoung',
    role: 'Founder & Creative Director',
    bio: '20년간 빛나는을 이끌어온 크리에이티브 디렉터. 타이포그래피와 미니멀 디자인을 통해 본질적인 아름다움을 추구합니다.',
    image: 'https://placehold.co/400x400/1A1A1A/FAFAF8?text=PSY',
  },
  {
    id: '2',
    name: '김지은',
    nameEn: 'Kim Jieun',
    role: 'Brand Strategist',
    bio: '브랜드의 본질을 발견하고 전략으로 번역하는 일을 합니다.',
    image: 'https://placehold.co/400x400/2C2C2C/FAFAF8?text=KJE',
  },
  {
    id: '3',
    name: '이동현',
    nameEn: 'Lee Donghyun',
    role: 'Design Lead',
    bio: '타이포그래피와 그리드 시스템을 기반으로 체계적이고 아름다운 디자인을 만듭니다.',
    image: 'https://placehold.co/400x400/6B6B6B/FAFAF8?text=LDH',
  },
  {
    id: '4',
    name: '정민우',
    nameEn: 'Jung Minwoo',
    role: 'Digital Designer',
    bio: '디지털 환경에서의 사용자 경험과 인터랙션 디자인을 담당합니다.',
    image: 'https://placehold.co/400x400/E5E5E0/1A1A1A?text=JMW',
  },
  {
    id: '5',
    name: '최유나',
    nameEn: 'Choi Yuna',
    role: 'Editorial Designer',
    bio: '출판과 에디토리얼 디자인을 통해 이야기를 시각적으로 전달합니다.',
    image: 'https://placehold.co/400x400/999999/FAFAF8?text=CYN',
  },
];

export const timeline: TimelineMilestone[] = [
  { year: 2006, title: 'Studio Founded', titleKo: '스튜디오 설립', description: '종로구 작은 작업실에서 빛나는 시작' },
  { year: 2008, title: 'First Major Client', titleKo: '첫 대형 클라이언트', description: '첫 기업 브랜딩 프로젝트 수주' },
  { year: 2010, title: 'Red Dot Award', titleKo: 'Red Dot 수상', description: 'Red Dot Design Award 첫 수상' },
  { year: 2012, title: 'Team Expansion', titleKo: '팀 확장', description: '10명 규모로 팀 확장' },
  { year: 2014, title: 'Gangnam Office', titleKo: '강남 오피스 이전', description: '강남구로 스튜디오 이전' },
  { year: 2016, title: '10th Anniversary', titleKo: '10주년', description: '10주년 기념 전시 개최' },
  { year: 2018, title: 'Digital Division', titleKo: '디지털 부서 신설', description: '디지털 디자인 전담 부서 설립' },
  { year: 2020, title: 'GAZE Magazine Launch', titleKo: 'GAZE 매거진 창간', description: '온라인 매거진 GAZE 창간' },
  { year: 2022, title: 'International Expansion', titleKo: '해외 프로젝트 확대', description: '일본, 유럽 클라이언트 프로젝트 시작' },
  { year: 2024, title: 'Seongsu Studio', titleKo: '성수동 스튜디오', description: '성수동 새 스튜디오 리노베이션 완료' },
  { year: 2026, title: '20th Anniversary', titleKo: '20주년', description: '창립 20주년 기념' },
];

export const awards: Award[] = [
  { year: 2025, title: 'iF Design Award — Gold', organization: 'iF International Forum Design', project: 'Hyundai Card Brand Renewal' },
  { year: 2024, title: 'Red Dot — Best of the Best', organization: 'Red Dot', project: 'Seoul Museum Digital Experience' },
  { year: 2024, title: 'ADAA Silver', organization: 'Asian Design Award Association', project: 'Gentle Monster Flagship Store' },
  { year: 2023, title: 'Graphis Gold', organization: 'Graphis', project: 'Naver Design System' },
  { year: 2022, title: 'D&AD Pencil', organization: 'D&AD', project: 'GAZE Magazine' },
  { year: 2021, title: 'Good Design Award', organization: 'Japan Institute of Design Promotion', project: 'Brand Identity System' },
  { year: 2020, title: 'TDC Award', organization: 'Type Directors Club', project: 'Korean Air In-flight Magazine' },
  { year: 2018, title: 'Red Dot', organization: 'Red Dot', project: 'Annual Report Design' },
  { year: 2015, title: 'iF Design Award', organization: 'iF International Forum Design', project: 'Brand Identity' },
  { year: 2010, title: 'Red Dot', organization: 'Red Dot', project: 'Visual Identity' },
];
