/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

const Pristine = require('pristinejs');

Pristine.addValidator(
    'valphone',
    function (value) {
        var phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
        return phoneRegex.test(value);
    },
    '*wprowadź poprawny numer telefonu',
    5,
    false
);

export function initializeFormSubmit() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const defaultConfig = {
        classTo: 'form-group',
        errorTextParent: 'form-group',
        errorTextTag: 'div',
        errorTextClass: 'text-red mt-[0.44rem] text-[0.8125rem] leading-[1]',
    };

    const validation = new Pristine(form, defaultConfig);

    const serialize = function (form) {
        var serialized = [];
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
            }
        }
        return serialized.join('&');
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const valid = validation.validate();
        const errorDiv = document.querySelector('.formMessage');

        if (valid) {
            // grecaptcha.ready(() => {
            //     grecaptcha
            //         .execute('6LfVTgwoAAAAAK07jU7EPQrjLgdl6JLem__-3pPs', {
            //             action: 'formsubmit',
            //         })
            //         .then((token) => {
            //             const grecaptchaScore = document.getElementById('grecaptcha-response');
            //             grecaptchaScore.value = token;

            const data = serialize(form);

            var request = new XMLHttpRequest();
            request.open('POST', './formsubmit.php', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);

            // request.onload = () => {
            //     console.log(request);
            //     console.log(JSON.parse(request.response));
            //     const response = JSON.parse(request.response);

            //     if (response.success) {
            //         errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
            //         setTimeout(function () {
            //             form.reset();
            //         }, 800);
            //     } else {
            //          errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
            //          console.error('Error: ' + request.status);
            //     }
            // };

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        dataLayer.push({'event': 'formularz'});
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
                        setTimeout(function () {
                            form.reset();
                        }, 800);
                    } else {
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
                        console.error('Error: ' + request.status);
                    }
                }
            };
            //             });
            //     });
            // } else {
            //     errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Uzupełnij wymagane pola.</p>';
        }
    });
}

export function initializeFixedFormSubmit() {
    const form = document.getElementById('fixedForm');
    if (!form) return;

    const defaultConfig = {
        classTo: 'form-group',
        errorTextParent: 'form-group',
        errorTextTag: 'div',
        errorTextClass: 'text-red mt-[0.44rem] text-[0.8125rem] leading-[1]',
    };

    const validation = new Pristine(form, defaultConfig);

    const serialize = function (form) {
        var serialized = [];
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
            }
        }
        return serialized.join('&');
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const valid = validation.validate();
        const errorDiv = document.querySelector('.formMessage2');

        if (valid) {
            // grecaptcha.ready(() => {
            //     grecaptcha
            //         .execute('6LfVTgwoAAAAAK07jU7EPQrjLgdl6JLem__-3pPs', {
            //             action: 'formsubmit',
            //         })
            //         .then((token) => {
            //             const grecaptchaScore = document.getElementById('grecaptcha-response');
            //             grecaptchaScore.value = token;

            const data = serialize(form);

            var request = new XMLHttpRequest();
            request.open('POST', './formsubmit2.php', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);

            // request.onload = () => {1
            //     console.log(request);
            //     console.log(JSON.parse(request.response));
            //     const response = JSON.parse(request.response);

            //     if (response.success) {
            //         errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
            //         setTimeout(function () {
            //             form.reset();
            //         }, 800);
            //     } else {
            //          errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
            //          console.error('Error: ' + request.status);
            //     }
            // };

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        dataLayer.push({'event': 'formularz'});
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
                        setTimeout(function () {
                            form.reset();
                        }, 800);
                    } else {
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
                        console.error('Error: ' + request.status);
                    }
                }
            };
            //             });
            //     });
            // } else {
            //     errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Uzupełnij wymagane pola.</p>';
        }
    });
}

export function initializeResignFormSubmit() {
    const form = document.getElementById('resignForm');
    if (!form) return;

    const defaultConfig = {
        classTo: 'form-group',
        errorTextParent: 'form-group',
        errorTextTag: 'div',
        errorTextClass: 'text-red mt-[0.44rem] text-[0.8125rem] leading-[1]',
    };

    const validation = new Pristine(form, defaultConfig);

    const serialize = function (form) {
        var serialized = [];
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
            }
        }
        return serialized.join('&');
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const valid = validation.validate();
        const errorDiv = document.querySelector('.formMessage3');

        if (valid) {
            // grecaptcha.ready(() => {
            //     grecaptcha
            //         .execute('6LfVTgwoAAAAAK07jU7EPQrjLgdl6JLem__-3pPs', {
            //             action: 'formsubmit',
            //         })
            //         .then((token) => {
            //             const grecaptchaScore = document.getElementById('grecaptcha-response');
            //             grecaptchaScore.value = token;

            const data = serialize(form);

            var request = new XMLHttpRequest();
            request.open('POST', './resignsubmit.php', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);

            // request.onload = () => {1
            //     console.log(request);
            //     console.log(JSON.parse(request.response));
            //     const response = JSON.parse(request.response);

            //     if (response.success) {
            //         errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
            //         setTimeout(function () {
            //             form.reset();
            //         }, 800);
            //     } else {
            //          errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
            //          console.error('Error: ' + request.status);
            //     }
            // };

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        dataLayer.push({'event': 'formularz'});
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-green-700">Wiadomość została wysłana.</p>';
                        setTimeout(function () {
                            form.reset();
                        }, 800);
                    } else {
                        errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Wystąpił błąd. Wiadomość nie została wysłana.</p>';
                        console.error('Error: ' + request.status);
                    }
                }
            };
            //             });
            //     });
            // } else {
            //     errorDiv.innerHTML = '<p class="mt-[1rem] text-red">Uzupełnij wymagane pola.</p>';
        }
    });
}
