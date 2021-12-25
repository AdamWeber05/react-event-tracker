const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Information</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>Learn More: <strong>Click <a href={ info.link }>HERE</a> for API info</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox