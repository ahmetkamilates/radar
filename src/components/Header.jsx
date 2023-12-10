import React from 'react'
import {useSelector} from "react-redux"
const Header = () => {
 const state =  useSelector((store) => store)
  return (
    <header>
       <div>
        <img src="/plane.png" alt="logo" />
        <h3>Uçuş Radarı</h3>
       </div>  
        <p>{state.isLoading 
        ? "Uçuşlar aranıyor.." 
        : !state.isError 
        ? `${state.flights.length} uçuş bulundu` 
        : "Sorun oluştu"}
        </p>
    </header>
  )
}

export default Header