import { useRef } from 'react'
import React from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

function QRCodeGenerator({ value, backColor, fillColor, imageUrl }) {

    const qrRef = useRef();

    const downloadQRCode = () => {
        const node = qrRef.current;
        const scale = 2; // Ajusta el factor de escala según sea necesario

        toPng(node, { width: node.clientWidth * scale, height: node.clientHeight * scale, style: { transform: `scale(${scale})`, transformOrigin: 'top left' } })
            .then((dataUrl) => {
                const downloadLink = document.createElement('a');
                downloadLink.href = dataUrl;
                downloadLink.download = 'qrcode.png';
                downloadLink.click();
            })
            .catch((error) => {
                console.error('Error al generar la imagen:', error);
            });
    };

    return (
        <div style={{ textAlign: 'center', position: 'relative', display: 'inline-block' }}>
            <div ref={qrRef} style={{ background: backColor, padding: '16px', display: 'inline-block' }}>
                <QRCode value={value} size={256} bgColor={fillColor} fgColor={backColor} />
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Logo"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60px', // Ajusta el tamaño de la imagen según sea necesario
                            height: '60px',
                        }}
                    />
                )}
            </div>


            <div className='flex flex-row gap-2'>
                <button onClick={downloadQRCode} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Descargar PNG</button>
                <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Descargar SVG</button>
            </div>
        </div>
    );
}

export default QRCodeGenerator;