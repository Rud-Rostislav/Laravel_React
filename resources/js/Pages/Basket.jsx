import React from 'react';
import Header from "@/Pages/Header.jsx";
import {Link} from "@inertiajs/react";

const Basket = ({basket}) => {
    const totalPrice = basket.map((product) => product.price).reduce((a, b) => a + b, 0);

    return (
        <div>
            <Header/>


            {basket.length === 0 ? <h1>Кошик порожній</h1> :
                <div>
                    <h1>Кошик</h1>
                    <Link href={route('clear-basket')} style={{fontSize: '1.2rem'}}>Очистити весь кошик</Link>
                    <h2 style={{fontSize: '1.4rem', margin: '1vh'}}>Загально до сплати {totalPrice} грн</h2>
                </div>
            }

            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', margin: '5vh'}}>
                {basket.map((product) => (
                    <div key={product.id} style={{
                        boxShadow: 'black 0px 0px 10px -4px',
                        borderRadius: '10px',
                        padding: '1rem',
                        width: '25vw'
                    }}>
                        <h2 style={{fontSize: '1.4rem'}}>{product.name}</h2>
                        <p style={{fontSize: '1.2rem'}}>Ціна: {product.price} грн</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Basket;
