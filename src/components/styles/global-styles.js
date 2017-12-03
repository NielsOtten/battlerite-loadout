/* eslint-disable global-require,import/no-unresolved,import/no-webpack-loader-syntax */
import { injectGlobal } from 'styled-components';

/*
*
* This stylesheet contains only the most global styles.
* Anything else global should be added through /components/Base/styled/MainWrapper.jsx
*
*/

injectGlobal`
  /* reset stylesheet */
  /* stylelint-disable */
  ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,body,html,p,blockquote,q,fieldset,dl,dt,dd,iframe,table,tbody,thead,td,th,address,legend{margin:0;padding:0;font-size:1em;font-style:inherit;font-family:inherit;vertical-align:baseline}article,aside,canvas,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}*{-webkit-tap-highlight-color:rgba(0,0,0,0)}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{font-size:12px;line-height:1.5em;font-family:Arial,Helvetica,sans-serif}h1{font-size:1.5em;line-height:1em;margin:2em 0 1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}* html h1,* html h2{margin-top:0}h2{font-size:1.3333em;line-height:1.125em;margin-top:1.6875em;margin-bottom:.5625em}h3{font-size:1.1667em;line-height:1.286em;margin-top:1.929em;margin-bottom:.643em}h2+h3{margin-top:1.2857em}h4{margin-top:1.5em}h3+h4{margin-top:.5em}h5{margin-top:1.5em;font-weight:400}h4+h5{margin-top:0}p{font-size:1em;line-height:1.5em;margin:0 0 1.5em}p.intro{font-size:1.08333em;line-height:1.3846em;font-weight:700}blockquote{margin:0 2.5em 1.5em;font-style:oblique}q{font-style:oblique}hr{margin:0 0 1.5em;height:1px;background:#333;border:0}small{font-size:.8333em;line-height:1.8em}a img,:link img,:visited img{border:0}a{background:transparent;outline:0}address{font-style:normal}figure{margin:0}ul,ol{margin:0 0 1.5em 2.5em}li ul,li ol{margin:0 0 0 2.5em}dl{margin:0 0 1.5em}dt{font-weight:700;margin:1.5em 0 0}dd{margin:0 0 0 2.5em}.break{clear:both}.right{float:right}.left{float:left}.hide,.skip{display:none}.center{text-align:center}fieldset{border:0}form br{clear:left}label{float:left;width:150px;margin:0 0 .9em}label.inline{width:auto;display:inline;margin-right:15px}input,input.text,textarea,select{font-family:inherit;font-size:100%;width:300px;margin:0 0 .9em}textarea{overflow:auto}label input{width:auto;height:auto;margin:0 5px 0 0;padding:0;vertical-align:middle;border:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input.inline,select.inline{width:150px}input.small{width:30px}input.medium{width:60px}label,button{cursor:pointer}button,input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button,input{line-height:normal}button[disabled],input[disabled]{cursor:default}input::-moz-focus-inner,button::-moz-focus-inner{border:0;padding:0};
  /* stylelint-enable */
`;
