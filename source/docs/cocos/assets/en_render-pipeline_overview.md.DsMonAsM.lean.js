import{_ as i,c as r,o as t,m as e,a as n}from"./chunks/framework.uQk9_EO2.js";const _=JSON.parse('{"title":"Render Pipeline Overview (Experimental)","description":"","frontmatter":{},"headers":[],"relativePath":"en/render-pipeline/overview.md","filePath":"en/render-pipeline/overview.md","lastUpdated":1712305443000}'),o={name:"en/render-pipeline/overview.md"},a=e("h1",{id:"render-pipeline-overview-experimental",tabindex:"-1"},[n("Render Pipeline Overview (Experimental) "),e("a",{class:"header-anchor",href:"#render-pipeline-overview-experimental","aria-label":'Permalink to "Render Pipeline Overview (Experimental)"'},"​")],-1),l=e("p",null,"RenderPipeline is used to control the rendering process of a scene, including lighting management, object culling, render object sorting, render target switching, etc. Since each stage can be handled differently and optimally for different projects, it is difficult to achieve optimal results with a uniform approach to the rendering process for different types of projects. The customizable render pipeline is used to provide more flexible control over each stage in the rendered scene, allowing for deeper optimization solutions for different projects.",-1),d=e("p",null,[n("Among the customizable render pipelines, one can choose to use the engine's built-in render pipeline. The built-in pipeline includes a "),e("strong",null,"forward render pipeline"),n(" and a "),e("strong",null,"deferred render pipeline"),n(", and the engine uses the forward render pipeline by default. Please refer to the "),e("a",{href:"./builtin-pipeline"},"Built-in Render Pipeline"),n(" documentation for details.")],-1),s=[a,l,d];function p(c,f,h,u,m,v){return t(),r("div",null,s)}const w=i(o,[["render",p]]);export{_ as __pageData,w as default};
