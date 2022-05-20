import React from 'react'
import './Card.css'
import { CardData } from '../../Data/Data'
import image from '../../image/image1.jpeg'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UilPlus} from "@iconscout/react-unicons";
function Card() {
  return (
      
    <div className="Card">
        {CardData.map((card, index) => {
            return (
                
                <div className='parent-container'>
                    
                    
                <div className="upper-container">
                <span className='dot' style={{float:'left'}}>{card.day}days ago</span>
                <span class='bi bi-three-dots-vertical' style={{float:'right'}}></span>
            <div className="image-container">
                <img src={card.image} alt='' height="100px" width="100px"/>
            </div>
            <div className="lower-container">
            
            <span>{card.name}</span>
            <div className={card.status==='active'?'status active':'status'}
                     key = {index}>
                <span>{card.status}</span>
            </div>
            
        </div>
        <div className="progressBar">
        <ProgressBar now={card.storage}   />
        </div>
        <div className='storage'>
        <span>storage : {card.storage} %</span>
        </div>
        </div>
        
        
        
        </div>
            )
        })}
        <div className='parent-container'>  
        <div className='icon'>
            <span><UilPlus/></span><br/>
            <span>Add New Patient</span>
        </div>
        
        </div>
        
    </div>
  )
}

export default Card