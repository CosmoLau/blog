import{_ as t}from"./chunks/sub-texture.CF4VM8F3.js";import{_ as r,c as e,o as s,a5 as o}from"./chunks/framework.CqnjdYks.js";const a="/docs/cocos/assets/imported.Dj43mnA6.png",n="/docs/cocos/assets/type-change.E83IEoqZ.png",l="/docs/cocos/assets/normal-map.DMIIuAWU.png",b=JSON.parse('{"title":"图像资源","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/image.md","filePath":"zh/manual/asset/image.md"}'),g={name:"zh/manual/asset/image.md"},i=o('<h1 id="图像资源" tabindex="-1">图像资源 <a class="header-anchor" href="#图像资源" aria-label="Permalink to &quot;图像资源&quot;">​</a></h1><p>图像资源又经常被称作贴图、图片，是游戏中绝大部分图像渲染的数据源。图像资源一般由图像处理软件（比如 Photoshop、Windows 上自带的画图）制作而成并输出成 Cocos Creator 可以使用的文件格式，目前支持 <strong>JPG</strong>、<strong>PNG</strong>、<strong>BMP</strong>、<strong>TGA</strong>、<strong>HDR</strong>、<strong>WEBBP</strong>、<strong>PSD</strong>、<strong>TIFF</strong> 等格式。</p><h2 id="导入图像资源" tabindex="-1">导入图像资源 <a class="header-anchor" href="#导入图像资源" aria-label="Permalink to &quot;导入图像资源&quot;">​</a></h2><p>将图像资源直接拖拽到 <strong>资源管理器</strong> 即可将其导入到项目中，之后我们就可以在 <strong>资源管理器</strong> 中看到如下图所示的图像资源：</p><p><img src="'+a+'" alt="imported"></p><p><strong>属性检查器</strong> 中图像资源的相关属性说明如下：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>useCompressTexture</strong></td><td style="text-align:left;">是否使用压缩纹理，详情请参考 <a href="./compress-texture.html">压缩纹理</a>。</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">用于设置图像资源的类型，包括 <strong>raw</strong>、<strong>texture</strong>（默认）、<strong>normal map</strong>、<strong>sprite-frame</strong>、<strong>texture cube</strong>，具体说明可参考下文 <strong>图像资源类型</strong> 部分的内容。</td></tr><tr><td style="text-align:left;"><strong>Flip Vertical</strong></td><td style="text-align:left;">是否沿 X 轴垂直翻转导入的贴图。</td></tr><tr><td style="text-align:left;"><strong>Bake Offline Mimmaps</strong></td><td style="text-align:left;">是否烘焙离线 Mipmap</td></tr><tr><td style="text-align:left;"><strong>Fix Alpha Transparency Artifacts</strong></td><td style="text-align:left;">消除透明伪影 <br> 为全透明像素填充相邻像素的颜色，防止纹理过滤引起的黑边问题。当使用 Alpha 透明通道时，请启用此功能。<br> 仅对 <strong>texture</strong>、<strong>raw</strong>、<strong>sprite-frame</strong> 以及 <strong>texture cube</strong> 生效</td></tr><tr><td style="text-align:left;"><strong>Is RGBE</strong></td><td style="text-align:left;">是否是 RGBE 压缩格式，该选项仅在 <strong>Type</strong> 为 <a href="./texture-cube.html">立方体贴图</a> 时生效</td></tr><tr><td style="text-align:left;"><strong>Flip Green Channel</strong></td><td style="text-align:left;">翻转绿通道 <br> 在 Cocos Creator 内使用的法线贴图是 OpenGL 的，如果导入的是基于 DirectX 的法线贴图，如果出现的凹陷的错误，那么勾选此选项可以修复该错误</td></tr></tbody></table><h2 id="图像资源的类型" tabindex="-1">图像资源的类型 <a class="header-anchor" href="#图像资源的类型" aria-label="Permalink to &quot;图像资源的类型&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 面板选中导入的图像资源，在 <strong>属性检查器</strong> 面板中便可根据需要设置图像资源的使用类型，目前支持以下几种：</p><p><img src="'+n+'" alt="type-change"></p><ul><li><p><strong>raw</strong>：原始图片类型，无作用，用户不需要关心。</p></li><li><p><strong>texture</strong>：图像资源类型，也是导入的图像资源的默认类型，详情可参考 <a href="./texture.html">纹理贴图资源</a>。</p></li><li><p><strong>normal map</strong>：法线贴图类型，常用于渲染 3D 模型，可在模型材质中勾选 <code>USE NORMAL MAP</code> 属性使用。需要注意的是，如果材质中没有定义 <code>USE NORMAL MAP</code> 就没有该属性。</p><p><img src="'+l+'" alt="normal-map"></p></li><li><p><strong>sprite-frame</strong>：精灵帧资源，用于 2D/UI 制作上，详情可参考 <a href="./sprite-frame.html">SpriteFrame</a>。</p></li><li><p><strong>texture cube</strong>：立方贴图类型，使用在全景图上，常用于制作天空盒。详情可参考 <a href="./texture-cube.html">立方体贴图</a>。</p></li></ul><h2 id="子资源" tabindex="-1">子资源 <a class="header-anchor" href="#子资源" aria-label="Permalink to &quot;子资源&quot;">​</a></h2><p>每个图像资源导入后或者设置图像资源类型后，编辑器便会自动在其下方创建相应类型的子资源。在 <strong>资源管理器</strong> 中点击图像资源左侧的三角图标，即可展开查看图像资源的子资源。</p><p>下图以 texture 类型的图像资源为例：</p><p><img src="'+t+'" alt="image info"></p><p>子资源的详细属性说明请参考对应资源类型的文档说明。<strong>normal map</strong> 的子资源属性与 <strong>texture</strong> 一致，可参考 <a href="./texture.html">纹理贴图资源</a></p>',16),p=[i];function d(c,m,h,f,u,x){return s(),e("div",null,p)}const P=r(g,[["render",d]]);export{b as __pageData,P as default};
