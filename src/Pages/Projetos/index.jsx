import './styles.css'
import "../../assets/finisher-header.es5.min.js";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'lottie-react'
import Lottie from 'lottie-react';
import PNG from '../../assets/pngTest.jpg'
import William from '../../assets/william.png'
import Copa from '../../assets/copaAmerica.png'
import AOS from 'aos'
import Menu from '../../assets/menu.svg'
import Close from '../../assets/close.svg'
import LottieReact from '../../assets/react.json'
import ASAP from '../../assets/asap.png'
import Min from '../../assets/90min.png'
import Brasil from '../../assets/brasil.png'
import Mercedes from '../../assets/mercedes.png'

export default function Projetos() {

    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        { id: 1, title: "Pelada Nova Geração", text: "Esse projeto foi desenvolvido por mim em um free lacnce para a pelada de futebol na qual participo, feito no inicio de 2024 e um sistema voltado para o mobile onde dentro dele tem todas as estatisticas dos jogadores, informações sobre a pelada, também possui a seleção da semana, onde toda semana os melhores jogadores aparecem.", img: PNG, link: 'https://png-e6w2.vercel.app', description: "Detalhes do card 1" },
        { id: 2, title: "William Ind. Aeronáutica", text: "Fiz esse projeto para empresa William Indústria Aeronáutica, na qual estagiei durante 4 meses. Desenvolvido com ReactJS e Node.js a landingpage conta com todas informações da empresa. ",img: William, link: 'https://www.williamaeronautica.com.br', description: "Detalhes do card 2" },
        { id: 3, title: "ASAP", text: "Este projeto foi desenvolvido por mim como um trabalho freelance no início de 2024, com o objetivo de criar a presença digital da ASAP Contábil de forma moderna, profissional e acessível. O site foi desenvolvido utilizando React, com foco em performance, organização e responsividade, garantindo uma boa experiência tanto no desktop quanto no mobile.", img: ASAP, link: 'https://www.asapcontabil.com.br', description: "Detalhes do card 3" },
        { id: 4, title: "90min", text: "Este projeto foi desenvolvido por mim como um trabalho freelance com o objetivo de criar um e-commerce voltado para a venda de camisas e chuteiras de futebol, oferecendo uma experiência moderna, rápida e intuitiva para os usuários. A aplicação foi construída utilizando React no front-end, Node.js no back-end e MongoDB como banco de dados, garantindo escalabilidade e boa organização das informações.", img: Min, link: 'https://png-e6w2.vercel.app', description: "Detalhes do card 4" },
        { id: 5, title: "Mercedes", text: "Landing page institucional da Mercedes-Benz para apresentação de modelos, desenvolvida em React.js, com GSAP + ScrollTrigger para animações suaves baseadas em scroll. O projeto prioriza UI premium, transições fluidas e organização visual dos veículos, reforçando a identidade de marca com foco em experiência do usuário e performance.", img: Mercedes, link: 'https://png-e6w2.vercel.app', description: "Detalhes do card 4" },
        { id: 6, title: "CBF", text: "Landing page interativa sobre os títulos do Brasil na Copa do Mundo, desenvolvida em React.js, utilizando GSAP + ScrollTrigger para animações baseadas em scroll e Three.js para elementos 3D. O projeto foca em performance, fluidez de navegação e storytelling visual, criando uma experiência imersiva e moderna.", img: Brasil, link: 'https://png-e6w2.vercel.app', description: "Detalhes do card 4" },

    ];


    const [expanded, setExpanded] = useState(false);

    const toggleNav = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false
        })
    })

    useEffect(() => {
        new FinisherHeader({
            "count": 100,
            "size": {
                "min": 2,
                "max": 8,
                "pulse": 0
            },
            "speed": {
                "x": {
                    "min": 0,
                    "max": 0.4
                },
                "y": {
                    "min": 0,
                    "max": 0.6
                }
            },
            "colors": {
                "background": "#1b443c",
                "particles": [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff"
                ]
            },
            "blending": "overlay",
            "opacity": {
                "center": 1,
                "edge": 0
            },
            "skew": 0,
            "shapes": [
                "c"
            ]
        });
    }, [])

    return (
        <>
            <div className="finisher-header header-Projetos">
                <div className="nav-list-header">
                    <ul data-aos="fade-down">
                        <Link to='/' className="linkItem"><li><span>Home</span></li></Link>
                        <Link to='/sobremim' className="linkItem"><li><span>Sobre-Mim</span></li></Link>
                        <Link to='/projetos' className="linkItem"><li><span>Projetos</span></li></Link>
                        <Link to='/contato' className="linkItem"><li><span>Contato</span></li></Link>
                    </ul>
                </div>
                <div className={"container-header-mob" + (expanded ? " expanded" : "")}>
                    <div  className={`btnExpandirHeader ${expanded ? "ativo" : ""}`} onClick={toggleNav}>
                        <img src={Menu} alt="Menu Bar" />
                    </div>
                    <div className={"navList" + (expanded ? " show" : "")}>
                        <ul>
                            <Link to='/' className="linkItem"><li className="boxNavItem" data-aos="fade-down" data-aos-delay="200"><span>Home</span></li></Link>
                            <Link to='/sobremim' className="linkItem"><li className="boxNavItem" data-aos="fade-down" data-aos-delay="600"><span>Sobre-Mim</span></li></Link>
                            <Link to='/projetos' className="linkItem"><li className="boxNavItem" data-aos="fade-down" data-aos-delay="1000"><span>Projetos</span></li></Link>
                            <Link to='/contato' className="linkItem"><li className="boxNavItem" data-aos="fade-down" data-aos-delay="1400"><span>Contato</span></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="containerContentHeader">
                    <h1 data-aos="zoom-in">PROJETOS</h1>
                </div>
            </div>

            <div className="containerProjetos">
                <div className="projetos">
                    <div className="titleProjetos"><h1>Meus Projetos</h1></div>

                    <div className="boxProjetos">


                        {cards.map((card) => (
                            <div className="cardProjeto" key={card.id} onClick={() => setSelectedCard(card)}>
                                <div className="cardContent">
                                    <div className="cardTopSection">
                                        <img src={card.img} alt={card.title}/>
                                    </div>
                                    <div className="cardProjetoContent">
                                        <div className="cardText">
                                            <h2>{card.title}</h2>
                                            <p>{card.text}</p>
                                        </div>
                                        <div className="cardList">
                                            <div className="boxAnimationList">
                                                <div className="animiationList1">
                                                    <Lottie animationData={LottieReact} />
                                                </div>
                                            </div>
                                            <div className="boxAnimationList">
                                                <div className="animiationList1">
                                                    <Lottie animationData={LottieReact} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {selectedCard && (
                            <div className="detalhesOverlay">
                                <div className="boxModal">
                                    <div className="modalTop">
                                        <img src={selectedCard.img} alt="" />
                                    </div>
                                    <div className="modalContent">
                                        <div className="boxLing">
                                            <p className="front">Front-end</p>
                                            <p className="back">Node.js</p>
                                        </div>
                                        <h2>{selectedCard.title}</h2>
                                        <p>{selectedCard.text}</p>
                                        <div className="boxLinkMOdal">
                                            <a href={selectedCard.link}><button>Visite</button></a>
                                        </div>
                                    </div>
                                    <div className="boxClose"><img src={Close} onClick={() => setSelectedCard(null)}/></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <footer>Copyright © 2025 by @guiabraao</footer>
            </div>
        </>
    )
}