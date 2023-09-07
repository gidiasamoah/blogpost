const services = require('../services/blogServices');

const addPost = async (req, res, next) => {
    try{
        const post = await services.createPost(req.body);
        return res.status(post.code).json(post)
    }catch (error) {
        next(error)
    }
}

const getPost = async (req, res, next) => {
    try {
        const postdata = await services.getPost();
        return res.status(postdata.code).json(postdata)
    } catch (error) {
        next(error)
    }
}

const updatePost = async (req, res, next) => {
    try {
        const postId = req.params.id; 
        const updatedPost = req.body; 

        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.id; 
        const updatedPost = req.body; 
        const result = await services.deletePost(postId, updatedPost);

        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addPost,
    getPost,
    updatePost,
    deletePost
};