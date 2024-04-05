import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const o=JSON.parse('{"title":"使用宏定义实现函数替换","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/surface-shader/function-replace.md","filePath":"zh/shader/surface-shader/function-replace.md","lastUpdated":1712305443000}'),l={name:"zh/shader/surface-shader/function-replace.md"},e=n(`<h1 id="使用宏定义实现函数替换" tabindex="-1">使用宏定义实现函数替换 <a class="header-anchor" href="#使用宏定义实现函数替换" aria-label="Permalink to &quot;使用宏定义实现函数替换&quot;">​</a></h1><p>有时候需要制作一些公用的函数供不同的需求场景使用， 以降低代码量和维护成本。</p><p>但流程里的某些函数，我们希望在某些场合替换为特定版本，以满足特定需求。</p><p>可以通过宏定义机制来完成。</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//example.chunk</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USER_MODIFY_SOMETHING</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ModifySomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //do something here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //do something here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> After</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //do something here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ModifySomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    After</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可以看到，在上面的代码中，myFunc 拥有完整的调用流程。如果想修改 ModifySomething 的实现，只需要在 #include example.chunk 之前，定义 CC_USER_MODIFY_SOMETHING 宏，并实现自己的 ModifySomething 函数即可。</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USER_MODIFY_SOMETHING</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ModifySomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //do what you want</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;example.chunk&gt;</span></span></code></pre></div><blockquote><p>注意，<strong>重载函数定义要放在 include 前面</strong>。</p></blockquote><p>这个机制在 Surface Shader 系统中被广泛应用，比如前面提到的 lighting-models/includes/common 中的 SurfacesFragmentModifySharedData 函数。</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user-defined-common-surface.chunk:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// base surface function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SurfacesFragmentModifySharedData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inout SurfacesMaterialData </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">surfaceData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .................</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// effect</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this function needs overriding</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_FRAGMENT_MODIFY_SHARED_DATA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SurfacesFragmentModifySharedData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inout SurfacesMaterialData </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">surfaceData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .............</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// base functions should place after override functions</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;user-defined-common-surface.chunk&gt;</span></span></code></pre></div>`,10),p=[e];function h(t,k,d,r,c,E){return a(),i("div",null,p)}const y=s(l,[["render",h]]);export{o as __pageData,y as default};
