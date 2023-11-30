import {
  SvgBook,
  SvgBriefcase,
  SvgCalendar1,
  SvgCalendar2,
  SvgGalleryFavorite,
  SvgHome,
  SvgInvoice,
  SvgNote2,
  SvgNotification,
  SvgProfile2User,
  SvgReceiptDisscount,
  SvgSetting2,
  SvgTeacher,
} from 'shared/src/ui/icon';

import type { PageLink } from '../types';

export const links: PageLink[] = [
  {
    title: 'Content',
    href: '/',
    icon: <SvgGalleryFavorite />,
  },
  {
    title: 'Services',
    href: '/services',
    icon: <SvgNote2 />,
  },
  {
    title: 'Requests',
    href: '/requests',
    icon: <SvgNotification />,
  },
  {
    title: 'Discounts',
    href: '/discounts',
    icon: <SvgReceiptDisscount />,
  },
  {
    title: 'Invoices',
    href: '/invoices',
    icon: <SvgInvoice />,
  },
  {
    title: 'Timetable',
    href: '/timetable',
    icon: <SvgCalendar1 />,
  },
  {
    title: 'Curriculum',
    href: '/curriculum',
    icon: <SvgBook />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <SvgProfile2User />,
  },
  {
    title: 'Branches',
    href: '/branches',
    icon: <SvgHome />,
  },
  {
    title: 'Academic years',
    href: '/academic-years',
    icon: <SvgTeacher />,
  },
  {
    title: 'Subjects',
    href: '/subjects',
    icon: <SvgBriefcase />,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: <SvgCalendar2 />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SvgSetting2 />,
  },
];
