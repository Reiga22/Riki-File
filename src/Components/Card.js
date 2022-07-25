import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

function Kart() {
  return (
    <>
    <Row>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/q5pp5jFUgKo/sddefault.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    <Row >
      <p className='font'>BERITA</p>
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

    
    </>
  );
}

export default Kart;