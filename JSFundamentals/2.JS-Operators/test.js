isMomHappy = true;

var willGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand : 'Samsung',
                color : 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }
        
    }
);

var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new' + phone.color +
            ' ' + phone.brand;

            resolve(message);
        }
    )
}

var askMom = function () {
    console.log('before asking mom');
    willGetNewPhone
    .then(showOff)
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (error) {
        console.log(error);
    });
    console.log('after asking mom');
};



askMom();