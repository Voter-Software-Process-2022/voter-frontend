import type { MenuList } from '../interfaces/menu'

export const MENU_LIST: MenuList[] = [
  {
    topic: 'Home',
    subTopic: [],
    hasSubTopic: false,
    path: '/',
  },
  {
    topic: 'Vote',
    subTopic: [
      {
        topic: 'Vote 1',
        path: '/vote/1',
      },
      {
        topic: 'Vote 2',
        path: '/vote/2',
      },
    ],
    hasSubTopic: true,
  },
  {
    topic: 'Information',
    subTopic: [
      {
        topic: 'Info 1',
        path: '/info/1',
      },
      {
        topic: 'Info 2',
        path: '/info/2',
      },
    ],
    hasSubTopic: true,
  },
  {
    topic: 'About',
    subTopic: [],
    hasSubTopic: false,
    path: '/about',
  },
]
