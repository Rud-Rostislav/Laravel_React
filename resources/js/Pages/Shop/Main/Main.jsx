import {Head, Link} from "@inertiajs/react";
import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import Add from "@/Pages/Shop/Basket/Add.jsx";
import {motion} from 'framer-motion';

const Main = ({basket, products}) => {
    const [basketQuantity, setBasketQuantity] = useState(basket.length);

    return (
        <>
            <Header basketQuantity={basketQuantity}/>
            <Head title="Головна"/>

            <main>
                <ToastContainer/>

                <div className='container_1'>
                    <motion.div
                        initial={{opacity: 0, x: '-10vw'}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 5}}
                    >
                        <img src={"images/main/1.png"} alt="Image"/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: '10vw'}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 5}}
                    >
                        <p>Новий iPhone 16 Pro Max</p>
                    </motion.div>

                </div>

                <div className='container_2'>
                    <motion.div
                        initial={{opacity: 0, x: '-20vw'}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 2}}
                    >
                        <img className='img_container_2' src={"images/main/2.png"} alt="Image"/>
                    </motion.div>

                    <motion.div
                        initial={{marginTop: 0}}
                        whileInView={{marginTop: 100}}
                        transition={{duration: 2}}
                    >
                        <p className='p_container_2'>Вибір техніки на будь який смак</p>
                    </motion.div>

                    <motion.div
                        initial={{x: '-75vw'}}
                        whileInView={{x: 0}}
                        transition={{duration: 2}}
                    >
                        <div className="products">
                            {products.map((product) => (
                                <div className="product" key={product.id}>

                                    <Link className="product_link" href={route('products.show', product.id)}>
                                        {product.photos && product.photos.length > 0
                                            ? <img src={`/storage/${product.photos[0].path}`}
                                                   alt="Product image"/>
                                            : <img src='/images/empty_image.png' alt="Empty image"/>
                                        }
                                        <p className="product_name">{product.name}</p>
                                    </Link>

                                    <div className='product_button'>
                                        {product.quantity > 0
                                            ? <Add product={product} basketQuantity={basketQuantity}
                                                   setBasketQuantity={setBasketQuantity} basket={basket}/>
                                            : <button className='black_button no_product'>Немає в наявності</button>
                                        }
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 2}}
                    >
                        <Link className="shop_button" href={route('products.index')}>Переглянути все</Link>
                    </motion.div>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default Main
