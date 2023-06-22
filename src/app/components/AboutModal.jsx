import React from 'react'
import { Anchor, Button, Window, WindowContent, WindowHeader } from 'react95';

function AboutModal({ showAbout, setShowAbout }) {
    return (
        <Window className='window' style={{
            maxWidth: '100%',
            position: 'fixed',
            top: '50%',
            left: '50%',
            display: showAbout ? 'block' : 'none',
            zIndex: showAbout ? 2 : 1,
            transform: 'translate(-50%, -50%)',
        }}>
            <WindowHeader className='window-title' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>About</span>
                <Button onClick={() => setShowAbout(false)}>
                    <span className='close-icon' style={{ fontSize: '25px', fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                        x
                    </span>
                </Button>
            </WindowHeader>
            <WindowContent>
                <h1 style={{ fontSize: '2rem' }}>Pokedex95</h1>
                <p style={{ marginTop: '1rem' }}>An open source Windows 95 style Pokedex</p>
                <p style={{ marginTop: '1rem' }}>
                    Built with <Anchor href='https://react.dev/'>React</Anchor>
                    {' / '}
                    <Anchor href='https://nextjs.org/'>Next.js</Anchor>
                    {' and '}
                    <Anchor href='https://react95.io/'>React95</Anchor>
                </p>
                <p style={{ marginTop: '1rem' }}>Icons downloaded from <Anchor href='https://win98icons.alexmeub.com/'>here</Anchor></p>
            </WindowContent>
        </Window>
    );
}

export default AboutModal