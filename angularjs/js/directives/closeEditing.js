angular.module('app').directive('closeEditing', function(){
    var KEYS = {
                    ESCAPE: 27
                };   
                
return{
     
        
        scope: { 
            isEditing: '=' // и это значит что у нас двусторонний дата биндинг и мы должны дописать в инпут is-editing = 'cardCtrl.isEditing' для того чтобы мы могли в любой момент из директивы её поменять 
        },
        
        
        link: function (scope, element, attrs){
            console.log('LINK', scope.isEditing); 
            
             element.on('keyup', function(e){
              if(_.isEqual(e.keyCode, KEYS.ESCAPE))  {
      scope.isEditing = false;// т.е. закрываем форму редактирования
      scope.$apply();// так же не надо забывать что keyup это метод JQlite и о нем ничего JQuery не знает поэтому нам нужно вызвать scope.$apply(); для того чтобы применить то что мы поменяли переменную isEditing = false Если не напишем $apply() то ничего работать не будет
                                                    }
  
                    });

        }
    };
});