var firstname = "Victor";
var surname = "Franklin"
var email = "victorFranklin@gmail.com"
var age = 19;
var password = "victorfrankiln19"

class PasswordChecker {
    constructor() {}
        // Password greather than l
    passwordGreater(password, length) {
            if (password.length < length) { return false; }
            if (password.length > length) { return true; }
        }
        // Password inbetween low and high number
    passwordInbetween(password, low, high) {
        if (password.length < low || password.length > high) { return false; }
        if (password.length > low && password.length < high) { return true; }
    }


    // Password contain capital 
    containUpperCase(password) {
            for (let letter of password) {
                if (letter.toUpperCase() == letter) {
                    return true;
                }
            }
            return false
        }
        // Alternative 
    containUpperCase(password) {
            return password.containUpperCase();
        }
        // Password contain number 
    containNumbers(password) {
        for (let letter of password) {
            if (parseInt(letter) == letter) {
                return true;
            }
        }
        return false;
        // parseInt(letter) == NaN mean its a string not a number. 
    }


    // Password contain special symbol !^&?<> 
    containNumber(password) {
            const re = /[0-9]/g
            return password.match(re) != null;
        }
        // password doesn't contain first name or surname 
    containsInfo(password, firstname, surname, email) {
        const fre = new RegExp(firstname.toLowerCase(), "g");
        const sre = new RegExp(surname.toLowerCase(), "g");
        const ere = new RegExp(email.split("@")[0].toLowerCase(), "g");
        const nPassword = password.toLowerCase();
        return nPassword.match(fre) != null || nPassword.match(sre) != null || nPassword.match(ere) != null;

    }
}

var checker = new PasswordChecker();
checker.containNumber(password)