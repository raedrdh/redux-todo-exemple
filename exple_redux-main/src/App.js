import Add from "./Component/addTask/Add";
import TaskList from "./Component/Tasks/TaskList"
import { Col, Row, Container  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="Todoapp" >
      <h1 >Todo App </h1>
      <Container fluid='lg' className='contain' >
  <Row>
    <Col><TaskList/></Col>
  </Row>
      
      <Row style={{marginTop: 40, marginLeft: 100}}>
    <Col ><Add/></Col>
  </Row>
  </Container>
      
    </div>
  );
}

export default App;
