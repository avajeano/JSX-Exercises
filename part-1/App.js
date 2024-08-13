const App = () => {
    return (
        <div>
            <FirstCompnent />
            <NamedComponent name="Ava" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))