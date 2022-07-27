import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

function Kart() {
  return (
    <>
    <div className='container-fluid'>
      <div className='container'>
    <div className="berita">
      Tulang Bawang Info
    </div>
    <Row>
        <Col sm={8}><Card>
        <Card.Img variant="top" src="https://i0.wp.com/rimbakita.com/wp-content/uploads/2020/07/baju-tulang-bawang.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></Col>
        <Col>
        <Card>
      <Card.Header>Tulang Bawang</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Kabupaten Tulang Bawang adalah salah satu kabupaten yang berada di Provinsi Lampung, Indonesia. Pusat pemerintahan atau ibu kota Tulang Bawang berada di kecamatan Menggala. Kabupaten Tulang Bawang memiliki luas wilayah sebesar 3.466,32 km, dengan penduduk sebanyak 430.021 jiwa.
     .{' '}
          </p>
          <footer >
            <p>
            {'Luas: 4.386 km²'}
            </p>
            <p>
              {'Kode pos: 345xx dan 346xx'}
            </p>
            <p>
              {'Provinsi: Lampung'}
            </p>
            <p>
              {'Ibu kota: Menggala'}
            </p>
            <p>
              {'APBD: Rp 133.522.000.000.-(2020)'}
            </p>
            <p>
              {'Dasar hukum: UU RI No. 2 Tahun 1997'}
            </p>
            
          </footer>
        </blockquote>
      </Card.Body>
    </Card></Col>
     
    </Row>
    <br></br>

    <div className="font">
      Berita Terkini
    </div>
    <Row >
    <Col clasName ="col-md-6">
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
    <Col clasName ="col-md-6">
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
    <Col clasName ="col-md-6">
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
   
    </Row>
    <br></br>
    <Row>
    <Col>
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
    <Col clasName ="col-md-6">
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
    <Col clasName ="col-md-6">
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
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
    </Row>
    </div>
    </div>
    </>
  );
}

export default Kart;