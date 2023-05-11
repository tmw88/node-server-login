var turn_num = 0;

function turn_count()
{
    turn_num += 1;
    return turn_num;
}

var current_turn = "X";
var next_turn = "O";

function change_player()
{
    var turn_num = turn_count();

    if(turn_num % 2 == 0){
        current_turn = "O";
        next_turn = "X";
    }
    else
    {
        current_turn = "X";
        next_turn = "O";
    }
}

$.jqueryFunc = function() {
    $(".tac").css("background-color","coral")
    $(".tac").text("")
    $(".tac").prop('disabled', false)
    $("#display_turn").text("Player X begins")

    turn_num = 0;
};

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#btn1").css("background-color","chocolate")
        $("#btn1").text(current_turn)
        $("#btn1").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn2").click(function(){
        $("#btn2").css("background-color","chocolate")
        $("#btn2").text(current_turn)
        $("#btn2").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn3").click(function(){
        $("#btn3").css("background-color","chocolate")
        $("#btn3").text(current_turn)
        $("#btn3").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn4").click(function(){
        $("#btn4").css("background-color","chocolate")
        $("#btn4").text(current_turn)
        $("#btn4").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn5").click(function(){
        $("#btn5").css("background-color","chocolate")
        $("#btn5").text(current_turn)
        $("#btn5").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn6").click(function(){
        $("#btn6").css("background-color","chocolate")
        $("#btn6").text(current_turn)
        $("#btn6").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn7").click(function(){
        $("#btn7").css("background-color","chocolate")
        $("#btn7").text(current_turn)
        $("#btn7").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn8").click(function(){
        $("#btn8").css("background-color","chocolate")
        $("#btn8").text(current_turn)
        $("#btn8").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

$(document).ready(function(){
    $("#btn9").click(function(){
        $("#btn9").css("background-color","chocolate")
        $("#btn9").text(current_turn)
        $("#btn9").prop('disabled', true)
        $("#display_turn").text(next_turn + "'s turn")
    })
});

function restart(){
    $.jqueryFunc();
}