import Header from './components/header';
import Bandeira from './components/bandeira';
import { Link } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Inicio() {

  const [dados, setDados] = useState([])

  function fetchAPI (filter= "all") {
    fetch(`https://restcountries.com/v3.1/${filter}`).then((Response) => {
        
    return Response.json()

    }).then((data) => {
      setDados(data)
    })
}

useEffect(() => {
  fetchAPI()
}, [])

  return (
   <div>
      <Header/> 
     
      
      <div>
        <input type="text" onChange={(e) => {
          if (e.target.value) {
            fetchAPI("name/"+ e.target.value)
          } else {
            fetchAPI()
          } 
        }} />

        <select onChange={(e) => {fetchAPI(e.target.value)}}>
          <option value={'all'}>Filtre por Região:</option>

          <option value={'region/europe'}>Europe</option>
          <option value={'region/americas'}>Americas</option>
          <option value={'region/asia'}>Asia</option>
          <option value={'region/africa'}>Africa</option>
          <option value={'region/oceania'}>Oceania</option>
        
        </select>
      </div>
      <main style={{display: "flex", flexWrap: "wrap" }}>
        {dados.map((dado, index) => {
          return (
            <Link key={index} to={`/InforDetalhes/${dado.name.official}`}>
                <Bandeira  {...dado}/>
            </Link> 
          )
        })}
      </main>
    
     
      
   </div>
  )
}

export default Inicio;
