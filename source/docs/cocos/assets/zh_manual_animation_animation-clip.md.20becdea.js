import{_ as a,v as t,b as e,R as o}from"./chunks/framework.5ffcbaff.js";const n="/docs/cocos/assets/skeletal-animation.5a61ab00.png",_=JSON.parse('{"title":"动画剪辑","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/animation/animation-clip.md","filePath":"zh/manual/animation/animation-clip.md"}'),i={name:"zh/manual/animation/animation-clip.md"},r=o('<h1 id="动画剪辑" tabindex="-1">动画剪辑 <a class="header-anchor" href="#动画剪辑" aria-label="Permalink to &quot;动画剪辑&quot;">​</a></h1><p>动画剪辑（Animation Clip）是一份动画的声明数据，即包含动画数据的资源，是动画系统的核心之一。将动画剪辑挂载到 <a href="./animation-comp.html">动画组件</a> 上，就能够将这份动画数据应用到动画组件所在的节点上。</p><p>目前 Creator 支持从外部导入动画，或者直接在 Creator 内部创建一个全新的动画剪辑。</p><h2 id="creator-内部创建的动画" tabindex="-1">Creator 内部创建的动画 <a class="header-anchor" href="#creator-内部创建的动画" aria-label="Permalink to &quot;Creator 内部创建的动画&quot;">​</a></h2><p>通过 <strong>动画编辑器</strong> 可以直接创建全新的动画剪辑，并进行编辑和预览，详情请参考 <a href="./animation.html">使用动画编辑器</a>。</p><p>也可以通过脚本创建，详情请参考 <a href="./use-animation-curve.html">程序化编辑动画剪辑</a>。</p><h2 id="外部导入的骨骼动画" tabindex="-1">外部导入的骨骼动画 <a class="header-anchor" href="#外部导入的骨骼动画" aria-label="Permalink to &quot;外部导入的骨骼动画&quot;">​</a></h2><p>外部导入的动画大概包括以下几种：</p><ol><li><p>第三方美术工具生产的骨骼动画</p></li><li><p>模型导入后附带的骨骼动画</p><p>带动画的模型导入后，会同时导入模型中包含的动画。这个动画和内部新建资源的使用方式是一样的，骨骼动画的裁剪可以参考 <a href="./../asset/model/mesh.html">模型资源的动画模块介绍</a>。</p></li></ol><p>Creator 从 v3.4 开始引入了全新的 Marionette 动画系统，实现了由状态机控制的骨骼动画流程，具体内容请参考 <a href="./marionette/">Marionette 动画系统</a>。</p><p>更多关于骨骼动画的设置等，详情请参考 <a href="./skeletal-animation.html">骨骼动画</a>。</p><blockquote><p><strong>注意</strong>：外部导入的骨骼动画不支持在 <strong>动画编辑器</strong> 中查看和编辑，各节点也是锁住状态，只能在外部美术工具中进行编辑。</p><p><img src="'+n+'" alt="skeletal animation"></p></blockquote>',12),s=[r];function l(p,m,h,c,d,u){return t(),e("div",null,s)}const b=a(i,[["render",l]]);export{_ as __pageData,b as default};
