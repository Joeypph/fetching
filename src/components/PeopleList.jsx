import React,{useEffect, useState} from 'react'
import PeopleItem from './PeopleItem'
import "../App.css";

const PeopleList = ({data}) => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    visible()
  },[data])

  const visible =()=>{
    setHidden(false);
    setTimeout(() => {
      setHidden(true)
      console.log("Se cierra")
    }, 3000);
    console.log(hidden)
  }
  
  return (
    <>
    <div className="flowProfile">
        {data.length > 0 ? (

          data.map(person =>
            <PeopleItem key={person.birth_year + person.name} name={person.name}/>)
          )
            :
            <h5>No hay info</h5>
        }
    </div>
    <div> 
     {data.length > 10 && (
      <h3 hidden={hidden} style={{color:'green'}}>Deslice para ver los elementos cargados &#x2193; </h3>
      )}
    </div>
    </>
  )
}

export default PeopleList