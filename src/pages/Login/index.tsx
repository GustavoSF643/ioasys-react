import LoginForm from "../../components/LoginForm";
import { LoginContainer } from "./styles";
import Logo from "../../assets/Logo.svg";

const Login = () => {
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