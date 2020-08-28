let newsletterForm = document.getElementById('newsletter-form');

let allAgreeCheck = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    // trim ucina białe znaki z lewej i prawej strony stringa
    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError)
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError)
    }
    // dla przeglądarki, która nie ma obsługi pól typu email 
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError)
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody 1!';
        errors.appendChild(liError)
    }

    // .length zwraca HTML collection (podobne do tablic)
    if (errors.children.length > 0) {
        event.preventDefault();
    }

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
