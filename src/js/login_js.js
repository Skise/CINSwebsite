$(function() {
    var $username = $('#username'),
        $password = $('#password');
    
    $username.on('click', function() {
        $username.prev().addClass('focus_label');
    });
    $username.on('blur', function () {
        if ($username.val() === '') {
            $username.prev().removeClass('focus_label');
        }
    });

    $password.on('click', function () {
        $password.prev().addClass('focus_label');
    });
    $password.on('blur', function () {
        if ($password.val() === '') {
            $password.prev().removeClass('focus_label');
        }
    });
});

$(function() {
    var btn = $('.btn');
    btn.click(function() {
        var username = $('#username'),
            password = $('#password'),
            prompt = $('#prompt');
        
        if (username.val() === '' && password.val() === '') {
            prompt.html('请输入用户名及密码');
        } else if (username.val() === '' && password.val() !== '') {
            prompt.html('请输入用户名');
        } else if (username.val() !== '' && password.val() === ''){
            prompt.html('请输入密码');
        } else {
            prompt.html('');
        }
    });
});