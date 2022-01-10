import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Button, Container, HeadingLarge, HeadingSmall, Image, FlexBlock, TextBlock } from '../styles/styled-components'

export default function ProductPage() {
    //get current product id
    const { id } = useParams()
    const productInfo = useSelector(state => state.products.filter(product => product.id.toString()=== id)[0])
    return (
        <div className="App">
            <Header />
            <Container>
                <FlexBlock>
                    <div>
                        <Image src={productInfo.mainImage} width="35vw"></Image>
                        <Image src={productInfo.secondaryImage} width="35vw"></Image>
                    </div>
                </FlexBlock>
                <FlexBlock padding="0 10vh">
                    <HeadingLarge size="4vh">{productInfo.name}</HeadingLarge>
                    <HeadingSmall size="2vh">Описание</HeadingSmall>
                    <TextBlock>
                        {productInfo.description}
                    </TextBlock>
                    <HeadingSmall size="2vh">Размер</HeadingSmall>
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
                    </div>
                    <HeadingSmall size="2vh">Цена</HeadingSmall>
                    <TextBlock fontWeight="bold" size="4vh">
                        {productInfo.price} ₽
                    </TextBlock>
                    <Button >Купить</Button>
                </FlexBlock>
            </Container >
            < Footer />
        </div >
    )
}