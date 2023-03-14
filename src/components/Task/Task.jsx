import "./Task.css";
// props -> propriedades
export function Task(props) {
    // desestruturação
    // let { title } = props; // let title = props.title;
    const { title, status, deadline } = props;
    return (
        <div className="task">
            <strong>
                {title} {/*Interpolação*/}
            </strong>
            <div className="details">
                <span className="status">
                    {status}
                </span>
                <span className="deadline">
                    {deadline}
                </span>
            </div>
        </div>
    );
}