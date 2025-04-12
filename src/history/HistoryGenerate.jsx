import React from 'react';
import {GENERATE_DATA} from "../constans.js";
import {QRCodeSVG} from "qrcode.react";
import './h_generate.css'

const HistoryGenerate = () => {
    const info = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');


    return (
        <div>
            <div className="history_generate">
                {info.map((text) => (
                    <p key={text}>
                            {text}
                        <QRCodeSVG size={100} value={text}/>
                    </p>

                ))}
            </div>

        </div>
    );
};

export default HistoryGenerate;