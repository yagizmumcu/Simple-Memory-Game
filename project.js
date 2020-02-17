var j = 0;
$(function() {
    $("#container").on("click", ".box", function() {
        if ($(this).attr("id") == j) {
            $(this).css("background-image", "url(images/true.png)");
            j++;
            if (j == numberOfBoxes) {
                $("#container").off("click");
                $("#res").html("Well done! The force is strong with you! You passed the level " +
                    numberOfBoxes + "! Press F5 to reset");
            }
        } else {
            $(this).css("background-image", "url(images/false.png)");
            $("#res").html("I find your lack of faith disturbing... You failed at level " + numberOfBoxes + "! Press F5 to reset");
            $("#container").off("click");
        }
    });
});
var id = 0;
var numberOfBoxes;
$(function() {
    var row = [100, 300, 500, 700, 900];
    var col = [100, 300, 500, 700, 900];
    var colTemp;
    var rowTemp;
    $("#container").hide();
    $("#menu").animate({
        top: 200,
        opacity: 1
    }, 1000);
    $(".play").click(function() {
        $("#container").empty();
        $("#menu").fadeOut();
        numberOfBoxes = $("select.difficulty").children("option:selected").val();
        $("#container").delay(400).fadeIn();
        var rowArr = [];
        var colArr = [];

        var n1 = Math.floor(Math.random() * 4);
        var n2 = Math.floor(Math.random() * 4);

        rowArr[0] = row[n1];
        colArr[0] = row[n2];
        var count = 1;

        var check = 0;
        for (var i = 1; i < numberOfBoxes; i++) {
            n1 = Math.floor(Math.random() * 4);
            n2 = Math.floor(Math.random() * 4);
            for (var j = 0; j < count; j++) {
                if (row[n1] == rowArr[j] && col[n2] == colArr[j]) {
                    check = -1;
                    i--;
                    break;
                } else {
                    check = 0;
                }
            }
            if (check == 0) {
                rowArr[i] = row[n1];
                colArr[i] = col[n2];
                count++;
            }
        }

        console.log(rowArr);
        console.log(colArr);
        for (var i = 0; i < numberOfBoxes; i++) {
            $(`<div class="box" id="${id}"><span>${id+1}</span></div>`).css({
                "left": rowArr[i] + "px",
                "top": colArr[i] + "px",
                "width": 150 + "px",
                "height": 130 + "px"
            }).appendTo("#container");
            id++;
        }
        $("span").hide();
        a = 0;
        var k = 0;
        do {
            $('#' + a).children("span").delay(500 + k).fadeIn().delay(500).fadeOut();
            a++;
            k = k + 1000;
        } while (a != numberOfBoxes);
    });

});