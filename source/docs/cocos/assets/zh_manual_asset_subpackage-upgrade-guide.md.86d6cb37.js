import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const u=JSON.parse('{"title":"资源分包升级指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/subpackage-upgrade-guide.md","filePath":"zh/manual/asset/subpackage-upgrade-guide.md"}'),e={name:"zh/manual/asset/subpackage-upgrade-guide.md"},o=l(`<h1 id="资源分包升级指南" tabindex="-1">资源分包升级指南 <a class="header-anchor" href="#资源分包升级指南" aria-label="Permalink to &quot;资源分包升级指南&quot;">​</a></h1><blockquote><p>文：Santy-Wang、Xunyi</p><p>本文将详细介绍 Cocos Creator 3D 的小游戏子包升级到 Asset Bundle 的注意事项。v2.4 的资源分包与 v3.0 差别不大，无需升级。</p></blockquote><p>在 v2.4 之前，<a href="https://github.com/cocos/cocos-docs/blob/e02ac31bab12d3ee767c0549050b0e42bd22bc5b/zh/scripting/subpackage.md" target="_blank" rel="noreferrer">分包加载</a> 功能仅支持各类小游戏平台，如微信小游戏、OPPO 小游戏等。但随着 Creator 的发展，开发者对分包的需求不断增加，例如多平台支持，原有的分包加载已经远远不能满足了。所以，Creator 从 v2.4 开始正式支持功能更为完整的 <strong>Asset Bundle</strong>。</p><ul><li>对 <strong>美术策划</strong> 而言，项目中的所有资源，例如场景、动画、Prefab 都不需要修改，也不用升级。</li><li>对 <strong>程序</strong> 而言，影响主要体现在原先代码中使用的 <code>loader.downloader.loadSubpackage</code> 需要改为 Asset Manager 中的 <code>assetManager.loadBundle</code>。以下将详细介绍这部分内容。</li></ul><blockquote><p><strong>注意</strong>：如果你在旧项目中使用了分包功能，也就是在 <strong>属性检查器</strong> 中勾选了 <strong>配置为子包</strong> 选项，那么当项目升级到 v2.4 之后，将自动转变为一个普通文件夹。你可以参考这里进行 Asset Bundle 的配置：</p></blockquote><p><a href="./bundle.html">配置 Asset Bundle</a></p><h2 id="需要手动升级的情况" tabindex="-1">需要手动升级的情况 <a class="header-anchor" href="#需要手动升级的情况" aria-label="Permalink to &quot;需要手动升级的情况&quot;">​</a></h2><p>你在自己的代码中使用了 <code>loader.downloader.loadSubpackage</code> 来加载分包。</p><h2 id="升级步骤" tabindex="-1">升级步骤 <a class="header-anchor" href="#升级步骤" aria-label="Permalink to &quot;升级步骤&quot;">​</a></h2><ul><li><p><strong>备份好旧项目</strong></p></li><li><p>在 Dashboard 中使用 Cocos Creator v3.0 打开需要升级分包的旧项目，Creator 会对有影响的资源重新导入。第一次导入时会稍微多花一点时间，导入完毕后就会打开编辑器主窗口。然后使用代码编辑器将所有 <code>loader.downloader.loadSubpackage</code> 替换为 <code>assetManager.loadBundle</code>。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 修改前</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">downloader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadSubpackage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadRes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub1/sprite-frames/background</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SpriteFrame</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 修改后</span></span>
<span class="line"><span style="color:#A6ACCD;">assetManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadBundle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">bundle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 传入该资源相对 Asset Bundle 根目录的相对路径</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">bundle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sprite-frames/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SpriteFrame</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><blockquote><p><strong>注意</strong>：加载 Asset Bundle 中的资源需要使用 Asset Bundle 相关的 API，具体请查看 API 文档 <a href="__APIDOC__/zh/class/AssetManager.Bundle">Asset Bundle</a>。</p></blockquote></li></ul><h2 id="asset-bundle-的使用方式" tabindex="-1">Asset Bundle 的使用方式 <a class="header-anchor" href="#asset-bundle-的使用方式" aria-label="Permalink to &quot;Asset Bundle 的使用方式&quot;">​</a></h2><p>关于 Asset Bundle 的具体使用方式，请参考文档 <a href="./bundle.html">Asset Bundle</a>。</p>`,12),p=[o];function t(r,c,d,D,y,F){return a(),n("div",null,p)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};
