var login=[
{
	name: "marwen.khorchani",
	login:"marwen",
	password:123456
},
{   name: "marwen.khorchani",
	login:"ahmed",
	password:123456789
},
{
	name: "marwen.khorchani",
	login:"heni",
	password:111111
},
{
	name: "marwen.khorchani",
	login:"nouha",
	password:111111111
}
]

var name=""
$("#c").click(function(){
	if($("#a").val()===''||$("#b").val()===''){
		window.alert('please tape your contact informations')
	}else{
		var counter=0
		for(var i=0;i<login.length;i++){
			if(login[i]["login"] === $("#a").val() && login[i]["password"] === parseInt($("#b").val())){
				counter++
				name=login[i]["name"]
			}

		}
		console.log(name) 
		if(counter===0){
			window.alert("your contact informations undefined")
		}else{
			// window.open("marmed.html","_self");
			// window.alert("acceuil.")
			// window.close()
			// window.open("marmed1.html")
			$("# loginBloc").hide()
		}
	}
})

