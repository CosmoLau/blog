import{_ as e,v as t,b as a,R as r}from"./chunks/framework.5ffcbaff.js";const c=JSON.parse('{"title":"纹理（Textures）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/module-map/texture/index.md","filePath":"zh/manual/module-map/texture/index.md"}'),s={name:"zh/manual/module-map/texture/index.md"},i=r('<h1 id="纹理-textures" tabindex="-1">纹理（Textures） <a class="header-anchor" href="#纹理-textures" aria-label="Permalink to &quot;纹理（Textures）&quot;">​</a></h1><p>纹理是一张可显示的图像，或一段用于计算的中间数据，通过 UV 坐标映射到渲染物体表面，使之效果更为丰富精彩且真实。Creator 中纹理的应用包括以下几种：</p><ul><li><p>用于 2D UI 渲染，参考 <a href="./../../asset/sprite-frame.html">SpriteFrame</a>。</p></li><li><p>用于 3D 模型渲染，需要在材质中指定 <a href="./../../asset/texture.html">纹理贴图资源</a>，才能将其渲染映射到网格表面。纹理贴图还支持在 <a href="./../../asset/image.html">导入图像资源</a> 时将其切换为 <strong>立方体贴图</strong> 或 <strong>法线贴图</strong>。</p></li><li><p>用于粒子系统，使粒子表现更丰富。与 3D 模型一样，纹理在粒子系统中的应用也依赖于材质。</p></li><li><p>用于地形渲染，参考 <a href="./../../editor/terrain/">地形系统</a>。</p></li></ul><h2 id="更多内容" tabindex="-1">更多内容 <a class="header-anchor" href="#更多内容" aria-label="Permalink to &quot;更多内容&quot;">​</a></h2><ul><li><a href="./../../asset/render-texture.html">渲染纹理（RenderTexture）</a></li><li><a href="./../../asset/compress-texture.html">压缩纹理</a></li></ul>',5),l=[i];function n(o,u,h,d,m,p){return t(),a("div",null,l)}const f=e(s,[["render",n]]);export{c as __pageData,f as default};