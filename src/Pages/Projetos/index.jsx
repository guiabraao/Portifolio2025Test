import './styles.css'
import Perfil from '../../assets/perfil.jpg'
import "../../assets/finisher-header.es5.min.js";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../../assets/codeIcon.svg'
import 'lottie-react'
import Lottie1 from '../../assets/lottie1.json';
import Lottie from 'lottie-react';
import PNG from '../../assets/pngTest.jpg'
import William from '../../assets/william.png'
import Copa from '../../assets/copaAmerica.png'
import AOS from 'aos'
import Menu from '../../assets/menu.svg'
import Typed from "typed.js";
import Close from '../../assets/close.svg'
import LottieReact from '../../assets/react.json'

import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import Js from '../../assets/js.svg'
import CSharp from '../../assets/csharp.svg'
import Kotlin from '../../assets/kotlin.svg'
import Laravel from '../../assets/laravel.svg'
import Php from '../../assets/php.svg'
import React from '../../assets/reactIcon.svg'
import Swift from '../../assets/swift.svg'
import TypeScript from '../../assets/typescript.svg'

export default function Projetos() {

    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        { id: 1, title: "Pelada Nova Geração", text: "Esse projeto foi desenvolvido por mim em um free lacnce para a pelada de futebol na qual participo, feito no inicio de 2024 e um sistema voltado para o mobile onde dentro dele tem todas as estatisticas dos jogadores, informações sobre a pelada, também possui a seleção da semana, onde toda semana os melhores jogadores aparecem.", img: PNG, description: "Detalhes do card 1" },
        { id: 2, title: "William Ind. Aeronáutica", text: "Fiz esse projeto para empresa William Indústria Aeronáutica, na qual estagiei durante 4 meses. Desenvolvido com ReactJS e Node.js a landingpage conta com todas informações da empresa. ",img: William, description: "Detalhes do card 2" },
        { id: 3, title: "SoprtFit", text: "Projeto feito na faculdade desenvolvido em grupo, simundo umala equipe completa de desenvolvimento, eu fui um dos dois desenvolvedores do projeto. O projeto consta em um sistema para você ter uma melhor gestão de treino.", img: William, description: "Detalhes do card 3" },
        { id: 4, title: "API COPA-AMERICA", text: "Duis rhoncus tincidunt magna eget dictum. Nulla eu eros molestie, fringilla mi non, tempor sem. Sed quis dignissim dolor. Donec vulputate nisl in lacus laoreet faucibus. Vestibulum aliquet, metus ac interdum vulputate.", img: Copa, description: "Detalhes do card 4" },
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
                    <div className="btnExpandirHeader" onClick={toggleNav}>
                        <img src={Menu} alt="Menu Bar" />
                    </div>
                    <div className={"navList" + (expanded ? " show" : "")}>
                        <ul>
                            <Link to='/' className="linkItem"><li className="boxNavItem"><span>Home</span></li></Link>
                            <Link to='/sobremim' className="linkItem"><li className="boxNavItem"><span>Sobre-Mim</span></li></Link>
                            <Link to='/projetos' className="linkItem"><li className="boxNavItem"><span>Projetos</span></li></Link>
                            <Link to='/contato' className="linkItem"><li className="boxNavItem"><span>Contato</span></li></Link>
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
                                            <button>Visite</button>
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