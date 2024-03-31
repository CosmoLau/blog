import{_ as t,v as e,b as a,R as s}from"./chunks/framework.5ffcbaff.js";import{_ as r,a as o}from"./chunks/dir-fixedarea.d9d900d6.js";import{_ as l}from"./chunks/spot-light-shadow-prop.e51c1c3f.js";const n="/docs/cocos/assets/shadowExample.3c27083e.png",d="/docs/cocos/assets/enable-shadow.5ddc65c7.png",g="/docs/cocos/assets/enable-light-shadow.602532c1.png",i="/docs/cocos/assets/set-meshrenderer.aaa28749.png",h="/docs/cocos/assets/planar-properties.d1bebdcc.png",p="/docs/cocos/assets/shadowmap-properties.ebe0f84d.png",k=JSON.parse('{"title":"阴影","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/light/shadow.md","filePath":"zh/manual/concepts/scene/light/shadow.md"}'),c={name:"zh/manual/concepts/scene/light/shadow.md"},f=s('<h1 id="阴影" tabindex="-1">阴影 <a class="header-anchor" href="#阴影" aria-label="Permalink to &quot;阴影&quot;">​</a></h1><p>在 3D 世界中，光与影一直都是极其重要的组成部分，它们能够丰富整个环境，质量好的阴影可以达到以假乱真的效果，并且使得整个世界具有立体感。</p><p>Creator 3.0 目前支持 <strong>Planar</strong> 和 <strong>ShadowMap</strong> 两种阴影类型。</p><p><img src="'+n+'" alt="shadow"></p><h2 id="开启阴影" tabindex="-1">开启阴影 <a class="header-anchor" href="#开启阴影" aria-label="Permalink to &quot;开启阴影&quot;">​</a></h2><p>物体开启阴影效果的步骤如下：</p><ol><li><p>在 <strong>层级管理器</strong> 中选中 <strong>Scene</strong>，然后在 <strong>属性检查器</strong> 的 <strong>shadows</strong> 组件中勾选 <strong>Enabled</strong> 属性。</p><p><img src="'+d+'" alt="enable-shadow"></p></li><li><p>在 <strong>层级管理器</strong> 中选中 <strong>Light</strong>，然后在 <strong>属性检查器</strong> 的 <strong>Dynamic Shadow Settings</strong> 组件中勾选 <strong>Shadow Enabled</strong> 属性。</p><p><img src="'+g+'" alt="enable-shadow"></p></li><li><p>在 <strong>层级管理器</strong> 中选中需要显示阴影的 3D 节点，然后在 <strong>属性检查器</strong> 的 <strong>MeshRenderer</strong> 组件中将 <strong>ShadowCastingMode</strong> 属性设置为 <strong>ON</strong>。</p><p><img src="'+i+'" alt="set-meshrenderer"></p><p>若阴影类型是 <strong>ShadowMap</strong>，还需要将 MeshRenderer 组件上的 <strong>ReceiveShadow</strong> 属性设置为 <strong>ON</strong>。</p></li></ol><blockquote><p><strong>注意</strong>：如果阴影无法正常显示，需要调整一下方向光的照射方向。</p></blockquote><h2 id="shadows-类型" tabindex="-1">shadows 类型 <a class="header-anchor" href="#shadows-类型" aria-label="Permalink to &quot;shadows 类型&quot;">​</a></h2><p>阴影类型可在 shadows 组件的 <strong>Type</strong> 属性中设置。</p><h3 id="planar-shadow" tabindex="-1">Planar shadow <a class="header-anchor" href="#planar-shadow" aria-label="Permalink to &quot;Planar shadow&quot;">​</a></h3><p>Planar 阴影类型一般用于较为简单的场景。</p><p><img src="'+h+'" alt="planar properties"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Enabled</strong></td><td style="text-align:left;">是否开启阴影效果</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">阴影类型</td></tr><tr><td style="text-align:left;"><strong>Saturation</strong></td><td style="text-align:left;">调节阴影饱和度，建议设置为 <strong>1.0</strong>。若需要减小方向光阴影的饱和程度，推荐通过增加环境光来实现，而不是调节该值</td></tr><tr><td style="text-align:left;"><strong>ShadowColor</strong></td><td style="text-align:left;">设置阴影颜色</td></tr><tr><td style="text-align:left;"><strong>Normal</strong></td><td style="text-align:left;">阴影接收平面的法线，垂直于阴影，用于调整阴影的倾斜度</td></tr><tr><td style="text-align:left;"><strong>Distance</strong></td><td style="text-align:left;">阴影在接收平面上与坐标原点的距离</td></tr></tbody></table><p>调节方向光照射的方向可以调节阴影的投射位置。</p><blockquote><p><strong>注意</strong>：Planar 类型的阴影只有投射在平面上才能正常显示，不会投射在物体上，也就是说 MeshRenderer 组件中的 <strong>ReceiveShadow</strong> 属性是无效的。</p></blockquote><h3 id="shadowmap" tabindex="-1">ShadowMap <a class="header-anchor" href="#shadowmap" aria-label="Permalink to &quot;ShadowMap&quot;">​</a></h3><p>ShadowMap 是以光源为视点来渲染场景的。从光源位置出发，场景中看不到的地方就是阴影产生的地方。</p><p><img src="'+p+'" alt="shadow Map 面板细节"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Enabled</strong></td><td style="text-align:left;">勾选该项以开启阴影效果</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">设置阴影类型</td></tr><tr><td style="text-align:left;"><strong>MaxReceived</strong></td><td style="text-align:left;">最多支持产生阴影的光源数量，默认为 4 个，可根据需要自行调整</td></tr><tr><td style="text-align:left;"><strong>ShadowMapSize</strong></td><td style="text-align:left;">设置阴影贴图分辨率，目前支持 <strong>Low_256x256</strong>、<strong>Medium_512x512</strong>、<strong>High_1024x1024</strong>、<strong>Ultra_2048x2048</strong> 四种精度的纹理</td></tr></tbody></table><blockquote><p><strong>注意</strong>：从 v3.3 开始，<strong>属性检查器</strong> 中阴影的 <strong>Linear</strong>、<strong>Packing</strong> 项被移除，Creator 将自动判断硬件能力，并选用最优方式进行阴影渲染。</p></blockquote><p>ShadowMap 在开启了物体 <strong>MeshRenderer</strong> 组件上的 <strong>ReceiveShadow</strong> 后，就会接收并显示其它物体产生的阴影效果。</p><p>ShadowMap 一般用于要求光影效果比较真实，且较为复杂的场景。但不足之处在于如果不移动光源，那么之前生成的 ShadowMap 就可以重复使用，而一旦移动了光源，那么就需要重新计算新的 ShadowMap。</p><h2 id="阴影属性" tabindex="-1">阴影属性 <a class="header-anchor" href="#阴影属性" aria-label="Permalink to &quot;阴影属性&quot;">​</a></h2><p>在启用类型为 <strong>ShadowMap</strong> 的阴影后，光源的 <strong>属性检查器</strong> 内才会出现 <strong>动态阴影设置</strong> 选项。如未能正确开启，请参考上文 <strong>开启阴影</strong> 部分。</p><p>目前引擎对不同光源的 <strong>ShadowMap</strong> 支持情况如下：</p><table><thead><tr><th style="text-align:left;">光源类型</th><th style="text-align:left;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">平行光</td><td style="text-align:left;">支持</td></tr><tr><td style="text-align:left;">聚光灯</td><td style="text-align:left;">支持</td></tr><tr><td style="text-align:left;">球形光</td><td style="text-align:left;">不支持</td></tr></tbody></table><h3 id="平行光阴影属性" tabindex="-1">平行光阴影属性 <a class="header-anchor" href="#平行光阴影属性" aria-label="Permalink to &quot;平行光阴影属性&quot;">​</a></h3><p><img src="'+r+'" alt="image"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ShadowEnabled</td><td style="text-align:left;">是否开启平行光阴影</td></tr><tr><td style="text-align:left;">ShadowPcf</td><td style="text-align:left;">设置阴影边缘反走样等级，目前支持 <strong>HARD</strong>、<strong>SOFT</strong>、<strong>SOFT_2X</strong>，详情可参考下文 <strong>PCF 软阴影</strong> 部分的介绍。</td></tr><tr><td style="text-align:left;">ShadowBias</td><td style="text-align:left;">设置阴影偏移值，防止 Z-Fighting</td></tr><tr><td style="text-align:left;">ShadowNormalBias</td><td style="text-align:left;">设置法线偏移值，防止曲面出现锯齿状</td></tr><tr><td style="text-align:left;">ShadowSaturation</td><td style="text-align:left;">调节阴影饱和度，建议设置为 <strong>1.0</strong>。若需要减小方向光阴影的饱和程度，推荐通过增加环境光来实现，而不是调节该值</td></tr><tr><td style="text-align:left;">ShadowInvisibleOcclusionRange</td><td style="text-align:left;">设置 Camera 可见范围外的物体产生的阴影是否需要投射到可见范围内，若需要则调大该值即可</td></tr><tr><td style="text-align:left;">ShadowDistance</td><td style="text-align:left;">设置 Camera 可见范围内显示阴影效果的范围，阴影质量与该值的大小成反比</td></tr></tbody></table><p>平行光的使用请参考 <a href="./lightType/dir-light.html">平行光</a>。</p><h4 id="fixedarea-模式" tabindex="-1">FixedArea 模式 <a class="header-anchor" href="#fixedarea-模式" aria-label="Permalink to &quot;FixedArea 模式&quot;">​</a></h4><p>FixedArea 模式用于设置是否手动控制 Camera 可见范围内显示阴影效果的范围：</p><ul><li><p>若不勾选该项（默认），则引擎会使用和 CSM（级联阴影算法）模式相同的裁切流程和相机计算，根据 Camera 的方向和位置来计算阴影产生的范围。</p></li><li><p>若勾选该项，则根据手动设置的 <code>Near</code>、<code>Far</code>、<code>OrthoSize</code> 属性来控制阴影产生的范围。阴影会跟随方向光节点的位置，在方向光包围盒附近分布，而非跟随相机。</p><p><img src="'+o+'" alt="image"></p></li></ul><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ShadowFixedArea</td><td style="text-align:left;">是否开启固定区域的阴影</td></tr><tr><td style="text-align:left;">ShadowNear</td><td style="text-align:left;">设置主光源相机的近裁剪面</td></tr><tr><td style="text-align:left;">ShadowFar</td><td style="text-align:left;">设置主光源相机的远裁剪面</td></tr><tr><td style="text-align:left;">ShadowOrthoSize</td><td style="text-align:left;">设置主光源相机的正交视口大小，阴影质量与该值的大小成反比</td></tr></tbody></table><h3 id="聚光灯阴影属性" tabindex="-1">聚光灯阴影属性 <a class="header-anchor" href="#聚光灯阴影属性" aria-label="Permalink to &quot;聚光灯阴影属性&quot;">​</a></h3><p><img src="'+l+'" alt="image"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ShadowEnabled</td><td style="text-align:left;">是否开启平行光阴影</td></tr><tr><td style="text-align:left;">ShadowPcf</td><td style="text-align:left;">设置阴影边缘反走样等级，目前支持 <strong>HARD</strong>、<strong>SOFT</strong>、<strong>SOFT_2X</strong>，详情可参考下文 <strong>PCF 软阴影</strong> 部分的介绍。</td></tr><tr><td style="text-align:left;">ShadowBias</td><td style="text-align:left;">设置阴影偏移值，防止 z-fighting</td></tr><tr><td style="text-align:left;">ShadowNormalBias</td><td style="text-align:left;">设置法线偏移值，防止曲面出现锯齿状</td></tr></tbody></table><p>聚光灯的使用请参考 <a href="./lightType/spot-light.html">聚光灯</a>。</p><h3 id="pcf-软阴影" tabindex="-1">PCF 软阴影 <a class="header-anchor" href="#pcf-软阴影" aria-label="Permalink to &quot;PCF 软阴影&quot;">​</a></h3><p>百分比渐近过滤（PCF）是一个简单、常见的用于实现阴影边缘反走样的技术，通过对阴影边缘进行平滑处理来消除阴影贴图的锯齿现象。原理是在当前像素（也叫做片段）周围进行采样，然后计算样本跟片段相比更接近光源的比例，使用这个比例对散射光和镜面光成分进行缩放，然后再对片段着色，以达到模糊阴影边缘的效果。</p><p>目前 Cocos Creator 支持 <strong>硬采样</strong>、<strong>4 倍采样（SOFT 模式）</strong>、<strong>9 倍采样（SOFT_2X 模式）</strong>，倍数越大，采样区域越大，阴影边缘也就越柔和。</p><h2 id="支持动态合批提高性能" tabindex="-1">支持动态合批提高性能 <a class="header-anchor" href="#支持动态合批提高性能" aria-label="Permalink to &quot;支持动态合批提高性能&quot;">​</a></h2><p>对于材质中已经开启 instancing 的模型，平面阴影也会自动同步使用 instancing 绘制，详情请参考 <a href="./../../../engine/renderable/model-component.html#关于动态合批">动态合批</a>。</p>',44),x=[f];function y(b,m,w,S,u,_){return e(),a("div",null,x)}const F=t(c,[["render",y]]);export{k as __pageData,F as default};
