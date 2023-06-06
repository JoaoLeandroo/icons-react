import { AiOutlineShop, AiOutlineMail, AiFillApple, AiOutlineUser} from 'react-icons/ai'
import { ImImages } from 'react-icons/im'
import '../Header/header.css'

export default function Header() {
    return(
        <header>
            <a href="#"><AiFillApple size={35}/></a>
            <nav>
                <ul>
                    <li><AiOutlineShop size={30}/> </li>
                    <li><AiOutlineMail size={30}/></li>
                    <li><ImImages size={28}/></li>
                    <li><AiOutlineUser size={30}/></li>
                </ul>
            </nav>
        </header>
    )
}