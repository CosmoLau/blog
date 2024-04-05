import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const o=JSON.parse('{"title":"Legacy Shader 主要函数与结构体","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/legacy-shader/legacy-shader-func-struct.md","filePath":"zh/shader/legacy-shader/legacy-shader-func-struct.md","lastUpdated":1712305443000}'),l={name:"zh/shader/legacy-shader/legacy-shader-func-struct.md"},p=n(`<h1 id="legacy-shader-主要函数与结构体" tabindex="-1">Legacy Shader 主要函数与结构体 <a class="header-anchor" href="#legacy-shader-主要函数与结构体" aria-label="Permalink to &quot;Legacy Shader 主要函数与结构体&quot;">​</a></h1><h2 id="ccvertinput-1" tabindex="-1">CCVertInput[^1] <a class="header-anchor" href="#ccvertinput-1" aria-label="Permalink to &quot;CCVertInput[^1]&quot;">​</a></h2><ul><li><p>为对接骨骼动画与数据解压流程，我们提供了 <code>CCVertInput</code> 工具函数，它有 <code>general</code> 和 <code>standard</code> 两个版本，内容如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 位于 ‘input.chunk’ 的通用顶点着色器输入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CCDecode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_MORPH</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    applyMorph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_SKINNING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CCSkin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pragma</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 空 ‘pragma’ 技巧，在编译时消除尾随分号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 位于 ‘input-standard.chunk’ 的标准顶点着色器输入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">In</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CCDecode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(In);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_MORPH</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    applyMorph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">In</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_SKINNING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CCSkin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">In</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pragma</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 空 ‘pragma’ 技巧，在编译时消除尾随分号</span></span></code></pre></div></li><li><p>如果只需要获取 <strong>顶点位置信息</strong>，可以使用 <strong>general</strong> 版本，那么顶点着色器函数开头的代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/input&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 position;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... 对位置信息做自定义操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果还需要法线等信息，可使用 <code>standard</code> 版本，像下面这样写：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/input-standard&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  StandardVertInput In;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(In);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... 此时 ‘In.position’ 初始化完毕，并且可以在顶点着色器中使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><p>上面的示例代码中，<code>StandardVertInput</code> 对象 <code>In</code> 会返回模型空间的顶点位置（<code>position</code>）、法线（<code>normal</code>）和切空间（<code>tangent</code>）信息，并对骨骼动画模型做完蒙皮计算。</p><p><code>StandardVertInput</code> 结构体的定义如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> StandardVertInput {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  highp vec4 position;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 normal;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 tangent;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><blockquote><p><strong>注意</strong>：引用头文件后，不要在 Shader 内重复声明这些 attributes（<code>a_position</code>、<code>a_normal</code>、<code>a_tangent</code> 等）。对于其他顶点数据（如 uv 等）还是需要声明 attributes 后再使用。</p></blockquote><p>如果要对接引擎动态 Mesh 合批和几何体实例化（GPU Instancing），需要包含 <code>cc-local-batch</code> 头文件，通过 <code>CCGetWorldMatrix</code> 工具函数获取世界矩阵，示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mat4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matWorld;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CCGetWorldMatrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(matWorld);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mat4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matWorld, matWorldIT;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CCGetWorldMatrixFull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(matWorld, matWorldIT);</span></span></code></pre></div><p>更多细节，请参考 <a href="./uniform">Cocos Shader 内置全局 Uniform</a>。</p><h2 id="ccfragoutput" tabindex="-1">CCFragOutput <a class="header-anchor" href="#ccfragoutput" aria-label="Permalink to &quot;CCFragOutput&quot;">​</a></h2><p>Cocos Shader 提供了 <code>CCFragOutput</code> 工具函数用以简化片元着色器的输出，可用于直接返回片元着色器所需要的值，代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/output&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vec4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... 编写片元着实代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCFragOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(o);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>CCFragOutput</code> 会根据管线状态来决定是否需要做 <code>ToneMap</code> 转码处理，这样中间的颜色计算就不必区分当前渲染管线是否为 HDR 流程。</p><p>代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCFragOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vec4 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_HDR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color.rgb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ACESToneMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(color.rgb);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  color.rgb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinearToSRGB</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(color.rgb);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>特别注意</strong>：</p><p>如果采用 <code>CCFragOutput</code> 作为片元输出，中间的颜色运算必须转到 <code>Linear</code> 空间，因为 <code>CCFragOutput</code> 认为传入的参数是在 <code>Linear</code> 空间的，总是会进行 <code>LinearToSRGB</code> 转码。</p><p><code>CCFragOutput</code> 函数一般不需要自己实现，它只起到与渲染管线对接的作用，且对于这种含有光照计算的输出，因为计算结果已经在 HDR 范围，所以应该包含 <code>output-standard</code> 而非 <code>output</code> 头文件。</p><p>如需包含标准的 PBR 光照计算，可使用 <code>StandardSurface</code> 结构体与函数 <code>CCStandardShadingBase</code> 一起构成 PBR 着色流程。</p><p><code>StandardSurface</code> 结构体内容如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> StandardSurface {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // albedo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 albedo;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // these two need to be in the same coordinate system</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 position;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 normal;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // emissive</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 emissive;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // light map</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec3 lightmap;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lightmap_test;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // PBR params</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> roughness;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> metallic;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> occlusion;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/shading-standard-base&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/output-standard&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (out StandardSurface </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // fill in your data here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  StandardSurface s; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCStandardShadingBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCFragOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(color);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>也可以参考 <code>builtin-standard.effect</code> 中，使用 <code>surf</code> 函数与 <code>CC_STANDARD_SURFACE_ENTRY()</code> 宏组合。</p><p><code>CC_STANDARD_SURFACE_ENTRY()</code> 是一个 wrapper，会根据渲染状态，利用 <code>surf</code> 函数构建出一个可用于片元的 <code>main</code> 函数，代码示例如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram shader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;legacy/standard-surface-entry&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (out StandardSurface s) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // fill in your data here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CC_STANDARD_SURFACE_ENTRY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><h2 id="standardsurface" tabindex="-1">StandardSurface <a class="header-anchor" href="#standardsurface" aria-label="Permalink to &quot;StandardSurface&quot;">​</a></h2><p>StandardSurface 为 PBR 材质信息结构体，记录了一个像素需要进行光照计算的表面信息。 Lagecy Shader 中的 surf 函数主要用于填充，它会在光照阶段被使用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">struct StandardSurface {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // albedo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 albedo;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // these two need to be in the same coordinate system</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HIGHP_VALUE_STRUCT_DEFINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec3, position);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 normal;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // emissive</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 emissive;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // light map</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 lightmap;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float lightmap_test;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // PBR params</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float roughness;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float metallic;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float occlusion;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float specularIntensity;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vec2 shadowBias;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="toonsurface" tabindex="-1">ToonSurface <a class="header-anchor" href="#toonsurface" aria-label="Permalink to &quot;ToonSurface&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">struct ToonSurface {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 baseColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 specular;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // these two need to be in the same coordinate system</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HIGHP_VALUE_STRUCT_DEFINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec3, position);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 normal;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // shading params</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 shade1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 shade2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec3 emissive;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float baseStep;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float baseFeather;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float shadeStep;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float shadeFeather;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    float shadowCover;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vec2 shadowBias;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>和 StandardSurface 一样，ToonSurface 也是用于记录像素表面信息，只是它是卡通材质专用的结构体。</p><p>[^1]: 不包含粒子、Sprite、后期效果等不基于 Mesh 渲染的 Shader。</p>`,34),t=[p];function h(e,k,d,r,E,c){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{o as __pageData,y as default};
