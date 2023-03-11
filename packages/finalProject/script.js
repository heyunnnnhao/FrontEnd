$(document).ready(function () {
	//next and previus video
	//three functions to show each vid
	function show1() {
		//vid is the class which has display:none prop
		$("#two").addClass("vid"); //add ths class to video 2 to hide it
		$("#three").addClass("vid"); //add ths class to video 3 to hide it
		$("#one").removeClass("vid"); //remove the class from video 1 to show it
		console.log('showing video 1');
	};
	function show2() {
		$("#one").addClass("vid");
		$("#three").addClass("vid");
		$("#two").removeClass("vid");
		console.log('showing video 2');
	};
	function show3() {
		$("#one").addClass("vid");
		$("#two").addClass("vid");
		$("#three").removeClass("vid");
		console.log('showing video 3');
	};
	//list of function, and define counter
	var functions = [show1, show2, show3];
	var index = 0;
	//next and prev function to loop through the list of showing-video functions
	function nextVideo() {
		index == 2 ? index = 0 : index++; //loop counter
		functions[index](); //run
		//loop first before running because first func is to show vid 1
	}
	function previousVideo() {
		index == 0 ? index = 2 : index--;
		functions[index]();
	}
	//button eventListener
	$("#next").click(function () {
		nextVideo(); //click this first will show vid 2
	});
	$("#previous").click(function () {
		previousVideo(); //click this first will show vid 3
	});

	//get pictures
	$('.btn').click(function () {
		var keyword = $('#keyword'); //get the keyword from select box or text input
		var keywordText = keyword.val() !== '' ? keyword.val() : 'underwood'; //default word: underwood

		$('#content').text('loading . . .'); //pretend to be loading

		$.ajax({
			type: 'GET',
			url: 'https://www.reddit.com/r/HouseOfCards/search.json',
			data: {
				q: keywordText,
				restrict_sr: true
			},
			success: function (response) {
				$('#keyword').val(keywordText);
				var posts = $(response.data.children);

				$('#content').text('');

				posts.each(function (i, post) {
					if (post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default') {
						$('#content').append(`<div class="post">
							<img class="padded" src="${post.data.thumbnail}" />
							<p>${post.data.title}</p>
						</div>`); //append a new div(directly write html code)
					}
				});
			},
			error: function (response) {
				$('#content').text('There was a problem getting data.');
				console.log(response.statusCode()); //what is it
			}
		});

		keywordText = ''; //clear box after search

	});

	//clear button
	$(".clear").click(function () {
		$("#content").empty();
	});

	//play music button
	$("#audioBut").click(function () {
		// var audio = document.getElementById("audio");
		var audio = $("#audio")[0]; //won't work without the [0], don't know why
		//check audio status, and play pause
		if (!audio.paused) {
			audio.pause()
			$("#audioBut").html("Play");
		} else {
			audio.volume = 1;
			//uncomment this, button will restart instead of resume music
			// audio.currentTime = 0;
			audio.play();
			$("#audioBut").html("Pause");
		}
	});

	//button scroll to top
	$("#top").click(function () {
		window.scrollTo(0, 0);
	});
});




