import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import organomix from '../../assets/organomix.png';
import maxtitanium from "../../assets/maxtitanium.png";
import nutry from "../../assets/nutry.png";
import tick from "../../assets/tick.png";


const Reasons = () => {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Algumas razões</span>

                <div>
                    <span className="stroke-text">Por que</span>
                    <span> Nos escolher?</span>
                </div>

                <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>Suporte 24h</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Compromisso com o cliente</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Agilidade e eficiência</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Acessível: Computador, celular e tablet</span>
                </div>
                    </div>
                    <span style={{
                        color: "var(--gray)",
                        fontWeight: "normal",
                    }}
                    >
                        Nossos parceiros
                        </span>


                    <div className="partners">
                        <img src={organomix} alt="" />
                        <img src={maxtitanium} alt="" />
                        <img src={nutry} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Reasons