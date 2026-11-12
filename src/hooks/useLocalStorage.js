import { useState, useEffect } from 'react';

function useLocalStorage(chave, valorInicial) {
    const [valor, setValor] = useState(() => {
        try {
            const itemSalvo = localStorage.getItem(chave);

            return itemSalvo !== null
                ? JSON.parse(itemSalvo)
                : valorInicial;
        } catch {
            return valorInicial;
        }
    });

    useEffect(() => {
        localStorage.setItem(chave, JSON.stringify(valor));
    }, [chave, valor]);

    return [valor, setValor];
}

export default useLocalStorage;