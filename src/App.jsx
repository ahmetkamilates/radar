import {useDispatch} from "react-redux"
import { useEffect, useState } from 'react'
import ListView from "./pages/ListView"
import Header from './components/Header'
import MapView from './pages/MapView'
import { getFlights } from "./redux/actions/flightActions"
import DetailModal from "./components/DetailModal"

function App() {
 const dispatch = useDispatch()
   const [showMapView,setShowMapView] = useState()
   const {showDetail,setShowDetail} = useState(false)
   const {detailId,setDetailId} = useState(null)
    useEffect(() => {
      dispatch(getFlights())
    },[])

    const openModal = (id) => {
      setDetailId(id)
      setShowDetail(true)
    }
  return (
    
   <div>
    <Header/>
    <div className='view-buttons'>
     <button className={showMapView ? "active" : ""} onClick={() => setShowMapView(true)}>Harita Görünümü</button>
     <button className={!showMapView ? "active" : ""} onClick={() => setShowMapView(false)}>Liste Görünümü</button>
    </div>
    {showMapView ? (<MapView 
    openModal={openModal}
    />) : (
    <ListView openModal={openModal} />) }
    {
      showDetail && <DetailModal detailId={detailId} closeModal={() => setShowDetail(false)}/>
    }
   </div>
  )
}

export default App
