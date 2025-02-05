
import React from 'react'
import PageClient from './PageClient'


export const metadata = {
  title: "Experience",
  description: "Explore my professional experience and skills.",
};

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