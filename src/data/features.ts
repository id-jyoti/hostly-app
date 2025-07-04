// src/data/features.ts

type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Bank-Level Security',
    description: 'Your data is protected with enterprise-grade encryption and daily backups.',
  },
  {
    id: 2,
    icon: '⚡',
    title: '99.99% Uptime',
    description: 'Stay online around the clock with our ultra-reliable hosting infrastructure.',
  },
  {
    id: 3,
    icon: '📱',
    title: 'Anywhere Access',
    description: 'Work from desktop, tablet, or mobile — anytime, anywhere.',
  },
  {
    id: 4,
    icon: '👨‍💻',
    title: 'Expert Support',
    description: 'Certified technicians available 24/7 to help your team.',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Multi-Layer Protection',
    description: 'Firewall, antivirus, and intrusion detection keep your data safe.',
  },
  {
    id: 6,
    icon: '☁️',
    title: 'Cloud Scalability',
    description: 'Easily scale resources based on your growing business needs.',
  },
];

export default features;
