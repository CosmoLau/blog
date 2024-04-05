import{_ as a,c as s,o as t,a4 as e}from"./chunks/framework.uQk9_EO2.js";const g=JSON.parse('{"title":"表面材质数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/surface-shader/surface-data-struct.md","filePath":"zh/shader/surface-shader/surface-data-struct.md","lastUpdated":1712305443000}'),i={name:"zh/shader/surface-shader/surface-data-struct.md"},n=e(`<h1 id="表面材质数据结构" tabindex="-1">表面材质数据结构 <a class="header-anchor" href="#表面材质数据结构" aria-label="Permalink to &quot;表面材质数据结构&quot;">​</a></h1><h2 id="什么是表面材质数据" tabindex="-1">什么是表面材质数据 <a class="header-anchor" href="#什么是表面材质数据" aria-label="Permalink to &quot;什么是表面材质数据&quot;">​</a></h2><p>Surface Shader 中，根据不同<a href="./lighting-mode">光照模型</a>的需求，提供了对应的表面材质数据结构 <strong>SurfaceMaterialData</strong> 。</p><p>表面材质数据结构体定义了一系列用于计算物体表面最终颜色的物理参数，如 反照率、粗糙度等。</p><blockquote><p>注意：材质数据模型与光照模型必须关联使用</p></blockquote><h2 id="表面材质数据类型" tabindex="-1">表面材质数据类型 <a class="header-anchor" href="#表面材质数据类型" aria-label="Permalink to &quot;表面材质数据类型&quot;">​</a></h2><table><thead><tr><th>材质数据类型</th><th>说明</th></tr></thead><tbody><tr><td>standard</td><td>粗糙度和金属性描述的标准 PBR 材质，和 SP、Blender、Maya 等软件中的材质节点类似</td></tr><tr><td>toon</td><td>简单的卡通材质，有多种 shade 颜色处理</td></tr></tbody></table><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><p>对应的表面材质数据结构存放在 <strong>internal/chunks/data-structures/</strong> 目录下。</p><p>只需要 include 对应的表面材质数据结构头文件，就可以使用不同类别的数据结构。</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//PBR 表面材质</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;surfaces/data-structures/standard&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// toon 表面材质</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//#include &lt;surfaces/data-structures/toon&gt; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SurfacesFragmentModifySharedData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inout SurfacesMaterialData </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">surfaceData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // set user-defined data to surfaceData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),r=[n];function l(h,d,p,c,o,k){return t(),s("div",null,r)}const _=a(i,[["render",l]]);export{g as __pageData,_ as default};
