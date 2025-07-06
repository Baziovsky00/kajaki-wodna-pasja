import React, { useState } from "react";

const phoneNumber = "+48668481266"; // Replace with your phone number

const CallIcon = () => {
    const [showSecondIcon, setShowSecondIcon] = useState(false);

    return (
        <>
            {/* Main Call Icon */}
            <button
                onClick={() => setShowSecondIcon((prev) => !prev)}
                style={{
                    position: "fixed",
                    right: "24px",
                    bottom: "24px",
                    background: "#27ae60",
                    border: "none",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    zIndex: 1000,
                }}
                aria-label="Show call options"
            >
                {/* Phone SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
            </button>

            {/* Second Icon (Call Link) */}
            {showSecondIcon && (
                <a
                    href={`tel:${phoneNumber}`}
                    style={{
                        position: "fixed",
                        right: "24px",
                        bottom: "90px",
                        background: "#2ecc71",
                        border: "none",
                        borderRadius: "50%",
                        width: "56px",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                        textDecoration: "none",
                    }}
                    aria-label={`Call ${phoneNumber}`}
                >
                    {/* Call Outgoing SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <path d="M15.05 5.05a7 7 0 11-9.9 9.9l1.42-1.42a5 5 0 107.07-7.07l1.41-1.41z"/>
                        <path d="M16 3v5a1 1 0 001 1h5"/>
                    </svg>
                </a>
            )}
        </>
    );
};

export default CallIcon;