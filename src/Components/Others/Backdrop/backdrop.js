import React from 'react';

const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: '#0000006b',
    zIndex: '500'
}

function Backdrop ({backdrop, toggleBackdrop}) {
    if (!backdrop) return;
    
    return (
        <div style={style} onClick={toggleBackdrop}>
        
        </div>
    )
}

export default Backdrop;
