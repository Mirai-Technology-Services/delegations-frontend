import { cookies } from "next/headers";

// Utility function to get a cookie value
const getCookie = async (name: string): Promise<string> => {
  return cookies().get(name)?.value ?? "";
};

// Utility function to perform fetch requests with cookie authentication
export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  const cookie = await getCookie("auth");

  const defaultOptions: RequestInit = {
    credentials: "include",
    headers: {
      ...options.headers,
      Cookie: `auth=${cookie};`,
    },
    cache: "no-store",
  };

  const res = await fetch(url, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed with status: ${res.status}`);
  }

  return res.json();
};
