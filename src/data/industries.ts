
import {
  faUserTie,
  faDesktop,
  faUserShield,
  faBuilding,
  faBriefcase,
  faCashRegister,
  faMoneyCheck,
  faClock,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

export type Industry = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

const industries: Industry[] = [
  {
    id: 1,
    icon: faUserTie,
    title: 'QuickBooks Accountant',
    description: 'Advanced tools for CPAs and bookkeeping professionals.',
  },
  {
    id: 2,
    icon: faDesktop,
    title: 'QuickBooks Desktop',
    description: 'Powerful accounting for traditional desktop workflows.',
  },
  {
    id: 3,
    icon: faUserShield,
    title: 'QuickBooks ProAdvisor',
    description: 'Dedicated tools for accounting advisors and consultants.',
  },
  {
    id: 4,
    icon: faBuilding,
    title: 'QuickBooks Enterprise',
    description: 'Scalable accounting tailored for large enterprises.',
  },
  {
    id: 5,
    icon: faBriefcase,
    title: 'QuickBooks Premier',
    description: 'Industry-specific features for mid-sized businesses.',
  },
  {
    id: 6,
    icon: faCashRegister,
    title: 'QuickBooks POS',
    description: 'Point of Sale software ideal for retail and storefronts.',
  },
  {
    id: 7,
    icon: faMoneyCheck,
    title: 'QuickBooks Payroll',
    description: 'Streamlined payroll processing and employee management.',
  },
  {
    id: 8,
    icon: faClock,
    title: 'QuickBooks Time',
    description: 'Time tracking tools for teams and remote workers.',
  },
  {
    id: 9,
    icon: faCloud,
    title: 'QuickBooks Online',
    description: 'Cloud-based accounting for modern businesses.',
  },
];

export default industries;
