import { useContext } from 'react'
import { ItemsContext as ContextType } from '@/models/items-context'
import { ItemsContext } from '@/context/itemsContext'
export const useItems = (): ContextType => {
  const items = useContext<ContextType>(ItemsContext)
  return items
}
