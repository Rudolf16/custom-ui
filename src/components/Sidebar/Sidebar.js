import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './styles.scss'



export const Sidebar = ({sections}) => {
    const [isOpen,setIsOpen]=useState(false)
    const openHandler=()=>{
        setIsOpen(!isOpen)
    }

    const sideList=sections.map(el=>{
       if(el.icon){
           return(
                   <li className={isOpen?"open sidebar_list_item":"close sidebar_list_item"} >
                    <Link to={el.link} className='sidebar_list_link '>
                    <img className='sidebar_list_icon' src={el.icon} alt='smth'></img>
                    <div className='sidebar_list_name'>{el.name}</div>
                    </Link >
                   </li>

               
           )
           }else{
               return(
                <li className={isOpen?"open sidebar_list_item":"close sidebar_list_item"} >
                    <Link  to={el.link} className=' sidebar_list_link'>
                    <img className='sidebar_list_icon' src="https://img.icons8.com/color/search" alt='smth'></img>
                     <div className='sidebar_list_name'>{el.name}</div>
                    </Link>
                </li>   
               )
           }
       })

    return (
        <div className='side_container'>
            <button onClick={openHandler} href='' className='sidebar_button'>
            <span className="dashbord">Dashbord</span><div className="side_menu-burger"><span></span></div>
            </button>
            <ul className={isOpen?"openList":"closeList"}>
            {sideList}
            </ul>
        </div>
    )
}



Sidebar.propTypes={
    sections:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        icon:PropTypes.string,
        link:PropTypes.string
    }))
}

Sidebar.defaultProps={
    sections:[
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
            name:"Home",
            link:"https://www.google.com",
            icon:""
          },
      ]
}