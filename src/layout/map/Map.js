import React,{ useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Routing from './Routes';
import './style.css'

export default function Map() {
  const [loc,setLoc]=useState({})
  const [longt,setLongt]=useState(0);
  const[done,setdone]=useState(false);

  useEffect(()=>{
    const location=navigator.geolocation.getCurrentPosition(position=>{
      setLoc(position.coords);
      setLongt(position.coords.longitude);
      setdone(true)
    })
  },[])//latitude,longitude

  return (
    <>
      {done &&
        <MapContainer 
          center={[loc.latitude,loc.longitude]} 
          zoom={13} 
          scrollWheelZoom={true}
          id="mapId">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Routing cordinat={loc}/>
        </MapContainer>
      }
    </>
  )
}
