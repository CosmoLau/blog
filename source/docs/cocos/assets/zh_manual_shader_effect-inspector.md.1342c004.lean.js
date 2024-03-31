import{_ as s,v as a,b as n,R as t}from"./chunks/framework.5ffcbaff.js";const o="/docs/cocos/assets/create-effect.5191ea0e.png",l="/docs/cocos/assets/new-effect.67ea948f.png",e="/docs/cocos/assets/effect-pass.a8dd6b73.png",p="/docs/cocos/assets/precompile.938af9ae.png",r="/docs/cocos/assets/change-vs-fs.9dfdb68b.png",g=JSON.parse('{"title":"着色器创建与使用","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/effect-inspector.md","filePath":"zh/manual/shader/effect-inspector.md"}'),c={name:"zh/manual/shader/effect-inspector.md"},i=t('<h1 id="着色器创建与使用" tabindex="-1">着色器创建与使用 <a class="header-anchor" href="#着色器创建与使用" aria-label="Permalink to &quot;着色器创建与使用&quot;">​</a></h1><h2 id="创建着色器" tabindex="-1">创建着色器 <a class="header-anchor" href="#创建着色器" aria-label="Permalink to &quot;创建着色器&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 面板中点击左上角的 <strong>+</strong> 号按钮（或者在 Assets 目录下点击右键），在弹出菜单中选择 <strong>着色器（Effect）</strong> 或者 <strong>表面着色器（Surface Shader）</strong>， 便可创建新的着色器资源。</p><p><img src="'+o+'" alt="1"></p><p>两种类型的着色器区别：</p><ul><li><strong>着色器（Effect）</strong>：简单的无光照着色器，可参考 internal/effects/builtin-unlit.effect</li><li><strong>表面着色器（Surface Shader）</strong>：基于 PBR 的着色器，可参考 internal/effects/builtin-standard.effect</li></ul><p>我们以 <strong>表面着色器（Surface Shader）</strong> 为例，引擎会在 <strong>资源管理器</strong> 中创建一个默认名为 <strong>surface-effect</strong> 的着色器资源：</p><p><img src="'+l+'" alt="image"></p><p>在 <strong>属性检查器</strong> 中可以看到着色器主要由以下几部分组成：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Shaders</td><td style="text-align:left;">当前着色器以及其渲染过程的名称</td></tr><tr><td style="text-align:left;">Precompile Combinations</td><td style="text-align:left;">是否开启预处理宏定义组合，详情请参考下文说明</td></tr><tr><td style="text-align:left;">GLSL 300 ES/100 Output</td><td style="text-align:left;">着色器输出，详情请参考下文说明</td></tr></tbody></table><h2 id="shaders" tabindex="-1">Shaders <a class="header-anchor" href="#shaders" aria-label="Permalink to &quot;Shaders&quot;">​</a></h2><p>如果当前的着色器有多个渲染过程，则可以通过 Shaders 右边的下拉框来选择不同的渲染过程。选择渲染过程后，可以通过 GLSL Output 窗口查看当前编译后的着色器代码。</p><p><img src="'+e+'" alt="渲染过程"></p><h2 id="precompile-combinations" tabindex="-1">Precompile Combinations <a class="header-anchor" href="#precompile-combinations" aria-label="Permalink to &quot;Precompile Combinations&quot;">​</a></h2><p>一般情况下材质会在使用到相应宏定义的时候进行编译，当使用到较多宏定义时可能会出现卡顿的情况。因此便可以在该项配置预编译宏定义组合，用于提前编译所需的宏定义组合。例如下图中的配置：</p><p><img src="'+p+'" alt="image"></p><h2 id="glsl-output" tabindex="-1">GLSL Output <a class="header-anchor" href="#glsl-output" aria-label="Permalink to &quot;GLSL Output&quot;">​</a></h2><p>目前引擎提供 GLSL 300 ES 和 GLSL 100 的输出。</p><p>通过选择不同的标签页可切换显示编译后的顶点着色器和片元着色器：</p><p><img src="'+r+`" alt="vs-fs-switch"></p><h2 id="代码访问内置着色器" tabindex="-1">代码访问内置着色器 <a class="header-anchor" href="#代码访问内置着色器" aria-label="Permalink to &quot;代码访问内置着色器&quot;">​</a></h2><p>在 internal/effects/ 目录下包含了引擎提供的内置着色器，这些着色器在程序启动后，会自动加载。</p><p>以 builtin-standard 为例，可以参考下面的代码访问并使用：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 获取内置 Standard 着色器 ‘builtin-standard.effect’</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> effect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> EffectAsset</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">builtin-standard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mat </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Material</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用内置基于物理的光照着色器（PBR）‘builtin-standard.effect’ 初始化材质</span></span>
<span class="line"><span style="color:#A6ACCD;">mat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initialize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">effectName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">builtin-standard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="动态加载着色器" tabindex="-1">动态加载着色器 <a class="header-anchor" href="#动态加载着色器" aria-label="Permalink to &quot;动态加载着色器&quot;">​</a></h2><p>位于 <strong>resources</strong> 目录下的 着色器文件，可以使用 <strong>resources.load</strong> 进行加载并使用。</p><p>代码示例如下：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> EffectAsset</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">EffectAsset</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//获取 effect</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effectAsset</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EffectAsset</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../resources/custom-effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//使用加载好的 effect 初始化材质</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">material</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Material</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">material</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initialize</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> effectName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../resources/custom-effect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><blockquote><p><strong>注意：</strong> 动态加载的自定义着色器加载成功后，effectName 为 &quot;../&quot; + 文件路径。</p></blockquote>`,29),y=[i];function F(D,f,d,A,u,C){return a(),n("div",null,y)}const m=s(c,[["render",F]]);export{g as __pageData,m as default};
