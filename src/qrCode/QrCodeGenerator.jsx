import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import cl from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../constans.js'

export default function QrCodeGenerator() {
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const onClickHandler = () => {
        try {
            const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
        } catch (error) {
            console.error("Ошибка при работе с localStorage:", error);
        }
    };

    return (
        <div className={cl.container}>
            <QRCodeSVG size={200} value={value} />
            <hr />
            <div>
                <p style={{ color: 'grey' }}>QR-code со значением: <strong>{value}</strong></p>
            </div>
            <div>
                <input
                    placeholder='Введите текст'
                    className={cl.input}
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="">
                <button className={cl.btn} onClick={onClickHandler}>
                    Сохранить значение
                </button>
            </div>
        </div>
    );
}
