import './styles.css'
import Perfil from '../../assets/perfil.jpg'
import "../../assets/finisher-header.es5.min.js";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../../assets/codeIcon.svg'
import 'lottie-react'
import Lottie1 from '../../assets/lottie1.json';
import Lottie from 'lottie-react';
import William from '../../assets/william.png'
import AOS from 'aos'
import Menu from '../../assets/menu.svg'
import Typed from "typed.js";
import PNG from '../../assets/pngTest.jpg'
import Team from '../../assets/team.svg'
import Code from '../../assets/code.svg'
import Mobile from '../../assets/mobile.svg'

function Home() {

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

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Guilherme Junqueira Abraão", "Front-End Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);



    return (
        <>
            <header className="finisher-header">
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
                    <p data-aos="zoom-in">Olá Usuario(a), Meu nome é Guilherme Junqueira. Sou um Desenvolvedor Web com algumas experiencias de aplicações webs. Atualmente estou a procura de novos desafios e oportunidades. Fiz esse portífolio com intuito de mostrar algumas das minhas habilidades e tecnicas.</p>
                    <img src={Perfil} alt="Perfil Img" data-aos="fade-left" />
                </div>
            </header>


            <div className="containerHome">

                <div className="boxTxtIntroHome">
                    <div className="boxTxtIntro"><span ref={el} className="frase"></span></div>
                </div>

                <div className="boxSkills">
                    <div className="txtIntroSkills">
                        <h2>Minhas <span className='habilidades'>Habilidades</span></h2>
                        <p>Algumas de minhas habilidades que agregam ao desenvolvimento de aplicações.</p>
                    </div>
                    <div className="containerSkills" data-aos="fade-down">
                        <div className="itemSkills">
                            <div className="itemSkillsTop">
                                <img src={Team} alt="IconSkill 1" />
                                <h2>Trabalho em equipe</h2>
                            </div>
                            <div className="contentItemSkills"><p>Durante esses anos na área tive muitos trabalhos em equipe, também com o estagio aprendi muito sobre trabalho em equipe.</p></div>
                        </div>
                        <div className="itemSkills">
                            <div className="itemSkillsTop">
                                <img src={Mobile} alt="IconSkill 2" />
                                <h2>Engineering Management</h2>
                            </div>
                            <div className="contentItemSkills"><p>Tenho experiencias com o desenvolvimento mobile, conhecendo linguagens como Swift(IOS) e o Flutter(Android).</p></div>
                        </div>
                        <div className="itemSkills">
                            <div className="itemSkillsTop">
                                <img src={Code} alt="IconSkill 3" />
                                <h2>Engineering Management</h2>
                            </div>
                            <div className="contentItemSkills"><p>I help teams execute engineering projects that address complex challenges and exceed expectations.</p></div>
                        </div>
                    </div>
                </div>

                <div className="boxAbtMe">
                    <h2><span className="curiosidade">Curiosidades</span> Sobre-Mim</h2>
                    <div className="containerAbtMe">
                        <div className="txtAbtMe">
                            <p>Começei minha jornada na programação em 2022, quando entrei no Colégio Cotemig, onde durante três anos consegui construir uma base sólida para o mecardo de trabalho. Lá foram anos de grande aprendizado, em 2024 formei no curso de Desenvolvimentos Web e Mobile. Em 2025 ingressei na faculdade de Análise e Desenvolvimento de Sistemas na PUC MINAS, onde ainda estou cursando no segundo período.   </p>
                        </div>
                        <div className="boxLottie1">
                            <div className="animation1">
                                <Lottie animationData={Lottie1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="boxProjetosHome">
                    <div className="txtProjetos">
                        <h2>Meus <span className="projetosLabel">Projetos</span></h2>
                        <p>Alguns dos meus principais projetos pessoais, onde desenvolvi sozinho.</p>
                    </div>
                    <div className="containerProjetos">
                        <div className="lista-projetos" data-aos="zoom-in">

                            <div className="cardItemHome">
                                <div className="cardTopHome">
                                    <div className="borderCard"></div>
                                    <img src={William} alt="" />
                                </div>
                                <div className="cardContentHome">
                                    <h2>William Ind. Aeronáutica</h2>
                                    <p>Fiz esse projeto para empresa William Indústria Aeronáutica, na qual estagiei durante 4 meses. Desenvolvido com ReactJS e Node.js a landingpage conta com todas informações da empresa. </p>
                                </div>
                            </div>

                            <div className="cardItemHome">
                                <div className="cardTopHome">
                                    <div className="borderCard"></div>
                                    <img src={PNG} alt="" />
                                </div>
                                <div className="cardContentHome">
                                    <h2>Pelada Nova Geração</h2>
                                    <p>Esse projeto foi desenvolvido em um free lacnce para a pelada de futebol na qual participo, e um sistema voltado para o mobile onde dentro dele tem todas as estatisticas dos jogadores, informações sobre a pelada, também possui a seleção da semana, onde toda semana os melhores jogadores aparecem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>Copyright © 2025 by @guiabraao</footer>
            </div>
        </>
    )
}

export default Home