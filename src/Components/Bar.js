import React from "react";
import { nanoid } from "nanoid";

const Bar = ({ weights }) => {
    const weightToHeightRatio = {
        45: {
            size: "200px",
            color: "#0B7492"
        },
        25: {
            size: "160px",
            color: "#83B5B4"
        },
        10: {
            size: "125px",
            color: "#d0be90"
        },
        5: {
            size: "90px",
            color: "#D85537"
        },
        2.5: {
            size: "65px",
            color: "#383838b3"
        },
        1.5: {
            size: "50px",
            color: "#7e52aeb3"
        }
    };
    return (
        <>
            {weights && weights.length > 0 ? (
                <div className="bar-wrapper">
                    <div className="bar" />
                    {weights
                        .sort((x, y) => y - x)
                        .map(weight => (
                            <Plate
                                key={`key-${weight}-${nanoid()}`}
                                plateWeight={weight}
                                plateSize={weightToHeightRatio[weight]["size"]}
                                plateColor={
                                    weightToHeightRatio[weight]["color"]
                                }
                            />
                        ))}
                    <div className="bar" />
                </div>
            ) : null}
            <div
                className="plate-labels"
                style={{
                    margin: weights && weights.length > 0 ? "25px" : "0"
                }}
            >
                {Object.keys(weightToHeightRatio)
                    .sort((a, b) => {
                        return parseInt(b) - parseInt(a);
                    })
                    .map(weight => (
                        <div
                            className="plate-label"
                            style={{
                                background: `${weightToHeightRatio[weight]["color"]}`
                            }}
                            key={nanoid()}
                        >
                            {weight}
                        </div>
                    ))}
            </div>
        </>
    );
};

const Plate = ({ plateWeight, plateSize, plateColor }) => {
    return (
        <div
            className="plate"
            style={{
                width: "25px",
                height: plateSize,
                backgroundColor: plateColor
            }}
        >
            {`${plateWeight ? plateWeight : "-"}`}
        </div>
    );
};

export default Bar;
