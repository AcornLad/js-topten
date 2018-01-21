$(document).ready(function(){
    var count_userInput = 2;
    $("#add_userInput").click(function(){
        console.log("add_userInput clicked");
        $("form").append("<input type=\"text\" name=\"Selection_" + count_userInput + "\" placeholder=\"Item " + count_userInput +"\">");
        count_userInput++;
    });
})