var coreJS=coreJS||{};!function(n){"use strict";n.tpl=function(e){var n=this;this.jsonDOM=e,this.dataBind='[data-bind="{{name}}"]',this.pageDOM=document,this.searchInDOM=function(e){var t=n.dataBind.replace("{{name}}",e),i=n.pageDOM.querySelectorAll(t);return i},this.replaceInDOM=function(n){},this.isAnObject=function(n){return"object"==typeof n&&void 0===n.length?!0:!1},this.isAString=function(n){return"string"==typeof n?!0:!1},this.isAnArray=function(n){return"object"==typeof n&&void 0!==n.length?!0:!1},this.handleStringBind=function(t,i){var e=n.searchInDOM(t);Object.keys(e).forEach(function(n){e[n].innerHTML=i})},this.handleArrayBind=function(e,a){var c=n.searchInDOM(e),r=[],t,i,o=[];Object.keys(n.jsonDOM[e]).forEach(function(a){Object.keys(c).forEach(function(s){o.push(c[s]),t=c[s].cloneNode(!0),i=t.innerHTML,Object.keys(n.jsonDOM[e][a]).forEach(function(c){i=i.replace("{{"+c+"}}",n.jsonDOM[e][a][c]),t.innerHTML=i,r.push(t)})})}),o.forEach(function(n){var e=n.parentElement;r.forEach(function(t){e.insertBefore(t,n)})}),o.forEach(function(n){try{n.parentElement.removeChild(n)}catch(e){console.warn(e)}})},this.handleObjectBind=function(c,i){var t=n.searchInDOM(c),o=[],e;Object.keys(t).forEach(function(n){e=t[n].innerHTML,Object.keys(i).forEach(function(n){e=e.replace("{{"+n+"}}",i[n])}),t[n].innerHTML=e})},this.compile=function(){Object.keys(this.jsonDOM).forEach(function(e){n.isAString(n.jsonDOM[e])?n.handleStringBind(e,n.jsonDOM[e]):n.isAnArray(n.jsonDOM[e])?n.handleArrayBind(e,n.jsonDOM[e]):n.isAnObject(n.jsonDOM[e])&&n.handleObjectBind(e,n.jsonDOM[e])})},document.addEventListener("DOMContentLoaded",this.compile())}}(coreJS);