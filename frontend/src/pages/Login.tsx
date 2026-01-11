import { Form, redirect, useActionData } from "react-router-dom";
import { login } from "../auth/auth.service";
import { useAuth } from "../auth/auth.context";

export async function loginAction({ request }: any) {
  const data = await request.formData();
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  try {
    const result = await login(email, password);
    localStorage.setItem("token", result.token);
    return redirect("/dashboard");
  } catch {
    return { error: "Invalid email or password" };
  }
}

export default function Login() {
  const error = useActionData() as any;
  const { loginUser } = useAuth();

  if (localStorage.getItem("token")) {
    loginUser({ email: "test@test.com" }); // 🔴 replace later
  }

  return (
    <Form method="post">
      <h2>Login</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      {error?.error && <p style={{ color: "red" }}>{error.error}</p>}
    </Form>
  );
}