import Price from '@/Helpers/Price'
import { Item } from '@/models/items'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  item: Item
}

function Item({ item }: Props) {
  return (
    <Link key={item.id} href={`/items/${item.id}`}>
      <div className='flex gap-5 pt-5 pb-5 border border-b-[1px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_5px] transition-all duration-300 ease-out hover:bg-gray-100'>
        <div>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={100}
            height={100}
            className='object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-lg'>{item.title}</p>
          <Price price={item.price} currency_id={item.currency_id} />
        </div>
        <span className='ml-auto opacity-50 capitalize text-sm pr-[15px]'>
          <i>{item.address.city_name}</i>
        </span>
      </div>
    </Link>
  )
}

export default Item
