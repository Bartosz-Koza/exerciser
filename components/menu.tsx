"use client";

import React from "react";

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

  return (
    <div className="max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 ">
    <div className="p-4">
        <h1 className="text-lg font-bold mb-2">Search</h1>
        <input type="text" placeholder="Search by name" className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></input>
        <select className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Select Type</option>
            {types.map((type, index) => (
                <option key={index}>{type}</option>
            ))}
        </select>
        <select className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Select Target</option>
            {targets.map((target, index) => (
                <option key={index}>{target}</option>
            ))}
        </select>
        <select className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Select Body Part</option>
            {bodyParts.map((part, index) => (
                <option key={index}>{part}</option>
            ))}
        </select>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Search</button>
    </div>
</div>

  );
};
