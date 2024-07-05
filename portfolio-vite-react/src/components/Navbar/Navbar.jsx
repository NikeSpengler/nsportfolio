import './Navbar.css'
import ThemeIcon from "../../assets/icon-circle.svg"
import logo from "../../assets/logo-N(150px).svg"
// import moon from "../../assets/icon-circle.svg"
// import { useTheme } from "../Theme/ThemeContext";

const Navbar = () => {
    // const { theme, toggleTheme } = useTheme();

    // const ThemeIcon = theme === 'light' ? sun : moon;

  return (
    <div className="navbar">
            <img src={logo} height={40}/>
            {/* <a className={styles.logo} href="/" ></a> */}
            <ul className="menu">
                <li className="menuitems">
                    <img height="18px" src={ThemeIcon} />
                </li>
                <li className="menuitems">
                    <a src="">Lets talk!</a>
                </li>
            </ul>
    </div>
  )
}

export default Navbar
