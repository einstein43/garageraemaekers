'use client'

import Image from 'next/image'
import styles from '../../styles/organisms/footer.module.css'
import logo from '../../public/logo_text.svg'

export const Footer = () => {

    // Fn - handle click
    const handleClick = (id: string) => {
        
        // Get element
        const el = document.getElementById(id)

        // If element exists
        if (el) {

            // Scroll to element
            el.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    // Current year
    const year = new Date().getFullYear()

    return (
        <>
            <div id={styles.footer}>

                {/* Logo */}
                <div id={styles.logoWrap}>
                    <Image
                        src={logo}
                        alt='Garage Raemaekers logo'
                        fill={true}
                        id={styles.logo}
                    />
                </div>

                {/* Details */}
                <div className={styles.section}>
                    <p className={styles.title}>Garage Raemaekers</p>
                    <ul className={styles.ul}>
                       <a href='https://goo.gl/maps/pgG1u7PspoTZ7Nc19' target='_blank'><li className={styles.li}>Visdijk 9<br/>6034 SZ, Nederweert-eind</li></a> 
                        <li className={styles.li}><a href="tel:0495633102">T: +31 6 12345678</a></li>
                    </ul>
                </div>

                {/* Sections */}
                <div className={styles.section}>
                    <p className={styles.title}>Secties</p>
                    <ul className={styles.ul}>
                        <li className={styles.li} onClick={() => handleClick('section-1')}>Home</li>
                        <li className={styles.li} onClick={() => handleClick('section-2')}>Diensten</li>
                        <li className={styles.li} onClick={() => handleClick('section-3')}>Reviews</li>
                        <li className={styles.li} onClick={() => handleClick('section-4')}>Contact</li>
                    </ul>
                </div>
            </div>

            {/* Disclosure bar */}
            <div id={styles.disclosureContainer}>
                <p>Copyright @ {year} Garage Raemaekers</p>
            </div>
        </>
    )
}