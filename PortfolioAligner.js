alert("Hey");
console.log("function starting at least...");


var container = document.getElementById("container");
var alldivs = container.getElementsByTagName("div");
//var alldivs = document.getElementsByTagName("div");
//var container = document.getElementsByID("container");
var divsincontainer = [];
var divs = [];
var temp = "float-img-left";

console.log(typeof(alldivs));
console.log(typeof(alldivs[0]));
console.log("divs: " + alldivs.length);
    
for(var i = 0; i < alldivs.length; i++)
{
    //if(container. (alldivs[i]));
    //{
    //    console.log("continuing...");
    //    continue;
    //}

    console.log("container.length: " + container.length);

    var divImages = alldivs[i].getElementsByTagName("img");

    console.log("divImages.length: " + divImages.length);

    //Remove divs with no images from divs
    if(divImages.length != 0 && alldivs[i].className != "Section")
    {
        divs.push(alldivs[i]);
        console.log("Pushing...");
    }
}

console.log("updated divs: " + divs.length);

for(var i = 0; i < divs.length; i++)
{
    var divImages = divs[i].getElementsByTagName("img");

    if(i%2 == 0)
    {
        temp = "float-img-left";      
        console.log(i + "%2 == 0");  
    }
    else
    {
        temp = "float-img-right";     
        console.log(i + "%2 != 0");     
    }

    for(var j = 0; j < divImages.length; j++)
    {
        console.log("Right what the fuck? TEMP: " + temp);
        console.log(divs[i].id);
        divImages[j].classList.add(temp);
        console.log(divImages[j].src);
        console.log(divImages[j].classList);
    }
}