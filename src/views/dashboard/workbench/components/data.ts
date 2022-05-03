interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: 'Home',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: 'Dashboard',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: 'Component',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: 'System Management',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: 'Authority',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: 'Chart',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '승열',
    date: 'Just Now',
    desc: `Created <a>Vue<a> project in <a>Open Source Group<a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '효민',
    date: '1 Hour Ago',
    desc: `Followed <a>승렬<a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '병문',
    date: 'a day ago',
    desc: `Posted <a>Personal Article<a>`,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: '승열',
    date: '2 days ago',
    desc: `Post <a>How to Write a Vite Plugin<a>`,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '효민',
    date: '3 days ago',
    desc: `Reply to <a>승열<a>'s question <a>How to optimize the project? <a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '병문',
    date: '1 Week ago',
    desc: `Issue closed <a>How to run project<a>`,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '승열',
    date: '1 week ago',
    desc: `Posted <a>personal activity<a>`,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '효민',
    date: '2022-01-14 20:00',
    desc: `Pushed code to <a>Github<a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: 'Do not wait for opportunities, and to create opportunities.',
    group: 'Open Source Group',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: 'Your present determines your future.',
    group: 'Algorithm group',
    date: '2021-04-01',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: 'Nothing is more important than hard work',
    group: 'fishing at work',
    date: '2021-04-01',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: 'Passion and desire can overcome all obstacles.',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: 'A healthy body is the cornerstone of real goals.',
    group: 'technical cow',
    date: '2021-04-01',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: 'The road is out of the way, not out of imagination.',
    group: 'Architecture group',
    date: '2021-04-01',
  },
];
