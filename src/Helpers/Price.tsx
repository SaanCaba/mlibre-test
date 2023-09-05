import React from 'react'

function Price({ price, currency_id }: { price: number; currency_id: string }) {
  return (
    <span className='text-2xl'>
      {Number(price).toLocaleString('es-AR', {
        style: 'currency',
        currency: currency_id
      })}
    </span>
  )
}

export default Price
