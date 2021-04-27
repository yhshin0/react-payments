export const CARD_NUMBER_UNIT_LENGTH = 4;
export const CARD_NUMBER_IN_STRING_LENGTH = 19;

export const EXPIRATION_DATE_FORMAT_LENGTH = { month: 2, year: 2 };
export const EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH = 5;

export const MAX_OWNER_NAME_LENGTH = 30;

export const SECURITY_CODE_LENGTH = 3;

export const PASSWORD_UNIT_LENGTH = 1;
export const PASSWORD_IN_STRING_LENGTH = 2;

export const CARD_COMPANY_LIST = [
  {
    name: 'KB국민카드',
    color: 'rgb(84, 124, 228)',
    patterns: [
      '356415',
      '356912',
      '376364',
      '376365',
      '425863',
      '433290',
      '455306',
      '457973',
      '467309',
      '502123',
      '516453',
      '520504',
      '522971',
      '523612',
      '527289',
      '536326',
      '536510',
      '537706',
      '540926',
      '540947',
      '554959',
      '557042',
      '589808',
      '623374',
      '625006',
      '625804',
      '943646',
      '944541',
      '944542',
      '949098',
      '949094',
      '949099',
      '949103',
    ],
  },
  {
    name: 'NH농협카드',
    color: 'rgb(148, 218, 205)',
    patterns: [
      '356516',
      '407916',
      '407917',
      '409216',
      '409217',
      '470616',
      '470617',
      '485479',
      '485480',
      '490611',
      '490612',
      '538811',
      '538812',
      '542416',
      '542454',
      '542586',
      '546111',
      '546112',
      '552111',
      '552112',
      '559434',
      '559438',
      '621011',
      '621012',
      '624363',
      '625111',
      '625112',
      '636093',
      '657311',
      '657312',
      '941116',
      '941117',
      '942011',
      '942012',
      '943016',
      '943017',
      '943116',
      '943117',
      '944011',
      '944012',
      '944111',
      '944112',
      '944116',
      '944117',
      '944711',
      '944712',
      '946316',
    ],
  },
  {
    name: '삼성카드',
    color: 'rgb(222, 89, 185)',
    patterns: [
      '377989',
      '379183',
      '400913',
      '451245',
      '458532',
      '463732',
      '4689',
      '4705',
      '474289',
      '512365',
      '518831',
      '536125',
      '536148',
      '536648',
      '536181',
      '552014',
      '624411',
      '625817',
      '941029',
      '941088',
      '942101',
    ],
  },
  {
    name: '신한카드',
    color: 'rgb(226, 65, 65)',
    patterns: [
      '356297',
      '356907',
      '356878',
      '377178',
      '377983',
      '377988',
      '400772',
      '403965',
      '404678',
      '422155',
      '429612',
      '430972',
      '434976',
      '436420',
      '438676',
      '449914',
      '445090',
      '451842',
      '451845',
      '454478',
      '460561',
      '461954',
      '465887',
      '472175',
      '472246',
      '478292',
      '486678',
      '510737',
      '511187',
      '515594',
      '517134',
      '521189',
      '528638',
      '535180',
      '537943',
      '538413',
      '542879',
      '549840',
      '559410',
      '589807',
      '605609',
      '606045',
      '621078',
      '624331',
      '624348',
      '625178',
      '941061',
      '941080',
      '941082',
      '941083',
      '941161',
      '942062',
      '942073',
      '942078',
      '944078',
    ],
  },
  {
    name: '하나카드',
    color: 'rgb(231, 110, 154)',
    patterns: [
      '356543',
      '356545',
      '357104',
      '371001',
      '377969',
      '379192',
      '402367',
      '408966',
      '411904',
      '414025',
      '416206',
      '416207',
      '416262',
      '420189',
      '420707',
      '4289',
      '4336',
      '448125',
      '450596',
      '455437',
      '459900',
      '459930',
      '461771',
      '465306',
      '465583',
      '490625',
      '493455',
      '502928',
      '511845',
      '518185',
      '523830',
      '524242',
      '524335',
      '531838',
      '532092',
      '538661',
      '541707',
      '546252',
      '552125',
      '552323',
      '553177',
      '621025',
      '621079',
      '624435',
      '624436',
      '626261',
      '941051',
      '941052',
      '941053',
      '941181',
      '941581',
      '942025',
      '944025',
      '944081',
    ],
  },
  {
    name: '우리카드',
    color: 'rgb(115, 188, 109)',
    patterns: [
      '404720',
      '408320',
      '412020',
      '406107',
      '421420',
      '4326',
      '447820',
      '490220',
      '514043',
      '515954',
      '536320',
      '537102',
      '538720',
      '538920',
      '548020',
      '552220',
      '553820',
      '5589',
      '605615',
      '636094',
      '621020',
      '623393',
      '625320',
      '621020',
      '655620',
      '657020',
      '942520',
      '943520',
      '944420',
      '944520',
      '947124',
    ],
  },
  {
    name: '현대카드',
    color: 'rgb(243, 125, 59)',
    patterns: [
      '361653',
      '402857',
      '403302',
      '404947',
      '413526',
      '4172',
      '418143',
      '433028',
      '435661',
      '438265',
      '489016',
      '512114',
      '523930',
      '532793',
      '543333',
      '550347',
      '552290',
      '552376',
      '624368',
      '943133',
      '943135',
      '949019',
      '949013',
      '949015',
      '949018',
      '949085',
      '949097',
    ],
  },
  {
    name: 'BC카드',
    color: 'rgb(251, 205, 88)',
    patterns: [
      '356003',
      '404803',
      '405203',
      '419803',
      '427203',
      '447703',
      '490603',
      '496603',
      '538803',
      '538903',
      '531194',
      '552103',
      '558903',
      '621003',
      '624303',
      '625103',
      '655603',
      '942003',
      '944003',
      '944603',
      '970003',
      '416339',
      '552139',
      '655639',
      '657339',
      '970039',
      '517548',
      '538832',
      '552132',
      '621032',
      '625132',
      '657332',
      '655632',
      '944032',
      '551431',
      '621031',
      '657331',
      '944031',
      '946031',
      '970031',
      '411171',
      '538159',
      '626275',
      '624414',
      '935071',
      '944071',
      '409085',
      '448123',
      '521176',
      '523527',
      '536323',
      '552123',
      '559123',
      '604823',
      '621023',
      '655623',
      '935023',
      '459951',
      '463916',
      '657316',
      '9035',
      '459912',
      '465613',
      '453261',
      '485462',
      '941696',
      '944096',
      '944696',
      '941648',
      '944648',
      '944948',
      '944949',
      '949048',
      '949049',
      '536886',
      '621640',
      '625243',
      '427352',
      '944045',
      '970045',
      '941691',
      '944691',
      '944063',
      '944009',
      '944079',
      '944061',
      '944080',
      '941643',
      '944030',
      '944095',
      '455320',
      '625120',
      '943020',
      '546465',
      '941642',
      '944192',
      '930144',
      '946044',
      '946144',
      '946544',
      '946644',
      '621249',
    ],
  },
];
