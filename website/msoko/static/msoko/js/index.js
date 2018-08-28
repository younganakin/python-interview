$(document).ready(function () {
    $('#product_form').on('submit', function (event) {
        event.preventDefault();
        handleCreateProductForm();
        $('#product_form')[0].reset();
    });

    function handleCreateProductForm() {
        d3.json('http://127.0.0.1:8000/msoko/api/product-list/', {
            method: "POST",
            body: JSON.stringify({
                name: $('#product_name').val(),
                description: $('#product_description').val(),
                price: $('#product_price').val()
            }),
            headers: {
                "X-CSRFToken": getCSRFToken(),
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (data) {
            console.log(data);
        });
    }

    // Get CSRF token from cookie
    function getCSRFToken() {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, 10) == ('csrftoken' + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(10));
                    break;
                }
            }
        }
        return cookieValue;
    }
});