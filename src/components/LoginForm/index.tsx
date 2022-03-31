import { useForm } from "react-hook-form";
import { StyledForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { AxiosRequestConfig } from "axios";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/Auth";

interface ISubmitData {
  [x: string]: string;
}

const LoginForm = () => {
  const { auth } = useAuth();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const handleForm = (data: ISubmitData) => {
    const axiosConfig: AxiosRequestConfig = {
      url: "auth/sign-in",
      method: "post",
      data,
    };

    api.request(axiosConfig)
      .then((res) => {
        const token = res.headers["authorization"];
        const refreshToken = res.headers["refresh-token"];

        auth.login(token, refreshToken);
        window.location.reload();
      })
      .catch(() => {
        toast.error("Falha ao fazer o login.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <div className="field email-field">
        <label>
          Email
          <input
            type="email"
            placeholder="digite seu email"
            {...register("email")}
          />
        </label>
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="field password-field">
        <label>
          Senha
          <input
            type="password"
            placeholder="digite sua senha"
            autoComplete="on"
            {...register("password")}
          />
        </label>
        <button
          type="submit"
          className="submit"
        >
          Entrar
        </button>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
    </StyledForm>
  )
}

export default LoginForm;
