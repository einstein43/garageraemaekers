"use client"

import styles from '../../styles/organisms/navBar.module.css'
import { Button } from '../atoms/button.component'
import phone from '../../public/phone.svg'
import location from '../../public/location.svg'
import Image from 'next/image'
import logo from '../../public/logo_text.svg'
import HamburgerBtn from '../atoms/hamburgerBtn.component'
import { useState } from 'react'
import classNames from 'classnames'

export const NavBar = () => {

    // State
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

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
                <li className={styles.link} onClick={() => handleClick('section-1')}>Home</li>
                <li className={styles.link} onClick={() => handleClick('section-1')}>Diensten</li>
                <li className={styles.link} onClick={() => handleClick('section-1')}>Reviews</li>
                <li className={styles.link} onClick={() => handleClick('section-1')}>Contact</li>
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

            {/* Hamburger button */}
            <div id={styles.hamburgerBtnWrap}>
                <HamburgerBtn style='style1' isOpen={menuOpen} setIsOpen={setMenuOpen}/>
            </div>

            {/* Mobile menu */}
            {
                <div
                    className={classNames(
                        styles.mobileMenu,
                        menuOpen && styles.mobileMenu__state_open
                    )}
                >
                    <ul id={styles.mobileLinkContainer}>
                        <li className={styles.mobileLink} onClick={() => handleClick('section-1')}>Home</li>
                        <li className={styles.mobileLink} onClick={() => handleClick('section-1')}>Diensten</li>
                        <li className={styles.mobileLink} onClick={() => handleClick('section-1')}>Reviews</li>
                        <li className={styles.mobileLink} onClick={() => handleClick('section-1')}>Contact</li>
                    </ul>
                </div>
            }
        </div>
    )
}