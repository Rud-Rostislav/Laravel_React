import React from 'react';
import Header from "@/Components/Header.jsx";
import {Head, useForm} from '@inertiajs/react';
import Footer from "@/Components/Footer.jsx";

const Create = ({categories}) => {
    const {data, setData, post, errors} = useForm({
        name: '',
        description: '',
        price: '',
        quantity: '',
        photos: [],
        category_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <>
            <Header/>
            <Head title="Додати товар"/>

            <main className='main_create'>
                <form onSubmit={submit} className="add_product">

                    <input type="text" name="name"
                           onChange={e => setData('name', e.target.value)} placeholder='Назва'/>
                    {errors.name && <p className='red'>{errors.name}</p>}

                    <textarea name="description"
                              onChange={e => setData('description', e.target.value)} placeholder='Опис'></textarea>
                    {errors.description && <p className='red'>{errors.description}</p>}

                    <input type="text" name="price"
                           onChange={e => setData('price', e.target.value)} placeholder='Ціна'/>
                    {errors.price && <p className='red'>{errors.price}</p>}

                    <input type="number" name="quantity"
                           onChange={e => setData('quantity', e.target.value)} placeholder='Кількість'/>
                    {errors.quantity && <p className='red'>{errors.quantity}</p>}

                    <select name="category_id" onChange={e => setData('category_id', e.target.value)}>
                        <option value="">Обери категорію</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <p className='red'>{errors.category_id}</p>}

                    <input type="file" name="photos" multiple accept="image/*"
                           onChange={e => setData('photos', Array.from(e.target.files))}
                    />
                    {errors.photos && <p className='red'>{errors.photos}</p>}

                    {data.photos.length > 0 &&
                        <div className='add_product_image_container'>
                            {data.photos.map((file, index) => (
                                <img key={index} src={URL.createObjectURL(file)} alt='Add product image'/>
                            ))}
                        </div>
                    }

                    <input type="submit" className='add_to_basket' value='Додати товар'/>

                </form>
            </main>
            <Footer/>
        </>

    );
}

export default Create;
