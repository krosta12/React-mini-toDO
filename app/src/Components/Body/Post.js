import './Bosy.css'

function Post(props) {
    props.object.duration = props.object.duration
    return (
        <div className="Post">
            <div className="PostMainText">
                <div className="Title"> {props.object.title}</div>
                <div> {props.object.description}</div>
            </div>
            <div className="Info">
                <div>
                    <p className="Details">authors: {props.object.authors}</p>
                    <p className="Details">duration: {props.object.duration} Hours</p>
                    <p className="Details">Date: {props.object.creationDate}</p>
                </div>
                <div>
                    <button>Show course</button>
                </div>
            </div>
        </div >
    )
}

export default Post;