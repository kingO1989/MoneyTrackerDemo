"use strict";(self.webpackChunkmoneytracker=self.webpackChunkmoneytracker||[]).push([[243],{593:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var s=t(433),a=t(439),r=t(791),i=t(701),c=t(552),o=t(184),l=function(){var e=(0,r.useContext)(c.Z),n=e.accounts;e.expense,e.income,e.networth,e.setNetworth,e.totalIncome,e.totalExpenses;return(0,r.useEffect)((function(){console.log(n)}),[n]),(0,o.jsxs)("div",{className:"Transaction-view",children:[(0,o.jsx)("h5",{children:" Transaction Summary"}),n?n.map((function(e){return(0,o.jsxs)("details",{children:[(0,o.jsxs)("summary",{children:[" ",(0,o.jsxs)("b",{children:[" ",e.name+"'s"," summary"]})]}),(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsx)("tr",{children:(0,o.jsxs)("td",{children:[(0,o.jsx)("b",{children:"Total Income"})," ::",(0,o.jsx)("span",{className:"income",children:e.totalIncomeInCurrency})]})}),(0,o.jsx)("tr",{children:(0,o.jsxs)("td",{children:[(0,o.jsx)("b",{children:"Total Expense"})," ::",(0,o.jsx)("span",{className:"expense",children:e.totalExpenseInCurrency})]})}),(0,o.jsx)("tr",{className:"",children:(0,o.jsxs)("td",{children:[(0,o.jsx)("b",{children:"Networth"})," ::",e.networth]})})]})})]})})):""]})},u=t(545),m=t(811),d=t(600),x=t(820),h=function(){var e=(0,r.useContext)(c.Z),n=e.currency,t=e.accounts,h=e.setAccount,f=(0,r.useState)(!1),v=(0,a.Z)(f,2),j=v[0],p=v[1];function y(e){return JSON.parse(JSON.stringify(e))}function g(e){return void 0!==e}function N(e){return n+""+e}function C(e){e=e.map((function(e){console.log(e);for(var n=0,t=0;t<e.expenses.length;t++)n+=Number(e.expenses[t].amount);e.expenses.length>0&&(e.totalExpense=n);for(var s=0,a=0;a<e.incomes.length;a++)s+=Number(e.incomes[a].amount);return e.incomes.length>0&&(e.totalIncome=s),e.networth=e.totalIncome-e.totalExpense,e.totalExpenseInCurrency=N(e.totalExpense),e.totalIncomeInCurrency=N(e.totalIncome),e})),h(e)}return(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("h1",{children:"Transaction"}),(0,o.jsx)("div",{className:"content_display",children:(0,o.jsx)(m.Z,{className:"transaction",children:(0,o.jsxs)("div",{className:"flex-container",children:[(0,o.jsxs)("div",{className:"flex-item-left",children:[(0,o.jsx)(d.Z,{className:"trans-btn",onClick:function(e){t.length<1?alert("Must create at least one account"):p(!1===j)},children:"+ Transaction"}),j?(0,o.jsx)(x.Z,{modal:!0,header:"Add Transaction",hasCancel:!0,onAction:function(){p(!1)},children:(0,o.jsx)(u.Z,{Addtransaction:function(e){var a=e.from,r=e.amount,i=e.date,c=e.note,o=e.type,l=e.category;if(!1===g(a))return console.log("from"),void alert("From values is missing or invalid");if(!1!==g(r))if(!1!==g(i))if(!1!==g(c))if(!1!==g(l)){var u=g(o);if(!1!==u){if(!0===u)if("Expense"===o){var m=y(t),d=m.filter((function(e){return e.name===a}));d=d[0];var x={amount:r,date:i,note:c,type:o,category:l,amountInCurrency:n+""+r};d.expenses=[].concat((0,s.Z)(d.expenses),[x]),d.transactions=[].concat((0,s.Z)(d.transactions),[x]),m.map((function(e){if(e.name===d.name)return d})),C(m)}else{var h=y(t),f=h.filter((function(e){return e.name===a}));f=f[0];var v={amount:r,date:i,note:c,type:o,amountInCurrency:n+""+r};f.incomes=[].concat((0,s.Z)(f.incomes),[v]),f.transactions=[].concat((0,s.Z)(f.transactions),[v]),h.map((function(e){if(e.name===f.name)return f})),C(h)}p(!1)}else alert("Type values is missing or invalid")}else alert("Category values is missing or invalid");else alert("Note values is missing or invalid");else alert("Date values is missing or invalid");else alert("Amount values is missing or invalid")},setAddTransactionBtnClicked:p})}):""]}),(0,o.jsxs)("div",{className:"flex-item-right",children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(l,{})]})]})})})]})}}}]);
//# sourceMappingURL=243.213a29c3.chunk.js.map