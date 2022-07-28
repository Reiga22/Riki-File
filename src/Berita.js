import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Berita = () => {
    return (
        <>
        <Header/>
        <br></br>
        <div className="row">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
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
        <Col>
        <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
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
            <Col>
            <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://geracicon.com/wp-content/uploads/2019/09/FILLER-no-headshot.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card></Col>
        </div>
        <Footer/>
        </>
    );
};

export default Berita;