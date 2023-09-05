import Price from '@/Helpers/Price'
import Loading from '@/components/Loading'
import usePicture from '@/hooks/usePicture'
import { Item } from '@/models/items'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  item: Item
}

function SectionItem({ item }: Props) {
  const { hdPicture, loading } = usePicture(item.id)
  return (
    <Link href={`/items/${item.id}`}>
      <div className='bg-white flex flex-col gap-2 p-3 max-w-[240px]'>
        <div className='flex justify-center'>
          <div className='h-[200px] w-[200px] flex items-center justify-center '>
            {loading ? (
              <Loading />
            ) : (
              <Image
                src={hdPicture}
                alt={item.title}
                width={120}
                height={120}
                className='h-full w-full object-contain'
              />
            )}
          </div>
        </div>
        <Price price={item.price} currency_id={item.currency_id} />
        <span>{item.title}</span>
      </div>
    </Link>
  )
}

export default SectionItem
