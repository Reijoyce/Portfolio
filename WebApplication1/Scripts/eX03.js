$(document).ready(function () {
    $(".frm-test3").submit(function (e) {
        e.preventDefault();
        var num07 = $("#input07").val();
        var num08 = $("#input08").val();

        var i;
        for (i = 0; i <= 100; i++) {

            if (i % num07 === 0 && i % num08 === 0) {
                $(".test-content7").append("<b>FizzBuzz-</b>");
                console.log("FizzBuzz");
            } else if (i % num07 === 0) {
                $(".test-content7").append("<b>Fizz-</b>");
                console.log("Fizz")
            } else if (i % num08 === 0) {
                $(".test-content7").append("<b>Buzz-</b>");
                console.log("Buzz")
            } else {
                $(".test-content7").append(`${i}-`);
                console.log([i])
            }

        }

    })
})
