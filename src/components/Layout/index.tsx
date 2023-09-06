import React from 'react'
import NavBar from '../NavBar'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main className='m-auto pb-[20px] px-[20px] lg:px-[240px]'>
        {children}
      </main>
    </div>
  )
}

export default Layout
