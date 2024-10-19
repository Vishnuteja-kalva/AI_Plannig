import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// FoodieIntro Component
export const FoodieIntro = () => {
    const navigate = useNavigate();

    const handleNavigation = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <h3 style={headingStyle}>
            "First we eat, then we do everything else."
            <span style={{ fontSize: "100%" }}>
                <a href="/" onClick={(e) => handleNavigation(e, "/Intro")}>
                    Login➟
                </a>
            </span>
        </h3>
    );
};

// Heading styles
const headingStyle = {
    marginTop: "2%",
    marginLeft: "-5%",
    fontSize: "355%",
    color: "white",
    opacity: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    animation: "slideIn 1s ease-out forwards",
};

// Body background style
const bodyStyle = `
    body {
        background-image: url("https://thumbs.dreamstime.com/b/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121937194.jpg");
        background-repeat: no-repeat;
        background-size: cover; /* Changed to cover for responsive sizing */
        transition: transform 0.5s ease-out, opacity 1.5s ease-out;
        transform: translateX(0);
        opacity: 1;  
    }
`;

// CustomStyle Component for injecting styles
const CustomStyle = () => {
    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = bodyStyle;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return null;
};

// Main FoodieApp Component
export const FoodieApp = () => {
    return (
        <>
            <CustomStyle />
            <FoodieIntro />
        </>
    );
};
