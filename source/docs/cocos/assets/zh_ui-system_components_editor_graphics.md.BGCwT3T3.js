import{_ as s,c as i,o as t,a4 as a}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/graphics.BjkUw8el.png",o=JSON.parse('{"title":"Graphics 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/graphics.md","filePath":"zh/ui-system/components/editor/graphics.md","lastUpdated":1712305443000}'),l={name:"zh/ui-system/components/editor/graphics.md"},h=a('<h1 id="graphics-组件参考" tabindex="-1">Graphics 组件参考 <a class="header-anchor" href="#graphics-组件参考" aria-label="Permalink to &quot;Graphics 组件参考&quot;">​</a></h1><p>Graphics 组件提供了一系列绘画接口，这些接口参考了 Canvas 的绘画接口来进行实现。</p><p><img src="'+e+`" alt="graphics"></p><p>新建一个空节点，然后点击 <strong>属性检查器</strong> 下方的 <strong>添加组件</strong> 按钮，从 <strong>UI/Render</strong> 中选择 <strong>Graphics</strong>，即可添加 Graphics 组件到节点上。</p><p>Graphics 脚本接口请参考 <a href="./__APIDOC__/zh/class/Graphics">Graphics API</a>。</p><p>关于使用可以参考范例 <strong>Graphics</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/14.graphics" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.8/assets/cases/ui/14.graphics" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="graphics-组件属性" tabindex="-1">Graphics 组件属性 <a class="header-anchor" href="#graphics-组件属性" aria-label="Permalink to &quot;Graphics 组件属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./../engine/ui-material">CustomMaterial</a></td><td style="text-align:left;">自定义材质，可用于实现溶解、外发光等渲染效果。</td></tr><tr><td style="text-align:left;"><a href="./graphics/lineWidth">LineWidth</a></td><td style="text-align:left;">设置或返回当前的线条宽度</td></tr><tr><td style="text-align:left;"><a href="./graphics/lineJoin">LineJoin</a></td><td style="text-align:left;">设置或返回两条线相交时，所创建的拐角类型</td></tr><tr><td style="text-align:left;"><a href="./graphics/lineCap">LineCap</a></td><td style="text-align:left;">设置或返回线条的结束端点样式</td></tr><tr><td style="text-align:left;"><a href="./graphics/strokeColor">StrokeColor</a></td><td style="text-align:left;">设置或返回笔触的颜色</td></tr><tr><td style="text-align:left;"><a href="./graphics/fillColor">FillColor</a></td><td style="text-align:left;">设置或返回填充绘画的颜色</td></tr><tr><td style="text-align:left;"><a href="./graphics/miterLimit">MiterLimit</a></td><td style="text-align:left;">设置或返回最大斜接长度</td></tr></tbody></table><h2 id="绘图接口" tabindex="-1">绘图接口 <a class="header-anchor" href="#绘图接口" aria-label="Permalink to &quot;绘图接口&quot;">​</a></h2><h3 id="路径" tabindex="-1">路径 <a class="header-anchor" href="#路径" aria-label="Permalink to &quot;路径&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./graphics/moveTo">moveTo</a> (x, y)</td><td style="text-align:left;">把路径移动到画布中的指定点，不创建线条</td></tr><tr><td style="text-align:left;"><a href="./graphics/lineTo">lineTo</a> (x, y)</td><td style="text-align:left;">添加一个新点，然后在画布中创建从该点到最后指定点的线条</td></tr><tr><td style="text-align:left;"><a href="./graphics/bezierCurveTo">bezierCurveTo</a> (c1x, c1y, c2x, c2y, x, y)</td><td style="text-align:left;">创建三次方贝塞尔曲线</td></tr><tr><td style="text-align:left;"><a href="./graphics/quadraticCurveTo">quadraticCurveTo</a> (cx, cy, x, y)</td><td style="text-align:left;">创建二次贝塞尔曲线</td></tr><tr><td style="text-align:left;"><a href="./graphics/arc">arc</a> (cx, cy, r, startAngle, endAngle, counterclockwise)</td><td style="text-align:left;">创建弧/曲线（用于创建圆形或部分圆）</td></tr><tr><td style="text-align:left;"><a href="./graphics/ellipse">ellipse</a> (cx, cy, rx, ry)</td><td style="text-align:left;">创建椭圆</td></tr><tr><td style="text-align:left;"><a href="./graphics/circle">circle</a> (cx, cy, r)</td><td style="text-align:left;">创建圆形</td></tr><tr><td style="text-align:left;"><a href="./graphics/rect">rect</a> (x, y, w, h)</td><td style="text-align:left;">创建矩形</td></tr><tr><td style="text-align:left;"><a href="./graphics/close">close</a> ()</td><td style="text-align:left;">创建从当前点回到起始点的路径</td></tr><tr><td style="text-align:left;"><a href="./graphics/stroke">stroke</a> ()</td><td style="text-align:left;">绘制已定义的路径</td></tr><tr><td style="text-align:left;"><a href="./graphics/fill">fill</a> ()</td><td style="text-align:left;">填充当前绘图（路径）</td></tr><tr><td style="text-align:left;"><a href="./graphics/clear">clear</a> ()</td><td style="text-align:left;">清除所有路径</td></tr></tbody></table><h3 id="通过脚本代码设置绘制图案" tabindex="-1">通过脚本代码设置绘制图案 <a class="header-anchor" href="#通过脚本代码设置绘制图案" aria-label="Permalink to &quot;通过脚本代码设置绘制图案&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Graphics } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.lineWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.fillColor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromHEX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ff0000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,13),n=[h];function r(p,k,d,g,E,c){return t(),i("div",null,n)}const f=s(l,[["render",r]]);export{o as __pageData,f as default};