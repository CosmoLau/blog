import{_ as s,c as i,o as t,a5 as a}from"./chunks/framework.CqnjdYks.js";const e="/docs/cocos/assets/moveTo.B1GkmGWP.png",m=JSON.parse('{"title":"moveTo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/graphics/moveTo.md","filePath":"zh/manual/ui-system/components/editor/graphics/moveTo.md"}'),n={name:"zh/manual/ui-system/components/editor/graphics/moveTo.md"},h=a(`<h1 id="moveto" tabindex="-1">moveTo <a class="header-anchor" href="#moveto" aria-label="Permalink to &quot;moveTo&quot;">​</a></h1><p><code>moveTo</code> 表示一条路径的起点。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">路径的目标位置的 x 坐标</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">路径的目标位置的 y 坐标</td></tr></tbody></table><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><a href="./moveTo.png"><img src="`+e+'"></a></p><hr><p>返回 <a href="./../graphics.html">Graphics 组件参考</a></p>',8),l=[h];function p(o,k,r,d,c,E){return t(),i("div",null,l)}const y=s(n,[["render",p]]);export{m as __pageData,y as default};
