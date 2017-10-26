// Get the modal
var modal = document.getElementById('id01');

function getCookie(cname) { //get the cookie
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var count = 0;
function incrementLikes(){
  count++;
  document.getElementById("numLikes").innerHTML = 100 + count;
  console.log("increment likes called")
}

function incrementShares(){
  count++;
  document.getElementById("numShares").innerHTML = 100 + count;
}

function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev) {
  console.log(ev)
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log("drop",data); //the one we need to swap with
  var destination = ev.target;
  var origen = document.getElementById(data);
  var copyDestination=destination.src;

  //swap 1
  console.log($('#'+ev.target.id).children().first()[0].src);
  var mainVidInf = $('#'+ev.target.id).children().first()[0].src
  console.log("mainvidinf: "+mainVidInf)

  //swap 2
  $('#'+ev.target.id).children().first()[0].src= $('#'+data).children().first()[0].src;
  $('#'+ev.target.id).get(0).load();


  $('#'+data).get(0).load();
  console.log($('#'+data).get(0).id);
  setInfo($('#'+data).get(0).id); //swap information of mainvid and dragged vid
}


function setInfo(id){
  var index = id.substring(id.indexOf('o')+ 1); //get vid number

  var oldTitle = document.getElementById("title01").innerHTML;  //temp for swap
  var oldDesc = document.getElementById("description01").innerHTML;  //temp for swap
  console.log('old des for main'+ oldDesc);

  //swap 1
  document.getElementById("title01").innerHTML = document.getElementById("title0"+index).innerHTML;
  document.getElementById("description01").innerHTML = document.getElementById("description0"+index).innerHTML

  //swap 2
  document.getElementById("title0"+index).innerHTML = oldTitle;
  document.getElementById("description0"+index).innerHTML = oldDesc;
  console.log('Should be Blytheblair ....'+document.getElementById('title01').innerHTML);
}


function expand_collapse(id) {  //expand / collapse description
   var e = document.getElementById(id);
   if(e.style.display = 'none'){
      e.style.display = 'block';
   }
   else {
      e.style.display = 'none';
   }
   console.log("expand called")
   console.log(e)
}


function reply_click()
{
  console.log(event.srcElement.id);
}
