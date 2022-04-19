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

function onlyNums(array) {
    let isOnlyNums = true;
    array.forEach((e, i) => {
        if (isNaN(e)) {
            isOnlyNums = false;
        }
    })
    return isOnlyNums;
}

let main_form = document.getElementsByClassName('main-form')[0];

main_form.addEventListener('submit', (e) => {
    e.preventDefault();
})

let tel_field = document.getElementsByClassName('main-form-tel-input')[0]; 
let tel_chars = new Array();

tel_field.addEventListener("keydown", (e) => {
    
    if (!isNaN(e.key) && tel_chars.length < 15) {
        tel_chars.push(e.key)
    }
    

    e.preventDefault();
    
    if (e.keyCode == 8) {
        tel_chars.pop()
    }

    let startOnlyNums = onlyNums(tel_chars);

    if (tel_chars.length == 2 && startOnlyNums) {

        tel_chars.splice(0, 0, '(')
        tel_chars.splice(3, 0, ')')
        tel_chars.splice(4, 0, ' ')

        if (e.keyCode == 8) {
            tel_chars.pop()
        }
    }
    
    // (82) 98211-7442

    if (tel_chars.length == 9) {
        tel_chars.push('-');

        if (e.keyCode == 8) {
            tel_chars.pop();
        }

    }
    
    if (tel_chars.length == 14) {
        let aux = tel_chars[9];
        tel_chars[9] = tel_chars[10];
        tel_chars[10] = aux;
    }

    e.target.value = tel_chars.join("");

})





