import{_ as o,c as e,o as a,a4 as i}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/vscode.Boa8efZq.png",s="/docs/cocos/assets/gear.BZLt4Cjk.png",r="/docs/cocos/assets/vscode-setting.BPXGM904.png",n="/docs/cocos/assets/vscode-exclude.OQaV3DOS.png",l="/docs/cocos/assets/vscode-workflow.CuiOct8i.png",p="/docs/cocos/assets/curl-download.BI1Rv_GY.png",c="/docs/cocos/assets/tasks-json.oJjGE9Qw.png",d="/docs/cocos/assets/task-compile.CFLyFX4i.png",h="/docs/cocos/assets/run-task.Dxs7cIAU.png",g="/docs/cocos/assets/set-compile.cNo6kGm2.png",k="/docs/cocos/assets/debugger-for-chrome.DxPYFquf.png",u="/docs/cocos/assets/javascript-debugger.BrDIqN4s.png",C="/docs/cocos/assets/launch-json.DFstjUzX.png",E="/docs/cocos/assets/debug-chrome.CX57UzI9.png",x=JSON.parse('{"title":"配置代码编辑环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/scripting/coding-setup.md","filePath":"zh/scripting/coding-setup.md","lastUpdated":1712305443000}'),m={name:"zh/scripting/coding-setup.md"},_=i('<h1 id="配置代码编辑环境" tabindex="-1">配置代码编辑环境 <a class="header-anchor" href="#配置代码编辑环境" aria-label="Permalink to &quot;配置代码编辑环境&quot;">​</a></h1><p>在 <strong>偏好设置</strong> 面板中指定了 <a href="./../editor/preferences/#外部程序">默认脚本编辑器</a>，便可以在 <strong>资源管理器</strong> 中双击脚本文件打开代码编辑器快速编辑代码。本篇内容主要以 Visual Studio Code 为例介绍如何配置开发环境。</p><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> （以下简称 VS Code）是微软推出的轻量化跨平台 IDE，支持 Windows、Mac、Linux 平台，安装和配置非常简单。使用 VS Code 管理和编辑项目脚本代码，可以轻松实现语法高亮、智能代码提示、网页调试等功能。</p><h2 id="安装-vs-code" tabindex="-1">安装 VS Code <a class="header-anchor" href="#安装-vs-code" aria-label="Permalink to &quot;安装 VS Code&quot;">​</a></h2><p>前往 VS Code 的 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">官方网站</a>，点击首页的下载链接即可下载。</p><p>MacOS 用户解压下载包后双击 <strong>Visual Studio Code</strong> 即可运行。</p><p>Windows 用户下载后运行 <strong>VSCodeUserSetup.exe</strong> 按提示完成安装即可运行。</p><h2 id="智能提示数据" tabindex="-1">智能提示数据 <a class="header-anchor" href="#智能提示数据" aria-label="Permalink to &quot;智能提示数据&quot;">​</a></h2><p>Cocos Creator 3.x 在创建项目时，项目目录下会自动生成一个 <a href="./tsconfig">tsconfig.json</a> 文件，里面配置了一个代码提示用的目录文件路径，用 VS Code 打开项目编写代码时便会自动提示 Cocos Creator 引擎 API。若项目升级，引擎 API 也会自动更新。</p><p>启动 VS Code 后选择主菜单的 <strong>File -&gt; Open Folder...</strong>，在弹出的对话框中选择项目根目录，也就是 <code>assets</code>、<code>project.json</code> 所在的路径。然后新建一个脚本，或者打开原有的脚本进行编辑时，就会有语法提示了。</p><p><img src="'+t+'" alt="vs code"></p><blockquote><p><strong>注意</strong>：当使用自定义引擎，或者切换使用内置引擎/自定义引擎时，若出现 API 智能提示不更新的情况，请执行以下步骤以获得最新的代码智能提示：</p><ol><li>删除自定义引擎中 <code>bin</code> 目录（内置引擎是 <code>resources\\resources\\3d\\engine\\bin</code> 目录）下的 <code>cache</code> 文件夹</li><li>在引擎目录下执行 <code>npm run build-declaration</code></li></ol></blockquote><h2 id="设置文件显示和搜索过滤" tabindex="-1">设置文件显示和搜索过滤 <a class="header-anchor" href="#设置文件显示和搜索过滤" aria-label="Permalink to &quot;设置文件显示和搜索过滤&quot;">​</a></h2><p>在 VS Code 的主菜单中选择 <strong>文件（Windows）／Code（Mac）-&gt; 首选项 -&gt; 设置</strong>，或者选择左下角 <img src="'+s+'" alt="gear.png"> 中的 <strong>Setting</strong> 选项，这个操作会打开用户配置文件 <strong>USER SETTINGS</strong>：</p><p><img src="'+r+'" alt="vs code"></p><p>此时在上方的搜索框中输入 <strong>exclude</strong> 搜索，找到 <strong>Files: Exclude</strong> 和 <strong>Search: Exclude</strong> 模块：</p><p><img src="'+n+`" alt="vs code"></p><p>然后点击 <strong>添加模式</strong> 补充以下内容中缺少的部分：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/.git&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/.DS_Store&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/*.meta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;library/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;local/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;temp/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;search.exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/bower_components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;build/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;temp/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;library/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/*.anim&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上字段将为 VS Code 设置搜索时排除的目录，以及在文件列表中隐藏的文件类型。由于 <code>build</code>、<code>temp</code>、<code>library</code> 都是编辑器运行时自动生成的路径，而且会包含我们写入的脚本内容，所以应该在搜索中排除。而 <code>assets</code> 目录下的每个文件都会生成一个 <code>.meta</code> 文件，一般来说我们不需要关心它的内容，只要让编辑器帮我们管理这些文件就可以了。</p><h2 id="vs-code-扩展使用" tabindex="-1">VS Code 扩展使用 <a class="header-anchor" href="#vs-code-扩展使用" aria-label="Permalink to &quot;VS Code 扩展使用&quot;">​</a></h2><p>Cocos Creator 在顶部菜单栏的 <strong>开发者 -&gt; VS Code 工作流</strong> 中集成了 <strong>添加编译任务</strong> 和 <strong>添加 Chrome Debug 配置</strong> 功能，以便更好地辅助开发：</p><p><img src="`+l+'" alt="vscode workflow"></p><ul><li><p><strong>添加编译任务</strong>：用于在 VS Code 中触发 Creator 的脚本编译，详情请参考下文 <strong>使用 VS Code 激活脚本编译</strong> 部分的内容。</p></li><li><p><strong>添加 Chrome Debug 配置</strong>：用于调试网页版游戏，详情请参考下文 <strong>使用 VS Code 调试网页版游戏</strong> 部分的内容。</p></li></ul><h3 id="使用-vs-code-激活脚本编译" tabindex="-1">使用 VS Code 激活脚本编译 <a class="header-anchor" href="#使用-vs-code-激活脚本编译" aria-label="Permalink to &quot;使用 VS Code 激活脚本编译&quot;">​</a></h3><p>使用外部脚本编辑器修改项目脚本后，需要返回 Cocos Creator 以触发脚本编译。<br> 我们在 Creator 中提供了 <strong>添加编译任务</strong> 功能，通过一个预览服务器的 API 向特定地址发送请求来激活 Creator 的编译，这样在外部脚本编辑器修改了项目脚本后，执行 <strong>编译任务</strong> 便可触发脚本编译，不需要返回 Cocos Creator。</p><h4 id="安装-curl" tabindex="-1">安装 cURL <a class="header-anchor" href="#安装-curl" aria-label="Permalink to &quot;安装 cURL&quot;">​</a></h4><p>首先需要确保操作系统中可以运行 <a href="https://curl.haxx.se/" target="_blank" rel="noreferrer">cURL 命令</a>，如果在 Windows 操作系统的命令行中运行 <code>curl</code> 提示找不到命令，则需要先安装 curl 到操作系统：</p><ul><li><p>前往 <a href="http://www.confusedbycode.com/curl/" target="_blank" rel="noreferrer">http://www.confusedbycode.com/curl/</a></p></li><li><p>点击下图箭头所示的控件，完成人机身份验证（若无法正常显示控件，请科学上网）</p><p><img src="'+p+'" alt="curl download"></p></li><li><p>点击 <code>curl-7.46.0-win64.exe</code> 开始下载并安装</p></li></ul><p>安装时请使用默认设置，安装完成后可以打开一个命令行窗口，输入 <code>curl</code>，如果提示 <code>curl: try &#39;curl --help&#39; or &#39;curl --manual&#39; for more information</code> 就表示安装成功了。</p><h4 id="添加-vs-code-编译任务" tabindex="-1">添加 VS Code 编译任务 <a class="header-anchor" href="#添加-vs-code-编译任务" aria-label="Permalink to &quot;添加 VS Code 编译任务&quot;">​</a></h4><p>要在 VS Code 中激活脚本编译，需要执行以下步骤：</p><ol><li><p>在 Creator 顶部菜单栏点击 <strong>开发者 -&gt; VS Code Workflow -&gt; 添加编译任务</strong>，该操作会在项目目录的 <code>.vscode</code> 文件夹下添加 <code>tasks.json</code> 任务配置文件。</p><p><img src="'+c+'" alt="task.json"></p></li><li><p>在 VS Code 里按下快捷键 <kbd>Cmd/Ctrl + P</kbd>，激活 <strong>快速打开</strong> 输入框，然后输入 <code>task CocosCreator compile</code>，选择 <code>CocosCreator compile</code>。</p><p><img src="'+d+'" alt="task compile"></p><p>然后选择输出类型：</p><p><img src="'+h+'" alt="task compile"></p></li><li><p>任务运行完成，会在 VS Code 窗口下方的输出面板中显示结果（根据 VS Code 版本及配置的不同，输出结果也会有所差异）。</p></li></ol><p>这样之后在 VS Code 编辑脚本完成后，执行第 2 个步骤便可触发 Creator 的脚本编译，不需要返回 Creator。</p><p>VS Code 还可以为编译任务配置快捷键，在主菜单中选择 <strong>文件（Windows）／Code（Mac）-&gt; 首选项 -&gt; 键盘快捷方式</strong>，或者选择左下角 <img src="'+s+'" alt="gear.png"> 中的 <strong>键盘快捷方式</strong> 选项，这个操作会打开快捷键配置文件。然后根据需要修改编译任务的快捷键，例如下图将其设置成了 <kbd>Cmd/Ctrl + Shift + B</kbd>：</p><p><img src="'+g+'" alt="set compile"></p><p>之后在 VS Code 中按下快捷键 <kbd>Cmd/Ctrl + Shift + B</kbd> 便会自动显示 <code>CocosCreator compile</code>，不需要手动搜索。</p><p>更多关于 VS Code 中配置和执行任务的信息，请参考 <a href="https://code.visualstudio.com/docs/editor/tasks" target="_blank" rel="noreferrer">Integrate with External Tools via Tasks</a> 文档。</p><h3 id="使用-vs-code-调试网页版游戏" tabindex="-1">使用 VS Code 调试网页版游戏 <a class="header-anchor" href="#使用-vs-code-调试网页版游戏" aria-label="Permalink to &quot;使用 VS Code 调试网页版游戏&quot;">​</a></h3><p>VS Code 有着优秀的调试能力，我们可以直接在源码工程中调试网页版游戏程序。</p><p>首先需要安装：</p><ul><li><p><a href="https://www.google.com/chrome/" target="_blank" rel="noreferrer">Chrome（谷歌浏览器）</a></p></li><li><p>VS Code 插件：</p><ul><li>Debugger for Chrome</li></ul><p>点击 VS Code 左侧导航栏的 <strong>扩展</strong> 按钮打开扩展面板，在搜索框中输入 <strong>Debugger for Chrome</strong> 并点击安装。安装之后可能需要重启 VS Code 才能生效。</p><p><img src="'+k+'" alt="debugger for chrome"></p><ul><li>JavaScript Debugger：开发者也可在 VS Code 的 <strong>扩展</strong> 内搜索 <strong>JavaScript Debugger</strong> 以启用新的调试插件</li></ul><p><img src="'+u+'" alt="javascript debugger"></p></li></ul><p>接下来在 Cocos Creator 顶部菜单栏中点击 <strong>开发者 -&gt; VS Code 工作流 -&gt; 添加 Chrome Debug 配置</strong>，这个菜单命令会在项目文件夹下添加一个 <code>.vscode/launch.json</code> 文件作为调试器的配置：</p><p><img src="'+C+'" alt="launch.json"></p><p>之后便可以在 VS Code 中点击左侧栏的 <strong>调试</strong> 按钮打开调试面板，并在最上方的调试配置中选择 <code>Cocos Creator Launch Chrome against localhost</code>，然后点击左侧绿色的开始按钮进行调试。</p><p><img src="'+E+'" alt="debug chrome"></p><p>调试的时候依赖 Cocos Creator 编辑器内置的 Web 服务器，所以需要在编辑器启动状态下才能进行调试。如果编辑器预览游戏时使用的端口不是默认端口，则需要手动修改 <code>launch.json</code> 里的 <code>url</code> 字段，将正确的端口添加上去。</p><p>调试过程中可以在源码文件上直接下断点，进行监控，是比使用 Chrome 内置的 DevTools 调试更方便和友好的工作流程。</p><h2 id="学习-vs-code-的使用方法" tabindex="-1">学习 VS Code 的使用方法 <a class="header-anchor" href="#学习-vs-code-的使用方法" aria-label="Permalink to &quot;学习 VS Code 的使用方法&quot;">​</a></h2><p>前往 <a href="https://code.visualstudio.com/Docs" target="_blank" rel="noreferrer">VS Code 官网文档</a>，了解从编辑功能操作、个性化定制、语法高亮设置到插件扩展等各方面的使用方法。</p>',50),b=[_];function S(y,F,f,q,V,v){return a(),e("div",null,b)}const w=o(m,[["render",S]]);export{x as __pageData,w as default};
