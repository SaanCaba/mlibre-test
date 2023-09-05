import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  picture: string
  title: string
  setCurrentPicture: (val: string) => void
}

function SidePicture({ picture, title, setCurrentPicture }: Props) {
  const [onHover, setOnHover] = useState(false)

  const handleHover = () => {
    setOnHover(true)
    setCurrentPicture(picture)
  }

  return (
    <div
      key={picture}
      onMouseEnter={handleHover}
      onMouseLeave={() => setOnHover(false)}
      className={`${
        onHover ? 'border-[1px] border-blue-400' : 'border-[1px] border-black'
      } rounded-sm min-h-[50px] w-[50px]`}
    >
      <Image
        src={picture}
        alt={title}
        width={50}
        height={50}
        className='h-full max-h-[50px] max-w-[50px] w-full object-contain'
      />
    </div>
  )
}

export default SidePicture
