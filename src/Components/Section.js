import React from "react";

const Section = ({initialHeight, backgroundImage, bg, children, icon}) => {
    return (
        <div
            className="section"
            style={{
                height: `${initialHeight ? initialHeight : "200px"}`,
                background: `${bg ? bg : "rgb(248, 246, 245)"}`,
            }}
        >
            {backgroundImage ? (
                <div
                    className="backdrop"
                    style={{
                        backgroundImage: `url(${icon})`,
                        backgroundPosition: "bottom right",
                        backgroundSize: "20%",
                        backgroundRepeat: "no-repeat",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        opacity: ".3",
                    }}
                />
            ) : null}
            {children}
        </div>
    );
};

export default Section;
