import React from 'react'
import { Button, Window, WindowContent, WindowHeader } from 'react95';

function About({ setShowAbout }) {
    return (
        <Window className='window'>
            <WindowHeader className='window-title'>
                <span>About</span>
                <Button onClick={() => setShowAbout(false)}>
                    <span className='close-icon' />
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