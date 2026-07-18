import { fetchAuthSession } from "aws-amplify/auth";

export async function testAuth() {
  const session = await fetchAuthSession();

  const token = session.tokens.accessToken.toString();

  const response = await fetch("http://localhost:5001/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}
