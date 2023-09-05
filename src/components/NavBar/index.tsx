import { useRouter } from 'next/router'
import React, { useRef } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import styles from './index.module.css'

function NavBar() {
  const router = useRouter()
  const inputRef = useRef<null | HTMLInputElement>(null)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({
      pathname: '/items',
      query: {
        search: inputRef.current?.value
      }
    })
  }
  return (
    <header className='h-16  bg-meli flex items-center'>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='m-auto px-[240px] w-full flex  flex-1'
      >
        <input
          ref={inputRef}
          className={`h-12 rounded-sm flex-1 px-4  ${styles.inputSearch}`}
          type='text'
          placeholder='Producto...'
          required
        />
        <button
          className='bg-white py-4 h-12 border-l-[1px] px-4  transition-all duration-700 ease-in hover:bg-zinc-300'
          type='submit'
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>
    </header>
  )
}

export default NavBar
