import "./styles/wtw.css";
import Section from "./Components/Section";
import Bar from "./Components/Bar";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
    const [availableWeights, setAvailableWeights] = useState({
        45: true,
        25: true,
        10: true,
        5: true,
        2.5: true,
        1.5: false,
    });

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
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">Bar Weight</div>
                            <div className="item">
                                <input
                                    type="number"
                                    placeholder="Your Bar weight - 45, 20 etc."
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
                                    <label for="weight1.5"> 2.5lb</label>
                                </div>
                                <div className="item-item">
                                    <input
                                        type="checkbox"
                                        id="weight1.5"
                                        name="weight1.5"
                                        value="1.5lb"
                                    />
                                    <label for="weight1.5"> 1.5lb</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section
                    initialHeight="auto"
                    backgroundImage={false}
                    bg="rgb(248, 246, 245)"
                >
                    <Bar weights={[45, 25, 10, 5]} />
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
                            fontSize: "25px",
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
