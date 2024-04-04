import{_ as t,c as e,o as a,a5 as r}from"./chunks/framework.CqnjdYks.js";const s="/docs/cocos/assets/create-auto-atlas.DhXmtIEc.png",l="/docs/cocos/assets/autoatlas-properties.DWS-ykBb.png",m=JSON.parse('{"title":"自动图集资源 (Auto Atlas)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/auto-atlas.md","filePath":"zh/manual/asset/auto-atlas.md"}'),o={name:"zh/manual/asset/auto-atlas.md"},n=r('<h1 id="自动图集资源-auto-atlas" tabindex="-1">自动图集资源 (Auto Atlas) <a class="header-anchor" href="#自动图集资源-auto-atlas" aria-label="Permalink to &quot;自动图集资源 (Auto Atlas)&quot;">​</a></h1><p><strong>自动图集</strong> 作为 Cocos Creator 自带的合图功能，可以将指定的一系列碎图打包成一张大图，具体作用和 Texture Packer 的功能很相近。</p><h2 id="创建自动图集资源" tabindex="-1">创建自动图集资源 <a class="header-anchor" href="#创建自动图集资源" aria-label="Permalink to &quot;创建自动图集资源&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 中点击左上角的 <strong>+</strong> 创建按钮，然后选择 <strong>自动图集配置</strong>，即可在 <strong>资源管理器</strong> 中新建一个 <strong>auto-atlas.pac</strong> 资源。</p><p><img src="'+s+'" alt="create auto atlas"></p><p><strong>自动图集资源</strong> 目前是以当前文件夹下的所有 <strong>SpriteFrame</strong> 作为碎图资源，然后在构建过程中将其打包成一个大的 <strong>Sprite Atlas</strong>，之后我们会增加其他的选择碎图资源的方式。如果碎图资源 <strong>SpriteFrame</strong> 有配置过，那么打包后重新生成的 <strong>SpriteFrame</strong> 将会保留这些配置。</p><h2 id="配置自动图集资源" tabindex="-1">配置自动图集资源 <a class="header-anchor" href="#配置自动图集资源" aria-label="Permalink to &quot;配置自动图集资源&quot;">​</a></h2><p>在 <strong>资源管理器</strong> 中选中一个 <strong>自动图集资源</strong> 后，<strong>属性检查器</strong> 面板将会显示 <strong>自动图集资源</strong> 的所有可配置项。</p><p><img src="'+l+'" alt="auto atlas properties"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">最大宽度</td><td style="text-align:left;">单张图集最大宽度</td></tr><tr><td style="text-align:left;">最大高度</td><td style="text-align:left;">单张图集最大高度</td></tr><tr><td style="text-align:left;">间距</td><td style="text-align:left;">图集中碎图之间的间距</td></tr><tr><td style="text-align:left;">允许旋转</td><td style="text-align:left;">是否允许旋转碎图</td></tr><tr><td style="text-align:left;">输出大小为正方形</td><td style="text-align:left;">是否强制将图集长宽大小设置成正方形</td></tr><tr><td style="text-align:left;">Power of Two</td><td style="text-align:left;">是否将图集长宽大小设置为二次方倍数</td></tr><tr><td style="text-align:left;">算法</td><td style="text-align:left;">算法，图集打包策略，目前暂时只有一个选项 <code>MaxRects</code></td></tr><tr><td style="text-align:left;">扩边</td><td style="text-align:left;">扩边，在碎图的边框外扩展出一像素外框，并复制相邻碎图像素到外框中。该功能也称作 <strong>Extrude</strong></td></tr><tr><td style="text-align:left;">剔除未使用的图片</td><td style="text-align:left;">构建时不包含未被引用的资源。默认勾选，仅在构建后生效，预览时不生效</td></tr><tr><td style="text-align:left;">剔除在 Bundle 内未被使用的 Texture2D 资源</td><td style="text-align:left;">默认勾选，仅在构建后生效，预览时不生效</td></tr><tr><td style="text-align:left;">剔除在 Bundle 内未被使用的图片资源</td><td style="text-align:left;">默认勾选，仅在构建后生效，预览时不生效</td></tr><tr><td style="text-align:left;">剔除在 Bundle 内未被使用的 Sprite 图集资源</td><td style="text-align:left;">默认勾选，仅在构建后生效，预览时不生效</td></tr><tr><td style="text-align:left;">UseCompressTexture</td><td style="text-align:left;">是否使用压缩纹理，详情请参考 <a href="./compress-texture.html">压缩纹理</a>。</td></tr></tbody></table><p>其余属性与 Texture 是一样的，详情请参考 <a href="./texture.html#子资源-texture2d-的属性面板">纹理贴图</a>。</p><p>配置完成后可以点击 <strong>预览</strong> 按钮来预览打包的结果，按照当前自动图集配置生成的相关结果将会展示在 <strong>属性检查器</strong> 下面的区域。</p><blockquote><p><strong>注意</strong>：每次配置完成后，需要重新点击 <strong>预览</strong> 才会重新生成预览图。</p></blockquote><p>结果分为：</p><ul><li>Packed Textures：显示打包后的图集图片以及图片相关的信息，如果会生成的图片有多张，则会往下在 <strong>属性检查器</strong> 中列出来。</li><li>Unpacked Textures：显示不能打包进图集的碎图资源，造成的原因有可能是这些碎图资源的大小比图集资源的大小还大导致的，这时候可能需要调整下图集的配置或者碎图的大小了。</li></ul><h2 id="生成图集" tabindex="-1">生成图集 <a class="header-anchor" href="#生成图集" aria-label="Permalink to &quot;生成图集&quot;">​</a></h2><p>预览项目或者在 Cocos Creator 中使用碎图的时候都是直接使用的碎图资源，在 <strong>构建项目</strong> 这一步才会真正生成图集到项目中。正常情况下，生成图集资源后，会删除包体内原有的小图的 texture 和 image 图片资源，以下两种特殊情况会有特殊处理：</p><ol><li><p>当图集资源在 <strong>Bundle</strong> 目录下，除了正常生成图集资源以外，也会同时生成原始 spriteFrame 生成的 texture 以及 image 资源，如果对图集的资源有明确的使用范围 <strong>请勾选对应的剔除选项以免造成包体过大</strong>。</p></li><li><p>当图集资源文件夹内任意 spriteFrame 依赖的 texture 被其他资源直接使用（例如被直接作为纹理贴图使用），被依赖的 texture 及其 image 资源将会被一同打包出来。</p></li></ol><p>以上两种情况事实上都会增大包体，构建将会警告提示，如非必须，请不要这样使用。</p>',19),d=[n];function g(i,p,c,u,x,f){return a(),e("div",null,d)}const y=t(o,[["render",g]]);export{m as __pageData,y as default};
