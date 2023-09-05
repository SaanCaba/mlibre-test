import { API_SEARCH_URL } from '@/constants'
import { Item } from '@/models/items'
import MeliPromoImg from '@/images/meli_promo.webp'
import Image from 'next/image'
import PaymentMethods from '@/components/Home/PaymentMethods'
import ProductsSection from '@/components/Home/Sections/InterestArea'
import SectionItem from '@/components/Home/Sections/InterestArea/SectionItem'

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
      <ProductsSection title='También puede interesarte'>
        {items.map((el) => {
          return <SectionItem key={el.id} item={el} />
        })}
      </ProductsSection>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_SEARCH_URL}q=iphone&limit=5`)
  const { results: items } = (await response.json()) as { results: Item[] }

  return {
    props: {
      items
    }
  }
}
