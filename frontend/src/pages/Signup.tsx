import { Form, redirect } from "react-router-dom";
import { signup } from "../auth/auth.service";

export async function signupAction({ request }: any) {
  const data = await request.formData();
  await signup(
    data.get("email") as string,
    data.get("password") as string
  );
  return redirect("/login");
}

export default function Signup() {
  return (
    <Form method="post">
      <h2>Signup</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />
      <button type="submit">Create Account</button>
    </Form>
  );
}