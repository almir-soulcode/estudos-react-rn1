import "./Task.css";
// props -> propriedades
export function Task(props) {
    // desestruturação
    // let { title } = props; // let title = props.title;
    const { title, status, deadline } = props;

    let color = "blue";
    if(status === "Feito") {
        color = "green";
    }
    else if(status === "Atrasado") {
        color = "red";
    }
    else {
        color = "blue";
    }
    const objectStyle = { color };

    return (
        <div className="task">
            <strong>
                {title} {/*Interpolação*/}
            </strong>
            <div className="details">
                <span className="status" style={objectStyle}>
                    {status}
                </span>
                <span className="deadline">
                    {deadline}
                </span>
            </div>
        </div>
    );
}

// export function Task({ title, status, deadline }) {
//     return (
//         <div className="task">
//             <strong>
//                 {title}
//             </strong>
//             <div className="details">
//                 <span className="status">
//                     {status}
//                 </span>
//                 <span className="deadline">
//                     {deadline}
//                 </span>
//             </div>
//         </div>
//     );
// }