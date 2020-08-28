let newsletterForm = document.getElementById('newsletter-form');

let allAgreeCheck = document.getElementById('all-agree');

const validate = (event) => {

    event.preventDefault();

    console.log('validate()');
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;
    // console.log(event.target.checked);
}


// nazwa funkcji, a nie wywołanie (nawiasy), żeby nie wywołała się podczas ładowania skryptu a kiedy naciśnie się na submit
newsletterForm.addEventListener('submit', validate);

allAgreeCheck.addEventListener('change', allAgree);
