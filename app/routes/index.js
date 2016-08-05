import Ember from 'ember';
/*
let links = [{
  id: 1,
  title: 'item1',
  url: '#',
  active: true
}, {
  id: 2,
  title: 'item2',
  url: '#',
  active: false
}, {
  id: 3,
  title: 'item3',
  url: '#',
  active: false
}, {
  id: 4,
  title: 'item4',
  url: '#',
  active: false
}, {
  id: 5,
  title: 'item5',
  url: '#',
  active: false
}, ]
*/




/*
{{#nav-bar title="hidalsoft" class="navbar-inverse navbar-static-top" }}

  {{#each model as |link|}}
    <li class="{{if active "active"}}"><a href="{{url}}" >{{title}}</a></li>

  {{/each}}
{{/nav-bar}}
*/

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo');
  }

});
