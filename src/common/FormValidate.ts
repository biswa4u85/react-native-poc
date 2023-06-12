const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
class FormValidate {
    public emailRegex: any
    public phoneRegex: any
    constructor() {
        this.emailRegex = emailRegex;
        this.phoneRegex = phoneRegex;
    }
    isEmpty(...data: any) {
        for (let i = 0; i < data.length; i++) {
            if (!data[i]) return true;
        }
        return false;
    }
    isEmail(email: any) {
        return this.emailRegex.test(email);
    }
    isPhone(phone: any) {
        return this.phoneRegex.test(phone);
    }
}
export default new FormValidate();