export interface Item {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  sold_quantity: number
  available_quantity: number
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  stop_time: string
  catalog_listing: boolean
  address: Address
  pictures: Pictures[]
  warranty: string
}

interface Address {
  state_id: string
  state_name: string
  city_id: string
  city_name: string
}

export interface Description {
  plain_text: string
}

interface Pictures {
  id: string
  url: string
  max_size: string
}
