Todos.TodosController = Ember.ArrayController.extend({
	actions:{
	//*定义事件*
		createTodo:function(){
			var title = this.get("newTitle");
			if(!title.trim()){return;}
			
			var todo = this.store.createRecord('todo',{
				title:title,
				isCompleted:false
			});
			
			this.set('newTitle','');
			
			todo.save();
			
		},
		clearCompleted:function(){
			var completed = this.filterBy('isCompleted',true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
		
	},
	//*定义属性*
	//定义计算属性，未完成的工作数量
	remaining:function(){
		return this.filterBy('isCompleted',false).get('length');
		
	}.property('@each.isCompleted'),	
	//定义计算属性，判断是否有已完成的工作
	hasCompleted:function(){
			return this.get('completedNum')>0;
	}.property('completedNum'),
	//定义计算属性，已完成数量
	completedNum:function(){
		return this.filterBy('isCompleted',true).get('length');
	}.property('@each.isCompleted')
});