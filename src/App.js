import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Alert, Breadcrumb, Card, Container, Form }from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container >
        <Card className="mb-3" style={{color: "#000"}}>
          <Card.Img src= "https://content.jdmagicbox.com/comp/mumbai/q4/022pxx22.xx22.181213140801.u2q4/catalogue/dog-villa-dogi-fitting-n-boarding-dadar-west-mumbai-dog-adoption-centres-1j4vtbembn.jpg?clr=" />
            <Card.Body>Feira de adoção solidária da UNICAP
              <div class="d-grid gap-1"><button type="button" class="btn btn-outline-primary px-10 py-5">Conheça nossos pets!</button>
              </div>
            </Card.Body>
            <Button>Test</Button>
        </Card>
        
        
        </Container>
        <Form>
              <Form.Group>
                <Form.Label>Inscreva-se em nosso Newsletter</Form.Label>
                 <Form.Control type="email" placeholder="Example@email.com" />
                   <Form.Text className="text-muted">
                    Te avisaremos quando a nossa próxima feira mensal acontecerá
                   </Form.Text>
               </Form.Group>
        </Form>
       

        <Breadcrumb>
        <Breadcrumb.Item>Apoie nossa causa</Breadcrumb.Item>
        <Breadcrumb.Item>Seja um AUmigo</Breadcrumb.Item>
        <Breadcrumb.Item>Contato</Breadcrumb.Item>
        </Breadcrumb>
          <Alert variant="second"> Participe!</Alert>
          <Button>Chave PIX Copia e cola</Button>

        
      </header>
      
    </div>
  );
}

export default App;
