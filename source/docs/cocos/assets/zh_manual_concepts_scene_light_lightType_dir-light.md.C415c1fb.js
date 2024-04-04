import{_ as t,a as e}from"./chunks/dir-fixedarea.D9kR6Wva.js";import{_ as a,c as l,o as r,a5 as s}from"./chunks/framework.CqnjdYks.js";const o="/docs/cocos/assets/dir-light.CtYu3INs.jpg",i="/docs/cocos/assets/dir-light-scene.FJgVwiWE.jpg",d="/docs/cocos/assets/dir-light-prop.DUk7Hwsz.png",n="/docs/cocos/assets/csm-off.DyE8y8NC.png",g="/docs/cocos/assets/csm-on.VK7dpMr-.png",q=JSON.parse('{"title":"平行光","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/light/lightType/dir-light.md","filePath":"zh/manual/concepts/scene/light/lightType/dir-light.md"}'),h={name:"zh/manual/concepts/scene/light/lightType/dir-light.md"},c=s('<h1 id="平行光" tabindex="-1">平行光 <a class="header-anchor" href="#平行光" aria-label="Permalink to &quot;平行光&quot;">​</a></h1><p>平行光又称为方向光（Directional Light），是最常用的一种光源，模拟了无限远处的光源发出的光线，常用于实现太阳光。</p><p><img src="'+o+'" alt="image"></p><p>因为光源与被照射目标的距离是未定义的（无限远），所以光照效果不受 <strong>光源位置</strong> 和 <strong>朝向</strong> 的影响（如下图，平行光在平面上产生的光照亮度都是一样的）。但是 <strong>旋转</strong> 会影响到平行光照射的方向，而光照方向又会影响到模型接受光照的范围以及模型产生阴影的位置。可通过编辑器左上角的 <a href="./../../../../editor/toolbar/#旋转变换工具">旋转变换工具</a> 来调整平行光照射的方向。</p><p><img src="'+i+'" alt="image"></p><p>在场景中添加平行光的方式可参考 <a href="./">添加光源</a>。</p><blockquote><p><strong>注意</strong>：Cocos Creator 目前只支持一个平行光。若同时添加多个，则以最后一个添加的为准。</p></blockquote><p>新建场景时，默认会自动创建一个 <code>Main Light</code> 平行光节点。</p><p>平行光组件相关接口，请参考 <a href="./__APIDOC__/zh/class/DirectionalLight.html">DirectionalLight API</a>。</p><blockquote><p><strong>注意</strong>：从 v3.5 开始，<strong>平行光阴影</strong> 从场景设置面板中独立出来，不在全局设置阴影属性。</p></blockquote><h2 id="平行光属性" tabindex="-1">平行光属性 <a class="header-anchor" href="#平行光属性" aria-label="Permalink to &quot;平行光属性&quot;">​</a></h2><p><img src="'+d+'" alt="image"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Color</td><td style="text-align:left;">设置光源颜色</td></tr><tr><td style="text-align:left;">UseColorTemperature</td><td style="text-align:left;">是否启用色温</td></tr><tr><td style="text-align:left;">ColorTemperature</td><td style="text-align:left;">调节色温</td></tr><tr><td style="text-align:left;">StaticSettings</td><td style="text-align:left;">设置静态灯光，详情请参考 <a href="./../lightmap.html">光照贴图</a></td></tr><tr><td style="text-align:left;">Illumination</td><td style="text-align:left;">照度，单位 <strong>勒克斯（lx）</strong></td></tr></tbody></table><h3 id="平行光阴影属性" tabindex="-1">平行光阴影属性 <a class="header-anchor" href="#平行光阴影属性" aria-label="Permalink to &quot;平行光阴影属性&quot;">​</a></h3><p>阴影属性需要在场景中开启阴影。开启方法为请参考 <a href="./../shadow.html#开启阴影">阴影 - 开启阴影</a>。</p><p>开启阴影后，平行光 <strong>属性检查器</strong> 会展示 <strong>动态阴影设置</strong> 如下图：</p><p><img src="'+t+'" alt="image"></p><p>其属性和说明请参考 <a href="./../shadow.html#平行光阴影属性">阴影 - 平行光阴影属性</a></p><h3 id="平行光阴影属性-1" tabindex="-1">平行光阴影属性 <a class="header-anchor" href="#平行光阴影属性-1" aria-label="Permalink to &quot;平行光阴影属性&quot;">​</a></h3><p><img src="'+t+'" alt="image"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ShadowEnabled</td><td style="text-align:left;">是否开启平行光阴影</td></tr><tr><td style="text-align:left;">ShadowPcf</td><td style="text-align:left;">设置阴影边缘反走样等级，目前支持 <strong>HARD</strong>、<strong>SOFT</strong>、<strong>SOFT_2X</strong>，详情可参考下文 <strong>PCF 软阴影</strong> 部分的介绍。</td></tr><tr><td style="text-align:left;">ShadowBias</td><td style="text-align:left;">设置阴影偏移值，防止 z-fighting</td></tr><tr><td style="text-align:left;">ShadowNormalBias</td><td style="text-align:left;">设置法线偏移值，防止曲面出现锯齿状</td></tr><tr><td style="text-align:left;">ShadowSaturation</td><td style="text-align:left;">调节阴影饱和度，建议设置为 <strong>1.0</strong>。若需要减小方向光阴影的饱和程度，推荐通过增加环境光来实现，而不是调节该值</td></tr><tr><td style="text-align:left;">ShadowInvisibleOcclusionRange</td><td style="text-align:left;">设置 Camera 可见范围外的物体产生的阴影是否需要投射到可见范围内，若需要则调大该值即可</td></tr><tr><td style="text-align:left;">ShadowDistance</td><td style="text-align:left;">设置 Camera 可见范围内显示阴影效果的范围，阴影质量与该值的大小成反比</td></tr><tr><td style="text-align:left;">Enable CSM</td><td style="text-align:left;">设置是否开启 Cascaded Shadow Map 模式</td></tr><tr><td style="text-align:left;">FixedArea</td><td style="text-align:left;">设置是否手动控制 Camera 可见范围内显示阴影效果</td></tr></tbody></table><h4 id="enable-csm-模式" tabindex="-1">Enable CSM 模式 <a class="header-anchor" href="#enable-csm-模式" aria-label="Permalink to &quot;Enable CSM 模式&quot;">​</a></h4><p>基础的阴影贴图方法对于大型场景渲染显得力不从心，很容易出现阴影抖动和锯齿边缘现象。Cascaded Shadow Maps(CSM) 方法根据对象到观察者的距离分块提供深度纹理来解决上述问题。它将相机的视锥体分割成若干部分，然后为分割的每一部分生成独立的深度贴图。</p><p>对于近处的场景使用较高质量的阴影贴图，对于远处的场景使用较低质量的阴影贴图，在两张阴影贴图过渡的地方选择其中一张使用。因为远处的对象只占画面的很少一部分像素，而近处的对象占据了画面的很大一部分，这样保证了观察者在近处看到的阴影质量较高，远处的阴影质量较低。</p><ul><li><p>关闭CSM：</p><p><img src="'+n+'" alt="image"></p></li><li><p>开启CSM：</p><p><img src="'+g+'" alt="image"></p></li></ul><h4 id="fixedarea-模式" tabindex="-1">FixedArea 模式 <a class="header-anchor" href="#fixedarea-模式" aria-label="Permalink to &quot;FixedArea 模式&quot;">​</a></h4><p>FixedArea 模式用于设置是否手动控制 Camera 可见范围内显示阴影效果的范围：</p><ul><li><p>若不勾选该项（默认），则引擎会使用和 CSM（级联阴影算法）模式相同的裁切流程和相机计算，根据 Camera 的方向和位置来计算阴影产生的范围。</p></li><li><p>若勾选该项，则根据手动设置的 <code>Near</code>、<code>Far</code>、<code>OrthoSize</code> 属性来控制阴影产生的范围。阴影会跟随方向光节点的位置，在方向光包围盒附近分布，而非跟随相机。</p><p><img src="'+e+'" alt="image"></p></li></ul><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ShadowFixedArea</td><td style="text-align:left;">是否开启固定区域的阴影</td></tr><tr><td style="text-align:left;">ShadowNear</td><td style="text-align:left;">设置主光源相机的近裁剪面</td></tr><tr><td style="text-align:left;">ShadowFar</td><td style="text-align:left;">设置主光源相机的远裁剪面</td></tr><tr><td style="text-align:left;">ShadowOrthoSize</td><td style="text-align:left;">设置主光源相机的正交视口大小，阴影质量与该值的大小成反比</td></tr></tbody></table><h3 id="pcf-软阴影" tabindex="-1">PCF 软阴影 <a class="header-anchor" href="#pcf-软阴影" aria-label="Permalink to &quot;PCF 软阴影&quot;">​</a></h3><p>百分比渐近过滤（PCF）是一个简单、常见的用于实现阴影边缘反走样的技术，通过对阴影边缘进行平滑处理来消除阴影贴图的锯齿现象。原理是在当前像素（也叫做片段）周围进行采样，然后计算样本跟片段相比更接近光源的比例，使用这个比例对散射光和镜面光成分进行缩放，然后再对片段着色，以达到模糊阴影边缘的效果。</p><p>目前 Cocos Creator 支持 <strong>硬采样</strong>、<strong>4 倍采样（SOFT 模式）</strong>、<strong>9 倍采样（SOFT_2X 模式）</strong>，倍数越大，采样区域越大，阴影边缘也就越柔和。</p><h2 id="支持动态合批提高性能" tabindex="-1">支持动态合批提高性能 <a class="header-anchor" href="#支持动态合批提高性能" aria-label="Permalink to &quot;支持动态合批提高性能&quot;">​</a></h2><p>对于材质中已经开启 instancing 的模型，平面阴影也会自动同步使用 instancing 绘制，详情请参考 <a href="./../../../engine/renderable/model-component.html#关于动态合批">动态合批</a>。</p>',34),p=[c];function f(m,x,y,_,b,u){return r(),l("div",null,p)}const P=a(h,[["render",f]]);export{q as __pageData,P as default};
