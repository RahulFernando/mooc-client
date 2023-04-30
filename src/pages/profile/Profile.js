import React from 'react'
import LeftPane from '../../components/LeftPane/LeftPane'
import NavBar from '../../components/Navigation/NavBar'
import { Button, DatePicker,Input } from 'antd';
import RightPane from '../../components/RightPane/RightPane';
import PostPane from '../../components/Postpane/PostPane';
import Footer from '../../components/Footer/Footer';


export default function Profile() {

  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  return (
    <>
     
     <div className='bottomContainer'>       
       <LeftPane/>
       <PostPane/>    

     </div>
     <Footer/> 
            
        
   
    </>
  )
}
