import{_ as t,c as a,o as n,a4 as o}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/animation-component.Bg5KZJqf.png",f=JSON.parse('{"title":"动画组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/animation-comp.md","filePath":"zh/animation/animation-comp.md","lastUpdated":1712305443000}'),i={name:"zh/animation/animation-comp.md"},r=o('<h1 id="动画组件参考" tabindex="-1">动画组件参考 <a class="header-anchor" href="#动画组件参考" aria-label="Permalink to &quot;动画组件参考&quot;">​</a></h1><p>Animation（动画）组件可以以动画方式驱动所在节点和子节点上的节点和组件属性，包括用户自定义脚本中的属性。</p><p><img src="'+e+'" alt="animation component"></p><p>添加动画组件有三种方式：</p><ol><li>在 <strong>动画编辑器</strong> 中添加动画组件，详情请参考 <a href="./animation-create">创建 Animation 组件和动画剪辑</a>。</li><li>在 <strong>层级管理器</strong> 中选中需要添加动画的节点，然后在 <strong>属性检查器</strong> 中选择 <strong>添加组件 -&gt; Animation -&gt; Animation</strong> 来添加一个动画组件到节点上。</li><li>通过脚本添加，详情请参考 <a href="./animation-component">使用脚本控制动画</a>。</li></ol><blockquote><p><strong>注意</strong>：动画组件/骨骼动画组件不能和动画控制器组件挂载在同一个节点上，详情请参考 <a href="./marionette/">Marionette 动画系统</a>。</p></blockquote><h2 id="动画组件属性" tabindex="-1">动画组件属性 <a class="header-anchor" href="#动画组件属性" aria-label="Permalink to &quot;动画组件属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">Clips</td><td style="text-align:left;">添加的动画剪辑资源，默认为空，支持添加多个。在这里添加的 AnimationClip 可以直接在 <strong>动画编辑器</strong> 中进行编辑。</td></tr><tr><td style="text-align:left;">DefaultClip</td><td style="text-align:left;">默认的动画剪辑，若该项在挂载了动画剪辑的同时，还勾选了下方的 <strong>PlayOnLoad</strong> 属性，那么动画便会在加载完成后自动播放 Default Clip 的内容。</td></tr><tr><td style="text-align:left;">PlayOnLoad</td><td style="text-align:left;">布尔类型。若勾选该项，则动画加载完成后会自动播放 Default Clip 的内容。</td></tr></tbody></table><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>如果一个动画需要包含多个节点，那么一般会新建一个节点作为动画的 <strong>根节点</strong>，再将动画组件挂载到根节点上，则这个根节点下的其他子节点都会自动进入到这个动画剪辑中，并显示在 <strong>动画编辑器</strong> 的 <strong>节点列表</strong> 区域。详情可参考 <a href="./animation-editor#2-节点列表">熟悉动画编辑器 — 节点列表</a>。</p><p>Animation 组件也提供了一些常用的动画控制函数，若要通过脚本程序化控制动画，请参考 <a href="./animation-component">使用脚本控制动画</a>。</p>',11),l=[r];function s(d,m,c,p,h,g){return n(),a("div",null,l)}const u=t(i,[["render",s]]);export{f as __pageData,u as default};
