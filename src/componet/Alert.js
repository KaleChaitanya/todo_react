import React from 'react'

const Alert = (props) => {
    console.log(props.alert)
    return (
        <div className='alert--msg'>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>Message:</strong> {props.alert.msg}
                </div>}
        </div>
    )
}

export default Alert
