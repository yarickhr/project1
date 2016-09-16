/**
 * Created by Vlad on 9/1/2016.
 */
var upVotes = document.getElementsByClassName('imgUp');
var downVotes = document.getElementsByClassName('imgDown');

for(var i = 0; i < upVotes.length; i++) {

    upVotes.item(i).addEventListener('click', function(event) {
        var up = +event.target.nextSibling.nextSibling.innerHTML;
        event.target.nextSibling.nextSibling.innerHTML = up + 1;

    });
}
for(var i = 0; i < downVotes.length; i++) {

    downVotes.item(i).addEventListener('click', function(event) {
        var up = +event.target.nextSibling.nextSibling.innerHTML;
        event.target.nextSibling.nextSibling.innerHTML = up + 1;

    });
}