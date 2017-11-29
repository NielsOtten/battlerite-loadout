/* eslint-disable prefer-template, max-len */

const getDeferScript = src => (src ? `
  <script defer src="${src}"></script>
` : '');

// const getDeferStyle = cssBundle => cssBundle ? `
//   <link rel="stylesheet" href="${cssBundle}" media="none" onload="if(media!='all')media='all'" />
//   <noscript><link rel="stylesheet" type="text/css" href="${cssBundle}" /></noscript>
// ` : '';

export const head = vo => `
  <!DOCTYPE html>
  <html lang="en" ${vo.helmet.htmlAttributes.toString()}>
    ${`
      <head>
        ${vo.helmet.title.toString()}
        ${vo.helmet.meta.toString()}
        ${vo.helmet.link.toString()}
        ${vo.fonts.map(font => `<link rel="preload" as="font" href="${font}" type="font/woff2" crossorigin />`).join('')}
        ${vo.stylesheet}
      </head>
    `}
`;

export const main = vo => `
  <body ${vo.helmet.bodyAttributes.toString()}><section id="root">${vo.root}</section>
`;

export const footer = vo => `
    ${getDeferScript(vo.mainJSBundle)}
  </body>
  </html>
`;
