import{_ as t,c as e,o,a5 as l}from"./chunks/framework.CqnjdYks.js";const s="/docs/cocos/assets/web.DqHL5Jwa.png",r="/docs/cocos/assets/preview-url.BTJCLhMc.png",a="/docs/cocos/assets/web-mobile.B_do3Ykh.png",n="/docs/cocos/assets/web-folder.DOz0XJjH.png",y=JSON.parse('{"title":"发布到 Web 平台","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/publish/publish-web.md","filePath":"zh/manual/editor/publish/publish-web.md"}'),i={name:"zh/manual/editor/publish/publish-web.md"},d=l('<h1 id="发布到-web-平台" tabindex="-1">发布到 Web 平台 <a class="header-anchor" href="#发布到-web-平台" aria-label="Permalink to &quot;发布到 Web 平台&quot;">​</a></h1><p>打开主菜单的 <strong>项目 -&gt; 构建发布</strong>，打开 <a href="./build-panel.html">构建发布</a> 面板。</p><p><img src="'+s+'" alt="web"></p><p>Cocos Creator 提供了两种 Web 平台的页面模板，可以通过 <strong>发布平台</strong> 的下拉菜单选择 <strong>Web Mobile</strong> 或 <strong>Web Desktop</strong>，它们的区别主要在于：</p><ul><li><strong>Web Mobile</strong> 会默认将游戏视图撑满整个浏览器窗口。</li><li><strong>Web Desktop</strong> 允许在发布时指定一个游戏视图的分辨率，而且之后游戏视图也不会随着浏览器窗口大小变化而变化。</li></ul><h2 id="构建选项介绍" tabindex="-1">构建选项介绍 <a class="header-anchor" href="#构建选项介绍" aria-label="Permalink to &quot;构建选项介绍&quot;">​</a></h2><p>各平台通用的构建选项，详情请参考 <a href="./build-options.html">通用构建参数介绍</a>。接下来我们来看一下 Web 平台特有的构建选项。</p><h3 id="web-desktop" tabindex="-1">Web Desktop <a class="header-anchor" href="#web-desktop" aria-label="Permalink to &quot;Web Desktop&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">资源服务器地址</td><td style="text-align:left;">用于下载远程资源的服务器地址，详情请参考下文 <strong>资源服务器地址</strong> 部分的内容。</td><td style="text-align:left;"><code>remoteServerAddress</code></td></tr><tr><td style="text-align:left;">WEBGPU</td><td style="text-align:left;">是否启用WEBGPU作为渲染后端</td><td style="text-align:left;"><code>WEBGPU</code></td></tr><tr><td style="text-align:left;">预览分辨率</td><td style="text-align:left;">游戏视图分辨率，默认为 <strong>(1280, 960)</strong></td><td style="text-align:left;"><code>resolution</code></td></tr><tr><td style="text-align:left;">Polyfills</td><td style="text-align:left;">构建支持一些脚本新特性的 polyfills，在打包脚本时会做对应处理，开发者可以根据实际需求选择需要的 polyfills。暂时只支持 <strong>异步函数</strong>，后续将会开放更多功能。</td><td style="text-align:left;"><code>polyfills</code></td></tr></tbody></table><h3 id="web-mobile" tabindex="-1">Web Mobile <a class="header-anchor" href="#web-mobile" aria-label="Permalink to &quot;Web Mobile&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">资源服务器地址</td><td style="text-align:left;">用于下载远程资源的服务器地址，详情请参考下文 <strong>资源服务器地址</strong> 部分的内容。</td><td style="text-align:left;"><code>remoteServerAddress</code></td></tr><tr><td style="text-align:left;">设备方向</td><td style="text-align:left;">可选值包括 <strong>Auto</strong>、<strong>Landscape</strong>、<strong>Portrait</strong></td><td style="text-align:left;"><code>orientation</code></td></tr><tr><td style="text-align:left;">Polyfills</td><td style="text-align:left;">构建支持一些脚本新特性的 polyfills，在打包脚本时会做对应处理，目前包括 <strong>async Functions</strong> 和 <strong>coreJs</strong> 两种，开发者可以根据实际需求选择需要的 polyfills。</td><td style="text-align:left;"><code>polyfills</code></td></tr><tr><td style="text-align:left;">vConsole</td><td style="text-align:left;">插入 vConsole 调试插件，vConsole 类似 DevTools 的迷你版，用于辅助调试。</td><td style="text-align:left;"><code>embedWebDebugger</code></td></tr><tr><td style="text-align:left;">预览二维码</td><td style="text-align:left;">用于扫描预览，详情可见下方介绍</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">预览 URL</td><td style="text-align:left;">用于预览的链接，详情可见下方介绍</td><td style="text-align:left;">-</td></tr></tbody></table><ul><li><p><strong>资源服务器地址</strong></p><p>该项为可选项，用于填写资源存放在服务器上的地址。</p><ul><li>若 <strong>不填写</strong> 该项，则发布包目录下的 <code>remote</code> 文件夹会被打包到构建出来的游戏包中。</li><li>若 <strong>填写</strong> 该项，则不会打包到游戏包中，开发者需要在构建后手动将发布包目录下的 <code>remote</code> 文件夹上传到所填写的资源服务器地址上。详情请参考 <a href="./../../asset/cache-manager.html">上传资源到远程服务器</a>。</li></ul></li><li><p><strong>预览 URL</strong></p><p>构建支持同时预览多个 Web 项目，因而构建的预览 URL 不再是统一的而是每个构建任务都会有一个单独的预览 URL，互不干扰。点击 URL 即可自动打开浏览器进行预览，具体的预览 URL 拼接规则为 <strong>${偏好设置中的预览 IP 地址}😒{编辑器预览端口号}/${构建平台}/${构建任务名}/index.html</strong>。</p><p><img src="'+r+'" alt="preview-url"></p></li></ul><h2 id="构建和预览" tabindex="-1">构建和预览 <a class="header-anchor" href="#构建和预览" aria-label="Permalink to &quot;构建和预览&quot;">​</a></h2><p>配置好构建选项后，点击 <strong>构建</strong> 按钮，开始 Web 平台版本构建。面板上会出现一个进度条，当进度条显示“Build success”时，构建就完成了。</p><p>接下来可以点击 <strong>运行</strong> 按钮，在浏览器中打开构建后的游戏版本进行预览和调试。</p><p><img src="'+a+'" alt="web mobile"></p><p>上图所示就是 Web Mobile 平台的预览，可以看到游戏视图占满了整个浏览器窗口，而 Web Desktop 的游戏视图则是固定分辨率的，不会撑满屏幕。</p><h3 id="开启-webgpu" tabindex="-1">开启 WebGPU <a class="header-anchor" href="#开启-webgpu" aria-label="Permalink to &quot;开启 WebGPU&quot;">​</a></h3><p>Cocos Creator 自 v3.6.2 起开始支持 WebGPU, 构建 Web-Desktop 的时候勾选 <code>WEBGPU</code> 即可。 构建 <code>WebGPU</code> 之后，先定位到构建好的资源文件所在文件夹，可以点击构建面板上的文件夹按钮直达，需要一个 http-server 或者 nginx 服务器来访问。 在此之前请先检查浏览器的兼容性，下章 <strong>浏览器兼容性</strong> 会有详细介绍。</p><h3 id="浏览器兼容性" tabindex="-1">浏览器兼容性 <a class="header-anchor" href="#浏览器兼容性" aria-label="Permalink to &quot;浏览器兼容性&quot;">​</a></h3><p>Cocos Creator 开发过程中测试的桌面浏览器包括：<strong>Chrome</strong>、<strong>Firefox（火狐）</strong> 和 <strong>QQ 浏览器</strong>，其他浏览器只要内核版本够高也可以正常使用，对部分浏览器来说请勿开启 IE 兼容模式。</p><p>移动设备上测试的浏览器包括：<strong>Safari（iOS）</strong>、<strong>Chrome（Android）</strong>、<strong>QQ 浏览器（Android）</strong> 和 <strong>UC 浏览器（Android）</strong>。</p><p>对于开启了 <code>WebGPU</code> 的 WebDesktop，现在只支持指定版本的 chromium 浏览器。<a href="https://vikyd.github.io/download-chromium-history-version/#/" target="_blank" rel="noreferrer">这里</a> 有历史版本的 chromium。chromium 105 的最后一个版本是支持比较好的。下载浏览器之前不要忘记选择正确的平台。打开 chromium，地址栏输入 <code>chrome://flags</code>，搜索 webgpu，开启 <code>WebGPU Developer Features</code> 并重启chromium，这样准备工作就完成了。</p><h2 id="retina-设置" tabindex="-1">Retina 设置 <a class="header-anchor" href="#retina-设置" aria-label="Permalink to &quot;Retina 设置&quot;">​</a></h2><p>可以在脚本中通过 <code>view.enableRetina(true)</code> 设置是否使用高分辨率，构建到 Web 平台时默认会开启 Retina 显示。详情可参考 API <a href="./__APIDOC__/zh/class/View.html?id=enableRetina">enableRetina</a>。</p><h2 id="发布到-web-服务器" tabindex="-1">发布到 Web 服务器 <a class="header-anchor" href="#发布到-web-服务器" aria-label="Permalink to &quot;发布到 Web 服务器&quot;">​</a></h2><p>如果要在互联网上发布或分享游戏，只要点击 <strong>构建任务</strong> 左下方的 <strong>文件夹图标</strong> 按钮，打开发布路径之后，按照当前构建任务名称，将构建出的对应文件夹里的内容整个复制到 Web 服务器上，就可以通过相应的地址访问了。</p><p><img src="'+n+'" alt="web mobile"></p><p>关于 Web 服务器的架设，可以自行搜索 Apache、Nginx、IIS、Express 等相关解决方案。</p>',29),g=[d];function c(h,b,p,f,u,m){return o(),e("div",null,g)}const _=t(i,[["render",c]]);export{y as __pageData,_ as default};
