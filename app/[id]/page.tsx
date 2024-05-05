'use client'

import React from 'react'

const Details = ({ params }: { params: { id: string } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default Details