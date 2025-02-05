
import React from 'react'
import PageClient from './PageClient'


export const metadata = {
  title: "Experience",
  description: "Explore my professional experience and skills.",
  keywords: "full-stack developer, React developer, Next.js, .NET, Spring Boot, web development, software engineer, portfolio",
  openGraph: {
    title: "Simeon Ilić - Full-Stack Developer",
    description: "I build modern web applications using React, Next.js, and .NET. Check out my portfolio and see my latest projects.",
    url: "https://www.simeonilic.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simeon Ilić - Full-Stack Developer",
    description: "I build modern web applications using React, Next.js, and .NET. Check out my portfolio and see my latest projects.",
  },
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