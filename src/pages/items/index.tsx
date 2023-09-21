import { useState, useEffect } from 'react'
import Item from '@/components/Item'
import Loading from '@/components/Loading'
import { API_SEARCH_URL } from '@/constants'
import { useItems } from '@/hooks/useItems'
import { Item as ItemType } from '@/models/items'
import { GetServerSideProps } from 'next'

interface Props {
  items: ItemType[]
}

function ItemsPage({ items: firstItems }: Props) {
  const { items, loadMoreItems, loadFirstItems, loading } = useItems()
  useEffect(() => {
    if (firstItems.length > 0) {
      loadFirstItems(firstItems)
    }
  }, [])
  if (firstItems.length === 0) {
    return (
      <h1 className='text-center pt-5 text-3xl'>
        No se encotraron productos para tu búsqueda!
      </h1>
    )
  }

  const handleClick = async () => {
    try {
      await loadMoreItems()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
      <article className='grid bg-white gap-5'>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </article>
      <div className='flex justify-center mt-4'>
        {loading ? (
          <Loading />
        ) : (
          <button
            className='bg-meli rounded-lg flex flex p-2 gap-2 transition-all duration-300 ease-in hover:shadow-custom'
            onClick={handleClick}
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
