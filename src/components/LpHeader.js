import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import MyLogo from '../assets/img/logotipo-transparente.png';

export const LpHeader = () => {


  return (
    <Container>
      <div class="bg">
        <img src={MyLogo} alt="Logo" />
      </div>
      <div class="container-btn">
        <a href="http://airbnb.com/h/aconchegante-bella-mare" target="_blank" rel="noreferrer">
          <button type="button" class="btn btn-primary btn-lg" id="reserve-btn1">
            <FontAwesomeIcon icon={faAirbnb} size="lg" className="me-2" />
            Reserve pelo Airbnb
          </button>
        </a>
      </div>
    </Container >
  )
}

export default LpHeader;