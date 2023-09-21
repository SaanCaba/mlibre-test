import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
function BackToTop() {
  return (
    <a href='#top'>
      <button className='fixed bottom-[20px] right-[30px] rounded-full bg-white p-2 duration-300 transition-all ease-in hover:shadow-custom'>
        <AiOutlineArrowUp size={30} />
      </button>
    </a>
  )
}

export default BackToTop
