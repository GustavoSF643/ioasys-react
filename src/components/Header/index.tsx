import Logout from "../../assets/logout.svg";
import BlackLogo from "../../assets/black-logo.svg";
import { HeaderContainer } from "./styles";
import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const { auth } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/sign-in");
  }

  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src={BlackLogo} alt="logo" />
        <p>Books</p>
      </div>
      <div className="logout-container">
        <p>Bem vindo, <strong>{user && user.name}</strong>!</p>
        <button className="logout" onClick={handleLogout}>
          <img src={Logout} alt="logout" />
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;