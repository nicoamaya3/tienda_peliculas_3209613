
import './App.css'
import { User } from './components/User'


export const App = () => {

  return (
    <>
      <div className="circle"></div>
      <p style={{fontSize: "2rem", color: "orange" , textDecoration: "underline"}}>Hola React</p>
      <p>Hola JavaScript</p>
      <button>Enviar</button>

      <h1>Tarjeta de usuario</h1>

      

      < User image="./573.jpeg" nombre="Snake Hitler" estado="Dead"/>
      < User image="./7.jpeg" nombre="Abradolf Lincler " estado="Live" />
      < User image="./97.jpeg" nombre="Mariana" estado="Dead" />
      < User image="./506.jpeg" nombre="Gorje" estado="Live" />
      
    </>
  )
}
