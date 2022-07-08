import * as React from 'react'
import Container from '../Container'
import * as styles from './styles.module.scss'


const Navbar = () => {

    return (
        <div className={ styles.navbar }>
            <Container>
                <div className={ styles.navbarInner }>
                    <div className={styles.navbarLeft}>
                        <a href="#" className={ styles.logo }>zap marketing</a>
                        <ul className={ styles.list }>
                            <li className={ styles.listItem }><a href="#">about</a></li>
                            <li className={ styles.listItem }><a href="#">solution</a></li>
                            <li className={ styles.listItem }><a href="#">work</a></li>
                        </ul>
                    </div>
                    <a href="#" className={ styles.cta }>contact</a>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
