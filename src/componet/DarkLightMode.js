import React from 'react'

const DarkLightMode = (props) => {
    return (
        <>
            <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
                <label className="custom-control-label" htmlFor="customSwitch1" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable light mode'}</label>
            </div>
        </>
    )
}

export default DarkLightMode
