export interface RuleModalProps {
  topicId: string | undefined
  canVote: boolean
  isOpenRuleModal: boolean
  setIsOpenRuleModal: (value: boolean) => void
}
