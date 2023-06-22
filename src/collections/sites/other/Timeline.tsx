import React, { useRef } from 'react'
import TimelineElement from './TimelineElement'

function Timeline() {

    const id = "a2"
    const ele = document.querySelector(`#${id}`)
    const handleMousedown = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        console.log("mouse down")
        ele?.classList.add("scale-105")
    }
    const handleMouseUp = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        ele?.classList.remove("scale-105")
    }

  return (
    <main>
        <div className='w-screen h-[100px] p-1 bg-blue-300'>
            
            {/* inner element */}
            <div className='w-full h-full p-1 bg-white rounded-md flex gap-1'>

                {/* timeline compoent */}
                <TimelineElement name="Morning" width={25} color="orange" id={id} handleMousedown={handleMousedown} handleMouseUp={handleMouseUp}/>
                {/* <TimelineElement name="Evening" width={50} color="red" /> */}


            </div>  
        </div>
    </main>
  )
}

export default Timeline