angular.module('app').controller('cardCtrl', function(cardFactory){
    
    this.isEditing = false;
    this.editingCard = null;
    
    this.editCard = function (card){
        this.isEditing = true;// переводим в состояние тру так как сейчас мы обновляем карточку
        this.editingCard = angular.copy(card);//делаем копию карточки которую мы получили для возможности отката, иначе при редактировании это привело бы к удалению карточки вообще
    };
    
    this.updateCard = function (){
      cardFactory.updateCard(this.editingCard);
     
      this.editingCard = null;  // закрываем редактирование 
      this.isEditing = false; // закрываем редактирование 
    };
    
    
    this.deleteCard = function(card){
      cardFactory.deleteCard(card);//будет вызывать deleteCard(card) из фабрики при этом мы передаем ей card
    };
});
