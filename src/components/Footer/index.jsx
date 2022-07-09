import * as React from 'react'
import Container from '../Container'
import * as styles from './styles.module.scss'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className={ styles.footer }>
            <Container>
                <div className={ styles.footerInner }>
                    <p>&copy; Your Business - { year }</p>
                    <p><a href="/">Made by you</a></p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
