$(document).ready(function () {
    $(".frm-test2").submit(function (e) {
        e.preventDefault();;
        var num06 = $("#input06").val();  
            if (num06 <= 0) {
                return alert('Type a positive number')
            } else
                for (var n = num06 - 1; n > 1; n--) {
                    num06 *= n;
                  $(".test-content6").html(num06);  
                }

        
