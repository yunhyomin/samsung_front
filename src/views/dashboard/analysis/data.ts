export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: 'Visits',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '월',
  },
  {
    title: 'Sales',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: 'Minth',
  },
  {
    title: 'Download',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: 'Week',
  },
  {
    title: 'Order',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: 'Year',
  },
];
