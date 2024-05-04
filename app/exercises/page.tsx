'use client'

import React, { useEffect } from 'react'
import { Post } from '../../components/post';
import { Menu } from '@/components/menu';
import { apiCall} from "@/lib/api";
import { PostType } from '../../lib/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { dummy } from '@/components/dummy';

function Exercises(){

  // const {data, isLoading} = useQuery({ queryKey: ['exer'], queryFn: apiCall })

  const data = dummy

  return (
    <>
    <Menu/>
    <div className='grid grid-cols-1 xl:grid-cols-6 gap-8 px-5 ml-[300px] py-4 '>
        {
          // !isLoading &&
          data.map((item: PostType) =>{
            return(
            <>
            <Post item={item}/>
            </>
            )
          })
        }
    </div>
    </>
  )
}

export default Exercises
