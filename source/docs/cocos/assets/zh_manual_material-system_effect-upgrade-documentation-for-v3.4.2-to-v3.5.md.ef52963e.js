import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const C=JSON.parse('{"title":"升级指南：Effect 从 v3.4.x 升级到 v3.5.0","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md","filePath":"zh/manual/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md"}'),p={name:"zh/manual/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md"},o=l(`<h1 id="升级指南-effect-从-v3-4-x-升级到-v3-5-0" tabindex="-1">升级指南：Effect 从 v3.4.x 升级到 v3.5.0 <a class="header-anchor" href="#升级指南-effect-从-v3-4-x-升级到-v3-5-0" aria-label="Permalink to &quot;升级指南：Effect 从 v3.4.x 升级到 v3.5.0&quot;">​</a></h1><h2 id="宏标记和函数宏" tabindex="-1">宏标记和函数宏 <a class="header-anchor" href="#宏标记和函数宏" aria-label="Permalink to &quot;宏标记和函数宏&quot;">​</a></h2><p>宏标记和功能宏的效果语法已升级，为避免占用标准的 glsl 定义，项目中旧的 Cocos Shader 文件（*.effect）将自动升级，但如果您使用的是没有配套 *.meta 数据的外部 Cocos Shader 文件，或编写新的 Cocos Shader，则必须注意。</p><ul><li>宏标记的新语法：<code>#pragma define meta</code></li><li>函数宏的新语法：<code>#pragma define</code></li></ul><p>有关详细信息，请参阅 <a href="./../shader/macros.html#macro-tags">Cocos Shader 语法 - macro-tags</a>。</p><h2 id="模型级别的阴影偏移" tabindex="-1">模型级别的阴影偏移 <a class="header-anchor" href="#模型级别的阴影偏移" aria-label="Permalink to &quot;模型级别的阴影偏移&quot;">​</a></h2><p>在 v3.5 中我们支持对模型设置单独阴影偏移值，可以对简单或复杂曲面上的阴影效果进行详细控制。如果您有任何自定义的 effect 文件，您可能需要升级它们使阴影偏移值生效。</p><p>解决 <strong>effect</strong> 文件从v3.4.x，升级到 v3.5.0 后，shadowBias 不生效的问题。</p><blockquote><p><strong>注意</strong>：如果禁用灯光的阴影贴图，或者没有在顶点着色器上计算 <strong>CC_TRANSFER_SHADOW(pos)</strong> 则 <strong>忽略</strong> 该材质升级。</p></blockquote><h3 id="升级说明" tabindex="-1">升级说明 <a class="header-anchor" href="#升级说明" aria-label="Permalink to &quot;升级说明&quot;">​</a></h3><p>有 <strong>四个元素</strong> 要添加到效果文件中，如下所示：</p><ol><li><p>vs out varying 定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#A6ACCD;">    out mediump vec2 v_shadowBias;</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div></li><li><p>vs shadow bias 获取</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#A6ACCD;">    v_shadowBias = CCGetShadowBias();</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div></li><li><p>fs in varying 定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#A6ACCD;">    in mediump vec2 v_shadowBias;</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div></li><li><p>fs shadow bias 赋值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.shadowBias = v_shadowBias;</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div></li></ol><h3 id="示例-代码片段" tabindex="-1">示例（代码片段） <a class="header-anchor" href="#示例-代码片段" aria-label="Permalink to &quot;示例（代码片段）&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 顶点着色器</span></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 头文件区域</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">cc-xxx</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">cc-xxxx</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// vs 输出区域</span></span>
<span class="line"><span style="color:#F07178;">    out vec3 v_xxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#F07178;">        out mediump vec2 v_shadowBias</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    out vec3 v_xxxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// vs 执行区域</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">main</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        xxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#F07178;">            v_shadowBias </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCGetShadowBias</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        ...</span></span>
<span class="line"><span style="color:#F07178;">        xxxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 片元着色器</span></span>
<span class="line"><span style="color:#A6ACCD;">CCProgram standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 头文件区域</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">cc-xxx</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">cc-xxxx</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// vs 输入区域</span></span>
<span class="line"><span style="color:#F07178;">    in vec3 v_xxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#F07178;">        in mediump vec2 v_shadowBias</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    ...</span></span>
<span class="line"><span style="color:#F07178;">    in vec3 v_xxxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ps 执行区域</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">surf</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">out StandardSurface s</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        xxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#if</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CC_RECEIVE_SHADOW</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowBias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> v_shadowBias</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">#endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        ...</span></span>
<span class="line"><span style="color:#F07178;">        xxxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div>`,14),e=[o];function t(c,i,r,y,F,D){return a(),n("div",null,e)}const f=s(p,[["render",t]]);export{C as __pageData,f as default};
