import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./style.css";

function Kart() {
  return (
    <>
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='row'>
          <img src="https://lintasdinamika.com/wp-content/uploads/2019/01/Bupati-dan-Wakil-Bupati-Tulang-Bawang.jpg"/>
        </div>
        <div className='row'>
        <div className='mt-5'>Info Terbaru</div>
        <Col sm={7}><Card>
        <Card.Img variant="top" src="https://i0.wp.com/rimbakita.com/wp-content/uploads/2020/07/baju-tulang-bawang.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/rimbakita.com/wp-content/uploads/2020/07/baju-tulang-bawang.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      
      <Col>
      <div>
        Image
      </div>
      <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
        <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Img variant="top" src="https://radarlombok.co.id/wp-content/uploads/2022/05/1651386148297.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>    
        </div>
        <br></br>
        <div className='row'>
        <Col>
        <Card>
      <Card.Header>Tulang Bawang</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Kabupaten Tulang Bawang (Aksara Lampung: Tuba-aksara.png) adalah salah satu kabupaten yang berada di 
            Provinsi Lampung, Indonesia. Pusat pemerintahan atau ibu kota Tulang Bawang berada di kecamatan Menggala. 
            Kabupaten Tulang Bawang memiliki luas wilayah sebesar 3.466,32 km, dengan penduduk sebanyak 430.021 jiwa 
            (2020). Secara umum wilayah Kabupaten Tulang Bawang berada di dataran rendah. Ketinggian wilayah ini 
            bervariasi antara 2 Mdpl s/d 44 Mdpl..{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Form Pertanyaan</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="kirim">Kirim</Button>
    </Col>
        </div>
      </div>
       
        </div>
        
    </>
  );
};

export default Kart;