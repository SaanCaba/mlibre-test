import Price from '@/Helpers/Price'
import SidePicture from '@/components/SidePicture'
import { API_ITEM_URL } from '@/constants'
import { Description, Item } from '@/models/items'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'

interface Props {
  item: Item
  description: string
}

function ItemPage({ item, description }: Props) {
  const pictures = useMemo(() => {
    return item.pictures.map((picture) => {
      return picture.url
    })
  }, [])
  const [currentPicture, setCurrentPicture] = useState(pictures[0])

  return (
    <section className='bg-white min-h-screen shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black'>
      <article>
        <div className='flex'>
          <div className='bg-white pt-2 pb-2 flex flex-col w-[90px] gap-5 pl-2 pr-2 '>
            {pictures.map((pic) => (
              <SidePicture
                key={pic}
                title={item.title}
                picture={pic}
                setCurrentPicture={setCurrentPicture}
              />
            ))}
          </div>
          <div className='min-h-[100%] flex justify-center w-[550px] items-center'>
            <div className='pr-[30px]'>
              <Image
                src={currentPicture}
                alt={item.title}
                width={340}
                height={340}
                className='object-contain m-auto rounded-sm w-full h-full'
              />
            </div>
          </div>

          <div className='flex flex-col pt-5'>
            <h1 className='text-2xl pb-3 font-bold'>{item.title}</h1>
            <Price price={item.price} currency_id={item.currency_id} />
          </div>
        </div>

        <div className='p-3'>
          <hr className='border border-[0.4] border-black mb-4' />
          <span className='text-lg'>Desripción</span>
          <p className='opacity-50'>{description}</p>
        </div>
      </article>
    </section>
  )
}

export default ItemPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseItemProm = fetch(`${API_ITEM_URL}${params?.id}`).then(
    (res) => res.json() as unknown as Item
  )
  const responseDescriptionProm = fetch(
    `${API_ITEM_URL}${params?.id}/description`
  ).then((res) => res.json() as unknown as Description)

  const [item, { plain_text }] = await Promise.all([
    responseItemProm,
    responseDescriptionProm
  ])

  return {
    props: {
      item,
      description: plain_text
    }
  }
}
