import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify/unstyled'
import 'react- '


const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainLayout