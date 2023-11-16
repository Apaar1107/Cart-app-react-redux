import { createReducer } from "@reduxjs/toolkit";

export const cartReducer=createReducer(
    {
        cartItems:[],
        shipping:0,
        subtotal:0,
        tax:0,
        total:0,
    },{

        addToCart:(state,action)=>{
            const item=action.payload;
            const isItem= state.cartItems.find((i)=>i.id===item.id);

            if(isItem)
            {
                state.cartItems.forEach((i=>{
                   if(i.id===item.id){
                     i.qty++;
                   }
                }
                ))

            }else{
                state.cartItems.push(item);
            }
        },
        dec:(state,action)=>{
            const Item= state.cartItems.find((i)=>i.id===action.payload);
            if(Item.qty>1)
            Item.qty--;
           

        },
        deleteFromCart:(state,action)=>{
           state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload)
        },
        calculatePrice:(state)=>{
            let sum=0;
            state.cartItems.forEach((i)=>sum+=i.price*i.qty)
            state.subtotal=sum;
            state.shipping=state.subtotal>1000?0:100;
            state.tax=+((state.subtotal*0.18)/100).toFixed();
            state.total=state.shipping+state.subtotal+state.tax;


        }
    },
    
    );