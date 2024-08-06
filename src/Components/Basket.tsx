import React, { ReactNode } from 'react'
interface Props{
    item:string,
    children:ReactNode
}
const Basket = ({item,children}:Props) => {
  return (
    <div>
      <h1> {item}</h1>
       {children}
        </div>
  )
}

export default Basket