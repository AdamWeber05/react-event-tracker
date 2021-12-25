import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-simple-icons/nasa'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} className='nasa-icon'/>  Natural Event Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header