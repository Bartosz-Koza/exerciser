'use client'

import React from 'react'
import { Post } from '../../components/post';
import {dummy} from '../../components/dummy'
import { PostType } from '../../lib/types';

const Exercises = () => {
  return (
    <>
    <div className='grid grid-cols-1 xl:grid-cols-5 gap-8 px-5 py-4 '>
        {
          dummy.map((item) =>{
            return(
            <Post item={item}/>
            )
          })
        }
    </div>
    </>
  )
}

export default Exercises
