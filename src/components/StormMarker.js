import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-wi/storm-showers'

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="storm-icon" />
        </div>
    )
}

export default StormMarker