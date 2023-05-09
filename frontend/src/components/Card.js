import React, {useState} from "react"
import '../App.css'
import data from '../database/data.json'


export default function Card(){
   

   return(
      <div className=" mt-3 h-[80vh] w-[100vw] grid grid-flow-row grid-cols-3 place-items-center gap-3">
         {data.map((user, i)=>{
            return(
               <div 
                  
                  key={i} 
                  className="w-[20vw] h-[60vh] p-3 pb-5 border-2 border-solid border-green-600 flex flex-col justify-between
                                       hover:shadow-2xl  hover:scale-105 hover:rounded-md hover:bg-green-50 transition-all duration-[.4s] ease-in-out"
               >  

                  <img 
                     src={user.pic} 
                     alt="user Pic" 
                     className={`mb-1 w-full h-[50%] object-cover object-left
                                 hover:rounded-md transition-all duration-[.4s] ease-in-out 
                              `}
                  /> 

                  <div>
                     <h1 className="text-3xl text-green-600">
                        {user.name}
                     </h1>

                     <h2 className="text-2xl font-bold text-green-400">
                        {user.passion}
                     </h2>
                     <p className="text-xl">
                        {user.description}
                     </p>
                  </div>
               </div>
            )
         })}

      </div>
   )

}