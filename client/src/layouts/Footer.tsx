import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center border-t-2 space-y-5 mt-40 ">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">Anasayfa</a>
        <a className="hover:text-gray-900" href="#">İletişim</a>
        <a className="hover:text-gray-900" href="#">Login</a>
        <a className="hover:text-gray-900" href="#">Register</a>
        <a className="hover:text-gray-900" href="#">Gallery</a>
        <a className="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
  )
}

export default Footer