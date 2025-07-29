'use client'
import React from 'react'

export async function getStaticProps() {
  return {
    props: {
      message: 'hello'
    }
  }
}

const page = ({ message }: { message: string }) => {
  return (
    <div>{message ? message : 'No message'}</div>
  )
}

export default page