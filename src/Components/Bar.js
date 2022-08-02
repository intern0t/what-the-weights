const Bar = ({ weights }) => {
    const weightToHeightRatio = {
        45: {
            size: "200px",
            color: "#0B7492",
        },
        25: {
            size: "160px",
            color: "#83B5B4",
        },
        10: {
            size: "125px",
            color: "#d0be90",
        },
        5: {
            size: "90px",
            color: "#D85537",
        },
        2.5: {
            size: "65px",
            color: "#383838b3",
        },
        1.5: {
            size: "50px",
            color: "#7e52aeb3",
        },
    };

    if (weights && weights.constructor === Array && weights.length > 0) {
        return (
            <>
                <div className="bar-wrapper">
                    <div className="bar" />
                    {weights.map((weight) => (
                        <Plate
                            key={`key-${weight}`}
                            plateWeight={weight}
                            plateSize={weightToHeightRatio[weight]["size"]}
                            plateColor={weightToHeightRatio[weight]["color"]}
                        />
                    ))}
                    <div className="bar" />
                </div>
                <div className="plate-labels">
                    {Object.keys(weightToHeightRatio)
                        .sort((a, b) => {
                            return parseInt(b) - parseInt(a);
                        })
                        .map((weight) => (
                            <div
                                className="plate-label"
                                style={{
                                    background: `${weightToHeightRatio[weight]["color"]}`,
                                }}
                            >
                                {weight}
                            </div>
                        ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="bar-wrapper">
                    <div className="bar" />
                </div>
            </>
        );
    }
};

const Plate = ({ plateWeight, plateSize, plateColor }) => {
    console.log(plateWeight, plateSize, plateColor);
    return (
        <div
            className="plate"
            style={{
                width: "25px",
                height: plateSize,
                backgroundColor: plateColor,
            }}
        >
            {`${plateWeight ? plateWeight : "-"}`}
        </div>
    );
};

export default Bar;
