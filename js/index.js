$(document).ready(function() {
    //game freezing at last line, draw method + window
    var player, ai;
    var board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
    var round = 0;
    var computersTurn = false;

    $(".btn-x").on("click", function() {

        $(".window").hide();
        $(".window").empty();
        player = "X";
        ai = "O";
    });

    $(".btn-o").on("click", function() {

        $(".window").hide();
        $(".window").empty();
        player = "O";
        ai = "X";
    });

    $(".b").on("click", function() {

        var id = $(this).attr("id");
        if (boardEmpty(board, id)) {
            playersTurn(board, id);

        }
    });



    function boardEmpty(array, id) {


        var number = parseInt(id);
        number--;


        if (array[number] == player || array[number] == ai) {
            return false;
        }
        return true;
    }

    function creatingWindow(target) {


        $(".window").html("<p>" + target + " won </p>");
        var asw = $("<button class='btn btn-primary closer'>Play again!</button>");
        $(".window").append(asw);
        $(".window").show();

        $(".closer").click(function() {
            $(".window").hide();
            $(".window").empty();
        });

    }

    function creatingDice() {

        $(".window").text("Good Draw !");
        var asw = $("<button class='btn btn-primary closer'>Play again!</button>");
        $(".window").append(asw);
        $(".window").show();

        $(".closer").click(function() {
            $(".window").hide();
            $(".window").empty();
        });

    }

    function reset() {



        board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
        round = 0;

        for (var p = 0; p <= board.length; p++) {
            $(".b" + p).empty();
        }


    }

    function playersTurn(board, id) {


        var number = parseInt(id);
        $(".b" + number).text(player);
        number--;
        board[number] = player;
        round++;
        checkWin(board, player);
        aiTurn(board, ai);
        checkWin(board, ai);
        console.log(board);
        console.log(round);
    }




    function checkWin(array, target) {

        if (round > 8) {
            creatingDice();
            setTimeout(reset, 2000);
            return true;
        }
        if ((board[0] == target && board[1] == target && board[2] == target) || (board[3] == target && board[4] == target && board[5] == target) || (board[6] == target && board[7] == target && board[8] == target) || (board[0] == target && board[3] == target && board[6] == target) || (board[1] == target && board[4] == target && board[7] == target) || (board[2] == target && board[5] == target && board[8] == target) || (board[0] == target && board[4] == target && board[8] == target) || (board[2] == target && board[4] == target && board[6] == target)) {
            setTimeout(creatingWindow(target), 1000);
            setTimeout(reset, 1000);
            return true;

        }

        return false;


    }

    function aiTurn(board, ai) {

        if (round > 8) {
            return false;
        }
        var randomi = Math.floor((Math.random() * 9) + 1);
        var id = randomi + "";

        while (!boardEmpty(board, id)) {

            randomi = Math.floor((Math.random() * 9) + 1);
            id = randomi + "";
        }

        if (boardEmpty(board, id)) {
            $(".b" + randomi).text(ai);
            randomi--;
            board[randomi] = ai;
            round++;


        }
    }
});