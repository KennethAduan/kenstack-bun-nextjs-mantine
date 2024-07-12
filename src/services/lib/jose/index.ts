import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

const sessionName = "session";

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get(sessionName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function refreshSession(request: NextRequest) {
  const session = request.cookies.get(sessionName)?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  //   parsed.expires = new Date(Date.now() + 8 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: sessionName,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
