import{_ as s,v as a,b as n,R as t}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/lineCap.730d4e9c.png",d=JSON.parse('{"title":"lineCap","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/graphics/lineCap.md","filePath":"zh/manual/ui-system/components/editor/graphics/lineCap.md"}'),e={name:"zh/manual/ui-system/components/editor/graphics/lineCap.md"},p=t(`<h1 id="linecap" tabindex="-1">lineCap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;lineCap&quot;">​</a></h1><p><code>lineCap</code> 属性设置或返回线条末端线帽的样式。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Graphics.LineCap.BUTT</td><td style="text-align:left;">默认。向线条的每个末端添加平直的边缘。</td></tr><tr><td style="text-align:left;">Graphics.LineCap.ROUND</td><td style="text-align:left;">向线条的每个末端添加圆形线帽。</td></tr><tr><td style="text-align:left;">Graphics.LineCap.SQUARE</td><td style="text-align:left;">向线条的每个末端添加正方形线帽。</td></tr></tbody></table><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Graphics)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineCap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Graphics</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LineCap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ROUND</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><a href="./lineCap.png"><img src="`+l+'"></a></p><hr><p>返回 <a href="./../graphics.html">Graphics 组件参考</a></p>',8),o=[p];function c(r,i,C,y,D,A){return a(),n("div",null,o)}const h=s(e,[["render",c]]);export{d as __pageData,h as default};