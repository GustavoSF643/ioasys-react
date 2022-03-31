import LoginForm from "../../components/LoginForm";
import { LoginContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

interface CustomizedState {
  pathname: string;
  key: string;
}

const Login = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const state = location.state as CustomizedState;

  if (auth.isAuthenticated() && state && state.key !== "default") {
    const previousPage = state.pathname;
    return <Navigate to={previousPage} />
  }

  if (auth.isAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <LoginContainer>
      <div className="login-form-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <p>Books</p>
        </div>
        <LoginForm />
      </div>
    </LoginContainer>
  )
}

export default Login;