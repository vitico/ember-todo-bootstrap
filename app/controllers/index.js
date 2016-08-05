import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTodo() {
      var title = Ember.$("#todoText").val();
      if (title.trim() !== "") {
        this.get('store').createRecord('todo', {
          title: Ember.$("#todoText").val(),
          completed: false
        });
        Ember.$("#todoText").val("");
      }else{
        alert('No puedo agregar un todo si no se que quieres hacer');
      }

    }
  }
});
