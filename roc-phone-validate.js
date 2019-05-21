export const phoneValidate = (number) => {
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
const data = [
  {
    name: '台北縣市', pattern: [/^02([2,3]|[5-8])\d{7}$/]
  },
  {
    name: '桃園縣', pattern: [/^03[2-4]\d{6}$/, /^033\d{7}$/]
  },
  {
    name: '新竹縣市', pattern: [/^03[5-6]\d{6}$/, /^033\d{7}$/]
  },
  {
    name: '宜蘭縣', pattern: [/^039\d{6}$/, /^039\d{7}$/]
  },
  {
    name: '苗栗縣', pattern: []
  },
]
export const whereCounty = (number) => {
  if (('' + number).length === 0 || phoneValidate(number)) return console.log('查無此為中華民國的電話');
  const num = number.split('').filter(_num => _num !== '-').join('');
  data.forEach(_data => {
    const isMatch = _data.pattern.filter(_pattern => _pattern.test(num) === true).length > 0;
    if (isMatch) {
      return console.log('此電話為: ' + _data.name);
    }
  })
}
