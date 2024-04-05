import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/render.DcHmkDnc.png",f=JSON.parse('{"title":"2D 对象概述","description":"","frontmatter":{},"headers":[],"relativePath":"zh/2d-object/index.md","filePath":"zh/2d-object/index.md","lastUpdated":1712305443000}'),n={name:"zh/2d-object/index.md"},d=r('<h1 id="_2d-对象概述" tabindex="-1">2D 对象概述 <a class="header-anchor" href="#_2d-对象概述" aria-label="Permalink to &quot;2D 对象概述&quot;">​</a></h1><p>区别于 3D 模型对象，我们将不涉及模型的图片渲染体统称为 2D 渲染对象。2D 渲染对象的处理在底层的数据提交上与 3D 模型存在差异，其遵循自己的规则做出了一些针对性的调整以实现更好的效率表现和使用体验。</p><h2 id="_2d-对象渲染结构说明" tabindex="-1">2D 对象渲染结构说明 <a class="header-anchor" href="#_2d-对象渲染结构说明" aria-label="Permalink to &quot;2D 对象渲染结构说明&quot;">​</a></h2><p>2D 渲染对象的收集采用树状结构，RenderRoot 节点（带有 RenderRoot2D 组件的节点）为 2D 对象数据收集的入口节点，所有的 2D渲染对象需在 RenderRoot 节点下才可以被渲染。由于 Canvas 组件本身继承 RenderRoot2D 组件，所以 Canvas 组件也可以作为数据收集的入口。2D 渲染节点必须带有 UITransform 组件作为渲染顶点数据、点击或者对齐策略等功能生效的必要条件。</p><p>2D 渲染也可以支持对模型进行渲染，唯一的条件是带有网格渲染器组件（例如 <code>MeshRenderer</code>/<code>SkinnedMeshRenderer</code>）的节点必须添加 <strong>UI/UIMeshRenderer</strong> 组件才可以和 UI 在相同的管线上进行渲染。</p><p>2D 渲染流程如下：</p><p><img src="'+o+'" alt="render"></p><h2 id="_2d-对象分类" tabindex="-1">2D 对象分类 <a class="header-anchor" href="#_2d-对象分类" aria-label="Permalink to &quot;2D 对象分类&quot;">​</a></h2><p>2D 对象大致上可以分为两类，<strong>2D 渲染对象</strong> 和 <strong>用户界面 User-interface（UI）</strong>，其区别主要在于 2D 渲染对象一般只负责将 2D 对象渲染出来，而 UI 则更多的承担着用户交互的能力。具体的差别用户可参考具体的详细说明：</p><ul><li><a href="./2d-render/">2D 渲染</a></li><li><a href="./ui-system/">UI 系统</a></li></ul>',10),s=[d];function c(i,_,h,l,D,p){return t(),a("div",null,s)}const u=e(n,[["render",c]]);export{f as __pageData,u as default};
