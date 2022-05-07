module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius:{
      '10px' : '0.625rem' /* 10px */, 
    },
    fontSize:{
      '13px' : '0.813rem', /* 13px */
      '18px' : '1.125rem', /* 18px */
    },
    screens:{
      '12pro' : '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    extend: {
      scale:{
        'reverse' : 'matrix(-1, 0, 0, 1, 0, 0)'
      },
      boxShadow:{
        'news-box' : '-9px -8px 4px rgba(0, 0, 0, 0.4)',
        'content-news-box':'-8px -8px 4px rgba(0, 0, 0, 0.25)',
      },
      width: {
        'custom-80px': '5rem' /* 80px */,
        'custom-390px': '24.375rem' /* 390px */,
        'custom-120px' : '7.5rem' /* 120px */,
        'custom-173px' : '10.813rem' /* 173px */,
        'custom-250px' : '15.625rem' /* 250px */,
        'custom-290px' : '18.125rem' /* 290px */,
        
      },
      height:{
        'custom-25px' : '1.563rem' /* 25px */,
        'custom-60px' : '3.75rem' /* 60px */,
        'custom-52px' : '3.25rem' /* 52px */,
        'custom-120px' : '7.5rem' /* 120px */,
        'custom-130px' : '8.125rem' /* 130px */,
        'custom-170px' : '10.625rem' /* 170px */,
        'custom-210px' : '13.125rem' /* 210px */,
        'custom-250px' : '15.625rem' /* 250px */,
        'custom-300px' : '18.75rem' /* 300px */,
      },
      margin: {
        'custom-2px' : '0.125rem' /* custom-2px */,
        'custom-20px' : '1.25rem' /* 20px */,
        'custom-17px' : '1.063rem' /* 17px */,
        'custom-18px' : '1.125rem' /* 18px */,
        'custom-2px' : '0.125rem' /* 2px */,
        'custom-120px' : '7.5rem' /* 120px */,
        'custom-34px' : '2.125rem' /* 34px */,
        'custom-39px' : '2.438rem' /* 39px */,
        'custom-50px' : '3.125rem' /* custom-50px */,
        'custom-60px' : '3.75rem' /* 60px */,
        'custom-70px' : '4.375rem' /* 70px */,
        
      },
      padding:{
        '2px' : '0.125rem' /* 2px */,
        '30px' : '1,875rem' /* 30px */,
        '35px' : '2,18755rem' /* 35px */,
        '50px' : '3.125rem' /* 50px */,
      },
      gap:{
        '249px' : '15.563rem' /* 249px */,
        '250px' : '15.625rem' /* 250px */,
        '71px' : '4.438rem' /* 71px */,
        '200px' : '12.5rem' /* 200px */,
        '250px' : '15.625rem' /* 250px */,
        '850px' : '53.125rem' /* 850px */,
        '500px' : '31.25rem' /* 500px */,
      },
    },
    colors:{
      'chantilly': {
        '50': '#fffcfd', 
        '100': '#fff9fb', 
        '200': '#fef0f6', 
        '300': '#fde7f1', 
        '400': '#fcd6e6', 
        '500': '#fbc4db', 
        '600': '#e2b0c5', 
        '700': '#bc93a4', 
        '800': '#977683', 
        '900': '#7b606b'
    },
    'white': {
      '50': '#ffffff', 
      '100': '#ffffff', 
      '200': '#ffffff', 
      '300': '#ffffff', 
      '400': '#ffffff', 
      '500': '#ffffff', 
      '600': '#e6e6e6', 
      '700': '#bfbfbf', 
      '800': '#999999', 
      '900': '#7d7d7d'
  },
  'lavender-blush': {
    '50': '#fffefe', 
    '100': '#fffdfe', 
    '200': '#fefbfc', 
    '300': '#fef8fb', 
    '400': '#fdf3f7', 
    '500': '#fceef4', 
    '600': '#e3d6dc', 
    '700': '#bdb3b7', 
    '800': '#978f92', 
    '900': '#7b7578'
}
    },
  },
  plugins: [],
}
