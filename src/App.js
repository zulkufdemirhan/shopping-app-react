import React from 'react'
import { useState,useEffect } from 'react'
import Header from './component/Header'
import Products from './component/Products'
import product from './product.json'
import Icerik from './component/Icerik'
import {FaCheck,FaBan,FaLinkedin,FaGithub} from 'react-icons/fa'
import './App.css'

export default function App() {
  const [basket,setBasket]=useState([])
  const [total,setTotal]=useState(0)

  const sendOrder = () =>{
    setBasket([])
    const tost=document.querySelector(".tost");
    const message =document.querySelector(".message")
    tost.style.transform="translateY(6px)"
    message.style.display="flex";
    const noti = setTimeout(()=>{
      tost.style.transform="translateY(-5vh)"
    },1500)
    return()=>clearTimeout(noti)
  }

  const sendCancel = () =>{
    setBasket([])
    const tostCancel=document.querySelector(".tostCancel");
    tostCancel.style.transform="translateY(6px)"
    const tostOver = setTimeout(()=>{
      tostCancel.style.transform="translateY(-5vh)"
    },1500)
    return()=>clearTimeout(tostOver)
  }

  useEffect(()=>{
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (product.find(product => product.id === item.id).price))
      },0),
    )
  },[basket])
  const final = ()=>{
    const ulBox=document.querySelector(".ulBox")
    const lastMessage=document.querySelector(".lastMessage")
    ulBox.style.display="none"
    lastMessage.style.display="flex"
  }
  return (
    <div className='container '>
        <div className='tost'>
          <FaCheck size="15px"/>
          <h3>Your order has been received.</h3>
        </div>
        <div className='tostCancel'>
          <FaBan size="15px"/>
          <h3>Your order has been cancelled.</h3>
        </div>
          <span className='message'>1</span>
        <Header final={final} />
        <Icerik basket={basket} total={total} order={sendOrder} cancel={sendCancel} product={product}/>
        <div className='lastMessage'>
            <h1>Thank you for watching ...</h1>
            <h1 className='sign'>Zülküf Demirhan</h1> 
              <div className='social'>
                <FaLinkedin  className="link" size="60px" />
                <FaGithub className='git'  size="60px"  />
              </div>
        </div>
        <ul className='ulBox'>
            {product.map(product =>(
              <li className='liBox'>
                <Products key={product.id} basket={basket} setBasket={setBasket} product={product}/>
              </li>
            ))}
        </ul>
    </div>
  )
}

