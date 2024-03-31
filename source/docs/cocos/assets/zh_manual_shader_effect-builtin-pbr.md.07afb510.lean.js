import{_ as e,v as s,b as l,R as r}from"./chunks/framework.5ffcbaff.js";const a="/docs/cocos/assets/pbr-maps.6308392f.png",o="/docs/cocos/assets/final_alarmclock.9e9be781.jpg",n="/docs/cocos/assets/albedo.8e312849.jpg",i="/docs/cocos/assets/albedo-map.551aaa56.png",g="/docs/cocos/assets/roughness.58b69784.jpg",t="/docs/cocos/assets/use-pbr-map.ab79ffee.png",d="/docs/cocos/assets/metallic.ef3c47d1.jpg",c="/docs/cocos/assets/ao.7c9b1d58.jpg",p="/docs/cocos/assets/occlusion-map.617aa74c.png",f="/docs/cocos/assets/normal.d938798d.jpg",h="/docs/cocos/assets/normal-map.6a9a1098.png",b="/docs/cocos/assets/emission-map.02a66d5c.png",m="/docs/cocos/assets/leaves.2297ee0f.jpg",u="/docs/cocos/assets/alpha-cutoff.b9bcd7e1.png",R="/docs/cocos/assets/transparency.1e3bbad2.png",x="/docs/cocos/assets/standard-material-graph.9318cd47.png",y="/docs/cocos/assets/pbr-param.06fa61e8.png",T=JSON.parse('{"title":"基于物理的光照模型（Physically Based Rendering - PBR）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/effect-builtin-pbr.md","filePath":"zh/manual/shader/effect-builtin-pbr.md"}'),P={name:"zh/manual/shader/effect-builtin-pbr.md"},_=r('<h1 id="基于物理的光照模型-physically-based-rendering-pbr" tabindex="-1">基于物理的光照模型（Physically Based Rendering - PBR） <a class="header-anchor" href="#基于物理的光照模型-physically-based-rendering-pbr" aria-label="Permalink to &quot;基于物理的光照模型（Physically Based Rendering - PBR）&quot;">​</a></h1><p>Cocos Creator 从 v3.0 开始提供了基于物理渲染（PBR）的光照着色器：<code>builtin-standard.effect</code>。PBR 根据现实中光线传播原理和能量守恒定律，模拟出近似于真实物理光照的效果。</p><p>PBR 的优势在于：</p><ul><li>真实性：基于物理原理的渲染让最终效果更加逼真</li><li>一致性：美术制作流程规范化、制作标准统一化</li><li>复用性：模型材质与光照环境分离，在所有 PBR 项目中均可复用</li></ul><h2 id="使用-pbr-制作材质和纹理" tabindex="-1">使用 PBR 制作材质和纹理 <a class="header-anchor" href="#使用-pbr-制作材质和纹理" aria-label="Permalink to &quot;使用 PBR 制作材质和纹理&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 面板中手动创建的材质，默认使用的是 <code>builtin-standard.effect</code> 着色器，我们称之为 PBR 材质，PBR 材质使用 PBR 流程中的 Metal/Roughness 工作流。</p><p>在使用 PBR 材质进行渲染时，为获得正确的渲染效果，至少需要设置材质的 <strong>固有色（Albedo）</strong>、<strong>粗糙度（Roughness）</strong> 和 <strong>金属度（Metallic）</strong>。这些都可以在材质资源属性面板中进行设置：</p><p><img src="'+a+'" alt="image"></p><p>除了在材质属性面板中直接赋予数值以外，也可以为材质的固有色（Albedo）、粗糙度（Roughness）、金属度（Metallic）赋予 <strong>贴图</strong>，以更精准地进行材质表达。除此之外，可以为材质赋予法线（Normal）贴图以获得更多表面结构细节，环境光遮蔽（Ambient Occlusion） 贴图以获得细节明暗关系，自发光（Emissive）贴图以获得自发光效果。</p><p>接下来我们以下图为例，看一下通过设置上述材质参数获得的效果：</p><p><img src="'+o+'" alt="flakes.jpg"></p><h3 id="固有色-albedo" tabindex="-1">固有色（Albedo） <a class="header-anchor" href="#固有色-albedo" aria-label="Permalink to &quot;固有色（Albedo）&quot;">​</a></h3><p><img src="'+n+'" alt="flakes.jpg"></p><p>固有色（Albedo）用于表达材质在没有光照情况下所表达的颜色信息。美术上，可以将固有色理解为用肉眼观察时材质所表达的颜色信息。</p><p>在 PBR 流程中，固有色代表的是材质 <strong>非金属</strong> 部分的 <strong>漫反射</strong>（Diffuse）颜色，与材质 <strong>金属</strong> 部分的 <strong>高光</strong>（Specular）颜色的集合。</p><blockquote><p><strong>注意</strong>：在 Metal / Roughness 工作流中，所有金属的漫反射（Diffuse）颜色都是黑色，肉眼所见的颜色表现是由金属反射光线所产生的。而在非 Metal / Roughness 工作流中，金属的颜色是由高光（Specular）颜色决定。使用非 Metal / Roughness 工作流制作的颜色贴图，将不能在 Cocos Creator 默认的 PBR 材质中正确渲染金属的颜色信息。</p></blockquote><p>用户可以在材质属性面板的 <strong>Albedo</strong> 属性中直接设置固有色颜色，也可以勾选 <code>USE ALBEDO MAP</code>，为材质指定一张 sRGB 颜色空间的 RGBA 贴图。</p><p><img src="'+i+'" alt="albedo"></p><p>依据标准 PBR 流程的制作准则，为了获得符合物理现实的渲染效果，在制作固有色贴图的过程中需要注意：</p><ul><li>固有色的 sRGB 数值最高不超过 <strong>240</strong>，根据材质的不同最低不低于 <strong>30~50</strong>。</li><li>在表达金属的固有色时，需要遵循金属 <strong>70%~100%</strong> 镜面反射率的物理规律，其 sRGB 取值范围为 <strong>180~255</strong>。</li></ul><h3 id="粗糙度-roughness" tabindex="-1">粗糙度（Roughness） <a class="header-anchor" href="#粗糙度-roughness" aria-label="Permalink to &quot;粗糙度（Roughness）&quot;">​</a></h3><p><img src="'+g+'" alt="flakes.jpg"></p><p>粗糙度（Roughness）用于表达材质因其表面细微的结构细节所导致的反光强弱程度，其取值范围为 [0, 1]。</p><ul><li>当粗糙度设置为 0 时，表示材质表面绝对光滑，镜面反射率达到 100%。</li><li>当粗糙度设置为 1 时，表示材质表面绝对粗糙，镜面反射率为 0%</li></ul><p>用户可以在材质属性面板的 <strong>Roughness</strong> 属性中直接设置粗糙度。或者为 PBR 材质指定一张 sRGB 颜色空间的 RGBA 贴图，通过贴图的 <strong>绿通道</strong> 表达粗糙度，操作步骤如下：</p><p>在 <strong>资源管理器</strong> 中选中 PBR 材质资源，然后在 <strong>属性检查器</strong> 中勾选 <strong>USE PBR MAP</strong> 属性，将 RGBA 贴图拖拽到出现的 <strong>PbrMap</strong> 属性框中；</p><p><img src="'+t+'" alt="matallic 贴图"></p><h3 id="金属度-metallic" tabindex="-1">金属度（Metallic） <a class="header-anchor" href="#金属度-metallic" aria-label="Permalink to &quot;金属度（Metallic）&quot;">​</a></h3><p><img src="'+d+'" alt="flakes.jpg"></p><p>金属度（Metallic）用于表达材质的金属属性，其取值范围为 [0, 1]。在使用过程中，通常设置为 0 或者 1。</p><ul><li>当金属度为 <strong>0</strong> 时，表示材质为非金属。</li><li>当金属度为 <strong>1</strong> 时，表示材质为金属。</li><li>当金属度为 <strong>0~1</strong> 之间的浮点数时，通常用于表示表面带有非金属脏迹的金属。</li></ul><blockquote><p><strong>注意</strong>：当金属度设置为 1 时，材质被认定为金属。因为随着金属度的提升，材质会发生以下变化，进而使其表现出金属的特征：</p><ul><li>固有色比金属度为 0 时的明度和饱和度更低；</li><li>材质高光部分的颜色混合了材质的固有色；</li><li>反射光更趋近于固有色。</li></ul></blockquote><p>用户可以在材质属性面板的 <strong>Metallic</strong> 属性中直接设置金属度。或者为材质指定一张 sRGB 颜色空间的 RGBA 贴图，通过贴图的 <strong>蓝通道</strong> 表达金属度，操作步骤如下：</p><p>在 <strong>资源管理器</strong> 中选中 PBR 材质资源，然后在 <strong>属性检查器</strong> 中勾选 <strong>USE PBR MAP</strong> 属性，将 RGBA 贴图拖拽到出现的 <strong>PbrMap</strong> 属性框中；</p><p><img src="'+t+'" alt="粗糙度贴图"></p><h3 id="环境光遮蔽-ambient-occlusion" tabindex="-1">环境光遮蔽（Ambient Occlusion） <a class="header-anchor" href="#环境光遮蔽-ambient-occlusion" aria-label="Permalink to &quot;环境光遮蔽（Ambient Occlusion）&quot;">​</a></h3><p><img src="'+c+'" alt="flakes.jpg"></p><p>环境光遮蔽（Ambient Occlusion）用于表达材质因表面的结构细节所导致的明暗关系。美术上，可以将环境光遮蔽理解为模型自身结构所产生的阴影。</p><p>用户可以为 PBR 材质指定一张 sRGB 颜色空间的 RGBA 贴图，通过贴图的 <strong>红通道</strong> 表达环境光遮蔽关系，操作步骤如下：</p><ol><li><p>在 <strong>资源管理器</strong> 中选中 PBR 材质资源，然后在 <strong>属性检查器</strong> 中勾选 <strong>USE PBR MAP</strong> 属性，将 RGBA 贴图拖拽到出现的 <strong>PbrMap</strong> 属性框中；</p></li><li><p>勾选 <strong>USE OCCLUSION MAP</strong>，将 RGBA 贴图拖拽到出现的 <strong>OcclusionMap</strong> 属性框中。</p></li></ol><p><img src="'+p+'" alt="环境光遮蔽"></p><h3 id="法线-normal" tabindex="-1">法线（Normal） <a class="header-anchor" href="#法线-normal" aria-label="Permalink to &quot;法线（Normal）&quot;">​</a></h3><p><img src="'+f+'" alt="flakes.jpg"></p><p>法线（Normal）贴图是一张用 sRGB 颜色空间的 RGB 数值代表模型切线空间的顶点坐标位置的贴图。其作用是将贴图中的顶点坐标数据叠加到模型自身的顶点坐标数据上参与 PBR 光影的计算，使顶点数量较低的低模也能够表现顶点数量较高的高模的光影变化效果。美术上，可以将法线贴图理解为一张表达物体表面结构细节的贴图。</p><p>法线贴图通常有两种制作方法：</p><ol><li>分别制作一个顶点数量较高的高模和一个顶点数量较低的低模，将高模的顶点坐标数据烘培到一张使用低模的 UV 的贴图上</li><li>将一张图片资源的类型转换为法线贴图</li></ol><p><img src="'+h+'" alt="法线贴图"></p><blockquote><p><strong>注意</strong>：在从高模烘培法线时，请确保烘培器使用右手坐标系（Y 轴向上）和 MIKK 切线空间算法。</p></blockquote><h3 id="自发光-emissive" tabindex="-1">自发光（Emissive） <a class="header-anchor" href="#自发光-emissive" aria-label="Permalink to &quot;自发光（Emissive）&quot;">​</a></h3><p>自发光颜色（Emissive）表达材质自身作为光源向外发光的颜色信息。</p><p>用户可以在材质属性面板的 <strong>Emissive</strong> 属性中直接设置自发光。或者为 PBR 材质指定一张 sRGB 颜色空间的 RGBA 贴图，操作步骤如下：</p><ol><li><p>在 <strong>资源管理器</strong> 中选中 PBR 材质资源，然后在 <strong>属性检查器</strong> 中勾选 <strong>USE EMISSIVE MAP</strong> 属性，将 RGBA 贴图拖拽到出现的 <strong>EMISSIVEMAP</strong> 属性框中；</p></li><li><p>然后通过 <strong>EmissiveScale</strong> 属性调节自发光颜色的红、绿、蓝通道的发光强度。</p><blockquote><p><strong>注意</strong>：通常将 <strong>EmissiveScale</strong> 属性值设置为 <strong>1</strong> 以上来配合自发光使用。当 <strong>EmissiveScale</strong> 设置为 1 时，材质的自发光效果等同于 <code>builtin-unlit.effect</code> 材质。</p></blockquote></li></ol><p><img src="'+b+'" alt="自发光（Emissive）"></p><h3 id="模板遮罩-stencil" tabindex="-1">模板遮罩（Stencil） <a class="header-anchor" href="#模板遮罩-stencil" aria-label="Permalink to &quot;模板遮罩（Stencil）&quot;">​</a></h3><p><img src="'+m+'" alt="flakes.jpg"></p><p>当渲染使用了模板遮罩（Stencil）的材质时，可开启 PBR 材质的 Alpha Test 功能，将遮罩之外的片元去除。步骤如下：</p><ul><li>将模板遮罩（Stencil）作为 <strong>Alpha 通道</strong> 或 <strong>红通道</strong>，存储在固有色贴图中；</li><li>在 <strong>资源管理器</strong> 中创建一个新的材质，参考上文 <strong>固有色</strong> 部分的内容，将固有色贴图挂载到新的材质上；</li><li>勾选 <strong>USE ALPHA TEST</strong>，在下方显示的 <strong>ALPHA TEST CHANNEL</strong> 属性中选择模板遮罩（Stencil）所在的 Alpha 通道（对应属性中的 <strong>a</strong> 项）或者红通道（对应属性中的 <strong>r</strong> 项）；</li><li>在 <code>ALPHA TEST CHANNEL</code> 参数中选择模板遮罩（Stencil）所在的通道（Alpha 通道或红通道）；</li><li>通过 <strong>AlphaThreshold</strong> 属性调节抛弃片元明度的阈值；</li><li>如果有需要，可参考上文实现法线、环境光遮蔽等效果。</li></ul><p><img src="'+u+'" alt="模板遮罩（Stencil）"></p><h3 id="透明材质" tabindex="-1">透明材质 <a class="header-anchor" href="#透明材质" aria-label="Permalink to &quot;透明材质&quot;">​</a></h3><p>材质属性面板中的 <strong>Technique</strong> 属性用于渲染透明或半透明材质，当设置为 <strong>1-transparent</strong> 时，将开启 Alpha Blending 功能，切换为渲染透明材质模式。</p><p><img src="'+R+'" alt="透明材质"></p><p>当切换到透明材质模式时，材质所有的功能与不透明模式没有差别。用户可以依照上述的工作流程进行材质制作。</p><h3 id="pbr-主要参数组装流程" tabindex="-1">PBR 主要参数组装流程 <a class="header-anchor" href="#pbr-主要参数组装流程" aria-label="Permalink to &quot;PBR 主要参数组装流程&quot;">​</a></h3><p><img src="'+x+'" alt="pbr 组装流程"></p><h2 id="pbr-宏定义" tabindex="-1">PBR 宏定义 <a class="header-anchor" href="#pbr-宏定义" aria-label="Permalink to &quot;PBR 宏定义&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">宏定义</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">USE_INSTANCING</td><td style="text-align:left;">是否启用几何体实例化</td></tr><tr><td style="text-align:left;">HAS_SECOND_UV</td><td style="text-align:left;">是否存在第二套 UV</td></tr><tr><td style="text-align:left;">USE_TWOSIDE</td><td style="text-align:left;">是否开启双面</td></tr><tr><td style="text-align:left;">IS_ANISOTROPY</td><td style="text-align:left;">是否开启各向异性光照</td></tr><tr><td style="text-align:left;">USE_VERTEX_COLOR</td><td style="text-align:left;">是否启用顶点颜色。如果启用，顶点色会与固有色颜色相乘</td></tr><tr><td style="text-align:left;">FIX_ANISOTROPIC_ROTATION_MAP</td><td style="text-align:left;">是否使用各向异性光照旋转图</td></tr><tr><td style="text-align:left;">USE_ALBEDO_MAP</td><td style="text-align:left;">是否使用固有色射贴图</td></tr><tr><td style="text-align:left;">ALBEDO_UV</td><td style="text-align:left;">指定采样固有色贴图使用的 UV，默认使用第一套</td></tr><tr><td style="text-align:left;">USE_NORMAL_MAP</td><td style="text-align:left;">是否使用法线贴图</td></tr><tr><td style="text-align:left;">DEFAULT_UV</td><td style="text-align:left;">默认 UV，默认使用第一套</td></tr><tr><td style="text-align:left;">USE_PBR_MAP</td><td style="text-align:left;">是否使用 PBR 参数三合一贴图（<strong>按 glTF 标准，RGB 通道必须分别对应环境光遮蔽、粗糙度和金属度</strong>）</td></tr><tr><td style="text-align:left;">USE_OCCLUSION_MAP</td><td style="text-align:left;">是否使用环境光遮蔽贴图（<strong>按 glTF 标准，只会使用 R 通道</strong>）</td></tr><tr><td style="text-align:left;">USE_EMISSIVE_MAP</td><td style="text-align:left;">是否使用自发光贴图</td></tr><tr><td style="text-align:left;">EMISSIVE_UV</td><td style="text-align:left;">指定采样自发光贴图使用的 UV，默认使用第一套</td></tr><tr><td style="text-align:left;">USE_ALPHA_TEST</td><td style="text-align:left;">是否开启透明测试（镂空效果）</td></tr><tr><td style="text-align:left;">ALPHA_TEST_CHANNEL</td><td style="text-align:left;">指定透明测试的测试通道，默认为 A 通道</td></tr></tbody></table><p>更多 PBR 原理相关的内容，请参考 <a href="https://learnopengl-cn.github.io/07%20PBR/01%20Theory/#pbr" target="_blank" rel="noreferrer">PBR 理论</a>。</p><h2 id="pbr-参数" tabindex="-1">PBR 参数 <a class="header-anchor" href="#pbr-参数" aria-label="Permalink to &quot;PBR 参数&quot;">​</a></h2><p>在外部代码编辑器中打开 <strong>资源管理器</strong> 面板中 <code>internal -&gt; effects</code> 目录下的 <code>builtin-standard.effect</code>，可以看到参数如下：</p><p><img src="'+y+'" alt="PBR 参数"></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">tilingOffset</td><td style="text-align:left;">模型 UV 的缩放和偏移量，xy 对应缩放，zw 对应偏移</td></tr><tr><td style="text-align:left;">mainColor</td><td style="text-align:left;">用于指定模型的固有色或固有色贴图，在 <strong>属性检查器</strong> 中的名称显示为 <strong>albedo</strong></td></tr><tr><td style="text-align:left;">albedoMap/mainTexture</td><td style="text-align:left;">固有色贴图，如果有指定，这项会和固有色颜色相乘</td></tr><tr><td style="text-align:left;">albedoScale</td><td style="text-align:left;">模型的固有色强度，用于控制固有色颜色对于最终颜色的影响权重</td></tr><tr><td style="text-align:left;">alphaThreshold</td><td style="text-align:left;">半透明测试阈值，alpha 值低于此值的像素会被 discard 掉</td></tr><tr><td style="text-align:left;">normalMap</td><td style="text-align:left;">法线贴图，用于增加表面细节</td></tr><tr><td style="text-align:left;">normalStrength</td><td style="text-align:left;">法线贴图强度，控制凹凸质感的强弱</td></tr><tr><td style="text-align:left;">pbrMap<br><strong>R</strong>（AO）<br><strong>G</strong>（Roughness）<br><strong>B</strong>（Metallic）</td><td style="text-align:left;">PBR 材质参数贴图，采样结果会和常数项相乘<br>R 通道：环境光遮蔽<br>G 通道：粗糙度<br>B 通道：金属度</td></tr><tr><td style="text-align:left;">occlusionMap</td><td style="text-align:left;">独立的环境光遮蔽贴图<br>采样结果会和常数项相乘</td></tr><tr><td style="text-align:left;">occlusion</td><td style="text-align:left;">环境光遮蔽系数</td></tr><tr><td style="text-align:left;">roughness</td><td style="text-align:left;">粗糙度系数</td></tr><tr><td style="text-align:left;">metallic</td><td style="text-align:left;">金属度系数</td></tr><tr><td style="text-align:left;">specularIntensity</td><td style="text-align:left;">高光强度，该值相当于基准反射率 F0 的倍增，仅对非金属有效</td></tr><tr><td style="text-align:left;">emissive</td><td style="text-align:left;">自发光颜色，独立于光照计算，由模型本身直接发散出的颜色</td></tr><tr><td style="text-align:left;">emissiveMap</td><td style="text-align:left;">自发光贴图<br>如果有指定，这项会和自发光颜色相乘，因此需要把自发光颜色（默认是黑色）调高才会有效果</td></tr><tr><td style="text-align:left;">emissiveScale</td><td style="text-align:left;">自发光强度<br>用于控制自发光颜色对于最终颜色的影响权重</td></tr></tbody></table><p>想了解更多关于内置 PBR 材质的实现细节，请前往 <a href="./surface-shader/builtin-surface-shader.html">内置 Surface Shader</a>。</p>',72),B=[_];function A(S,E,M,q,k,U){return s(),l("div",null,B)}const G=e(P,[["render",A]]);export{T as __pageData,G as default};
