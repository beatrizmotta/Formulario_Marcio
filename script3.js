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
let tel_chars = new Array();

tel_field.addEventListener("keydown", (e) => {
    
    if (!isNaN(e.key)) {
        tel_chars.push(e.key)
    }

    if (e.keyCode == 8) {
        tel_chars.pop()
    }

    let onlyNums = true;
    tel_chars.forEach((e, i) => {
        if (isNaN(e)) {
            onlyNums = false;
        }
    })

    if (tel_chars.length == 2 && onlyNums) {

        tel_chars.splice(0, 0, '(')
        tel_chars.splice(3, 0, ')')
        tel_chars.splice(4, 0, ' ')

        if (e.keyCode == 8) {
            tel_chars.pop()
        }
    }
    
    
    console.log(tel_chars)

    e.target.value = tel_chars.join("");

})





