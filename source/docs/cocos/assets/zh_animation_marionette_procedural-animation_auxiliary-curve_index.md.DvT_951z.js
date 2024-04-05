import{_ as a,c as e,o,a4 as i}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/auxiliary-curve.DKCzrb87.png",f=JSON.parse('{"title":"辅助曲线（实验性）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/marionette/procedural-animation/auxiliary-curve/index.md","filePath":"zh/animation/marionette/procedural-animation/auxiliary-curve/index.md","lastUpdated":1712305443000}'),r={name:"zh/animation/marionette/procedural-animation/auxiliary-curve/index.md"},l=i('<h1 id="辅助曲线-实验性" tabindex="-1">辅助曲线（实验性） <a class="header-anchor" href="#辅助曲线-实验性" aria-label="Permalink to &quot;辅助曲线（实验性）&quot;">​</a></h1><p><img src="'+t+'" alt="auxiliary-curve.png"></p><blockquote><p><strong>注意</strong>：辅助曲线是实验性功能，请谨慎使用。Cocos Creator 期待你的反馈。</p></blockquote><h2 id="动机" tabindex="-1">动机 <a class="header-anchor" href="#动机" aria-label="Permalink to &quot;动机&quot;">​</a></h2><p>有时，在角色进行某个动作时，除了骨骼的可视变化，还伴随着其它一些关联属性的变化。例如：</p><ul><li><p>选择性地使用 IK 纠正脚的位置：当角色原地站立时进行纠正；在角色行走时不进行纠正。</p></li><li><p>从跑开始起跳动作时，可能需要根据起跳时两脚的方位来决定是使用左脚起跳的动作还是右脚起跳的动作。这实质上是需要跑动作中反应出两脚的方位变化。</p></li><li><p>伴随着动作的进行，有材质变化、粒子特效变化、声音变化等。</p></li></ul><p>其中的有些变化可以通过 <a href="./../../../embedded-player">嵌入播放器</a> 实现。但有时嵌入播放器无法胜任：</p><ul><li><p>嵌入播放器所描述的变化无法像骨骼那样参与混合。</p><p>例如，当动作淡出时，嵌入播放器将戛然而止；两个动作的嵌入播放器是独立的——即使它们描述的可能的是同一份材质的颜色变化，但它们的效果无法跟随动作进行混合。</p></li><li><p>嵌入播放器描述的值的变化无法直接在动画图中使用。 动画图中无法直接地读取嵌入播放器的结果。即使可以，也需要较为繁琐的设置步骤。</p></li></ul><blockquote><p>这并不是说我们不再鼓励使用嵌入播放器。当你没有上述的混合需求时，嵌入播放器仍是一种快速附加其它效果在动作上的途径。</p></blockquote><p>因此，Cocos Creator 引入了一项新的功能来解决上述问题。</p><h2 id="概念-辅助曲线" tabindex="-1">概念：辅助曲线 <a class="header-anchor" href="#概念-辅助曲线" aria-label="Permalink to &quot;概念：辅助曲线&quot;">​</a></h2><p><strong>辅助曲线</strong> 是一条带名称的 <strong>浮点数</strong> 曲线，它的值作为姿态中除骨骼外的另一项属性：</p><ul><li><p>从动画剪辑中采样姿态时，辅助曲线的也会被采样；</p></li><li><p>混合姿态时，同名的辅助曲线值也会被混合。</p></li></ul><p>如其名，辅助曲线在骨骼动画中扮演了辅助角色。辅助曲线的来源和应用都是由使用者定义的。</p><blockquote><p>辅助曲线和骨骼动画之间最大的区别就是：骨骼动画的值应用时会被写入场景中，驱动骨骼进而产生可视的模型动画；但辅助曲线的值不会直接产生可视效果，它仅可以被读取，由使用者决定其效用。</p></blockquote><h2 id="编辑辅助曲线" tabindex="-1">编辑辅助曲线 <a class="header-anchor" href="#编辑辅助曲线" aria-label="Permalink to &quot;编辑辅助曲线&quot;">​</a></h2><p>在动画剪辑编辑器中，可编辑 <a href="./../../../animation-auxiliary-curve">动画剪辑中的辅助曲线</a>。</p><p>在姿态图中，可通过 <a href="./../pose-graph/pose-nodes/modify-pose#设置辅助曲线">设置辅助曲线结点</a> 设置或修改姿态的辅助曲线当前值。</p><h2 id="使用辅助曲线" tabindex="-1">使用辅助曲线 <a class="header-anchor" href="#使用辅助曲线" aria-label="Permalink to &quot;使用辅助曲线&quot;">​</a></h2><p>辅助曲线可在动画图和动画控制器中读取和使用：</p><ul><li><p>在 <a href="./../../state-transition">过渡条件</a> 中引用辅助曲线。</p></li><li><p>姿态图中，有些姿态结点的属性可以通过辅助曲线的当前值来指定。例如：</p><ul><li><a href="./../pose-graph/pose-nodes/modify-pose#应用变换">应用变换结点</a> 的强度值可使用辅助曲线来指定。</li></ul></li><li><p><a href="./../../animation-controller">动画控制器</a> 组件提供了方法以读取辅助曲线的当前值。</p></li></ul>',21),p=[l];function n(s,c,u,d,h,m){return o(),e("div",null,p)}const b=a(r,[["render",n]]);export{f as __pageData,b as default};