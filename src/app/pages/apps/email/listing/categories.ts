export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  color?: string;
  active: boolean;
}

export const mailbox = [
  {
    id: 1,
    name: 'Inbox',
    icon: 'mail',
    count: 0,
    active: true,
  },
  {
    id: 2,
    name: 'Sent',
    icon: 'send',
    count: 0,
    active: false,
  },
  {
    id: 3,
    name: 'Draft',
    icon: 'note',
    count: 0,
    active: false,
  },
  {
    id: 4,
    name: 'Spam',
    icon: 'flag',
    count: 0,
    active: false,
  },
  {
    id: 5,
    name: 'Trash',
    icon: 'trash',
    count: 0,
    active: false,
  },
];

export const filter = [
  {
    id: 501,
    name: 'Star',
    icon: 'star',
    count: 0,
    active: false,
  },
  {
    id: 502,
    name: 'Important',
    icon: 'info-circle',
    count: 0,
    active: false,
  },
];

export const label: Category[] = [
  {
    id: 701,
    name: 'Personal',
    icon: 'folder',
    count: 0,
    color: '#5D87FF',
    active: false,
  },
  {
    id: 702,
    name: 'Work',
    icon: 'folder',
    count: 0,
    color: '#49BEFF',
    active: false,
  },
  {
    id: 703,
    name: 'Payments',
    icon: 'folder',
    count: 0,
    color: '#FA896B',
    active: false,
  },
  {
    id: 704,
    name: 'Accounts',
    icon: 'folder',
    count: 0,
    color: '#FFAE1F',
    active: false,
  },
];
