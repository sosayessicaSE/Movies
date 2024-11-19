
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
    return (
        <>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/age'>Change Age</Link>
                <Link to='/name'>Change Name</Link>
            </div>
        </>
    )
}

export default Navbar