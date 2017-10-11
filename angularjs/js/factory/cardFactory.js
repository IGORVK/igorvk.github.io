angular.module('app').factory('cardFactory',function(){
  var service = {};
   var cards = [// опишем перечень приватных карточек которые уже будут в налии с полями
   {
      id: 1,
      description: 'Fix bug in player', 
      list_id: 1 //-каждая карточка у нас привязана к списку и чтобы знать какая карточка к какому списку относится мы вводим такое понятие как list_Id 
      // т.е. теперь мы можем из всего набора карточек вытянуть только те из них у которых например list_Id равен 1
   },
   {
      id: 2,
      description: 'Add feature with D3', 
      list_id: 1
   },
   {
      id: 3,
      description: 'Learn AngularJS', 
      list_id: 3
   }
  ];
  
    service.getCards = function (list){
      return _.filter(cards, {list_id: list.id}); // берем функцию из loDash которая возвращает из набора карточки с list_id которые пришли по требованию на вход из list
  };
  
  service.createCard = function (list, cardDescription) {
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    });
  };
  
  service.updateCard = function (updatingCard ){
      var card  = _.findWhere(cards, {id: updatingCard.id});//находим объект в массиве с id  таким какой мы передали на вход функции и когда мы нашли эту карточку мы хотим её заапдейтить
      card.description = updatingCard.description;
      card.list_id = updatingCard.list_id;
      
  };
  
  service.deleteCard = function (card){//получаем на вход объект для удаления
      return _.pull(cards, card);//удаляем объект массива
  };
  
  
  return service;


 

});
