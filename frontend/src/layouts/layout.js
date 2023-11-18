import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


export default function layout () {
  return (
    <>
     <Header />
    <div>
      <Outlet/>
    </div>
    </>
   
  )
}