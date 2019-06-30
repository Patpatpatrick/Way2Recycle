import React, { Component } from 'react';
import ChooseCategory from './ChooseCategory';
import PostDetailUnderOneCategory from './PostDetailUnderOneCategory';
class PostUI extends Component {
	render() {
        return (
            <div>
                <ChooseCategory/>
                <PostDetailUnderOneCategory/>
                {/* <UploadPic/> */}
                {/* <button>Submit</button> */}
            </div>
        );
    }
}

export default PostUI;
