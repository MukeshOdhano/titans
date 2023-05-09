
import React, { Component } from 'react'

function Nav(){
   return(
      <div className='navbar'>
         <ul className='w-[40vw] flex justify-between items-center text-2xl 
                        text-bold text-green-700  '
         >
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About us</a></li>
            <li  className='px-3 py-1 rounded-md font-bold bg-green-300 cursor-pointer
                            hover:rounded-full hover:text-green-100 hover:bg-green-500 transition-all duration-[.4s] ease-in '>     
               <a href='/'>
                  Login
               </a>
            </li>
         </ul>
      </div>
   )
}

export default class Header extends Component {
   render() {
      return (
         <div className='m-0 py-5 px-10 text-center w-screen bg-primary text-green-500 
                         flex flex-row items-center justify-between'
         >
            <h1 className='group text-3xl font-bold relative'>
               Titan
            </h1>
            <Nav/>
         </div>
      )
   }
}
