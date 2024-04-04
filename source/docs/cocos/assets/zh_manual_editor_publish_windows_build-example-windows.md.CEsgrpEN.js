import{_ as s,c as a,o as i,a5 as o}from"./chunks/framework.CqnjdYks.js";const e="/docs/cocos/assets/project-build-menu.4g6t1_w4.png",t="/docs/cocos/assets/build-panel-windows.Do1Ml77I.png",n="/docs/cocos/assets/build-open-path-windows.BHvOSR80.png",l="/docs/cocos/assets/project-folder-windows.BRCMJqFx.png",d="/docs/cocos/assets/vs-showcase-windows.BBB1Ei0y.png",r="/docs/cocos/assets/run-windows.D1EzLDVR.png",p="/docs/cocos/assets/run-windows-800to400.DEZKiHfC.png",q=JSON.parse('{"title":"Windows 构建示例","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/publish/windows/build-example-windows.md","filePath":"zh/manual/editor/publish/windows/build-example-windows.md"}'),h={name:"zh/manual/editor/publish/windows/build-example-windows.md"},c=o('<h1 id="windows-构建示例" tabindex="-1">Windows 构建示例 <a class="header-anchor" href="#windows-构建示例" aria-label="Permalink to &quot;Windows 构建示例&quot;">​</a></h1><p>本文将演示将 Cocos Creator 开发的项目发布为 Windows 应用程序，需要以下准备工作：</p><ul><li>一台 Windows 电脑</li><li>C++ 开发环境</li></ul><h2 id="安装-c-编译环境" tabindex="-1">安装 C++ 编译环境 <a class="header-anchor" href="#安装-c-编译环境" aria-label="Permalink to &quot;安装 C++ 编译环境&quot;">​</a></h2><p>Windows 下需要安装 <a href="https://www.visualstudio.com/downloads/download-visual-studio-vs" target="_blank" rel="noreferrer">Visual Studio 2017/2019 社区版</a>。</p><p>在安装 Visual Studio 时，请勾选 <strong>使用 C++ 的桌面开发</strong> 和 <strong>使用 C++ 的游戏开发</strong> 两个模块。</p><blockquote><p><strong>注意</strong>：在 <strong>使用 C++ 的游戏开发</strong> 模块中有一个 <strong>Cocos</strong> 选项，请勿勾选。</p></blockquote><h2 id="发布流程" tabindex="-1">发布流程 <a class="header-anchor" href="#发布流程" aria-label="Permalink to &quot;发布流程&quot;">​</a></h2><h3 id="准备测试项目" tabindex="-1">准备测试项目 <a class="header-anchor" href="#准备测试项目" aria-label="Permalink to &quot;准备测试项目&quot;">​</a></h3><p>打开一个已有的项目，或者新建一个测试项目</p><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h3><p><img src="'+e+'" alt="project-build-menu"></p><p>如上图所示，在 Cocos Creator 顶部菜单中选择 <strong>项目(Project)</strong> -&gt; <strong>构建发布(Build)</strong>，可打开下面的构建面板。</p><p><img src="'+t+'" alt="build-panel-windows"></p><h4 id="配置通用选项" tabindex="-1">配置通用选项 <a class="header-anchor" href="#配置通用选项" aria-label="Permalink to &quot;配置通用选项&quot;">​</a></h4><p>上图中，左边部分为 Cocos Creator 支持的所有平台都需要配置的公共参数，可以前往 <a href="./../build-options.html">通用发布配置</a> 查看详情。</p><h4 id="配置-windows-专有选项" tabindex="-1">配置 Windows 专有选项 <a class="header-anchor" href="#配置-windows-专有选项" aria-label="Permalink to &quot;配置 Windows 专有选项&quot;">​</a></h4><p>平台（Platform）选择为 <strong>Windows</strong>，面板向下滑动，可以看到如右图所示的原生（Native）平台和 Windows 平台特有的配置，详情请查看 <a href="./../native-options.html">原生平台通用构建选项</a> 和 <a href="./build-options-windows.html">Windows 发布选项</a>。</p><h4 id="执行构建" tabindex="-1">执行构建 <a class="header-anchor" href="#执行构建" aria-label="Permalink to &quot;执行构建&quot;">​</a></h4><p>配置完成后，点击 <strong>构建（Build）</strong> 按钮，即可生成 Visual Studio 的 <code>*.sln</code> 项目。</p><p>构建成功后，可以点击如下所示的打开文件按钮，打开生成的项目路径。</p><p><img src="'+n+'" alt="build-open-path-windows"></p><p>如果未更改过生成路径，可在同目录下找到 build/windows/proj 目录，内容如下所示：</p><p><img src="'+l+'" alt="project-folder-windows"></p><h3 id="在-visual-studio-中编译运行" tabindex="-1">在 Visual Studio 中编译运行 <a class="header-anchor" href="#在-visual-studio-中编译运行" aria-label="Permalink to &quot;在 Visual Studio 中编译运行&quot;">​</a></h3><p>双击 <code>build/windows/proj/项目名称.sln</code>，即可用 <code>Visual Studio</code> 打开项目。</p><p><img src="'+d+'" alt="vs-showcase-windows"></p><p>选择如图所示的 项目中包含了 <code>cocos-engine</code> 库以及项目代码，点击编译并运行按钮，即可启动项目。</p><p><img src="'+r+`" alt="run-windows"></p><blockquote><p><code>*.sln</code> 为 <code>Visual Studio</code> 项目解决方案文件，推荐使用 <code>Visual Studio</code> 打开。也可以使用 <a href="https://www.jetbrains.com/rider/" target="_blank" rel="noreferrer">Rider</a> 等支持 <code>*.sln</code> 的 IDE 打开。</p></blockquote><h3 id="修改分辨率" tabindex="-1">修改分辨率 <a class="header-anchor" href="#修改分辨率" aria-label="Permalink to &quot;修改分辨率&quot;">​</a></h3><p>可以通过 <code>native/engine/common/classes/Game.cpp</code> 中的 <code>_windowInfo</code> 进行修改：</p><p>默认分辨率为 800 x 600，我们以把分辨率改为 800 x 400 为例。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Game</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  _windowInfo.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GAME_NAME;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // configure window size</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  _windowInfo.width  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  _windowInfo.height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>修改完成后，在 Visual Studio 中再次编译运行，效果如下图所示：</p><p><img src="`+p+'" alt="run-windows-800to400"></p><h2 id="进阶" tabindex="-1">进阶 <a class="header-anchor" href="#进阶" aria-label="Permalink to &quot;进阶&quot;">​</a></h2><h3 id="脚本与原生通信" tabindex="-1">脚本与原生通信 <a class="header-anchor" href="#脚本与原生通信" aria-label="Permalink to &quot;脚本与原生通信&quot;">​</a></h3><p>有时候，项目需要调用一些 Windows 的系统功能，或者当集成了某个第三方的 SDK 库后，调要通过脚本代码调用其 API，此时就需要用到脚本层与原生层的通信机制。</p><p>JS 脚本与 C++ 通信机制请参考：<a href="./../../../advanced-topics/JSB2.0-learning.html">JSB 使用指南</a>。</p><h3 id="在原生环境调试代码" tabindex="-1">在原生环境调试代码 <a class="header-anchor" href="#在原生环境调试代码" aria-label="Permalink to &quot;在原生环境调试代码&quot;">​</a></h3><p>有一些问题，只有在特定设备上才会出现，如果能够在对应设备上调试代码，就能快速定位问题，找到解决方案。</p><p>Cocos Creator 提供了原生调试机制，可以很方便地在设备上调试游戏代码，请参考：<a href="./../debug-jsb.html">原生平台 JavaScript 调试</a>。</p>',43),u=[c];function w(k,g,m,b,_,E){return i(),a("div",null,u)}const C=s(h,[["render",w]]);export{q as __pageData,C as default};
