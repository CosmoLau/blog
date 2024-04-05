import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/macro-simple.Cago8MQx.png",l="/docs/cocos/assets/albedo-map.lvL4kegC.png",e="/docs/cocos/assets/macro-range-example.BvClYMwp.png",p="/docs/cocos/assets/macro-options-example.KXTF3_f6.png",m=JSON.parse('{"title":"预处理宏定义","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/macros.md","filePath":"zh/shader/macros.md","lastUpdated":1712305443000}'),h={name:"zh/shader/macros.md"},k=t('<h1 id="预处理宏定义" tabindex="-1">预处理宏定义 <a class="header-anchor" href="#预处理宏定义" aria-label="Permalink to &quot;预处理宏定义&quot;">​</a></h1><p>为了更好地管理代码内容，Cocos Shader 提供了预处理宏机制，它有几个特性：</p><ol><li>不同组合的宏会生成不同的代码</li><li>生成的代码无冗余、执行高效</li><li>使用过的宏定义会显示在材质面板上，方便调试</li><li>以 <code>CC_</code> 开头的宏不会显示在材质面板上</li></ol><p>以默认的 Surface Shader 为例，当它被材质使用时，你在材质的 <strong>属性检查器</strong> 中，可以看到如下图所示的宏开关：</p><p><img src="'+n+`" alt="macro-simple"></p><h2 id="宏定义注意事项" tabindex="-1">宏定义注意事项 <a class="header-anchor" href="#宏定义注意事项" aria-label="Permalink to &quot;宏定义注意事项&quot;">​</a></h2><p>宏定义有一些默认的规则。</p><h3 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h3><p>所有的宏定义默认值都是 false，因此当定义一个简单宏定义（例如用于布尔开关的宏）时，无法指定其默认值，但可通过 <strong>属性检查器</strong> 或代码修改。</p><p>如果设计上某些宏之间存在互斥关系（不能同时为 true），可以通过使用 tag 声明的宏来处理，详情请参考下文 <a href="#macro-tags"><strong>Macro Tags</strong></a> 部分的内容。</p><h3 id="宏都会被定义" tabindex="-1">宏都会被定义 <a class="header-anchor" href="#宏都会被定义" aria-label="Permalink to &quot;宏都会被定义&quot;">​</a></h3><p>Cocos Shader 在运行时会用默认值 0 来定义所有 Shader 中出现的自定义宏</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#define </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">USE_INSTANCING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#define </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">USE_TWOSIDE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#define </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">USE_ALBEDO_MAP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><blockquote><p>仅限用户自定义宏，<code>GL_</code> 等开头的系统宏不在此列</p></blockquote><p>所以，不能使用 <code>#ifdef</code> 或 <code>#if defined</code> 这样的形式来判断自定义宏是否生效，执行结果会始终为 true；</p><h3 id="宏的使用范围" tabindex="-1">宏的使用范围 <a class="header-anchor" href="#宏的使用范围" aria-label="Permalink to &quot;宏的使用范围&quot;">​</a></h3><p>宏定义不仅可以应用在 <code>CCProgram</code> 里，控制宏定义内的代码逻辑，还可以应用在 <code>CCEffect</code> 中，将可编辑属性的显示状态与宏定义关联。</p><p>如下所示，仅当 <code>USE_USE_</code> 预处理宏开启时，<code>mainTexture</code> 才会显示在 <strong>属性检查器</strong> 面板上：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCEffect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    properties:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mainTexture:  { value: grey, target: albedoMap, editor: { parent: USE_ALBEDO_MAP, displayName: AlbedoMap } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram unlit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vec4 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USE_ALBEDO_MAP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        #endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p><img src="`+l+`" alt="macro-property"></p><h2 id="macro-tags" tabindex="-1">Macro Tags <a class="header-anchor" href="#macro-tags" aria-label="Permalink to &quot;Macro Tags&quot;">​</a></h2><p>当多个宏会互斥，或者一个宏有多种判定值时，我们可以将它们合成一组。</p><p>像下面这个例子中， FACTOR 的值会有许多种：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FACTOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#elif</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FACTOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#elif</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FACTOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>针对这类有固定取值范围或固定选项的宏定义，需要选择一个合适的 tag 显式声明：</p><table><thead><tr><th style="text-align:left;">Tag</th><th style="text-align:left;">说明</th><th style="text-align:left;">默认值</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">range</td><td style="text-align:left;">一个长度为 2 的数组。首元素为最小值，末元素为最大值</td><td style="text-align:left;">[0, 3]</td><td style="text-align:left;">针对连续数字类型的宏定义，显式指定它的取值范围。<br>范围应当控制到最小，有利于运行时的 shader 管理</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">一个任意长度的数组，每个元素都是一个可能的取值</td><td style="text-align:left;">如未显式声明则不会定义任何宏</td><td style="text-align:left;">针对有清晰选项的宏定义，显式指定它的可用选项</td></tr></tbody></table><h3 id="range-的用法" tabindex="-1">range 的用法 <a class="header-anchor" href="#range-的用法" aria-label="Permalink to &quot;range 的用法&quot;">​</a></h3><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#pragma</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> define-meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FACTOR</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>我们可以使用 <code>range</code> 来描述 <code>FACTOR</code> 宏的值，使它能够在界面上显示出 [-5, 5] 区间的所有值作为选项。 如下所示：</p><p><img src="`+e+'" alt="macro-range-example"></p><h3 id="options-的用法" tabindex="-1">options 的用法 <a class="header-anchor" href="#options-的用法" aria-label="Permalink to &quot;options 的用法&quot;">​</a></h3><p>当 FACTOR 只有 -3,-2,5 这三个值的情况下，我们就可以用 <code>options</code> 来处理。</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#pragma</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> define-meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FACTOR</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>材质面板上可以产生如下所示的选项效果：</p><p><img src="'+p+`" alt="macro-options-example"></p><h2 id="函数宏" tabindex="-1">函数宏 <a class="header-anchor" href="#函数宏" aria-label="Permalink to &quot;函数宏&quot;">​</a></h2><p>函数调用总是有一些额外开销的，我们可以利用函数式宏定义来实现 inline 函数，从而提升代码效率。</p><p>有不少工具函数都是函数式宏定义，比如：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#pragma</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCDecode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vec4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a_position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#pragma</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  CCDecode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_USE_SKINNING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CCSkin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pragma</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // empty pragma trick to get rid of trailing semicolons at effect compile time</span></span></code></pre></div><p>WebGL 1.0 不支持函数式宏定义 (Function-like Macros)，但是 Cocos Shader 在编译时支持了函数式宏定义，在输出的 Shader 中就已经将此类宏定义展开，可以放心使用。</p><p>更多关于宏定义的内容，请前往 <a href="./surface-shader/macro-remapping">宏定义与重映射</a>。</p>`,41),r=[k];function d(o,g,c,E,y,F){return a(),i("div",null,r)}const u=s(h,[["render",d]]);export{m as __pageData,u as default};
