import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/missingscript.D-e2I-pv.png",p="/docs/cocos/assets/add.BGu3mScY.png",h="/docs/cocos/assets/refresh.tEDKcc4a.png",l="/docs/cocos/assets/conflict.CTNAuWLZ.png",e="/docs/cocos/assets/search_uuid.Cje693OB.png",k="/docs/cocos/assets/lost.BvsqvP0_.png",r="/docs/cocos/assets/resources.Cv-L_UOQ.png",B=JSON.parse('{"title":"资源管理注意事项 --- meta 文件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/asset/meta.md","filePath":"zh/asset/meta.md","lastUpdated":1712305443000}'),E={name:"zh/asset/meta.md"},o=t('<h1 id="资源管理注意事项-meta-文件" tabindex="-1">资源管理注意事项 --- meta 文件 <a class="header-anchor" href="#资源管理注意事项-meta-文件" aria-label="Permalink to &quot;资源管理注意事项 --- meta 文件&quot;">​</a></h1><blockquote><p>本文全文转载自 <a href="https://mp.weixin.qq.com/s/MykJaytb3t_oacude1cvIg" target="_blank" rel="noreferrer">微信公众号：奎特尔星球</a>，转载前已获得作者授权 作者：ShawnZhang</p></blockquote><p>Cocos Creator 会为 assets 目录下的每一个文件和目录生成一个同名的 meta 文件，相信大家一定不会太陌生。理解 Creator 生成 meta 文件的作用和机理，能帮助您和您的团队解决在多人开发时常会遇到的资源冲突、文件丢失、组件属性丢失等问题。那 meta 文件是做什么用的呢？下面我们来了解一下。</p><p><img src="'+n+`" alt="missingscript"></p><h2 id="meta-文件的作用" tabindex="-1">meta 文件的作用 <a class="header-anchor" href="#meta-文件的作用" aria-label="Permalink to &quot;meta 文件的作用&quot;">​</a></h2><p>先来看下场景中的 meta 文件长什么样子：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;ver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;911560ae-98b2-4f4f-862f-36b7499f7ce3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局唯一 id</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;asyncLoadAssets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 异步加载</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;autoReleaseAssets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自动释放资源</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;subMetas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子元数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>预制件的 meta 文件与场景是一样的。我们再来看一下 png 图片的 meta 文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;ver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;19110ebf-4dda-4c90-99d7-34b2aef4d048&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sprite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;wrapMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clamp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;filterMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bilinear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   &quot;subMetas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;img_circular&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;ver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a2d1f885-6c18-4f67-9ad6-97b35f1fcfcf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;rawTextureUuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;19110ebf-4dda-4c90-99d7-34b2aef4d048&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;trimType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;trimThreshold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;rotated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;offsetX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;offsetY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;trimX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;trimY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;rawWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;rawHeight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;borderTop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;borderBottom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;borderLeft&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;borderRight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       &quot;subMetas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>png 图片的 meta 文件信息比较多，除了基本的 <code>ver</code> 和 <code>uuid</code> 外，还记录了图片的宽高、偏移、九宫格等数据。上面这么多信息，我们这里只关心一个：<strong>UUID</strong>。</p><blockquote><p>UUID: 通用唯一标识符（Universally Unique Identifier）</p></blockquote><p>UUID 是 Creator 用来管理游戏资源的。它会为每个文件分配一个唯一的 id，图集会生成多个。由此可以了解在 Creator 引擎中，识别一个文件不是简单地通过 <code>路径 + 文件名</code> 定位，而是通过 UUID 来引用文件。因此可以在编辑器资源管理中，随意删除、移动文件。</p><h2 id="meta-文件更新时机" tabindex="-1">meta 文件更新时机 <a class="header-anchor" href="#meta-文件更新时机" aria-label="Permalink to &quot;meta 文件更新时机&quot;">​</a></h2><p>Creator 生成 meta 文件有以下几种情况：</p><p><strong>1、打开工程时</strong></p><p>打开项目工程时，Creator 会先扫描 assets 目录，如果哪个文件还没有 meta 文件，此时就会生成。</p><p><strong>2、更新资源时</strong></p><p>更新资源也会引发 meta 文件的更新：</p><ul><li>在 <strong>资源管理器</strong> 中可以对资源进行文件名修改、改变目录、删除文件，添加文件等操作，请参考 <a href="./../getting-started/basics/editor-panels/assets">资源管理器</a>。也可以直接从桌面或操作系统的文件管理器中将文件拖入到 <strong>资源管理器</strong> 中。</li></ul><p><img src="`+p+'" alt="add"></p><ul><li><p>还有一种情况是在操作系统的文件管理器中对 assets 目录中的文件进行增、删、改之后切换到编辑器界面，此时可以看到 <strong>资源管理器</strong> 刷新的过程。</p><p><img src="'+h+'" alt="refresh"></p></li></ul><p>如果一个文件的 meta 文件不存在，上面两种情况都会触发引擎去生成 meta 文件。</p><h2 id="meta-文件出错的几种情况及解决方法" tabindex="-1">meta 文件出错的几种情况及解决方法 <a class="header-anchor" href="#meta-文件出错的几种情况及解决方法" aria-label="Permalink to &quot;meta 文件出错的几种情况及解决方法&quot;">​</a></h2><p>下面我们分析下 meta 文件出错的几种可能情况。</p><h3 id="uuid-冲突" tabindex="-1">UUID 冲突 <a class="header-anchor" href="#uuid-冲突" aria-label="Permalink to &quot;UUID 冲突&quot;">​</a></h3><p>UUID 是全局唯一的，产生冲突肯定是有不同的文件的 UUID 相同了，一旦出现这个问题会导致 Cocos Creator 资源管理器目录结构加载不完整。如下图所示，遇到这种情况估计会让你吓出一身冷汗：</p><p><img src="'+l+'" alt="conflict"></p><p>从提示中可以看到冲突的 UUID 字符串，然后打开操作系统文件管理或代码编辑器，搜索这个 UUID：</p><p><img src="'+e+'" alt="search_uuid"></p><p>此时先关闭 Creator 编辑器，再任意删除其中一个 meta 文件，然后再打开 Creator 编辑器就可以解决。</p><p>这种方法虽然可以解决问题，但在编辑器中引用到这个资源的地方将会出现资源丢失，需要重新编辑或者重新配置一次。最好是通过版本管理工具还原此 meta 文件。</p><p>出现这种问题的原因一般有以下两个：</p><ul><li><p>在操作系统的文件管理器中移动文件时，将剪切、粘贴不小心操作成了复制、粘贴，同时也把 meta 文件复制过去了。导致项目中同时出现两个相同的 meta 文件。</p></li><li><p>在多人协作时，从版本管理工具中，更新资源时碰巧遇到别人生成的 UUID 与你的电脑上某个文件生成的 UUID 一样了，但这种情况非常非常罕见。</p></li></ul><p>总的来说，要减少 UUID 冲突发生，最好在引擎资源管理工具中进行添加、移动文件。</p><h3 id="uuid-变化" tabindex="-1">UUID 变化 <a class="header-anchor" href="#uuid-变化" aria-label="Permalink to &quot;UUID 变化&quot;">​</a></h3><p>还有一种情况是 UUID 变了，使得旧的 UUID 对应的资源无法找到，这样的话，你曾经编辑的界面将会出现资源、图片丢失，还可能出现组件属性丢失。</p><p><img src="'+k+'" alt="lost"></p><p>如果找不到旧的 UUID 对应的资源，通过 <strong>控制台</strong> 可以看到 Creator 给出了所在的场景文件名、节点路径、组件、UUID 等非常详细的警告信息。通过警告信息可以快速定位出错的地方。</p><p>这种情况又是怎么造成的呢？当有一个人将新资源添加进项目时，忘记切换到编辑器界面使其生成 meta 文件，同时又将这些新增的文件提交到了版本管理中(不包含 meta 文件)。然后，有另一个人去更新了他所提交的资源，同时切换到了编辑器界面进行编辑，这时 Creator 会检查到新资源没有 meta 文件便会立即生成。而当第一个人切换到编辑器的时候也会生成 meta 文件，这样两个人的电脑上为同一个文件，但是生成的 meta 文件中的 UUID 都不相同。</p><p>这种情况下，后面进行资源提交或更新的人，肯定也会遇到冲突，如果不明就理就强行解决冲突，就会产生上面所说的问题。下面的时序图就描述了这种错误的工作流程：</p><p><img src="'+r+'" alt="resources"></p><p>因为第一个 A 同学忘记生成 meta 文件并提交，之后其他人都编辑过项目，但每个人生成的 UUID 都不同，这样就会陷入无限的资源出错中，编辑好的东西，一提交更新又出现冲突了。</p><p>要解决这个问题注意下面几点：</p><ul><li><p>提交前检查是否有新增文件，有新增文件时，注意是否有 meta 文件，需要一起提交；</p></li><li><p>拉取文件时，注意是否有新增文件，并且是有 meta 文件成对，如果没有的话，提醒之前提交文件的同学，把 meta 文件一并提交；</p></li><li><p>提交时，如果发现只有新增的 meta 文件，那这个 meta 文件肯定是自己生成的，需要注意是否使用过这个 meta 文件对应的资源（同名文件）。如果没用过，那请最早提交者把 meta 文件提交了。千万不能将这个 meta 文件提交上去。</p></li></ul><p>注意上面几点基本上就可以杜绝 meta 文件 UUID 变化导致的工程出错了。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>meta 文件是 Creator 用于资源管理的重要手段，但在多人协同开发中稍有不慎就容易产生资源错误。要解决这个问题，不仅需要理解 meta 文件的产生机制和导致冲突的原因，同时还应该规范资源提交流程。</p>',47),d=[o];function g(c,u,y,C,F,q){return a(),i("div",null,d)}const U=s(E,[["render",g]]);export{B as __pageData,U as default};
