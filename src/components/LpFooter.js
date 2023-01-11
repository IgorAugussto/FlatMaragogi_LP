import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { Container } from "react-bootstrap";

export const LpFooter = () => {
    return (
        <Container>
            <div>
                <div className="container-btn-bottom">
                    <a href="http://airbnb.com/h/aconchegante-bella-mare" target="_blank" rel="noreferrer">
                        <button type="button" class="btn btn-primary" id="reserve-btn-bottom">
                            <FontAwesomeIcon icon={faAirbnb} size="lg" className="me-2" />
                            Reserve pelo Airbnb
                        </button>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default LpFooter;