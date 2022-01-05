import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function ProductPage(props) {
    const { id } = useParams()//get product id
    const productInfo = useSelector(state => state.products.filter(product => product.id == id)[0]) //0?
    return (
        <div className="App">
            <Header />
            <div className='product-container'>
                <div className='product-card'>
                    <div className='product-images'>
                        <img src={productInfo.mainImage} />
                        <img src={productInfo.secondaryImage} />
                    </div>
                    <div className='product-info'>
                        <h2>{productInfo.name}</h2>
                        <h3>Описание</h3>
                        <p>
                            {productInfo.description}
                        </p>
                        <h3>Размер</h3>
                        <div className='size-list'>
                            <div>
                                <input id="size-1" type="radio" name='size'></input>
                                <label htmlFor='size-1'>S</label>
                            </div>
                            <div>
                                <input id="size-2" type="radio" name='size'></input>
                                <label htmlFor='size-2'>M</label>
                            </div>
                            <div>
                                <input id="size-3" type="radio" name='size'></input>
                                <label htmlFor='size-3'>L</label>
                            </div>
                            <div>
                                <input id="size-4" type="radio" name='size'></input>
                                <label htmlFor='size-4'>XL</label>
                            </div>
                            {/* <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ul> */}
                        </div>
                        <h3>Цена</h3>
                        <p className='price'>
                            {productInfo.price} ₽
                        </p>
                        <div className='primary-button'>
                            <button>
                                Купить
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}