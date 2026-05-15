
import heroImagePhysio from '../../heroimage-physiotherapy.png';
import heroImageSmartVision from '../../heroimage-smartvision.png';
import thumbnailGreenEye from '../../Thumbnail-Greeneye.png';

export const projects = [
  {
    id: 'ust-smartops',
    title: 'UST SmartOps / SmartVision',
    category: 'Intelligent Document Processing',
    description: 'Re-architected the document extraction and validation interface for an intelligent automation platform, reducing "Human-in-the-loop" processing time by 25%. Engineered a scalable Figma component library to cut handoff time by 40%.',
    image: heroImageSmartVision,
    tags: ['UX Transformation', 'Design Systems', 'WCAG 2.1 AA', 'Angular'],
    link: '/work/smartops'
  },
  {
    id: 'green-eye',
    title: 'Green Eye',
    category: 'Civic Engagement & Sustainability',
    description: 'A community-driven platform empowering citizens to report littering, track environmental activities, and access educational resources. Focused on accessibility, gamification, and local impact.',
    image: thumbnailGreenEye,
    tags: ['Civic Tech', 'Accessibility', 'Gamification', 'React'],
    link: '/work/green-eye'
  },
  {
    id: 'physio-booking',
    title: 'Physiotherapy Booking System',
    category: 'Healthcare Platform',
    description: 'An end-to-end patient portal and clinic management system streamlining appointment bookings, reducing no-shows, and optimizing practitioner schedules.',
    image: heroImagePhysio,
    tags: ['UX Research', 'Healthcare', 'SaaS', 'Prototyping'],
    link: '/work/physio-booking'
  }
];