import React from 'react'

const ProductCard = ({name,id,imgsrc,handler,price}) => {
  return (
    <div className='productcard'>
        <img src={imgsrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,imgsrc,qty:1})}>Add to Cart</button>
    </div>
  )
}

export default ProductCard