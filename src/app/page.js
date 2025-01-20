'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  // This effect will only run on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // During the first render (SSR), we render nothing until `isClient` is set to true.
  if (!isClient) {
    return <p>Loading...</p>
  }

  // Render the page content once client-side code is ready
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Test CD/CI
      <div>
        <h1>Environment: {process.env.NEXT_PUBLIC_ENVIRONMENT}</h1>
        <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
      </div>
    </div>
  );
}
