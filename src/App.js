import "./styles/wtw.css";
import Section from "./Components/Section";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import { React, useState } from "react";

function App() {
    const [availableWeights, setAvailableWeights] = useState({
        1.5: false,
        2.5: true,
        5: true,
        10: true,
        25: true,
        45: true
    });

    //State for Target and Bar Weight
    const [inputs, setInputs] = useState({
        targetWeight: 0,
        barWeight: 0
    });

    //State for plates
    const [plates, setPlates] = useState([45, 25, 10, 5, 2.5]);

    //Updates Target Weight
    const updateTargetWeight = e => {
        setInputs({ ...inputs, targetWeight: e.target.value });
    };

    //Updates Target Weight
    const updateBarWeight = e => {
        setInputs({ ...inputs, barWeight: e.target.value });
    };

    //Calculate number of each Weights needed
    const calculateWeights = () => {
        let finalWeight = (inputs.targetWeight - inputs.barWeight) / 2;
        let availablePlates = Object.keys(availableWeights);
        let valuePlates = Object.values(availableWeights);
        let actualWeights = [];

        while (finalWeight > 0) {
            if (finalWeight - 45 >= 0) {
                actualWeights.push(45);
                finalWeight -= 45;
            } else if (finalWeight - 25 >= 0) {
                actualWeights.push(25);
                finalWeight -= 25;
            } else if (finalWeight - 10 >= 0) {
                actualWeights.push(10);
                finalWeight -= 10;
            } else if (finalWeight - 5 >= 0) {
                actualWeights.push(5);
                finalWeight -= 5;
            } else if (finalWeight - 2.5 >= 0) {
                actualWeights.push(2.5);
                finalWeight -= 2.5;
            }
        }

        setPlates(actualWeights);
    };

    return (
        <>
            <div className="main-container">
                <Section
                    initialHeight="auto"
                    backgroundImage={false}
                    bg="rgb(248, 246, 245)"
                >
                    <div className="form">
                        <div className="row">
                            <div className="label">Target Weight</div>
                            <div className="item">
                                <input
                                    type="number"
                                    placeholder="Your target weight - 225, 310, etc"
                                    onChange={e => updateTargetWeight(e)}
                                    value={inputs.targetWeight}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">Bar Weight</div>
                            <div className="item">
                                <input
                                    type="number"
                                    placeholder="Your Bar weight - 45, 20 etc."
                                    onChange={updateBarWeight}
                                    value={inputs.barWeight}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">Available Weights</div>
                            <div className="item">
                                <div className="item-item">
                                    <input
                                        type="checkbox"
                                        id="weight1.5"
                                        name="weight1.5"
                                        value="2.5lb"
                                    />
                                    <label htmlFor="weight1.5"> 2.5lb</label>
                                </div>
                                <div className="item-item">
                                    <input
                                        type="checkbox"
                                        id="weight1.5"
                                        name="weight1.5"
                                        value="1.5lb"
                                    />
                                    <label htmlFor="weight1.5"> 1.5lb</label>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={calculateWeights}
                            style={{ width: "100px" }}
                        >
                            Calculate
                        </button>
                    </div>
                </Section>

                <Section
                    initialHeight="auto"
                    backgroundImage={false}
                    bg="rgb(248, 246, 245)"
                >
                    <Bar weights={plates} />
                </Section>

                <Section
                    initialHeight="auto"
                    backgroundImage={true}
                    bg="#4961EF"
                >
                    <h1
                        className="text-title"
                        style={{
                            color: "rgb(248, 246, 245)",
                            fontSize: "25px"
                        }}
                    >
                        WHAT THE WEIGHTS?!
                    </h1>
                    <p className="text-paragraph">
                        A simple to use barbell weights plate calculator.
                    </p>
                </Section>
            </div>
            <Footer />
        </>
    );
}

export default App;
