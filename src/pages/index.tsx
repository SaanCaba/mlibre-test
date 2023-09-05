import { API_SEARCH_URL } from '@/constants'
import { Item } from '@/models/items'
import MeliPromoImg from '@/images/meli_promo.webp'
import Image from 'next/image'
import PaymentMethods from '@/components/PaymentMethods'

interface Props {
  items: Item[]
}

export default function Home({ items }: Props) {
  return (
    <div>
      <Image
        src={MeliPromoImg}
        alt='Promo img'
        width={0}
        className='w-full'
        height={300}
      />
      <PaymentMethods />
    </div>
  )
}
