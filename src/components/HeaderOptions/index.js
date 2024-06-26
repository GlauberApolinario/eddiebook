import './style.css'

const categories = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions() {
    return (
        <ul className='categories'>
            {categories.map((option) => (
                <li className='option'><p>{option}</p></li>
            ))}
        </ul>
    )
}

export default HeaderOptions