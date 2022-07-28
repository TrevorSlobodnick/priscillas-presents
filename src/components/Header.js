import { Link } from "react-router-dom"
import { ReactComponent as PriscillasLogo } from "../images/priscillas-logo.svg"
import { ReactComponent as ScoopsLogo } from "../images/scoops-logo.svg"

const Header = () => {
  return (
    <header>
        <Link to="/"><PriscillasLogo id="priscillas-logo" /></Link>
        <Link to="/ice-cream"><ScoopsLogo id="scoops-logo" /></Link>
    </header>
  )
}

export default Header