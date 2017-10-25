// swap titles
// get rid of posters
// addcookies to 2
// modify 3
// double check doc


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
  console.log("drop",data);
  var destination = ev.target;
  var origen = document.getElementById(data);
  var copyDestination=destination.src;

  console.log($('#'+ev.target.id).children().first()[0].src);
  var mainVidInf = $('#'+ev.target.id).children().first()[0].src
  $('#'+ev.target.id).children().first()[0].src= $('#'+data).children().first()[0].src;
  $('#'+ev.target.id).get(0).load();

  $('#'+data).children().first()[0].src = mainVidInf;
  $('#'+data).get(0).load();
}

function setInfo(id){
  var index = id.substring(id.indexOf('o')+ 1) - 1;
  console.log(index);
  console.log(document.getElementById(id))
  //.nextElementSibling.innerHTML);
  document.getElementById(id).nextElementSibling.innerHTML = vidinfo[index].title;
  document.getElementById("description0" + (index+1)).innerHTML= vidinfo[index].description;

}

function expand_collapse(id) {
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
var vid_1 = {
  title: "OCD - Neil Hilbord",
  description: "This video is one of Button Poetry's most popular posts. The spoken word poem was a contest winner at Rustbelt 2013",
};

var vid_2 = {
  title: "Friend Zone - Dylan Garity",
  description: "Performing at the Saint Paul Soapboxing Poetry Slam in May 2013."
};
var vid_3 = {
  title: "Girl Code 101 - Blythe Baird",
  description: "Blythe Baird, performing for Chicago at the 2014 National Poetry Slam."
};
var vid_4 = {
  title: "Shrinking Women - Lily Meyers",
  description: "Lily Myers, performing for Wesleyan University at the 2013 College Unions Poetry Slam Invitational. This poem was awarded Best Love Poem at the tournament."
};

var vidinfo = [vid_1, vid_2, vid_3, vid_4];



function reply_click()
{
  console.log(event.srcElement.id);
}
