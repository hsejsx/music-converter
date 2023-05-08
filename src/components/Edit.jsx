import React, { useState } from 'react';
import ResultModal from './ResultModal';
import EditForm from './EditForm';
import EditInfo from './EditInfo';

export default function Edit() {
    const [change, setChange] = useState();
    const [form, setForm] = useState({ title: '', content: '' });

    const handleChange = () => setChange(false);
    const handleDelete = () => setForm({ title: '', content: '' });

    const onClickChangeBtn = () => {
        const current = [...form.content.split('')];
        const changed = current.map(item => {
            switch (item) {
                case '도': return 1;
                case '레': return 2;
                case '미': return 3;
                case '파': return 4;
                case '솔': return 5;
                case '라': return 6;
                case '시': return 7;

                default:
                    return item;
            }
        });
        setChange(changed);
    }

    return (
        <section className='w-11/12 lg:w-7/12'>
            <EditForm form={form} setForm={setForm} />
            <EditInfo />
            <div className='w-full flex justify-center'>
                <button
                    type='button'
                    className='p-2 mr-8 bg-red-500 hover:bg-red-600 rounded-lg text-white text-lg font-bold'
                    onClick={handleDelete}>
                    전체삭제
                </button>
                <button
                    type='button'
                    className='p-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white text-lg font-bold'
                    onClick={onClickChangeBtn}>
                    변환하기
                </button>
            </div>

            {change && <ResultModal title={form.title || '무제'} content={change} handleChange={handleChange} />}
        </section>
    );
}

