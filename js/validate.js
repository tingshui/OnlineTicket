function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(document).ready(function() {
    var span1 = '<span class = "infoMessage"> Username should contain only numbers and letters </span>'+
                '<span class = "ok"> &#10003 </span>'+
                '<span class = "error" id = "invalid_username"> &#x2717 Invalid username </span>'+
                '<span class = "error" id="username_exist"> Username already exists </span>'+
                '<span class = "error" id="server_error"> Cannot connect to server </span>';
    var span2 = '<span class = "infoMessage"> Password should be at least 8 characters long and include at least one lowercase and uppercase letter </span>'+
                '<span class = "ok"> &#10003 </span>'+
                '<span class = "error" id = "length"> &#x2717 Invalid password: 8 or more characters </span>'+
                '<span class = "error" id = "lettercase"> &#x2717 Invalid password: both uppercase and lowercase letters </span>';
    var span3 = '<span class = "infoMessage"> Please enter your email address </span>'+
                '<span class = "ok"> &#10003 </span>'+
                '<span class = "error"> &#x2717 Invalid email address </span>';
    var span4 = '<span class = "infoMessage"> Please repeat your password </span>'+
                '<span class = "ok"> &#10003 </span>'+
                '<span class = "error"> &#x2717 Passwords do not match </span>';
    var span5 = '<span class = "error"> You have to agree to our terms and privacy </span>';
    var span6 = '<span class = "error"> Username is empty </span>';
    var span7 = '<span class = "error"> Password is empty </span>';
    var firstname = false;
    var lastname = false;
    var username = false;
    var email = false;
    var password = false;
    var password2 = false;
    
    $("#username").after(span1);
    $("#password").after(span2);
    $("#email").after(span3);
    $("#password2").after(span4);
    $("#checkbox2_label").after(span5);
    $("#username2").after(span6);
    $("#password3").after(span7);
    $(".infoMessage").addClass("info");
    $(".ok").addClass("ok");
    $(".error").addClass("error");
    $("span").hide();
    $("#error_mesg").hide();
    $("#login_fail").hide();
    $("#connection_error").hide();
    
    $("input").focus(function(){
        $("#error_mesg").hide();
        $("#login_fail").hide();
        $("#connection_error").hide();
        $(this).nextAll("span").hide();
        $(this).nextAll(".infoMessage").show();
    });
    
    $("#firstname").blur(function(){
        $(this).nextAll("span").hide();
        if($(this).val().trim().length !== 0){
            $(this).nextAll(".ok").show();
            firstname = true;
        }
        else
            firstname = false;
    });
    
    $("#lastname").blur(function(){
        $(this).nextAll("span").hide();
        if($(this).val().trim().length !== 0){
            $(this).nextAll(".ok").show();
            lastname = true;
        }
        else
            lastname = false;
    });
    
    $("#username").blur(function(){
        $(this).nextAll("span").hide();
        var flag = true;
        if($(this).val().trim().length !== 0){
            for(var i = 0; i < $(this).val().length; ++i){
                if(($(this).val().charAt(i) >= '0' && $(this).val().charAt(i) <= '9') ||
                   ($(this).val().charAt(i) >= 'a' && $(this).val().charAt(i) <= 'z') ||
                   ($(this).val().charAt(i) >= 'A' && $(this).val().charAt(i) <= 'Z') )
                   continue;
                else{
                    flag = false;
                    break;
                }
            }
            if(flag === true){
                $.ajax({
                    type: "POST",
                    url: 'php/check_username.php',
                    data: {username: $(this).val().trim()},
                    success: function(data){
                        if(data === 'true'){
                          $("#username").nextAll(".ok").show();
                          username = true;
                        }
                        else if(data === 'false'){
                          $("#username").nextAll("#username_exist").show();
                          username = false;
                        }
                        else{
                          $("#username").nextAll("#server_error").show();
                          username = false;
                        }
                    },
                    error: function () {
                        alert("cannot open php file");
                        $("#username").nextAll("#server_error").show();
                    }
                });
            }
            else{
                $(this).nextAll("#invalid_username").show();
                username = false;
            }
        }
    });
    
    $("#password").blur(function(){
        $(this).nextAll("span").hide();
        var upper = false;
        var lower = false;
        if($(this).val().length !== 0){
            if($(this).val().length >= 8){
                for(var i = 0; i < $(this).val().length; ++i){
                    if($(this).val().charAt(i) >= 'a' && $(this).val().charAt(i) <= 'z')
                        lower = true;
                    if($(this).val().charAt(i) >= 'A' && $(this).val().charAt(i) <= 'Z')
                        upper = true;
                }
                if(lower === true && upper === true){
                    $(this).nextAll(".ok").show();
                    password = true;
                }
                else{
                    $(this).nextAll("#lettercase").show();
                    password = false;
                }
            }
            else{
                $(this).nextAll("#length").show();
                password = false;
            }
        }
    });
    
    $("#password2").blur(function(){
        $(this).nextAll("span").hide();
        if($(this).val().length !== 0){
            if($(this).val() === $("#password").val()){
                $(this).nextAll(".ok").show();
                password2 = true;
            }
            else{
                $(this).nextAll(".error").show();
                password2 = false;
            }
        }
    });
    
    $("#email").blur(function(){
        $(this).nextAll("span").hide();
        if($(this).val().length !== 0){
            if(isEmail($(this).val())){
               $(this).nextAll(".ok").show();
               email = true;
            }
            else{
               $(this).nextAll(".error").show();
               email = false;
           }
        }
    }); 
    
    $("#checkbox2").change(function() {
        if(this.checked) {
            $(this).nextAll(".error").hide();
        }
    });
    
    $("#reset").click(function(){
        $("input").nextAll("span").hide();
        $("#error_mesg").hide();
        firstname = false;
        lastname = false;
        username = false;
        email = false;
        password = false;
        password2 = false;
    });
    
    $("#signup_form").submit(function(event){
        if(!(firstname === true && lastname === true && username === true && password === true && password2 === true && email === true )){
            event.preventDefault();
            $("#error_mesg").show();
        }
        
        else{
            if(!$("#checkbox2").is(':checked')){
                event.preventDefault();
                $("#checkbox2").nextAll(".error").show();
            }
        }
    });
    
    $("#login_form").submit(function(event){
        event.preventDefault(); 
        if($("#username2").val().trim().length !== 0 && $("#password3").val().length !== 0){
            $.ajax({
                    type: "POST",
                    url: 'php/check_password.php',
                    data: {password: $("#password3").val(),
                           username: $("#username2").val().trim()},
                    success: function(data){
                        if(data === 'true'){
                            window.location.href = "index.html";
                        }
                        else if(data === 'false'){               
                            $("#login_fail").show();
                        }
                        else{             
                            $("#connection_error").show();
							alert(data);
                        }
                    },
                    error: function () {
                        $("#connection_error").show();
                    }
            });
        }
        else{
            if($("#username2").val().trim().length === 0){
                $("#username2").nextAll(".error").show();
            }
            if($("#password3").val().trim().length === 0){
                $("#password3").nextAll(".error").show();
            }
        }
    });  
    
});
