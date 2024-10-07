import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../JS/Actions/Actions';


const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => dispatch(addPost(post)),
    }
}

function CreatePost(props) {
    const [title, setTitle] = useState('')
    
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPost({id: Date.now(), title, content})
    }

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="Title">Title: </label>
                <br />
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="Content">Content: </label>
                <br />
                <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
            </div>
            <br />
            <div>
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(CreatePost)
