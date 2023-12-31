import React, { useEffect, useState } from 'react'
import { AppBar, Button, MenuList, MenuListItem, Select, TextInput, Toolbar } from 'react95';
import windowsIcon from '../../assets/icons/windowsIcon.svg'
import cdDrive from '../../assets/icons/cd_drive.svg'
import helpBook from '../../assets/icons/help_book.svg'

import Image from 'next/image';
import Link from 'next/link';
import AboutModal from './AboutModal';
import ClickAwayListener from 'react-click-away-listener';
import { handleClose } from '@/utils/utils';
import { useGeneration } from '../hooks/hooks';

const options = [
    { value: 'first_gen', label: 'First Gen' },
    { value: 'second_gen', label: 'Second Gen' },
    { value: 'third_gen', label: 'Third Gen' },
    { value: 'fourth_gen', label: 'Fourth Gen' },
]

const defaultGen = options[0].value

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [generation, selectGeneration] = useGeneration();

    useEffect(() => {
        document.body.style.overflow = showAbout ? 'hidden' : 'auto';
    }, [showAbout])

    const onChange = ((selectedOption) => {
        selectGeneration(selectedOption.value)
    })

    return (
        <>
            <AppBar style={{ zIndex: 3 }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 5 }}>
                        <Button
                            onClick={() => setOpenMenu(!openMenu)}
                            active={openMenu}
                            style={{ fontWeight: 'bold', fontSize: 20 }}>
                            <Image
                                src={windowsIcon}
                                alt='windows logo'
                                style={{ height: 25, width: 30 }}
                            />
                            Pokedex95
                        </Button>
                        {openMenu && (
                            <ClickAwayListener onClickAway={() => handleClose(setOpenMenu)}>
                                <MenuList
                                    style={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '100%',
                                        width: '10rem',
                                    }}>
                                    <MenuListItem style={{ cursor: 'pointer' }}>
                                        <Image
                                            src={cdDrive}
                                            alt='windows logo'
                                            style={{ height: 25, width: 30 }}
                                        />
                                        <Link href={'https://github.com/TomTossu/windows95-pokedex'} target='_blank'>GitHub Repo</Link>
                                    </MenuListItem>
                                    <MenuListItem onClick={() => { setShowAbout(true); handleClose(setOpenMenu) }} style={{ cursor: 'pointer' }}>
                                        <Image
                                            src={helpBook}
                                            alt='windows logo'
                                            style={{ height: 25, width: 30 }}
                                        />
                                        About
                                    </MenuListItem>
                                </MenuList>
                            </ClickAwayListener>
                        )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '20px' }}>Choose Generation: </span>
                        <Select
                            defaultValue={defaultGen}
                            options={options}
                            menuMaxHeight={160}
                            width={160}
                            onChange={onChange} />
                    </div>
                </Toolbar>
            </AppBar>

            {
                showAbout &&
                <AboutModal showAbout={showAbout} setShowAbout={setShowAbout} />
            }
        </>
    );
}

export default Navbar