var container = document.getElementById("container");
var alldivs = container.getElementsByTagName("div");
var divs = [];
var temp = "float-img-left";
    
for(var i = 0; i < alldivs.length; i++)
{
    console.log("container.length: " + container.length);

    var divImages = alldivs[i].getElementsByTagName("img");

    console.log("divImages.length: " + divImages.length);

    if(divImages.length != 0 && alldivs[i].className != "Section")
    {
        divs.push(alldivs[i]);
    }
}

for(var i = 0; i < divs.length; i++)
{
    var divImages = divs[i].getElementsByTagName("img");

    if(i%2 == 0)
    {
        temp = "float-img-right";
    }
    else
    {
        temp = "float-img-left";
    }

    for(var j = 0; j < divImages.length; j++)
    {
        divImages[j].classList.add(temp);
    }
}