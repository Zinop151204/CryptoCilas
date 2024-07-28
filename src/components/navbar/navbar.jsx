import './navbar.css'
import logo from '../../assets/logo.png'
import iconSignup from "../../assets/arowicon.png"
import { useContext } from 'react'
import { CoinContext } from '../../contexts/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const { setCurrency } = useContext(CoinContext)
    const currencyHanlder = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" })
                break
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" })
                break
            }
            case "vnd": {
                setCurrency({ name: "vnd", symbol: "₫" })
                break
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" })
                break
            }
        }

    }
    return (
        <div className='navbar'>
           <Link to={'/'}> <img className='imgLogo' src={logo} alt="" /></Link>
            <ul>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHanlder}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="vnd">VND</option>
                </select>
                <button>Sign up <img className='imgicon' src={iconSignup} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar