var form = document.getElementById("gitForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value
    var name = search.split(' ').join('')
    // alert(name)
    fetch("https://api.github.com/users/" + name)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            //
            image=data.avatar_url;
            id=data.id;
            hyperlink=data.html_url;
            // debugger
            document.getElementById("userData").innerHTML =
                "<a href='"+data.html_url+"'>Github link</a>"
                "<img src='\image\'/>
        })

})
