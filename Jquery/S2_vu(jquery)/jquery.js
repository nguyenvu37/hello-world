let addTask = $('#addData');
let deleteData = $('#deleteData');
let editData = $('#editData');
let exitTask = $('#exit');
let dataUsers = $('#dataUsers tbody');

var selectedIndex = -1;

let arrayTask = JSON.parse(localStorage.getItem('tasks')) || [];

let editCommand = false; // khi choised và kích edit mới được phép sửa

Render(dataUsers, arrayTask);
checkInput();

function DataUsers(code, name, address, email, userName) {
    this.code = code;
    this.name = name;
    this.address = address;
    this.email = email;
    this.userName = userName;
}

function checkInput() {
    $('#name').focus(function() {
        $('#errorName').text('');
    })

    $('#code').focus(function() {
        $('#errorCode').text('');
    })

    $('#email').focus(function() {
        $('#errorEmail').text('');
    })

}

function Render(containers, items) {
    var htmlItems = arrayTask.map(function(item, index) {
        return '<tr>' +
            '<th><input type="radio" name="checkbox" class="del px-2" data-id="' + index + '" alt="check' + index + '"></th>' +
            '<th class="py-2">' + item.code + '</th>' +
            '<th>' + item.name + '</th>' +
            '<th>' + item.address + '</th>' +
            '<th>' + item.email + '</th>' +
            '<th>' + item.userName + '</th>' +
            '</tr>'
    }).join('');

    containers.html(htmlItems);


}

addTask.on('click', function(e) {
    e.preventDefault();

    let dataCode = $('#code').val();
    let dataName = $('#name').val();
    let dataAddress = $('#address').val();
    let dataEmail = $('#email').val();
    let dataUserName = $('#userName').val();
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    let newDataUser = new DataUsers(dataCode, dataName, dataAddress, dataEmail, dataUserName);

    //validate Form
    if (dataCode == '' && dataName == '' && dataEmail == '') {
        $('#errorCode').text('Code is not emty');
        $('#errorName').text('Name is not emty');
        $('#errorEmail').text('Email is not emty');
        return;
    }

    if (dataCode.length < 3) {
        $('#errorCode').text('Code greater than 3 characters');
        return;
    }

    if (dataName.length < 5) {
        $('#errorName').text('Name greater than 5 characters');
        return;
    }

    if (!pattern.test(dataEmail)) {
        $('#errorEmail').html('Email is not correct format. [abc@example.com]');
        return;
    }
    // End validate

    document.querySelectorAll('input[data-id]').forEach(function(element) {
        if (element.checked == true) {
            selectedIndex = parseInt(element.dataset.id);
        }

    })

    if (selectedIndex == -1) {
        arrayTask.push(newDataUser);

    } else if (selectedIndex !== -1) {
        if (editCommand == false) {
            arrayTask.push(newDataUser);
        } else if (editCommand == true) {
            arrayTask.splice(selectedIndex, 1, newDataUser);
        }
    }

    Render(dataUsers, arrayTask);
    localStorage.setItem('tasks', JSON.stringify(arrayTask));
    $("form").trigger('reset');
})

deleteData.on('click', function() {
    let updateArrayTask = [];
    var checked = $(':radio:checked');

    if (checked.length == 0) alert("Please choise");
    else {
        document.querySelectorAll('input[data-id]').forEach(function(element) {
            if (element.checked !== true) {
                updateArrayTask.push(arrayTask[element.dataset.id])
            }
        })
        arrayTask = updateArrayTask;
        localStorage.setItem("tasks", JSON.stringify(arrayTask));
        Render(dataUsers, arrayTask);
        console.log(arrayTask)
    }
})


editData.on('click', function() {
    let updateCode,
        updateName,
        updateAddress,
        updateEmail,
        updateUserName;

    var checked = $(':radio:checked');

    if (checked.length == 0) alert("Please choise");
    else {
        document.querySelectorAll('input[data-id]').forEach(function(element) {
            if (element.checked == true) {
                updateCode = arrayTask[element.dataset.id].code;
                updateName = arrayTask[element.dataset.id].name;
                updateAddress = arrayTask[element.dataset.id].address;
                updateEmail = arrayTask[element.dataset.id].email;
                updateUserName = arrayTask[element.dataset.id].userName;

            }

            $('#code').val(updateCode);
            $('#name').val(updateName);
            $('#address').val(updateAddress);
            $('#email').val(updateEmail);
            $('#userName').val(updateUserName);
            checked.parent().parent().hide()

        })

    }
    editCommand = true;
})

exitTask.on('click', function() {
    $('#tr:hidden').show();
    $('form').trigger('reset');
})