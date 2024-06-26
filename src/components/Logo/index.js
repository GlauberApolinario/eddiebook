import './style.css'
import logo from '../../images/logo.jpg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'
                >
            </img>
            <p><strong>Eddie</strong>Books</p>
        </div>
    )
}

export default Logo