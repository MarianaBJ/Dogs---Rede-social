import React, { useState } from 'react'


const validation = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        message: 'Preencha um email válido'
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
        message: 'A senha precisa ter 1 caracter maiúsculo, 1 minúculo e 1 dígito. Com no mínimo 8 caracteres.'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas.'
    }
}

export default function useForm(type) {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    function validate(value) {

        if (!type) return true;

        if (value.length === 0) {
            setError('Preencha um valor.')
            return false;
        } else if (validation[type] && !validation[type].regex.test(value)) {
            setError(validation[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error)
            validate(target.value)
        setValue(target.value)
    }
    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}
