let userRegister = $('#userRegister'),
    passRegister = $('#passRegister'),
    emailRegister = $('#emailRegister');

let loginForm = $('#loginForm'),
    registerForm = $('#registerForm');
let validations = false;

Focus()

function DataUsers(dataUser, dataPass, dataEmail) {

    this.dataUser = dataUser;
    this.dataPass = dataPass;
    this.dataEmail = dataEmail;
}

registerForm.on('click', function() {
    validate();
    let arrayUser = JSON.parse(localStorage.getItem(userRegister.val())) || [];
    if (!localStorage.getItem(userRegister.val())) {
        if (validations == true) {
            var newArrayUser = new DataUsers(userRegister.val(), passRegister.val(), emailRegister.val());
            localStorage.setItem(newArrayUser.dataUser, JSON.stringify(newArrayUser));
            alert('Đăng ký thành công');
            location.reload()

        } else if (validations == false) {
            alert('Bạn chưa nhập đủ thông tin hoặc sai cú pháp');
            return
        }

    } else {
        alert('User đã tồn tại');
        return
    }

})


loginForm.on('click', function() {
    if ($('#userLogin').val() == '' && $('#passLogin').val() == '') {
        $('#errUserLogin').text('Chưa nhập user');
        $('#errPassLogin').text('Chưa nhập Password');
        return
    }

    if (signIn($('#userLogin').val(), $('#passLogin').val())) {
        alert('Bạn đăng nhập thành công');
        location.reload();
    } else {
        alert('User hoặc Password bị sai');

    }

})

function validate() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //Validate
    if (userRegister.val() == '' &&
        passRegister.val() == '' &&
        emailRegister.val() == '') {

        $('#errUserRegister').text('Chưa nhập tên User');
        $('#errPassRegister').text('Chưa nhập Password');
        $('#errEmailRegister').text('Chưa nhập Email');

        return
    }

    if (userRegister.val() != '' && passRegister.val() != '' && pattern.test(emailRegister.val())) {
        return validations = true;
    }


    if (!pattern.test(emailRegister.val())) {
        $('#errEmailRegister').text('Email không đúng Format. [abc@example.com]');

        return
    }

    //end validate
}

function signIn(userName, password) {
    if (localStorage.getItem(userName)) {
        return JSON.parse(localStorage.getItem(userName.trim())).dataPass == $("#passLogin").val() ? true : false;
    }
    return false;
}

function Focus() {
    $('#userRegister').focus(function() {
        $('#errUserRegister').text('');
    })

    $('#passRegister').focus(function() {
        $('#errPassRegister').text('');
    })

    $('#emailRegister').focus(function() {
        $('#errEmailRegister').text('');
    })

    $('#userLogin').focus(function() {
        $('#errUserLogin').text('');
    })

    $('#passLogin').focus(function() {
        $('#errPassLogin').text('');
    })


}