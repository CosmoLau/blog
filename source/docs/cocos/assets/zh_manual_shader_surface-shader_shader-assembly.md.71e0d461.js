import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const h=JSON.parse('{"title":"Surface Shader 组装","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/shader-assembly.md","filePath":"zh/manual/shader/surface-shader/shader-assembly.md"}'),e={name:"zh/manual/shader/surface-shader/shader-assembly.md"},p=l(`<h1 id="surface-shader-组装" tabindex="-1">Surface Shader 组装 <a class="header-anchor" href="#surface-shader-组装" aria-label="Permalink to &quot;Surface Shader 组装&quot;">​</a></h1><h2 id="shader片段组装器" tabindex="-1">Shader片段组装器 <a class="header-anchor" href="#shader片段组装器" aria-label="Permalink to &quot;Shader片段组装器&quot;">​</a></h2><p>在内置的 Surface Shader 文件中，你会看到下面的代码片段：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//includes</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//includes</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//includes</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//includes</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram </span><span style="color:#82AAFF;">reflect</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//includes</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><p>这类以 xxx-vs, xxx-fs 命名的 CCProgram 代码片段，就是我们的组装器。</p><p>在这些代码片段中，我们使用 #include 关键字，根据需要，引入不同模块头的文件，按顺序组装每个Shader。</p><h2 id="include-两种方式" tabindex="-1">include 两种方式 <a class="header-anchor" href="#include-两种方式" aria-label="Permalink to &quot;include 两种方式&quot;">​</a></h2><p>在这些 include 中，你可以看到如下两种情况：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//include from CCProgram</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">macro-remapping</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//include from file</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/effect-macros/common-macros</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>我们可以引入一个外部 chunk 文件，也可以通过名字，引入一个先前定义好的 CCProgram，比如 macro-remapping。</p><h2 id="主要部分" tabindex="-1">主要部分 <a class="header-anchor" href="#主要部分" aria-label="Permalink to &quot;主要部分&quot;">​</a></h2><p>以 <code>standard-fs</code> 为例，我们可以看到整个 Fragment Shader 的组装分为以下 6 个部分。</p><h2 id="_1、宏" tabindex="-1">1、宏 <a class="header-anchor" href="#_1、宏" aria-label="Permalink to &quot;1、宏&quot;">​</a></h2><p>首先需要包含必要的内部宏映射和通用宏定义。</p><p>宏映射使用在 Macro Remapping 一段中描述的自定义 CCProgram 代码块或 chunk 文件。</p><p>接下来需要包含通用宏定义文件 <code>common-macros</code>，如下所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">macro-remapping</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/effect-macros/common-macros</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>对于一些特殊渲染用途的 Shader 而言，建议直接包含对应渲染用途的宏定义文件，以 ShadowMap 为例：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/effect-macros/render-to-shadowmap</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><h2 id="_2、通用头文件" tabindex="-1">2、通用头文件 <a class="header-anchor" href="#_2、通用头文件" aria-label="Permalink to &quot;2、通用头文件&quot;">​</a></h2><p>根据 <strong>当前的 Shader 类型（Shader Stage）</strong> 来选择对应的通用头文件，如下所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//Vertex Shader</span></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/common-vs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Fragment Shader</span></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/common-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><h2 id="_3、surface-shader-主体" tabindex="-1">3、Surface Shader 主体 <a class="header-anchor" href="#_3、surface-shader-主体" aria-label="Permalink to &quot;3、Surface Shader 主体&quot;">​</a></h2><p>这个部分是 Surface Shader 中的主体部分。</p><p>比如外部常量 uniforms，shared-ubos 代码块。</p><p>以及 Surface Shader 中，用户可以控制的主体函数，比如内置着色器里的 surface-vertex 和 surface-fragment 代码段。</p><p>如下所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shared-ubos</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surface-fragment</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><h2 id="_4、光照模型" tabindex="-1">4、光照模型 <a class="header-anchor" href="#_4、光照模型" aria-label="Permalink to &quot;4、光照模型&quot;">​</a></h2><p>此部分为<strong>可选项</strong>，Vertex Shader ，以及渲染到 ShadowMap 时，不需要。</p><p>这个部分的作用，是使用 <strong>光照模型名称</strong> 来选择对应的头文件，如下所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//Standard PBR Lighting</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">lighting-models/includes/standard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Toon Lighting</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">lighting-models/includes/toon</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_5、表面材质数据结构" tabindex="-1">5、表面材质数据结构 <a class="header-anchor" href="#_5、表面材质数据结构" aria-label="Permalink to &quot;5、表面材质数据结构&quot;">​</a></h2><p>此部分为<strong>可选项</strong>，渲染到 ShadowMap 时，不需要。</p><p>选择与光照模型对应的表面材质数据结构，如下所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//Vertex Shader</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Standard</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/standard-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Toon</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/toon-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Fragment Shader</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Standard</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/standard-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Toon</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">surfaces/includes/toon-fs</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_6、主函数" tabindex="-1">6、主函数 <a class="header-anchor" href="#_6、主函数" aria-label="Permalink to &quot;6、主函数&quot;">​</a></h2><p>使用<strong>渲染用途名称 + Shader 类型（Shader Stage）</strong> 来选择对应的主函数头文件，如下图所示：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//standard-vs:</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/vs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//shadow-caster-vs:</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-shadowmap/vs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//standard-fs:</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//shadow-caster-fs:</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-shadowmap/fs</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>更多信息，可参考 <a href="./builtin-surface-shader.html">内置 Surface Shader 导读</a>。</p>`,40),o=[p];function t(c,r,i,y,D,d){return a(),n("div",null,o)}const C=s(e,[["render",t]]);export{h as __pageData,C as default};