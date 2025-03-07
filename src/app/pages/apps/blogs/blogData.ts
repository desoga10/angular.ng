interface blogPosts {
  id: number;
  time: string;
  imgSrc: string;
  user: string;
  title: string;
  views: string;
  category: string;
  comments: number;
  featuredPost: boolean;
  date: string;
}

export const blogPosts: blogPosts[] = [
  {
    id: 1,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img9.jpg',
    user: '/assets/images/profile/user-1.jpg',
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    views: '9,125',
    category: 'Gadget',
    comments: 3,
    featuredPost: true,
    date: 'Mon, Dec 23',
  },
  {
    id: 2,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img2.jpg',
    user: '/assets/images/profile/user-2.jpg',
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    views: '9,125',
    category: 'Health',
    comments: 3,
    featuredPost: false,
    date: 'Sun, Dec 23',
  },
  {
    id: 3,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img3.jpg',
    user: '/assets/images/profile/user-3.jpg',
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    views: '9,125',
    category: 'Gadget',
    comments: 12,
    featuredPost: false,
    date: 'Sat, Dec 23',
  },
  {
    id: 4,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img4.jpg',
    user: '/assets/images/profile/user-4.jpg',
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    views: '9,125',
    category: 'Social',
    comments: 12,
    featuredPost: false,
    date: 'Sat, Dec 23',
  },
  {
    id: 5,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img5.jpg',
    user: '/assets/images/profile/user-1.jpg',
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    views: '9,125',
    category: 'Lifestyle',
    comments: 3,
    featuredPost: false,
    date: 'Mon, Dec 23',
  },
  {
    id: 6,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img6.jpg',
    user: '/assets/images/profile/user-2.jpg',
    title: 'Streaming video way before it was cool, go dark tomorrow',
    views: '9,125',
    category: 'Health',
    comments: 3,
    featuredPost: false,
    date: 'Sun, Dec 23',
  },
  {
    id: 7,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img8.jpg',
    user: '/assets/images/profile/user-3.jpg',
    title:
      'Apple is apparently working on a new accessibility for iOS',
    views: '9,125',
    category: 'Design',
    comments: 12,
    featuredPost: false,
    date: 'Sat, Dec 23',
  },
  {
    id: 8,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img9.jpg',
    user: '/assets/images/profile/user-4.jpg',
    title: 'After Twitter Staff Cuts, Survivors Face ‘Radio Silence',
    views: '9,125',
    category: 'Lifestyle',
    comments: 12,
    featuredPost: false,
    date: 'Sat, Dec 23',
  },
  {
    id: 9,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img10.jpg',
    user: '/assets/images/profile/user-1.jpg',
    title: 'Why Figma is selling to Adobe for $20 billion',
    views: '9,125',
    category: 'Design',
    comments: 3,
    featuredPost: false,
    date: 'Mon, Dec 23',
  },
  {
    id: 10,
    time: '2 mins Read',
    imgSrc: '/assets/images/blog/blog-img11.jpg',
    user: '/assets/images/profile/user-2.jpg',
    title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
    views: '9,125',
    category: 'Gadget',
    comments: 3,
    featuredPost: false,
    date: 'Sun, Dec 23',
  },
];
