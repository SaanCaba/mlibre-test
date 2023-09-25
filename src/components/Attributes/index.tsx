import { Attribute } from '@/models/items'
import React, { useMemo } from 'react'

interface Props {
  attributes: Attribute[]
}

function Attributes({ attributes }: Props) {
  const shortAttr = useMemo(() => {
    return attributes.slice(0, 5)
  }, [])
  return (
    <ul>
      {shortAttr.map((attr) => {
        return (
          <li key={attr.id} className='flex gap-2 list-decimal text-gray-500'>
            <span>{attr.name}:</span>
            <span className='font-semibold'>{attr.value_name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Attributes
