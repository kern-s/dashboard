// client side javascript
dashboard = {
    bindHandler : function () {
        $('#listbtn').on('click', function () {
            var value = $('#listinput').val();
            $('#list').append('<li class="list-group-item">' + value + '</li>');
        });
    }
};

$(dashboard.bindHandler);
