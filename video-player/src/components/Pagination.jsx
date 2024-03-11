import React, { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const Pagination = ({buttons, setButtons, limit}) => {


    const [button, setButton] = useState(0)

      
    const totalButtons = 90/limit
    const buttonArray = new Array(totalButtons).fill(1)
    setButton(buttonArray)


  return (
    <div className='flex justify-center'>
        {button && button.map((item, i)=>{
            return (
                <button className='mx-2 border border-gray-600 w-10 h-10 bg-blue-900 rounded hover:bg-blue-700' onClick={()=>setButtons(i+1)} disabled={buttons==i+1} >{i+1}</button>
            )
        })}
    </div>
  )
}

export default Pagination