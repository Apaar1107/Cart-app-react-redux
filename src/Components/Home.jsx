import React from 'react'
import ProductCard from './ProductCard'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch=useDispatch();
  const addToCartHandler=(options)=>{
       console.log(options);
       dispatch(
         {
           type:"addToCart",
           payload:options
          }
          )
          dispatch({
            type:"calculatePrice",
            
          })
          toast.success("Added To cart")
  }

    const productList=[{
        name:"Mac Book",
        price:"12000",
        id:"hdtrstyrt",
        imgsrc:"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
    },
    {
        name:"Apple Ipad",
        price:"10000",
        id:"lhjtdyrs",
        imgsrc:"https://www.stuff.tv/wp-content/uploads/sites/2/2021/09/img_5745.jpg?w=1080",
    }
]
  return (
    <div className='home'>
      {productList.map((i)=>(<ProductCard 
      
      name={i.name} 
      price={i.price}
      imgsrc={i.imgsrc}
      key={i.id}
      id={i.id}
      handler={addToCartHandler}
    
      
      />))}

    </div>
  )
}

export default Home