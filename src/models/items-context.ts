import { Item } from './items'

export interface ItemsContext {
  items: Item[]
  loadMoreItems: () => Promise<void>
  loadFirstItems: (items: Item[]) => void
  researchItems: (query: string) => Promise<void>
  loading: boolean
}
