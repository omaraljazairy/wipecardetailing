/**
 * validators module used by all the form elements.
 * @author Omar Aljazairy
 * @version 1.0
 */

/**
 * valid email address
 * @param {string} val - input
 * @returns {bool} - true if regex matched, else false.
 */
export function validateEmail (val) {
  console.log('emailInputChange val: ', val)
  var format = /\S+@\S+\.\S+/
  if (format.test(val)) {
    return true
  } else {
    return false
  }
}

/**
   * validate the mobile number.
   * @param {string} val
   * @returns {bool} -  - true if length > 0 else false.
   */
export function validateMobileno (val) {
  console.log('mobileno val: ', val.length)
  var format = /^[0]\d{8,9}$/
  if (format.test(val)) {
    console.log('mobileNo is valid')
    return true
  } else {
    console.log('mobileNo is not valid')
    return false
  }
}

/**
 * takes a string and checks it's lenght that should be
 * > 0.
 * @param {sring} val - company name
 * @returns {bool} - true if length > 0 else false
 */
export function validateCompanyname (val) {
  if (val.lenght !== 0) {
    return true
  } else {
    return false
  }
}
