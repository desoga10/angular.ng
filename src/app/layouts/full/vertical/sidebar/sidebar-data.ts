import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    divider: true,
    navCap: 'Apps',
  },
  {
    displayName: 'Invoice',
    iconName: 'solar:bill-list-line-duotone',
    route: 'apps/invoice',
  },
  {
    displayName: 'currency-converter',
    iconName: 'solar:bill-list-line-duotone',
    route: 'apps/converter',
  },
  {
    displayName: 'Account Setting',
    iconName: 'solar:accessibility-line-duotone',
    route: 'theme-pages/account-setting',
  },
];
