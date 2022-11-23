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
    subTopic: [],
    hasSubTopic: false,
    path: '/topics',
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
]
