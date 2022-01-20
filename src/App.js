// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

const [tareas, actualizarTareas] = useState([])
const [contador, actualizarContador]=useState(0);



function anyadirTarea(nuevaTarea){

actualizarTareas([...tareas,nuevaTarea]);

}


function eliminarTarea(tarea){

  let index=tareas.indexOf(tarea);
  tareas.splice(index,1);
  actualizarTareas([...tareas]);
  actualizarContador(contador+1);
}

function modificartarea(tarea){
  let editada = prompt("Cachauuu");
  let index=tareas.indexOf(tarea);
  tareas.splice(index,1,editada);
  actualizarTareas([...tareas]);
  
}
  return (
    <div className="App">
      <h1>Lista de tareas Ejemplo React</h1>
      <p>Has añadido {contador} tareas en total....Ánimo!</p>
      <p>Has añadido hoy {contador} tareas</p>
      <input type="text" id='nuevaTarea'></input>
      <button onClick={()=>anyadirTarea(document.getElementById('nuevaTarea').value)}>añadir tarea</button>
      {
        tareas.map(tarea=>
          <div className="tarea">

            <li key={tarea}>{tarea}</li>
            <p onClick={()=>eliminarTarea(tarea)}>eliminar</p>
            <p onClick={()=>modificartarea(tarea)}>Modificar</p>
            </div>
        )
      }
      <p>{contador+tareas.length} de {contador} tareas terminadaas</p>
    </div>
  );
}

export default App;
