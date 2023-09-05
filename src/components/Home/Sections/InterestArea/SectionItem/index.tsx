import Price from '@/Helpers/Price'
import { Item } from '@/models/items'
import Image from 'next/image'
import React from 'react'

interface Props {
  item: Item
}

function SectionItem({ item }: Props) {
  return (
    <div className='bg-white flex flex-col gap-2 p-3 max-w-[240px]'>
      <div className='flex justify-center'>
        <div className='h-[200px] w-[200px] '>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={120}
            height={120}
            className='h-full w-full object-contain'
          />
        </div>
      </div>
      <Price price={item.price} currency_id={item.currency_id} />
      <span>{item.title}</span>
    </div>
  )
}

export default SectionItem
