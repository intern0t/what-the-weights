import React, { useEffect, useState } from "react";
import "./styles/wtw.css";
import Section from "./Components/Section";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import { isLocalStorageAvailable } from "./helpers/Cache";
import { nanoid } from "nanoid";

import WorkoutIcon from "./images/undraw_healthy_habit_bh-5-w.svg";
import PersonalTrainerIcon from "./images/undraw_personal_trainer_re_cnua.svg";

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

    /**
     * Updates the available weights|plates in our state to later utilize to calculate.
     * @param {*} e Target elements, specifically checkbox inputs.
     */
    const updatePlatesAvailability = e => {
        const { value, checked } = e.target || null;

        if (value) {
            const updatedAvailablePlates = {
                ...availableWeights,
                [value.replace("lbs", "")]: checked
            };
            setAvailableWeights(updatedAvailablePlates);

            if (isLocalStorageAvailable()) {
                localStorage.setItem(
                    "available-plates",
                    JSON.stringify(updatedAvailablePlates)
                );
            }
        }
    };

    //Updates Target Weight
    const updateTargetWeight = e => {
        setInputs({ ...inputs, targetWeight: e.target.value });
    };

    //Updates Target Weight
    const updateBarWeight = e => {
        e.preventDefault();

        setInputs({ ...inputs, barWeight: e.target.value });

        if (isLocalStorageAvailable()) {
            localStorage.setItem("bar-weight", e.target.value);
            console.log(
                `The bar-weight has been saved in local storage for later use.`
            );
        }
    };

    //Calculate number of each Weights needed
    const caculate = () => {
        let finalWeight = (inputs.targetWeight - inputs.barWeight) / 2;
        let availablePlates = Object.keys(availableWeights).filter(
            k => availableWeights[k]
        );
        let actualWeights = [];

        console.log(availableWeights, availablePlates);
        /**
         * [ plates available ], filter with value = true (available)
         *   -
         *
         */

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
            } else if (finalWeight - 1.5 >= 0) {
                actualWeights.push(1.5);
                finalWeight -= 1.5;
            }
        }

        setPlates(actualWeights);
    };

    const loadFromCache = () => {
        if (isLocalStorageAvailable()) {
            let barWeightFromLS = localStorage.getItem("bar-weight");
            let availablePlatesFromLS = localStorage.getItem(
                "available-plates"
            );

            if (barWeightFromLS) {
                setInputs({ ...inputs, barWeight: parseInt(barWeightFromLS) });
                console.log(
                    `Got bar weight from local storage, ${barWeightFromLS}`
                );
            }

            if (availablePlatesFromLS) {
                availablePlatesFromLS = JSON.parse(availablePlatesFromLS);
                setAvailableWeights(availablePlatesFromLS);
                console.log(
                    `Got available plates from local storage.`,
                    availablePlatesFromLS
                );
            }
        } else {
            console.log("No local storage available.");
        }
    };

    useEffect(() => {
        loadFromCache();
    }, []);

    return (
        <>
            <div className="main-container">
                <Section
                    initialHeight="auto"
                    backgroundImage={false}
                    icon={PersonalTrainerIcon}
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
                            <div className="label">Available Plates</div>
                            <div className="item">
                                {Object.keys(availableWeights)
                                    .sort((a, b) => b - a)
                                    .map(weight => {
                                        return (
                                            <div
                                                className="item-item"
                                                key={nanoid()}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`weight-${weight}`}
                                                    name={`weight-${weight}`}
                                                    value={`${weight}lbs`}
                                                    checked={
                                                        availableWeights[
                                                            `${weight}`
                                                        ]
                                                    }
                                                    onChange={
                                                        updatePlatesAvailability
                                                    }
                                                />
                                                <label
                                                    htmlFor={`weight-${weight}`}
                                                >
                                                    {`${weight}`}
                                                </label>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="row">
                            <div className="label"></div>
                            <div className="item">
                                <button
                                    onClick={caculate}
                                    style={{ width: "100px" }}
                                >
                                    Calculate
                                </button>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section
                    initialHeight="auto"
                    backgroundImage={false}
                    bg="rgb(248, 246, 245)"
                    icon={PersonalTrainerIcon}
                >
                    <Bar weights={plates} />
                </Section>

                <Section
                    initialHeight="auto"
                    backgroundImage={true}
                    bg="#4961EF"
                    icon={WorkoutIcon}
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
