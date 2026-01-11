export async function login(email: string, password: string) {
  // 🔴 REPLACE later with backend API
  if (email === "test@test.com" && password === "1234") {
    return { token: "fake-token", user: { email } };
  }
  throw new Error("Invalid credentials");
}

export async function signup(email: string, password: string) {
  // 🔴 REPLACE later with backend API
  return { token: "fake-token", user: { email } };
}