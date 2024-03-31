import{_ as e,v as s,b as r,R as t}from"./chunks/framework.5ffcbaff.js";const o="/docs/cocos/assets/ui-model-hierarchy.720b8950.png",g=JSON.parse('{"title":"UIMeshRenderer 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/ui-model.md","filePath":"zh/manual/ui-system/components/editor/ui-model.md"}'),n={name:"zh/manual/ui-system/components/editor/ui-model.md"},a=t('<h1 id="uimeshrenderer-组件参考" tabindex="-1">UIMeshRenderer 组件参考 <a class="header-anchor" href="#uimeshrenderer-组件参考" aria-label="Permalink to &quot;UIMeshRenderer 组件参考&quot;">​</a></h1><p>UIMeshRenderer 是一个将 3D 模型从 3D 渲染管线转换到 2D 渲染管线的带有转换功能的渲染组件。该组件支持 3D 模型和粒子在 UI 上的显示，没有这个组件，即使模型和粒子节点在 UI 里也不会被渲染。</p><blockquote><p><strong>注意</strong>：若 3D 模型无法在 UI 场景中正常显示，请尝试放大模型倍数。</p></blockquote><p>该组件的添加方式是在 <strong>层级管理器</strong> 中选中带有或继承自 MeshRenderer 组件的节点，然后点击 <strong>属性检查器</strong> 下方的 <strong>添加组件</strong> 按钮，选择 <strong>UI-&gt; UIMeshRenderer</strong> 即可。而粒子则是添加到粒子节点上。通常结构如下所示：</p><p><img src="'+o+'" alt="ui-model-hierarchy"></p>',5),i=[a];function d(c,m,h,p,u,l){return s(),r("div",null,i)}const f=e(n,[["render",d]]);export{g as __pageData,f as default};
