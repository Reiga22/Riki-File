import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Foto = () => {
    return (
        <>
        <Header/>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <Col>
                    <Card>
        <Card.Img variant="top" src="https://media.suara.com/pictures/653x366/2021/08/01/71739-tugu-tulang-bawang-1.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://sinarlampung.co/wp-content/uploads/2020/02/Pemda-Tuba.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
                    </Col>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Foto;