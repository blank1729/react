import React from 'react'
import { LayoutProps } from '../../types/component'


interface modalprops extends LayoutProps {
    setShow : React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, setShow }: modalprops) => {
  return (
    <div className='bg-orange-200 opacity-40 w-screen h-screen m-auto'>
        <button onClick={()=>{setShow(false)}} className='text-xl bg-red-500 rounded-md hover:scale-105 absolute inset-0 '>close</button>
        {children}
    </div>
  )
}

export default Modal