import{_ as e,v as s,b as t,R as a}from"./chunks/framework.5ffcbaff.js";import{_ as o}from"./chunks/sub-texture.b2087e22.js";const r="/docs/cocos/assets/set-texture.69afaa99.png",p="/docs/cocos/assets/sub-texture-pro.42d1707d.png",n="/docs/cocos/assets/filter-mode.67a4f9e6.png",l="/docs/cocos/assets/generate-mipmaps.2434be78.png",c="/docs/cocos/assets/repeat.09354dcc.png",i="/docs/cocos/assets/clamp-to-edge.e6c0442c.png",d="/docs/cocos/assets/mirrored-repeat.55669f40.png",g="/docs/cocos/assets/use-texture2d.42e84aac.png",_=JSON.parse('{"title":"纹理贴图资源（Texture）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/texture.md","filePath":"zh/manual/asset/texture.md"}'),m={name:"zh/manual/asset/texture.md"},D=a('<h1 id="纹理贴图资源-texture" tabindex="-1">纹理贴图资源（Texture） <a class="header-anchor" href="#纹理贴图资源-texture" aria-label="Permalink to &quot;纹理贴图资源（Texture）&quot;">​</a></h1><p>纹理贴图资源是一种用于程序采样的资源，如模型上的贴图、精灵上的 UI。当程序渲染 UI 或者模型时，会使用纹理坐标获取纹理颜色，然后填充在模型网格上，再加上光照等等一系列处理便渲染出了整个场景。</p><p>纹理贴图资源可由图像资源（ImageAsset）转换而来，图像资源包括一些通用的图像转换格式如 PNG、JPEG 等等。</p><h2 id="texture2d" tabindex="-1">Texture2D <a class="header-anchor" href="#texture2d" aria-label="Permalink to &quot;Texture2D&quot;">​</a></h2><p>Texture2D 是纹理贴图资源的一种，通常用于 3D 模型的渲染，如模型材质中的反射贴图、环境光遮罩贴图等等。</p><p>在将图像资源 <a href="./asset-workflow.html">导入</a> 到 Creator 后，即可在 <strong>属性检查器</strong> 面板将其设置为 <strong>texture</strong> 类型，texture 类型便是 Texture2D 纹理资源。</p><p><img src="'+r+'" alt="Texture2D"></p><h2 id="texture2d-属性" tabindex="-1">Texture2D 属性 <a class="header-anchor" href="#texture2d-属性" aria-label="Permalink to &quot;Texture2D 属性&quot;">​</a></h2><p>当导入图像资源时，编辑器默认将其设置为 <strong>texture</strong> 类型，并且在导入的图像资源下会自动创建一个或多个子资源，点击 <strong>资源管理器</strong> 中图像资源左侧的三角图标即可展开查看所有的子资源，如下图所示：</p><p><img src="'+o+'" alt="sub-texture"></p><p>选中生成的 Texture2D 子资源后可以在 <strong>属性检查器</strong> 设置相关属性：</p><p><img src="'+p+'" alt=" Texture2D 子资源"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Anisotropy</strong></td><td style="text-align:left;">各向异性值，应用各向异性过滤算法的最大阈值</td></tr><tr><td style="text-align:left;"><strong>Filter Mode</strong></td><td style="text-align:left;">过滤模式，可选项为 <strong>Nearest（None）</strong>、<strong>Bilinear</strong>、<strong>Bilinear with mipmaps</strong>、<strong>Trilinear with mipmaps</strong> 以及 <strong>Advanced</strong>，请参考下方 <strong>过滤方式</strong> 以获取更多信息</td></tr><tr><td style="text-align:left;"><strong>Wrap Mode</strong></td><td style="text-align:left;">设置寻址模式，可选项为 <strong>Repeat</strong>、<strong>Clamp</strong>、<strong>Mirror</strong> 以及 <strong>Advanced</strong> <br> 在选择 <strong>Advanced</strong> 时，设置 S（U）/ T（V）方向上的纹理寻址模式，也就是像素对纹理在 S（U）或者 T（V）方向上的映射模式，请参考下文 <strong>寻址模式</strong> 以获取更多信息</td></tr></tbody></table><blockquote><p><strong>注意</strong>：由于默认的 Wrap Mode 在渲染图像的透明边缘时可能会出现黑边，所以在将图像资源类型设置为 <strong>sprite-frame</strong> 时，Creator 会自动将 texture 资源的 Wrap Mode S 和 Wrap Mode T 属性自动调整为 <strong>clamp-to-edge</strong>。如有特殊需要，开发者可以自行修改。</p></blockquote><p>接下来我们对部分属性进行简单的说明。</p><h3 id="过滤方式" tabindex="-1">过滤方式 <a class="header-anchor" href="#过滤方式" aria-label="Permalink to &quot;过滤方式&quot;">​</a></h3><p><img src="'+n+'" alt="filter mode"></p><p>当 Texture2D 的原始大小与屏幕映射的纹理图像尺寸不一致时，通过不同的纹理过滤方式进行纹理单元到像素的映射会产生不同的效果。</p><p>Texture2D 中的 <strong>Min Filter</strong> 和 <strong>Mag Filter</strong> 属性，分别用于设置在缩小或者放大贴图时采用的纹理过滤方式：</p><ol><li><p>邻近过滤（<code>nearest</code>）</p><p>邻近过滤是 <strong>默认</strong> 使用的纹理过滤方式。使用中心位置距离采样点最近的纹理单元颜色值作为该采样点的颜色值，不考虑其他相邻像素的影响。<br> 需要注意的是使用临近过滤方式可能会出现边缘不平滑，锯齿较为明显的情况。</p></li><li><p>线性过滤（<code>linear</code>）</p><p>线性过滤使用距离采样点最近的 2 x 2 的纹理单元矩阵进行采样，取四个纹理单元颜色值的平均值作为采样点的颜色，像素之间的颜色值过渡会更加平滑。<br> 需要注意的是使用线性过滤方式可能会出现边缘黑边的情况，如果是像素类游戏，可能会出现模糊情况。</p></li></ol><h3 id="generate-mipmaps" tabindex="-1">Generate Mipmaps <a class="header-anchor" href="#generate-mipmaps" aria-label="Permalink to &quot;Generate Mipmaps&quot;">​</a></h3><p>为了加快 3D 场景渲染速度和减少图像锯齿，贴图被处理成由一系列被预先计算和优化过的图片组成的序列，这样的贴图被称为 mipmap。mipmap 中每一个层级的小图都是原图的一个特定比例的缩小细节的复制品，当贴图被缩小或者只需要从远距离观看时，mipmap 就会转换到适当的层级。</p><p><img src="'+l+'" alt="generate-mipmaps"></p><p>当勾选 <strong>Generate Mipmaps</strong> 属性或者将 texture 的 <strong>Filter Mode</strong> 选择为 <strong>Bilinear with mipmaps</strong> 或 <strong>Trilinear with mipmaps</strong> 时，会在两个相近的层级之间插值，自动生成 mipmap。因为渲染远距离物体时，mipmap 贴图比原图小，提高了显卡采样过程中的缓存命中率，所以渲染的速度得到了提升。同时因为 mipmap 的小图精度较低，从而减少了摩尔纹现象，可以减少画面上的锯齿。另外因为额外生成了一些小图，所以 mipmap 需要额外占用约三分之一的内存空间。</p><p>Texture2D 可以在运行时动态选择 mipmap 的范围。设置完 mipmap 范围后，只有在范围之内的 mipmap 可以被使用。这允许我们通过跳过低层级来达到节约带宽的目的，同时也可以避免使用过高层级而降低效果。</p><p>可以通过以下方法设置 Texture2D 的 mipmap 层级范围：</p><div class="language-Javascript"><button title="Copy Code" class="copy"></button><span class="lang">Javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setMipRange</span><span style="color:#A6ACCD;">(minLevel</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> maxLevel)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>其中 <code>minLevel</code> 指定了最小限制，<code>maxLevel</code> 指定了最大限制。</p><blockquote><p><strong>注意</strong>：</p><ol><li>该限制无法超出已有的 mipmap 层级。</li><li>该方法对 WebGL 和 GLES2 后端无效。</li></ol></blockquote><h3 id="寻址模式" tabindex="-1">寻址模式 <a class="header-anchor" href="#寻址模式" aria-label="Permalink to &quot;寻址模式&quot;">​</a></h3><p>一般来说，纹理坐标在水平轴（U）和垂直轴（V）的取值范围为 <code>[0，1]</code>，当传递的顶点数据中的纹理坐标取值超出 <code>[0，1]</code> 范围时，就可以通过不同的寻址模式来控制超出范围的纹理坐标如何进行纹理映射。</p><p>Texture2D 中的 <strong>Wrap Mode S</strong> 和 <strong>Wrap Mode T</strong> 属性便是分别用于设置纹理在 UV 方向上的寻址模式：</p><ol><li><p>重复寻址模式（<code>repeat</code>）</p><p>重复寻址模式是默认使用的纹理寻址模式。对于超出 <code>[0，1]</code> 范围的纹理坐标，使用 <code>[0，1]</code> 内的纹理坐标内容不断重复，也就是在超出纹理坐标范围外的地方重复放置纹理贴图。</p><blockquote><p><strong>注意</strong>：在 WebGL1.0 平台，当贴图宽高不是二次幂时，<code>repeat</code> 寻址模式是无效的。运行时会自动将其切换为 <code>clamp-to-edge</code> 寻址模式，这将会使材质的 <code>tilingOffset</code> 等属性失效。</p></blockquote><p>当 Texture2D 的 <strong>Wrap Mode S</strong> 和 <strong>Wrap Mode T</strong> 属性都设置为 <code>repeat</code> 时，效果图如下：</p><p><img src="'+c+'" alt="repeat"></p></li><li><p>钳位寻址模式（<code>clamp-to-edge</code>）</p><p>将纹理坐标约束在 0 到 1 之间，只复制一遍 <code>[0，1]</code> 的纹理坐标。对于 <code>[0，1]</code> 之外的部分，将使用边缘的纹理坐标内容进行延伸，产生类似边缘被拉伸的效果。</p><p>当两个属性都设置为 <code>clamp-to-edge</code> 时，效果图如下：</p><p><img src="'+i+'" alt="clamp-to-edge"></p></li><li><p>镜像寻址模式（<code>mirrored-repeat</code>）</p><p>类似重复寻址模式，只不过贴图是镜像重复放置的。</p><p>当两个属性都设置为 <code>mirrored-repeat</code> 时，效果图如下：</p><p><img src="'+d+'" alt="mirrored-repeat"></p></li></ol><h2 id="使用-texture2d" tabindex="-1">使用 Texture2D <a class="header-anchor" href="#使用-texture2d" aria-label="Permalink to &quot;使用 Texture2D&quot;">​</a></h2><p>Texture2D 是使用范围非常广泛的资源，在 Creator 中的使用方式主要包括在编辑器中使用和动态获取使用：</p><ul><li><p>在编辑器的 <strong>属性检查器</strong> 面板中，任何标记为 Texture2D 类型的属性，都可以将 Texture2D 资源拖拽到属性框中使用。例如设置材质资源的 Texture2D 类型资源：</p><p><img src="'+g+`" alt="mirrored-repeat"></p><blockquote><p><strong>注意</strong>：如果材质中没有定义 <code>USE TEXTURE</code> 就没有该属性。</p></blockquote></li><li><p>动态使用时，需要先获取图像资源（ImageAsset），然后根据获取到的 ImageAsset 实例化出 Texture2D 资源。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testAssets/image/texture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Texture2D</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">texture</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Texture2D</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SpriteFrame</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texture</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Sprite</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>详情请参考 <a href="./dynamic-load-resources.html#加载-spriteframe-或-texture2d">资源加载</a>。</p></li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://learnopengl-cn.github.io/01%20Getting%20started/06%20Textures/#_1" target="_blank" rel="noreferrer">LearnOpenGL — 纹理</a></p>`,38),u=[D];function y(F,x,h,A,C,b){return s(),t("div",null,u)}const q=e(m,[["render",y]]);export{_ as __pageData,q as default};
