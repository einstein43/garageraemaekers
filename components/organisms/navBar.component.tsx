import styles from '../../styles/organisms/navBar.module.css'
import { Button } from '../atoms/button.component'
import phone from '../../public/phone.svg'
import location from '../../public/location.svg'
import Image from 'next/image'
import logo from '../../public/logo_text.svg'

export const NavBar = () => {

    return (
        <div id={styles.container}>

            {/* Logo */}
            <div id={styles.logoWrap}>
                <Image
                    src={logo}
                    alt='Garage Raemaekers logo'
                    width={150}
                    height={50}
                />
            </div>

            {/* Links */}
            <ul id={styles.linkContainer}>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>Diensten</li>
                <li className={styles.link}>Reviews</li>
                <li className={styles.link}>Contact</li>
            </ul>

            {/* Buttons */}
            <div id={styles.buttonContainer}>                
                <Button 
                    size='medium' 
                    theme='secondary'
                    icon={{
                        src: location,
                        alt: 'Route'
                    }}
                >Route</Button>
                <Button 
                    size='medium' 
                    theme='primary'
                    icon={{
                        src: phone,
                        alt: 'Telefoon'
                    }}
                >Bellen</Button>
            </div>
        </div>
    )
}