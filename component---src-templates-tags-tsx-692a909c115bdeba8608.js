"use strict";(self.webpackChunkdimetrio_dev=self.webpackChunkdimetrio_dev||[]).push([[975],{616:function(e,t,a){var l=a(7294),n=a(1279);t.Z=e=>{let{date:t}=e;return l.createElement("div",{className:"w-full flex flex-row text-sm text-gray-500"},l.createElement(n.xHR,{size:"18px"}),l.createElement("span",{className:"ml-1 text-sm -mb-0.5"},t))}},94:function(e,t,a){a.r(t);var l=a(7294),n=a(8851),r=a(5444),m=a(616),s=a(3350);t.default=e=>{let{pageContext:t,data:a}=e;const{tag:c}=t,{edges:i,totalCount:d}=a.allMdx,o=`${d} post${1===d?"":"s"} tagged with ${c}:`;return l.createElement(n.Z,null,l.createElement(s.Z,{title:"Article Tags | Dimetrio"}),l.createElement("div",{className:"flex flex-row content-center text-gray-500"},l.createElement("span",{className:"my-none vertical-middle"},o)),l.createElement("div",null,i.map((e=>{let{node:t,index:a}=e;return l.createElement("div",{key:a,className:"my-8"},l.createElement(r.Link,{to:t.fields.slug},t.frontmatter.title),l.createElement(m.Z,{date:(n=t.frontmatter.title,/[aА-яЯ]/gm.test(n)?t.frontmatter.dateRu:t.frontmatter.dateEn)}));var n})),l.createElement(r.Link,{to:"/tags"},"All tags")))}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-692a909c115bdeba8608.js.map