//定义Todos命名空间中的Book实体
Todos.Book = DS.Model.extend({
	title:DS.attr('string'),
	author:DS.attr('string')
});

//定义Book实体类数据
Todos.Book.FIXTURES = [
{
	id:1,
	title:'《Ember学习手册》',
	author:'Jim'
},
{
	id:2,
	title:'《Ember程序100例》',
	author:'Tom'
},
{
	id:3,
	title:'《从零开始学Ember》',
	author:'Sean'
}
];