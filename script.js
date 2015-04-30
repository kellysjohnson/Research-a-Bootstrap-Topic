var raphael = {
	name:"raphael", 
	image: "http://1.bp.blogspot.com/-rJVVeUo-NPQ/Ta7bmJNjUpI/AAAAAAAAL-E/BRDegvMuU_Q/s1600/profile_raphael.gif"}

var ninjakitty = {
	name: "ninjakitty",
	image: "http://imgs.tuts.dragoart.com/how-to-draw-a-ninja-cat_1_000000018973_3.png"}

var bellie = {
	name: "bellie",
	image: "http://1.bp.blogspot.com/-N_9iLJZTMmY/UHcbp3FVe7I/AAAAAAAAAeM/4WjhaJHLERg/s1600/springninjaali_whitebackground.gif" }	

var ninjas =[raphael, ninjakitty, bellie]	

var sparrow = {
	name: "sparrow",
	image: "http://static.hdw.eweb4.com/media/thumbs/1/104/1030110.jpg"
}

var spongeB = {
	name: "spongeB" ,
	image: "http://stuffpoint.com/spongebob-square-pants/image/76301-spongebob-square-pants-pirate-with-sponge-bob.jpg"
}

var scaryP = {
	name: "scaryP" ,
	image: "http://www.takeourword.com/images/pirate.gif"
}

var pirates =[sparrow, spongeB, scaryP]


var i;

$(document).ready(function(){
	
	$('.dropdown-menu-right li div').on("click", function(){
		// console.log("pick me, right");
		$('.col-lg-10').children().remove();
		
		var identifier = $(this).data("id");
		// console.log(identifier);
		
	for (i=0; i<ninjas.length; i++)
		if(identifier == ninjas[i].name) {
			$('.col-lg-10').append("<img src=" + ninjas[i].image +">")
		}

	});


		$('.dropdown-menu-left li div').on("click", function(){
		// console.log("pick me");
		$('.col-lg-10').children().remove();
		
		var identifier = $(this).data("id");
		// console.log(identifier);
		
	for (i=0; i<pirates.length; i++)
		if(identifier == pirates[i].name) {
			$('.col-lg-10').append("<img src=" + pirates[i].image +">")
		}

	});

});