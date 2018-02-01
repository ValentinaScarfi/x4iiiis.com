//var divs = document.getElementsByTagName("div");
//for(var i = 0; i < divs.length; i++){
   //do something to each div like
//   divs[i].innerHTML = "something new...";
//}

var divs = document.getElementsByTagName("div");
var divImages = divs[i].getElementsByTagName("img");
var temp = "float-img-left";
for(var i = 0; i < divs.length; i++)
{
    //Make even numbers float-img-right
    //Make odd numbers float-img-left
    if(i % 2 == 0)
    {
        temp = "float-img-right";
    }
    else
    {
        temp = "float-img-left";
    }

    for(var j = 0; j < divImages.length; j++)
    {
        divImages[i].class=temp;
    }
}