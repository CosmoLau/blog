import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.uQk9_EO2.js";const g=JSON.parse('{"title":"Upgrade Guide: Effect from v3.4.x to v3.5.0","description":"","frontmatter":{},"headers":[],"relativePath":"en/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md","filePath":"en/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md","lastUpdated":1712305443000}'),e={name:"en/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md"},l=n(`<h1 id="upgrade-guide-effect-from-v3-4-x-to-v3-5-0" tabindex="-1">Upgrade Guide: Effect from v3.4.x to v3.5.0 <a class="header-anchor" href="#upgrade-guide-effect-from-v3-4-x-to-v3-5-0" aria-label="Permalink to &quot;Upgrade Guide: Effect from v3.4.x to v3.5.0&quot;">​</a></h1><h2 id="macro-tags-and-functional-macros" tabindex="-1">Macro tags and functional macros <a class="header-anchor" href="#macro-tags-and-functional-macros" aria-label="Permalink to &quot;Macro tags and functional macros&quot;">​</a></h2><p>The effect syntax for Macro Tags and Functional Macros have been upgraded to avoid the occupation of standard glsl define, old effects in project will be upgrade automatically, but if you are using external effects without meta or writing a new one, you have to pay attention.</p><ul><li>New syntax for Macro Tag: <code>#pragma define-meta</code></li><li>New syntax for Funtional Macro: <code>#pragma define</code></li></ul><p>You can refer to <a href="./../shader/macros#macro-tags">Effect Syntax - macro-tags</a> for detailed information.</p><h2 id="model-level-shadow-bias" tabindex="-1">Model level shadow bias <a class="header-anchor" href="#model-level-shadow-bias" aria-label="Permalink to &quot;Model level shadow bias&quot;">​</a></h2><p>In v3.5, we supported individual shadow bias configuration for models, this allows detailed control of shadow effect on simple or complex surfaces. If you have any customized effect, you may need to upgrade them for shadow bias configuration to take effect.</p><blockquote><p><strong>Note</strong>: If shadow map of lights are disabled, or if <code>CC_TRANSFER_SHADOW(pos)</code> is not invoked in your vertex shader, then you won&#39;t need to upgrade it.</p></blockquote><h3 id="upgrade-instructions" tabindex="-1">Upgrade instructions <a class="header-anchor" href="#upgrade-instructions" aria-label="Permalink to &quot;Upgrade instructions&quot;">​</a></h3><p>There are <strong>four elements</strong> to add to your effect file, they are listed below:</p><ol><li><p>Output varying define in the vertex shader</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span>    out mediump vec2 v_shadowBias;</span></span>
<span class="line"><span>#endif</span></span></code></pre></div></li><li><p>Calculation of shadow bias in the vertex shader</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span>    v_shadowBias = CCGetShadowBias();</span></span>
<span class="line"><span>#endif</span></span></code></pre></div></li><li><p>Input varying define in the fragment shader</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span>    in mediump vec2 v_shadowBias;</span></span>
<span class="line"><span>#endif</span></span></code></pre></div></li><li><p>Shadow bias assignment in the fragment shader</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span>    s.shadowBias = v_shadowBias;</span></span>
<span class="line"><span>#endif</span></span></code></pre></div></li></ol><h3 id="example-code-snippets" tabindex="-1">Example (code snippets) <a class="header-anchor" href="#example-code-snippets" aria-label="Permalink to &quot;Example (code snippets)&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Vertex shader</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram xxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Header file area</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;cc-xxx&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;cc-xxxx&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Vs output area</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out vec3 v_xxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        out mediump vec2 v_shadowBias;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out vec3 v_xxxx;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Vs execution area</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            v_shadowBias </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCGetShadowBias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xxxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Pixel shader</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram xxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Header file area</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;cc-xxx&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;cc-xxxx&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Vs output area</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    in vec3 v_xxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        in mediump vec2 v_shadowBias;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    in vec3 v_xxxx;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Ps execution area</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (out StandardSurface s) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            s.shadowBias </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v_shadowBias;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xxxx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div>`,13),p=[l];function t(h,d,k,o,r,c){return i(),a("div",null,p)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
