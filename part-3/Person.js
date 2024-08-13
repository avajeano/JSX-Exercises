const Person = ({ name, age, hobbies}) => {

    let comment;
    if(age > 18){
        comment = "please go vote!";
    } else {
        comment = "you must be 18";
    }

    const hobbiesList = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person.</p>
            <p>Name: {name.slice(0, 6)}</p>
            <p>Age: {age}</p>
            <ul>
                Hobbies: {hobbiesList}
            </ul>
            <h3>{comment}</h3>
        </div>
    );
}