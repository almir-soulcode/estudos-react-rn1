import "./Task.css";
// props -> propriedades
export function Task(props) {
    // let title = props.title;
    // let status = props.status;
    // let deadline = props.deadline;
    return (
        <div className="task">
            <strong>{props.title}</strong>
            <div className="details">
                <span className="status">{props.status}</span>
                <span className="deadline">{props.deadline}</span>
            </div>
        </div>
    );
}