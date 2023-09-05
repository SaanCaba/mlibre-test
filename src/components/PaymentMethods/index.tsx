import React from 'react'
import Method from './Method'
import { AiFillCreditCard, AiOutlinePlus } from 'react-icons/ai'
import { BsCreditCard2FrontFill, BsCashCoin } from 'react-icons/bs'
import { PiHandCoinsDuotone } from 'react-icons/pi'

import styles from './index.module.css'

function PaymentMethods() {
  return (
    <div className={`bg-white w-full  mt-4 rounded-lg ${styles.grid}`}>
      <div className='flex '>
        <Method
          description='Ver promociones bancarias'
          method='Tarjeta de crédito'
        >
          <AiFillCreditCard className='text-blue-500' />
        </Method>
        <Method description='Ver más' method='Tarjeta de débito'>
          <BsCreditCard2FrontFill className='text-blue-500' />
        </Method>
        <Method
          description='Conocé Mercado Crédito'
          method='Cuotas sin tarjeta'
        >
          <PiHandCoinsDuotone className='text-blue-500' />
        </Method>
        <Method description='Ver más' method='Efectivo'>
          <BsCashCoin className='text-blue-500' />
        </Method>
      </div>

      <div className='border-l-[1px] border-gray flex items-center justify-center'>
        <button className='border-none rounded-full p-2 bg-blue-500 h-min'>
          <AiOutlinePlus className='text-white' />
        </button>
      </div>
    </div>
  )
}

export default PaymentMethods
