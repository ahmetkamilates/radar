import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import { options2 } from '../constants'
import { setRoute } from '../redux/slices/flightSlice'
const DetailModal = ({closeModal,detailId}) => {

   const dispatch = useDispatch()

    const [d,setDetail]= useState(null)
    useEffect(() => {
        setDetail(null)
        axios.
        get(`https://flight-radar1.p.rapidapi.com/flights/detail?=${detailId}`
        ,options2)
        .then((res) => {
            setDetail(res.data)
            dispatch(setRoute(res.data.trail))
        })
        
    },[detailId])
    

  return (
    <div className='detail-outer'>
        <div className='detail-inner'>
        <p className='close'>
            <span onClick={closeModal}>X</span>
        </p>
      {!d ? (<p>Yükleniyor...</p>) : (
        <>
        <h2>{d.aircraft.model.text}</h2>
        <h2>{d.aircraft.model.code}</h2>
        <p>
             <span>Kuyruk No:
            </span> 
            <span>{d.aircraft.registration}</span>
            </p>
            <img src={d.aircraft?.images?.large[0]?.src} alt="plane" />
            <p>
                <span>Kalkış: </span>
                <a target='_blank' href={d.airport.origin?.website}>
                    {d.airport.origin?.name}</a>
            </p>
            <p>
                <span>Hedef: </span>
                <a target='_blank' href={d.airport.destination?.website}>
                    {d.airport.destination?.name}</a>
            </p>
            <p>
                <span>Durum:</span>
                <span className={`status ${d.status.icon}`}>
                    {setDetail.status.text}
                    </span>
            </p>
        </>
      )}
        </div>
    </div>
  )
}

export default DetailModal