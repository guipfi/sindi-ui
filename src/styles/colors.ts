export type Colors =
  'pink-gradient' |
  'black-gradient' |
  'black-gradient-reverse' |
  'gray-gradient' |
  'pink' |
  'dark-pink' |
  'black' |
  'red' |
  'green' |
  'white';

export const theme = {
  colors: {
    pinkGradient: 'linear-gradient(180deg, #E1006C 0%, #A6023D 100%)',
    blackGradient: 'linear-gradient(180deg, #000000 0%, #3F3F3F 100%)',
    blackGradientReverse: 'linear-gradient(180deg, #000000 0%, #3F3F3F 100%)',
    grayGradient: 'linear-gradient(180deg, #FCFCFC 0%, rgba(235, 235, 235, 0.77) 100%)',
    pink: '#DA0166',
    darkPink: '#A8023F',
    black: '#000000',
    red: '#BA4040',
    green: '#226829',
    white: '#FFFFFF',
  }
};