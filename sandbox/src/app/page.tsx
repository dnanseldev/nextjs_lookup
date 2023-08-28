import Navigation from '@/components/header/page'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-gray-700 text-4xl'>Starting application</h1>
      </main>
    </>    
  )
}
