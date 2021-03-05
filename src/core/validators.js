export class Validators {
  static required(value = '') {
    return value.trim() 
  }

  static minLength(length) {
    return value => {
      return value.length >= length
    }
  }
}