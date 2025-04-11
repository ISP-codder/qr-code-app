import React from 'react';
import QrCodeGenerator from "./qrCode/QrCodeGenerator.jsx";
import QrCodeScanner from "./qrCode/QrCodeScanner.jsx";
import {HashRouter, Route, Routes, Link} from "react-router-dom"; // Изменено: BrowserRouter -> HashRouter
import './Layout.css'
import AboutUs from "./AboutUs.jsx";
import HistoryReading from "./history/HistoryReading.jsx";
import HistoryGenerate from "./history/HistoryGenerate.jsx";

export default function Layout(){
    return (
        <HashRouter> {/* Изменено: BrowserRouter -> HashRouter */}
            <div className='navbar'>
                <div className="navbar__links">
                    <Link to='/generateqr'>Сгенерировать Qr-code </Link>
                    <Link to='/readqr'>Прочитать Qr-code </Link>
                    <Link to='/h_reading'>История сканирования </Link>
                    <Link to='/h_generate'>История генерирования</Link>
                </div>

            </div>
            <Routes>
                <Route path='*' element={<AboutUs/>}/>
                <Route path='generateqr' element={<QrCodeGenerator/>}/>
                <Route path='readqr' element={<QrCodeScanner/>}/>
                <Route path='h_reading' element={<HistoryReading/>}/>
                <Route path='h_generate' element={<HistoryGenerate/>}/>
            </Routes>
        </HashRouter>
);
};

