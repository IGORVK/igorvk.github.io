    var app = angular.module('app', []);


//В этом уроке мы напишем базовые контроллеры и фабрику для списков Trello,
//а ng-cloak поможет нам избежать отображения нескомпилированого шаблона.
// Trellо -  менеджер задач см на trello.com
// Сделаем его аналог на Angular
//Подключим библиотеки
//normalize.css, foundation.css - можно найти в интернете свежие версии
//trello.css - это стили конкретно для нашего приложения
//библиотека loDash поможет писать более локаничный код
//и библиотека ангуляр
// так же понадобятся картинки которые заранее приготовлены в папке img

//Начнем!!! :) 25-29 напишем приложение!

// как мы помним любое ангуляр приложение начинается с ng-app, подключим его в html
//<html lang="en" ng-app="app">
// в папк js создадим файл app.js в этом файле инициализируем ангулар
//var app = angular.module('app', []);-  инжектить в него ничего дополнительно не будем
// подключим наш скрип <script src="js/app.js"></script>
// запустим индекс файл в браузере увидим что у нас все работает без ошибок
// и если хотим проверить работу ангулар напишем {{1+1}} и разместим это в боди, запустим браузер и увидим 2
// Дальше давайте немножко займемся разметкой
    // <header>
        // <div class="row">
            // <hi class="app-name left">Trello</hi>
        // </div>
    // </header>
// Теперь обновим приложение и увидим что у нас выводится хедер с подготовленными стилями
// добавим
    // <section id = "lists-container" class = "lists-container" ng-controller = "listsCtrl as listsCtrl">
//
    // </section>
    //ng-controller = "listsCtrl as listsCtrl" такая запись позволяет обращаться к контроллеру не через scope а через this - это удобней поэтому будем использовать имеенно такой синтаксис

    // добавим еще один внутрь первого section
    // <div class="row">
        // <section class="list list-inline" ng-repeat="list in listsCtrl.lists"></section>
    // </div> - это уже будет наш репитор который будет выводить наши столбики с карточками - т.е. новые списки
    //- ng-repeat="list in listsCtrl.lists" - т.е. мы ожидаем что у лист контроллера будут списки и это будет у нас массив который мы сможем вывести
    // теперь внутрь текущего section поместим переменную {{list.listName}}
    // Для работы этой переменной создадим папку controllers в нее поместим файл listsCtrl.js подключим его в html
    //<script src="js/controllers/listsCtrl.js"></script>

    // и опишем его
    // angular.module('app').controller('listsCtrl', function(){
    // console.log('listsCtrl');
    // });
//
    //запустим браузер и посмотрим консоль.. у нас всеработает listsCtrl выводится

    // В ДАЛЬНЕЙШЕМ БУДЕМ РАЗДЕЛЯТЬ НАПИСАНИ ФАБРИК И КОНТРОЛЛЕРОВ В РАЗНЫХ ПАПКАХ И ФАЙЛАХ ПОЭТОМУ СОЗДАДИМ ТАКЖЕ ПАПКУ factory c файлом listFactory.js

    // В listCtrl напишем
    //this.lists = [    {
        // listName : 'List1'
    // },
    // {
        // listName : 'List2'
    // }];- это у нас будет массив в котором у нас  будет несколько объектов
    // так как мы хотим видеть listName - ( {{list.listName}} ) - у нашего объекта, то мы его и напишем

    // НО ОПИСЫВАТЬ МАССИВ JSON ОБЪЕКТОВ В CONTROLLER СИЛЬНО ГРУБО И НЕ ПРАВИЛЬНО. ПОЭТОМУ ЗАИДЖЕКИМ В КОНТРОЛЛЕР в НАШУ ФАБРИКУ listFactory
    // и напишем this.lists = listFactory.getLists(); - т.е. у нашей factory ,будет метод getLists() который будет возвращать нам список листов


    // теперь в файле listFactory.js опишем нашу фабрику
    // angular.module('app').factory('listFactory', function(){
//
    // var service = {};
//
    // return service;
//
// }); - Зачем писать именно так? Когда у нас слишком большая фабрика, то писать сразу же return и объект не всегда удобно. Потому что этот объект сложно читать. И нельзя писать функции отдельно, чтобы их было хорошо видно.
//теперь опишем наш lists и функцию которая его возвращает
  // var service = {};
//
  // var lists = [
    // {
      // id: 1,
      // listName: 'Todo'
    // },
    // {
      // id: 2,
      // listName: 'Doing'
    // },
    // {
      // id: 3,
      // listName: 'Done'
    // }
  // ];
//
  // service.getLists = function () {
    // return lists;
  // };
//
  // return service;

  //подключим нашу фабрику
     // <script src="js/app.js"></script>
    // <script src="js/factory/listFactory.js"></script>
    // <script src="js/controllers/listsCtrl.js"></script>

    // запистим браузер и посмотрим ... все работает наш список объектов из фабрики выводится
    // для удаления эффекта мигания добишем в body ng-cloak который также прописан у нас в нашем trello.css

    // 25------------------END

 //*********************************

    // 26------------------
    //В этом уроке мы продолжаем реализовывать Trello,
    //а именно добавление и удаление списков.
    //для этого добавим в html
    // <section class="list new-list list-inline">
//          <form ng-submit ="listsCtrl.addList()">
                //<input type="text" ng-model = "listsCtrl.listName"/>
            //</form>
    // </section> - т.е. при отправке формы мы хотим чтобы у нас выполнялся метод из listsCtrl
//   Запустим браузер ... как мы видим у нас появилась формочка с текстовым полем ввода

// Начнем описывать   addList()  в контроллере, но мы хотим чтобы все методы у нас были в фабриках поэтому пишем так
    // this.addList = function(){
        // console.log('this.listName', this.listName );// удостоверимся что this.listName у нас правильный
        // listFactory.addList(this.listName); // Закоментим временно эту строку и проверим как работает консоль. Консоль лог работает и как мы видим введенный текст выводитс в консоли раскоментим это строку и продолжим кодинг.
    // };

    //Теперь в listFactory нам необходимо описать  метод addList()!!!
    // Добавим для этого
    // service.addList = function(listName){
        // lists.push({
            // //генерируюм уникальный id c помощью функции библиотеки loDash и передадим при этом префикс list_
            // id: _.uniqueId('list_'),
            // listName: listName // передаем listName тот который нам нужен
        // });
     // };
//    т.е. мы пушим аболютно такой же элемент как в lists массиве фабрики listFactory только создаем ему уникальный id и даем имя которое ввели в инпуте
// посмотрим -  все работает - только не очищается модель после ввода


// Для очищения мы можем в контроллере добавить строку this.listName = '';
// Теперь строка очищается

// Теперь давайте сделаем так чтобы мы могли эти списки удалять
// немного не логично  если мы будем брать метод из listsCtrl.
// Нам необходим контроллер списка  а не всех списков сразу. Нам необходимо его создать
// Напише ng-controller в нашей секции там где мы сделали ng-repeat
//ng-controller="listCtrl as listCtrl" -что это нам дает?
// у нас при добавлении есть доступ ко всем спискам при удалении же у нас есть доступ к конкретному списку
// поэтому логично будет написать
        // <a ng-click="listCtrl.removeList(list)" class="hand">
          // <div class="remove removeList"></div>
        // </a>
//и опишем теперь еще один контроллер в новом файде listCtrl.js создадим файл, подключим его в html
//и опишем контроллер в файле
// angular.module('app').controller('listCtrl', function(listFatory){
//
    // console.log('listCtrl');// проверим работает ли он
//
// }); - работает console выстрелила три раза поскольку у нас изначально было три списка и появились крестики

// теперь добавим в контроллере  метод на вход он получает список list то мы хотим в фабрику передавать list также listFactory.removeList(list)
//angular.module('app').controller('listCtrl', function (listFactory) {
//        console.log('listCtrl');
//  this.removeList = function (list) {
//    listFactory.removeList(list);
//  };
//});- опять таки контроллер не делает никаких операций с данными ... Вся работа с данными происходит только в factory

// Пишем в фабрике
  // service.removeList = function (list) {
    // _.pull(lists, list);//ищем в списке то, что мы ему передали  и она сразу удалит из массива этот элемент
  // };
  // Теперь у нас добавляются и удаляются списки!!!


  // 26------------------END
  //******************************************
  // 27---------------------

  //В этом уроке мы продолжаем реализовывать Trello,
  //а именно отображение и создание карточек.
  // для этого создадим новую фабрику cardFactory.js
  // angular.module('app').factory('cardFactory',function(){
  //   var service = {};// сервис куда мы будем добавлять все наши методы
  //   var cards = [// опишем перечень приватных карточек которые уже будут в налии с полями
   // {
      // id: 1,
      // description: 'Fix bug in player', 
      // list_id: 1 //-каждая карточка у нас привязана к списку и чтобы знать какая карточка к какому списку относится мы вводим такое понятие как list_Id 
      // // т.е. теперь мы можем из всего набора карточек вытянуть только те из них у которых например list_Id равен 1
   // },
   // {
      // id: 2,
      // description: 'Add feature with D3', 
      // list_id: 2
   // },
   // {
      // id: 3,
      // description: 'Learn AngularJS', 
      // list_id: 3
   // }
  //];
  // });
  //
  
  //теперь нам понадобится какой-то метод, который будет возвращать нам карточки по выбранному списку
  
  //service.getCars = function (list){
      // return _.filter(cards, {list_id: list.id}); // берем функцию из loDash которая возвращает из набора карточки с list_id которые пришли по требованию на вход из list
  // }

// теперь в нашем html добавим ng-repeat который будет выводить наши отобранные карточки
// для этого под <h1>{{list.listName}}</h1> 
// добавим <div class="card" ng-repeat ="card in listCtrl.getCards(list)"> {{card.description}}</div> - получается getCards(list)-это метод который вынимает карточки для списка
// значит логично чтобы он относился к контроллеру списка. На вход ему мы передаем list который мы берем т.к. он доступен в ng-repeat выше
// и внутри мы будем выводить {{card.description}}

// и теперь в listCtrl добавим метод this.getCars = function(list){ return cardFactory.getCards(list);};
// и чтобы все работало необходимо заиджектить cardFactory в listCtrl

// angular.module('app').controller('listCtrl', function (listFactory, cardFactory) {
        // console.log('listCtrl');
  // this.removeList = function (list) {
    // listFactory.removeList(list);
  // };
//   
  // this.getCards = function(list){
      // return cardFactory.getCards(list);
      // };
//   
// });

// мы опять не делаем ничего в контроллере ... а исключительно пробрасываем метод в Фабрику
// подключаем новую фабрику в index.html      <script src="js/factory/cardFactory.js"></script>


// теперь добавим возможность добавления новой карточки
// для этого добавим section после removeList
 // <section class="new-card">
    // <form ng-submit = "listCtrl.createCard(list)">
        // <input type="text"
               // ng-model="listCtrl.cardDescription"
               // class="card-input"
               // placeholder="New card"   />
    // </form>
 // </section>
 
 // у нас появилось поле по добавлению карточек, но добавить пок мы ее не можем
 
 //Теперь добавми метод createCard в наш listFactory
 //сначала добавим ее в контроллер 
     // this.createCard = function (list) {
    // cardFactory.getCards(list, this.cardDescription); - здесь this.cardDescription это именно та модель инпута которую мы написали в html
    // this.cardDescription = '';
  // };
  
  

//   теперь добавим этот метод в cardFactory
//  service.createCard = function (list, cardDescription) {
    // cards.push({
      // id: _.uniqueId('card_'),
      // description: cardDescription,
      // list_id: list.id
    // });
  // };
  
  // посмотрим в браузер добавление карточек работает

// 27---------------- END
//**************************
//28---------------------
//продолжаем реализовывать Trello, 
//а именно удаление и обновление карточек.
// Для начала добавим метод deleteCard
// для этого добавим div сразу ниже {{card.description}}
//                 <div class="remove-small remove-card hand"
                     // ng-click = "cardCtrl.deleteCard(card)">
                // </div>
// как мы видим cardCtrl у нас нет
//Зачем он нам? 
// Когда мы работаем с конкретной карточкой, а именно с её обновлением и удалением
// логично чтобы эти экшены находились в контроллере отдельной карточки
// для этого давайте добавим ng-controller = "cardCtrl as cardCtrl" на наш  div class='card' 
// теперь создадим cardCtrl.js
//опишем как обычно 
// angular.module('app').controller('cardCtrl', function(){}); и опишем в нем deleteCard()

//сразу заиджектим cardFactory

// angular.module('app').controller('cardCtrl', function(cardFactory){
    // this.deleteCard = function(card){
      // cardFactory.deleteCard(card);//будет вызывать deleteCard(card) из фабрики при этом мы передаем ей card
    // };
// });

// теперь опишем этот метод в cardFactory
//  service.deleteCard = function (card){//получаем на вход объект для удаления
      // return _.pull(cards, card)//удаляем объект массива
  // };
//  и добавми контроллер который мы создали в index.html 
// у нас появились маленькие крестики и если мы на них нажимаем они у нас исчезают


// теперь реализуем обновление карточек

// для этого мы дабавляем сразу после {{card.description}} <div ng-click ="cardCtrl.editCard(card)" class = "edit-small edit-card hand"></div>  

// опишем метод editCard()
//Для начала добавим переменную которая будет показывать в каком состоянии карточка this.isEditing = false; Если isEditing = true значит сейчас мы редактируем карточку
//Вторая переменная это this.editingCard = null; по карточки которую мы редактируем

   // this.editingCard = function (card){
        // this.isEditing = true;// переводим в состояние тру так как сейчас мы обновляем карточку
        // this.editingCard = angular.copy(card);//делаем копию карточки которую мы получили для возможности отката, иначе при редактировании это привело бы к удалению карточки вообще
    // };
    
    
   // теперь проработаем логику html обернем блок
   
              // <div ng-if="!cardCtrl.isEditing">// но мы хотим это показывать вложенный блок когда у нас не режим редактирования поэтому ставим !(флаг-нет)
                // {{card.description}}
                // <div ng-click ="cardCtrl.editCard(card)" 
                     // class = "edit-small edit-card hand">
                // </div>  
                // <div class="remove-small remove-card hand"
                     // ng-click = "cardCtrl.deleteCard(card)">
                // </div>
              // </div>
              
              
   //Посмотрим в браузер у нас появлися карандашик нажнем... и у нас в состоянии редактирования исчезает содержимое благодаря описанному выше условию 
   // теперь
// ниже добавляем div
          // <div ng-if='cardCtrl.isEditing'>
            // <form ng-submit='cardCtrl.updateCard(card)'>
              // <input type='text' ng-model='cardCtrl.editingCard.description'>
            // </form>
          // </div> - Что мы делаем?
          // это форма которую мы показываем в момент редактирования карточки и у нас есть ng-submit- действия которые будут происходить когда форма будет отправлена
          //и мы подвязываемс на description который у нас находится в editingCard то есть в той карточке, которую мы скопировали

// теперь допишем метод updateCard() в котролере cardCtrl
    // this.updateCard = function (card){
      // cardFactory.updateCard(this.editingCard);  
       //     this.editingCard = null;  // закрываем редактирование 
     // this.isEditing = false; // закрываем редактирование 
    // };
    
// и допише его на фабрике cardFactory
  // service.updateCard = function (updatingCard ){
      // var card  = _.findWhere(cards, {id: updatingCard.id});//находим объект в массиве с id  таким какой мы передали на вход функции и когда мы нашли эту карточку мы хотим её заапдейтить
      // card.description = updatingCard.description;
  // };
//


//28----------------END
//*****************************
//29--------------------

// продолжаем реализовывать Trello, 
//а именно селект для выбора списка и директиву для закрытия формы редактирования.  
// под инпутом <input type='text' ng-model='cardCtrl.editingCard.description'>
// добавим селект <select class="select-list" ng-model="cardCtrl.editingCard.list_id" //мы будем менять list_id У editingCard когда мы меняем что-то в select
                                     //ng-change="cardCtrl.updateCard()" 
                                     //ng-options = "list.id as list.listName for list in listsCtrl.lists"//то из чего мы будем выбирать. Мы используем здесь id
                                     // в лейблах мы будем выводить listName и мы проходим циклом по lists.Ctrl.lists
// внутрь селект добавми <option value="">--choose list--</option>
                                     // ></select>
//посмотрим в браузере и при редактивровании в карточке у нас появляется селект -  выпадающий список  - но пока у нас ничего не меняется

// как мы видим updateCard() у нас будет вызываться по ng-change списка
// Если мы откроем файл cardCtrl мы увидим что у нас есть updateCard() и мы видим что card который мы передаем на вход мы нигде не используем поэтому card можно удалить
// и это значит что  <form ng-submit='cardCtrl.updateCard(card)'> тут тоже он нам не нужен- удаляем   <form ng-submit='cardCtrl.updateCard()'>

// теперь в cardFactory нам надо добавить еще одно присвоение
// т.е у нас будет не только присвоение description card.description = updatingCard.description;
// но также еще будет присвоение list_id card.list_id = updatingCard.list_id;  Т.е. мы берем карточку с list_id и меняем у не list_id на тот который мы получаем из селекта                           
//запустим браузер и посмотрим... теперь когда мы вибраем из селекта нужный список карточка перемещается в этот список

// теперь создадим директиву в папке js/directives/closeEditing.js
// опишем ее 
// angular.module('app').directive('closeEditing', function(){
    // return{
        // link: function (scope, element, attrs){
            // console.log('LINK');
        // }
    // };
// });

// подключим эту директиву в html      <script src="js/directives/closeEditing.js"></script>
// и повесим эту директиву closeEditing на наш инпут в момент редактирования и не забываем что мы пишем здесь close-editing Через тире a не через кэмелкейс
   // <div ng-if='cardCtrl.isEditing'>
                    // <form ng-submit='cardCtrl.updateCard()'>
                      // <input               close-editing
                                           // type='text'   
                                           // ng-model='cardCtrl.editingCard.description'>
                      // <select              class="select-list" 
                                           // ng-model="cardCtrl.editingCard.list_id" 
                                           // ng-change="cardCtrl.updateCard()" 
                                           // ng-options = "list.id as list.listName for list in listsCtrl.lists">
                      // <option value="">--choose list--</option>
                      // </select>
                    // </form>
              // </div>
// теперь посмотрим в браузер ... когда мы нажимаем edit наша директива  LINK  отрабатывает    

// теперь мы хотим создать scope В нашей директиве Давайте его опишем и передать туда переменную isEditing 
 // scope: { 
            // isEditing: '=' // и это значит что у нас двусторонний дата биндинг и мы должны дописать в инпут 
            
            // <input               close-editing
                                           // type='text'   
                                           // ng-model='cardCtrl.editingCard.description'>
            
            
           // is-editing = 'cardCtrl.isEditing' для того чтобы мы могли в любой момент из директивы её поменять 
        // },
//теперь выведем  в console.log('LINK', scope.isEditing);    
// посмотрим в браузере и увидим что LINK у нас true и мы можем его поменять и тогда она станет false!!
// для этого в link: function напишем
// element.on('keyup', function(e){// т.е событие будет происходить по нажатию клавиши
    
//});

// так же опишем сверху переменную var KEYS которая будет являться объектом и будет хранить в себе ключи тех букв которые мы нажимаем
// в данном случае нас интересует клавиша ESCAPE ее код 27 чтобы дальше мы могли ее использовать как константу   
// 
// var KEYS = {
    // ESCAPE: 27
// }      
//     

// Далее в link: function на keyup мы проверяем с помощью _.isEqual что нажатая клавиша равна нашей ESCAPE
  // if(_.isEqual(e.keyCode, KEYS.ESCAPE))  {
      // scope.isEditing = false;// т.е. закрываем форму редактирования
      // scope.$apply();// так же не надо забывать что keyup это метод JQlite и о нем ничего JQuery не знает поэтому нам нужно вызвать scope.$apply(); для того чтобы применить то что мы поменяли переменную isEditing = false Если не напишем $apply() то ничего работать не будет
  // }
  
  
  // теперь если мы посмотрим в браузер то увидим если мы войдем в режим редактирования и поставим фокус на инпут а потом нажмем ESC то форма редактирования закроется!!!





















