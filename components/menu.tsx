"use client";

import React, { useState } from "react";
import {atom} from 'jotai'
import { useAtom } from "jotai";

export const nameAtom = atom('')
export const typeAtom = atom('')
export const bodyAtom = atom('')
export const targetAtom = atom('')
export const selectAtom = atom('')

export const Menu = () => {
  const types: string[] = [
    "assisted",
    "band",
    "barbell",
    "body weight",
    "bosu ball",
    "cable,dumbbell,elliptical machine",
    "ez barbell",
    "hammer",
    "kettlebell",
    "leverage machine",
    "medicine ball",
    "olympic barbell",
    "resistance band",
    "roller,rope",
    "skierg machine",
    "sled machine",
    "smith machine",
    "stability ball",
    "stationary bike",
    "stepmill machine",
    "tire,trap bar",
    "upper body ergometer",
    "weighted",
    "wheel roller",
  ];
  const targets: string[] = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];

  const bodyParts: string[] = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  const [select, setSelect] = useState();
  const [selectA, setSelectA] = useAtom(selectAtom)
  const [name, setName] = useAtom(nameAtom)
  const [type, setType] = useAtom(typeAtom)
  const [target, setTarget] = useAtom(targetAtom)
  const [body, SetBody]= useAtom(bodyAtom)

  return (
    <div className="max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 ">
      <div className="p-4">
        <h1 className="text-lg font-bold mb-2">Search</h1>
        <h1>Search by:</h1>
        <select
          value={select}
          onChange={(e: any) => {
            setSelect(e.target.value), console.log(select);
          }}
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value='null' selected>none</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="target">Target</option>
          <option value="bodyPart">Body Part</option>
        </select>
        {select == "name" && (
          <>
            <input
              type="text"
              value={name}
              onChange={(e:any) => {setName(e.target.value), console.log(name)}}
              placeholder="Search by name"
              className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></input>
            <button onClick={() => setSelectA(select)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Search
            </button>
          </>
        )}
        {select == "type" && (
          <>
            <select value={type} onChange={(e: any) => {setType(e.target.value), console.log(type)}} className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="" disabled selected>
                Select Type
              </option>
              {types.map((type, index) => (
                <option value={type} key={index}>{type}</option>
              ))}
            </select>
            <button onClick={() => setSelectA(select)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Search
            </button>
          </>
        )}
        {select == "target" && (
          <>
            <select value={target} onChange={(e:any) => {setTarget(e.target.value), console.log(target)}} className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="" disabled selected>
                Select Target
              </option>
              {targets.map((target, index) => (
                <option value={target} key={index}>{target}</option>
              ))}
            </select>
            <button onClick={() => setSelectA(select)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Search
            </button>
          </>
        )}
        {select == "bodyPart" && (
          <>
            <select value={bodyParts} onChange={(e:any) => {SetBody(e.target.value), console.log(body)}} className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="" disabled selected>
                Select Body Part
              </option>
              {bodyParts.map((part, index) => (
                <option value={part} key={index}>{part}</option>
              ))}
            </select>
            <button onClick={() => setSelectA(select)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Search
            </button>
          </>
        )}
      </div>
    </div>
  );
};
