import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/i18n-search.3QfRrzI2.png",p="/docs/cocos/assets/i18n-store.DxsrVh2T.png",l="/docs/cocos/assets/i18n-install.BG15o1Jb.png",e="/docs/cocos/assets/i18n-script.DcJGRRA4.png",h="/docs/cocos/assets/i18n-menu.BpOGuI8s.png",k="/docs/cocos/assets/i18n-langu.BbHaQQ6n.png",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAIAAACN07NGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFcSURBVCiRY9TX12cgETCRqoFMPSxYxJR+sdj9YmRgYPjE9ucg2/+3+PWo/mDPecrFw/HrJRsDAwMD60fukB9/zkt/7eb4j6SKWUJCAqbhK3ftM+bzCp/qBP7y/2X4w/5rk/D31XwMno94ndl/7mHD9M9/tpxHjEeUv8xgYWm+y2Py//+PP5wFj9m1WH4VK3/jeMSd9h9Dj9t7Lhapb7MYGRi+s0sIfani/72A/+tRVnaLPwwMjL8WSTGav2dC13Od/TfvVxZVBgYG5r8M31lUGRgYGJjEf/z/wcjAwMBo/JXlAxvcIph/PrH9Ef3MF/zn1z6e3+/+ceU95Qp4x84m8qWb87/1e77g399nifx9DtXDiJwOmEof82uwfV0r8msbMwMDA4PwX+bQN9x2v34tl/mxmRGujBEt7TB6fOL0fscm/JGJieH/L/4/94S+rub7dxUlRtD1EAPold4A3c14ZWDLMpUAAAAASUVORK5CYII=",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAIAAACN07NGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFGSURBVCiRY9TX12cgETCRqoGwHguzPxbE6hH876L5X5Xre4rLD0xJFnSD3T5mubwR/sP99guDsNRL1rcKRkoMJ+6hqGGWkJBAaAh9WWvIuqxXctFDFmGeP8J/JBt3/4uK+6B0l+foe6xus/hYps7T3MT30OnlhKjPRtqfeSU+uTzhi5jBo5PyMRyrf7Jsvzzcx32CgcFF88+5i4wMN+WaL/3RsWZguMe99fkXV09setZfY5O3+CXJwHD1OYOdGcOJ07/DNRme32Rg4PplL8127iA2/3y5zc1g9LLAkP3e/58yf1nENH+/3idWdft3Z/kbhi0SLfew6WFgYLh6mpfT9EW60a8Xd3nvvWTm1HpT6PX91XapkiN4w5qXl/HcYvk9XN+MhBlu75GacJ7xOQM6QNPzl+22SNcxxucM3FsxlMIBI53SKAAOyHU6YdJYfgAAAABJRU5ErkJggg==",g="/docs/cocos/assets/i18n-langu-file.DrIybLw3.png",E="/docs/cocos/assets/i18n-localizedlable.B2FD6Adw.png",c="/docs/cocos/assets/i18n-label.P6YK5iCF.gif",d="/docs/cocos/assets/i18n-label-change.x8C0J1Tt.gif",y="/docs/cocos/assets/i18n-sprite1.gYNcsRu1.png",F="/docs/cocos/assets/i18n-sprite2.Ba2FXvtJ.gif",A="/docs/cocos/assets/i18n-sprite3.K9JNN3Ap.gif",u="/docs/cocos/assets/i18n-changelang.5b5yypaZ.gif",v=JSON.parse('{"title":"i18n 游戏多语言支持","description":"","frontmatter":{},"headers":[],"relativePath":"zh/advanced-topics/i18n.md","filePath":"zh/advanced-topics/i18n.md","lastUpdated":1712305443000}'),m={name:"zh/advanced-topics/i18n.md"},C=n('<h1 id="i18n-游戏多语言支持" tabindex="-1">i18n 游戏多语言支持 <a class="header-anchor" href="#i18n-游戏多语言支持" aria-label="Permalink to &quot;i18n 游戏多语言支持&quot;">​</a></h1><p>Cocos Creator 从 3.1 版本起，提供了 i18n 游戏多语言扩展插件，目前支持 Label 和 Sprite 组件，可在 Cocos Store 中下载使用。</p><blockquote><p><strong>注意</strong>：从 v3.6 起，引擎已内置 <a href="./../editor/l10n/overview">本地化（L10N）</a> 提供功能更丰富、强大的多语言功能。如果您使用的是 v3.6 之后的版本我们建议您使用该功能。</p></blockquote><h2 id="什么是-i18n" tabindex="-1">什么是 i18n <a class="header-anchor" href="#什么是-i18n" aria-label="Permalink to &quot;什么是 i18n&quot;">​</a></h2><p><strong>i18n</strong> 是 <strong>国际化</strong> 的简称，来源是英文单词 <strong>internationalization</strong> 的首末字符 <strong>i</strong> 和 <strong>n</strong>，18 为单词中间的字符数。在资讯领域，国际化（i18n）可以让产品无需做大的改变，就能够满足不同语言和地区的需要。对程序来说，在不修改内部代码的情况下，就能根据不同语言及地区切换相应的语言界面。如今全球化的时代，国际化尤为重要，因为产品的潜在用户可能来自世界的各个角落。</p><p>通常与 i18n 相关的还有 L10n（“本地化”的简称），多语言国际化和本地化的区别在于：</p><ul><li><strong>国际化</strong> 需要软件里包括多种语言的文本和图片数据，并根据用户所用设备的默认语言或菜单选择进行实时切换。</li><li><strong>本地化</strong> 是在发布软件时针对某一特定语言的版本定制文本和图片内容。</li></ul><blockquote><p><strong>注意</strong>：i18n 游戏多语言扩展插件不提供构建项目时的多语言资源管理，若面向不同地区发布项目，需要移除一部分多语言资源时，请手动处理。</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><p>点击 Creator 顶部菜单栏中的 <strong>扩展 -&gt; 商城</strong> 进入 <strong>Cocos Store</strong>，查找 <a href="http://store.cocos.com/app/detail/1865" target="_blank" rel="noreferrer">i18n 多语言化扩展插件</a> 或者直接在上方搜索框中搜索：</p><p><img src="'+t+'" alt="i18n-search"></p></li><li><p>单击进入详情页，可以看到 i18n 的基本信息、资源介绍和历史版本记录。然后点击 <strong>下载</strong> 按钮：</p><p><img src="'+p+'" alt="i18n-store"></p></li><li><p>下载完成后会显示在右侧自动打开的下载历史栏中，继续点击下图中的安装按钮，然后选择扩展插件安装位置（全局/项目）即可。</p><blockquote><p><strong>注意</strong>：若是首次安装 i18n 多语言化扩展插件，安装完成后需要重启 Creator。</p></blockquote><p><img src="'+l+'" alt="i18n-install"></p></li><li><p>安装完成后刷新 <strong>资源管理器</strong> 可以看到新增了 <code>i18n</code> 文件夹及几个脚本，用于后续使用扩展插件。</p><p><img src="'+e+'" alt="i18n-script"></p></li></ol><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="多语言配置" tabindex="-1">多语言配置 <a class="header-anchor" href="#多语言配置" aria-label="Permalink to &quot;多语言配置&quot;">​</a></h3><p>i18n 扩展插件安装完成后，会在 Creator 顶部菜单栏的 <strong>扩展</strong> 中生成 <strong>I18n Settings</strong> 菜单，点击即可打开 <strong>本地化控制面板</strong>，进行多语言配置。</p><p><img src="'+h+'" alt="i18n-menu"></p><p>点击面板左上角的 <code>+</code> 按钮，在下方新增的输入框中输入需要新增的语言 ID。语言 ID 可自定义，但不支持使用符号，例如 <code>zh-CN</code> 请写为 <code>zhCN</code>。</p><p><img src="'+k+'" alt="i18n-langu"></p><p>首个新增语言的左侧默认会有一个 <img src="'+r+'" alt="i18n-display"> 按钮，表示作为预览项目时显示的语言；之后新增的语言则默认为 <img src="'+o+'" alt="i18n-undisplay">，表示不作为在预览项目时显示的语言，点击按钮即可切换语言显示状态。 当鼠标悬浮在任意语言上时，对应语言右侧会出现一个删除按钮，用于删除当前选中的语言。</p><p>语言新增完成后，在项目的 <code>assets\\resources\\i18n</code> 目录下会生成相应的语言配置模板，用于配置需要多语言化的 Label，详情请参考下文介绍。</p><p><img src="'+g+`" alt="i18n-langu-file"></p><h3 id="本地化-label" tabindex="-1">本地化 Label <a class="header-anchor" href="#本地化-label" aria-label="Permalink to &quot;本地化 Label&quot;">​</a></h3><p>打开语言配置模板，例如项目目录下的 <code>assets\\resources\\i18n\\zh.ts</code>，添加 &quot;test&quot; 字段，并在其中定义 &quot;main&quot; 和 &quot;hello&quot;，用于后续在编辑器中调用当前语言下要显示的文本内容的 key：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> win</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> languages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">win.languages) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   win.languages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">win.languages.zh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> languages;</span></span></code></pre></div><p>然后回到 Creator，在 <strong>层级管理器</strong> 选中 Label 节点，然后点击 <strong>属性检查器</strong> 下方的 <strong>添加组件</strong> 按钮，选择 <strong>自定义脚本 -&gt; LocalizedLabel</strong>，将脚本挂载到节点上。</p><p>或者也可以直接将 <code>LocalizedLabel.ts</code> 从 <strong>资源管理器</strong> 拖拽到 <strong>属性检查器</strong>。</p><p><img src="`+E+'" alt="i18n-localizedlable"></p><p>然后在 <strong>LocalizedLabel</strong> 脚本组件的 Key 属性框中输入刚刚在 <code>zh.ts</code> 中配置的 <code>test.main</code> 或者 <code>test.hello</code>：</p><p><img src="'+c+'" alt="i18n-label"></p><p>之后可参照 <code>zh.ts</code> 的配置对 <code>assets\\resources\\i18n\\en.ts</code> 进行配置，配置完成后即可在 <strong>本地化控制</strong> 面板切换语言显示，如下所示：</p><p><img src="'+d+'" alt="i18n-label-change"></p><blockquote><p>注意：若需要修改 Label 渲染的文字，请直接修改刚才配置的语言脚本的 key 值，不要直接在 Label 组件中修改 string 属性。</p></blockquote><h3 id="本地化-sprite-图片" tabindex="-1">本地化 Sprite 图片 <a class="header-anchor" href="#本地化-sprite-图片" aria-label="Permalink to &quot;本地化 Sprite 图片&quot;">​</a></h3><p>在 Creator 的 <strong>层级管理器</strong> 选中 Sprite 节点，然后点击 <strong>属性检查器</strong> 下方的 <strong>添加组件</strong> 按钮，选择 <strong>自定义脚本 -&gt; LocalizedSprite</strong>，即可在 Sprite 节点上挂载 <code>LocalizedSprite</code> 脚本组件：</p><p><img src="'+y+'" alt="i18n-sprite1"></p><p>然后在 <strong>SpriteList</strong> 属性框中设置语言数量，填写对应的 <strong>语言 ID</strong> 并拖入对应的 <strong>图片资源</strong>。例如下图设置为中/英文两种语言：</p><p><img src="'+F+'" alt="i18n-sprite2"></p><p>配置完成后即可在 <strong>本地化控制</strong> 面板中切换语言显示。</p><p><img src="'+A+`" alt="i18n-sprite3"></p><h3 id="动态切换语言" tabindex="-1">动态切换语言 <a class="header-anchor" href="#动态切换语言" aria-label="Permalink to &quot;动态切换语言&quot;">​</a></h3><p>在游戏运行时，若需要动态切换语言，可以调用 <code>i18n.init(language)</code> 方法。若语言切换后，需要马上更新当前场景，则需要再调用 <code>i18n.updateSceneRenderer()</code> 方法。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">changeLang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i18n._language </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateSceneRenderers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：请确保运行时 <code>i18n.init(language)</code> 的执行是在包含有 <code>LocalizedLabel</code> 组件的场景加载完成之后。</p></blockquote><p>我们以在场景中添加一个按钮来控制中/英文的切换为例，需新建一个脚本挂载在 Button 节点上。然后在脚本中将 <code>changeLang</code> 方法绑定在按钮点击事件中，例如：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node, Button } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import * as i18n from &#39;../extensions/i18n/assets/LanguageData&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i18n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;db://i18n/LanguageData&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Button</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Button.EventType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CLICK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.changeLang, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    changeLang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i18n._language </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateSceneRenderers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>代码编写完成后回到 Creator，点击预览即可看到效果如下图：</p><p><img src="`+u+'" alt="i18n-changelang"></p>',45),b=[C];function B(_,D,f,q,L,x){return a(),i("div",null,b)}const P=s(m,[["render",B]]);export{v as __pageData,P as default};
