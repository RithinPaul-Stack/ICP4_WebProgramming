function getGithubInfo(user) {
    $.ajax({
        "url": "https://api.github.com/users/" + user,
        "type": 'GET',
        "success": function (res) {
            showUser(res);
        },
        "fail": noSuchUser(user),
    });
}


function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);
    $(".userImage").show();
    $(".information").show();
    $("#user_info h1").text(user.login);
    $(".userImage img").attr("src", user.avatar_url);
    $("#GitHubname").text(user.login == null ? "null" : user.login);
    $("#loginId").text(user.id);
    $("#gitURL").attr("href",user.html_url);

    console.log($("#git").attr("href"));
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#user_info h1").text(username + "doesn't exist on github!");
    $(".userImage").hide();
    $(".information").hide();

}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        let username;
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
            //if the response is successful show the user's details
        }
    })
});