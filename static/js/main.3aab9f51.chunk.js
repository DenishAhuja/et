(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),l=(n(20),n(6)),s=n(1),i=(n(21),n(9),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=n(2),j=(n(23),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(24),n(25);var o=function(e){var t=e.date.getFullYear(),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:t}),Object(i.jsx)("div",{className:"expense-date__day",children:a})]})};var d=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(o,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})};n(26);var b=function(e){return 0===e.items.length?Object(i.jsx)("h1",{className:"expenses-list__fallback",children:"Found no expenses"}):Object(i.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(11);n(27),n(28);var v=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})};var O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})};var h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sept",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})};var m=function(e){var t=Object(u.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(j,{selected:a,onChangeFilter:function(e){c(e)}}),Object(i.jsx)(h,{expenses:l}),Object(i.jsx)(b,{items:l})]})})},p=n(7),f=n(4);n(29);var _=function(e){var t=Object(f.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(f.useState)(""),r=Object(s.a)(l,2),u=r[0],j=r[1],o=Object(f.useState)(""),d=Object(s.a)(o,2),b=d[0],x=d[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(b)};e.onSaveExpenseData(n),c(""),j(""),x("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",value:u,step:"0.01",onChange:function(e){j(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2020-01-01",max:"2022-12-31",value:b,onChange:function(e){x(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};n(30);var N=function(e){var t=Object(f.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(_,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})},g=[{id:"e1",title:"Television",amount:6e3,date:new Date(2022,7,14)},{id:"e2",title:"Couch",amount:799.49,date:new Date(2022,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2019,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2020,5,12)}];var y=function(){var e=Object(u.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(y,{}))}],[[31,1,2]]]);
//# sourceMappingURL=main.3aab9f51.chunk.js.map