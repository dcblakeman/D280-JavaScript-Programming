const regex = new RegExp(/[A-Z]/g)

function isStrongPassword(password) {
    if(password.length >= 8) {
        if (!password.includes("password")) {
            if(regex.test(password)) {
                return true;
            }
        }
    }

    return false;
}

console.log(isStrongPassword("abc12u35"));