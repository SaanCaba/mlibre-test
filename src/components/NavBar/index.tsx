import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import styles from './index.module.css'
import Link from 'next/link'
import { useItems } from '@/hooks/useItems'
import DisneyImg from '@/images/disney-promo.webp'
import Image from 'next/image'
import NavBarSections from './Sections'

function NavBar() {
  const router = useRouter()
  const inputRef = useRef<null | HTMLInputElement>(null)
  const { researchItems } = useItems()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({
      pathname: '/items',
      query: {
        search: inputRef.current?.value
      }
    })
    await researchItems(inputRef.current?.value as string)

    inputRef.current!.value = ''
  }
  return (
    <header
      id='top'
      className='lg:h-24   px-[20px] lg:px-[380px] p-2  bg-meli flex flex-col'
    >
      <div className={`${styles.navbarGrid} w-full`}>
        <div className='min-w-[50px]  flex items-center mr-auto cursor-pointer'>
          <Link href='/'>
            <AiFillHome size={24} />
          </Link>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='m-auto  w-full flex  flex-1 relative'
        >
          <input
            ref={inputRef}
            className={`h-12 rounded-sm flex-1 px-4  ${styles.inputSearch}`}
            type='text'
            placeholder='Buscar productos, marcas y más...'
            required
          />
          <button
            className='bg-white py-4 h-12 border-l-[1px] absolute right-0 px-4'
            type='submit'
          >
            <AiOutlineSearch size={20} />
          </button>
        </form>
        <div className='ml-auto'>
          <Image
            width={400}
            height={30}
            src={DisneyImg}
            className={styles.disneyImg}
            alt='disney promo'
          />
        </div>
      </div>
      <NavBarSections />
    </header>
  )
}

export default NavBar
