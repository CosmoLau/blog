import{_ as t,c as e,o,a4 as a}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/appid.B0qtp2_j.png",l="/docs/cocos/assets/build.DkCxZoVt.png",s="/docs/cocos/assets/build-options.DgrLzqCn.png",n="/docs/cocos/assets/package.BmisIoQt.png",d="/docs/cocos/assets/tool.CbYI198-.png",i="/docs/cocos/assets/performance.CFSrnpLo.png",c="/docs/cocos/assets/physx-options.CVXCGkgE.png",k=JSON.parse('{"title":"发布到抖音小游戏","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/publish/publish-bytedance-mini-game.md","filePath":"zh/editor/publish/publish-bytedance-mini-game.md","lastUpdated":1712305443000}'),p={name:"zh/editor/publish/publish-bytedance-mini-game.md"},g=a('<h1 id="发布到抖音小游戏" tabindex="-1">发布到抖音小游戏 <a class="header-anchor" href="#发布到抖音小游戏" aria-label="Permalink to &quot;发布到抖音小游戏&quot;">​</a></h1><p>抖音小游戏是基于一种不需要用户下载，点开即玩的全新游戏类型。</p><p>小游戏的游戏提交，审核和发布流程等，需要遵守字节官方团队的要求和标准流程，具体信息可以参考 <a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/guide/minigame/introduction" target="_blank" rel="noreferrer">抖音小游戏接入指南</a>。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ol><li><p>下载 <a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/developer-instrument/developer-instrument-update-and-download" target="_blank" rel="noreferrer">抖音开发者工具</a> 并安装。</p></li><li><p>参考 <a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/guide/minigame/introduction" target="_blank" rel="noreferrer">抖音小游戏接入指南</a>，在 <a href="https://microapp.bytedance.com" target="_blank" rel="noreferrer">抖音开发者平台</a> 完成账号注册、登录以及申请小游戏。</p></li><li><p>小游戏申请通过后，在开发者平台的 <strong>开发管理 -&gt; 开发设置</strong> 中找到 <strong>AppID</strong>。</p><p><img src="'+r+'" alt="appid"></p></li></ol><h2 id="发布流程" tabindex="-1">发布流程 <a class="header-anchor" href="#发布流程" aria-label="Permalink to &quot;发布流程&quot;">​</a></h2><ol><li><p>使用 Cocos Creator 打开需要发布的项目工程，从 <strong>菜单栏 -&gt; 项目</strong> 中打开 <strong>构建发布</strong> 面板。在 <strong>构建发布</strong> 面板的 <strong>发布平台</strong> 中选择 <strong>抖音小游戏</strong>。</p><p><img src="'+l+'" alt="build"></p><p>通用构建选项的设置请参考 <a href="./build-options">通用构建选项</a>，抖音小游戏特有的构建选项如下，具体说明请参考下文 <strong>构建选项</strong> 部分的内容。</p><p><img src="'+s+'" alt="bytedance-options"></p></li><li><p><strong>构建发布</strong> 面板的构建选项设置完成后，点击 <strong>构建</strong>。<br> 构建完成后点击 <strong>构建任务</strong> 左下角的文件夹图标按钮打开项目发布包，可以看到在默认发布路径 <code>build</code> 目录下生成了 <code>bytedance-mini-game</code>（以具体的构建任务名为准）文件夹，其中已经包含了抖音小游戏环境的配置文件 <code>game.json</code> 和 <code>project.config.json</code>。</p><p><img src="'+n+'" alt="package"></p></li><li><p>使用 <strong>抖音开发者工具</strong> 打开构建生成的 <code>bytedance-mini-game</code> 文件夹，即可打开抖音小游戏项目及预览调试游戏内容。开发者工具的具体使用方式请参考 <a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/developer-instrument/development-assistance/mini-app-developer-instrument" target="_blank" rel="noreferrer">抖音开发者工具介绍</a>。</p><p><img src="'+d+'" alt="tool"></p></li></ol><h3 id="构建选项" tabindex="-1">构建选项 <a class="header-anchor" href="#构建选项" aria-label="Permalink to &quot;构建选项&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">初始场景分包</td><td style="text-align:left;">勾选后，首场景及其相关的依赖资源会被构建到发布包目录 <code>assets</code> 下的内置 Asset Bundle — <a href="./../../asset/bundle#内置-asset-bundle">start-scene</a> 中，提高初始场景的资源加载速度。</td><td style="text-align:left;"><code>startSceneAssetBundle</code></td></tr><tr><td style="text-align:left;">设备方向</td><td style="text-align:left;">可选值包括 <strong>Portrait</strong> 和 <strong>Landscape</strong>。构建时会写入到发布包目录下的 <code>game.json</code> 文件中。</td><td style="text-align:left;"><code>orientation</code></td></tr><tr><td style="text-align:left;">AppID</td><td style="text-align:left;">必填项，抖音小游戏的 AppID，构建时会写入到发布包目录下的 <code>project.config.json</code> 文件中。</td><td style="text-align:left;"><code>appid</code></td></tr><tr><td style="text-align:left;">资源服务器地址</td><td style="text-align:left;">用于填写资源存放在远程服务器上的地址。开发者需要在构建后手动将发布包目录下的 <code>remote</code> 文件夹上传到所填写的资源服务器地址上。详情请参考 <a href="./../../asset/cache-manager">上传资源到远程服务器</a></td><td style="text-align:left;"><code>remoteServerAddress</code></td></tr><tr><td style="text-align:left;">生成开放数据域工程模板</td><td style="text-align:left;">用于接入开放数据域，详情请参考 <a href="./build-open-data-context">开放数据域</a>。</td><td style="text-align:left;"><code>buildOpenDataContextTemplate</code></td></tr><tr><td style="text-align:left;">原生 PhysX 物理系统</td><td style="text-align:left;">该项用于设置是否使用 PhysX 物理系统，具体说明请查看下文 <strong>原生物理</strong> 部分的内容。</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="原生物理" tabindex="-1">原生物理 <a class="header-anchor" href="#原生物理" aria-label="Permalink to &quot;原生物理&quot;">​</a></h2><p>抖音平台一直致力于为开发者提供更强大的性能和基础能力，抖音将在 v16.3 及之后的版本为小游戏提供 PhysX 原生物理接口。而 Cocos Creator 与抖音平台进行了深度合作，在 <strong>v3.2</strong> 中以实验性功能支持在抖音小游戏中使用平台提供的 PhysX 物理能力，优化物理运算性能，对比使用 Bullet 物理有近 100% 的性能提升：</p><p><img src="'+i+'" alt="compare performance"></p><p>使用原生物理的前提是需要在主菜单栏的 <strong>项目 -&gt; 项目设置 -&gt; 功能裁剪</strong> 中将 <strong>物理系统</strong> 设置为 <strong>PhysX 物理系统</strong>。然后打开 <strong>构建发布</strong> 面板，<strong>发布平台</strong> 选择 <strong>抖音小游戏</strong>，可以看到原生物理相关的配置选项如下：</p><p><img src="'+c+'" alt="PhysX options"></p><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">不打包内置的 PhysX 库</td><td style="text-align:left;">若勾选该项，则构建时不会打包内置的 PhysX 库文件，有助于减小包体，但 PhysX 便无法在部分字节跳动的应用平台运行，例如抖音（iOS 版本）及开发者工具。<br>若不勾选该项，则 Creator 支持 PhysX 运行在字节跳动的全应用平台。</td><td style="text-align:left;"><code>physX.notPackPhysXLibs</code></td></tr><tr><td style="text-align:left;">开启多线程模式</td><td style="text-align:left;">若勾选该项，则启用多线程模式。</td><td style="text-align:left;"><code>physX.multiThread</code></td></tr><tr><td style="text-align:left;">子线程的个数</td><td style="text-align:left;">启用多线程模式时子线程的个数。</td><td style="text-align:left;"><code>physX.subThreadCount</code></td></tr><tr><td style="text-align:left;">容忍误差</td><td style="text-align:left;">若勾选该项，则使用多线程模式时的精度会比单线程的低。</td><td style="text-align:left;"><code>physX.epsilon</code></td></tr></tbody></table><h2 id="分包加载" tabindex="-1">分包加载 <a class="header-anchor" href="#分包加载" aria-label="Permalink to &quot;分包加载&quot;">​</a></h2><p>分包加载，即把游戏内容按一定规则拆分在几个包里，在首次启动的时候只下载必要的包，这个必要的包称为 <strong>主包</strong>，开发者可以在主包内触发下载其他子包，这样可以有效降低首次启动的消耗时间。若要使用该功能需要在 Creator 中设置 <a href="./subpackage">小游戏分包</a>，设置完成后在构建时就会自动分包。</p><p>抖音小游戏需要特定的版本才能支持分包功能，字节产品的版本要求如下：</p><table><thead><tr><th style="text-align:left;">产品</th><th style="text-align:left;">Android</th><th style="text-align:left;">iOS</th></tr></thead><tbody><tr><td style="text-align:left;">抖音</td><td style="text-align:left;">v13.6.0</td><td style="text-align:left;">v13.7.0</td></tr><tr><td style="text-align:left;">头条</td><td style="text-align:left;">v7.9.9</td><td style="text-align:left;">v7.9.8</td></tr></tbody></table><p>抖音开发者工具使用的版本请大于等于 <strong>2.0.6</strong>，小于 <strong>3.0.0</strong>。调试基础库则要求在 1.88.0 及以上。</p><blockquote><p><strong>注意</strong>：若产品的版本不支持分包加载，则引擎会将分包作为一个普通的 Asset Bundle 加载。</p></blockquote><h3 id="普通小游戏包" tabindex="-1">普通小游戏包 <a class="header-anchor" href="#普通小游戏包" aria-label="Permalink to &quot;普通小游戏包&quot;">​</a></h3><p>未配置分包的场景下，每个小游戏允许上传的代码包总大小上限为 20MB</p><h3 id="分包后小游戏包" tabindex="-1">分包后小游戏包 <a class="header-anchor" href="#分包后小游戏包" aria-label="Permalink to &quot;分包后小游戏包&quot;">​</a></h3><p>对于配置了分包的小游戏，默认限制为：</p><ul><li>小游戏整体包（小游戏包整个目录）大小不超过 20MB</li><li>单个主包不超过 4MB</li><li>单个分包大小不超过 20MB</li></ul><p>具体可参考 <a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/framework/subpackages/introduction/" target="_blank" rel="noreferrer">抖音小游戏分包加载官方文档</a></p><h2 id="小游戏环境的资源管理" tabindex="-1">小游戏环境的资源管理 <a class="header-anchor" href="#小游戏环境的资源管理" aria-label="Permalink to &quot;小游戏环境的资源管理&quot;">​</a></h2><p>抖音小游戏与微信小游戏类似，都存在着主包包体限制，超过 4MB 的额外资源，必须通过网络请求下载。<br>当包体过大时，可在 <strong>构建发布</strong> 面板配置 <strong>资源服务器地址</strong> 选项，将资源上传到远程服务器，详情请参考 <a href="./../../asset/cache-manager">上传资源到远程服务器</a>。</p><p>我们建议用户只保存脚本文件在小游戏包内，其他资源都从远程服务器下载。Cocos Creator 已经帮用户做好了远程资源的下载、缓存和版本管理，详情可参考 <a href="./../../asset/cache-manager">缓存管理器</a>。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/guide/minigame/introduction/" target="_blank" rel="noreferrer">抖音小游戏开发接入指南</a></li><li><a href="https://microapp.bytedance.com/" target="_blank" rel="noreferrer">抖音开发者平台</a></li><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/api/mini-game/bytedance-mini-game" target="_blank" rel="noreferrer">抖音小游戏 API 文档</a></li><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/developer-instrument/developer-instrument-update-and-download" target="_blank" rel="noreferrer">抖音开发者工具下载</a></li><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/developer-instrument/development-assistance/developer-instrument-introduction" target="_blank" rel="noreferrer">抖音开发者工具文档</a></li></ul>',32),h=[g];function m(f,u,y,b,x,_){return o(),e("div",null,h)}const P=t(p,[["render",m]]);export{k as __pageData,P as default};
