import { QRCodeSVG } from "qrcode.react";
import { useState, useRef, useEffect } from "react";
import cl from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../constans.js'

export default function QrCodeGenerator() {
    const [qrCodeValue, setQrCodeValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Состояние для блокировки кнопки
    const inputRef = useRef(null);

    useEffect(() => {
        // Обновляем состояние кнопки при изменении значения input
        if (inputRef.current) {
            setIsButtonDisabled(!inputRef.current.value.trim()); // Блокируем, если input пустой (после trim)
        }
    }, [qrCodeValue]); // Зависимость от qrCodeValue, чтобы срабатывало после генерации QR-кода

    const onClickHandler = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.value;
            if (!inputValue.trim()) {  // Дополнительная проверка перед генерацией (для надежности)
                return; // Ничего не делаем, если input пустой
            }

            setQrCodeValue(inputValue); // Генерируем QR-code из значения input
            try {
                const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
                localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue]));
            } catch (error) {
                console.error("Ошибка при работе с localStorage:", error);
            }
            inputRef.current.value = ''; // Очищаем поле ввода
            setIsButtonDisabled(true); // Блокируем кнопку после генерации
        }
    };

    const handleInputChange = () => {
        if (inputRef.current) {
            setIsButtonDisabled(!inputRef.current.value.trim());
        }
    }

    return (
        <div className={cl.container}>
            <QRCodeSVG size={200} value={qrCodeValue} />
            <hr />
            <div>
                <p style={{ color: 'grey' }}>QR-code со значением: <strong>{qrCodeValue}</strong></p>
            </div>
            <div>
                <input
                    placeholder='Введите текст'
                    className={cl.input}
                    type="text"
                    ref={inputRef}
                    onChange={handleInputChange} // Проверяем input при каждом изменении
                />
            </div>
            <div className="">
                <button
                    className={cl.btn}
                    onClick={onClickHandler}
                    disabled={isButtonDisabled} // Блокируем кнопку на основе состояния
                >
                    Сгенерировать QR-code и сохранить значение
                </button>
            </div>
        </div>
    );
}
