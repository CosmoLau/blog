import{_ as e,v as n,b as s,F as t,L as o}from"./chunks/framework.5ffcbaff.js";const f=JSON.parse('{"title":"BlockInputEvents 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/block-input-events.md","filePath":"zh/manual/ui-system/components/editor/block-input-events.md"}'),a={name:"zh/manual/ui-system/components/editor/block-input-events.md"},c=t("h1",{id:"blockinputevents-组件参考",tabindex:"-1"},[o("BlockInputEvents 组件参考 "),t("a",{class:"header-anchor",href:"#blockinputevents-组件参考","aria-label":'Permalink to "BlockInputEvents 组件参考"'},"​")],-1),i=t("p",null,"BlockInputEvents 组件将拦截所属节点 bounding box 内的所有输入事件（鼠标和触摸），防止输入穿透到下层节点，一般用于上层 UI 的背景。",-1),l=t("p",null,"当我们制作一个弹出式的 UI 对话框时，对话框的背景默认不会截获事件。也就是说虽然它的背景挡住了游戏场景，但是在背景上点击或触摸时，下面被遮住的游戏元素仍然会响应点击事件。这时我们只要在背景所在的节点上添加这个组件，就能避免这种情况。",-1),p=t("p",null,"该组件没有任何 API 接口，直接添加到场景即可生效。",-1),r=[c,i,l,p];function u(d,_,m,h,v,b){return n(),s("div",null,r)}const I=e(a,[["render",u]]);export{f as __pageData,I as default};
