import React from 'react'
import PeopleItem from './PeopleItem'
import "../App.css";
const PeopleList = ({data}) => {
  return (
    <div className="flowProfile">
        {data.length > 0 ? 
          data.map(person =>
            <PeopleItem key={person.birth_year + person.name} name={person.name}/>)
            :
            <h5>No hay info</h5>
        }
    </div>
  )
}

export default PeopleList