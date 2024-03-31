import{_ as e,v as a,b as t,R as s}from"./chunks/framework.5ffcbaff.js";import{_ as o}from"./chunks/cubemap-properties.5f4fc157.js";const r="/docs/cocos/assets/set-texture-cube.0fcec2e3.png",p="/docs/cocos/assets/texture-cube.3303a28e.png",_=JSON.parse('{"title":"立方体贴图","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/texture-cube.md","filePath":"zh/manual/asset/texture-cube.md"}'),n={name:"zh/manual/asset/texture-cube.md"},c=s('<h1 id="立方体贴图" tabindex="-1">立方体贴图 <a class="header-anchor" href="#立方体贴图" aria-label="Permalink to &quot;立方体贴图&quot;">​</a></h1><p>TextureCube 为立方体纹理，常用于设置场景的 <a href="./../concepts/scene/skybox.html">天空盒</a>。立方体贴图可以通过设置全景图 ImageAsset 为 TextureCube 类型获得，也可以在 Creator 中制作生成。</p><h2 id="设置为立方体贴图" tabindex="-1">设置为立方体贴图 <a class="header-anchor" href="#设置为立方体贴图" aria-label="Permalink to &quot;设置为立方体贴图&quot;">​</a></h2><p>在将 ImageAsset <a href="./asset-workflow.html">导入</a> 到 Creator 后，即可在 <strong>属性检查器</strong> 面板将其设置为 <strong>texture cube</strong> 类型，设置完成后请点击右上角的绿色打钩按钮，以保存修改。</p><p><img src="'+r+'" alt="set-texture-cube"></p><p>设置完成后在 <strong>资源管理器</strong> 面板可以看到原先的图像资源下方生成了一个 <strong>textureCube</strong> 子资源，以及组成 TextureCube 的六张 texture：</p><p><img src="'+p+'" alt="texture-cube"></p><h2 id="制作立方体贴图" tabindex="-1">制作立方体贴图 <a class="header-anchor" href="#制作立方体贴图" aria-label="Permalink to &quot;制作立方体贴图&quot;">​</a></h2><p>在 Creator 中通过制作 CubeMap 获得的 TextureCube 如下图：</p><p><img src="'+o+'" alt="CubeMap"></p><p>关于 TextureCube 具体的使用，以及制作 CubeMap 的方式，请参考 <a href="./../concepts/scene/skybox.html">天空盒 — 设置 CubeMap</a>。</p><h2 id="立方贴图的-mipmap-范围" tabindex="-1">立方贴图的 mipmap 范围 <a class="header-anchor" href="#立方贴图的-mipmap-范围" aria-label="Permalink to &quot;立方贴图的 mipmap 范围&quot;">​</a></h2><p>TextureCube 可以在运行时动态选择 mipmap 的范围。设置完 mipmap 范围后，只有在范围之内的 mipmap 可以被使用。这允许我们通过跳过低层级来达到节约带宽的目的，同时也可以避免使用过高层级而降低效果。</p><p>可以通过以下方法设置 TextureCube 的 mipmap 层级范围：</p><div class="language-Javascript"><button title="Copy Code" class="copy"></button><span class="lang">Javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setMipRange</span><span style="color:#A6ACCD;">(minLevel</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> maxLevel)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>其中 <code>minLevel</code> 指定了最小限制，<code>maxLevel</code> 指定了最大限制。</p><blockquote><p><strong>注意</strong>：</p><ol><li>该限制无法超出已有的 mipmap 层级。</li><li>该方法对 WebGL 和 GLES2 后端无效。</li></ol></blockquote>',17),l=[c];function i(u,m,b,h,d,x){return a(),t("div",null,l)}const f=e(n,[["render",i]]);export{_ as __pageData,f as default};