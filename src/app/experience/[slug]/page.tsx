
import React from 'react'
import PageClient from './PageClient'

const Page = async  ({
  params,
}: {
  params: Promise<{ slug: string }>
})=> {
  const slug = (await params).slug
  
  return (
    
      <PageClient slug={slug} />
  )
}

export default Page