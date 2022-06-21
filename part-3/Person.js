const Person = (props) => {
    let goVote = props.age >= 18 ? "Go Vote!" : "You must be 18";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div class="container">
            <div class="card border-light mb-3">
                <div class="alert alert-secondary" role="alert">
                    Learn information about this person.
                </div>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">
                        Name: {props.name.slice(0, 6)}</li>
                    <li class="list-group-item list-group-item-primary">
                        Age: {props.age}</li>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-success">
                            Hobbies: {hobbies}</li>
                    </ul>
                </ul>
                <h3 class="display-5">{goVote}</h3>
            </div>
        </div>
    )
}