import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function ResultModal({ title, content, handleChange }) {
    const musicRef = useRef();

    const handleClick = () => {
        const music = musicRef.current;
        html2canvas(music).then(canvas => {
            const img = canvas.toDataURL('image/png');
            saveFile(img, `${title}.png`);
        })
    }

    const saveFile = (dataUrl, filename) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[100vh] bg-white overflow-y-auto'>
            <div
                ref={musicRef}
                className='p-5 lg:p-10'>
                <h1 className='pb-3 text-3xl font-bold text-center'>{title}</h1>
                <p className='lg:px-28 text-3xl leading-loose whitespace-break-spaces'>{content}</p>
            </div>
            <div className='flex justify-center mb-5 lg:mb-10'>
                <button
                    onClick={handleClick}
                    type='button'
                    className='py-2 px-4 mr-8 bg-sky-500 hover:bg-sky-600 rounded-lg text-white text-lg font-bold'>
                    다운로드
                </button>
                <button
                    onClick={handleChange}
                    type='button'
                    className='py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white text-lg font-bold'>
                    닫기
                </button>
            </div>
        </section>
    );
}

