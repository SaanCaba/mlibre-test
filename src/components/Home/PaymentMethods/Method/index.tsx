import React from 'react'
interface Props {
  method: string
  description: string
  children: React.ReactNode
}

function Method({ method, description, children }: Props) {
  return (
    <div className='flex p-4 flex-1 gap-3'>
      <div className='flex items-center p-4 border-red-100 rounded-full border-[1px] cursor-pointer'>
        {children}
      </div>
      <div className='flex flex-col'>
        <span className='text-lg'>{method}</span>
        <span className='text-blue-500 text-sm cursor-pointer hover:text-blue-800'>
          {description}
        </span>
      </div>
    </div>
  )
}

export default Method
