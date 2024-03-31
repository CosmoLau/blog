import{_ as t,v as e,b as a,R as l}from"./chunks/framework.5ffcbaff.js";const s="/docs/cocos/assets/material.8fd2fd68.png",o="/docs/cocos/assets/material3.6c5d0767.png",c="/docs/cocos/assets/material10.c69ce32f.jpg",n="/docs/cocos/assets/material-v3.76ce8aec.png",d="/docs/cocos/assets/material-v2x.34ae11e4.png",r="/docs/cocos/assets/material-panel-v2x.2d8123b0.png",i="/docs/cocos/assets/material4.23f16929.jpg",p="/docs/cocos/assets/material4.1.e8c5bf62.jpg",h="/docs/cocos/assets/material5.ce26e03c.jpg",v=JSON.parse('{"title":"Cocos Creator 3.0 材质升级指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/material-system/effect-2.x-to-3.0.md","filePath":"zh/manual/material-system/effect-2.x-to-3.0.md"}'),y={name:"zh/manual/material-system/effect-2.x-to-3.0.md"},f=l('<h1 id="cocos-creator-3-0-材质升级指南" tabindex="-1">Cocos Creator 3.0 材质升级指南 <a class="header-anchor" href="#cocos-creator-3-0-材质升级指南" aria-label="Permalink to &quot;Cocos Creator 3.0 材质升级指南&quot;">​</a></h1><blockquote><p>本文将详细介绍 Cocos Creator 2.x 的材质升级到 v3.0 的注意事项。</p></blockquote><h2 id="_1-材质系统基础设计简介" tabindex="-1">1. 材质系统基础设计简介 <a class="header-anchor" href="#_1-材质系统基础设计简介" aria-label="Permalink to &quot;1. 材质系统基础设计简介&quot;">​</a></h2><h3 id="_1-1-cocos-creator-的材质系统框架" tabindex="-1">1.1 Cocos Creator 的材质系统框架 <a class="header-anchor" href="#_1-1-cocos-creator-的材质系统框架" aria-label="Permalink to &quot;1.1 Cocos Creator 的材质系统框架&quot;">​</a></h3><p>材质系统自上至下由四个核心类组成，分别是 Material、Effect、Technique 和 Pass，它们的关系可以通过下面的类图来理解：</p><p><img src="'+s+'" alt="effect"></p><h4 id="material" tabindex="-1">Material <a class="header-anchor" href="#material" aria-label="Permalink to &quot;Material&quot;">​</a></h4><p>Material 资源可以看成是 EffectAsset 在场景中的资源实例，它本身的可配置参数有 effectAsset、technique、defines、states。</p><h4 id="cocos-shader" tabindex="-1">Cocos Shader <a class="header-anchor" href="#cocos-shader" aria-label="Permalink to &quot;Cocos Shader&quot;">​</a></h4><p>Cocos Shader 以 *.effect 作为后缀名，一个 Effect 文件表一种材质类型，是材质系统中最重要的核心资源，它决定了一个可渲染对象的最终效果。</p><h4 id="technique" tabindex="-1">Technique <a class="header-anchor" href="#technique" aria-label="Permalink to &quot;Technique&quot;">​</a></h4><p>我们把完成一个最终效果的方案称为一个渲染技术 Technique，一个技术可由一个或多个 Pass 来融合完成。</p><h4 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h4><p>一个 Pass 就是一次 GPU 绘制，一般包括一次顶点着色器和一次片元着色器，在 Creator 里 Pass 有很多可选配置参数。</p><h3 id="_1-2-material-材质实例面板" tabindex="-1">1.2 Material 材质实例面板 <a class="header-anchor" href="#_1-2-material-材质实例面板" aria-label="Permalink to &quot;1.2 Material 材质实例面板&quot;">​</a></h3><p>Material 材质实例是所有开发者接触到的最直观的材质编辑窗口，所有实际材质实例的配置都是通过它完成的。</p><p>Cocos Creator 3.0 的 Material 实例面板如下：</p><p><img src="'+o+'" alt="effect"></p><p>Cocos Creator 2.x 的 Material 实例面板如下：</p><p><img src="'+c+'" alt="effect"></p><p>由上面两图可以看出 v3.0 的实例面板相比 v2.4 的会复杂不少，一方面是由于材质配置复杂度有所增加，另一方面也是因为面板功能有所增强。</p><h4 id="材质面板的可配置项主要分为五种类型" tabindex="-1">材质面板的可配置项主要分为五种类型 <a class="header-anchor" href="#材质面板的可配置项主要分为五种类型" aria-label="Permalink to &quot;材质面板的可配置项主要分为五种类型&quot;">​</a></h4><ol><li>Effect 资源：即 Cocos Shader 文件，下拉框会列出当前项目中所有的 Cocos Shader（*.effect） 资源文件，开发者可以选择当前材质使用的 Cocos Shader。切换后其他属性也会同步更新。</li><li>Technique 渲染技术选择：下拉框会列出当前使用的 Effect 资源中所有的 Technique，资源中可能会存在多个 Technique，每个 Technique 适用于不同的情况，比如效果差一点但是性能更好的 Technique 更适合用于手机平台。</li><li>宏选项：通过这些宏来控制某些代码是否可以被启用（对应逐个 Pass）。</li><li>属性列表（根据宏定义动态开放），并且使用不同的输入框适应不同类型的属性。编辑器的可编辑属性一般是 shader 中的某个 uniform 的映射，从 v3.0 开始也可以指定某个分量的映射（在 CCEffect 中使用 target 参数）</li><li>在 v3.0 还新增了 PipelineStates 选项，主要用于定义材质依赖的管线状态，比如 DepthStencilState、BlendState、CullMode 等。</li></ol><h3 id="_1-3-编辑器体验" tabindex="-1">1.3 编辑器体验 <a class="header-anchor" href="#_1-3-编辑器体验" aria-label="Permalink to &quot;1.3 编辑器体验&quot;">​</a></h3><p>v2.x 与 v3.0 在材质系统的编辑器体验上也有一定的区别。</p><p>v3.0 在 <strong>层级管理器</strong> 中选中包含模型和材质的节点后，<strong>属性检查器</strong> 面板会显示各组件属性以及详细的 Material 配置面板：</p><p><img src="'+n+'" alt="effect"></p><p>而 v2.x 在 <strong>层级管理器</strong> 中选中包含模型和材质的节点后，<strong>属性检查器</strong> 面板只会显示各组件属性，并不会直接显示详细的 Material 配置面板：</p><p><img src="'+d+'" alt="effect"></p><p>而是需要跳转到 <strong>资源管理器</strong> 面板选中 Material 资源才可以在 <strong>属性检查器</strong> 中编辑：</p><p><img src="'+r+'" alt="effect"></p><h2 id="_2-cocos-shader-资源" tabindex="-1">2. Cocos Shader 资源 <a class="header-anchor" href="#_2-cocos-shader-资源" aria-label="Permalink to &quot;2. Cocos Shader 资源&quot;">​</a></h2><p>Cocos Shader 文件后缀名为 *.effect。</p><p>这个章节主要介绍资源在 v2.x 和 v3.0 的共性和差异。</p><h3 id="_2-1-cocos-shader-格式和内容" tabindex="-1">2.1 Cocos Shader 格式和内容 <a class="header-anchor" href="#_2-1-cocos-shader-格式和内容" aria-label="Permalink to &quot;2.1 Cocos Shader 格式和内容&quot;">​</a></h3><p>在 v2.x 和 v3.0 中，Cocos Shader 的 effect 文件均采用 YAML1.2 标准的语法和解析器，两个版本之间的差别不大。按照 <a href="./yaml-101.html">语法格式</a> 编写，可以定义以下信息：</p><ul><li>Technique 渲染技术列表</li><li>每个 Technique 的 pass 列表</li><li>每个 Pass 中所暴露给编辑器可编辑的属性列表（包含编辑器内的数据类型指定、分量映射关系等）</li><li>每个 Pass 的着色器程序，包含顶点和片元着色器程序</li></ul><p>在语法细节方面，诸如 Property 声明和宏定义的方式都是一致的：</p><p><img src="'+i+'" alt="effect"></p><p><img src="'+p+'" alt="effect"></p><p><img src="'+h+`" alt="effect"></p><h3 id="_2-2-预设材质类型" tabindex="-1">2.2 预设材质类型 <a class="header-anchor" href="#_2-2-预设材质类型" aria-label="Permalink to &quot;2.2 预设材质类型&quot;">​</a></h3><p>v2.x 和 v3.0 在预设值材质方面有比较大的区别。</p><ul><li><p>v2.x 的预设材质包括 2D Sprite、经典的 blinn-phong 光照材质、无光照 unlit 材质、默认的卡通 toon 材质、粒子材质等。</p></li><li><p>v3.0 的预设材质则是基于物理的渲染体系，包含基于物理光照的 standard PBR 材质、Skybox、toon 卡通渲染材质、3D 粒子材质（CPU &amp; GPU）、粒子拖尾材质、传统的 2D Sprite 材质等。</p></li></ul><p>v3.0 默认的 standard 材质支持标准的 Physically Based Rendering (PBR) 流程，其中包含很多提升材质质量和真实感的贴图信息，比如漫反射贴图、法线贴图、金属度（metallic）、粗糙度（roughness）、环境光遮蔽（occlusion）等等。整套算法基于标准的 BRDF 光照模型，这些是 v2.x 所不具备的，整体画面表现上 v3.0 也比 v2.x 要高一个档次。</p><h3 id="_2-3-cocos-shader-文件格式差异" tabindex="-1">2.3 Cocos Shader 文件格式差异 <a class="header-anchor" href="#_2-3-cocos-shader-文件格式差异" aria-label="Permalink to &quot;2.3 Cocos Shader 文件格式差异&quot;">​</a></h3><p>尽管 Cocos Shader 的语法规则在 v2.x 和 v3.0 基本是一致的，但很多内置的头文件、变量名以及函数名还是有区别的。</p><p>以获取主方向光源的方向为例，在 v3.0 里是 <code>cc_mainLitDir</code>，同时要包含头文件 <code>cc-global</code>。而在 v2.x 中想要获取光源方向要用到 <code>cc_lightDirection[i]</code> 这样一个数组，同时要包含头文件 <code>cc-lights</code>。具体的差异可参考下方第三点 <strong>API 升级指南</strong> 部分的介绍。</p><p>一些默认的着色器函数是 v3.0 独有的，例如 <code>CCStandardShading</code>、<code>CCToonShading</code> 等，这些在 v2.x 上是没有的。同样可以参考下方第三点 <strong>API 升级指南</strong> 部分的介绍。</p><p>关于 uniform 声明方面，v3.0 强制使用 UBO 来组织，内存布局方面强制最小单位为 vec4，不再支持单独声明 float 或 vec3 等类型的 uniform。</p><p>在头文件方面，v3.0 的编辑器内置头文件资源就在 <strong>Internal DB</strong> 的 <code>assets/chunks</code> 目录下。引用时可以不加目录直接引用，主要包括一些常用的 <strong>工具函数</strong> 和 <strong>标准光照模型</strong> 等。而 v2.x 的头文件是内置在编辑器中，无法直观地了解具体有哪些。</p><h3 id="_2-4-新增-pass-选项" tabindex="-1">2.4 新增 Pass 选项 <a class="header-anchor" href="#_2-4-新增-pass-选项" aria-label="Permalink to &quot;2.4 新增 Pass 选项&quot;">​</a></h3><p>v3.0 新增了一些新的 Pass 选项：</p><ul><li><p><code>PropertyIndex</code>：指定这个 pass 的运行时 uniform 属性数据要和哪个 pass 保持一致，比如 forward add 等 pass 需要和 base pass 一致才能保证正确的渲染效果。一旦指定了此参数，材质面板上就不再会显示这个 pass 的任何属性。</p></li><li><p><code>embeddedMacros</code>：指定在这个 pass 的 shader 基础上额外定义的常量宏。在多个 pass 的 shader 中只有宏定义不同时可使用此参数来复用 shader 资源。</p></li></ul><p>详细的 Pass 参数请参考 <a href="./pass-parameter-list.html">参数列表</a>。</p><h2 id="_3-api-升级指南" tabindex="-1">3. API 升级指南 <a class="header-anchor" href="#_3-api-升级指南" aria-label="Permalink to &quot;3. API 升级指南&quot;">​</a></h2><h3 id="_3-1-内置-uniform-差异列表" tabindex="-1">3.1 内置 Uniform 差异列表 <a class="header-anchor" href="#_3-1-内置-uniform-差异列表" aria-label="Permalink to &quot;3.1 内置 Uniform 差异列表&quot;">​</a></h3><p>如果要在 shader 中使用内置变量，则需要包含对应头文件。下表是常用功能 uniform 汇总表，有很多功能 v2.x 与 v3.0 是一样的，而有一些是有区别的。</p><table><thead><tr><th style="text-align:left;">v2.x Header &amp; Name</th><th style="text-align:left;">v3.0 Header &amp; Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">用途</th><th style="text-align:left;">版本差异性</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc-local.chunk</code> &amp; <code>cc_matWorld</code></td><td style="text-align:left;"><code>cc-local.chunk</code> &amp; <code>cc_matWorld</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">模型空间转世界空间矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-local.chunk</code> &amp; <code>cc_matWorldIT</code></td><td style="text-align:left;"><code>cc-local.chunk</code> &amp; <code>cc_matWorldIT</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">模型空间转世界空间逆转置矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_time</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_time</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：自开始以来的全球时间，以秒为单位<br>y：当前帧的增量时间<br>z：自开始以来的总帧数</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_screenSize</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_screenSize</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：屏幕尺寸<br>zw：屏幕尺寸倒数</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_screenScale</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_screenScale</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：屏幕比例<br>zw：逆屏幕比例</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;">无</td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_nativeSize</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：实际着色缓冲的尺寸<br>zw：实际着色缓冲的尺寸倒数</td><td style="text-align:left;">v3.0 新功能，v2.x 没有</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matView</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matView</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewInv</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图逆矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matProj</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">投影矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matProjInv</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matProjInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">投影逆矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewProj</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图投影矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewProjInv</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_matViewProjInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图投影逆矩阵</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_cameraPos</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_cameraPos</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：相机位置</td><td style="text-align:left;">无差异</td></tr><tr><td style="text-align:left;">无</td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_exposure</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：相机曝光<br>y：相机曝光倒数<br>z：是否启用 HDR<br>w：HDR 转 LDR 缩放参数</td><td style="text-align:left;">v3.0 新功能，v2.x 没有</td></tr></tbody></table><p><strong>另外，v2.x 与 v3.0 在光源和阴影方面差异很大，v3.0 相比 v2.x 有了很大的提升。下表列出了一些常用的功能 uniform。</strong></p><table><thead><tr><th style="text-align:left;">v2.x Header &amp; Name</th><th style="text-align:left;">v3.0 Header &amp; Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">用途</th><th style="text-align:left;">版本差异性</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc-lights.chunk</code> &amp; <code>cc_lightDirection[CC_MAX_LIGHTS]</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_mainLitDir</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">得到光源方向</td><td style="text-align:left;">v2.x：单个模型在 shader 中执行一次绘制受多少盏灯光影响，默认最大值为 1.0。如果要获取位置信息，填写 0 即可。例如 <code>cc_lightDirection[0]</code><br>v3.0：xyz：主方向光源方向</td></tr><tr><td style="text-align:left;"><code>cc-lights.chunk</code> &amp; <code>cc_lightColor[CC_MAX_LIGHTS]</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_mainLitColor</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">控制光的颜色强度</td><td style="text-align:left;">v2.x：光的 exp，就是光的 pow 强度。<br>v3.0：xyz — 主方向光颜色；w — 主方向光强度</td></tr><tr><td style="text-align:left;"><code>cc-lights.chunk</code> &amp; <code>CC_CALC_LIGHTS</code></td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_ambientSky</code></td><td style="text-align:left;">v2.x：宏定义<br>v3.0：vec4</td><td style="text-align:left;">控制天空颜色强度</td><td style="text-align:left;">v2.x：这是一个宏，通过穿进去的 ambient 参数进行计算。而且还有函数重载，可以传入不同的参数。<br>v3.0：xyz — 天空颜色；w — 亮度</td></tr><tr><td style="text-align:left;">无</td><td style="text-align:left;"><code>cc-global.chunk</code> &amp; <code>cc_ambientGround</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：地面反射光颜色</td><td style="text-align:left;">v3.0 新功能，v2.x 没有</td></tr><tr><td style="text-align:left;">无</td><td style="text-align:left;"><code>cc-environment.chunk</code> &amp; <code>cc_environment</code></td><td style="text-align:left;">samplerCube</td><td style="text-align:left;">xyz：IBL 环境贴图</td><td style="text-align:left;">v3.0 新功能，v2.x 没有</td></tr></tbody></table><h3 id="_3-2-shader-内建函数和变量" tabindex="-1">3.2 Shader 内建函数和变量 <a class="header-anchor" href="#_3-2-shader-内建函数和变量" aria-label="Permalink to &quot;3.2 Shader 内建函数和变量&quot;">​</a></h3><p>在 v3.0，如果需要对接引擎动态合批和 instancing 流程，需要包含 <code>cc-local-batch</code> 头文件，通过 <code>CCGetWorldMatrix</code> 工具函数获取世界矩阵。</p><h4 id="v3-0-新增着色函数" tabindex="-1">v3.0 新增着色函数 <a class="header-anchor" href="#v3-0-新增着色函数" aria-label="Permalink to &quot;v3.0 新增着色函数&quot;">​</a></h4><ul><li><p><code>CCStandardShading</code></p><p>函数名 <code>CCStandardShading</code> 需要包含头文件 <code>shading-standard.chunk</code>，用于进行光照计算，构成 surface shader 流程。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-standard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">output-standard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">surf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">out StandardSurface </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// fill in your data here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">vec4 </span><span style="color:#82AAFF;">frag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    StandardSurface s</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">surf</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    vec4 color </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCStandardShading</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCFragOutput</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在此框架下可方便地实现自己的 surface 输入，或其他 shading 算法。</p><blockquote><p><strong>注意</strong>：<code>CCFragOutput</code> 函数一般不需要自己实现，它只起到与渲染管线对接的作用。且对于含有光照计算的输出，因为计算结果已经在 HDR 范围，所以应该包含 <code>output-standard</code> 头文件而非 <code>output</code>。</p></blockquote></li><li><p><code>CCToonShading</code></p><p>函数名 <code>CCToonShading</code>，需要包含头文件 <code>shading-toon.chunk</code>，进行卡通渲染的光影计算。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">shading-toon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">output-standard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">surf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">out ToonSurface </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// fill in your data here</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">vec4 </span><span style="color:#82AAFF;">frag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    ToonSurface s</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">surf</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    vec4 color </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCToonShading</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CCFragOutput</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul><h3 id="_3-3-光影计算相关函数" tabindex="-1">3.3 光影计算相关函数 <a class="header-anchor" href="#_3-3-光影计算相关函数" aria-label="Permalink to &quot;3.3 光影计算相关函数&quot;">​</a></h3><p>v2.x 与 v3.0 的光影计算有很大不同，主要包括以下两部分内容。</p><h4 id="球面光" tabindex="-1">球面光 <a class="header-anchor" href="#球面光" aria-label="Permalink to &quot;球面光&quot;">​</a></h4><p>v2.x 中的 <strong>点光源</strong> 在 v3.0 调整为 <strong>球面光</strong>，有很多现成的功能，使用时需要加入头文件 <code>cc-forward-light.chunk</code>，常用功能 uniform 如下表所示：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_sphereLitPos[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：球面光位置</td></tr><tr><td style="text-align:left;"><code>cc_sphereLitSizeRange[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：球光尺寸<br>y：球光范围</td></tr><tr><td style="text-align:left;"><code>cc_sphereLitColor[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：球光颜色<br>w：球光强度</td></tr></tbody></table><p>更多详细信息请参考 <a href="./builtin-shader-uniforms.html">常用 shader 内置 Uniform</a>。</p><h4 id="聚光灯" tabindex="-1">聚光灯 <a class="header-anchor" href="#聚光灯" aria-label="Permalink to &quot;聚光灯&quot;">​</a></h4><p>v3.0 中的聚光灯有很多现成的功能，使用时需要加入头文件 <code>cc-forward-light.chunk</code>，常用功能 uniform 如下表所示：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_spotLitPos[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯位置</td></tr><tr><td style="text-align:left;"><code>cc_spotLitSizeRangeAngle[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：聚光灯尺寸<br>y：聚光灯范围<br>z：聚光灯角度</td></tr><tr><td style="text-align:left;"><code>cc_spotLitDir[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯方向</td></tr><tr><td style="text-align:left;"><code>cc_spotLitColor[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯颜色<br>w：聚光灯强度</td></tr></tbody></table><p>更多详细信息请参考 <a href="./builtin-shader-uniforms.html">常用 shader 内置 Uniform</a>。</p><h3 id="_3-4-阴影部分" tabindex="-1">3.4 阴影部分 <a class="header-anchor" href="#_3-4-阴影部分" aria-label="Permalink to &quot;3.4 阴影部分&quot;">​</a></h3><p>v2.x 与 v3.0 的阴影计算区别很大，v2.0 加入了头文件 <code>shadow.chunk</code>，而 v3.0 加入的是头文件 <code>cc-shadow.chunk</code>。</p><p><strong>v2.0 头文件 <code>shadow.chunk</code> 的常用功能 uniform 和函数如下所示</strong>：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_shadow_lightViewProjMatrix[CC_MAX_SHADOW_LIGHTS]</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">在灯光坐标下绘制阴影贴图</td></tr><tr><td style="text-align:left;"><code>cc_shadow_info[CC_MAX_SHADOW_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">计算阴影偏移</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Name（函数）</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>getDepth</code></td><td style="text-align:left;">float</td><td style="text-align:left;">返回深度值</td></tr><tr><td style="text-align:left;"><code>shadowSimple</code></td><td style="text-align:left;">float</td><td style="text-align:left;">阴影的硬采样会有锯齿问题</td></tr></tbody></table><p><strong>v3.0 头文件 <code>cc-shadow.chunk</code> 的常用功能 uniform 如下所示</strong>：</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_matLightPlaneProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">平面阴影的变换矩阵</td></tr><tr><td style="text-align:left;"><code>cc_shadowColor</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">阴影颜色</td></tr></tbody></table><h4 id="shadowpcf-软阴影" tabindex="-1">ShadowPCF 软阴影 <a class="header-anchor" href="#shadowpcf-软阴影" aria-label="Permalink to &quot;ShadowPCF 软阴影&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">头文件</th><th style="text-align:left;">函数</th></tr></thead><tbody><tr><td style="text-align:left;">v2.x：<code>shadow.chunk</code></td><td style="text-align:left;"><code>shadowPCF3X3</code>（<strong>3 * 3</strong> 采样）<br><code>shadowPCF5X5</code>（<strong>5 * 5</strong> 采样)</td></tr><tr><td style="text-align:left;">v3.0：<code>cc-shadow-map-fs.chunk</code></td><td style="text-align:left;"><code>CC_DIR_SHADOW_FACTOR</code>：直接修改内存中阴影颜色的数值</td></tr></tbody></table>`,84),g=[f];function x(m,u,b,F,D,C){return e(),a("div",null,g)}const A=t(y,[["render",x]]);export{v as __pageData,A as default};