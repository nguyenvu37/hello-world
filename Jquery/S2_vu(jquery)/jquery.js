let addTask = $('#addData');
let deleteData = $('#deleteData');
let editData = $('#editData');
let exitTask = $('#exit');
let dataUsers = $('#dataUsers tbody');

var selectedIndex = -1;

let arrayTask = JSON.parse(localStorage.getItem('tasks')) || [];

Render(dataUsers, arrayTask);

function DataUsers(code, name, address, email, userName) {
    this.code = code;
    this.name = name;
    this.address = address;
    this.email = email;
    this.userName = userName;
}

function Render(containers, items) {
    var htmlItems = arrayTask.map(function(item, index) {
        return '<tr>' +
            '<th><input type="radio" class="del px-2" data-id="' + index + '" alt="check' + index + '"></th>' +
            '<th class="py-2">' + item.code + '</th>' +
            '<th>' + item.name + '</th>' +
            '<th>' + item.address + '</th>' +
            '<th>' + item.email + '</th>' +
            '<th>' + item.userName + '</th>' +
            '</tr>'
    }).join('');

    containers.html(htmlItems);


}

function reloadValue() {
    $('#code').val('');
    $('#name').val('');
    $('#address').val('');
    $('#email').val('');
    $('#userName').val('');
    $('#password').val('');
}

function edit() {
    let updateCode,
        updateName,
        updateAddress,
        updateEmail,
        updateUserName;

    let arrayError = [];

    document.querySelectorAll('input[data-id]').forEach(function(element) {
        if (element.checked == true) {
            updateCode = arrayTask[element.dataset.id].code;
            updateName = arrayTask[element.dataset.id].name;
            updateAddress = arrayTask[element.dataset.id].address;
            updateEmail = arrayTask[element.dataset.id].email;
            updateUserName = arrayTask[element.dataset.id].userName;
            arrayError.push(arrayTask[element.dataset.id]);
        }

        if (arrayError.length > 1) {
            alert('Only receive the value of the radio in the top position');
            return;
        }

        $('#code').val(updateCode);
        $('#name').val(updateName);
        $('#address').val(updateAddress);
        $('#email').val(updateEmail);
        $('#userName').val(updateUserName);

    })

    $('#saveData').on('click', updateData)

}

function updateData(e) {
    e.preventDefault();

    let newCode = $('#code').val();
    let newName = $('#name').val();
    let newAddress = $('#address').val();
    let newEmail = $('#email').val();
    let newUserName = $('#userName').val();

    let arrayEdited = new DataUsers(newCode, newName, newAddress, newEmail, newUserName);


    document.querySelectorAll('input[data-id]').forEach(function(element) {
        if (element.checked == true) {
            selectedIndex = parseInt(element.dataset.id);
        }

    })

    arrayTask.splice(selectedIndex, 1, arrayEdited);

    Render(dataUsers, arrayTask);
    localStorage.setItem('tasks', JSON.stringify(arrayTask));
    reloadValue()
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

    arrayTask.push(newDataUser);
    Render(dataUsers, arrayTask);
    localStorage.setItem('tasks', JSON.stringify(arrayTask));

    location.reload();
})

deleteData.on('click', function() {
    let updateArrayTask = [];
    document.querySelectorAll('input[data-id]').forEach(function(element) {
        if (element.checked !== true) {
            updateArrayTask.push(arrayTask[element.dataset.id])
        }
    })
    arrayTask = updateArrayTask;
    localStorage.setItem("tasks", JSON.stringify(arrayTask));
    Render(dataUsers, arrayTask);
    console.log(arrayTask)

})


editData.on('click', edit)

exitTask.on('click', function() {
    reloadValue()
})