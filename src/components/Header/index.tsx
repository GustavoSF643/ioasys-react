import Logout from "../../assets/logout.svg";
import BlackLogo from "../../assets/black-logo.svg";
import { HeaderContainer } from "./styles";
import { useAuth } from "../../providers/Auth";

const Header = () => {
  const { auth } = useAuth();

  const handleLogout = () => {
    auth.logout();
    window.location.reload();
  }

  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src={BlackLogo} alt="logo" />
        <p>Books</p>
      </div>
      <button className="logout" onClick={handleLogout}>
        <img src={Logout} alt="logout" />
      </button>
    </HeaderContainer>
  )
}

export default Header;