import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.Total / props.Goal;

    return (
        <div className="container">
            <h2>Student Score Calculator</h2>

            <p><strong>Name :</strong> {props.Name}</p>

            <p><strong>School :</strong> {props.School}</p>

            <p><strong>Total Marks :</strong> {props.Total}</p>

            <p><strong>Total Subjects :</strong> {props.Goal}</p>

            <p><strong>Average :</strong> {average}</p>
        </div>
    );
}

export default CalculateScore;