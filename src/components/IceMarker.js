import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-noto/ice'

const IceMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="ice-icon" />
        </div>
    )
}

export default IceMarker