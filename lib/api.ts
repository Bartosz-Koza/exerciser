"use client";

import axios from "axios";
import { atom } from "jotai";
import { useAtom } from "jotai/react";

export const dataAtom = atom([])

export async function apiCall(){

const [data, setData] = useAtom(dataAtom)
    
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    setData(response.data)
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}