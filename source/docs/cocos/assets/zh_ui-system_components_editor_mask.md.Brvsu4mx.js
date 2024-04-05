import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/mask.CI1JXxRG.png",h="/docs/cocos/assets/mask-rect.DebEsgjJ.png",e="/docs/cocos/assets/mask-ellipse.VFajHrGP.png",k="/docs/cocos/assets/mask-graphics.b8L8iMHe.png",l="/docs/cocos/assets/mask-image.B2D5qGyb.png",_=JSON.parse('{"title":"Mask（遮罩）组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/mask.md","filePath":"zh/ui-system/components/editor/mask.md","lastUpdated":1712305443000}'),p={name:"zh/ui-system/components/editor/mask.md"},r=t('<h1 id="mask-遮罩-组件参考" tabindex="-1">Mask（遮罩）组件参考 <a class="header-anchor" href="#mask-遮罩-组件参考" aria-label="Permalink to &quot;Mask（遮罩）组件参考&quot;">​</a></h1><p>Mask 用于规定子节点可渲染的范围，默认带有 Mask 组件的节点会使用该节点的约束框（也就是 <strong>属性检查器</strong> 中 Node 组件的 <strong>ContentSize</strong> 规定的范围）创建一个矩形渲染遮罩，该节点的所有子节点都会依据这个遮罩进行裁剪，遮罩范围外的将不会渲染。</p><p><img src="'+n+'" alt="mask"></p><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后从 <strong>UI</strong> 中选择 <strong>Mask</strong>，即可添加 Mask 组件到节点上。注意该组件不能添加到有其他渲染组件（如 <strong>Sprite</strong>、<strong>Label</strong> 等）的节点上。</p><p>遮罩的组件接口请参考 <a href="./__APIDOC__/zh/class/Mask">Mask API</a>。</p><p>关于使用可以参考范例 <strong>Mask</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/08.mask" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.8/assets/cases/ui/08.mask" target="_blank" rel="noreferrer">Gitee</a>）。</p><p>添加 Mask 组件后，会自动添加 <a href="./graphics">Graphics</a> 组件，请不要删除该组件。在 Type 为 <strong>SPRITE_STENCIL</strong> 时，Mask 组件会添加 Sprite 组件，该 Sprite 组件会为模板提供形状，同理请勿删除。</p><h2 id="mask-属性" tabindex="-1">Mask 属性 <a class="header-anchor" href="#mask-属性" aria-label="Permalink to &quot;Mask 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">Type</td><td style="text-align:left;">遮罩类型。包括 <strong>RECT</strong>、<strong>ELLIPSE</strong>、<strong>GRAPHICS_STENCIL</strong>、<strong>SPRITE_STENCIL</strong> 四种类型。</td></tr><tr><td style="text-align:left;">Segments</td><td style="text-align:left;">椭圆遮罩的曲线细分数，只在遮罩类型设为 <strong>ELLIPSE</strong> 时生效</td></tr><tr><td style="text-align:left;">Inverted</td><td style="text-align:left;">反向遮罩</td></tr></tbody></table><h3 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;Type&quot;">​</a></h3><h4 id="rect-矩形遮罩" tabindex="-1">RECT 矩形遮罩 <a class="header-anchor" href="#rect-矩形遮罩" aria-label="Permalink to &quot;RECT 矩形遮罩&quot;">​</a></h4><p><img src="'+h+'" alt="mask"></p><h4 id="ellipse-椭圆遮罩" tabindex="-1">ELLIPSE 椭圆遮罩 <a class="header-anchor" href="#ellipse-椭圆遮罩" aria-label="Permalink to &quot;ELLIPSE 椭圆遮罩&quot;">​</a></h4><p><img src="'+e+`" alt="mask"></p><p>可以在运行时通过代码设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Mask);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mask.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Mask.Type.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ELLIPSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mask.segments </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="graphics-stencil-自定义图形遮罩" tabindex="-1">GRAPHICS_STENCIL 自定义图形遮罩 <a class="header-anchor" href="#graphics-stencil-自定义图形遮罩" aria-label="Permalink to &quot;GRAPHICS_STENCIL 自定义图形遮罩&quot;">​</a></h4><p><img src="`+k+`" alt="mask"></p><p>可以在运行时通过代码设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.mask.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//const g = this.mask.graphics;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.lineWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.fillColor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromHEX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ff0000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h4 id="sprite-stencil-自定义图片遮罩" tabindex="-1">SPRITE_STENCIL 自定义图片遮罩 <a class="header-anchor" href="#sprite-stencil-自定义图片遮罩" aria-label="Permalink to &quot;SPRITE_STENCIL 自定义图片遮罩&quot;">​</a></h4><p><img src="`+l+`" alt="mask"></p><p>可以在运行时通过代码设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Mask);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mask.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Mask.Type.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SPRITE_STENCIL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sprite</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Sprite);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sprite.spriteFrame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.stencilSprite;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mask.alphaThreshold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p><strong>注意</strong>：</p><ol><li><p>节点添加了 Mask 组件之后，所有在该节点下的子节点，在渲染的时候都会受 Mask 影响。</p></li><li><p><strong>GRAPHICS_STENCIL</strong> 类型在这里没有做任何引擎需要的事，只是放开了对 graphics 操控，用户可以使用 mask 组件里的 graphics 属性来绘制自定义图形，但是节点的点击事件还是根据节点的尺寸来计算。</p></li><li><p><strong>SPRITE_STENCIL</strong> 类型默认需要一个图片资源，如果没有设置的话，相当于没有遮罩。</p></li></ol>`,26),E=[r];function g(d,o,c,y,C,F){return a(),i("div",null,E)}const u=s(p,[["render",g]]);export{_ as __pageData,u as default};
