// Get the modal
var modal = document.getElementById('id01');

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
  console.log("increment likes called");
}

function incrementShares(){
  count++;
  document.getElementById("numShares").innerHTML = 100 + count;
}

function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev) {
  console.log(ev);
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
  var mainVidInf = $('#'+ev.target.id).children().first()[0].src;
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
  document.getElementById("title01").innerHTML = "Now Watching: "+document.getElementById("title0"+index).innerHTML;
  document.getElementById("description01").innerHTML = document.getElementById("description0"+index).innerHTML;

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
   console.log("expand called");
   console.log(e);
}

function reply_click()
{
  console.log(event.srcElement.id);
}

function getCookie(cname) {
  var name = cname + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) { // for every cookie in the array
    var c = cookieArray[i]; // get the substring
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return " ";
}
function logIn(){
  var email = document.getElementsByName("email")[0].value;
  var password = document.getElementsByName("psw")[0].value;
  console.log(email);
  checkCookie(email,password);
}
function checkCookie(email, password) {
    if (email == getCookie('email') && password == getCookie('password')) {
        console.log("recognized email and password");
        originalCookie = document.cookie;
        fillInfo();
    } else {  //abre la otra pagina
        window.location.href = "file:///Users/hmcshan/github/iu-ejercicio1/index.html";
        }
}

function fillInfo(){
  var fields = ["fname", "lname", "email","dob","lang","profpic", "username", "address", "paymentmethod"]
  document.getElementById("userNameHeader").innerHTML = getCookie("username");
  $("profpic").attr("src",getCookie("profpic"));  //closeimg ./images
}
