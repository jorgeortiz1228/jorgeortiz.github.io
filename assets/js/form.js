console.log('form.js is connected');

$(document).ready(function () {
    $('#formSubmit').click(function (event) {
        // event.preventDefault();
        console.log('clicked formSubmit');

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var statusElm = $('#status');
        statusElm.empty();

        if (name.length > 2) {
            statusElm.append('<div>name is valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Name entered is not valid</div>');
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Email entered is not valid</div>');
        }

        if (message.length > 5) {
            statusElm.append('<div>message is valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Message entered is not valid</div>');
        }

    })
})