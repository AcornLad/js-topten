$(document).ready(function(){
    var entries = {};
    var list = [];
    var count_userInput = 2;
    $('#add_selection').click(function(){
        console.log("add_userInput clicked");
        $("form").append("<input type=\"text\" class=\"userInputItem\" name=\"Selection_" + count_userInput + "\" placeholder=\"Item " + count_userInput +"\">");
        count_userInput++;
    });
    
    //this.eliminatedBy = item that eliminated a choice
    //Once an eliminator is picked, anything elminated by that eliminator(stored in eliminatedBy property) is put back in the running after the eliminator //is ranked top. Then once a second place is picked, anything eliminated by that eliminator is placed back in the running
    //On submit, make an array from fields, then make an itemX from each index in the array and give Name 
    /*
        var item1(name){
            eliminatedBy = some item
            Name = From field
        }
    */
    $(name='#submit_input').click(function(){
        console.log("submit_userInput clicked");
        $(function(){  
            $(".userInputItem").each(function(){
                //entries[$(this).attr("name")] = $(this).val();
                list.push({name: [$(this).attr("name")], killedBy: "nothing"});
            });
            //console.log(entries.Selection_3); //Testing purposes. Remove later.
            //vvv Also for testing purposes vvv
            $.each(list, function(){
                console.log("List item");
                console.log(this.name);
                console.log(this.killedBy);
            });
            
            $("#userStage").append("<p>Test</p>");
            //Now, append two big buttons with the display name as the list item names. When clicked, begin business logic
        });
    });
    
    
    
    
    
});