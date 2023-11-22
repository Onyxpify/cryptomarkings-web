import Image from 'next/image'
import styles from './page.module.css'
import Index from '@/components/Home/Index'

export default function Home() {
  return (
    <div className='Home'>
      <Index />
    </div>
  )
}
