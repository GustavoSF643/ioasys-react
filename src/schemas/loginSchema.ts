import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido.").required("Email é um campo obrigatório."),
  password: yup.string()
    .min(8, "Senha deve conter ao menos 8 caracteres")
    .required("Senha é um campo obrigatório."),
});
