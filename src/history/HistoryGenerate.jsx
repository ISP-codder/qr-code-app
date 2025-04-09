import React from 'react';
import {GENERATE_DATA} from "../constans.js";
import {QRCodeSVG} from "qrcode.react";

const HistoryGenerate = () => {
    const info = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');


    return (
        <div>
            {info.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG size={200} value={text}/>
                </p>

            ))}
        </div>
    );
};

export default HistoryGenerate;