import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CqnjdYks.js";const t="/docs/cocos/assets/i18n-folder.8_B-soqG.png",u=JSON.parse('{"title":"多语言系统（i18n）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/i18n.md","filePath":"zh/manual/editor/extension/i18n.md"}'),p={name:"zh/manual/editor/extension/i18n.md"},l=n('<h1 id="多语言系统-i18n" tabindex="-1">多语言系统（i18n） <a class="header-anchor" href="#多语言系统-i18n" aria-label="Permalink to &quot;多语言系统（i18n）&quot;">​</a></h1><h2 id="什么是-i18n" tabindex="-1">什么是 i18n <a class="header-anchor" href="#什么是-i18n" aria-label="Permalink to &quot;什么是 i18n&quot;">​</a></h2><p><strong>i18n</strong>（其来源是英文单词 internationalization 的首末字符 i 和 n ，18 为中间的字符数）是“国际化”的简称。</p><p>在资讯领域，i18n 指让产品（出版物，软件，硬件等）无需做太多改变就能够适应不同的语言和地区的需要。</p><p>在程序开发领域，i18n 则是指在不修改内部代码的情况下，能根据不同语言及地区显示相应的本地化内容。</p><p>Cocos Creator 扩展系统中内置的多语言方案（i18n）允许扩展配置多份语言的 <strong>键值映射</strong>，并根据编辑器当前的语言设置在扩展里使用不同语言的字符串。</p><blockquote><p><strong>注意</strong>：本文将介绍如何赋予 <strong>扩展</strong> 多语言的能力，如需在工程内添加运行时的多语言能力，请参考：</p><ol><li><a href="./../l10n/overview.html">多语言本地化（L10N）</a></li><li><a href="./../../advanced-topics/i18n.html">i18n 游戏多语言支持</a></li></ol></blockquote><h2 id="i18n-文件夹" tabindex="-1">i18n 文件夹 <a class="header-anchor" href="#i18n-文件夹" aria-label="Permalink to &quot;i18n 文件夹&quot;">​</a></h2><p>要启用多语言功能（以下简称 i18n），需要在扩展的目录下新建一个名叫 i18n 的文件夹，并为每种语言添加一个相应的 <code>JavaScript</code> 文件，作为键值映射数据。</p><p>数据文件名应该和语言的代号一致，如 <code>en.js</code> 对应英语映射数据，<code>zh.js</code>对应中文映射数据。如下图所示：</p><p><img src="'+t+`" alt="i18n-folder"></p><p>映射以 <code>JavaScript</code> 对象的 key 作为键值，并以模块信息导出，如下所示：</p><ul><li><p><code>en.js</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;use strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open_panel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Default Panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    send_to_panel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Send message to Default Panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Extension with a panel&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></li><li><p><code>zh.js</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open_panel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;默认面板&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    send_to_panel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发送消息给面板&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;含有一个面板的扩展&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></li></ul><p>以 <code>open_panel</code> 为例，假设注册的扩展名字叫做 <code>first-panel</code>，则对应的文本翻译 key 为 <code>first-panel.open_panel</code>。</p><h2 id="在脚本中使用" tabindex="-1">在脚本中使用 <a class="header-anchor" href="#在脚本中使用" aria-label="Permalink to &quot;在脚本中使用&quot;">​</a></h2><p>在 TypeScript 或者 JavaScript 脚本中，可通过 <code>Editor.I18n.t</code> 接口获取当前语言对应的翻译后的文本：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.I18n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;first-panel.open_panel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="在-html-模板中使用" tabindex="-1">在 HTML 模板中使用 <a class="header-anchor" href="#在-html-模板中使用" aria-label="Permalink to &quot;在 HTML 模板中使用&quot;">​</a></h2><p>在 HTML 模版里需要翻译的话可以使用 ui-label 元素进行翻译：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ui-label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.open_panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ui-label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p><strong>注意</strong>：<code>ui-label</code> 是一个普通的行内元素，类似 span。</p></blockquote><h3 id="在-json-文件中使用" tabindex="-1">在 json 文件中使用 <a class="header-anchor" href="#在-json-文件中使用" aria-label="Permalink to &quot;在 json 文件中使用&quot;">​</a></h3><p>例如在扩展包的 <code>package.json</code> 中注册菜单路径时，只要这个字段支持 i18n 格式的路径，该路径就可以用 <code>i18n:\${key}</code> 的形式实现多语言翻译功能。</p><p>示例1：扩展描述</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;package_version&quot;: 2,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;name&quot;: &quot;first-panel&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;main&quot;: &quot;./dist/main.js&quot;,</span></span></code></pre></div><p>示例2：面板标题</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;panels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;first-panel Default Panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // &quot;type&quot;: &quot;dockable&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // &quot;main&quot;: &quot;dist/panels/default&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // &quot;size&quot;: {...}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p>示例3：菜单路径与显示内容</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:menu.panel/first-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.open_panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open-panel&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:menu.develop/first-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.send_to_panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;send-to-panel&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,29),e=[l];function h(k,o,d,E,r,c){return a(),i("div",null,e)}const y=s(p,[["render",h]]);export{u as __pageData,y as default};
