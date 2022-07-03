export function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

export function validateName(name) {
    return name.length > 3;
  }

export function validatePhone(phone) {
    return phone.length > 3 && /^[0-9]+$/.test(phone);
  }