import{_ as s,v as n,b as a,R as l}from"./chunks/framework.5ffcbaff.js";const d=JSON.parse('{"title":"使用宏定义实现函数替换","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/function-replace.md","filePath":"zh/manual/shader/surface-shader/function-replace.md"}'),p={name:"zh/manual/shader/surface-shader/function-replace.md"},e=l(`<h1 id="使用宏定义实现函数替换" tabindex="-1">使用宏定义实现函数替换 <a class="header-anchor" href="#使用宏定义实现函数替换" aria-label="Permalink to &quot;使用宏定义实现函数替换&quot;">​</a></h1><p>有时候需要制作一些公用的函数供不同的需求场景使用， 以降低代码量和维护成本。</p><p>但流程里的某些函数，我们希望在某些场合替换为特定版本，以满足特定需求。</p><p>可以通过宏定义机制来完成。</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//example.chunk</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#ifndef</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_USER_MODIFY_SOMETHING</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ModifySomething</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//do something here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Before</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//do something here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">After</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//do something here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myFunc</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">Before</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">ModifySomething</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">After</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>可以看到，在上面的代码中，myFunc 拥有完整的调用流程。如果想修改 ModifySomething 的实现，只需要在 #include example.chunk 之前，定义 CC_USER_MODIFY_SOMETHING 宏，并实现自己的 ModifySomething 函数即可。</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_USER_MODIFY_SOMETHING</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ModifySomething</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//do what you want</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">example.chunk</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><blockquote><p>注意，<strong>重载函数定义要放在 include 前面</strong>。</p></blockquote><p>这个机制在 Surface Shader 系统中被广泛应用，比如前面提到的 lighting-models/includes/common 中的 SurfacesFragmentModifySharedData 函数。</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// user-defined-common-surface.chunk:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// base surface function</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#ifndef</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SurfacesFragmentModifySharedData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inout SurfacesMaterialData </span><span style="color:#A6ACCD;font-style:italic;">surfaceData</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    .................</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// effect</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this function needs overriding</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SurfacesFragmentModifySharedData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inout SurfacesMaterialData </span><span style="color:#A6ACCD;font-style:italic;">surfaceData</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    .............</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// base functions should place after override functions</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">user-defined-common-surface.chunk</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,10),o=[e];function t(c,i,r,y,F,D){return n(),a("div",null,o)}const f=s(p,[["render",t]]);export{d as __pageData,f as default};
