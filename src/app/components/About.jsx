import React from 'react'
import { Button, Window, WindowContent, WindowHeader } from 'react95';

function About({ showAbout, setShowAbout }) {
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
                <p>
                    When you set &quot;resizable&quot; prop, there will be drag handle
                    in the bottom right corner (but resizing itself must be handled by
                    you tho!)
                </p>
            </WindowContent>
        </Window>
    );
}

export default About