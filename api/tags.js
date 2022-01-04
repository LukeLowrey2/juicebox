const express = require('express');
const tagsRouter = express.Router();

tagsRouter.use(( req, res, next) => {
    console.log('A request is being made to /tags');

    next();
});

const { getAllTags } = require('../db');

tagsRouter.get('/', async ( req, res) => {
    const tags = await getAllTags();

    res.send({
        tags
    });
})

tagsRouter.get('/:tagName/posts', async (req, res) => {
    const tagnamePosts = await getPostsByTagName();
    try{
    res.send({
        tagnamePosts
    });
    } catch ({ name, message }) {
        next({ name, message });
      }
})

module.exports = tagsRouter;