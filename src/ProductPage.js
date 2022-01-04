import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export default function ProductPage(props) {
    const { id } = useParams()//get product id
    const productInfo = useSelector(state => state.products.filter(product => product.id == id)[0]) //0?

    //return redirect to PageNotFound if product id does not exist
    console.log(productInfo)
    return (
        <div className='product-container'>
            <h1>
                product page {id}
            </h1>
        </div>
    )
}