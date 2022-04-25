import React from 'react'
import './App.css'
export default function Products({product,basket,setBasket}) {

    const basketItem = basket.find(item=>item.id === product.id)
    const addBasket = () =>{
        const checkBasket = basket.find(item=>item.id === product.id)
            if(checkBasket){
                checkBasket.amount += 1
                setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
            }else{
                setBasket([...basket,{
                    id: product.id,
                    amount:1
                }])
            }}
    const deleteBasket = () =>{
        const checkBasket = basket.find(item=>item.id === product.id)
        const allBasket = basket.filter(item=>item.id !== product.id)
        checkBasket.amount -= 1
            if(checkBasket.amount === 0){
                setBasket([...allBasket])
            }
            else{
                setBasket([...allBasket,checkBasket])
            }}
return (
    <div className='detailsBox'>
            <img src={product.photo}/>
            <h4>{product.title}</h4>
            <h4>$ {product.price}</h4>
        <div className='liFooter'>
            <button className='deleteBtn' disabled={!basketItem} onClick={deleteBasket} >-</button>
            <span className='amount'>{basketItem && basketItem.amount || 0}</span>
            <button className='addBtn' onClick={addBasket} >+</button>
        </div>
    </div>
    
)}
