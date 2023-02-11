import { useEffect, useState } from "react";
import BodySearchBox from "./BodySerchBox";
import './Bosy.css'
import Post from "./Post";
import ShowAutors from "./ShowAutors";


const mockedCoursesList = [
    {
        id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
        title: 'JavaScript',
        description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book. It has survived 
    not only five centuries, but also the leap into electronic
    typesetting, remaining essentially u
    nchanged.`,
        creationDate: '8/3/2021',
        duration: (160 / 60).toFixed(2),
        authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812bebde22838167'],
    },
    {
        id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
        title: 'Angular',
        description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book.`,
        creationDate: '10/11/2020',
        duration: (210 / 60).toFixed(2),
        authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748'],
    },
]
const mockedAuthorsList = [
    {
        id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
        name: 'Vasiliy Dobkin'
    },
    {
        id: 'f762978b-61eb-4096-812b-ebde22838167',
        name: 'Nicolas Kim'
    },
    {
        id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
        name: 'Anna Sidorenko'
    },
    {
        id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
        name: 'Valentina Larina'
    },
]




function Body() {
    const [posts, setPosts] = useState([...mockedCoursesList]);
    const [edit, setEdit] = useState(false);
    const [authors, setAuthors] = useState([...mockedAuthorsList]);
    const [applyedAuthors, setApplyedAuthors] = useState([]);
    const [text, setText] = useState('')
    const [duration, setDuration] = useState('0')
    const [titlePost, setTitlePost] = useState('')
    const [description, setDescription] = useState('')
    const [search, setSearch] = useState('')

    function createNewAuthor() {
        setAuthors((el) => [...el, { name: text, id: Math.random() }])
    }

    function CreateCourse() {
        let date = new Date()

        if (description && duration && applyedAuthors.length > 0) {
            setPosts((el) => [...el, {
                id: Math.random(),
                title: titlePost,
                description: description,
                creationDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                duration: (duration / 60).toFixed(2),
                authors: applyedAuthors.map((el) => `${el.name},  `)
            }])

            setEdit((el) => !el)
            setAuthors([...mockedAuthorsList])
            setApplyedAuthors([])
            setText('')
            setDuration('0')
            setTitlePost('')
            setDescription('')
            setSearch('')
        } else {
            alert('write all')
        }
    }


    if (!edit) {
        return (
            <div >
                <div className="Body">
                    <BodySearchBox edit={setEdit} value={search} setValue={setSearch} />
                    {posts.filter((el) => {
                        if (el.title.toLowerCase().includes(search.toLowerCase())) {
                            return true
                        }
                    }).map((el) => <Post object={el} />)}
                </div>
            </div >
        )
    }
    else {
        return (
            <div className="EditBox">
                <div className="EditMainHeader">
                    <div>
                        <p>Title</p>
                        <input value={titlePost} onChange={(e) => setTitlePost(e.target.value)} placeholder="Enter title..."></input>
                    </div>
                    <div>
                        <button type="submit" onClick={CreateCourse}>Create Course</button>
                    </div>
                </div>
                <div className="EditMainBody">
                    <p>Description</p>
                    <input value={description} onChange={(e) => setDescription((el) => e.target.value)} className="InputDescription" placeholder="Enter Description..."></input>
                </div>
                <div className="AuthorsInfo">
                    <div className="CretingAutorsPanel">
                        <h3>Add author</h3>
                        <div>
                            <h4>Author name</h4>
                            <input value={text} onChange={(e) => setText(e.target.value)} className="CreateAuthorNameInput" placeholder="Enter author name..."></input>
                        </div>
                        <button onClick={createNewAuthor} className="ButtonToCreateAuthor" type="submit">Create author</button>
                    </div>
                    <div className="AddAuthorToPost">
                        <div>
                            <h2>Authors</h2>
                        </div>
                        <div>{
                            authors.map((el) => <ShowAutors author={el}
                                hasInner={false}
                                setApplyedAuthors={setApplyedAuthors}
                                setAuthors={setAuthors} />)
                        }
                        </div>
                    </div>
                </div>
                <div className="MiniInfo">
                    <div className="MicroInfo">
                        <div>
                            <h3>Duration</h3>
                            <div>
                                <h4>Duration</h4>
                                <input value={duration} defaultValue='0' onChange={(e) => setDuration(e.target.value)} className="CreateAuthorNameInput" placeholder="Enter duration..."></input>
                            </div>
                            <p>Duration: {(duration / 60).toFixed(2)} hours</p>
                        </div>
                    </div>
                    <div className="ApllyedAuthors">
                        <div className="ListAplyedAuthors">
                            <div>
                                <h2>Course authors</h2>
                            </div>
                            <div>
                                {
                                    applyedAuthors.map((el) => <ShowAutors author={el}
                                        hasInner={true}
                                        setApplyedAuthors={setApplyedAuthors}
                                        setAuthors={setAuthors} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Body;