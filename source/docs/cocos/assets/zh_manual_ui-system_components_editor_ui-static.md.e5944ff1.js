import{_ as s,v as a,b as n,R as o}from"./chunks/framework.5ffcbaff.js";const C=JSON.parse('{"title":"UIStaticBatch 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/ui-static.md","filePath":"zh/manual/ui-system/components/editor/ui-static.md"}'),t={name:"zh/manual/ui-system/components/editor/ui-static.md"},l=o(`<h1 id="uistaticbatch-组件参考" tabindex="-1">UIStaticBatch 组件参考 <a class="header-anchor" href="#uistaticbatch-组件参考" aria-label="Permalink to &quot;UIStaticBatch 组件参考&quot;">​</a></h1><blockquote><p><strong>注意</strong>：我们在 v3.4.1 中采用了新的渲染合批策略，普通动态合批组件在性能上会得到有效提升，因此不再建议使用 UIStaticBatch 组件进行手动管理。</p></blockquote><p>UI 静态合批组件是一个提升 UI 渲染性能的组件，脚本在初始化当前帧渲染的过程中会收集该 UI 节点树下的所有渲染数据（除了模型、Mask 和 Graphics），存储为一个静态的 IA 渲染数据。并在后续的渲染流程中使用固定数据进行渲染，不再遍历其节点树，此后的坐标变换将不再生效。当你需要修改静态数据的时候，可以调用 markAsDirty 接口来重新触发渲染数据收集标记。</p><p>遮罩的组件接口请参考 <a href="./__APIDOC__/zh/class/UIStaticBatch.html">UIStaticBatch API</a>。</p><p>关于使用可以参考范例 <strong>UIStaticBatch</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.7/assets/cases/ui/19.static-ui" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.7/assets/cases/ui/19.static-ui" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="通过脚本代码开启静态合批" tabindex="-1">通过脚本代码开启静态合批 <a class="header-anchor" href="#通过脚本代码开启静态合批" aria-label="Permalink to &quot;通过脚本代码开启静态合批&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_decorator</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ccclass</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> property </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _decorator</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">ccclass</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">example</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uiStatic</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">UIStaticBatch</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 选择你要开始静态合批的时机，调用此接口开始静态合批</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uiStatic</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">markAsDirty</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>使用该组件有以下几点需要注意：</p><ol><li>不要频繁触发静态合批，因为会清空原先存储的 IA 数据重新采集，会有一定性能和内存损耗。</li><li>不适用于子节点树中包含 Mask、Graphics 和 Model 的情况。</li><li>对于节点树不会有任何改变的节点（例如 2D 地图），在 <strong>开始静态合批之后</strong> 即可将所有子节点删除，以得到最好的性能和内存表现。</li></ol>`,10),p=[l];function e(c,r,i,y,D,F){return a(),n("div",null,p)}const h=s(t,[["render",e]]);export{C as __pageData,h as default};
