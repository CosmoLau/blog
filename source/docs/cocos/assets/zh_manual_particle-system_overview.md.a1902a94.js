import{_ as e,v as t,b as a,R as o}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/new_ParticleSystemComponent.ed344163.png",s="/docs/cocos/assets/new_ParticleSystemComponent_node.ba510f8f.png",i="/docs/cocos/assets/particle-panel.2d7f1374.png",v=JSON.parse('{"title":"3D 粒子系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/particle-system/overview.md","filePath":"zh/manual/particle-system/overview.md"}'),r={name:"zh/manual/particle-system/overview.md"},n=o('<h1 id="_3d-粒子系统" tabindex="-1">3D 粒子系统 <a class="header-anchor" href="#_3d-粒子系统" aria-label="Permalink to &quot;3D 粒子系统&quot;">​</a></h1><p>粒子系统是游戏引擎特效表现的基础，它可以用于模拟的火、烟、水、云、雪、落叶等自然现象，也可用于模拟发光轨迹、速度线等抽象视觉效果。</p><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><p>粒子系统的基本单元是粒子，一个粒子一般具有位置、大小、颜色、速度、加速度、生命周期等属性。在每一帧中，粒子系统一般会执行如下步骤：</p><ol><li>产生新的粒子，并初始化</li><li>删除超过生命周期的粒子</li><li>更新粒子的动态属性</li><li>渲染所有有效的粒子</li></ol><p>粒子系统一般由以下几个部分组成：</p><ol><li>发射器，用于创建粒子，并初始化粒子的属性</li><li>影响器，用于更新粒子的属性</li><li>渲染器，渲染粒子</li><li>粒子类，存储粒子的属性</li><li>粒子系统类，管理上面的模块</li></ol><h2 id="添加-3d-粒子系统" tabindex="-1">添加 3D 粒子系统 <a class="header-anchor" href="#添加-3d-粒子系统" aria-label="Permalink to &quot;添加 3D 粒子系统&quot;">​</a></h2><p>在编辑器中添加粒子系统组件有以下两种方式：</p><ol><li><p>在 <strong>层级管理器</strong> 中选中节点，然后点击右侧 <strong>属性检查器</strong> 面板上的 <strong>添加组件</strong> 按钮添加粒子，如下图：</p><p><img src="'+l+'" alt="new_ParticleSystemComponent"></p></li><li><p>在左侧的 <strong>层级管理器</strong> 面板中点击鼠标右键，然后选择 <strong>创建 -&gt; 特效 -&gt; 粒子系统</strong>，即可创建一个带有粒子系统组件的节点，如下图：</p><p><img src="'+s+'" alt="new_ParticleSystemComponent_node"></p></li></ol><p>添加完成后，粒子在 <strong>场景编辑器</strong> 中显示如下：</p><p><img src="'+i+'" alt="particle panel"></p><p>右下角的粒子系统控制面板用于控制粒子的播放暂停等，详情请参考 <a href="./editor/particle-effect-panel.html">粒子控制面板</a>。</p><h2 id="内容" tabindex="-1">内容 <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容&quot;">​</a></h2><p>粒子系统主要包括以下两部分内容：</p><ul><li><p><a href="./module.html">粒子系统模块</a></p></li><li><p><a href="./editor/">粒子属性编辑</a></p></li></ul>',16),p=[n];function c(d,m,h,_,g,f){return t(),a("div",null,p)}const b=e(r,[["render",c]]);export{v as __pageData,b as default};
