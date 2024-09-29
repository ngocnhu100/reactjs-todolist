import React from 'react'

export default function TodoDetails(props) {
    const {children} = props;
    return (
        <div>
        <p>{children}</p>
        </div>
    )
}
