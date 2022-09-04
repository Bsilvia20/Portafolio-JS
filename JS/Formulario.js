class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.form-group');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.testeSubmit(e);
        });
    }

    testeSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const emailValidos = this.emailValido();

        if(camposValidos && emailValidos) {
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    emailValido() {
        let valid = true;

        const email = this.formulario.querySelector('.email');

        if(email.value.length < 6) {
            valid = false;
            this.erro(email, 'Email curto.');
        }

        return valid;
    }

    camposValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.erro(campo, `O campo "${label}" não pode ficar vazio.`)
                valid = false;
            }
        }
        return valid;
    }

    erro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidarFormulario();