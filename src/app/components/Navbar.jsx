import React, { useState } from 'react'
import { AppBar, Button, MenuList, MenuListItem, TextInput, Toolbar } from 'react95';
import windowsIcon from '../../assets/icons/windowsIcon.svg'
import cdDrive from '../../assets/icons/cd_drive.svg'
import helpBook from '../../assets/icons/help_book.svg'

import Image from 'next/image';
import Link from 'next/link';
import About from './About';


function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <AppBar>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button
                            onClick={() => setOpenMenu(!openMenu)}
                            active={openMenu}
                            style={{ fontWeight: 'bold', width: '100%', justifyContent: 'space-between', fontSize: 20 }}>
                            <Image
                                src={windowsIcon}
                                alt='windows logo'
                                style={{ height: 25, width: 30 }}
                            />
                            Pokedex95
                        </Button>
                        {openMenu && (
                            <MenuList
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '100%',
                                    width: '10rem',
                                }}
                                onClick={() => setOpenMenu(false)}>
                                <MenuListItem style={{ cursor: 'pointer' }}>
                                    <Image
                                        src={cdDrive}
                                        alt='windows logo'
                                        style={{ height: 25, width: 30 }}
                                    />
                                    <Link href={'https://github.com/TomTossu/windows95-pokedex'} target='_blank'>GitHub Repo</Link>
                                </MenuListItem>
                                <MenuListItem onClick={() => setShowAbout(true)} style={{ cursor: 'pointer' }}>
                                    <Image
                                        src={helpBook}
                                        alt='windows logo'
                                        style={{ height: 25, width: 30 }}
                                    />
                                    About
                                </MenuListItem>
                            </MenuList>
                        )}
                    </div>
                    <TextInput placeholder='Search...' width={150} />
                </Toolbar>
            </AppBar>

            {
                showAbout &&
                <About showAbout={showAbout} setShowAbout={setShowAbout} />
            }
        </>
    );
}

export default Navbar