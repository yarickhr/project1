
change();
document.addEventListener("click", change); //Чтобы при клике коментарии не менялись местами

function change(event) {
	if (true || event.target.className == "imgUp") {
		
		var main = document.getElementById("main");
		var up = document.querySelectorAll(".up");
		var arr = [];
		
		for (var i = 0; i < up.length; i++) {
		
		var inner = up[i].innerHTML;
		var count = {
			likes: inner,
			text: up[i].parentNode.parentNode.parentNode
		};

		arr.push(count);	
		};

		arr.sort(compareLikes);
		var size = 200;
		
		for (var k = 0; k < 5; k++) {
			arr[k].text.style.fontSize = "" + size + "%";
			size -= 20;

			if (arr[k].likes == arr[k + 1].likes) {
				arr[k + 1].text.style.fontSize = arr[k].text.style.fontSize;
			};
		};


		
	} else {
		return;
	};
};


function compareLikes(one, two) {
  return two.likes - one.likes;
};
