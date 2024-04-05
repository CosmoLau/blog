import{_ as t,c as s,o as e,a4 as i}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/build.BPhNccXw.png",n="/docs/cocos/assets/build-option.Cw_FTjVr.png",l="/docs/cocos/assets/package.V-K4zYgf.png",o="/docs/cocos/assets/play.cYsgjA2n.jpg",r="/docs/cocos/assets/vivo-instant_scan_install.CA18Ao_W.jpg",d="/docs/cocos/assets/vivo-instant_native_install.BGnmrF3v.jpg",F=JSON.parse('{"title":"发布到 vivo 小游戏","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/publish/publish-vivo-mini-game.md","filePath":"zh/editor/publish/publish-vivo-mini-game.md","lastUpdated":1712305443000}'),p={name:"zh/editor/publish/publish-vivo-mini-game.md"},g=i(`<h1 id="发布到-vivo-小游戏" tabindex="-1">发布到 vivo 小游戏 <a class="header-anchor" href="#发布到-vivo-小游戏" aria-label="Permalink to &quot;发布到 vivo 小游戏&quot;">​</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><ul><li><p>下载 <a href="https://minigame.vivo.com.cn/documents/#/lesson/base/environment?id=%E5%AE%89%E8%A3%85vivo%E5%B0%8F%E6%B8%B8%E6%88%8F%E8%B0%83%E8%AF%95%E5%99%A8" target="_blank" rel="noreferrer">快应用 &amp; vivo 小游戏调试器</a> 和 <a href="https://minigame.vivo.com.cn/documents/#/lesson/base/environment?id=%E5%AE%89%E8%A3%85vivo%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%BC%95%E6%93%8E" target="_blank" rel="noreferrer">vivo 小游戏引擎</a>，并安装到 Android 设备上（建议 Android Phone 6.0 或以上版本）</p></li><li><p>全局安装 <a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noreferrer">nodejs-8.9.0</a> 或以上版本</p><blockquote><p><strong>注意</strong>：安装 nodejs 后，需要注意 npm 源地址是否为 <a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前 npm 源地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若不是，重新设置 npm 源地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org/</span></span></code></pre></div></li><li><p>全局安装 <code>vivo-minigame/cli</code>。确定 npm 源地址后，安装 <code>vivo-minigame/cli</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vivo-minigame/cli</span></span></code></pre></div><p>若 <code>vivo-minigame/cli</code> 安装失败，可能是因为 nodejs 版本过低导致的，请检查 node 版本并升级。</p></li></ul><h2 id="发布流程" tabindex="-1">发布流程 <a class="header-anchor" href="#发布流程" aria-label="Permalink to &quot;发布流程&quot;">​</a></h2><p>使用 Cocos Creator 打开需要发布的项目工程，从 <strong>菜单栏 -&gt; 项目</strong> 中打开 <strong>构建发布</strong> 面板，<strong>发布平台</strong> 选择 <strong>vivo 小游戏</strong>。</p><p><img src="`+a+'" alt="build"></p><p>通用构建选项的设置请参考 <a href="./build-options">通用构建选项</a>，vivo 小游戏特有的构建选项如下：</p><p><img src="'+n+`" alt="build option"></p><table><thead><tr><th style="text-align:left;">构建选项</th><th style="text-align:left;">可选</th><th style="text-align:left;">说明</th><th style="text-align:left;">字段名（用于命令行发布）</th></tr></thead><tbody><tr><td style="text-align:left;">初始场景分包</td><td style="text-align:left;">可选项</td><td style="text-align:left;">勾选后，首场景及其相关的依赖资源会被构建到发布包目录 <code>assets</code> 下的内置 Asset Bundle — <a href="./../../asset/bundle#内置-asset-bundle">start-scene</a> 中，提高初始场景的资源加载速度。</td><td style="text-align:left;"><code>startSceneAssetBundle</code></td></tr><tr><td style="text-align:left;">资源服务器地址</td><td style="text-align:left;">可选项</td><td style="text-align:left;">该项用于填写资源存放在服务器上的地址。<br>若 <strong>不填写</strong> 该项，则发布包目录下的 <code>remote</code> 文件夹会被打包到构建出来的 rpk 包中。<br>若 <strong>填写</strong> 该项，则不会打包到 rpk 包中，开发者需要在构建后手动将发布包目录下的 <code>remote</code> 文件夹上传到所填写的资源服务器地址上。详情请参考 <a href="./../../asset/cache-manager">上传资源到远程服务器</a>。</td><td style="text-align:left;"><code>remoteServerAddress</code></td></tr><tr><td style="text-align:left;">游戏包名</td><td style="text-align:left;">必填项</td><td style="text-align:left;">游戏包名，根据开发者的需求进行填写，例如 <code>com.example.demo</code>。</td><td style="text-align:left;"><code>package</code></td></tr><tr><td style="text-align:left;">桌面图标</td><td style="text-align:left;">必填项</td><td style="text-align:left;">点击输入框后面的放大镜图标按钮选择所需的图标。构建时，图标将会被构建到 vivo 小游戏的工程中。桌面图标建议使用 <strong>png</strong> 图片。</td><td style="text-align:left;"><code>icon</code></td></tr><tr><td style="text-align:left;">游戏版本名称</td><td style="text-align:left;">必填项</td><td style="text-align:left;">游戏版本名称是真实的版本，如：1.0.0</td><td style="text-align:left;"><code>versionName</code></td></tr><tr><td style="text-align:left;">游戏版本号</td><td style="text-align:left;">必填项</td><td style="text-align:left;"><strong>游戏版本号</strong> 与 <strong>游戏版本名称</strong> 不同，<strong>游戏版本号</strong> 主要用于区别版本更新。每次提交审核时游戏版本号都要比上次提交审核的值至少 +1，一定不能等于或者小于上次提交审核的值，建议每次提交审核时游戏版本号递归 +1。<br><strong>注意</strong>：<strong>游戏版本号</strong> 必须为正整数。</td><td style="text-align:left;"><code>versionCode</code></td></tr><tr><td style="text-align:left;">支持的最小平台版本号</td><td style="text-align:left;">必填项</td><td style="text-align:left;">用于兼容性检查，避免上线后在低版本平台运行导致不兼容。具体填写的值可通过点击 <a href="https://minigame.vivo.com.cn/documents/#/download/engine?id=%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95%EF%BC%9A" target="_blank" rel="noreferrer">更新记录</a> 来查看最新的 vivo 引擎版本号。</td><td style="text-align:left;"><code>minPlatformVersion</code></td></tr><tr><td style="text-align:left;">屏幕方向</td><td style="text-align:left;">必填项</td><td style="text-align:left;">设备方向，可选值包括 <code>landscape</code> 和 <code>portrait</code>。构建时会写入到发布包目录下的 <code>manifest.json</code> 中。</td><td style="text-align:left;"><code>deviceOrientation</code></td></tr><tr><td style="text-align:left;">允许分离引擎</td><td style="text-align:left;">选填项</td><td style="text-align:left;">vivo 从平台版本号 <strong>1063</strong> 开始新增了 <strong>游戏引擎插件</strong> 功能。此插件内置了 Cocos Creator 引擎的官方版本，若玩家首次体验的游戏中启用了此插件，则所有同样启用此插件的游戏，都无需再次下载 Cocos Creator 引擎，只需直接使用公共插件库中的相同版本引擎，或者增量更新引擎即可。<br>使用时勾选 <strong>允许分离引擎</strong>，然后正常构建发布即可，无需其它人工操作。详情请参考 <a href="./wechatgame-plugin">启用微信小游戏引擎插件</a></td><td style="text-align:left;"><code>separateEngine</code></td></tr><tr><td style="text-align:left;">使用调试密钥库</td><td style="text-align:left;">-</td><td style="text-align:left;">若勾选该项，表示构建 rpk 包时默认使用的是 Creator 自带的证书，仅用于 <strong>调试</strong> 时使用。若 rpk 包要用于提交审核，则构建时不要勾选该项。<br> 若不勾选该项，则需要手动配置签名证书。</td><td style="text-align:left;"><code>useDebugKey</code></td></tr><tr><td style="text-align:left;"><strong>certificate.pem 路径</strong><br><strong>private.pem 路径</strong></td><td style="text-align:left;">-</td><td style="text-align:left;">如果不勾选 <strong>密钥库</strong>，则需要配置签名文件 <strong>certificate.pem 路径</strong> 和 <strong>private.pem 路径</strong>，此时构建后生成的是可以 <strong>直接发布</strong> 的 rpk 包。开发者可通过输入框右边的放大镜图标按钮来配置两个签名文件，或者也可以参考下方的 <strong>生成签名文件</strong>。</td><td style="text-align:left;"><code>privatePemPath</code>、<code>certificatePemPath</code></td></tr></tbody></table><ul><li><p>生成签名文件</p><p>有以下两种方式可以生成签名文件：</p><ul><li><p>通过 <strong>构建发布</strong> 面板 <strong>certificate.pem 路径</strong> 后的 <strong>新建</strong> 按钮生成</p></li><li><p>通过命令行生成 release 签名</p><p>用户需要通过 openssl 命令等工具生成签名文件 private.pem、certificate.pem。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 通过 openssl 命令工具生成签名文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa:2048</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -keyout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -days</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3650</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certificate.pem</span></span></code></pre></div><blockquote><p><strong>注意</strong>：openssl 工具在 linux 或 Mac 环境下可在终端直接打开。而在 Windows 环境下则需要安装 openssl 工具并且配置系统环境变量，配置完成后需重启 Creator。</p></blockquote></li></ul></li></ul><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h3><p><strong>构建发布</strong> 面板的构建选项设置完成后，点击 <strong>构建并生成</strong> 按钮。<br> 完成后点击 <strong>构建任务</strong> 左下角的文件夹图标按钮打开项目发布包，可以看到在默认发布路径 <code>build</code> 目录下生成了 <code>vivo-mini-game</code>（以具体的构建任务名为准）文件夹，该文件夹就是导出的 vivo 快游戏工程目录和 rpk，rpk 包在 <code>build/vivo-mini-game/dist</code> 目录下。</p><p><img src="`+l+'" alt="package"></p><p>若需要修改生成的 rpk 包，在修改完成后点击 <strong>构建任务</strong> 右下角的 <strong>生成</strong> 按钮，即可在不重新构建的情况下重新生成 rpk 包。</p><h2 id="运行-rpk" tabindex="-1">运行 rpk <a class="header-anchor" href="#运行-rpk" aria-label="Permalink to &quot;运行 rpk&quot;">​</a></h2><p>有以下三种方式可将 rpk 运行到手机上：</p><ul><li><p><strong>方法一</strong>：</p><p>在 <strong>构建发布</strong> 面板点击 <strong>运行</strong> 按钮，等待二维码界面生成</p><p><img src="'+o+'" alt="play"></p><p>然后在 Android 设备上打开之前已经安装完成的 <strong>快应用 &amp; vivo 小游戏调试器</strong>，点击 <strong>扫码安装</strong> 按钮直接扫描二维码即可打开 rpk。</p><p><img src="'+r+'" alt="vivo instant scan install"></p></li><li><p><strong>方法二</strong>：</p><p>将构建生成的小游戏 rpk 文件（位于打包出的小游戏工程目录下的 dist 目录中）拷贝到手机的内部存储目录下。</p><p>在 Android 设备上打开之前已经安装完成的 <strong>快应用 &amp; vivo 小游戏调试器</strong>，点击 <strong>本地安装</strong>，然后从手机内部存储目录中找到 rpk 文件，选择打开即可。</p><p><img src="'+d+`" alt="vivo instant native install"></p></li><li><p><strong>方法三</strong>：</p><p>利用 vivo 小游戏打包工具命令生成网址和二维码：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 先把命令行指定到编辑器安装目录下的 resources/tools/vivo-pack-tools 目录下</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${CocosCreator}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/resources/tools/vivo-pack-tools</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成网址和二维码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span></code></pre></div><p>然后在 Android 设备上打开之前已经安装完成的 <strong>快应用 &amp; vivo 小游戏调试器</strong>。</p><p>最后点击 <strong>扫码安装</strong> 按钮，将第一步中生成的网址拷贝到浏览器，然后直接扫描网页上的二维码即可打开 rpk。</p></li></ul><h2 id="分包加载" tabindex="-1">分包加载 <a class="header-anchor" href="#分包加载" aria-label="Permalink to &quot;分包加载&quot;">​</a></h2><p>vivo 小游戏的分包加载，详情请参考 <a href="./subpackage">小游戏分包</a>。</p><h2 id="vivo-小游戏环境的资源管理" tabindex="-1">vivo 小游戏环境的资源管理 <a class="header-anchor" href="#vivo-小游戏环境的资源管理" aria-label="Permalink to &quot;vivo 小游戏环境的资源管理&quot;">​</a></h2><p>vivo 小游戏与微信小游戏类似，都存在着包体限制。vivo 小游戏的主包包体限制是 <strong>4MB</strong>，超过的部分必须通过网络请求下载。<br>当包体过大时，可在 <strong>构建发布</strong> 面板配置 <strong>资源服务器地址</strong> 选项，将资源上传到远程服务器，详情请参考 <a href="./../../asset/cache-manager">上传资源到远程服务器</a>。</p><p>我们建议用户只保存脚本文件在小游戏包内，其他资源都从远程服务器下载。Cocos Creator 已经帮用户做好了远程资源的下载、缓存和版本管理，详情请参考 <a href="./../../asset/cache-manager">缓存管理器</a>。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://minigame.vivo.com.cn/documents/#/lesson/base/start" target="_blank" rel="noreferrer">vivo 小游戏开发文档</a></li><li><a href="https://minigame.vivo.com.cn/documents/#/api/system/life-cycle" target="_blank" rel="noreferrer">vivo 小游戏 API 文档</a></li><li><a href="https://minigame.vivo.com.cn/documents/#/download/debugger" target="_blank" rel="noreferrer">快应用 &amp; vivo 小游戏调试器下载</a></li></ul>`,24),h=[g];function c(k,v,m,y,f,u){return e(),s("div",null,h)}const C=t(p,[["render",c]]);export{F as __pageData,C as default};
