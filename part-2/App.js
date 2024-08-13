const App = () => {
    return (
        <div>
            <Tweet username="avajeano" name="ava" date="August 12 2024" message="React tweet component test" />
            <Tweet username="khaybae" name="khayre" date="August 13 2024" message="tweeting from the future" />
            <Tweet username="allielat" name="allie" date="August 12 2024" message="goodnight" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))