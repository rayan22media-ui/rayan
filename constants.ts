import type { Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mohammad@example.com',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'الواجهات الأمامية (Frontend)',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vite'],
  },
  {
    title: 'الأنظمة الخلفية (Backend)',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'قواعد البيانات والأدوات',
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'Git & GitHub', 'CI/CD', 'Jest'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'منصة إدارة المشاريع',
    description:
      'تطبيق ويب متكامل يساعد الفرق على تنظيم المهام والمشاريع وتتبع التقدم. يتميز بواجهة مستخدم تفاعلية ونظام إشعارات فوري ولوحات تحكم قابلة للتخصيص.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'متجر إلكتروني ذكي',
    description:
      'منصة تجارة إلكترونية حديثة مع نظام توصيات يعتمد على الذكاء الاصطناعي، وبوابة دفع آمنة، ولوحة تحكم شاملة لإدارة المنتجات والمبيعات.',
    tags: ['Next.js', 'Python', 'Django', 'Stripe API', 'Vercel'],
    repoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
   {
    id: 3,
    title: 'محرك بحث وتحليل بيانات',
    description:
      'أداة قوية للبحث في مجموعات بيانات ضخمة وتقديم تحليلات ورسوم بيانية تفاعلية للمستخدمين، معتمدة على تقنيات الفهرسة السريعة والمعالجة الفعالة للبيانات.',
    tags: ['Elasticsearch', 'React', 'Python', 'Docker', 'D3.js'],
    repoUrl: 'https://github.com',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
];
