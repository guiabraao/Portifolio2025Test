import './styles.css'
import Perfil from '../../assets/perfil.jpg'
import "../../assets/finisher-header.es5.min.js";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../../assets/codeIcon.svg'
import 'lottie-react'
import Lottie1 from '../../assets/lottie1.json';
import EmailJS from '@emailjs/browser'
import Lottie from 'lottie-react';
import William from '../../assets/william.png'
import AOS from 'aos'
import Menu from '../../assets/menu.svg'
import Typed from "typed.js";

import Lottie3 from '../../assets/lottie3.json';

export default function Contato() {

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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos.')
            return;
        }

        const templeteParms = {
            from_name: name,
            message: mensagem,
            email: email
        }

        EmailJS.send('service_o11g70i', 'template_0nt80u7', templeteParms, '2yEIfIVajKnumjGT5')
            .then((response) => {
                alert('Email enviado!')
                console.log("Email enviado!", response.status, response.text)
                setName('')
                setEmail('')
                setMensagem('')
            }, (err) => {
                console.log('Erro: ', err)
            })
    }

    return (
        <>
            <div className="finisher-header header-contact">
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
                    <h1 data-aos="zoom-in">CONTATO</h1>
                </div>
            </div>

            <div className="containerContato">

                <div className="boxLeftContato">
                    <div className="boxForm">

                            <form data-aos="zoom-in-down" onSubmit={sendEmail}>
                                <h2>Entre em contato.</h2>
                                <input
                                    type="text"
                                    name="nome"
                                    id="inputContact"
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="Nome:"
                                    value={name}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="inputContact"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    placeholder="Email:"
                                    value={email}
                                />
                                <textarea
                                    name="mensagem"
                                    id="mensagem"
                                    cols="30"
                                    rows="10"
                                    onChange={(e) => { setMensagem(e.target.value) }}
                                    placeholder="Mensagem:"
                                    value={mensagem}
                                ></textarea>

                                <button type="submit">Enviar</button>
                            </form>
                          
                    </div>
                </div>

                <div className="boxRightContato">
                    <div className="boxAnimation3">
                        <div className="animation3">
                            <Lottie animationData={Lottie3} />
                        </div>
                    </div>
                </div>

                <footer>Copyright © 2025 by @guiabraao</footer>
            </div>

        </>
    )
}