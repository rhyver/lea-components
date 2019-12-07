const setCssVarVal = cssVar =>
   document.documentElement.style
   .setProperty(cssVar['variable'], cssVar.value);

setCssVarVal({variable: '--primary-color', value: 'red'});

console.log('init theme')
