angular.module('app').controller('listsCtrl', function(listFactory){
	console.log('listsCtrl');
	this.lists = listFactory.getLists();
	
    this.addList = function(){
        console.log('this.listName', this.listName );// удостоверимся что this.listName у нас правильный
        listFactory.addList(this.listName);
        this.listName = '';  //очищаем строку
    };
    
});