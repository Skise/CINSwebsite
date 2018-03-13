$(document).ready(function() {
    var userList = $(".user_list"),
        username = $('#username');

    $('body').click(function() {
        var $node = $(event.target);
        if ($node[0] === username[0]) {
            if (userList.css('display') === 'none') {
                userList.css('display', 'block');
            } else if (userList.css('display') === 'block') {
                userList.css('display', 'none');
            }
        }
        if ($node[0] !== userList[0] && $node[0] !== username[0]) {
            if (userList.css('display') === 'block') {
                userList.css('display', 'none');
            }
        }
    });
});

$(function() {
    var searchBox = $('#search_box'),
        input = $('#search_box>input'),
        faSearch = $('.fa-search');
    
    $('body').click(function () {
        var $node = $(event.target);
        if ($node[0] === faSearch[0]) {
            if (searchBox.css('display') === 'none') {
                searchBox.css('display', 'block');
            } else if (searchBox.css('display') === 'block') {
                searchBox.css('display', 'none');
            }
        }
        if ($node[0] !== searchBox[0] && $node[0] !== faSearch[0] && $node[0] !== input[0]) {
            if (searchBox.css('display') === 'block') {
                searchBox.css('display', 'none');
            }
        }
    });

})