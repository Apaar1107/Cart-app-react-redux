import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {



  const{cartItems,shipping,subtotal,tax,total}=useSelector(state=>state.cart);
const dispatch =useDispatch();
  const inc=(id)=>{
        dispatch({
          type:"addToCart",
          payload:{id},
        })
        dispatch({
          type:"calculatePrice",
          
        })
  }

  const dec=(id)=>{
    dispatch({
      type:"dec",
      payload:id,
    });
   
    dispatch({
      type:"calculatePrice",
      
    })
}

const deleteHandler=(id)=>{
  dispatch({
    type:"deleteFromCart",
    payload:id,
  })
  dispatch({
    type:"calculatePrice",
    
  })
}
  
  return (
    <div className='cart'>

      <main>


        { cartItems.length>0 ?  cartItems.map((i)=>(

           <CartItem
            imgsrc={i.imgsrc}
              id={i.id}
              price={i.price}
              name={i.name}
               qty={i.qty}
               key={i.id}
               inc={inc}
               dec={dec}
               deleteHandler={deleteHandler}
              />
        )): <h1>No item</h1>}
        
       
        
      </main>

      <aside>

        <h2>Sub Total ${subtotal}</h2>
        <h2>Shipping ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  )
}

const CartItem=({imgsrc,price,name,inc,dec,id,deleteHandler,qty})=>{
      return(    
     <div className="cartitem">
       <img src={imgsrc} alt="item" />
       <article>
        <h3>{name}</h3>
        <p>${price}</p>
       </article>

       <div>
        <button onClick={()=>{inc(id)}}>+</button>
        <p> {qty}</p>
        <button onClick={()=>{dec(id)}}>-</button>
       </div>
       <AiFillDelete onClick={()=>{deleteHandler(id)}} />
     </div>
      )
}

export default Cart;