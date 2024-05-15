"use client";

import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Adjusted import
import { User, LoginSchema, registerSchema, DecodedJWT } from "./types";
import { encode, decode } from "js-base64";
import "core-js/stable/atob";
import { RegisterSchema } from './types';
import { env } from "process";

global.atob = decode;

export const BASE_URL = "http://localhost:8000";

type AuthTokens = {
  access: string;
  refresh: string;
};

const rapidApiKey = process.env.RAPID_API_KEY

axios.defaults.baseURL = BASE_URL;
export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  let tokens = getTokens();
  if (!tokens) {
    return config;
  }

  if (isExpired(tokens.access)) {
    tokens = await updateTokens(tokens);
  }

  config.headers["Authorization"] = `Bearer ${tokens?.access}`;
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      let tokens = getTokens();

      try {
        if (tokens && !isExpired(tokens.refresh)) {
          tokens = await updateTokens(tokens);

          error.config.headers["Authorization"] = `Bearer ${tokens?.access}`;
          return axios(error.config);
        }
      } catch (error) {
        console.error(error);
        removeTokens();
      }
    }

    return Promise.reject(error);
  }
);

export async function apiCall() {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
}

export async function api_id(id: string) {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}

export async function api_name(name: string) {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function api_target(target: string) {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function api_body(body: string) {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body}`,
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
}

export async function api_type(type: string) {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${type}`,
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": `${rapidApiKey}`,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
}

function isExpired(token: string): boolean {
  try {
    const { exp }: DecodedJWT = jwtDecode(token);
    return exp * 1000 < Date.now();
  } catch (error) {
    console.error(error);
    return true;
  }
}

export async function updateTokens(tokens: AuthTokens): Promise<AuthTokens> {
  const { data } = await axios.post("/api/token/refresh/", tokens);
  setTokens(data);
  return data;
}

export async function whoAmI(): Promise<User | null> {
  try {
    return (await api.get<User>("/api/whoami")).data;
  } catch (error) {
    removeTokens();
    return null;
  }
}

export function removeTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export async function resumeSession(): Promise<User | null> {
  if (getTokens() !== null) {
    return await whoAmI();
  }
  return null;
}

function setTokens(newTokens: AuthTokens) {
  localStorage.setItem("refreshToken", newTokens.refresh);
  localStorage.setItem("accessToken", newTokens.access);
}

function getTokens(): AuthTokens | null {
  const refresh = localStorage.getItem("refreshToken");
  if (refresh === null) {
    return null;
  }

  return {
    refresh,
    access: localStorage.getItem("accessToken") ?? "",
  };
}

export async function login(body: LoginSchema) {
  const { data } = await axios.post("/api/login/", body);
  setTokens(data);

  return await whoAmI();
}

export async function register(body: RegisterSchema) {
  await axios.post("/api/register/", body);
  return await login(body);
}

export async function add_to_fav(exer_id: string) {
  await api.post('/api/fav/',{exer_id: exer_id})
}

export async function fav_get() {
  return await api.get('/fav')
}