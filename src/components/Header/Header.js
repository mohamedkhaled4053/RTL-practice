import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <>
     <h1 data-testID = 'id' className="header">{title}</h1>
     <h1 className="header">cat</h1>
    </>
}
