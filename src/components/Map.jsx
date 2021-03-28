import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {

  const mapStyles = {
    height:"50vh",
    width: '100%',
  }

  const defaultCenter = {
    lat: data.lat , lng: data.lng
  }

  return (
    <div>
      <LoadScript googleMapsApiKey='AIzaSyCdVZwxHS99m8BTGt7vBvkvj5fUt8EkJ3E'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        >
          <Marker  position={defaultCenter} />
        </GoogleMap>
      </LoadScript>

    </div>
  )
}

export default Map
