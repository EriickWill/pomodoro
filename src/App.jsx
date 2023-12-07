import { useState,useEffect } from 'react'
import { FaPlay,FaPause   } from "react-icons/fa";
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(2)
  const [isActive,setIsActive] = useState(false)
  const [work , setWork] = useState(true)
  const [disabled , setDisabled] = useState(false)

useEffect(()=>{
  if(isActive){
    const relogio = setTimeout(() => {
      if(seconds > 0){
        setSeconds((prevContador) => prevContador - 1)
      }else if(seconds <= 0){
        setMinutes(prev => prev - 1)
        setSeconds(59)
      }
      
    }, 1000);
    if(minutes == 0 && seconds == 0 ){
      clearTimeout(relogio)
      setDisabled(false)
      setWork(prev => !prev)
      alert(`Hora do ${work ? "Descanso" : "Foco"}`)
    }
  } 
},[isActive,minutes,seconds])

  function iniciarRelogio(){
    if(work && minutes == 0 && seconds == 0){
      setMinutes(25)
      setSeconds(0)

    }else if(work == false && minutes == 0 && seconds == 0){
      setMinutes(5)
      setSeconds(0)

    }
    setDisabled(true)
    setIsActive(true)
  }
  function pararRelogio(){
    setIsActive(false)
    setDisabled(false)
  }
  return (
    <>
      <main>
        <div className='container'>
          <div className='circular-progress'>
            <h4>{
                minutes < 10 ? `0${minutes}` : minutes
              }:{
                seconds < 10 ? `0${seconds}` : seconds
              }</h4>
            <span>{ work ? "Focus" :" Relax" }</span>
              <div className='controls'>
                <button onClick={iniciarRelogio} disabled={disabled}><FaPlay /></button>

                <button onClick={pararRelogio}><FaPause /></button>
              </div>
          </div>
            
        </div>
      </main>
    </>
  )
}

export default App
