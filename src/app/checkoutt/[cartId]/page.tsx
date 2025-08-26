import React from 'react'
import CheckOut from '../_Componenets/CheckOut'


export default async function page({params}: { params: Promise<{ cartId: string }>}) {
  
  const {cartId} = await params;
  return (
    <div> <CheckOut id={cartId} /> </div>
  )
}
