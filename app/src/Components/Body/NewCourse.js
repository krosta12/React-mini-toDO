function NewCourse(props) {


    function DrawEditPanel(props) {
        console.log(props)
        props.edit((edit) => !edit)

    }

    return (
        <button onClick={() => DrawEditPanel(props)} type="submit">Create New</button>
    )
}


export default NewCourse