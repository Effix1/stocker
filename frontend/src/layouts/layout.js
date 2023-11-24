import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import "../scss/layout/_layout.scss"


export default function layout () {
  return (
    <>
     <Header />
    <div className='outlet_content'>
      <Outlet/>
    </div>
    </>
   
  )
}