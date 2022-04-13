const form_status = {
    valid: false
}

function show_field(e) {
    e.classList.remove("hidden");
}

function hide_field(e) {
    e.classList.add("hidden");
}

function get_len(e) {
    return e.length;
}

function number_validation(e) {
    const disallowed_chars = ['-', '/', '.', '_', '@'];
    let num = e.value; 
    Array.from(num).forEach((num_char) => {
        disallowed_chars.forEach((char) => {
            if (num_char === char) {
                form_status.valid = false;
            }
        })
    })
    
    if (/[a-zA-Z]/.test('')) {
        form_status.valid = false;
    }
}

let main_form = document.getElementsByClassName('main-form')[0];

main_form.addEventListener('submit', (e) => {
    e.preventDefault();
})

let tel_field = document.getElementsByClassName('main-form-tel-input')[0]; 


tel_field.addEventListener("input", (e) => {
    let field = e.target.value;
    let field_target = e.target;
    console.log(get_len(field))
    if (get_len(field) == 2) {
        field_target.value = `(${field_target.value}) `
    }

    if (get_len(field) == 10) {
        field_target.value = `${field_target.value}-`
    }
})

tel_field.addEventListener('blur', (e) => {
    number_validation(e.target);
})





