import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-1 bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;