export interface MenuList {
  topic: string
  subTopic: {
    topic: string
    path: string
  }[]
  hasSubTopic: boolean
  path?: string
}
