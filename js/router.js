//定义URL路由表
Todos.Router.map(function(){
	//定义todos资源名及URL访问路径
	this.resource('todos',{path : '/'});
	//定义books资源名及URL访问路径
	this.resource('books');
	
});

//定义资源名todos的路由TodosRoute类用于获取所有todo实体对象
Todos.TodosRoute = Ember.Route.extend({
	model:function(){
		return this.store.find('todo');
	}
});

//定义资源名books的路由BooksRoute类用于获取所有book实体对象
Todos.BooksRoute = Ember.Route.extend({
	bookdata:function(){
		return this.store.find('book');	
	
	}
	
});
