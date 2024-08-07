import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({product, basketQuantity, setBasketQuantity}) => {
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const token = document.head.querySelector('meta[name="csrf-token"]');
        if (token) {
            setCsrfToken(token.content);
        }
    }, []);

    const addToBasket = async (product) => {
        await axios.post(
            route('add-to-basket', product.id),
            null,
            {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                }
            }
        );
        toast.success('Додано до кошика', {
            position: "top-right",
            autoClose: 1500,
            theme: "dark",
        });
        setBasketQuantity(basketQuantity + 1);
    };

    return (
        <>
            <button onClick={() => setTimeout(() => addToBasket(product), 100)} className="black_button green">
                Додати у кошик
            </button>
        </>
    );
};

export default Add;
