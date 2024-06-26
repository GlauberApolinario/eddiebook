import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg'
import './style.css'

const icons  = [Profile, Bag]

function HeaderIcons() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
            <li className='icon'><img src={icon} alt='icon'/></li>
            ))}
        </ul>
    )
}

export default HeaderIcons