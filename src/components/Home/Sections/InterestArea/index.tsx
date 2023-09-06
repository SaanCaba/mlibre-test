import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
}

function ProductsSection({ title, children }: Props) {
  return (
    <div className='flex mt-4 flex-col gap-3'>
      <div className='flex gap-3 items-end lg:justify-start justify-center'>
        <span className='text-2xl'>{title}</span>
        <span className='text-sm text-blue-500 cursor-pointer'>Ver más</span>
      </div>
      <div className='flex items-center flex-col lg:flex-row lg:w-full  lg:justify-between gap-10 justify-center'>
        {children}
      </div>
    </div>
  )
}

export default ProductsSection
