const Tweet = (props) => {
    return (
        <div class="container">
            <div class="card border-primary mb-3">
                <div class="card-header">Tweet</div>
                <div class="card-body">
                    <h5 class="card-title">@{props.username}</h5>
                    <p class="card-text">{props.name}</p>
                    <p class="card-text">{props.message}</p>
                    <p class="card-text"><small class="text-muted">{props.date}</small></p>
                </div>
            </div>
        </div>
    );
}
