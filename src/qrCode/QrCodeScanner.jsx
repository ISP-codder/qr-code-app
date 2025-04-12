import React, {useState} from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import './QrCodeScanner.css'
import {SCAN_DATA} from '../constans.js'

export default function  QrCodeScanner() {
    const [scanned, setScanned] = useState(null)

    const scanHandler =(result) =>{
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
    }

    const stylesSettings ={
        container: {width: 350}
    }

    const settings= {
        audio: false,
        finder: false,
    }
    return  <div className='scanner'>
        <div>
            <Scanner components={settings} styles={stylesSettings} onScan={scanHandler} />

        </div>
        <div className='scanner_p'>
            <p className='block_result_scanning'>Отсканированный QR-code:
                <strong> {scanned}</strong></p>

        </div>
    </div>
};