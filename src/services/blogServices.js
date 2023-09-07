// create blog post
const blogPost = []
const createPost = async (post) => {
    //check if post exist
    const postExist = blogPost.find((element) => element.post === post);
    if (postExist){
        return {
            // res.status(409).json()
            status: 'error',
            code: 409,
            message: 'Post already exist',
            data: null
        }
    }
    else{
        blogPost.push(post)
        return {
            status: 'success',
            code: 200,
            message: 'Post added successfully',
            data: post
        }
    }
}
const getPost = async () => {
    return {
        status: 'success',
        code: 200,
        message: 'Post added successfully',
        data: blogPost
    }
}

// Update a blog post by ID
const updatePost = async (postId, updatedPost) => {
    // Check if the post exists
    const postIndex = blogPost.findIndex((element) => element.id === postId);
    if (postIndex !== -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null
        };
    } else {
        // Update the post with the new data
        blogPost[postIndex] = { ...blogPost[postIndex], ...updatedPost };
        return {
            status: 'success',
            code: 200,
            message: 'Post updated successfully',
            data: blogPost[postIndex]
        };
    }
};

// Delete a blog post by ID
const deletePost = async (postId) => {
    // Find the index of the post with the given ID
    const postIndex = blogPost.findIndex((element) => element.id === postId);

    if (postIndex !== -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null
        };
    } else {
        // Remove the post from the array
        blogPost.splice(postIndex, 1);

        return {
            status: 'success',
            code: 200,
            message: 'Post deleted successfully',
            data: null
        };
    }
};


module.exports = {
    createPost,
    getPost, 
    updatePost,
    deletePost
}