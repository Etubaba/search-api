import Image from 'next/image'
import React from 'react'
import SearchIcon from '../public/icons/Search.svg'

const SearchInput = ():JSX.Element => {
  return (
    <div>
        <Image alt='' src={SearchIcon}/>

        <input   type={'text'}/>
    </div>
  )
}

export default SearchInput