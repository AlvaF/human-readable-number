module.exports = function toReadable(num) {
  const
    n = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    u = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    m = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    b = ['hundred'];
  let answer = '';
  let str = String(num);
  if (str.length == 1) {
    answer += n[num - 1]
  } else if (str.length == 2) {
    if (str[0] == 1) {
      answer = m[str[1] - 2]
    } else {
      answer = u[str[0] - 1] + ' ' + n[str[1] - 1]
    }
  } else if (str.length == 3) {
    if (str[1] != 0) {
      answer = n[str[0] - 1] + ' ' + b[0] + ' ' + u[str[1] - 1] + ' ' + n[str[2] - 1]
    } else {
      answer = n[str[0] - 1] + ' ' + b[0] + ' ' + n[str[2] - 1]
    }
    if (str[1] == 1) {
      answer = n[str[0] - 1] + ' ' + b[0] + ' ' + m[str[2]]
    }
    else if (str[2] == 0) {
      answer = n[str[0] - 1] + ' ' + b[0] + ' ' + u[str[1] - 1]
    }

  }

  return answer;
}
