import{_ as s,c as i,o as t,a4 as a}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/create-effect.BhOt-aIX.png",n="/docs/cocos/assets/new-effect.BrUyoxkn.png",l="/docs/cocos/assets/effect-pass.uLtVJBo8.png",h="/docs/cocos/assets/precompile.BsvnxYjs.png",p="/docs/cocos/assets/change-vs-fs.B6TdEicG.png",m=JSON.parse('{"title":"着色器创建与使用","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/effect-inspector.md","filePath":"zh/shader/effect-inspector.md","lastUpdated":1712305443000}'),r={name:"zh/shader/effect-inspector.md"},k=a('<h1 id="着色器创建与使用" tabindex="-1">着色器创建与使用 <a class="header-anchor" href="#着色器创建与使用" aria-label="Permalink to &quot;着色器创建与使用&quot;">​</a></h1><h2 id="创建着色器" tabindex="-1">创建着色器 <a class="header-anchor" href="#创建着色器" aria-label="Permalink to &quot;创建着色器&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 面板中点击左上角的 <strong>+</strong> 号按钮（或者在 Assets 目录下点击右键），在弹出菜单中选择 <strong>着色器（Effect）</strong> 或者 <strong>表面着色器（Surface Shader）</strong>， 便可创建新的着色器资源。</p><p><img src="'+e+'" alt="1"></p><p>两种类型的着色器区别：</p><ul><li><strong>着色器（Effect）</strong>：简单的无光照着色器，可参考 internal/effects/builtin-unlit.effect</li><li><strong>表面着色器（Surface Shader）</strong>：基于 PBR 的着色器，可参考 internal/effects/builtin-standard.effect</li></ul><p>我们以 <strong>表面着色器（Surface Shader）</strong> 为例，引擎会在 <strong>资源管理器</strong> 中创建一个默认名为 <strong>surface-effect</strong> 的着色器资源：</p><p><img src="'+n+'" alt="image"></p><p>在 <strong>属性检查器</strong> 中可以看到着色器主要由以下几部分组成：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Shaders</td><td style="text-align:left;">当前着色器以及其渲染过程的名称</td></tr><tr><td style="text-align:left;">Precompile Combinations</td><td style="text-align:left;">是否开启预处理宏定义组合，详情请参考下文说明</td></tr><tr><td style="text-align:left;">GLSL 300 ES/100 Output</td><td style="text-align:left;">着色器输出，详情请参考下文说明</td></tr></tbody></table><h2 id="shaders" tabindex="-1">Shaders <a class="header-anchor" href="#shaders" aria-label="Permalink to &quot;Shaders&quot;">​</a></h2><p>如果当前的着色器有多个渲染过程，则可以通过 Shaders 右边的下拉框来选择不同的渲染过程。选择渲染过程后，可以通过 GLSL Output 窗口查看当前编译后的着色器代码。</p><p><img src="'+l+'" alt="渲染过程"></p><h2 id="precompile-combinations" tabindex="-1">Precompile Combinations <a class="header-anchor" href="#precompile-combinations" aria-label="Permalink to &quot;Precompile Combinations&quot;">​</a></h2><p>一般情况下材质会在使用到相应宏定义的时候进行编译，当使用到较多宏定义时可能会出现卡顿的情况。因此便可以在该项配置预编译宏定义组合，用于提前编译所需的宏定义组合。例如下图中的配置：</p><p><img src="'+h+'" alt="image"></p><h2 id="glsl-output" tabindex="-1">GLSL Output <a class="header-anchor" href="#glsl-output" aria-label="Permalink to &quot;GLSL Output&quot;">​</a></h2><p>目前引擎提供 GLSL 300 ES 和 GLSL 100 的输出。</p><p>通过选择不同的标签页可切换显示编译后的顶点着色器和片元着色器：</p><p><img src="'+p+`" alt="vs-fs-switch"></p><h2 id="代码访问内置着色器" tabindex="-1">代码访问内置着色器 <a class="header-anchor" href="#代码访问内置着色器" aria-label="Permalink to &quot;代码访问内置着色器&quot;">​</a></h2><p>在 internal/effects/ 目录下包含了引擎提供的内置着色器，这些着色器在程序启动后，会自动加载。</p><p>以 builtin-standard 为例，可以参考下面的代码访问并使用：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取内置 Standard 着色器 ‘builtin-standard.effect’</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> effect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EffectAsset.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;builtin-standard&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用内置基于物理的光照着色器（PBR）‘builtin-standard.effect’ 初始化材质</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mat.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ effectName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;builtin-standard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="动态加载着色器" tabindex="-1">动态加载着色器 <a class="header-anchor" href="#动态加载着色器" aria-label="Permalink to &quot;动态加载着色器&quot;">​</a></h2><p>位于 <strong>resources</strong> 目录下的 着色器文件，可以使用 <strong>resources.load</strong> 进行加载并使用。</p><p>代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resources.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, EffectAsset, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EffectAsset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //获取 effect</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> effectAsset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EffectAsset.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../resources/custom-effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //使用加载好的 effect 初始化材质</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    material.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ effectName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../resources/custom-effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><blockquote><p><strong>注意：</strong> 动态加载的自定义着色器加载成功后，effectName 为 &quot;../&quot; + 文件路径。</p></blockquote>`,29),o=[k];function d(c,g,E,f,u,y){return t(),i("div",null,o)}const b=s(r,[["render",d]]);export{m as __pageData,b as default};
