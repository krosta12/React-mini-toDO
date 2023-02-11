import NewCourse from "./NewCourse";
import './Bosy.css'

function BodySearchBox(props) {

    return (
        <div className="SearchBox">
            <div>
                <input value={props.value} onChange={(e) => props.setValue((el) => e.target.value)} placeholder="search..."></input>
                <button type="submit">search</button>
            </div>
            <div>
                <NewCourse edit={props.edit} />
            </div>
        </div>
    )
}

export default BodySearchBox;