import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Navbar, Button, Table, Modal, Form, Alert } from 'react-bootstrap';
import { addContactAction, listerContacts } from './actions/contact.actions';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts.contactList)

  useEffect(() => {

    dispatch(listerContacts())

  }, [])

 
  const [nom , setNom ] = useState('');
  const [numero , setNumero ] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);

  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = () => setEdit(true);

  {/*FCT ADD Contact*/}
  const addContact = async() =>{
    console.log(nom);
    console.log(numero);

    const data = {
      nom,
      numero
    }
    await dispatch(addContactAction(data))
    await dispatch(listerContacts())
    //close model
    handleClose()
    // reset form
    setNom('')
    setNumero('')
  }


  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar bg="info" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Contact App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className='p-4'>
        <Button variant="info" onClick={handleShow}>Ajouter</Button>
        <h2> Liste des contactes</h2>
        {
          contacts  && contacts.length > 0 ? 
          <Table striped bordered hover>

            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Numéro</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                contacts.map((contact, index )=>
                <tr key={index}>
                <td>{index+1}</td>
                <td>{contact.nom}</td>
                <td>{contact.numero}</td>
                <td >
                  <Button className='me-2' variant="success" onClick={handleShowEdit}>Modifier</Button>
                  <Button variant="danger">Supprimer</Button>
                </td>
              </tr>)
              }
             

            </tbody>
          </Table>
            :  <Alert variant='info'>
             'Aucun contact trouve ...'
          </Alert>
           
        }

      </div>


      {/** POPUP ADD */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" value={nom} onChange={ (e)=>{ setNom(e.target.value)} }  placeholder="Enter le nom pour cette contact" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" value={numero} onChange={ (e)=>{ setNumero(e.target.value)} }  placeholder="enter contact" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary"  onClick={addContact}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

      {/** POPUP EDIT */}
      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Enter le nom pour cette contact" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="enter contact" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Annuler
          </Button>
          <Button variant="primary" >
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
