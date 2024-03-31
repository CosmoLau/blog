import{_ as a,v as e,b as o,R as n}from"./chunks/framework.5ffcbaff.js";const b=JSON.parse('{"title":"原生平台二次开发指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/advanced-topics/native-secondary-development.md","filePath":"zh/manual/advanced-topics/native-secondary-development.md"}'),i={name:"zh/manual/advanced-topics/native-secondary-development.md"},s=n(`<h1 id="原生平台二次开发指南" tabindex="-1">原生平台二次开发指南 <a class="header-anchor" href="#原生平台二次开发指南" aria-label="Permalink to &quot;原生平台二次开发指南&quot;">​</a></h1><p>如果你需要为增加第三方 SDK 库，或者增删 C++，OC，JAVA 代码文件，以下内容可以帮你更好地理解。</p><h2 id="原生项目目录" tabindex="-1">原生项目目录 <a class="header-anchor" href="#原生项目目录" aria-label="Permalink to &quot;原生项目目录&quot;">​</a></h2><p>当点击 <strong>构建</strong> 按钮后，会生成三个原生平台相关的文件夹。</p><h3 id="公共目录" tabindex="-1">公共目录 <a class="header-anchor" href="#公共目录" aria-label="Permalink to &quot;公共目录&quot;">​</a></h3><p>公共目录位置：<code>native/engine/common</code></p><p>此目录用于存放共公内容，如引擎库配置，以及一些所有平台都会用上的第三方库。</p><blockquote><p>这个目录下的代码多数是由 C/C++ 编写。</p></blockquote><h3 id="原生平台目录" tabindex="-1">原生平台目录 <a class="header-anchor" href="#原生平台目录" aria-label="Permalink to &quot;原生平台目录&quot;">​</a></h3><p>平台目录名字规则：native/engine/当前构建的平台名称</p><p>这个目录用于存放对应平台相关的信息，比如：</p><ul><li>native/engine/android</li><li>native/engine/ios</li><li>native/engine/win64</li><li>native/engine/mac</li></ul><blockquote><p>win64 用于 windows, 目前已不再支持 win32, 仅支持 win64 应用程序发布。</p></blockquote><h3 id="项目目录" tabindex="-1">项目目录 <a class="header-anchor" href="#项目目录" aria-label="Permalink to &quot;项目目录&quot;">​</a></h3><p>项目目录名字规则：<code>build/当前构建的平台名称</code></p><p>这个目录，包含的是最终生成的原生工程，用于编译、调试和发布。如：</p><ul><li>build/android</li><li>build/ios</li><li>build/windows</li><li>build/mac</li></ul><p>每一次构建时，引擎会将公共目录和原生平台目录，以及 Cocos Creator 项目中的资源、脚本等结合在一起，生成项目目录。</p><p>项目目录中的代码和相关配置引用原生平台目录下的文件，在 IDE 中改动对应的部分，平台目录下的文件也会做对就修改。</p><p><strong>例外</strong>：<code>native/engine/ios/info.plist</code> 与 <code>native/engine/mac/info.plist</code> 文件由于<code>CMake</code>的机制，使用的是复制方式。 如果要对 <code>info.plist</code> 进行修改，则需要注意。</p><p>项目目录包含下内容：</p><ul><li><code>assets</code>：<code>data</code> 目录的软链，用于兼容各平台</li><li><code>data</code>：Cocos Creator 项目中的资源和脚本生成的内容</li><li><code>proj</code>：存放当前构建的原生平台工程，可用于对应平台的 IDE（如 Xcode，Android Studio 等） 执行编译、调试和发布。</li><li><code>cocos.compile.config.json</code>：本次构建的采用的构建选项配置</li></ul><h2 id="原生项目定制开发" tabindex="-1">原生项目定制开发 <a class="header-anchor" href="#原生项目定制开发" aria-label="Permalink to &quot;原生项目定制开发&quot;">​</a></h2><p>因为项目需要，有时候我们需要修改、增删原生平台相关的源代码，或者引入第三方SDK，修改项目配置等。这些工作，我们称为项目定制开发。</p><p>下面我们就分类说明，不同情况下的需求，如何操作。</p><h3 id="修改引擎代码" tabindex="-1">修改引擎代码 <a class="header-anchor" href="#修改引擎代码" aria-label="Permalink to &quot;修改引擎代码&quot;">​</a></h3><p>请参考 <a href="./engine-customization.html">引擎定制工作流程</a>。</p><h3 id="修改项目代码" tabindex="-1">修改项目代码 <a class="header-anchor" href="#修改项目代码" aria-label="Permalink to &quot;修改项目代码&quot;">​</a></h3><p>如果需要修改项目相关的代码，只需要找到对应文件进行修改即可，修改完即可编译，不需要额外配置。</p><h3 id="增删项目代码文件" tabindex="-1">增删项目代码文件 <a class="header-anchor" href="#增删项目代码文件" aria-label="Permalink to &quot;增删项目代码文件&quot;">​</a></h3><p>增删代码文件，将会涉及到编译配置，而不同的语言和平台有所差异，下面将分类说明。</p><h4 id="增删-c-文件" tabindex="-1">增删 C++ 文件 <a class="header-anchor" href="#增删-c-文件" aria-label="Permalink to &quot;增删 C++ 文件&quot;">​</a></h4><p>如果需要增加和删除项目相关的 <code>C++</code> 文件，需要做对应的 <code>CMakeList.txt</code> 修改。</p><p>如果增删的是 <code>native/engine/common/</code> 目录下的代码，则需要修改 <code>native/engine/common/CMakeLists.txt</code></p><div class="language-bat"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">APPEND CC_COMMON_SOURCES</span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_LIST_DIR}/Classes/Game.h</span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_LIST_DIR}/Classes/Game.cpp</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><p>如上面代码所示，找到对应位置，添加或者删除自己的源码即可。</p><p>如果增删的是平台相关的 <code>C++</code> 代码文件，则需要修改 <code>native/engine/平台名称/CMakeLists.txt</code>。参考下面代码：</p><div class="language-bat"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">include</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\${CC_PROJECT_DIR}/../common/CMakeLists.txt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//在这个位置添加自己的 C++ 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">APPEND CC_PROJ_SOURCES</span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_LIST_DIR}/MyTest2.hpp</span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_LIST_DIR}/MyTest2.cpp</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><h4 id="增删-oc-文件" tabindex="-1">增删 OC 文件 <a class="header-anchor" href="#增删-oc-文件" aria-label="Permalink to &quot;增删 OC 文件&quot;">​</a></h4><p>Cocos Creator 生成的 iOS/macOS 原生工程中，Objective-C 文件的管理方式，与 C++ 完全一致，参考上面的内容即可。</p><h4 id="增删-java-文件" tabindex="-1">增删 Java 文件 <a class="header-anchor" href="#增删-java-文件" aria-label="Permalink to &quot;增删 Java 文件&quot;">​</a></h4><p>Java 语言本身是基于路径的包管理机制，增删 <code>JAVA</code> 文件不需要做特殊处理。</p><h3 id="引入第三方-c-oc-库" tabindex="-1">引入第三方 C++/OC 库 <a class="header-anchor" href="#引入第三方-c-oc-库" aria-label="Permalink to &quot;引入第三方 C++/OC 库&quot;">​</a></h3><p>如果引入的库是由 C++/OC 编写而成，则根据情况将 SDK 放入 <code>native/engine/common/</code> 或者 <code>native/engine/平台名称/</code> 目录下，并修改对应目录下的 <code>CMakeList.txt</code>。</p><p>OC 库只能放在平台目录，不能放在 <code>native/engine/common/</code>，否则会导致在其他原生平台出现编译错误。</p><p>大部分 C++ SDK 也提供了自己的 <code>CMakeList.txt</code>，直接通过 <code>include</code> 的方式集成就行。</p><p>关于 CMake 的配置，可以参考项目中已有的 <code>CMakeList.txt</code> 进行修改。更多关于 CMake 的使用详情，可参考 <a href="./../advanced-topics/cmake-learning.html">CMake 使用简介</a>。</p><h3 id="引入-jar-库" tabindex="-1">引入 Jar 库 <a class="header-anchor" href="#引入-jar-库" aria-label="Permalink to &quot;引入 Jar 库&quot;">​</a></h3><p>如果引入的库是 Android 平台特有的库，直接放到对应的 <code>native/engine/android/</code> 目录，配置 <code>native/android/build.gradle</code> 即可。</p><h2 id="脚本与原生通信" tabindex="-1">脚本与原生通信 <a class="header-anchor" href="#脚本与原生通信" aria-label="Permalink to &quot;脚本与原生通信&quot;">​</a></h2><p>新写的原生方法，或者新引入的原生 SDK，如果想要导出到脚本层使用，可以采用以下几种方案。</p><h3 id="使用-jsbbridge" tabindex="-1">使用 JsbBridge <a class="header-anchor" href="#使用-jsbbridge" aria-label="Permalink to &quot;使用 JsbBridge&quot;">​</a></h3><p>如果需要调用一些简单，非高频的函数，可以使用 <code>JsbBridge</code> 机制进行调用。</p><ul><li><a href="./js-java-bridge.html">使用 JsbBridge 实现 JavaScript 与 Java 通信</a></li><li><a href="./js-oc-bridge.html">使用 JsbBridge 实现 JavaScript 与 Objective-C 通信</a></li></ul><h3 id="jsb-自动绑定" tabindex="-1">JSB 自动绑定 <a class="header-anchor" href="#jsb-自动绑定" aria-label="Permalink to &quot;JSB 自动绑定&quot;">​</a></h3><p>对于需要高频调用，或者批量导出 API 到脚本层的接口，建议使用 <a href="./jsb-auto-binding.html">JSB 自动绑定</a> 机制实现脚本与原生交互。</p><h3 id="基于语言反射机制" tabindex="-1">基于语言反射机制 <a class="header-anchor" href="#基于语言反射机制" aria-label="Permalink to &quot;基于语言反射机制&quot;">​</a></h3><p>基于 Java 和 OC 语言反射机制的通信，也可以很方便实现脚本与原生的交互，但由于 iOS 的审核规则越来越严格，iOS 上使用反射机制有审核失败的风险。</p><ul><li><a href="./java-reflection.html">基于反射机制实现 JavaScript 与 Android 系统原生通信</a></li><li><a href="./oc-reflection.html">基于反射机制实现 JavaScript 与 iOS/macOS 系统原生通信</a></li></ul><h2 id="源码版本管理" tabindex="-1">源码版本管理 <a class="header-anchor" href="#源码版本管理" aria-label="Permalink to &quot;源码版本管理&quot;">​</a></h2><p>如果你的团队使用源码版本管理软件进行多人协同工作，<code>native</code> 目录需要全部加入到源码版本管理。</p><p>所有的项目定制化工作都应该尽量放到 <code>native</code> 目录，这样 <code>build</code> 目录就可以随时被删除，它不需要加入到源代码版本管理。</p><p>对于一些特殊的项目需求，无法在 <code>native</code> 目录下完成，则需要改动 <code>build</code> 目录下的内容，此时应该根据需求将对应的文件夹加入管理。</p>`,63),l=[s];function t(c,d,r,p,h,C){return e(),o("div",null,l)}const m=a(i,[["render",t]]);export{b as __pageData,m as default};
