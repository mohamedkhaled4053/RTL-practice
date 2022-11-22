import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <>
     <h1 data-testid = 'id' className="header">{title}</h1>
    </>
}
