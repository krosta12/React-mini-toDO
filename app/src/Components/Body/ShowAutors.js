import "./Bosy.css"

function ShowAutors(props) {

    if (!props.hasInner) {
        return (
            <div className="ShowAuthorsName">
                <div>{props.author.name}</div>
                <div>
                    <button type='button' onClick={(env) => {
                        props.setApplyedAuthors((el) => [...el, props.author])
                        props.setAuthors((list) => list.filter(el => el !== props.author))
                    }}>Add author</button>
                </div>
            </div >
        )
    }
    else {
        return (
            <div className="ShowAuthorsName">
                <div>{props.author.name}</div>
                <div>
                    <button onClick={(env) => {
                        props.setAuthors((el) => [...el, props.author])
                        props.setApplyedAuthors((list) => list.filter(el => el !== props.author))
                    }}>Delete author</button>
                </div>
            </div>
        )
    }
}

export default ShowAutors