import React from 'react'
import { connect } from 'react-redux'



const mapStateToProps = state => ({
    posts: state.posts
})

function postList(props) {

    return (
        <div>
            {
                props.posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps)(postList)
