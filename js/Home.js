$(document).on('click', '.ClickNavList', function (event) {
    event.preventDefault();
    if ($(".OpenNavList").hasClass("show")) {
        $(".OpenNavList").removeClass("show");
    }
    else {
        $(".OpenNavList").addClass("show");
    }
});

$(document).on('click', '.ClickTogglebtn', function (event) {
    event.preventDefault();
    if ($("#navbarNav").hasClass("show")) {
        $("#navbarNav").removeClass("show");
    }
    else {
        //$("#navbarNav").animate("slow");
        $("#navbarNav").addClass("show");
        //$("#navbarNav").animate({ speed: 'slow' });
    }
});

//function ClickNavList() {
//    debugger;
//    if ($(".OpenNavList").hasClass("show")) {
//        $(".OpenNavList").removeClass("show");
//    }
//    else {
//        $(".OpenNavList").addClass("show");
//    }
//}