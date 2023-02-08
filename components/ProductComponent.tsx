import Image from 'next/image'
import React from 'react'
import coke from "../public/coke.png";


const ProductComponent = () => {
  return (
    <div className='product'>
        <div className='img'>
            <Image src={coke} alt=''/> 
        </div>
     
      <div>
        <p className='product_name'>Product name</p>

        <p className='product_brand'>Brand</p>

        <p className='product_price'>$785</p>
      </div>
    </div>
  )
}

export default ProductComponent