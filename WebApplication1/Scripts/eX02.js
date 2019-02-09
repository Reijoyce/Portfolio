$(document).ready(function () {
    $(".frm-test2").submit(function (e) {
        e.preventDefault();;
        var num06 = $("#input06").val();
        var factorial = function fac(n) {
            if (num06 <= 0) {
                return alert('Type a positive number')
            } else
                return n < 2 ? 1 : n * fac(n - 1);
        };

        $(".test-content6").html(factorial(num06));
    })
})
