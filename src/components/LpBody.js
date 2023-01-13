import PraiaSb from '../assets/img/praia.jpeg';
import SalaSb2 from '../assets/img/sala-2.jpeg';
import SalaSb3 from '../assets/img/sala-3.jpeg';
import CozinhaSb from '../assets/img/cozinha.jpeg';
import QuartoCasalSb from '../assets/img/quarto-casal.jpeg';
import QuartoSolteiroSb from '../assets/img/quarto-solteiro.jpeg';
import Carousel from 'react-bootstrap/Carousel';

export const LpBody = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={PraiaSb}
                    alt="Praia"
                />
                <Carousel.Caption>
                    <p>O flat é novíssimo e está localizado no Edifício Bella Maré, um condomínio recém
                        construído, situado na Avenida Pontes de Miranda, rua larga e tranquila. O condomínio
                        conta com garagem coberta, amplo hall e chuveiro na entrada</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SalaSb2}
                    alt="Sala"
                />
                <Carousel.Caption>
                    <p>A sala tem um sofá cama de casal, tv smart, wifi, ventilador de torre e cortinha
                        blackout, além de uma espaçosa varanda com rede para você e sua família desfrutarem
                        da brisa de Maragogi.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={SalaSb3}
                    alt="Sala"
                />
                <Carousel.Caption>
                    <p>O flat é aconchegante e ideal para famílias e amigos que querem relaxar e conhecer a
                        linda Maragogi da melhor forma possível. Localizado em um bairro tranquilo, a poucos
                        minutos a pé de uma das praias mais bonitas da cidade, a praia de Ponta de Mangue.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CozinhaSb}
                    alt="Cozinha"
                />
                <Carousel.Caption>
                    <p>
                        A cozinha é completa, com bancada para refeições, fogão, geladeira, microondas e
                        utensílios para cozinha, além de liquidificador, sanduicheira e air fryer.
                        O espaço também conta com um tanque e um varal de chão.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={QuartoCasalSb}
                    alt="Quarto-casal"
                />
                <Carousel.Caption>
                    <p>
                        A Suíte principal foi pensada para o descanso dos hóspedes e conta com uma cama de
                        casal, ar condicionado, bancada de apoio e cortina blackout.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={QuartoSolteiroSb}
                    alt="Quarto-solteiro"
                />
                <Carousel.Caption>
                    <p> Segundo quarto tem 2 camas de solteiro, que podem ser unidas para se tornarem uma
                        cama de casal, ar condicionado e cortina blackout. O espaço também conta com um
                        banheiro social. Além disso, tem roupas de cama, toalhas, cobertores e travesseiros.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default LpBody;