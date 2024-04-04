import{_ as n,c as t,o as r,m as e,a}from"./chunks/framework.CqnjdYks.js";const x=JSON.parse('{"title":"渲染管线概述 (Experimental)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/render-pipeline/overview.md","filePath":"zh/manual/render-pipeline/overview.md"}'),i={name:"zh/manual/render-pipeline/overview.md"},l=e("h1",{id:"渲染管线概述-experimental",tabindex:"-1"},[a("渲染管线概述 (Experimental) "),e("a",{class:"header-anchor",href:"#渲染管线概述-experimental","aria-label":'Permalink to "渲染管线概述 (Experimental)"'},"​")],-1),o=e("p",null,"RenderPipeline 用于控制场景的渲染流程，包括光照管理、物体剔除、渲染物体排序、渲染目标切换等。由于每个阶段对于不同项目来说可以有不同的优化处理方式，所以用统一的方法来处理不同类型项目的渲染流程很难达到最优化的结果。可定制化的渲染管线用于对渲染场景中的每个阶段进行更灵活的控制，可以针对不同的项目做更深层次的优化方案。",-1),s=e("p",null,[a("在可定制化的渲染管线中，可以选择使用引擎内置的渲染管线，内置渲染管线包括 "),e("strong",null,"前向渲染管线"),a(" 和 "),e("strong",null,"延迟渲染管线"),a("，引擎默认使用前向渲染管线。详情请参考 "),e("a",{href:"./builtin-pipeline.html"},"内置渲染管线"),a("。")],-1),p=[l,o,s];function c(d,m,_,h,u,f){return r(),t("div",null,p)}const w=n(i,[["render",c]]);export{x as __pageData,w as default};