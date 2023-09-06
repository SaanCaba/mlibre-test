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
      } rounded-sm lg:min-h-[50px] min-h-[80px] w-[80px] lg:w-[50px]`}
    >
      <Image
        src={picture}
        alt={title}
        width={50}
        height={50}
        className='h-full max-h-[80px] max-w-[80px] lg:max-h-[50px] lg:max-w-[50px] w-full object-contain'
      />
    </div>
  )
}

export default SidePicture
