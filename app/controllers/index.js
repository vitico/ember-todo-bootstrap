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

    },
    onTodoChange(){
      console.log("x1");
    }

  },
  contentDidChange:Ember.observer('model.todos',function(){
    console.log("x34");
  }),

});
