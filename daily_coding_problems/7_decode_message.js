/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

function resolve(message) {
  if (message.length <= 1) {
    return 1;
  }
  let res = resolve(message.slice(1));
  if (parseInt(message.slice(0, 2)) <= 26) {
    res += resolve(message.slice(2));
  }
  return res;
}

module.exports = resolve;
