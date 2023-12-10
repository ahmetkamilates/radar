import React from 'react'
import { MapContainer, TileLayer,Marker,Popup ,Polyline} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import {useSelector} from "react-redux"
const MapView = ({openModal}) => {
 const state = useSelector((store) => store)

  

  return (
    <div> <MapContainer 
    center={[38.795923, 35.366686]} 
    zoom={6} 
    scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     {
      state.flights.map((fly) =>  <Marker key={fly.id} position={[fly.lat,fly.lng]}>
      <Popup>
       <div className='popup'>
        <span>{fly.code}</span>
        <button onClick={() => openModal(fly.id)}>Detay</button>
       </div>
      </Popup>
    </Marker>)
     }
     <Polyline positions={state.route}/>
    </MapContainer>
    </div>
  )
}

export default MapView 