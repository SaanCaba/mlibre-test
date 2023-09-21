import Item from '@/components/Item'
import Loading from '@/components/Loading'
import { API_SEARCH_URL } from '@/constants'
import { Item as ItemType } from '@/models/items'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

interface Props {
  items: ItemType[]
  query: string
}

function ItemsPage({ items, query }: Props) {
  const [offset, setOffset] = useState(0)
  const [loadedItems, setLoadedItems] = useState<ItemType[]>(items)
  const [loading, setLoading] = useState<boolean>(false)
  if (items.length === 0) {
    return (
      <h1 className='text-center pt-5 text-3xl'>
        No se encotraron productos para tu búsqueda!
      </h1>
    )
  }

  const loadMoreItems = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `${API_SEARCH_URL}${query}&limit=7&offset=${offset + 1}`
      )
      const { results: newItems } = (await response.json()) as {
        results: ItemType[]
      }
      const concatItems = [...loadedItems, ...newItems]
      setLoadedItems(concatItems)
      setOffset((offset) => offset + 1)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section>
      <article className='grid bg-white gap-5'>
        {loadedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </article>
      <div className='flex justify-center mt-4'>
        {loading ? (
          <Loading />
        ) : (
          <button
            className='bg-meli rounded-lg flex flex p-2 gap-2 transition-all duration-300 ease-in hover:shadow-custom'
            onClick={loadMoreItems}
          >
            <span className='text-xl '>Cargar más...</span>
          </button>
        )}
      </div>
    </section>
  )
}

export default ItemsPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(
    `${API_SEARCH_URL}${query.search}&limit=7&offset=0`
  )
  const { results: items } = (await response.json()) as { results: Item[] }

  return {
    props: {
      items,
      query: query.search
    }
  }
}
