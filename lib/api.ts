"use client";

import axios from "axios";

export async function apiCall() {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
    params: { limit: "1000000000000000000000" },
    headers: {
      "X-RapidAPI-Key": "41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d",
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
      "X-RapidAPI-Key": "41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  console.log(response.data)
  return response.data;
}


export async function api_name(name: string){
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
    params: {limit: '1000000000000000000000'},
    headers: {
      'X-RapidAPI-Key': '41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
    const response = await axios.request(options);
    return response.data

}

export async function api_target(target: string) {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
    params: {limit: '1000000000000000000000'},
    headers: {
      'X-RapidAPI-Key': '41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
    const response = await axios.request(options);
    return response.data
}

export async function api_body(body:string) {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body}`,
    params: {limit: '1000000000000000000000'},
    headers: {
      'X-RapidAPI-Key': '41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
    const response = await axios.request(options);
    return response.data
}

export async function api_type(type:string) {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${type}`,
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '41ae094c6bmsh4003a4f5b01146ep1405f9jsn427ca90d325d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
    const response = await axios.request(options);
    return response.data
}