export default function() {
  this.get('/todos', function() {
    return {
      data: [{
        type: 'todos',
        id: 1,
        attributes: {
          title: 'take out the trash',
          completed: false
        }
      }, {
        type: 'todos',
        id: 2,
        attributes: {
          title: 'take out the somethings',
          completed: false
        }
      }, {
        type: 'todos',
        id: 3,
        attributes: {
          title: 'take out the otherthings',
          completed: false
        }
      }, ]
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
