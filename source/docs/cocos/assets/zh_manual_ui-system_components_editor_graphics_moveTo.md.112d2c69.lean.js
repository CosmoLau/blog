import{_ as s,v as a,b as t,R as o}from"./chunks/framework.5ffcbaff.js";const e="/docs/cocos/assets/moveTo.8948b88b.png",D=JSON.parse('{"title":"moveTo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/graphics/moveTo.md","filePath":"zh/manual/ui-system/components/editor/graphics/moveTo.md"}'),n={name:"zh/manual/ui-system/components/editor/graphics/moveTo.md"},l=o(`<h1 id="moveto" tabindex="-1">moveTo <a class="header-anchor" href="#moveto" aria-label="Permalink to &quot;moveTo&quot;">​</a></h1><p><code>moveTo</code> 表示一条路径的起点。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">路径的目标位置的 x 坐标</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">路径的目标位置的 y 坐标</td></tr></tbody></table><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Graphics)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">150</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><a href="./moveTo.png"><img src="`+e+'"></a></p><hr><p>返回 <a href="./../graphics.html">Graphics 组件参考</a></p>',8),p=[l];function r(c,i,y,d,h,m){return a(),t("div",null,p)}const F=s(n,[["render",r]]);export{D as __pageData,F as default};
