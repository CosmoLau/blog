import{_ as s,v as a,b as l,R as e}from"./chunks/framework.5ffcbaff.js";const A=JSON.parse('{"title":"Asset Manager 概述","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/asset-manager.md","filePath":"zh/manual/asset/asset-manager.md"}'),t={name:"zh/manual/asset/asset-manager.md"},n=e(`<h1 id="asset-manager-概述" tabindex="-1">Asset Manager 概述 <a class="header-anchor" href="#asset-manager-概述" aria-label="Permalink to &quot;Asset Manager 概述&quot;">​</a></h1><blockquote><p>文：Santy-Wang、Xunyi</p></blockquote><p>在游戏的开发过程中，一般需要使用到大量的图片、音频等资源来丰富整个游戏内容，而大量的资源就会带来管理上的困难。所以 Creator 提供了 <strong>Asset Manager</strong> 资源管理模块来帮助开发者管理其资源的使用，大大提升开发效率和使用体验。</p><p><strong>Asset Manager</strong> 是 Creator 在 v2.4 新推出的资源管理器，用于替代之前的 <code>loader</code>。新的 Asset Manager 资源管理模块具备加载资源、查找资源、销毁资源、缓存资源、Asset Bundle 等功能，相比之前的 <code>loader</code> 拥有更好的性能，更易用的 API，以及更强的扩展性。所有函数和方法可通过 <code>assetManager</code> 进行访问，所有类型和枚举可通过 <code>AssetManager</code> 命名空间进行访问。</p><p><strong>注意</strong>：为了带来平滑的升级体验，我们会在一段时间内保留对 <code>loader</code> 的兼容，但还是建议新项目统一使用 <strong>Asset Manager</strong>。</p><p>你可以参考以下文章升级：</p><ul><li><a href="./asset-manager-upgrade-guide.html">loader 升级 assetManager 指南</a></li><li><a href="./subpackage-upgrade-guide.html">子包升级 Asset Bundle 指南</a></li></ul><h2 id="加载资源" tabindex="-1">加载资源 <a class="header-anchor" href="#加载资源" aria-label="Permalink to &quot;加载资源&quot;">​</a></h2><h3 id="动态加载资源" tabindex="-1">动态加载资源 <a class="header-anchor" href="#动态加载资源" aria-label="Permalink to &quot;动态加载资源&quot;">​</a></h3><p>除了在编辑场景时，可以将资源应用到对应组件上，Creator 还支持在游戏运行过程中动态加载资源并进行设置。而动态加载资源 Asset Manager 提供了以下两种的方式：</p><ol><li><p>通过将资源放在 resources 目录下，并配合 <code>resources.load</code> 等 API 来实现动态加载。</p></li><li><p>开发者可以自己规划资源制作为 Asset Bundle，再通过 Asset Bundle 的 <code>load</code> 系列 API 进行资源的加载。例如：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> SpriteFrame</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">asset</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Sprite</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">asset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li></ol><p>相关的 API 列表如下：</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">支持</th><th style="text-align:left;">加载</th><th style="text-align:left;">释放</th><th style="text-align:left;">预加载</th><th style="text-align:left;">获取</th><th style="text-align:left;">查询资源信息</th></tr></thead><tbody><tr><td style="text-align:left;">单个资源</td><td style="text-align:left;">Asset Bundle</td><td style="text-align:left;">load</td><td style="text-align:left;">release</td><td style="text-align:left;">preload</td><td style="text-align:left;">get</td><td style="text-align:left;">getInfoWithPath</td></tr><tr><td style="text-align:left;">文件夹</td><td style="text-align:left;">Asset Bundle</td><td style="text-align:left;">loadDir</td><td style="text-align:left;">releaseAsset</td><td style="text-align:left;">preloadDir</td><td style="text-align:left;">N/A</td><td style="text-align:left;">getDirWithPath</td></tr><tr><td style="text-align:left;">场景</td><td style="text-align:left;">Asset Bundle</td><td style="text-align:left;">loadScene</td><td style="text-align:left;">N/A</td><td style="text-align:left;">preloadScene</td><td style="text-align:left;">N/A</td><td style="text-align:left;">getSceneInfo</td></tr><tr><td style="text-align:left;">单个资源</td><td style="text-align:left;"><code>resources</code></td><td style="text-align:left;">load</td><td style="text-align:left;">release</td><td style="text-align:left;">preload</td><td style="text-align:left;">get</td><td style="text-align:left;">getInfoWithPath</td></tr><tr><td style="text-align:left;">文件夹</td><td style="text-align:left;"><code>resources</code></td><td style="text-align:left;">loadDir</td><td style="text-align:left;">releaseAsset</td><td style="text-align:left;">preloadDir</td><td style="text-align:left;">N/A</td><td style="text-align:left;">getDirWithPath</td></tr><tr><td style="text-align:left;">远程</td><td style="text-align:left;">Asset Manager</td><td style="text-align:left;">loadRemote</td><td style="text-align:left;">releaseAsset</td><td style="text-align:left;">N/A</td><td style="text-align:left;">N/A</td><td style="text-align:left;">N/A</td></tr></tbody></table><p>相关文档可参考：</p><ul><li><a href="./dynamic-load-resources.html">动态加载资源</a></li></ul><p>所有加载到的资源都会被缓存在 <code>assetManager</code> 中。</p><h3 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h3><p>为了减少下载的延迟，<code>assetManager</code> 和 Asset Bundle 中不但提供了加载资源的接口，每一个加载接口还提供了对应的预加载版本。开发者可在游戏中进行预加载工作，然后在真正需要时完成加载。预加载只会下载必要的资源，不会进行反序列化和初始化工作，所以性能消耗更小，适合在游戏过程中使用。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preload</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SpriteFrame</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeOut</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loadAsset</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">loadAsset</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SpriteFrame</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">asset</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Sprite</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">asset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>关于预加载的更多内容请参考 <a href="./preload-load.html">预加载与加载</a>。</p><h2 id="asset-bundle" tabindex="-1">Asset Bundle <a class="header-anchor" href="#asset-bundle" aria-label="Permalink to &quot;Asset Bundle&quot;">​</a></h2><p>开发者可以将自己的场景、资源、代码划分成多个 Asset Bundle，并在运行时动态加载资源，从而实现资源的模块化，以便在需要时加载对应资源。例如：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">assetManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadBundle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testBundle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">bundle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">bundle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">textures/background</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">asset</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>更多关于 Asset Bundle 的介绍请参考 <a href="./bundle.html">bundle</a>。</p><h2 id="释放资源" tabindex="-1">释放资源 <a class="header-anchor" href="#释放资源" aria-label="Permalink to &quot;释放资源&quot;">​</a></h2><p>Asset Manager 提供了更为方便的资源释放机制，在释放资源时开发者只需要关注该资源本身而不再需要关注其依赖资源。引擎会尝试对其依赖资源根据引用数量进行释放，以减少用户管理资源释放的复杂度。例如：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prefabs/enemy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Prefab</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">asset</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">assetManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">releaseAsset</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">asset</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Creator 还提供了引用计数机制来帮助开发者控制资源的引用和释放。例如：</p><ul><li><p>当需要持有资源时，请调用 <code>addRef</code> 来增加引用，确保该资源不会被其他引用到的地方自动释放。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">textures/armor/texture</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Texture2D</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">texture</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">texture</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li><li><p>当不再需要持有该资源时，请调用 <code>decRef</code> 来减少引用，<code>decRef</code> 还将根据引用计数尝试自动释放。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decRef</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">texture </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span></code></pre></div></li></ul><p>更多详细内容请参考文档 <a href="./release-manager.html">资源释放</a>。</p><h2 id="缓存管理器" tabindex="-1">缓存管理器 <a class="header-anchor" href="#缓存管理器" aria-label="Permalink to &quot;缓存管理器&quot;">​</a></h2><p>在某些平台上，比如微信小游戏，因为存在文件系统，所以可以利用文件系统对一些远程资源进行缓存。此时需要一个缓存管理器来管理所有缓存资源，例如缓存资源、清除缓存资源、修改缓存周期等。从 v2.4 开始，Creator 在所有存在文件系统的平台上都提供了缓存管理器，以便对缓存进行增删改查操作。例如：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 获取某个资源的缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">assetManager</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cacheManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCache</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://example.com/bundle1/import/9a/9aswe123-dsqw-12xe-123xqawe12.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清除某个资源的缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">assetManager</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cacheManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeCache</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://example.com/bundle1/import/9a/9aswe123-dsqw-12xe-123xqawe12.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>更多缓存管理器的介绍请参考 <a href="./cache-manager.html">缓存管理器</a>。</p><h2 id="可选参数" tabindex="-1">可选参数 <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数&quot;">​</a></h2><p><code>assetManager</code> 和 Asset Bundle 的部分接口都额外提供了 <code>options</code> 参数，可以极大地增加灵活性以及扩展空间。<code>options</code> 中除了可以配置 Creator 内置的参数之外，还可以自定义任意参数，这些参数将提供给下载器、解析器以及加载管线。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bundle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadScene</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> callback)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>更多关于 <code>options</code> 的内容可参考文档 <a href="./options.html">可选参数</a>。</p><p>如果不需要配置引擎内置参数或者自定义参数来扩展引擎功能，可以无视它，直接使用更简单的 API 接口，比如 <code>resources.load</code>。</p><h2 id="加载管线" tabindex="-1">加载管线 <a class="header-anchor" href="#加载管线" aria-label="Permalink to &quot;加载管线&quot;">​</a></h2><p>为了更方便地自定义资源加载流程，Asset Manager 底层使用了名为 <strong>管线与任务</strong>、<strong>下载与解析</strong> 的机制来完成资源的加载工作，极大地增加了灵活性和定制性。如果需要自定义加载管线或自定义管线，可以参考：</p><ul><li><a href="./pipeline-task.html">管线与任务</a></li><li><a href="./downloader-parser.html">下载与解析</a></li></ul><h2 id="更多参考" tabindex="-1">更多参考 <a class="header-anchor" href="#更多参考" aria-label="Permalink to &quot;更多参考&quot;">​</a></h2><ul><li><a href="./bundle.html">Asset Bundle</a></li><li><a href="./release-manager.html">资源释放</a></li><li><a href="./downloader-parser.html">下载与解析</a></li><li><a href="./preload-load.html">加载与预加载</a></li><li><a href="./cache-manager.html">缓存管理器</a></li><li><a href="./options.html">可选参数</a></li><li><a href="./pipeline-task.html">管线与任务</a></li></ul>`,44),o=[n];function p(r,c,y,D,F,i){return a(),l("div",null,o)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};