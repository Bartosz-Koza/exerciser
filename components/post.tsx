'use client'

import { PostType } from '@/lib/types'
import React from 'react'

export const Post = ({item}: {item: PostType}) => {
  return (
    <div>
        <h1>{item.name}</h1>
    </div>
  )
}
