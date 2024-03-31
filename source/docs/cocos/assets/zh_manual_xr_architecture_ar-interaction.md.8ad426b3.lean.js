import{_ as e,v as t,b as s,R as c}from"./chunks/framework.5ffcbaff.js";const a="/docs/cocos/assets/screen-touch-interactor-node.c92dc0f4.png",o="/docs/cocos/assets/create-3d-obj.a19f1fff.png",r="/docs/cocos/assets/add-selectable.e7cb6e00.png",n="/docs/cocos/assets/create-selected-visualizer.ebca5868.png",p="/docs/cocos/assets/set-selected-prefab.b72293f4.png",l="/docs/cocos/assets/set-selected-material.cf72396d.png",i="/docs/cocos/assets/adjust-material.2be25e12.png",d="/docs/cocos/assets/refer-to-material.1f678640.png",m="/docs/cocos/assets/refer-to-selected-visualizer.bb47b988.png",g="/docs/cocos/assets/select-effect.147dc478.png",b="/docs/cocos/assets/add-placeable.b2399812.png",f="/docs/cocos/assets/create-placement-prefab.851324b3.png",_="/docs/cocos/assets/refer-to-placement-prefab.1f9bf955.png",u="/docs/cocos/assets/create-plane-tracking.894cf674.png",h="/docs/cocos/assets/interacion-effect.eb8b7c2c.png",q=JSON.parse('{"title":"AR 交互","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/architecture/ar-interaction.md","filePath":"zh/manual/xr/architecture/ar-interaction.md"}'),R={name:"zh/manual/xr/architecture/ar-interaction.md"},P=c('<h1 id="ar-交互" tabindex="-1">AR 交互 <a class="header-anchor" href="#ar-交互" aria-label="Permalink to &quot;AR 交互&quot;">​</a></h1><p>AR 交互主要由 cc.ScreenTouchInteractor 组件驱动，该组件将触摸事件转换为点击、拖拽和捏合等手势，交互器将这些手势传递给可以交互的虚拟交互物，完成手势对应触发的行为。</p><h2 id="手势交互" tabindex="-1">手势交互 <a class="header-anchor" href="#手势交互" aria-label="Permalink to &quot;手势交互&quot;">​</a></h2><p>AR 手势交互器组件将屏幕触摸转换为手势。Cocos Creator 的输入系统将手势信号传递给交互物，然后交互物响应手势事件发生变换行为。交互物能发生交互行为的前提是必须绑定 <strong>cc.Selectable</strong> 组件，关于此组件的属性描述详见交互组件 <a href="./component.html#Selectable">Selectable</a>。</p><p>想要使用 <strong>屏幕手势交互器</strong>，在层级管理器中右键创建 <strong>XR -&gt; Screen Touch Interactor</strong> 。</p><img src="'+a+'" alt="screen-touch-interactor-node" style="zoom:50%;"><p>随意创建一个 3D 物体（以 Cube 为例）。</p><p>修改 Cube 的 Scale 属性为（0.1，0.1，0.1）既实际大小为 1000cm³ ，修改 Position 属性为（0，-0.1，-0.5）即位于空间远点处 50cm 远且靠下10cm的位置，并添加组件 <strong>XR &gt; Interaction -&gt; Selectable</strong>。</p><p><img src="'+o+'" alt="create-3d-obj"></p><img src="'+r+'" alt="add-selectable" style="zoom:50%;"><p>下面创建选中效果，在资源文件夹中创建一个预置体，命名为 Selected Visualizer。</p><p><img src="'+n+'" alt="create-selected-visualizer"></p><p>在预置体根节点下创建一个同样的 Cube 对象，Scale 大小设置为基于父节点的 1.2 倍。</p><p><img src="'+p+'" alt="set-selected-prefab"></p><p>创建一个新的材质，突出表现选中态的效果。</p><p><img src="'+l+'" alt="set-selected-material"></p><p>调整材质效果，建议 Effect 选择 builtin-unlit，Technique 选择 1-transparent。</p><img src="'+i+'" alt="adjust-material" style="zoom:50%;"><p>材质创建完毕后，应用到预置体中 Cube 的 cc.MeshRenderer 中，即可完成选中效果的创建。</p><p><img src="'+d+'" alt="refer-to-material"></p><p>最后，将预置体应用到 cc.Selectable 的 Selected Visualization 属性中。</p><p><img src="'+m+'" alt="refer-to-selected-visualizer"></p><p>运行时效果如下，可以结合手势来移动、旋转和放缩虚拟物体。</p><p><img src="'+g+'" alt="select-effect"></p><h2 id="放置" tabindex="-1">放置 <a class="header-anchor" href="#放置" aria-label="Permalink to &quot;放置&quot;">​</a></h2><p>使用 <strong>屏幕手势交互器</strong> 时，会启用设备 AR Hit Test 能力，根据屏幕触碰位置坐标转换到摄像机使用 Ray Cast 与 AR Plane 发生碰撞计算，来获取碰撞点的位置，最终在平面的此坐标上放置虚拟对象。能够被放置的预置体对象必须要挂载**<a href="./component.html#Placeable">cc.Placeable</a>**组件。</p><p>以上述场景中制作的 Selectable 对象为例，以下对其赋予被放置交互能力。</p><p>选中场景中的 Cube 对象，为其添加组件 <strong>XR -&gt; Interaction -&gt; Placeable</strong>。</p><p><img src="'+b+'" alt="add-placeable"></p><p>将此场景节点拖入资源管理器生成一份预置体，并删除场景中的此 Cube 对象。</p><p><img src="'+f+'" alt="create-placement-prefab"></p><p>将刚生成的Cube预置体引用到 <strong>Screen Touch Interactor -&gt; Place Action &gt; Placement Prefab</strong> 属性中，<strong>Calculation Mode</strong> 选择 <strong>AR_HIT_DETECTION</strong>。</p><p><img src="'+_+'" alt="refer-to-placement-prefab"></p><p>放置对象的位置计算需要依赖于 AR Plane，所以还需创建一个 Plane Tracking 节点来请求设备激活 AR SDK 的平面识别能力。在编辑器的层级管理器中右键 <strong>创建 &gt; XR &gt; Plane Tracking</strong>，创建平面代理节点。</p><p><img src="'+u+'" alt="create-plane-tracking"></p><p>所有工作都完成后，即可打包发布，在运行时查看放置效果。</p><p><img src="'+h+'" alt="interacion-effect"></p>',37),S=[P];function z(C,A,T,x,v,I){return t(),s("div",null,S)}const j=e(R,[["render",z]]);export{q as __pageData,j as default};
