// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'orange-gradient': 'linear-gradient(90deg, #F6581C 0%, #F57900 100%)',
        'orange-gradient-hover': 'linear-gradient(90deg, #f57900 30%, #f6581c 70%)',
        'light-orange-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FEEACD 100%)',
        'light-green-gradient': 'linear-gradient(360deg, transparent 0%, #D0F2E7 100%)',
        'light-orange-yellow-gradient': 'linear-gradient(360deg, #FFFFFF 0%, #FFFFFF 34%, #FDCFC1 100%)',
      },
      boxShadow: {
        'inner-border': 'inset 0 0 0 1px #F2F2F2',
      },
    },
  },
  plugins: [],
};
