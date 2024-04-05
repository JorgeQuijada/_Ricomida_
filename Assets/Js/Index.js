$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("your email was sent...");
    });
});

$(document).ready(function() {
    $("#agregarReceta").click(function() {
        alert("your recipe was saved successfully...");
    });
});

$(document).ready(function() {
    $("#Ingredientes").dblclick(function() {
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    $("#Preparacion").dblclick(function() {
        $(this).css("color", "red");
    });
});
$(document).ready(function() {
    $("#close1").on("click", function() {
            $("#open1").toggle();
        });
});
$(document).ready(function() {
    $("#close2").on("click", function() {
            $("#open2").toggle();
        });
});
$(document).ready(function() {
    $("#close3").on("click", function() {
            $("#open3").toggle();
        });
});