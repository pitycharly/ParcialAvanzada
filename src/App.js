import React,{Component} from 'react';
// import "./bootstrap.min.css";
import axios from 'axios';
import FormularioT from "./components/FormularioT";
import Tarea from "./components/Tarea";
import ListaTareas from "./components/ListaTareas";





class App extends Component {
  state = {
    tareas: [],
    recargarTareas : true,
  };


    consultarApi = async () => {
    // consultar la api de json -server
    const resultado = await axios.get('http://localhost:4000/tareas');

   // console.log(resultado);
   this.setState({tareas:resultado.data})
  }


  componentDidMount() {
    if(this.state.recargarTareas){
      this.consultarApi()
      this.setState({recargarTareas:false})
    }}

  componentDidUpdate(){
    if(this.state.recargarTareas){
      this.consultarApi()
      this.setState({recargarTareas:false})
    }
  }




  // //! Cuando eliminamos o agregamos una nueva arma
  // componentDidUpdate() {
  //   localStorage.setItem("tareas", JSON.stringify(this.state.tareas));
  // }

  crearTarea = datos => {
    //console.log(datos);
    //copiar el state actual
    const tareas = [...this.state.tareas, datos];

    // agregar el nuevo state
    this.setState({
      tareas
    });
  };

  //! Elimina las armas del state

    eliminarTarea = async (id) => {
    // console.log(id);
    //! tomar una copia del state
    const url = `http://localhost:4000/tareas/${id}`;

    const resultado = await axios.delete(url);

    //console.log(resultado);

      //consultar la api
    this.setState({recargarTareas:true})
  }

  render() {
    return (
      <div className="container" >

        <FormularioT crearTarea={this.crearTarea} />
        <div>
        <ListaTareas
            tareas={this.state.tareas}
            eliminarTarea={this.eliminarTarea}
          />
        </div>

      </div>
    );
  }}


export default App;

// //<ListadoArmas
//   tareas={this.state.tareas}
//   eliminarTarea={this.eliminarTarea}
// />
