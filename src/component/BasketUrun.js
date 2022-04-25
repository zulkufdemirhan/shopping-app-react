import React from 'react'
import './App.css'

export default function BasketUrun({item,product}) {
return (
    <div className='myProduct'>
            <img src={product.photo} />{product.title} x {item.amount}
    </div>
)}
