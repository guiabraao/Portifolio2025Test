import './styles.css'
import Perfil from '../../assets/perfil.jpg'
import "../../assets/finisher-header.es5.min.js";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import Icon1 from '../../assets/codeIcon.svg'
import 'lottie-react'
import Lottie1 from '../../assets/lottie1.json';
import Lottie from 'lottie-react';
import William from '../../assets/william.png'
import AOS from 'aos'
import Menu from '../../assets/menu.svg'
import Typed from "typed.js";

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
import Git from '../../assets/git.svg'
import GitHub from '../../assets/github.svg'
import Node from '../../assets/nodejs.svg'
import MySql from '../../assets/mysql.svg'

import Lottie2 from '../../assets/lottie2.json';

export default function AboutMe() {

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
            strings: ["Guilherme Junqueira Abraão"],
            typeSpeed: 80,
            backSpeed: 20,
            loop: true,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <>
            <div className="finisher-header header-aboutMe">
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
                    <h1 data-aos="zoom-in">SOBRE-MIM</h1>
                </div>
            </div>
            
            <div className="containerAboutMe">

                <div className="boxTxtIntroAboutme">
                    <div className="boxLeftTxt">
                        <h1><span ref={el} className="frase2"></span></h1>
                        <p>Duis rhoncus tincidunt magna eget dictum. Nulla eu eros molestie, fringilla mi non, tempor sem. Sed quis dignissim dolor. Donec vulputate nisl in lacus laoreet faucibus. Vestibulum aliquet, metus ac interdum vulputate, nulla lacus tincidunt sapien, eu tincidunt erat augue sed nisi. Integer elementum bibendum metus vitae hendrerit. Maecenas posuere, mi sit amet dignissim vulputate, eros nisl scelerisque dui, vitae vulputate dolor magna sed dui. Nam pharetra at elit a convallis.</p>
                    </div>
                    <div className="boxRightTxt">
                        <div className="animation3">
                            <Lottie animationData={Lottie2} />
                        </div>
                    </div>
                </div>

                <div className="boxLinguagens">
                    <div className="boxLeftLinguagens">
                        <h2>Linguagens e Tecnólogias</h2>
                        <p>Desde que ingressei no mundo da programação adquiri muito conhecimento e aprendi diversas linguagens de programação, do básico ao avançado. Ver o tanto de coisas que aprendi durante esses anos me faz lembrar do inicio de tudo, quando programava utilizando Portugol.</p>
                    </div>
                    <div className="boxRight">
                        <div className="itemRight" id='html'>
                            <img src={Html} alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="itemRight" id='css'>
                            <img src={Css} alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="itemRight" id='js'>
                            <img src={Js} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div className="itemRight" id='react'>
                            <img src={React} alt="" />
                            <p>ReactJS</p>
                        </div>
                        <div className="itemRight" id='php'>
                            <img src={Php} alt="" />
                            <p>PHP</p>
                        </div>
                        <div className="itemRight" id='cSharp'>
                            <img src={CSharp} alt="" />
                            <p>C#</p>
                        </div>
                        <div className="itemRight" id='laravel'>
                            <img src={Laravel} alt="" />
                            <p>Laravel</p>
                        </div>
                        <div className="itemRight" id='swift'>
                            <img src={Swift} alt="" />
                            <p>Swift</p>
                        </div>
                        <div className="itemRight" id='kotlin'>
                            <img src={Kotlin} alt="" />
                            <p>Kotlin</p>
                        </div>
                        <div className="itemRight" id='TypeScript'>
                            <img src={TypeScript} alt="" />
                            <p>TypeScript</p>
                        </div>
                        <div className="itemRight" id='TypeScript'>
                            <img src={MySql} alt="" />
                            <p>MySQL</p>
                        </div>
                        <div className="itemRight" id='node'>
                            <img src={Node} alt="" />
                            <p>Node.js</p>
                        </div>
                        <div className="itemRight" id='git'>
                            <img src={Git} alt="" />
                            <p>Git</p>
                        </div>
                        <div className="itemRight" id='gitHub'>
                            <img src={GitHub} alt="" />
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
                <footer>Copyright © 2025 by @guiabraao</footer>
            </div>
        </>
    )
}