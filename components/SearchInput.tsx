import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import SearchIcon from '../public/icons/Search.svg'
import { AppDispatch, RootState } from "../features/store";
import { useDispatch } from 'react-redux';
import { handleSearch, handleSearchingState } from '../features/searchSlice';

const SearchInput = ():JSX.Element => {
    const searchContent=useSelector((state:RootState)=>state.search.search)
    const is_searching:boolean=useSelector((state:RootState)=>state.search.is_searching)
    const dispatch:AppDispatch=useDispatch()


  return (
    <div className={!is_searching? 'search':'searching'}>
        <Image className='search-icon' alt='' src={SearchIcon}/>
        <input 
        onFocus={()=>dispatch(handleSearchingState(true))}
        // onBlur={()=>dispatch(handleSearchingState(false))}
         value={searchContent} 
         onChange={(e:React.FormEvent<HTMLInputElement>)=>dispatch(handleSearch(e.currentTarget.value))} 
         type={'text'}/>
    </div>
  )
}

export default SearchInput