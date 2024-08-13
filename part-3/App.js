const App = () => {
    return (
        <div>
            <Person name="ava" age={26} hobbies={["pilates", "reading", "coding"]} />
            <Person name="khayre" age={27} hobbies={["video games", "reading"]} />
            <Person name="frank" age={16} hobbies={["gym", "video games"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))