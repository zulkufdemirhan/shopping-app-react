import React from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import { useState } from 'react'
import BasketUrun from './BasketUrun'
import photo from './zd.jpg'
import './App.css'

export default function Icerik({total,order,basket,product,cancel}) {

const [isDisplay , setIsDisplay]=useState(true);

return (

    <div className='ıcerik'>
                <div className={isDisplay ? "deneme" : "orderBox"}>

                    <div className='productsOrder'>
                        {basket.map(item => (
                            <BasketUrun item={item} product={product.find(i=>i.id === item.id)}/>
                        ))}
                    </div>

                    <div className='orderAction'>
                            <button className='cancel' onClick={cancel}>Cancel</button>  
                            <h3>$ {total}</h3>
                            <button className='order' onClick={order}>Order</button>
                    </div>

                </div>


            
                <h3 className='baslık'>Drink</h3>
                <h3 className='baslık' >Food</h3>
                <h3 className='baslık' >Fruit</h3>
                <h3 className='baslık' >Vegetable</h3>
                <h3 className='baslık' >Others</h3>
                <FaShoppingBasket size="25px" className='basketIcon' onClick={()=> setIsDisplay(!isDisplay)} />
                <img  className='ben' src={photo}/>
    </div>
)
}



