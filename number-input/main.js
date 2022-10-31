
const formEl = document.querySelector(".form-js");
const textEl = formEl.querySelector(".text-js");
const btnEl = formEl.querySelector(".btn-js");

btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    const value = +textEl.value.trim();
    formEl.querySelectorAll(".error-text").forEach(el => {
        el.remove();
    });

    try {
        if (value === "" || value === 0) {
            throw new InputError("Необходимо заполнить поле")
        }
        else if (Number.isNaN(value)) {
            throw new InputError("Введите только цифры")
        }
        else if (value < 5) {
            throw new InputError("Ошибка, значение меньше 5!")
        }
        else if (value > 10) {
            throw new InputError("Ошибка, значение больше 10!")
        }
        alert(value);
    } catch (err) {
        console.log(`Ошибка ${err.name} - ${err.message}`);
        const errEl = document.createElement("p");
        errEl.className = "error-text"
        errEl.textContent = err.message;
        textEl.insertAdjacentElement("afterend", errEl);
        textEl.focus();
    }
});

class InputError extends Error {
    constructor(massage) {
        super(massage);
        this.name = "Input Error"
    }
}


