import React from 'react';
import {Card} from '../card/card.component'
//css
import './Card-list.styles.css';
export const CardList = (props)=>{
    return <div className="card-list">
        {props.monstars.map((monster)=>(
        <Card key={monster.id} monster = {monster}/>
      ))}
    </div>
}