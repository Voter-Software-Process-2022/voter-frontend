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
        topic: 'Party',
        path: '/topics/2',
      },
      {
        topic: 'MPS',
        path: '/topics/1',
      },
    ],
    hasSubTopic: true,
  },
]
