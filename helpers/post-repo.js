const fs = require('fs')

let posts = require('../data/posts.json');

export const postRepo = {
    getAll: () => posts?.reverse(),
    getById: id => posts.find(x => x.id.toString() === id.toString()),
    find: x => posts.find(x),
    create,
    update,
    delete: _delete
};

function create(post) {
    post.id = posts.length ? Math.max(...posts.map(x => x.id)) + 1 : 1;

    post.dateCreated = new Date().toISOString();
    post.dateUpdated = new Date().toISOString();

    posts.push(post);
    saveData();
}

function update(id, params) {
    const post = posts.find(x => x.id.toString() === id.toString());

    // set date updated
    post.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(post, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    posts = posts.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

function saveData() {
    fs.writeFileSync('data/posts.json', JSON.stringify(posts, null, 4));
}