$(function() {
    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
        let burgerName = $("#burger-name").val().trim();
        if (burgerName === ""){
            return;
        }
        $.ajax("/", {
            type: "POST",
            data:{ burger: burgerName}
        }).then(function(){
            location.reload();
        });
    });

    $(".eat-button").on("click", function(event) {
        event.preventDefault();
        let burgerId = $(this).val().trim();

        $.ajax("/", {
            type: "PUT",
            data:{ burger: burgerId}
        }).then(function(){
            location.reload();
        });
    });
})