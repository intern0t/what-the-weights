import React from "react";
import WorkoutIcon from "../images/undraw_healthy_habit_bh-5-w.svg";

const Section = (props) => {
    const { initialHeight, backgroundImage, bg } = props;

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
                        backgroundImage: `url(${WorkoutIcon})`,
                        backgroundPosition: "bottom right",
                        backgroundSize: "45%",
                        backgroundRepeat: "no-repeat",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        opacity: ".5",
                    }}
                />
            ) : null}
            {props.children}
        </div>
    );
};

export default Section;
