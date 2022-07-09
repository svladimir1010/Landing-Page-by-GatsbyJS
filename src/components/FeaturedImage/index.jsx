import * as React from 'react'
import Container from '../Container'
import * as styles from './styles.module.scss'


const FeaturedImage = () => {

    return (
        <div className={ styles.featuredImage }>
            <Container size="medium">
                <img src="https://source.unsplash.com/random" alt="test image from unsplash"/>
            </Container>
        </div>
)
}

export default FeaturedImage


