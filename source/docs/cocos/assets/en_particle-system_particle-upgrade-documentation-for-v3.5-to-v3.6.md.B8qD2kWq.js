import{_ as a,c as n,o as s,a4 as e}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"Upgrade Guide: Particle from v3.5.x to v3.6.0","description":"","frontmatter":{},"headers":[],"relativePath":"en/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md","filePath":"en/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md","lastUpdated":1712305443000}'),p={name:"en/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md"},i=e(`<h1 id="upgrade-guide-particle-from-v3-5-x-to-v3-6-0" tabindex="-1">Upgrade Guide: Particle from v3.5.x to v3.6.0 <a class="header-anchor" href="#upgrade-guide-particle-from-v3-5-x-to-v3-6-0" aria-label="Permalink to &quot;Upgrade Guide: Particle from v3.5.x to v3.6.0&quot;">​</a></h1><h2 id="cpu-particle" tabindex="-1">CPU Particle <a class="header-anchor" href="#cpu-particle" aria-label="Permalink to &quot;CPU Particle&quot;">​</a></h2><p>The particle shader particle-vs-legacy.chunk should be modified to support instance particles added in v3.6.0.</p><p>layout before</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec3 a_position; // center position</span></span>
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
<span class="line"><span>#endif</span></span></code></pre></div><p>layout now</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec3 a_texCoord1;  // size</span></span>
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
<span class="line"><span>#endif</span></span></code></pre></div><p>Other shader code should be modified refer to particle-vs-legacy.chunk of v3.6.0</p><h2 id="gpu-particle" tabindex="-1">GPU Particle <a class="header-anchor" href="#gpu-particle" aria-label="Permalink to &quot;GPU Particle&quot;">​</a></h2><p>GPU particle shader particle-vs-gpu.chunk should be modified.</p><p>layout before</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec4 a_position_starttime; // center position,particle start time</span></span>
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
<span class="line"><span>#endif</span></span></code></pre></div><p>layout after</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>in vec4 a_position_starttime; // center position,particle start time</span></span>
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
<span class="line"><span>#endif</span></span></code></pre></div><p>Other shader code should be modified refer to particle-vs-gpu.chunk of v3.6.0.</p>`,15),l=[i];function c(t,o,r,d,_,v){return s(),n("div",null,l)}const m=a(p,[["render",c]]);export{u as __pageData,m as default};
