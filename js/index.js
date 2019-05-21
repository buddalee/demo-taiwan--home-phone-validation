function convert() {
	console.log('!!!', document.getElementById('phoneNumber').value);
	const phoneNumber = document.getElementById('phoneNumber').value;
	console.log('!!!',phoneValidate(phoneNumber));
	var node = document.createElement("div");                 // Create a <li> node
var textnode = document.createTextNode( phoneNumber + (phoneValidate(phoneNumber) ? '  格式正確' : '  不符格式'));         // Create a text node
node.appendChild(textnode);            
	document.getElementById("answer").appendChild(node);
}

const phoneValidate = (number) => {
  if (('' + number).length === 0) return false;
  const num = number.split('').filter(_num => (_num !== '-') && (_num !== ')') && (_num !== '(')).join('');
  switch(num.slice(0, 2)) {
    case '02':
      return /^02([2,3]|[5-8])\d{7}$/.test(num)
    case '03':
      return (/^03[2-4]\d{6}$/.test(num) || /^033\d{7}$/.test(num) ||
      /^03[5-6]\d{6}$/.test(num) || /^035\d{7}$/.test(num) ||
      /^039\d{6}$/.test(num) || /^039\d{7}$/.test(num) ||
      /^037\d{6}$/.test(num) || /^037\d{7}$/.test(num) ||
      /^038\d{6}$/.test(num) || /^038\d{7}$/.test(num));
    case '04':
      return /^04[2-3]\d{7}$/.test(num) || /^04[7-8]\d{6}$/.test(num) ||
      /^047\d{7}$/.test(num) || /^049\d{7}$/.test(num) || /^045\d{7}$/.test(num)
    case '05':
      return /^05[5-8]\d{6}$/.test(num) || /^05[2-4]\d{6}$/.test(num)
    case '06':
      return /^065\d{7}$/.test(num) || /^06[2-7]\d{6}$/.test(num) ||
      /^066\d{7}$/.test(num) || /^0689\d{6}$/.test(num) || /^068[7,8]\d{6}$/.test(num) ||
      /^069\d{6}$/.test(num) || /^0699\d{6}$/.test(num) || /^0693\d{6}$/.test(num) ||
      /^0692([2-5]|[7-9])\d{5}$/.test(num) || /^06926\d{5}$/.test(num)
    case '07':
      return /^07\d{7}$/.test(num) || /^07[2,3]\d{7}$/.test(num);
    case '08':
      return /^089\d{6}$/.test(num) || /^08[7,8]\d{6}$/.test(num) ||
      /^0836\d{5}$/.test(num) || /^0823\d{5}$/.test(num) || /^08266\d{4}$/.test(num)
    default:
      return false;
  }
}