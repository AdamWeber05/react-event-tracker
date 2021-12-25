import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import VolcanoMarker from './VolcanoMarker'
import IceMarker from './IceMarker'
import StormMarker from './StormMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 'wildfires') {
            return <FireMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.link })} />
        }
        if(ev.categories[0].id === 'volcanoes') {
            return <VolcanoMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.link })} />
        }
        if(ev.categories[0].id === 'seaLakeIce') {
            return <IceMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.link })} />
        }
        if(ev.categories[0].id === 'severeStorms') {
            return <StormMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.link })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -98.7129
    },
    zoom: 4
}

export default Map
