/*! For license information please see 392.2733a71e.chunk.js.LICENSE.txt */
(self.webpackChunkmoneytracker=self.webpackChunkmoneytracker||[]).push([[392],{392:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var a=t(439),s=t(791),c=t(552),r=t(433),o=t(600),i=t(818),l=(t(325),t(184)),u=function(n){var e=n.setCreateAccountBtnClicked,t=(0,s.useContext)(c.Z),u=t.accounts,d=t.setAccount,h=t.currency,x=(0,s.useState)(""),m=(0,a.Z)(x,2),f=m[0],j=m[1],v=(0,s.useState)(0),g=(0,a.Z)(v,2),p=g[0],y=g[1],C=(0,s.useRef)();return(0,s.useEffect)((function(){console.log(u)}),[u]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{ref:C,fields:{name:{label:"Name",type:"text",onAction:function(n){return j(n.target.value)},defaultValue:f},amount:{label:"Initial Amount",type:"number",onAction:function(n){return y(n.target.value)},defaultValue:p}}}),(0,l.jsx)(o.Z,{className:".create-account-custom-button",onClick:function(n){return function(){var n=Number(p),t={name:f,networth:n,transactions:[],incomes:[],expenses:[],totalExpense:0,totalExpenseInCurrency:h+" 0",totalIncome:0,totalIncomeInCurrency:h+" 0",currency:h};d((function(n){return[].concat((0,r.Z)(n),[t])})),j(""),y(0),e(!1)}()},children:"submit"})]})},d=t(811),h=(t(57),t(870)),x=t(820),m=function(){var n=(0,s.useContext)(c.Z).accounts,e=(0,s.useState)(!1),t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,s.useEffect)((function(){}),[n]),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h1",{children:"Account"}),(0,l.jsx)("div",{className:"filter"}),(0,l.jsx)("div",{className:"content_display",children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)("div",{className:"flex-container",children:(0,l.jsx)(o.Z,{className:"acct-btn",onClick:function(n){i(!1===r)},children:"+ Account"})}),r?(0,l.jsx)(x.Z,{modal:!0,header:"Create Account Profile",hasCancel:!0,onAction:function(n){console.log("Dialog"),i(!1)},children:(0,l.jsx)(u,{setCreateAccountBtnClicked:i})}):"",(0,l.jsx)(h.Z,{})]})})]})}},870:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var a=t(439),s=t(791),c=t(552),r=t(184),o=function(n){var e=n.transaction,t=n.currency;return console.log(e),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"container-account-list",children:(0,r.jsxs)("table",{className:"account-list",children:[(0,r.jsx)("thead",{}),(0,r.jsx)("tbody",{children:e?e.map((function(n,e){return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(a=n.date,new Date(a).toDateString()),","," "," "]}),(0,r.jsxs)("td",{children:[" ",t+""+n.amount]})]},e);var a})):""})]})})]})},i=function(n){var e=n.accounts,t=n.accountDisplayHandler;return(0,r.jsx)(r.Fragment,{children:e.map((function(n,e){return(0,r.jsxs)("div",{className:"account_holder",onClick:function(e){return t(n)},children:[(0,r.jsxs)("div",{className:"name",children:[" ",n.name]}),(0,r.jsx)("div",{className:"right_arrow"})]},e)}))})},l=function(n){var e=n.display,t=n.showAccordion;return console.log(e),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"right_view",children:(0,r.jsxs)("div",{className:"account_details",children:[(0,r.jsxs)("div",{className:"total_income",children:[(0,r.jsx)("span",{className:"title",children:"Total Income"}),(0,r.jsx)("span",{className:"value",children:e?e.currency+""+e.totalIncome:""}),(0,r.jsx)("span",{className:"view arrow_down",onClick:function(n){return t("total_income_accordion")},children:(0,r.jsx)("i",{className:"fa-solid fa-angle-down fa-xl"})})]}),(0,r.jsx)("div",{className:"total_income_accordion",children:e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o,{transaction:e.incomes,currency:e.currency})}):""}),(0,r.jsxs)("div",{className:"total_expenses",children:[(0,r.jsx)("span",{className:"title",children:"Total Expense"}),(0,r.jsx)("span",{className:"value",children:e?e.currency+""+e.totalExpense:""}),(0,r.jsx)("span",{className:"view arrow_down",onClick:function(){return t("total_expense_accordion")},children:(0,r.jsx)("i",{className:"fa-solid fa-angle-down fa-xl"})})]}),(0,r.jsx)("div",{className:"total_expense_accordion",children:e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o,{transaction:e.expenses,currency:e.currency})}):""}),(0,r.jsxs)("div",{className:"networth",children:[(0,r.jsxs)("span",{className:"title",children:["Networth "," "]}),(0,r.jsx)("span",{className:"value",children:e?e.currency+""+e.networth:""})]})]})})})},u=(t(57),function(){var n=(0,s.useContext)(c.Z).accounts,e=(0,s.useState)(n[0]?n[0]:""),t=(0,a.Z)(e,2),o=t[0],u=t[1];return console.log(n[0]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"account-view-container",children:[(0,r.jsx)("div",{className:"left_view",children:n?(0,r.jsx)(i,{accountDisplayHandler:function(n){console.log(n),u((function(){return n}))},accounts:n}):""}),(0,r.jsx)(l,{display:o,showAccordion:function(n){console.log(n);var e=document.getElementsByClassName(n);-1===e[0].className.indexOf("display")?e[0].className+=" display":e[0].className=e[0].className.replace(" display","")}})]})})})},57:function(n,e,t){"use strict";var a=t(791),s=t(552),c=(t(325),t(184));e.Z=function(){var n=(0,a.useContext)(s.Z).accounts;return(0,c.jsxs)("div",{className:"created-account-list",children:[(0,c.jsx)("br",{}),(0,c.jsx)("h4",{children:"Total"}),(0,c.jsxs)("table",{className:"account-list",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("input",{type:"checkbox"})}),(0,c.jsx)("td",{children:"Owner"}),(0,c.jsx)("td",{children:"Amount"})]})}),(0,c.jsx)("tbody",{children:n?n.map((function(n,e){return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("input",{type:"checkbox"})}),(0,c.jsx)("td",{children:n.name}),(0,c.jsxs)("td",{children:[" ",n.networth]})]})})):""})]})]})}},600:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var a=t(413),s=(t(791),t(694)),c=t.n(s),r=t(184),o=function(n){return(0,r.jsx)(r.Fragment,{children:n.href?(0,r.jsx)("a",(0,a.Z)((0,a.Z)({},n),{},{className:c()("Button",n.className),children:n.children})):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{children:(0,r.jsx)("button",(0,a.Z)((0,a.Z)({},n),{},{className:c()("Button",n.className)}))})})})}},820:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var a=t(791),s=t(600),c=t(184);var r=function(n){var e=n.header,t=n.modal,r=void 0!==t&&t,o=n.extendedDismiss,i=void 0===o||o,l=n.confirmLabel,u=void 0===l?"ok":l,d=n.onAction,h=void 0===d?function(){}:d,x=n.hasCancel,m=void 0===x||x;return(0,a.useEffect)((function(){function n(n){n.target.classList.contains("DialogModal")&&h("dismiss")}function e(n){"Escape"===n.key&&h("dismiss")}return r&&(document.body.classList.add("DialogModalOpen"),i&&(document.body.addEventListener("click",n),document.addEventListener("keydown",e))),function(){document.body.classList.remove("DialogModalOpen"),document.body.removeEventListener("click",n),document.removeEventListener("keydown",e)}}),[h,r,i]),(0,c.jsx)("div",{className:r?"Dialog DialogModal":"Dialog",children:(0,c.jsxs)("div",{className:r?"DialogModalWrap":null,children:[(0,c.jsx)("div",{className:"DialogHeader",children:e}),(0,c.jsx)("div",{className:"DialogBody",children:n.children}),(0,c.jsxs)("div",{className:"DialogFooter",children:[m?(0,c.jsx)(s.Z,{className:"DialogDismiss",onClick:function(){return h("dismiss")},children:"Cancel"}):null,(0,c.jsx)(s.Z,{onClick:function(){return h(m?"confirm":"dismiss")},children:u})]})]})})}},818:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var a=t(791),s=t(785),c=t(184),r=(0,a.forwardRef)((function(n,e){var t=n.fields,a=n.initialData,r=void 0===a?{}:a,o=n.readonly,i=void 0!==o&&o;return(0,c.jsx)("form",{className:"Form",ref:e,children:Object.keys(t).map((function(n){r[n];var e=t[n],a=e.label,o=e.type,l=e.accounts,u=e.onAccountsChange,d=e.onAction,h=e.onTransactionChange,x=e.defaultValue,m=e.onCategoryChange;return i?(0,c.jsxs)("div",{className:"FormRow",children:[(0,c.jsx)("label",{className:"FormLabel",htmlFor:n,children:a}),(0,c.jsx)(s.Z,{id:n,type:o,accounts:l,onAccountsChange:u,onAction:d,onTransactionChange:h,onCategoryChange:m,defaultValue:x,readOnly:!0})]},n):(0,c.jsxs)("div",{className:"FormRow",children:[(0,c.jsx)("label",{className:"FormLabel",htmlFor:n,children:a}),(0,c.jsx)(s.Z,{id:n,type:o,accounts:l,onAccountsChange:u,onAction:d,onTransactionChange:h,defaultValue:x,onCategoryChange:m})]},n)}))})}))},785:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var a=t(413),s=t(925),c=(t(791),t(184));var r=function(n){n.id,n.defaultValue;var e=n.accounts,t=void 0===e?[]:e,a=n.onAccountsChange;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("select",{className:"form-control",onChange:a,defaultValue:t[0],children:[(0,c.jsx)("option",{children:"Select account holder"}),t.map((function(n){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("option",{value:n.name,children:n.name})})}))]})})};var o=function(n){n.id,n.defaultValue;var e=n.onTransactionChange;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("select",{className:"form-control",onChange:e,children:[(0,c.jsx)("option",{children:"Select Transaction Type"}),(0,c.jsx)("option",{value:"Expense",children:"Expense"}),(0,c.jsx)("option",{value:"Income",children:"Income"})]})})},i=["Food and beverage","Transportation","Entertainment","Mortgage or rent","Family and friends"];var l=function(n){n.id,n.defaultValue;var e=n.onCategoryChange;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("select",{className:"form-control",onChange:e,children:[(0,c.jsx)("option",{children:"Expense Category"}),i.map((function(n){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("option",{value:n,children:n})})}))]})})},u=["type","defaultValue","accounts","onAccountsChange","onTransactionChange","onCategoryChange","readOnly","onAction"];var d=function(n){var e=n.type,t=void 0===e?"input":e,i=n.defaultValue,d=n.accounts,h=void 0===d?[]:d,x=n.onAccountsChange,m=n.onTransactionChange,f=n.onCategoryChange,j=n.readOnly,v=n.onAction,g=(0,s.Z)(n,u);switch(t){case"date":return(0,c.jsx)("input",(0,a.Z)((0,a.Z)({},g),{},{onChange:v,type:"date",defaultValue:function(){var n=new Date;return n.setDate(n.getDate()+3),n.toISOString().substring(0,10)}()}));case"textarea":return(0,c.jsx)("textarea",(0,a.Z)({defaultValue:i,onChange:v},g));case"number":return(0,c.jsx)("input",(0,a.Z)({type:"number",value:i,onChange:v},g));case"AccountHolders":return(0,c.jsx)(r,(0,a.Z)((0,a.Z)({defaultValue:i,accounts:h},g),{},{onAccountsChange:x}));case"TransactionTypes":return(0,c.jsx)(o,(0,a.Z)((0,a.Z)({defaultValue:i},g),{},{onTransactionChange:m}));case"TransactionCategory":return(0,c.jsx)(l,(0,a.Z)((0,a.Z)({defaultValue:i},g),{},{onCategoryChange:f}));case"text":return(0,c.jsx)("input",{type:"text",onChange:v,value:i,readOnly:!!j});default:return(0,c.jsx)("input",(0,a.Z)({type:"text",onChange:v,value:i,readOnly:!!j},g))}}},694:function(n,e){var t;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var c=typeof t;if("string"===c||"number"===c)n.push(t);else if(Array.isArray(t)){if(t.length){var r=s.apply(null,t);r&&n.push(r)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var o in t)a.call(t,o)&&t[o]&&n.push(o)}}}return n.join(" ")}n.exports?(s.default=s,n.exports=s):void 0===(t=function(){return s}.apply(e,[]))||(n.exports=t)}()},325:function(){}}]);
//# sourceMappingURL=392.2733a71e.chunk.js.map