import Footer from "./Components/Footer";
import Header from "./Components/Header";
import YouTube from 'react-youtube';

const Vidio = () => {
    return (
        <>
        <Header/>
        <br></br>
        <div className="wrapper">
            <form className="form-group form">
                <input type="text" className="form-control"
                placeholder="Enter youtube URL" required
                />
                <button type="submit" className="btn btn-success btn-md">
                    UPLOAD
                </button>
            </form>
        </div>
        <br></br>
        <Footer/>
        
        </>
    );
};

export default Vidio;

