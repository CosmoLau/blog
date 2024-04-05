import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.uQk9_EO2.js";const _=JSON.parse('{"title":"WebGL 1.0 向下兼容支持","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/webgl-100-fallback.md","filePath":"zh/shader/webgl-100-fallback.md","lastUpdated":1712305443000}'),n={name:"zh/shader/webgl-100-fallback.md"},l=e(`<h1 id="webgl-1-0-向下兼容支持" tabindex="-1">WebGL 1.0 向下兼容支持 <a class="header-anchor" href="#webgl-1-0-向下兼容支持" aria-label="Permalink to &quot;WebGL 1.0 向下兼容支持&quot;">​</a></h1><p>由于 WebGL 1.0 仅支持 GLSL 100 标准语法，因此在 Cocos Shader 编译时会提供 GLSL 300 ES 转 GLSL 100 的向下兼容代码（fallback shader），开发者基本不需关心这层变化。</p><p>需要注意的是目前的自动向下兼容策略仅支持一些基本的格式转换，如果使用了 GLSL 300 ES 独有的函数（例如 <code>texelFetch</code>、<code>textureGrad</code>）或一些特有的扩展（<code>extensions</code>），推荐根据 <code>__VERSION__</code> 宏定义判断 GLSL 版本，自行实现更稳定精确的向下兼容，代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __VERSION__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GL_EXT_shader_texture_lod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> textureCubeLodEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(envmap, R, roughness);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> textureCube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(envmap, R);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> textureLod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(envmap, R, roughness);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>Cocos Shader 在编译时会解析所有已经是常量的宏控制流，生成不同版本的 GLSL Shader 代码。</p>`,5),t=[l];function h(p,k,d,r,c,o){return i(),a("div",null,t)}const E=s(n,[["render",h]]);export{_ as __pageData,E as default};
