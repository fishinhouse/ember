//定义Todo实体类
Todos.Todo = DS.Model.extend({
	title:DS.attr('string'),
	isCompleted:DS.attr('boolean')
});

//定义Todo实体类数据
Todos.Todo.FIXTURES = [
{
	id:1,
	title:'学习ember.js',
	isCompleted:true
},
{
	id:2,
	title:'学习python',
	isCompleted:false
},
{
	id:3,
	title:'学习Django',
	isCompleted:false
}
];