import{_ as e,v as t,b as s,R as o}from"./chunks/framework.5ffcbaff.js";const i="/docs/cocos/assets/compare.30245df1.png",r="/docs/cocos/assets/editing.081a4de4.png",a="/docs/cocos/assets/scaling.803ceecd.png",f=JSON.parse('{"title":"制作可任意拉伸的 UI 图像","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/engine/sliced-sprite.md","filePath":"zh/manual/ui-system/components/engine/sliced-sprite.md"}'),c={name:"zh/manual/ui-system/components/engine/sliced-sprite.md"},n=o('<h1 id="制作可任意拉伸的-ui-图像" tabindex="-1">制作可任意拉伸的 UI 图像 <a class="header-anchor" href="#制作可任意拉伸的-ui-图像" aria-label="Permalink to &quot;制作可任意拉伸的 UI 图像&quot;">​</a></h1><p>UI 系统核心的设计原则是能够自动适应各种不同的设备屏幕尺寸，因此我们在制作 UI 时需要正确设置每个控件元素的尺寸（size），并且让每个控件元素的尺寸能够根据设备屏幕的尺寸进行自动的拉伸适配。为了实现这一点，就需要使用九宫格格式的图像来渲染这些元素。这样即使使用很小的原始图片也能生成覆盖整个屏幕的背景图像，一方面节约游戏包体空间，另一方面能够灵活适配不同的排版需要。</p><p><img src="'+i+'" alt="compare"></p><p>上图右边为原始贴图大小的显示，左边是选择 Sliced 模式并放大 <code>size</code> 属性后的显示效果。</p><h2 id="编辑图像资源的九宫格切分" tabindex="-1">编辑图像资源的九宫格切分 <a class="header-anchor" href="#编辑图像资源的九宫格切分" aria-label="Permalink to &quot;编辑图像资源的九宫格切分&quot;">​</a></h2><p>要使用可以无限放大的九宫格图像效果，我们需要先对图像资源进行九宫格切分。首先打开 <strong>Sprite 编辑器</strong>，在 <strong>资源管理器</strong> 中选中图像资源，然后点击 <strong>属性检查器</strong> 最下面的 <strong>编辑</strong> 按钮。如果您的窗口高度不够，可能需要向下滚动 <strong>属性检查器</strong> 才能看到下面的按钮。</p><p>打开 <strong>Sprite 编辑器</strong> 以后，可以看到图像周围有一圈绿色的线条，表示当前九宫格分割线的位置。将鼠标移动到分割线上，可以看到光标形状改变了，这时候就可以按下并拖拽鼠标来更改分割线的位置。</p><p>我们分别拖动上下左右四条分割线，将图像切分成九宫格，九个区域在 Sprite 尺寸（<code>size</code>）变化时会应用不同的缩放策略，见下图：</p><p><img src="'+r+'" alt="sliced"></p><p>而下图中描述了不同区域缩放时的示意（图片来自 <a href="http://yannickloriot.com/2011/12/create-buttons-in-cocos2d-by-using-cccontrolbutton/" target="_blank" rel="noreferrer">Yannick Loriot 的博客</a>）：</p><p><img src="'+a+'" alt="scaling"></p><p>完成切分后别忘记点击 <strong>Sprite 编辑器</strong> 右上角的绿色对勾来保存对资源的修改。</p><h2 id="设置-sprite-组件使用-sliced-模式" tabindex="-1">设置 Sprite 组件使用 Sliced 模式 <a class="header-anchor" href="#设置-sprite-组件使用-sliced-模式" aria-label="Permalink to &quot;设置 Sprite 组件使用 Sliced 模式&quot;">​</a></h2><p>准备好九宫格切分的资源后，就可以修改 Sprite 的显示模式并通过修改 <code>size</code> 来制作可任意指定尺寸的 UI 元素了。</p><ol><li>首先选中场景中的 Sprite 节点，将 Sprite 的 <code>Type</code> 属性设为 <code>Sliced</code>。</li><li>然后通过 <a href="./../../../editor/scene/">矩形变换工具</a> 拖拽控制点使节点的 <code>size</code> 属性变大。您也可以直接在 <strong>属性检查器</strong> 中输入数值来修改 <code>size</code> 属性。如果图像资源是用九宫格的形式生产的，那么不管 Sprite 如何放大，都不会产生模糊或变形。</li></ol><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>在使用 <strong>矩形变换工具</strong> 或直接修改 Sliced Sprite 的 <code>size</code> 属性时，注意 <code>size</code> 的属性值不能为负数，否则不能以 Sliced 模式正常显示。</p>',17),d=[n];function p(l,g,h,m,u,_){return t(),s("div",null,d)}const b=e(c,[["render",p]]);export{f as __pageData,b as default};
