import * as React from 'react'
import Container from '../Container'
import * as styles from './styles.module.scss'


const Navbar = () => {

    return (
        <div className={ styles.navbar }>
            <Container>
                <div className={ styles.navbarInner }>
                    <div className={styles.navbarLeft}>
                        <a href="#" className={ styles.logo }>Zap Marketing</a>
                        <ul className={ styles.list }>
                            <li className={ styles.listItem }><a href="#">About</a></li>
                            <li className={ styles.listItem }><a href="#">Solution</a></li>
                            <li className={ styles.listItem }><a href="#">Work</a></li>
                        </ul>
                    </div>
                    <a href="#" className={ styles.cta }>Contact</a>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
