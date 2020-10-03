
// $("account").hide()

var user={};
$("#c").click(function(){
	if($("#a").val()===''||$("#b").val()===''){
		window.alert('please tape your contact informations')
	}else{
		var counter=0
		for(var i=0;i<users.length;i++){
			if(users[i]["name"] === $("#a").val() && users[i]["password"] === $("#b").val()){     // change the div 
				user = users[i];
				counter++
			}

		}

		if(counter===0){
			window.alert("your contact informations undefined")
		}else{
			$("#loginBloc").hide() 
			$("#account").show()
			$(".addbox").show()
			var $account = $('.myacc');
			var $image = $('<img id="imgprofil" src="'+ user["image"] +'">')
			var $userName = $('<h4>'+ user["name"]+'</h4>')
			$account.append($image);
			$account.append($userName);
			
   
	    display();    
        }
        ///////// //css of div #account

			$('body').css({
			 "margin":0, "padding":0, "font-family":"Roboto, sans-serif","background-image": "url('https://image.freepik.com/photos-gratuite/vue-aerienne-papeterie-ordinateur-portable-bureau-fond-blanc_23-2147880623.jpg')"
			 ,"background-repeat":"no-repeat" , "background-attachment":"fixed"
			})	

  }
	
})

/////////

function display() {
		$('.content').html('');
	var $messageslist= $('.content');                                                                                     //display of list messages
     var index=messages.length-1;                  																		// like to 	messg ( and number of likes)
        while(index >= 0){																									// times of messg
           var message=messages[index]["messageVal"];
            var userId = messages[index]["userId"];
           var $message= $('<div class="container darker "><img src='+users[userId]["image"]+' alt="Avatar" class="right"></div>');
          
	          var $messageval= $("<p></p>");
	          var $user = $("<div class='user'></div>");
	          var $delete= $('<button  id="' +  messages[index]["messageId"] + '" class="btnlike "style="width:100px" onclick="deleteMessage(this.id)">delete</button>')
	          var $like= $('<button  id="' +  messages[index]["messageId"] + '" class="btnlike "style="width:100px" onclick="like(this.id)">like</button>')
	          var $times= $('<p class="time-right"><span class="time-right"></span></p>')
	          var $likes= $('<p class="likes"><span class="likes"></span></p>');
	          var t =times(messages[index]["date"]);
	          var userId = messages[index]["userId"];
          $user.text(users[userId]["name"]);
          $times.text(t)
          $likes.text(messages[index]["likes"] + " likes")
          $messageval.text(message);
         
          $message.append($user);
          $message.append($messageval);
          $message.append($like);
          $message.append($delete);
          $message.append($likes);
          $message.append($times);
          $messageslist.prepend($message);
          index -= 1;
      }
}


  var d = new Date();
	function times(date){
	 var d = moment(new Date());
	return date.from(d);
}


function create(){
  addUser($('#a1').val(),$('#b1').val(),$('#a2').val(),$('#myfile').val());
	$("#loginBloc").show();
	 $("#crea-acc").hide();
}

function createAccount(){
	$("#loginBloc").hide();
	 $("#crea-acc").show();
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||OOP|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

var users = [];
var messages = [];
    var userIdgenerateur = 0;
    var messageIdgnerateur = 0;
 function User(name,password,email,image){

	var instance = {};
		instance.userId = userIdgenerateur;
		instance.name = name;
		instance.password = password;
		instance.email = email;
		instance.image =img(image);

		instance.addMessage = addMessage;
		instance.deleteMessage = deleteMessage;
		// instance.updateMessage = updateMessage;
		instance.like = like;
		instance.search = search;
		userIdgenerateur++;
	return instance;
};

function Message(userId,messageVal){
	
	var instance = {};
		instance.messageId = messageIdgnerateur;
		instance.userId = userId;
		instance.messageVal = messageVal;
		instance.date = moment(new Date());
		// instance.views =[];       we didn't use it
		// instance.viewsNumber = 0; 
		instance.likes = 0;
		messageIdgnerateur++;
	return instance; 
}
 	function img (image){

 		var imge = image.split('-');
 		var index = imge.length-1;
 		return '-'+imge[index];
 	};
function addUser(name,password,email,image){
	users.push(User(name,password,email,image));
}

function addMessage(userId,val){
	messages.unshift(Message(userId,val));
}

// function updateMessage(messageId,val){
// 	for (var i= 0; i< messages.length; i++) {
// 		if(messages[i]["messageId"] === messageId){        //we didn't use it
// 			messages[i]["messageVal"] = val;
// 		}
// 	}
// }

function deleteMessage(messageId){
	for (var i= 0; i < messages.length; i++) {
		if(messages[i]["messageId"] == messageId){
			messages.splice(i,1);
		}
	}
	display();
}

function like(messageId){
	for (var i= 0; i < messages.length; i++) {
		if(messages[i]["messageId"] == messageId){
			console.log(messages[i]["messageId"])
			messages[i]["likes"]=messages[i]["likes"]+1;

		}
	}
	display();
};

// function views(userId,messageId) {
// 	for (var i = 0; i < messages.length; i++) {
// 		if(messages[i]["messageId"]===messageId){          //we didn't use it
// 			messages[i]["views"].push(userId);
// 			messages[i]["viewsNumber"]++;
// 		}
// 	}
// }


function search(userName) {
	var userId = undefined;
	for (var i = 0; i < users.length; i++) {
		if(users[i]["name"]=== userName){
			userId = users[i]["userId"];
		}
	}
	var userMessages =[];
	for (var i = 0; i < messages.length; i++) {
		if(messages[i]["userId"]=== userId){
			userMessages.push(messages[i])
		}
	}
	return userMessages;
};



addUser("HENI","000","heni@","-heni.png");
addUser("NAOURESS","000","@naouress","-naouress.png");
addUser("AHMED","000","@ahmed","-ahmed.png");
addUser("NOUHA","000","@nouha","-nouha.png");
addUser("GHADA","000","@ghada","-ghada.png");

addMessage(0,"Good morning champs");
addMessage(3,"have a nice day");
addMessage(1,"Rise and shine Champs");
addMessage(2,"what's the planing of today ");
addMessage(4,"how many hours did you sleep yesterday!!");
addMessage(3,"See you next..");




function addMessages() {
	addMessage(user["userId"],$('.message').val());	
	$('.message').val('');
	display();
}




function searchs() {
	var array = search($('.search').val());
		$('.content').html('');
	var $messageslist= $('.content');                                                                                	     //display of list messg
																													  		// delete messg
     var index=array.length-1;   
     							             																		// like to 	messg ( and number of likes)
        var userId = messages[index]["userId"];


        while(index >= 0){																									// times of messg
           var message=array[index]["messageVal"];
                 

          	   var $message= $('<div class="container darker "><img src='+users[userId]["image"]+' alt="Avatar" class="right"></div>');
          
	          var $messageval= $("<p></p>");
	          var $user = $("<div class='user'></div>");
	          var $delete= $('<button  id="' +  array[index]["messageId"] + '" class="btnlike "style="width:100px" onclick="deleteMessage(this.id)">delete</button>')
	          var $like= $('<button  id="' +  array[index]["messageId"] + '" class="btnlike "style="width:100px" onclick="like(this.id)">like</button>')
	          var $times= $('<p class="time-right"><span class="time-right"></span></p>')
	          var $likes= $('<p class="likes"><span class="likes"></span></p>');
	          var t =times(array[index]["date"]);
	          var userId = array[index]["userId"];
          $user.text(users[userId]["name"]);
          $times.text(t)
          $likes.text(array[index]["likes"] + " likes")
          $messageval.text(message);
         
          $message.append($user);
          $message.append($messageval);
          $message.append($like);
          $message.append($delete);
          $message.append($likes);
          $message.append($times);
          $messageslist.prepend($message);
          index -= 1;
      }
}





 function logout() {
	window.open("marmed.html","_self");

 }