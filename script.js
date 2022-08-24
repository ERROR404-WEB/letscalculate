
var inpu = "";
var valid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '.', '/', '(', ')', 'b', '+', 'c', '*'];
$(document).keydown(function (event) {

    var pressed = event.key;

    if (valid.indexOf(pressed) !== -1) {


        if (pressed === '=') {

            var ans = eval(inpu);
            inpu = ans;
            $("input").val(inpu);

        }
        else inpu += pressed;
        $("input").val(inpu);

    }

    if (pressed === "Enter") {

        var ans=eval(inpu);
        $("input").val(eval(inpu));
        inpu=ans;

    }
     if (pressed === "Backspace") {
        var ss = "";
        for (var i = 0; i < inpu.length - 1; i++) {
            ss += inpu[i];
        }
        inpu = ss;

        $("input").val(inpu);

    }



});





$("button").on('click', function () {
    var idd = this.id;

    if (idd === "=") {
        var ans = eval(inpu);
        $("input").val(ans);
        inpu = ans;
    }
    else if(idd==='c')
    {
        inpu="";
    }
    else if(idd==='b')
    {
        var ss = "";
        for (var i = 0; i < inpu.length - 1; i++) {
            ss += inpu[i];
        }
        inpu = ss;

        $("input").val(inpu);
    }
    else {
        inpu += idd;
        $("input").val(inpu);
    }
    $("input").val(inpu);

});