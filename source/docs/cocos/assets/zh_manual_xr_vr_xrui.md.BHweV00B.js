import{_ as o,c as t,o as r,a5 as s}from"./chunks/framework.CqnjdYks.js";const n="/docs/cocos/assets/create.CnUk45Mj.png",a="/docs/cocos/assets/xrui_comp.BWRd6QQm.png",e="/docs/cocos/assets/ui-root.C-VQHOzq.png",g="/docs/cocos/assets/convert.MW00V0Xo.gif",i="/docs/cocos/assets/def-spr.CJQt-bO0.gif",p="/docs/cocos/assets/add-raychecker.DaLZ0XXL.png",c="/docs/cocos/assets/box-collider-size.DPCuRG07.png",d="/docs/cocos/assets/keyboard-root.BJEeyLhu.png",l="/docs/cocos/assets/keyboard._qvnWiaF.png",m="/docs/cocos/assets/add-xr-keyboard.-1PZpObp.png",u="/docs/cocos/assets/bind_suspend.CEQ-Idio.png",_="/docs/cocos/assets/def-line-mat.CCUp72OM.png",B=JSON.parse('{"title":"XR UI","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/vr/xrui.md","filePath":"zh/manual/xr/vr/xrui.md"}'),h={name:"zh/manual/xr/vr/xrui.md"},I=s('<h1 id="xr-ui" tabindex="-1">XR UI <a class="header-anchor" href="#xr-ui" aria-label="Permalink to &quot;XR UI&quot;">​</a></h1><p>传统的生成 UI 控件的方式都是把 UI 画在画布（Canvas）上，而画布本身不具有深度信息(位置属性不可更改)，导致了画布是贴在屏幕上的，只有与屏幕进行交互才能反馈作用于 UI 控件。由于 XR 设备的摄像头是两个目镜，不支持交互，这明显不满足于 XR 项目的需求。所以我们需要将 UI 的交互方式改为在空间中用交互器进行交互，因此需要将 UI 控件剥离出画布而能够单独存在于空间中，具有完整的位置属性并具有碰撞检测功能。</p><p>XR UI 是基于 2D UI 扩展而来，关于如何使用 2D/UI 组件可参考 <a href="./../../2d-object/">2D 对象概述</a>。</p><h2 id="新建-ui" tabindex="-1">新建 UI <a class="header-anchor" href="#新建-ui" aria-label="Permalink to &quot;新建 UI&quot;">​</a></h2><p>在 <strong>层级管理器</strong> -&gt; <strong>创建</strong> -&gt; <strong>XR</strong> -&gt; <strong>XR UI</strong> 可以添加 XRUI。</p><p><img src="'+n+'" alt="create"></p><p>相比于传统的 UI 控件，XR UI 会新增一些组件用于计算碰撞检测以触发交互，如图示，RaycastChecker 和 BoxCollider 可使其能够接收 XR 输入：</p><p><img src="'+a+'" alt="components"></p><blockquote><p><strong>注意</strong>：对于 3D 空间上的 UI，其根节点上需要 <a href="./../../2d-object/">RenderRoot2D 组件</a> 才可以正常渲染。</p></blockquote><h2 id="存量-ui-转换" tabindex="-1">存量 UI 转换 <a class="header-anchor" href="#存量-ui-转换" aria-label="Permalink to &quot;存量 UI 转换&quot;">​</a></h2><p>如 UI 已制作完成，也参考下面的步骤将原本的 2D Canvas 下的 UI，转化为 XR 的 UI。</p><ul><li><p>在 <strong>层级管理器</strong> 右键创建一个空节点（如命名为 UIRoot，下文均使用 UIRoot），为节点添加组件 <strong>RenderRoot2D</strong> 组件，同时节点会自动添加 <strong>UITransform</strong> 组件：</p><p><img src="'+e+'" alt="ui root"></p></li><li><p>将原有的2D UI控件分离出Canvas，移动至UIRoot层级下。修改 <strong>Button</strong> 位置和 <strong>Layer</strong> 属性。同时将 <strong>Button</strong> 及其子节点的 <strong>Layer</strong> 属性，都修改为和 <strong>Camera</strong> 的 <strong>Layer</strong> 属性一致（此处均为DEFAULT）。</p><p><img src="'+g+'" alt="convert"></p></li><li><p>给 Button 及其子节点添加材质。在 <strong>资源管理器</strong> 中点击 <strong>xr-plugin</strong> -&gt; <strong>xr</strong> -&gt; <strong>res</strong> -&gt; <strong>default_materials</strong>，选择 <strong>xr-3dui-sprite-material</strong> 拖拽至 <strong>Sprite</strong> 组件的 <strong>CustomMaterial</strong> 属性中。</p><p><img src="'+i+'" alt="sprite"></p></li><li><p>给 Button 添加射线交互组件 RaycastChecker。点击 Button 节点，在 <strong>属性检查器</strong> 下方，点击 <strong>添加组件</strong> 按钮，选择 <strong>XR</strong> -&gt; <strong>UI</strong> -&gt; <strong>RaycastChecker</strong>。</p><p><img src="'+p+'" alt="ray"></p><p>在 <strong>属性检查器</strong> 中出现 <strong>RaycastChecker</strong> 组件和 <strong>BoxCollider</strong> 组件，且 <strong>BoxCollider</strong> 组件的 <strong>Size</strong> 属性的 <strong>xy</strong> 值与节点的 <strong>UITransfrom</strong> 的 <strong>Content Size</strong> 值一致，如下图：（此处可以将 <strong>BoxCollider</strong> 替换为其他所需 3D 碰撞体，能够贴合 UI 组件即可）。</p><p><img src="'+c+'" alt="side"></p></li><li><p>移动 Button 节点至场景中指定位置，调整 Rotation 和 Scale 的值以满足设计需求。</p></li><li><p>添加完所有 UI 组件后，删除旧有的 Canvas 节点。</p></li></ul><p>到此为止，存量 UI 到 XR UI 的转化就完成了。</p><h2 id="虚拟键盘-xr-keyborad" tabindex="-1">虚拟键盘（XR Keyborad） <a class="header-anchor" href="#虚拟键盘-xr-keyborad" aria-label="Permalink to &quot;虚拟键盘（XR Keyborad）&quot;">​</a></h2><p>添加一个 EditBox 的 XR UI，同时给 EditBox 添加一个子节点，命名为 KeyboardRoot （命名随意），同时调整 KeyboardRoot 的位置信息（根据需求进行调整即可，可将 XR Keyboard 临时放在节点下进行调整）。</p><p><img src="'+d+'" alt="keboard root"></p><p>创建XR Keyboard对象：在资源管理器中点击 <strong>xr-plugin</strong>-&gt; <strong>xr</strong> -&gt; <strong>res</strong> -&gt; <strong>default_prefab</strong>，选择 <strong>XR Keyboard</strong> 拖拽至场景中。</p><p><img src="'+l+'" alt="prefab"></p><p>为 EditBox 节点添加 <strong>XRKeyboardInputField</strong> 组件，同时绑定 <strong>SuspendTransform</strong> 和 <strong>XRKeyboard</strong>，将节点拖拽进去。</p><p><img src="'+m+'" alt="add xr keyboard"></p><p><img src="'+u+'" alt="suspend transform &amp; keyboard"></p><h2 id="射线材质" tabindex="-1">射线材质 <a class="header-anchor" href="#射线材质" aria-label="Permalink to &quot;射线材质&quot;">​</a></h2><p>使用射线与 XR UI 进行交互时，需要给射线绑定材质 <strong>xr-default-line-material</strong>。位置在 <strong>资源管理器</strong>-&gt;<strong>xr-plugin</strong> -&gt; <strong>xr</strong> -&gt; <strong>res</strong> -&gt; <strong>default_materials</strong>。</p><p><img src="'+_+'" alt="default line material"></p>',24),R=[I];function x(U,b,f,y,X,C){return r(),t("div",null,R)}const q=o(h,[["render",x]]);export{B as __pageData,q as default};
