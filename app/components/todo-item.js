import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // body
    onTodoChange(){
      console.log("x1");
    }
  },
  completedChanged : Ember.observer('todo.completed',function(){

    var completed = this.get("todo.completed");
    var id = this.get("todo.id");
    var label = Ember.$("#todo" + id);
    if(completed){
      console.log("it is completed");
      label.addClass("todo-completed");
    }
    else{
      console.log("no it isn't");
      label.removeClass("todo-completed");
    }


  })
});
