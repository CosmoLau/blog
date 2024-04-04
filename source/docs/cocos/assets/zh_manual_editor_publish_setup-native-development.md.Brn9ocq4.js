import{_ as o,c as e,o as r,a5 as a}from"./chunks/framework.CqnjdYks.js";const t="/docs/cocos/assets/sdk-manager.DeX7_nXy.png",d="/docs/cocos/assets/sdk.BqDQmwpx.png",A=JSON.parse('{"title":"安装配置原生开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/publish/setup-native-development.md","filePath":"zh/manual/editor/publish/setup-native-development.md"}'),n={name:"zh/manual/editor/publish/setup-native-development.md"},s=a('<h1 id="安装配置原生开发环境" tabindex="-1">安装配置原生开发环境 <a class="header-anchor" href="#安装配置原生开发环境" aria-label="Permalink to &quot;安装配置原生开发环境&quot;">​</a></h1><p>Cocos Creator 可以跨平台发布多个平台的原生应用，在使用 Cocos Creator 打包发布到原生平台之前，我们需要先配置好相关的原生开发环境。</p><h2 id="android-平台相关依赖" tabindex="-1">Android 平台相关依赖 <a class="header-anchor" href="#android-平台相关依赖" aria-label="Permalink to &quot;Android 平台相关依赖&quot;">​</a></h2><p>要发布到 Android 平台，需要安装以下全部开发环境依赖。如果不需要发布到 Android 平台或者操作系统上已经有完整的 Android 开发环境，可以跳过这部分内容。</p><h3 id="下载-java-sdk-jdk" tabindex="-1">下载 Java SDK（JDK） <a class="header-anchor" href="#下载-java-sdk-jdk" aria-label="Permalink to &quot;下载 Java SDK（JDK）&quot;">​</a></h3><p>编译 Android 工程需要本地电脑上有完整的 Java SDK 工具，请到以下地址下载：</p><p><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank" rel="noreferrer">Java SE Development Kit 8 Downloads</a></p><p>下载时注意选择和本机匹配的操作系统和架构，下载完成后运行安装程序即可。</p><p>安装后请检查 JAVA 环境，在 Mac 终端或者 Windows 命令行工具中输入下面代码来查看：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>java -version</span></span></code></pre></div><p>显示为 JAVA SE 则没有问题，如果系统中使用的是 JRE，则需要安装 <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="noreferrer">JAVA SE 运行环境</a>。</p><p>如果是 Windows 系统，请确认你的环境变量中包含 <code>JAVA_HOME</code>。可以通过右键点击我的电脑，选择属性，打开高级选项卡中来查看和修改环境变量。修改完成后 Windows 平台可能需要重启电脑才会生效。参考 <a href="https://www.java.com/zh_CN/download/help/path.xml" target="_blank" rel="noreferrer">如何设置或更改 JAVA 系统环境变量</a></p><h3 id="下载安装-android-studio" tabindex="-1">下载安装 Android Studio <a class="header-anchor" href="#下载安装-android-studio" aria-label="Permalink to &quot;下载安装 Android Studio&quot;">​</a></h3><p>Cocos Creator 不支持 Eclipse 的 ANT 构建，需要使用 <strong>Android Studio 4.1 及以上版本</strong> 作为安卓平台的构建工具，并在 Android Studio 中下载所需的 SDK 和 NDK 包。首先请 <a href="https://developer.android.google.cn/studio#downloads" target="_blank" rel="noreferrer">安装 Android Studio</a>。</p><h3 id="下载发布-android-平台所需的-sdk-和-ndk" tabindex="-1">下载发布 Android 平台所需的 SDK 和 NDK <a class="header-anchor" href="#下载发布-android-平台所需的-sdk-和-ndk" aria-label="Permalink to &quot;下载发布 Android 平台所需的 SDK 和 NDK&quot;">​</a></h3><p>安装 Android Studio 完成后，参考官方文档，打开 SDK Manager：<a href="https://developer.android.google.cn/studio/intro/update.html#sdk-manager" target="_blank" rel="noreferrer">SDK Manager 使用说明</a>。</p><ol><li>在 SDK Platforms 分页栏，勾选你希望安装的 API Level，也就是支持安卓系统的版本，推荐选择主流 API Level 26（8.0）、API Level 28（9.0）等。</li><li>在 SDK Tools 分页栏，首先勾选右下角的 <strong>Show Package Details</strong>，显示分版本的工具选择。</li><li>在 <strong>Android SDK Build-Tools</strong> 里，选择最新的 build tools 版本。</li><li>勾选 <strong>Android SDK Platform-Tools</strong> 和 <strong>CMake</strong>，如需安装 Android 支持库，请参考 <a href="https://developer.android.google.cn/topic/libraries/support-library/setup" target="_blank" rel="noreferrer">官方文档 — 支持库设置</a>。</li><li>勾选 <strong>NDK</strong>，推荐使用版本为 <strong>r18~21</strong>。</li><li>记住窗口上方所示的 <strong>Android SDK Location</strong> 指示的目录，稍后我们需要在 Cocos Creator 编辑器中填写这个 SDK 所在位置。</li><li>点击 <strong>OK</strong>，根据提示完成安装。</li></ol><p><img src="'+t+'" alt="sdk manager"></p><h2 id="安装-c-编译环境" tabindex="-1">安装 C++ 编译环境 <a class="header-anchor" href="#安装-c-编译环境" aria-label="Permalink to &quot;安装 C++ 编译环境&quot;">​</a></h2><p>请安装以下运行环境：</p><ul><li><p>Windows 下需要安装 <a href="https://www.visualstudio.com/downloads/download-visual-studio-vs" target="_blank" rel="noreferrer">Visual Studio 2017/2019 社区版</a>。在安装 Visual Studio 时，请勾选 <strong>使用 C++ 的桌面开发</strong> 和 <strong>使用 C++ 的游戏开发</strong> 两个模块。</p><blockquote><p><strong>注意</strong>：在 <strong>使用 C++ 的游戏开发</strong> 模块中有一个 <strong>Cocos</strong> 选项，请勿勾选。</p></blockquote></li><li><p>Mac 下需要安装 Xcode 和命令行工具，<a href="https://developer.apple.com/xcode/download/" target="_blank" rel="noreferrer">下载页</a>。</p><blockquote><p><strong>注意</strong>：</p><ol><li>从 <strong>v3.0.1</strong> 开始，要求使用的 Xcode 版本为 <strong>11.5</strong> 及以上。</li><li>从 <strong>v3.1</strong> 开始，要求使用的 macOS 版本为 <strong>10.14</strong> 及以上。</li></ol></blockquote></li></ul><h2 id="配置原生发布环境路径" tabindex="-1">配置原生发布环境路径 <a class="header-anchor" href="#配置原生发布环境路径" aria-label="Permalink to &quot;配置原生发布环境路径&quot;">​</a></h2><p>下载安装好开发环境依赖后，回到 Cocos Creator 中配置构建发布原生平台的环境路径。在主菜单中选择 <strong>Cocos Creator -&gt; 偏好设置</strong>，打开 <strong>偏好设置</strong> 面板，我们需要在 <strong>外部程序</strong> 栏中配置以下两个路径：</p><p><img src="'+d+'" alt="preference"></p><ul><li><p><strong>Android NDK</strong>：选择刚才在 Android Studio 中的 <code>Android SDK Location</code> 路径下的 <code>ndk-bundle</code> 文件夹（NDK 是其根目录），不需要编译 Android 平台的话这里可以跳过。</p><blockquote><p><strong>注意</strong>：新版本 Android Studio 的 NDK 可下载多版本，之前的 <code>ndk-bundle</code> 文件名更改为 <code>ndk</code>，可在 <code>ndk</code> 目录下根据需要选择具体版本的 NDK。</p></blockquote></li><li><p><strong>Android SDK</strong>：选择刚才在 Android Studio 的 SDK Manager 中记下的 <code>Android SDK Location</code> 路径（Android SDK 的目录下应该包含 <code>build-tools</code>、<code>platforms</code> 等文件夹），不需要编译 Android 平台的话这里可以跳过。</p></li></ul><p>配置完成后会自动保存。</p><blockquote><p><strong>注意</strong>：这里的配置会在编译 <strong>原生工程</strong> 的时候生效。如果没有生效（一些 Mac 机器有可能出现这个情况），可能需要您尝试到 <strong>系统环境变量</strong> 设置这些值：<code>NDK_ROOT</code>、<code>ANDROID_SDK_ROOT</code>。</p></blockquote><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>在之前的版本中收到了很多原生打包的问题反馈，这里补充一些可能的问题原因。</p><ol><li><p>包名问题</p><p>检查 <strong>构建发布</strong> 面板中的包名，具体命名规范请参考相应原生平台中的 <a href="./native-options.html#构建选项">构建选项说明</a>。</p></li><li><p>Android 编译成功，但运行时提示 <code>dlopen failed: cannot locate symbol &quot;xxxx&quot; referenced by &quot;libcocos2djs.so&quot;...</code></p><p>请检查 NDK 和 Android SDK 的架构和版本是否和测试用的 Android 系统相对应，另外可以尝试使用本文所用的 NDK 和 Android SDK 版本来测试。</p></li></ol><p>最后，如果依然打包失败，请附上详细的复现步骤及报错信息通过 <a href="https://forum.cocos.org/c/58" target="_blank" rel="noreferrer">论坛</a> 反馈给我们。</p>',31),i=[s];function l(c,p,g,h,u,k){return r(),e("div",null,i)}const b=o(n,[["render",l]]);export{A as __pageData,b as default};
