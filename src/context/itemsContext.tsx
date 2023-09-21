import { API_SEARCH_URL } from '@/constants'
import { Item } from '@/models/items'
import { type ItemsContext as ContextType } from '@/models/items-context'
import { useRouter } from 'next/router'
import React, { createContext, useState, useEffect } from 'react'

export const ItemsContext = createContext<ContextType>({
  items: [],
  loadMoreItems: async () => {},
  loadFirstItems: () => {},
  researchItems: async () => {},
  loading: false
})

interface Props {
  children: React.ReactNode
}

export function ItemsProvider({ children }: Props): React.ReactElement {
  const [items, setItems] = useState<Item[]>([])
  const [offset, setOffset] = useState(0)
  const [currentQuery, setCurrentQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const loadMoreItems = async () => {
    setLoading(true)
    const response = await fetch(
      `${API_SEARCH_URL}${currentQuery}&limit=7&offset=${offset + 1}`
    )
    const { results: newItems } = (await response.json()) as {
      results: Item[]
    }
    const concatItems = [...items, ...newItems]
    setItems(concatItems)
    setOffset((offset) => offset + 1)
    setLoading(false)
  }
  const loadFirstItems = (items: Item[]) => {
    setItems(items)
  }
  const researchItems = async (query: string) => {
    setItems([])
    setLoading(true)
    const response = await fetch(`${API_SEARCH_URL}${query}&limit=7&offset=0`)
    const { results: newItems } = (await response.json()) as {
      results: Item[]
    }
    setCurrentQuery(query)
    setItems(newItems)
    setOffset(0)
    setLoading(false)
  }
  useEffect(() => {
    setCurrentQuery(router.query.search as string)
  }, [])
  return (
    <ItemsContext.Provider
      value={{ items, loadMoreItems, loadFirstItems, researchItems, loading }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
