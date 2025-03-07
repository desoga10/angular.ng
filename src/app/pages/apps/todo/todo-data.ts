import { ToDo } from './todo';

export const todos: ToDo[] = [
  {
    id: 1,
    message: 'I have to go office.',
    completionStatus: true,
    edit: false,
    date: new Date('02-06-2025'),
  },
  {
    id: 2,
    message: 'let us work hard this time ! ',
    completionStatus: false,
    edit: false,
    date: new Date('02-08-2025'),
  },
  {
    id: 3,
    message: 'We will win if we give our best.',
    completionStatus: true,
    edit: false,
    date: new Date('02-10-2025'),
  },
  {
    id: 4,
    message: 'We will leave soon.',
    completionStatus: false,
    edit: false,
    date: new Date('02-12-2025'),
  },
  {
    id: 5,
    message: 'I am doing my best.',
    completionStatus: false,
    edit: false,
    date: new Date('02-15-2025'),
  },
];
