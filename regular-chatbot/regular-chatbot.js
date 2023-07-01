// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  /**
   * Checks for the keyword/command "chatbot"
   * at the start of the command string
   * is not case-sensitive.
   * @type {RegExp}
   */
  const regex = /^chatbot/i
  return regex.test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  /**
   * pattern that matches the word emoji ('emoji')
   * with one or more ('+') of the preceding block's contents,
   * the digits between 0 and 9 ('[0-9]')
   * search globally ('g') and not case-sensitive ('i')
   * @type {RegExp}
   */
  const regex = new RegExp(/emoji[0-9]+/, 'gi')
  return message.replaceAll(regex, "")
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const negativeResponse = `Oops, it seems like I can't reach out to ${number}`
  const positiveResponse = "Thanks! You can now download me to your phone."
  /**
   * Matches a phone number in the format:
   * (+##) ###-###-###
   * @type {RegExp}
   */
  const pattern = /\(\+[0-9]{2}\)\s[0-9]{3}-[0-9]{3}-[0-9]{3}/
  return number.match(pattern) ? positiveResponse : negativeResponse
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  /**
   * matches letters and dots forming the address of a url,
   * followed by a dot, and two or more digit TLD.
   * not case-sensitive
   * @type {RegExp}
   */
  const pattern = /([\w.]+\.[\w.]{2,})/gi
  return userInput.match(pattern)
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  /**
   * Matches the first group (...) of letters before a comma whitespace ,\W ,
   * then matches the second group (...) after
   * @type {RegExp}
   */
  const pattern = /(\w+),\W(\w+)/gi

  // Destructuring to get named variables for the two matched groups
  const [, second, first] = pattern.exec(fullName)
  return `Nice to meet you, ${first} ${second}`
}
