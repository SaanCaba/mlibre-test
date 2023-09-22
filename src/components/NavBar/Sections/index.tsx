import React, { useMemo } from 'react'
import styles from './index.module.css'
import { CiLocationOn } from 'react-icons/ci'
import { BiUserCircle, BiBell, BiCart, BiCar } from 'react-icons/bi'

function NavBarSections() {
  const sections = useMemo(() => {
    return [
      'Categorías',
      'Ofertas',
      'Historial',
      'Supermercado',
      'Moda',
      'Vender',
      'Ayuda'
    ]
  }, [])
  return (
    <div className={`${styles.sectionGrid}`}>
      <div className='flex gap-1'>
        <CiLocationOn size={26} />
        <div className='flex flex-col'>
          <span className='text-xs'>Enviar a Santiago</span>
          <span className='text-xs font-bold'>Cuzco 2031</span>
        </div>
      </div>
      <div className='mt-auto'>
        <ul className='flex gap-5 text-sm text-gray-500/70'>
          {sections.map((section, i) => {
            return <li key={i}>{section}</li>
          })}
        </ul>
      </div>
      <div className=' flex gap-1'>
        <BiUserCircle size={25} />
        <div className='mt-auto w-full flex justify-between gap-5 text-sm'>
          <span className=''>Santiago</span>
          <span>Mis compras</span>
          <span>Favoritos</span>
          <BiBell size={22} />
          <BiCart size={22} />
        </div>
      </div>
    </div>
  )
}

export default NavBarSections
