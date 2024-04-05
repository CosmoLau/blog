import{_ as s,E as l,c as o,m as e,a as t,J as i,w as n,a4 as r,o as d}from"./chunks/framework.uQk9_EO2.js";const c="/docs/cocos/assets/camera.DttwPkIr.png",g="/docs/cocos/assets/camera-view.yPChjHuP.gif",p="/docs/cocos/assets/camera-component.mTsx8cCy.png",y="/docs/cocos/assets/camera-visibility-gizmo.CR12kemS.png",h="/docs/cocos/assets/hdr1.BHygyyAO.png",_="/docs/cocos/assets/hdr2.nnYozvcx.png",I=JSON.parse('{"title":"相机","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/components/camera-component.md","filePath":"zh/editor/components/camera-component.md","lastUpdated":1712336288000}'),m={name:"zh/editor/components/camera-component.md"},f=r('<h1 id="相机" tabindex="-1">相机 <a class="header-anchor" href="#相机" aria-label="Permalink to &quot;相机&quot;">​</a></h1><p>游戏中的相机是用来捕捉场景画面的主要工具。我们通过调节相机相关参数来控制可视范围的大小，在 Cocos Creator 编辑器中相机呈如下表示：</p><p><img src="'+c+'" alt="camera"></p><p>相机的可视范围是通过 6 个平面组成一个 <strong>视锥体（Frustum）</strong> 构成，<strong>近裁剪面（Near Plane）</strong> 和 <strong>远裁剪面（Far Plane）</strong> 用于控制近处和远处的可视距离与范围，同时它们也构成了视口的大小。</p><p><img src="'+g+'" alt="camera view"></p><p>相机组件接口请参考 <a href="./__APIDOC__/zh/class/Camera">Camera API</a>。</p><h2 id="相机组件" tabindex="-1">相机组件 <a class="header-anchor" href="#相机组件" aria-label="Permalink to &quot;相机组件&quot;">​</a></h2><p>相机组件是我们用来呈现场景画面的重要功能组件。</p><p><img src="'+p+'" alt="camera component"></p><table><thead><tr><th style="text-align:left;">属性名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Priority</td><td style="text-align:left;">相机的渲染优先级，值越小越优先渲染</td></tr><tr><td style="text-align:left;">Visibility</td><td style="text-align:left;">可见性掩码，声明在当前相机中可见的节点层级集合</td></tr><tr><td style="text-align:left;">ClearFlags</td><td style="text-align:left;">相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。包含：<br>DONT_CLEAR：不清空；<br>DEPTH_ONLY：只清空深度；<br> SOLID_COLOR：清空颜色、深度与模板缓冲；<br> SKYBOX：启用天空盒，只清空深度</td></tr><tr><td style="text-align:left;">ClearColor</td><td style="text-align:left;">指定清空颜色</td></tr><tr><td style="text-align:left;">ClearDepth</td><td style="text-align:left;">指定深度缓冲清空值</td></tr><tr><td style="text-align:left;">ClearStencil</td><td style="text-align:left;">指定模板缓冲清空值</td></tr><tr><td style="text-align:left;">Projection</td><td style="text-align:left;">相机投影模式。分为 <strong>透视投影（PERSPECTIVE）</strong> 和 <strong>正交投影（ORTHO）</strong></td></tr><tr><td style="text-align:left;">FovAxis</td><td style="text-align:left;">指定视角的固定轴向，在此轴上不会跟随屏幕长宽比例变化</td></tr><tr><td style="text-align:left;">Fov</td><td style="text-align:left;">相机的视角大小</td></tr><tr><td style="text-align:left;">OrthoHeight</td><td style="text-align:left;">正交模式下的视角</td></tr><tr><td style="text-align:left;">Near</td><td style="text-align:left;">相机的近裁剪距离，应在可接受范围内尽量取最大</td></tr><tr><td style="text-align:left;">Far</td><td style="text-align:left;">相机的远裁剪距离，应在可接受范围内尽量取最小</td></tr><tr><td style="text-align:left;">Aperture</td><td style="text-align:left;">相机光圈，影响相机的曝光参数</td></tr><tr><td style="text-align:left;">Shutter</td><td style="text-align:left;">相机快门，影响相机的曝光参数</td></tr><tr><td style="text-align:left;">Iso</td><td style="text-align:left;">相机感光度，影响相机的曝光参数 <br> <strong>Aperture</strong>，<strong>Shutter</strong> 和 <strong>Iso</strong> 属性请参考下方 <strong>曝光量</strong> 获取更多信息</td></tr><tr><td style="text-align:left;">Rect</td><td style="text-align:left;">相机最终渲染到屏幕上的视口位置和大小</td></tr><tr><td style="text-align:left;">TargetTexture</td><td style="text-align:left;">指定相机的渲染输出目标贴图，默认为空，直接渲染到屏幕</td></tr></tbody></table><h2 id="相机分组渲染" tabindex="-1">相机分组渲染 <a class="header-anchor" href="#相机分组渲染" aria-label="Permalink to &quot;相机分组渲染&quot;">​</a></h2><p>分组渲染功能是通过相机组件的 Visibility 属性配合节点的 <a href="./../../concepts/scene/node-component#设置节点的-layer-属性">Layer 属性</a> 共同决定的。用户可通过代码设置 Visibility 的值来完成分组渲染。所有节点默认都属于 DEFAULT 层，在所有相机都可见。</p><h3 id="设置-visibility-属性" tabindex="-1">设置 Visibility 属性 <a class="header-anchor" href="#设置-visibility-属性" aria-label="Permalink to &quot;设置 Visibility 属性&quot;">​</a></h3><p>Visibility 属性用于设置哪些层级（Layer）的节点应该被相机观察到，可同时选择多个 Layer。</p><blockquote><p><strong>注意</strong>：从 Cocos Creator 3.0 开始，2D 元素（例如 Sprite）的渲染也遵从 Layer 与 Visibility 的判断，开发者可以根据需要自行调整 Layer 与 Visibility。</p></blockquote><p>当开发者在 Visibility 属性中勾选了多个 Layer 时，Visibility 属性值便是通过将多个 Layer 的属性值执行 <code>|</code> 操作计算得出。</p><p>例如，下图中相机的 Visibility 属性同时勾选了 <strong>UI_3D</strong> 和 <strong>DEFAULT</strong> 这两个 Layer，通过 <a href="./../../concepts/scene/layer">查询 Layer 属性值</a> 可以知道 <strong>UI_3D</strong> 的属性值是 <strong>1 &lt;&lt; 23</strong>，<strong>DEFAULT</strong> 的属性值是 <strong>1 &lt;&lt; 30</strong>，那么 Visibility 属性值便是 <strong>1 &lt;&lt; 23 | 1 &lt;&lt; 30 = 1082130432</strong>。</p><p><img src="'+y+'" alt="camera visibility gizmo"></p><p>关于 Layer 的实现详情，请参考 <a href="./../../concepts/scene/layer">层级</a> 文档。</p><h3 id="相机的可见性计算" tabindex="-1">相机的可见性计算 <a class="header-anchor" href="#相机的可见性计算" aria-label="Permalink to &quot;相机的可见性计算&quot;">​</a></h3><p>Visibility 属性可以同时选择多个 Layer，同时 Node 上的 Layer 也有自身的值，因此相机的 Visibility 属性是一个 2<sup>32</sup> 位的整数，每一种可见的 layer 占一位，采用位操作运算，最高支持 32 个不同的 Layer 标签（每一种 Layer 值占一位，即用 2<sup>32</sup> 表示）。在相机 culling 时，每个节点的 layer 值会跟相机进行 <code>&amp;</code> 操作运算，如果相机的 Visibility 属性包含这个 Layer，那么当前节点就会被相机所看见，反之则看不见。</p><h3 id="曝光量" tabindex="-1">曝光量 <a class="header-anchor" href="#曝光量" aria-label="Permalink to &quot;曝光量&quot;">​</a></h3><p><strong>Aperture</strong>, <strong>Shutter</strong>，<strong>Iso</strong> 这三个相机的物理参数会决定进光量，进而影响曝光量（Exposure Value）。仅在场景开启 HDR 的情况下生效。其算法通常为：</p>',23),u=e("sub",null,"2",-1),x=e("sup",null,"2",-1),b=r('<p>其中 <code>ApertureValue</code>、<code>ShutterValue</code> 和 <code>IsoValue</code> 通过 <strong>Aperture</strong>, <strong>Shutter</strong>，<strong>Iso</strong> 这三个属性的枚举值查表得出。k 为常量。</p><p>下图演示了曝光量对场景的影响：</p><p><img src="'+h+'" alt="hdr1"></p><p><img src="'+_+'" alt="hdr2"></p><p>若要启用场景 HDR 可以参考：<a href="./../../concepts/scene/skybox">切换 HDR/LDR 模式</a>。</p>',5);function V(C,P,L,T,A,S){const a=l("mlog");return d(),o("div",null,[f,e("p",null,[t("ev = "),i(a,null,{default:n(()=>[t("log")]),_:1}),t(),u,t(" (ApertureValue"),x,t(" / ShutterValue*k / IsoValue)")]),b])}const k=s(m,[["render",V]]);export{I as __pageData,k as default};
