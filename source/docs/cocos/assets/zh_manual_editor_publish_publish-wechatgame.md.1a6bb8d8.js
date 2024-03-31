import{_ as t,v as e,b as a,R as o}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/preference.6d88eb6d.png",r="/docs/cocos/assets/appid.ead16c35.jpeg",s="/docs/cocos/assets/build.7554fde6.png",n="/docs/cocos/assets/wechat-build.99c1f47e.png",i="/docs/cocos/assets/package.2aef77ff.png",d="/docs/cocos/assets/tool.82514e39.png",_=JSON.parse('{"title":"发布到微信小游戏","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/publish/publish-wechatgame.md","filePath":"zh/manual/editor/publish/publish-wechatgame.md"}'),c={name:"zh/manual/editor/publish/publish-wechatgame.md"},g=o('<h1 id="发布到微信小游戏" tabindex="-1">发布到微信小游戏 <a class="header-anchor" href="#发布到微信小游戏" aria-label="Permalink to &quot;发布到微信小游戏&quot;">​</a></h1><p>微信小游戏的运行环境是微信小程序环境的扩展，在小程序环境的基础上提供了 WebGL 接口的封装，使得渲染能力和性能有了大幅度提升。不过由于这些接口都是微信团队通过自研的原生实现封装的，所以并不可以等同为浏览器环境。</p><p>作为引擎方，为了尽可能简化开发者的工作量，我们为用户完成的主要工作包括：</p><ul><li>引擎框架适配微信小游戏 API，纯游戏逻辑层面，用户不需要任何额外的修改</li><li>Cocos Creator 编辑器提供了快捷的打包流程，直接发布为微信小游戏，并自动唤起小游戏的开发者工具</li><li>自动加载远程资源，缓存资源以及缓存资源版本控制</li></ul><p>除此之外，小游戏的游戏提交、审核以及发布流程，和小程序是没有区别的，都需要遵守微信团队的要求和标准流程，具体信息可以参考 <a href="https://developers.weixin.qq.com/minigame/dev/guide/" target="_blank" rel="noreferrer">微信小游戏开发文档</a>。</p><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><ol><li><p>在 <a href="https://mp.weixin.qq.com/debug/wxagame/dev/devtools/download.html" target="_blank" rel="noreferrer">微信官方文档</a> 下载微信开发者工具。</p></li><li><p>在编辑器主菜单的 <strong>Cocos Creator -&gt; 偏好设置 -&gt; <a href="./../../editor/preferences/#原生开发环境">外部程序</a></strong> 中设置微信开发者工具路径。</p><p><img src="'+l+'" alt="preference"></p></li><li><p>登录微信公众平台，找到 AppID。</p><p><img src="'+r+'" alt="appid"></p></li></ol><h2 id="发布流程" tabindex="-1">发布流程 <a class="header-anchor" href="#发布流程" aria-label="Permalink to &quot;发布流程&quot;">​</a></h2><ol><li><p>使用 Cocos Creator 打开需要发布的项目工程，从 <strong>菜单栏 -&gt; 项目</strong> 中打开 <strong>构建发布</strong> 面板。在 <strong>构建发布</strong> 面板的 <strong>发布平台</strong> 中选择 <strong>微信小游戏</strong>。</p><p><img src="'+s+'" alt="build"></p><p>通用构建选项的设置请参考 <a href="./build-options.html">通用构建选项</a>，微信小游戏特有的构建选项如下，具体说明请参考下文 <strong>构建选项</strong> 部分的内容。</p><p><img src="'+n+'" alt="build"></p></li><li><p><strong>构建发布</strong> 面板的构建选项设置完成后，点击 <strong>构建</strong>。<br> 构建完成后点击 <strong>构建任务</strong> 左下角的文件夹图标按钮打开项目发布包，可以看到在默认发布路径 <code>build</code> 目录下生成了 <code>wechatgame</code>（以具体的构建任务名为准）文件夹，其中已经包含了微信小游戏环境的配置文件：<code>game.json</code> 和 <code>project.config.json</code>。</p><p><img src="'+i+'" alt="package"></p></li><li><p>然后点击微信小游戏 <strong>构建任务</strong> 右下角的 <strong>运行</strong> 按钮，打开微信开发者工具。</p><p><img src="'+d+'" alt="tool"></p><blockquote><p><strong>注意</strong>：如果之前没有运行过微信开发者工具，可能会出现：<code>Please ensure that the IDE has been properly installed</code> 的报错，需要手动打开一次微信开发者工具，然后才能在 Cocos Creator 里直接点击 <strong>运行</strong> 调用。</p></blockquote></li></ol><h3 id="构建选项" tabindex="-1">构建选项 <a class="header-anchor" href="#构建选项" aria-label="Permalink to &quot;构建选项&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">初始场景分包</td><td style="text-align:left;">勾选后，首场景及其相关的依赖资源会被构建到发布包目录 <code>assets</code> 下的内置 Asset Bundle — <a href="./../../asset/bundle.html#内置-asset-bundle">start-scene</a> 中，提高初始场景的资源加载速度。</td><td style="text-align:left;"><code>startSceneAssetBundle</code></td></tr><tr><td style="text-align:left;">设备方向</td><td style="text-align:left;">可选值包括 <strong>Portrait</strong> 和 <strong>Landscape</strong>。构建时会写入到发布包目录下的 <code>game.json</code> 文件中。</td><td style="text-align:left;"><code>orientation</code></td></tr><tr><td style="text-align:left;">AppID</td><td style="text-align:left;">微信小游戏的 AppID，必填项，面板中默认的 <code>wx6ac3f5090a6b99c5</code> 仅用于测试。构建时会写入到发布包目录下的 <code>project.config.json</code> 文件中。</td><td style="text-align:left;"><code>appid</code></td></tr><tr><td style="text-align:left;">生成开放数据域工程模板</td><td style="text-align:left;">用于接入开放数据域，详情请参考 <a href="./build-open-data-context.html">开放数据域</a>。</td><td style="text-align:left;"><code>buildOpenDataContextTemplate</code></td></tr><tr><td style="text-align:left;">分离引擎</td><td style="text-align:left;">是否使用微信小游戏引擎插件，详情请参考 <a href="./wechatgame-plugin.html">启用微信小游戏引擎插件</a>。</td><td style="text-align:left;"><code>separateEngine</code></td></tr><tr><td style="text-align:left;">高性能模式</td><td style="text-align:left;">是否开启微信的高性能模式 <br> 请参考 <a href="https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance.html" target="_blank" rel="noreferrer">高性能模式</a> 获取更多信息</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Wasm 3D 物理系统（基于 <code>ammo.js</code>）</td><td style="text-align:left;">用于选择是否启用 Wasm，默认为开启，使用 <strong>bullet（ammo.js）</strong> 物理时生效。详情请参考下文 <strong>WebAssembly 支持</strong> 部分的内容。</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">是否开启 WebGL2（实验性功能）</td><td style="text-align:left;">为了未来允许在微信小游戏上开启 WebGL 2.0，我们在 v3.4.1 新增了该项，支持跟随项目设置中的配置启用 WebGL 2.0。该项默认为 <strong>强制关闭</strong>，以缩减包体。<br>若该项设置为 <strong>与项目设置一致</strong>，且 <strong>项目设置 -&gt; 功能裁剪</strong> 中勾选了 <strong>WebGL 2.0</strong>，那么未来若微信环境支持 WebGL 2.0，即可成功启用。</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="微信小游戏的资源管理" tabindex="-1">微信小游戏的资源管理 <a class="header-anchor" href="#微信小游戏的资源管理" aria-label="Permalink to &quot;微信小游戏的资源管理&quot;">​</a></h2><p>在微信小游戏环境中，资源管理是最特殊的部分，它和浏览器的不同包括以下几点：</p><ul><li>小游戏的主包体积不能超过 4MB，包含所有代码和资源，额外的资源必须通过网络请求下载。<br>当包体过大时，可在 <strong>构建发布</strong> 面板配置 <strong>资源服务器地址</strong> 选项，将资源上传到远程服务器，详情请参考 <a href="./../../asset/cache-manager.html">上传资源到远程服务器</a>。</li><li>对于小游戏包内资源，小游戏环境内并不是按需加载的，而是一次性加载所有包内资源，然后再启动页面。</li><li>不可以从远程服务器下载脚本文件。</li></ul><p>这里引出了两个关键的问题：</p><ol><li><p>远程资源的下载、缓存及版本管理，这部分内容 Creator 已经帮开发者做好了，详情请参考 <a href="./../../asset/cache-manager.html">缓存管理器</a>。</p></li><li><p>首场景的加载速度。当主包资源放到远程服务器上时，如果要提高初始场景的加载速度，可以在构建时勾选 <strong>构建发布</strong> 面板中的 <strong>初始场景分包</strong> 选项。<br> 构建完成后，初始场景及其相关的依赖资源会被构建到发布包目录下的 <code>assets/start-scene</code> bundle 中。这个 bundle 不会放到远程服务器上，而是放在本地，引擎在启动阶段时就会自动从本地包内加载这个 bundle，从而加快初始场景的加载速度。</p></li></ol><h2 id="分包加载" tabindex="-1">分包加载 <a class="header-anchor" href="#分包加载" aria-label="Permalink to &quot;分包加载&quot;">​</a></h2><p>微信小游戏的分包加载请参考 <a href="./subpackage.html">小游戏分包</a></p><h2 id="平台-sdk-接入" tabindex="-1">平台 SDK 接入 <a class="header-anchor" href="#平台-sdk-接入" aria-label="Permalink to &quot;平台 SDK 接入&quot;">​</a></h2><p>除了纯游戏内容以外，其实微信小游戏环境还提供了非常强大的原生 SDK 接口，其中最重要的就是用户、社交、支付等，这些接口都是仅存在于微信小游戏环境中的，等同于其他平台的第三方 SDK 接口。这类 SDK 接口的移植工作在现阶段还是需要开发者自己处理。下面列举一些微信小游戏所提供的强大 SDK 能力：</p><ol><li>用户接口：登陆，授权，用户信息等</li><li>微信支付</li><li>转发以及获得转发信息</li><li>文件上传下载</li><li>媒体：图片、录音、相机等</li><li>其他：位置、设备信息、扫码、NFC、等等</li></ol><h2 id="webassembly-支持" tabindex="-1">WebAssembly 支持 <a class="header-anchor" href="#webassembly-支持" aria-label="Permalink to &quot;WebAssembly 支持&quot;">​</a></h2><blockquote><p><strong>注意</strong>：该部分内容在 v3.3.1 有较大的改动，v3.3.0 的内容请在页面右上角切换旧版本文档（例如 v3.2）查看。</p></blockquote><p>从 Cocos Creator 3.0 开始，微信小游戏的构建选项中新增了 <strong>Wasm 3D 物理系统（基于 <code>ammo.js</code>）</strong>，当编辑器主菜单的 <strong>项目 -&gt; 项目设置 -&gt; 功能裁剪 -&gt; 3D -&gt; 物理系统</strong> 设置为 <strong>bullet（ammo.js）</strong> 时生效。</p><p><strong>Wasm 3D 物理系统</strong> 默认开启，构建时会自动打包 <code>wasm</code> 模式的代码。若不开启则使用 <code>js</code> 模式。</p><blockquote><p><strong>注意</strong>：</p><ol><li>微信小游戏引擎插件目前仅支持 <code>js</code> 模式。</li><li>微信 WebAssembly 要求微信版本为 v7.0.17 及以上。</li><li>微信 WebAssembly 要求微信开发者工具的调试基础库为 v2.12.0 及以上。</li></ol></blockquote><h2 id="微信小游戏的限制" tabindex="-1">微信小游戏的限制 <a class="header-anchor" href="#微信小游戏的限制" aria-label="Permalink to &quot;微信小游戏的限制&quot;">​</a></h2><p>微信小游戏不支持 WebView。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://developers.weixin.qq.com/minigame/dev/guide/" target="_blank" rel="noreferrer">微信小游戏开发文档</a></li><li><a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">微信公众平台</a></li><li><a href="https://developers.weixin.qq.com/minigame/dev/api/" target="_blank" rel="noreferrer">小游戏 API 文档</a></li><li><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noreferrer">微信开发者工具下载</a></li><li><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html" target="_blank" rel="noreferrer">微信开发者工具文档</a></li></ul>',30),p=[g];function h(m,b,f,u,x,q){return e(),a("div",null,p)}const k=t(c,[["render",h]]);export{_ as __pageData,k as default};
