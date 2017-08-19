
$(document).ready(function(){
    $("#loginButton").click( function() {

        alert("用户名或密码不正确！");
        
        $.post("/login/login_verify",
            {
                username: $("#username").val(),
                password: $("#password").val()
            },
            function (data) {
                if(data.verify === true){
                    location.href = '/adminHome';//跳转到管理员首页
                 }
                else {
                    alert("用户名或者密码不正确!");
                }
            });
    });
});
    