$(document).ready(function () {
    $(".frm-test").submit(function (e) {
        e.preventDefault();
        var num1 = $("#input01").val();
        var num2 = $("#input02").val();
        var num3 = $("#input03").val();
        var num4 = $("#input04").val();
        var num5 = $("#input05").val();

        var resultMin = [num1, num2, num3, num4, num5];
        $(".test-content").html(Math.min(...resultMin));

        var resultMax = [num1, num2, num3, num4, num5];
        $(".test-content2").html(Math.max(...resultMax));

        var result = arr => arr.reduce((a, b) => a + b, 0) / arr.length
        var resultMean = (result([num1, num2, num3, num4, num5]));
        $(".test-content3").html(resultMean);

        var numbers = [num1, num2, num3, num4, num5];
        function getSum(total, num) {
            return total + Math.round(num);
        }
        var resultSum = numbers.reduce(getSum, 0);

        $(".test-content4").html(resultSum);

        var numbers2 = [num1, num2, num3, num4, num5]
        var product = numbers2.reduce((prev, curr) => prev * curr);
        $(".test-content5").html(product);

    });
});





