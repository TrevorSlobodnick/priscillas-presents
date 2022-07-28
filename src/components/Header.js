import { ReactComponent as PriscillasLogo } from "../images/priscillas-logo.svg"
import { ReactComponent as ScoopsLogo } from "../images/scoops-logo.svg"

const Header = () => {
  return (
    <header>
        <PriscillasLogo id="priscillas-logo" />
        <ScoopsLogo id="scoops-logo" />
    </header>
  )
}

export default Header