import React from 'react';
import {GENERATE_DATA, SCAN_DATA} from '../constans.js';
import {QRCodeSVG} from "qrcode.react";

const HistoryReading = () => {
    const data =  JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG size={200} value={text}/>
                </p>

            ))}
        </div>
    );
};

export default HistoryReading;

