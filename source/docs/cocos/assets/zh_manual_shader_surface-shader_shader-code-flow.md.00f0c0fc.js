import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const A=JSON.parse('{"title":"Surface Shader 执行流程","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/shader-code-flow.md","filePath":"zh/manual/shader/surface-shader/shader-code-flow.md"}'),p={name:"zh/manual/shader/surface-shader/shader-code-flow.md"},o=l(`<h1 id="surface-shader-执行流程" tabindex="-1">Surface Shader 执行流程 <a class="header-anchor" href="#surface-shader-执行流程" aria-label="Permalink to &quot;Surface Shader 执行流程&quot;">​</a></h1><p>Surface Shader 统一了着色流程，同时为 vs 和 fs 提供了大量的自定义函数，大家可以根据自己的需求，重写相关函数。</p><p>请参考 <a href="./surface-function.html">Surface Shader 内置函数</a> 和 <a href="./function-replace.html">使用宏定义实现函数替换</a>。</p><p>本文主要目的在于帮助开发者熟悉 Surface Shader 执行流程，弄清楚各函数调用时机。</p><h2 id="函数入口" tabindex="-1">函数入口 <a class="header-anchor" href="#函数入口" aria-label="Permalink to &quot;函数入口&quot;">​</a></h2><p>我们先看一下内置的 Surface Shader 文件的 CCEffect 部分：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCEffect </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">  techniques:</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> name: opaque</span></span>
<span class="line"><span style="color:#F07178;">    passes:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> vert: standard</span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">vs</span></span>
<span class="line"><span style="color:#F07178;">      frag: standard</span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">fs</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><p>可以看到， 每一个 pass 的 vert 和 frag 没有指定专有的入口函数，这就表示，它所用到的 vs 和 fs 的入口函数为 main。</p><p>从 <a href="./surface-shader-structure.html">Surface Shader 结构</a> 中，我们可以了解到， 在 <a href="./shader-assembly.html">Surface Shader 组装</a> 环节，每一个 Surface Shader 会根据不同的 <a href="./render-usage.html">渲染用途</a>，引入不同的头文件。 这个头文件就是我们的入口函数。</p><h2 id="vs-主函数" tabindex="-1">VS 主函数 <a class="header-anchor" href="#vs-主函数" aria-label="Permalink to &quot;VS 主函数&quot;">​</a></h2><p>以内置 Surface Shader 的 standard-vs 为例：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/vs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><p>可以看到，它引入的是 render-to-scene 下面的 vs.chunk。</p><p>打开 render-to-scene/vs.chunk，可以看到，它只有一个 main 函数。代码和注释如下：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//声明一个表面材质数据结构</span></span>
<span class="line"><span style="color:#F07178;">    SurfacesStandardVertexIntermediate In</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取顶点基本数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexInput</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取顶点动画数据</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexAnimation</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ===== 本地坐标相关 ====</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//处理本地坐标，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xyz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyLocalPos</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//处理本地法线，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">normal</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xyz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyLocalNormal</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//处理本地切线，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_USE_TANGENT_SPACE</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tangent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyLocalTangent</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进一步处理自定义本地数据，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">SurfacesVertexModifyLocalSharedData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//==== 世界坐标相关======</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进行世界坐标转换，并填充数据结构</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexWorldTransform</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//额外的处理世界坐标函数，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldPos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyWorldPos</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//投影空间坐标</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clipPos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> cc_matProj </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> cc_matView </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">vec4</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldPos</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进一步处理投影空间坐标，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clipPos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyClipPos</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//其它一些数据变换</span></span>
<span class="line"><span style="color:#F07178;">    vec3 viewDirect </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">normalize</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cc_cameraPos</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xyz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldPos</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldNormal</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">w</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dot</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldNormal</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xyz</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> viewDirect</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进一步处理世界法线，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">worldNormal</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xyz</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyWorldNormal</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进一步处理UV，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">SurfacesVertexModifyUV</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//进一步处理自定义数据，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">SurfacesVertexModifySharedData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//其它变换</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//UV</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexTransformUV</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//雾效</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexTransferFog</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//阴影</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexTransferShadow</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//光照贴图UV</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexTransferLightMapUV</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//最终输出</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesVertexOutput</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">In</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="fs-主函数" tabindex="-1">FS 主函数 <a class="header-anchor" href="#fs-主函数" aria-label="Permalink to &quot;FS 主函数&quot;">​</a></h2><p>同样的，我们以内置 Surface Shader 的 standard-fs 为例：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><p>render-to-scene/fs.chunk 文件内容如下：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">CC_PIPELINE_TYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_PIPELINE_TYPE_FORWARD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_FORCE_FORWARD_SHADING</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/pipeline/forward-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_PIPELINE_TYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CC_PIPELINE_TYPE_DEFERRED</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-entries/main-functions/render-to-scene/pipeline/deferred-fs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#endif</span></span></code></pre></div><p>可以看到它区分了 forward 和 deferred 管线。</p><h3 id="forward-fs" tabindex="-1">forward-fs <a class="header-anchor" href="#forward-fs" aria-label="Permalink to &quot;forward-fs&quot;">​</a></h3><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//定义颜色输出目标</span></span>
<span class="line"><span style="color:#82AAFF;">layout</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">out</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">vec4</span><span style="color:#A6ACCD;"> fragColorX</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_DISABLE_STRUCTURE_IN_FRAGMENT_SHADER</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取基本颜色和透明度，用户可用宏替换</span></span>
<span class="line"><span style="color:#F07178;">    vec4 color </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SurfacesFragmentModifyBaseColorAndTransparency</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#else</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取表面材质数据</span></span>
<span class="line"><span style="color:#F07178;">    SurfacesMaterialData surfaceData</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesFragmentGetMaterialData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//计算阴影参数</span></span>
<span class="line"><span style="color:#F07178;">    vec2 shadowBias </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">vec2</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//计算雾效参数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#82AAFF;">CC_FORWARD_ADD</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">float</span><span style="color:#F07178;"> fogFactor </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//计算光照</span></span>
<span class="line"><span style="color:#F07178;">    LightingResult lightingResult</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesLighting</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">lightingResult</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> surfaceData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> shadowBias</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//渲染调试相关</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//像素着色计算</span></span>
<span class="line"><span style="color:#F07178;">    vec4 color </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCSurfacesShading</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> lightingResult</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//颜色输出</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_RGBE_OUTPUT</span></span>
<span class="line"><span style="color:#F07178;">        fragColorX </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">packRGBE</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rgb</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> // for reflection-map</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//HDR，LinearToSRGB 等最终运算</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_HDR</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_DEBUG_VIEW</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_ENABLE_DEBUG_VIEW</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">IS_DEBUG_VIEW_COMPOSITE_ENABLE_TONE_MAPPING</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rgb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ACESToneMap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rgb</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_DEBUG_VIEW</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">IS_DEBUG_VIEW_COMPOSITE_ENABLE_GAMMA_CORRECTION</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rgb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">LinearToSRGB</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rgb</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#82AAFF;">CC_FORWARD_ADD</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_FOG</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_FOG_NONE</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">CC_APPLY_FOG_BASE</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> fogFactor</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    fragColorX </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCSurfacesDebugDisplayInvalidNumber</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">}</span></span></code></pre></div><h3 id="deferred-fs" tabindex="-1">deferred-fs <a class="header-anchor" href="#deferred-fs" aria-label="Permalink to &quot;deferred-fs&quot;">​</a></h3><p>延迟渲染由于分成两个阶段：GBuffer 和 Lighting。</p><p>在 GBuffer 阶段主要是填充各个渲染目标，只需要收集对应的材质表面数据即可，代码如下：</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//GBuffer 0，1，2</span></span>
<span class="line"><span style="color:#82AAFF;">layout</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">out</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">vec4</span><span style="color:#A6ACCD;"> fragColor0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">layout</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">out</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">vec4</span><span style="color:#A6ACCD;"> fragColor1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">layout</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">out</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">vec4</span><span style="color:#A6ACCD;"> fragColor2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//收集表面材质数据</span></span>
<span class="line"><span style="color:#F07178;">    SurfacesMaterialData surfaceData</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">CCSurfacesFragmentGetMaterialData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//填充 GBuffer</span></span>
<span class="line"><span style="color:#F07178;">    fragColor0 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCSurfacesDeferredOutput0</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    fragColor1 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCSurfacesDeferredOutput1</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    fragColor2 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCSurfacesDeferredOutput2</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//调试渲染相关</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_USE_DEBUG_VIEW</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_DEBUG_VIEW_SINGLE</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_SURFACES_ENABLE_DEBUG_VIEW</span></span>
<span class="line"><span style="color:#F07178;">        vec4 debugColor </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">vec4</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">CCSurfacesDebugViewMeshData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">debugColor</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">CCSurfacesDebugViewSurfaceData</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">debugColor</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> surfaceData</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">IS_DEBUG_VIEW_ENABLE_WITH_CAMERA</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        fragColor0 </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> debugColor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>延迟渲染的 Lighting 阶段，是受引擎渲染管线控制的，会统一使用 GBuffer 进行光照计算，可参考 internal/effects/deferred-lighting.effect。</p><p>其余的渲染用途主函数同理，可以到 internal/chunks/shading-entries/ 目录下查看。</p><blockquote><p>提示：可以被替换的代码，都以 Surface###Modify### 方式命名。</p></blockquote>`,30),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const f=s(p,[["render",t]]);export{A as __pageData,f as default};