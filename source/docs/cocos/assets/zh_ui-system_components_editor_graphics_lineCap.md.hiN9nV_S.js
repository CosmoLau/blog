import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/lineCap.BycrCBC1.png",y=JSON.parse('{"title":"lineCap","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/graphics/lineCap.md","filePath":"zh/ui-system/components/editor/graphics/lineCap.md","lastUpdated":1712336288000}'),n={name:"zh/ui-system/components/editor/graphics/lineCap.md"},l=t(`<h1 id="linecap" tabindex="-1">lineCap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;lineCap&quot;">​</a></h1><p><code>lineCap</code> 属性设置或返回线条末端线帽的样式。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Graphics.LineCap.BUTT</td><td style="text-align:left;">默认。向线条的每个末端添加平直的边缘。</td></tr><tr><td style="text-align:left;">Graphics.LineCap.ROUND</td><td style="text-align:left;">向线条的每个末端添加圆形线帽。</td></tr><tr><td style="text-align:left;">Graphics.LineCap.SQUARE</td><td style="text-align:left;">向线条的每个末端添加正方形线帽。</td></tr></tbody></table><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.lineCap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Graphics.LineCap.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROUND</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.lineWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><img src="`+e+'" alt="lineCap.png"></p><hr><p>返回 <a href="./../graphics">Graphics 组件参考</a></p>',8),h=[l];function p(k,r,d,E,c,o){return a(),i("div",null,h)}const C=s(n,[["render",p]]);export{y as __pageData,C as default};
