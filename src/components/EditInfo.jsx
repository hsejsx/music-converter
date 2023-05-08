import React from 'react';

export default function EditInfo() {
    return (
        <dl className='flex justify-end w-full py-4'>
            <div className='flex'>
                <dt className='pr-2'>타입 :</dt>
                <dd className='pr-2'>계이름</dd>
            </div>
            <div className='flex'>
                <dt className='pr-2'>옥타브 :</dt>
                <dd>2</dd>
            </div>
        </dl>
    );
}

