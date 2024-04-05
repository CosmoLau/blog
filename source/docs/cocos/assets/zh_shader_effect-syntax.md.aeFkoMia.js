import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const l="/docs/cocos/assets/vs-ext.C-yNrFMB.png",y=JSON.parse('{"title":"着色器语法","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/effect-syntax.md","filePath":"zh/shader/effect-syntax.md","lastUpdated":1712305443000}'),h={name:"zh/shader/effect-syntax.md"},p=n('<h1 id="着色器语法" tabindex="-1">着色器语法 <a class="header-anchor" href="#着色器语法" aria-label="Permalink to &quot;着色器语法&quot;">​</a></h1><p>Cocos Creator 中的着色器（Cocos Shader ，文件扩展名为 *.effect），是一种基于 <a href="./yaml-101">YAML</a> 和 <a href="./glsl">GLSL</a> 的单源码嵌入式领域特定语言（single-source embedded domain-specific language），YAML 部分声明流程控制清单，GLSL 部分声明实际的 Shader 片段，这两部分内容相互补充，共同构成了一个完整的渲染流程描述。</p><blockquote><p><strong>注意</strong>：推荐使用 Visual Studio Code 编写 Cocos Shader，并在应用商店中安装 Cocos Effect 扩展，提供编写时的语法高亮提示。</p><p><img src="'+l+`" alt="Cocos Effect"></p></blockquote><h2 id="语法框架概览" tabindex="-1">语法框架概览 <a class="header-anchor" href="#语法框架概览" aria-label="Permalink to &quot;语法框架概览&quot;">​</a></h2><p><strong>Cocos Shader</strong> 通常由两个部分组成：</p><ul><li><code>CCEffect</code>：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。</li><li><code>CCProgram</code>：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。</li></ul><p>此处以内置着色器 <code>builtin-unlit.effect</code> 为例，说明 Cocos Shader 的语法框架。</p><p>在 VS Code 中打开 Cocos Creator <strong>资源管理器</strong> 面板中 <code>internal/effects/</code> 目录下的 <code>builtin-unlit.effect</code> 文件，可以看到主要内容如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCEffect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  techniques</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: opaque</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    passes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:vert</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:frag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        mainTexture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:    { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: grey }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tilingOffset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        mainColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:      { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: color } }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        colorScale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:     { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: colorScaleAndCutoff.xyz }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        alphaThreshold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: colorScaleAndCutoff.w, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">editor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">USE_ALPHA_TEST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: transparent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    passes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:vert</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:frag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        depthStencilState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  precision highp float;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #include </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #include </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 position;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cc_matProj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cc_matView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matWorld) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> position;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  precision highp float;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #include </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;...&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #include </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mainColor;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCFragOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(o);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><h2 id="cceffect" tabindex="-1">CCEffect <a class="header-anchor" href="#cceffect" aria-label="Permalink to &quot;CCEffect&quot;">​</a></h2><p>在 Cocos Shader 中由 <code>CCEffect</code> 包裹的部分是由 <strong>YAML 语法</strong> 声明的渲染流程相关的描述信息。对 YAML 不熟悉的开发者可以前住 <a href="./yaml-101">YAML 101</a> 了解详情。</p><p><code>CCEffect</code> 的整体结构如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCEffect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  techniques:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: tag</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    passes:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vert: vs:entry</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      frag: fs:entry</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: material properties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: pipeline states</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: one or more definitions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>一个 <code>CCEffect</code> 中支持定义多个渲染技术，但在实际渲染时，同一个材质实例只能应用其中一个技术。</p><p>以 <code>builtin-unlit.effect</code> 为例，其中包含了 4 个技术：</p><ul><li>opaque</li><li>transparent</li><li>add</li><li>alpha-blend</li></ul><p><code>opaque</code> 专门用于渲染不透明物体的渲染技术，<code>transparent</code>，<code>add</code>，<code>alpha-blend</code> 则用来渲染半透明物体。</p><p>每个渲染技术（<code>technique</code>）都包含了名称（<code>name</code>）和渲染过程（<code>pass</code>）。</p><p>名称用于标记渲染技术的用途，渲染过程则定义了一个完整的渲染流程所需要的全部信息。</p><h2 id="渲染过程-pass" tabindex="-1">渲染过程（Pass） <a class="header-anchor" href="#渲染过程-pass" aria-label="Permalink to &quot;渲染过程（Pass）&quot;">​</a></h2><p>渲染过程的特点如下：</p><ol><li><p>一个渲染技术可以包含多个渲染过程，渲染过程按定义的先后顺序逐一执行。</p></li><li><p>一个渲染过程必须包含一个顶点着色器（Vertex Shader，VS）和一个片元着色器（Fragment Shader，FS），其余都是可选配置项。详情请参考 <a href="./pass-parameter-list">Pass 可选配置参数</a>。</p></li><li><p>VS/FS 着色器需要指定使用的 <strong>CCProgram</strong> ，以及指定着色器的入口函数。 如果不指定入口函数，会默认使用 main。</p></li></ol><p><strong>格式如下</strong>：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCEffect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  techniques:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: opaque # 定义一个不透明的渲染技术</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    passes:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vert: vs: entry # 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      frag: fs: entry # 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>每个渲染过程都只有 <code>vert</code> 和 <code>frag</code> 两个必填参数，分别用于声明当前渲染过程使用的顶点着色器和片元着色器，格式为 <code>片段名: 入口函数名</code>。</p><p>片段名可以是本文件中声明的 <code>CCProgram</code> 片段名，也可以是引擎提供的标准头文件。</p><blockquote><p><strong>注意</strong>：自定义着色器的代码中不应该使用 <code>main</code> 函数，Cocos Shader 在编译时会自动添加一个 <code>main</code> 函数并调用渲染过程的入口函数（例如 <code>vert</code> 或 <code>frag</code>），<code>main</code> 函数会将入口函数的返回值作为当前 Shader 的输出（例如 <code>gl_Position</code> 或 <code>gl_FragColor</code>）。</p></blockquote><h2 id="渲染过程属性" tabindex="-1">渲染过程属性 <a class="header-anchor" href="#渲染过程属性" aria-label="Permalink to &quot;渲染过程属性&quot;">​</a></h2><p>渲染过程中的 properties 用于配置相关属性描述。通过它，可以定义了一个 uniform 在面板上的显示方式，如下所示：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCEffect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  techniques:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: opaque # 定义一个不透明的渲染技术</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    passes:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vert: vs: entry # 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      frag: fs: entry # 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      properties:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mainTexture: { value: grey } # 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        colorScale: { value: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], target: colorScaleAndCutoff.xyz } # 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      depthStencilState: # 配置深度测试、模板测试和写入状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        depthTest: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        depthWrite: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>详情请参考 <a href="./pass-parameter-list">Pass 可选配置参数</a>。</p><h2 id="ccprogram" tabindex="-1">CCProgram <a class="header-anchor" href="#ccprogram" aria-label="Permalink to &quot;CCProgram&quot;">​</a></h2><p>在 Cocos Shader 中由 <code>CCProgram</code> 包裹的部分是由 <strong>GLSL 语法</strong> 声明的 Shader 片段。建议在编写 CCProgram 之前，先了解 <a href="./glsl">GLSL 基础语法</a> 。</p><p>它的结构如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram shader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">required: precision settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: include</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: ubo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: custom attribute</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">optional: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 需要返回一个 vec4 类型数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><h2 id="预处理宏定义" tabindex="-1">预处理宏定义 <a class="header-anchor" href="#预处理宏定义" aria-label="Permalink to &quot;预处理宏定义&quot;">​</a></h2><p>通过预处理宏，可在 Cocos Shader 编译时控制代码分支和组合，以实现高效便捷的 Shader 代码管理。</p><p>更多详细内容请参考：</p><ul><li><a href="./macros">预处理宏定义</a></li><li><a href="./glsl">GLSL 语法</a></li></ul><h2 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-label="Permalink to &quot;更多&quot;">​</a></h2><p>如果想要查看更为复杂的着色器示例，可以参考 <a href="./surface-shader/surface-shader-structure">Surface Shader 结构</a> 以及 <a href="./surface-shader/builtin-surface-shader">内置 Surface Shader</a>。</p>`,41),t=[p];function k(e,E,r,d,g,c){return a(),i("div",null,t)}const F=s(h,[["render",k]]);export{y as __pageData,F as default};
