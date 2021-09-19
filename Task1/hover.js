function upDate(previewPic)
{
    const image = previewPic.getAttribute("src");
    const word = previewPic.getAttribute("alt");
    document.getElementById("image").style.backgroundImage = "url('"+image+"')";
    document.getElementById("image").innerHTML = word;
}


function unDo()
{
    document.getElementById("image").style.backgroundImage = null;
    document.getElementById("image").innerHTML = "Hover & see the magic!"
}
