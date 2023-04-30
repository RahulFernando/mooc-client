import React from 'react'
import './leftPane.css'
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function LeftPane() {
  return (
    <div className='leftPanebox'>
        <div className="leftPaneContainer">
            <div className="leftPaneMenu">
                <li className="leftPaneMenuItem">
                <MessageIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Courses</span>
                </li>

                <li className="leftPaneMenuItem">
                <GroupIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Programs</span>
                </li>

                <li className="leftPaneMenuItem">
                <RssFeedIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Cetificate</span>
                </li>

                <li className="leftPaneMenuItem">
                <EmojiFlagsIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Free Courses</span>
                </li>

                <li className="leftPaneMenuItem">
                <CalendarMonthIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Event</span>
                </li>

                <li className="leftPaneMenuItem">
                <BuildIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Setting</span>
                </li>

                <li className="leftPaneMenuItem">
                <SportsEsportsIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Find a career</span>
                </li>

                <li className="leftPaneMenuItem">
                <NewspaperIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">News</span>
                </li>

                <li className="leftPaneMenuItem">
                <WorkOutlineIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Jobs</span>
                </li>

                <li className="leftPaneMenuItem">
                <AddShoppingCartIcon className="leftPaneMenuIcon"/>
                <span className="leftPaneMenuText">Shop</span>
                </li>
                <hr/>
                <div className="pagesYouLiked">
                    <h3>Find a career</h3>
                </div>
                    <div className="pageList">

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">project Management</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Data Analyst</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">UX Desiner</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">IT Support Specialis</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Digital Markerter</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Data Scientist</span>
                        </li> 
                        
                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Front-End Developer</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Back-End Developer</span>
                        </li> 

                        <li className="pageListItem">
                            <img src="/images/1.gif" alt="" className="pagepic"/>
                            <span className="pageName">Nimma</span>
                        </li> 
                    </div>                
            </div>
        </div>
    </div>
  )
}
