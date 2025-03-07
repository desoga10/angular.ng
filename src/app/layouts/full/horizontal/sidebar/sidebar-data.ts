import { NavItem } from '../../vertical/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboards',
    iconName: 'solar:chart-line-duotone',
    route: 'dashboards',
    children: [
      {
        displayName: 'Dashboard 1',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'dashboards/dashboard1',
      },
      // {
      //   displayName: 'Dashboard 2',
      //   iconName: 'solar:round-alt-arrow-right-line-duotone',
      //   route: 'dashboards/dashboard2',
      // },
      // {
      //   displayName: 'Dashboard 3',
      //   iconName: 'solar:round-alt-arrow-right-line-duotone',
      //   route: 'dashboards/dashboard3',
      // },
    ],
  },
  {
    displayName: 'Apps',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: 'apps',
    ddType: 'two-column',
    children: [
      {
        displayName: 'Chat',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/chat',
      },
      {
        displayName: 'Calendar',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/calendar',
      },
      {
        displayName: 'Email',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/email/inbox',
      },
      {
        displayName: 'Contacts',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/contacts',
      },
      {
        displayName: 'Courses',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/courses',
      },
      {
        displayName: 'Employee',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/employee',
      },
      {
        displayName: 'Notes',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/notes',
      },
      {
        displayName: 'Tickets',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/tickets',
      },
      {
        displayName: 'Invoice',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/invoice',
      },
      {
        displayName: 'ToDo',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/todo',
      },
      {
        displayName: 'Taskboard',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/taskboard',
      },
      {
        displayName: 'Blog',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'apps/blog',
        children: [
          {
            displayName: 'Post',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'apps/blog/post',
          },
          {
            displayName: 'Detail',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route:
              'apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
          },
        ],
      },
    ],
  },
  {
    displayName: 'Ui',
    iconName: 'solar:filters-line-duotone',
    route: 'ui-components',
    ddType: 'mega-menu',
    children: [
      {
        displayName: 'Badge',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/badge',
      },
      {
        displayName: 'Expansion Panel',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/expansion',
      },
      {
        displayName: 'Chips',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/chips',
      },
      {
        displayName: 'Dialog',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/dialog',
      },
      {
        displayName: 'Lists',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/lists',
      },
      {
        displayName: 'Divider',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/divider',
      },
      {
        displayName: 'Menu',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/menu',
      },
      {
        displayName: 'Paginator',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/paginator',
      },
      {
        displayName: 'Progress Bar',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/progress',
      },
      {
        displayName: 'Progress Spinner',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/progress-spinner',
      },
      {
        displayName: 'Ripples',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/ripples',
      },
      {
        displayName: 'Slide Toggle',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/slide-toggle',
      },
      {
        displayName: 'Slider',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/slider',
      },
      {
        displayName: 'Snackbar',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/snackbar',
      },
      {
        displayName: 'Tabs',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/tabs',
      },
      {
        displayName: 'Toolbar',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/toolbar',
      },
      {
        displayName: 'Tooltips',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'ui-components/tooltips',
      },
    ],
  },
  {
    displayName: 'Pages',
    iconName: 'solar:document-text-line-duotone',
    route: '',
    children: [
      {
        displayName: 'Treeview',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'theme-pages/treeview',
      },
      {
        displayName: 'Pricing',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'theme-pages/pricing',
      },
      {
        displayName: 'Account Setting',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'theme-pages/account-setting',
      },
      {
        displayName: 'FAQ',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'theme-pages/faq',
      },
      {
        displayName: 'Landingpage',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'landingpage',
      },
      {
        displayName: 'Widgets',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'widgets',
        children: [
          {
            displayName: 'Cards',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'widgets/cards',
          },
          {
            displayName: 'Banners',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'widgets/banners',
          },
          {
            displayName: 'Charts',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'widgets/charts',
          },
        ],
      },
      {
        displayName: 'Charts',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'charts',
        children: [
          {
            displayName: 'Line',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/line',
          },
          {
            displayName: 'Gredient',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/gredient',
          },
          {
            displayName: 'Area',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/area',
          },
          {
            displayName: 'Candlestick',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/candlestick',
          },
          {
            displayName: 'Column',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/column',
          },
          {
            displayName: 'Doughnut & Pie',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/doughnut-pie',
          },
          {
            displayName: 'Radialbar & Radar',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/charts/radial-radar',
          },
        ],
      },
      {
        displayName: 'Auth',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/',
        children: [
          {
            displayName: 'Login',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication',
            children: [
              {
                displayName: 'Login 1',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/login',
              },
              {
                displayName: 'Boxed Login',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/boxed-login',
              },
            ],
          },
          {
            displayName: 'Register',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication',
            children: [
              {
                displayName: 'Login 1',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/side-register',
              },
              {
                displayName: 'Boxed Login',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/boxed-register',
              },
            ],
          },
          {
            displayName: 'Forgot Password',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Forgot Password',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/side-forgot-pwd',
              },
              {
                displayName: 'Boxed Forgot Password',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/boxed-forgot-pwd',
              },
            ],
          },
          {
            displayName: 'Two Steps',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication',
            children: [
              {
                displayName: 'Side Two Steps',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/side-two-steps',
              },
              {
                displayName: 'Boxed Two Steps',
                iconName: 'solar:round-alt-arrow-right-line-duotone',
                route: '/authentication/boxed-two-steps',
              },
            ],
          },
          {
            displayName: 'Error',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication/error',
          },
          {
            displayName: 'Maintenance',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: '/authentication/maintenance',
          },
        ],
      },
    ],
  },
  {
    displayName: 'Forms',
    iconName: 'solar:folder-2-line-duotone',
    route: 'forms',
    children: [
      {
        displayName: 'Form elements',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'forms/forms-elements',
        children: [
          {
            displayName: 'Autocomplete',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'forms/forms-elements/autocomplete',
          },
          {
            displayName: 'Button',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'forms/forms-elements/button',
          },
          {
            displayName: 'Checkbox',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'forms/forms-elements/checkbox',
          },
          {
            displayName: 'Radio',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'forms/forms-elements/radio',
          },
          {
            displayName: 'Datepicker',
            iconName: 'solar:round-alt-arrow-right-line-duotone',
            route: 'forms/forms-elements/datepicker',
          },
        ],
      },
      {
        displayName: 'File Upload',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/forms/file-upload',
      },
      {
        displayName: 'Form Layouts',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/forms/form-layouts',
      },
      {
        displayName: 'Form Horizontal',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/forms/form-horizontal',
      },
      {
        displayName: 'Form Vertical',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/forms/form-vertical',
      },
      {
        displayName: 'Form Wizard',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/forms/form-wizard',
      },
    ],
  },
  {
    displayName: 'Tables',
    iconName: 'solar:full-screen-square-line-duotone',
    route: 'tables',
    ddType: 'two-column',
    children: [
      {
        displayName: 'Basic Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/basic-table',
      },
      {
        displayName: 'Dynamic Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/dynamic-table',
      },
      {
        displayName: 'Expand Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/expand-table',
      },
      {
        displayName: 'Filterable Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/filterable-table',
      },
      {
        displayName: 'Footer Row Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/footer-row-table',
      },
      {
        displayName: 'HTTP Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/http-table',
      },
      {
        displayName: 'Mix Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/mix-table',
      },
      {
        displayName: 'Multi Header Footer',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/multi-header-footer-table',
      },
      {
        displayName: 'Pagination Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/pagination-table',
      },
      {
        displayName: 'Row Context Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/row-context-table',
      },
      {
        displayName: 'Selection Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/selection-table',
      },
      {
        displayName: 'Sortable Table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/sortable-table',
      },
      {
        displayName: 'Sticky Column',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/sticky-column-table',
      },
      {
        displayName: 'Sticky Header Footer',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: 'tables/sticky-header-footer-table',
      },
      {
        displayName: 'Data table',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/datatable/kichen-sink',
      },
    ],
  },
];
