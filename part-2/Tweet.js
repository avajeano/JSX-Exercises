const Tweet = (props) => {
    return (
    <div className="tweet">
        <span className="username">{props.username}</span>
        <p>{props.name}</p>
        <span className="date">{props.date}</span>
        <p>{props.message}</p> 
    </div>
    )
}