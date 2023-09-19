import SideBar from '@/components/SideBar'
import MainPage from './MainPage'
import TopBar from '@/components/TopBar'

export default function Home() {
  return (
   <main className='main flex flex-column'>
    <SideBar/>
    <MainPage>
    <TopBar/>
    </MainPage>

   </main>
  )
}
