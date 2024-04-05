import{_ as n,c as a,o as s,a4 as p}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"升级指南：粒子 从 v3.5.x 升级到 v3.6.0","description":"","frontmatter":{},"headers":[],"relativePath":"zh/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md","filePath":"zh/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md","lastUpdated":1712305443000}'),e={name:"zh/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md"},i=p(`<h1 id="升级指南-粒子-从-v3-5-x-升级到-v3-6-0" tabindex="-1">升级指南：粒子 从 v3.5.x 升级到 v3.6.0 <a class="header-anchor" href="#升级指南-粒子-从-v3-5-x-升级到-v3-6-0" aria-label="Permalink to &quot;升级指南：粒子 从 v3.5.x 升级到 v3.6.0&quot;">​</a></h1><h2 id="cpu-粒子" tabindex="-1">CPU 粒子 <a class="header-anchor" href="#cpu-粒子" aria-label="Permalink to &quot;CPU 粒子&quot;">​</a></h2><p>v3.6.0 粒子系统新增了 instance 支持，粒子 shader particle-vs-legacy.chunk 需要做如下修改：</p><p>原来的 layout：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec3 a_position; // center position</span></span>
<span class="line"><span>in vec3 a_texCoord;  // xy:vertex index,z:frame index</span></span>
<span class="line"><span>in vec3 a_texCoord1; // size</span></span>
<span class="line"><span>in vec3 a_texCoord2; // rotation</span></span>
<span class="line"><span>in vec4 a_color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_STRETCHED_BILLBOARD</span></span>
<span class="line"><span>  in vec3 a_color1; // velocity.x, velocity.y, velocity.z, scale</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_MESH</span></span>
<span class="line"><span>  in vec3 a_texCoord3;  // mesh vertices</span></span>
<span class="line"><span>  in vec3 a_normal;     // mesh normal</span></span>
<span class="line"><span>  in vec4 a_color1;     // mesh color</span></span>
<span class="line"><span>#endif</span></span></code></pre></div><p>现在的 layout：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec3 a_texCoord1;  // size</span></span>
<span class="line"><span>in vec3 a_texCoord2;  // rotation</span></span>
<span class="line"><span>in vec4 a_color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>in vec3 a_texCoord;  // xy:vertex index,z:frame index</span></span>
<span class="line"><span>#if !CC_INSTANCE_PARTICLE</span></span>
<span class="line"><span> in vec3 a_position;  // center position</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span>#if CC_INSTANCE_PARTICLE</span></span>
<span class="line"><span> in vec4 a_texCoord4; // xyz:position,z:frame index</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_STRETCHED_BILLBOARD</span></span>
<span class="line"><span>  in vec3 a_color1; // velocity.x, velocity.y, velocity.z, scale</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_MESH</span></span>
<span class="line"><span>  in vec3 a_texCoord3;  // mesh vertices</span></span>
<span class="line"><span>  in vec3 a_normal;     // mesh normal</span></span>
<span class="line"><span>  in vec4 a_color1;     // mesh color</span></span>
<span class="line"><span>#endif</span></span></code></pre></div><p>其它 shader 代码需要参考 v3.6.0 的 particle-vs-legacy.chunk 进行修改。</p><h2 id="gpu-粒子" tabindex="-1">GPU 粒子 <a class="header-anchor" href="#gpu-粒子" aria-label="Permalink to &quot;GPU 粒子&quot;">​</a></h2><p>GPU 粒子 shader particle-vs-gpu.chunk 需要做如下修改：</p><p>原来的 layout：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec4 a_position_starttime; // center position,particle start time</span></span>
<span class="line"><span>in vec4 a_size_uv;  // xyz:size, w:uv_0</span></span>
<span class="line"><span>in vec4 a_rotation_uv;  // xyz:rotation, w:uv_1</span></span>
<span class="line"><span>in vec4 a_color;</span></span>
<span class="line"><span>in vec4 a_dir_life;  // xyz:particle start velocity,w:particle lifetime</span></span>
<span class="line"><span>in float a_rndSeed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_MESH</span></span>
<span class="line"><span>  in vec3 a_texCoord;  // mesh uv</span></span>
<span class="line"><span>  in vec3 a_texCoord3;  // mesh vertices</span></span>
<span class="line"><span>  in vec3 a_normal;     // mesh normal</span></span>
<span class="line"><span>  in vec4 a_color1;     // mesh color</span></span>
<span class="line"><span>#endif</span></span></code></pre></div><p>现在的 layout</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec4 a_position_starttime; // center position,particle start time</span></span>
<span class="line"><span>in vec4 a_color;</span></span>
<span class="line"><span>in vec4 a_dir_life;  // xyz:particle start velocity,w:particle lifetime</span></span>
<span class="line"><span>in float a_rndSeed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if !CC_INSTANCE_PARTICLE</span></span>
<span class="line"><span>  in vec4 a_size_uv;  // xyz:size, w:uv_0</span></span>
<span class="line"><span>  in vec4 a_rotation_uv;  // xyz:rotation, w:uv_1</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span>#if CC_INSTANCE_PARTICLE</span></span>
<span class="line"><span>  in vec4 a_size_fid;  // xyz:size, w:fid</span></span>
<span class="line"><span>  in vec3 a_rotation;  // xyz:rotation</span></span>
<span class="line"><span>  in vec3 a_uv;</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#if CC_RENDER_MODE == RENDER_MODE_MESH</span></span>
<span class="line"><span>  in vec3 a_texCoord;   // mesh uv</span></span>
<span class="line"><span>  in vec3 a_texCoord3;  // mesh vertices</span></span>
<span class="line"><span>  in vec3 a_normal;     // mesh normal</span></span>
<span class="line"><span>  in vec4 a_color1;     // mesh color</span></span>
<span class="line"><span>#endif</span></span></code></pre></div><p>其它 shader 代码需要参考 v3.6.0 的 particle-vs-gpu.chunk 进行修改。</p>`,15),l=[i];function c(t,o,r,_,v,d){return s(),a("div",null,l)}const m=n(e,[["render",c]]);export{u as __pageData,m as default};
