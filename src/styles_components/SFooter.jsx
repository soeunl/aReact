import React from 'react'

const SFooter = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <address>SFooter{year}</address>
        </footer>
    )
}

export default SFooter
