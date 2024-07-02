import styles from "./NavbarStyles.module.css"
import ThemeIcon from "../../assets/icon-circle.svg"
import logo from "../../assets/logo-N(150px).svg"
// import moon from "../../assets/icon-circle.svg"
// import { useTheme } from "../Theme/ThemeContext";

const Navbar = () => {
    // const { theme, toggleTheme } = useTheme();

    // const ThemeIcon = theme === 'light' ? sun : moon;

  return (
    <div className={styles.navbar}>
            <img src={logo} height={50}/>
            {/* <a className={styles.logo} href="/" ></a> */}
            <ul className={styles.menu}>
                <li className={styles.menuitems}>
                    <img height="20px" src={ThemeIcon} />
                </li>
                <li className={styles.menuitems}>
                    <a src="">Email</a>
                </li>
                <li className={styles.menuitems}>
                    <a src="">Linkedin</a>
                </li>
                <li className={styles.menuitems}>
                    <a src="">GitHub</a>
                </li>
            </ul>
    </div>
  )
}

export default Navbar
