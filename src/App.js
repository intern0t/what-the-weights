import "./styles/wtw.css";
import Section from "./Components/Section";

function App() {
    return (
        <div className="main-container">
            <Section initialHeight="auto" backgroundImage={false} bg="#4961EF">
                <h1
                    className="text-title"
                    style={{ color: "rgb(248, 246, 245)", fontSize: "25px" }}
                >
                    WHAT THE WEIGHTS?!
                </h1>
                <p className="text-paragraph">
                    A simple to use barbell weights plate calculator.
                </p>

                <div className="form">
                    
                </div>
            </Section>


            <Section initialHeight="auto" backgroundImage={false} bg="rgb(248, 246, 245)">
                <h1
                    className="text-title"
                    style={{ color: "rgb(39, 41, 36)", fontSize: "25px" }}
                >
                    WHAT THE WEIGHTS?!
                </h1>
                <p className="text-paragraph">
                    A simple to use barbell weights plate calculator.
                </p>
            </Section>
        </div>
    );
}

export default App;
