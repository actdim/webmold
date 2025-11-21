import { useState } from 'react';
import './prime.css';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

function Prime() {
    const [name, setName] = useState('');
    return (
        <div className='p-6 bg-gray-100 min-h-screen'>            
            {/* PrimeReact Card */}
            <Card className='mb-4 p-4 shadow-lg'>
                <h2 className='text-xl font-semibold mb-2'>Введите имя:</h2>
                <InputText
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Ваше имя'
                    className='w-full mb-4'
                />
                <Button
                    label={`Привет, ${name || 'гость'}`}
                    className='p-button-primary bg-amber-500 border-2 rounded-3xl'
                />
            </Card>
            <div className='prose-lg'>
                <p>Text with Tailwind Typography</p>
            </div>
        </div>
    );
}

export default Prime;
