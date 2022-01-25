"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3102],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,p=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return n?r.createElement(p,l(l({ref:t},c),{},{components:n})):r.createElement(p,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),l=["components"],a={id:"linked-list",title:"Linked list"},s=void 0,d={unversionedId:"algorithms/linked-list",id:"algorithms/linked-list",title:"Linked list",description:"Notes",source:"@site/../contents/algorithms/linked-list.md",sourceDirName:"algorithms",slug:"/algorithms/linked-list",permalink:"/algorithms/linked-list",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/linked-list.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1643075751,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"linked-list",title:"Linked list"},sidebar:"docs",previous:{title:"Interval",permalink:"/algorithms/interval"},next:{title:"Math",permalink:"/algorithms/math"}},c=[{value:"Notes",id:"notes",children:[],level:2},{value:"Common Routines",id:"common-routines",children:[],level:2},{value:"Corner cases",id:"corner-cases",children:[],level:2},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Like arrays, linked lists are used to represent sequential data. The benefit of linked lists is that insertion and deletion of a node in the list (given its location) is O(1) whereas in arrays the following elements will have to be shifted."),(0,i.kt)("p",null,"Adding a dummy node at the head and/or tail might help to handle many edge cases where operations have to be performed at the head or the tail. The presence of dummy nodes essentially ensures that operations will never have be done on the head or the tail, thereby removing a lot of headache in writing conditional checks to dealing with null pointers. Be sure to remember to remove them at the end of the operation."),(0,i.kt)("p",null,"Sometimes linked lists problem can be solved without additional storage. Try to borrow ideas from reverse a linked list problem."),(0,i.kt)("p",null,"For deletion in linked lists, you can either modify the node values or change the node pointers. You might need to keep a reference to the previous element."),(0,i.kt)("p",null,"For partitioning linked lists, create two separate linked lists and join them back together."),(0,i.kt)("p",null,"Linked lists problems share similarity with array problems, think about how you would do it for an array and try to apply it to a linked list."),(0,i.kt)("p",null,"Two pointer approaches are also common for linked lists. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Getting the k",(0,i.kt)("sup",null,"th")," from last node - Have two pointers, where one is k nodes ahead of the other. When the node ahead reaches the end, the other node is k nodes behind"),(0,i.kt)("li",{parentName:"ul"},"Detecting cycles - Have two pointers, where one pointer increments twice as much as the other, if the two pointers meet, means that there is a cycle"),(0,i.kt)("li",{parentName:"ul"},"Getting the middle node - Have two pointers, where one pointer increments twice as much as the other. When the faster node reaches the end of the list, the slower node will be at the middle")),(0,i.kt)("h2",{id:"common-routines"},"Common Routines"),(0,i.kt)("p",null,"Be familiar with the following routines because many linked list questions make use of one or more of these routines in the solution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Counting the number of nodes in the linked list"),(0,i.kt)("li",{parentName:"ul"},"Reversing a linked list in-place"),(0,i.kt)("li",{parentName:"ul"},"Finding the middle node of the linked list using fast/slow pointers"),(0,i.kt)("li",{parentName:"ul"},"Merging two lists together")),(0,i.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single node"),(0,i.kt)("li",{parentName:"ul"},"Two nodes"),(0,i.kt)("li",{parentName:"ul"},"Linked list has cycle. ",(0,i.kt)("strong",{parentName:"li"},"Tip:")," Clarify with the interviewer whether there can be a cycle in the list. Usually the answer is no")),(0,i.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/reverse-linked-list/"},"Reverse a Linked List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/linked-list-cycle/"},"Detect Cycle in a Linked List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-two-sorted-lists/"},"Merge Two Sorted Lists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-k-sorted-lists/"},"Merge K Sorted Lists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},"Remove Nth Node From End Of List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/reorder-list/"},"Reorder List"))))}h.isMDXComponent=!0}}]);