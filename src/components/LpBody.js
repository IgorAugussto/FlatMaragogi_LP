import Praia from '../assets/img/praia.png';
import Sala2 from '../assets/img/sala-2.png';
import Sala3 from '../assets/img/sala-3.png';
import Cozinha from '../assets/img/cozinha.png';
import QuartoCasal from '../assets/img/quarto-casal.png';
import QuartoSolteiro from '../assets/img/quarto-solteiro.png';
import { Container, Row, Col } from 'react-bootstrap';

export const LpBody = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="container">
                        <div className="row">
                            <div className="col-18">
                                <div className="banner-bx wow zoomIn">
                                    <div class="praia-2">
                                        <img src={Praia} alt="Paria-2" />
                                    </div>
                                    <div class="texto-praia">
                                        <p>O flat é novíssimo e está localizado no Edifício Bella Maré, um condomínio recém
                                            construído, situado na Avenida Pontes de Miranda, rua larga e tranquila. O condomínio
                                            conta com garagem coberta, amplo hall e chuveiro na entrada.</p>
                                    </div>

                                    <div class="sala-2">
                                        <img src={Sala2} alt="Sala" />
                                    </div>
                                    <div class="texto-sala2">
                                        <p>A sala tem um sofá cama de casal, tv smart, wifi, ventilador de torre e cortinha
                                            blackout, além de uma espaçosa varanda com rede para você e sua família desfrutarem
                                            da brisa de Maragogi.</p>
                                    </div>

                                    <div class="sala-3">
                                        <img src={Sala3} alt="Sala-3" />
                                    </div>
                                    <div class="texto-sala3">
                                        <p>O flat é aconchegante e ideal para famílias e amigos que querem relaxar e conhecer a
                                            linda Maragogi da melhor forma possível. Localizado em um bairro tranquilo, a poucos
                                            minutos a pé de uma
                                            das praias mais bonitas da cidade, a praia de Ponta de Mangue.</p>
                                    </div>

                                    <div class="cozinha">
                                        <img src={Cozinha} alt="Cozinha" />
                                    </div>
                                    <div class="texto-cozinha">
                                        <p>A cozinha é completa, com bancada para refeições, fogão, geladeira, microondas e
                                            utensílios para cozinha, além de liquidificador, sanduicheira e air fryer.
                                            O espaço também conta com um tanque e um varal de chão.
                                        </p>
                                    </div>

                                    <div class="quarto-casal">
                                        <img src={QuartoCasal} alt="Quarto-casal" />
                                    </div>
                                    <div class="texto-quarto-casal">
                                        <p>A Suíte principal foi pensada para o descanso dos hóspedes e conta com uma cama de
                                            casal, ar condicionado, bancada de apoio e cortina blackout.</p>
                                    </div>

                                    <div class="quarto-solteiro">
                                        <img src={QuartoSolteiro} alt="Quarto-solteiro" />
                                    </div>
                                    <div class="texto-quarto-solteiro">
                                        <p>O segundo quarto tem 2 camas de solteiro, que podem ser unidas para se tornarem uma
                                            cama de casal, ar condicionado e cortina blackout. O espaço também conta com um
                                            banheiro social. Além disso, tem roupas de cama, toalhas, cobertores e travesseiros.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LpBody;