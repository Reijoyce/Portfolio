$(document).ready(function () {
    $(".frm-test4").submit(function (e) {
        e.preventDefault();
        var myArray = [$("#input10").val()];
        myArray.filter((word) => {
            var lowerWord = word.toLowerCase();
            var reverseWord = lowerWord.split('').reverse().join('');
            if (reverseWord.startsWith(lowerWord) === true) {
                $(".test-content10").html(myArray + " is Palindrome");
            } if (reverseWord.startsWith(lowerWord) === false) {
                $(".test-content10").html(myArray + " is not Palindrome");
            }
        });
    })
})


