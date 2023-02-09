import { RootState } from '@/features/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Suggessions = () => {

      const searchContent=useSelector((state:RootState)=>state.search.search)
  return (
    <div   >
      <div>

      </div>
    </div>
  )
}

export default Suggessions