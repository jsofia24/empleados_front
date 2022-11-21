import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class EmpleadosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idEmpleado : this.props.getIdEmpleado(),
      redirect: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
        empleado: {
            nombre: "",
            apellido_p: "",
            apellido_m: "",
            telefono: "",
            mail: "",
            direccion: "",
        }
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  componentDidMount(){
    this.getEmpleado();
  }
  getEmpleado() {
    this.setState({ loading: true});
    request
    .get(`/empleados/${this.state.idEmpleado}`)
    .then ((response) => {
      this.setState({
        empleado: response.data,
        loading: false,
      });
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: false});
    });
  }
  setValue(inicioe, value){
    this.setState({
        empleado: {
            ...this.state.empleado,
            [inicioe]: value,
        },
    });
  }
  
  onExitedMessage() {
    if (this.state.redirect) this.props.changeTab( 'buscar' );
  }
  render() {
    return (
      <Container id="empleados-crear-container">
        <MessagePrompt text={this.state.message.text}
        show={this.state.message.show}
        duration ={2500}
        onExited={this.onExitedMessage} />
        <Loading show={this.state.loading}/>
        <Row>
          <h1>Editar Empleados</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("nombre", e.target.value)}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("apellido_p", e.target.value)}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("apellido_m", e.target.value)}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Telefono</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("telefono", e.target.value)}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("mail", e.target.value)}/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Direccion</Form.Label>
              <Form.Control onChange={ (e) => this.setValue("direccion", e.target.value)}/>
             </Form.Group>
            <Button variant="primary" onClick={()=> console.log(this.guardarEmpleados())}>
              Guardar empleado
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
