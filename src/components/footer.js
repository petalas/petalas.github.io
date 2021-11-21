import * as React from "react";

const Footer = () => {
    return (
        <footer className="h-12 mt-4 flex justify-center items-center bg-secondary-900 text-secondary-300">
            <p>© {new Date().getFullYear()}, Nick Petalas</p>
        </footer>
    )
}

export default Footer;