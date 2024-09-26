import React from 'react'
import { useState } from 'react'
import QRCodeGenerator from './QRCodeGenerator'

function Home() {
    const [backColor, setBackColor] = useState(['#ffffff'])
    const [fillColor, setFillColor] = useState(['#000000'])

    const handleBGChange = (event) => {
        setBackColor(event.target.value); // Actualiza el estado con el nuevo color seleccionado
    };

    const handleFillChange = (event) => {
        setFillColor(event.target.value); // Actualiza el estado con el nuevo color seleccionado
    };

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [imgUrl, setImgUrl] = useState('');

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    

    return (
        <div className='flex flex-row max-[768px]:flex-col w-full min-h-[100vh] bg-slate-950 pt-20 max-[768px]:pt-12 items-center justify-center text-white text-center'>
            <div className='flex flex-col w-[50%] max-[768px]:w-[100%] min-h-[100vh] max-[768px]:min-h-[50vh] items-center justify-center'>

                <h1 className='text-xl max-[768px]:text-lg pb-8 text-gray-400 font-bold'>Genera tu QR Personalizado, comencemos...</h1>

                <form className='flex flex-col text-center gap-2' action="">

                    <label className="block mb-2 font-medium text-sm text-gray-300 dark:text-white" for="file_input">Subir logotipo</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept=".png, .jpg, .jpeg" title='Selecciona el archivo' onChange={handleImgChange}></input>

                    <label className="block mb-2 font-medium text-sm text-gray-300 dark:text-white" for="simple-search">Enlace</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                            </svg>

                        </div>
                        <input value={value}
                            onChange={handleChange} type="text" id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pega el enlace aquí..." required />
                    </div>

                    <label for="hs-color-input" className="block text-sm font-medium mb-2 dark:text-white">Fondo | Relleno</label>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <input type="color" onChange={handleBGChange} className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="bg-color-input" value={backColor} title="Selecciona un color"></input>
                        <input type="color" onChange={handleFillChange} className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="fill-color-input" value={fillColor} title="Selecciona un color"></input>
                    </div>
                </form>

            </div>

            <div className='flex flex-col w-[50%] max-[768px]:w-[100%] h-[100vh] max-[768px]:h-[50vh] items-center justify-center max-[768px]:justify-start'>

                <h1 className='pb-4'> <svg className="w-6 h-6 text-gray-400 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                    Vista Previa</h1>

                <QRCodeGenerator value={value} backColor={backColor} fillColor={fillColor} imageUrl={imgUrl}></QRCodeGenerator>

            </div>
        </div>
    )
}

export default Home