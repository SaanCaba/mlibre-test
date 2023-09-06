import Price from '@/Helpers/Price'
import SidePicture from '@/components/SidePicture'
import { API_ITEM_URL } from '@/constants'
import { Description, Item } from '@/models/items'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { BiStoreAlt } from 'react-icons/bi'

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
    <section className='bg-white min-h-screen p-3 lg:p-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black'>
      <article>
        <div className='flex flex-col-reverse lg:flex-row lg:flex-none'>
          <div className='bg-white pt-2 pb-2 flex flex-col items-center lg:items-start w-full lg:w-[90px] gap-5 pl-2 pr-2 '>
            {pictures.map((pic) => (
              <SidePicture
                key={pic}
                title={item.title}
                picture={pic}
                setCurrentPicture={setCurrentPicture}
              />
            ))}
          </div>
          <div className='min-h-[500px] lg:min-h-[600px] flex justify-center lg:w-[550px] items-center'>
            <Image
              src={currentPicture}
              alt={item.title}
              width={340}
              height={340}
              className='object-contain max-h-[340px] max-w-[340px] m-auto rounded-sm'
            />
          </div>
          <div className='flex flex-col pt-5'>
            <h1 className='text-2xl pb-3 font-bold'>{item.title}</h1>
            <Price price={item.price} currency_id={item.currency_id} />
            <span className='text-lg'>
              <i>{item.warranty}</i>
            </span>
            <div className='pt-3 lg:w-[400px]'>
              <Link
                href={item.permalink}
                target='__blank'
                className='p-3 bg-meli flex items-center justify-center gap-2 w-max-[20px] text-black rounded-lg transition-all duration-300 ease-in hover:bg-meli/80'
              >
                <BiStoreAlt className='h-[25px] w-[25px]' size={20} />
                <span className='text-lg text-center lg:text-start'>
                  Ver en el sitio oficial de Mercado Libre
                </span>
              </Link>
            </div>
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
