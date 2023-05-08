import React from 'react';

export default function EditForm({ form, setForm }) {
    const handleForm = (e) => {
        const name = e.target.name;
        const content = e.target.value;
        setForm(prev => ({ ...prev, [name]: content }));
    };

    return (
        <div className='flex flex-col p-4 border-2'>
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleForm}
                placeholder='제목을 입력하세요'
                className='pb-3 text-3xl font-bold outline-none' />
            <textarea
                name="content"
                placeholder='계이름을 입력하세요'
                className='w-full h-[50vh] outline-none text-xl leading-loose'
                value={form.content}
                onChange={handleForm}>
            </textarea>
        </div>
    );
}

