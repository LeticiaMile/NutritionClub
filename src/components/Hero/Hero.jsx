import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import NumberCounter from 'number-counter';


import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true : false;
    return (
        <div className="hero" id='home'>

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "165px": '238px'}}
                whileInView={{left: '8px'}}
                transition={{transition, type: 'tween'}}
                ></motion.div>
                    <span>O melhor club de nutrição da cidade</span>
                </div>

                {/* Cabeçalho do Hero*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Dieta </span>
                        <span>ideal</span>
                        </div>
                        <div>
                            <span> para o seu corpo</span>
                        </div>
                        <div>
                        <span>
                        Você sabia que a saúde do seu corpo vai além de um ideal físico? <br></br>
                        Uma alimentação equilibrada e rica em nutrientes e uma rotina de exercícios físicos são essenciais para manter-se saudável.
                        Queremos estar com você, conhecendo suas necessidades e ajudando a alcançar seus desafios e ouvir ainda mais o seu corpo e conquistar a boa forma ideal para você.
                                </span>
                        </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                          <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>Nutricionistas especializados</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                        </span>
                        <span>membros que se juntaram</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>programas de nutrição</span>
                    </div>
                </div>
                {/* hero buttons*/}
                <div className="hero-buttons">
                    <buttons className="btn">Iniciar</buttons>
                    <buttons className="btn">Saber Mais</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Entrar</button>


                <motion.div 
                initial={{ right: "-1rem" }}
                whileInView={{ right: "4rem" }}
                transition={transition}
                className="heart-rate">

                    <img src={Heart} alt="" />
                    <span>Frequência cardiaca</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero image*/}
                <img src={hero_image} alt="" className="hero-image" />
                
                <motion.img
                initial ={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back" />
            
                </div>
        </div>

    );
};

export default Hero