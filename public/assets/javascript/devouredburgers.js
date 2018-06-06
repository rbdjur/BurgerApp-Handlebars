$(document).ready(function(){
    $(".added-burgers").on("click","button",function (){
        console.log("click");
        var dataId = $(this).attr("dataid");
        $.ajax("/api/burger/" + dataId, {type:"PUT"}).then(function(response){
            console.log(response);
        })
    })
}
);