let newsletterForm = document.getElementById('newsletter-form');

let allAgreeCheck = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    // trim ucina białe znaki z lewej i prawej strony stringa
    if (txtName.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';

        errors.appendChild(liError)
        console.log(liError);
    }


    event.preventDefault();

    console.log('validate()');
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked);
}

// nazwa funkcji, a nie wywołanie (nawiasy), żeby nie wywołała się podczas ładowania skryptu a kiedy naciśnie się na submit
newsletterForm.addEventListener('submit', validate);
allAgreeCheck.addEventListener('change', allAgree);
