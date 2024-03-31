import{_ as o,v as e,b as a,R as t}from"./chunks/framework.5ffcbaff.js";const d=JSON.parse('{"title":"中文文档编写规范","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/CONTRIBUTING.md","filePath":"zh/manual/CONTRIBUTING.md"}'),l={name:"zh/manual/CONTRIBUTING.md"},p=t('<h1 id="中文文档编写规范" tabindex="-1">中文文档编写规范 <a class="header-anchor" href="#中文文档编写规范" aria-label="Permalink to &quot;中文文档编写规范&quot;">​</a></h1><p>格式规范的目的是为了提供统一的书写准则，并使成品文档有更好的阅读体验。</p><h2 id="标题使用-与上下正文需要使用空行隔开" tabindex="-1">标题使用 #，与上下正文需要使用空行隔开 <a class="header-anchor" href="#标题使用-与上下正文需要使用空行隔开" aria-label="Permalink to &quot;标题使用 #，与上下正文需要使用空行隔开&quot;">​</a></h2><p>一级标题使用一个 #，二级标题使用两个 ##，以此类推。</p><p>一般情况下，不要跳级使用标题，例如一级标题下，不能直接出现三级标题。</p><h2 id="关于产品名的写法" tabindex="-1">关于产品名的写法 <a class="header-anchor" href="#关于产品名的写法" aria-label="Permalink to &quot;关于产品名的写法&quot;">​</a></h2><ol><li>Cocos Creator</li><li>Cocos Creator 2.4.3</li><li>v2.4.3</li><li>v3.0</li><li>The engine (where refer to the runtime)</li><li>The editor (where refer to the IDE)</li></ol><p><strong>版本</strong>：</p><ul><li>2.4.3 (3.0.0)</li><li>2.4.3 Preview (GA/RC/Alpha/Beta ...)</li><li>2.4.x (3.0.x)</li><li>2.4 (3.0)</li><li>2.x (3.x)</li></ul><p><strong>不要使用以下写法</strong>：</p><ol><li>CCC or ccc</li><li>Cocos (where refer to Cocos Creator)</li><li>IDE (where refer to Cocos Creator)</li></ol><h2 id="专有英文名词、组件名使用正确的首字母大写" tabindex="-1">专有英文名词、组件名使用正确的首字母大写 <a class="header-anchor" href="#专有英文名词、组件名使用正确的首字母大写" aria-label="Permalink to &quot;专有英文名词、组件名使用正确的首字母大写&quot;">​</a></h2><p>正确：</p><blockquote><p>使用 GitHub 登录</p><p>Sprite 组件</p></blockquote><p>错误：</p><blockquote><p>使用 github 登录</p><p>sprite 组件</p></blockquote><h2 id="使用空格" tabindex="-1">使用空格 <a class="header-anchor" href="#使用空格" aria-label="Permalink to &quot;使用空格&quot;">​</a></h2><h3 id="中英文之间、中文与数字之间需要增加空格" tabindex="-1">中英文之间、中文与数字之间需要增加空格 <a class="header-anchor" href="#中英文之间、中文与数字之间需要增加空格" aria-label="Permalink to &quot;中英文之间、中文与数字之间需要增加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>本站点使用 Jekyll 搭建，应用 HPSTR 主题。文章保存在 <code>_posts</code> 目录下。</p><p>今天出去买菜花了 5000 元</p></blockquote><p>错误：</p><blockquote><p>本站点使用Jekyll搭建，应用HPSTR主题。文章保存在<code>_posts</code>目录下。</p><p>今天出去买菜花了5000元</p></blockquote><p>完整的正确用法：</p><blockquote><p>请尽量避免直接使用系统自带的 Ruby，推荐使用 rbenv 来管理本地 Ruby 运行环境，同时使用 ruby-build 来安装 Ruby，现在使用的 Ruby 版本为 2.1.1。</p></blockquote><h3 id="数字与单位之间需要增加空格" tabindex="-1">数字与单位之间需要增加空格 <a class="header-anchor" href="#数字与单位之间需要增加空格" aria-label="Permalink to &quot;数字与单位之间需要增加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>我家的带宽有 1 Gbps，硬盘一共有 10 TB。</p></blockquote><p>错误：</p><blockquote><p>我家的带宽有 1Gbps，硬盘一共有 10TB。</p></blockquote><p><strong>例外：度／百分比与数字之間不需要增加空格</strong></p><p>正确：</p><blockquote><p>今天是 233° 的高溫。</p><p>新 MacBook Pro 有 15% 的 CPU 性能提升。</p></blockquote><p>错误：</p><blockquote><p>今天是 233 ° 的高溫。</p><p>新 MacBook Pro 有 15 % 的 CPU 性能提升。</p></blockquote><h3 id="跳转链接和相邻的正文之间需要增加空格" tabindex="-1">跳转链接和相邻的正文之间需要增加空格 <a class="header-anchor" href="#跳转链接和相邻的正文之间需要增加空格" aria-label="Permalink to &quot;跳转链接和相邻的正文之间需要增加空格&quot;">​</a></h3><p>跳转链接格式：<strong>[跳转的文档名称](跳转的文档路径)</strong>。使用半角（halfwidth）英文标点，且 [] 与 () 之间不要有空格</p><blockquote><p>e.g：[监听和发射事件](../scripting/events.md)。</p></blockquote><p>正确用法：</p><blockquote><p>详情请参考 <a href="./../scripting/events.html">监听和发射事件</a> 文档。</p></blockquote><p>错误用法：</p><blockquote><p>详情请参考<a href="./../scripting/events.html">监听和发射事件</a>文档。</p></blockquote><h3 id="添加跳转到-api-文档的跳转链接-两边需要加空格" tabindex="-1">添加跳转到 API 文档的跳转链接，两边需要加空格 <a class="header-anchor" href="#添加跳转到-api-文档的跳转链接-两边需要加空格" aria-label="Permalink to &quot;添加跳转到 API 文档的跳转链接，两边需要加空格&quot;">​</a></h3><p>跳转链接格式：<strong>[跳转的文档名称](跳转的文档目录)</strong>。使用半角（halfwidth）英文标点，且 [] 与 () 之间不要有空格</p><blockquote><p>e.g：[Mask API](__APIDOC__/zh/#/docs/3.5/zh/ui/Class/Mask)。跨文档的文件名后缀要使用 <strong>.html</strong></p></blockquote><h2 id="使用加粗且和相邻的正文之间加空格" tabindex="-1">使用加粗且和相邻的正文之间加空格 <a class="header-anchor" href="#使用加粗且和相邻的正文之间加空格" aria-label="Permalink to &quot;使用加粗且和相邻的正文之间加空格&quot;">​</a></h2><p><strong>编辑器中的面板名称、组件或其他重要界面元素</strong>，使用加粗表示，并且和相邻的正文之间需要加空格。</p><blockquote><p>格式：打开 **属性检查器** 查看属性</p></blockquote><p>正确：</p><blockquote><p>打开 <strong>属性检查器</strong> 查看属性</p><p>点击 <strong>创建</strong> 按钮创建新节点</p><p>拖拽任意一张图片资源到 <strong>Sprite Frame</strong> 属性中</p></blockquote><p>需要注意的是编辑器中的属性名，要按照属性检查器中显示的格式书写。</p><h2 id="使用-backtick-且和相邻的正文之间加空格" tabindex="-1">使用 backtick，且和相邻的正文之间加空格 <a class="header-anchor" href="#使用-backtick-且和相邻的正文之间加空格" aria-label="Permalink to &quot;使用 backtick，且和相邻的正文之间加空格&quot;">​</a></h2><h3 id="脚本属性和方法名按照-api-中显示的格式书写-使用-backtick-表示-并且和相邻的正文之间加空格" tabindex="-1">脚本属性和方法名按照 API 中显示的格式书写，使用 backtick 表示，并且和相邻的正文之间加空格 <a class="header-anchor" href="#脚本属性和方法名按照-api-中显示的格式书写-使用-backtick-表示-并且和相邻的正文之间加空格" aria-label="Permalink to &quot;脚本属性和方法名按照 API 中显示的格式书写，使用 backtick 表示，并且和相邻的正文之间加空格&quot;">​</a></h3><blockquote><p>格式：通过 `this.node.scale` 来设置节点的缩放</p></blockquote><p>效果如下：</p><blockquote><p>通过 <code>this.node.scale</code> 来设置节点的缩放</p></blockquote><h3 id="文件名和文件路径-使用-backtick-表示-并且和相邻的正文之间加空格" tabindex="-1">文件名和文件路径，使用 backtick 表示，并且和相邻的正文之间加空格 <a class="header-anchor" href="#文件名和文件路径-使用-backtick-表示-并且和相邻的正文之间加空格" aria-label="Permalink to &quot;文件名和文件路径，使用 backtick 表示，并且和相邻的正文之间加空格&quot;">​</a></h3><p>格式：`/mypath/myfile.ts`</p><p>如果是完整路径，前面需要加 /，如果不是完整路径则不需要</p><p>正确：</p><blockquote><p>分包的目录在 <code>build/quickgame/dist</code> 目录下</p></blockquote><h2 id="使用空行" tabindex="-1">使用空行 <a class="header-anchor" href="#使用空行" aria-label="Permalink to &quot;使用空行&quot;">​</a></h2><h3 id="代码段落与上下文之间需要使用空行隔开" tabindex="-1">代码段落与上下文之间需要使用空行隔开 <a class="header-anchor" href="#代码段落与上下文之间需要使用空行隔开" aria-label="Permalink to &quot;代码段落与上下文之间需要使用空行隔开&quot;">​</a></h3><p>例如：</p><blockquote><p>保存 Prefab，代码范例如下：<br></p><p>```js<br> Editor.Ipc.sendToPanel(&#39;scene&#39;, &#39;scene:apply-prefab&#39;, node.uuid);<br> ```</p><p>继续正文部分。</p></blockquote><p>效果如下：</p><blockquote><p>保存 Prefab，代码范例如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Ipc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendToPanel</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scene</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scene:apply-prefab</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">uuid)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>继续正文部分。</p></blockquote><h3 id="图片与上下正文之间需要使用空行隔开" tabindex="-1">图片与上下正文之间需要使用空行隔开 <a class="header-anchor" href="#图片与上下正文之间需要使用空行隔开" aria-label="Permalink to &quot;图片与上下正文之间需要使用空行隔开&quot;">​</a></h3><p>图片格式：<strong>![图片说明](图片的相对路径)</strong>。使用半角（halfwidth）英文标点，且 !、[]、() 三者之间不要有空格</p><blockquote><p>e.g：![background](quick-start/background.png)</p></blockquote><p>如果图片是添加在正文中，那么和相邻的正文之间需要加空格</p><h2 id="换行使用空行或者-br" tabindex="-1">换行使用空行或者 &lt;br&gt; <a class="header-anchor" href="#换行使用空行或者-br" aria-label="Permalink to &quot;换行使用空行或者 \\&lt;br\\&gt;&quot;">​</a></h2><p>如果使用回车键换行，在 GitBook 上没有换行效果并且会增加一个空格</p><p><strong>使用空行换行效果</strong>：</p><blockquote><p>第一行</p><p>第二行</p></blockquote><p><strong>使用 &lt;br&gt; 换行效果</strong>：</p><blockquote><p>第一行<br> 第二行</p></blockquote><p><strong>使用回车键换行效果（不推荐）</strong>：</p><blockquote><p>第一行 第二行</p></blockquote><h2 id="使用中英文标点符号" tabindex="-1">使用中英文标点符号 <a class="header-anchor" href="#使用中英文标点符号" aria-label="Permalink to &quot;使用中英文标点符号&quot;">​</a></h2><h3 id="中文排版时-一律使用全角-fullwidth-中文标点" tabindex="-1">中文排版时，一律使用全角（fullwidth）中文标点 <a class="header-anchor" href="#中文排版时-一律使用全角-fullwidth-中文标点" aria-label="Permalink to &quot;中文排版时，一律使用全角（fullwidth）中文标点&quot;">​</a></h3><p>正确：</p><blockquote><p>嗨！你知道吗？今天前台的小妹跟我说“喵”了哎！</p></blockquote><p>错误：</p><blockquote><p>嗨！你知道吗？今天前台的小妹跟我说&quot;喵&quot;了哎！</p><p>嗨！你知道吗?今天前台的小妹跟我说&quot;喵&quot;了哎!</p></blockquote><h3 id="中英排版时-一律使用全角-fullwidth-中文标点" tabindex="-1">中英排版时，一律使用全角（fullwidth）中文标点 <a class="header-anchor" href="#中英排版时-一律使用全角-fullwidth-中文标点" aria-label="Permalink to &quot;中英排版时，一律使用全角（fullwidth）中文标点&quot;">​</a></h3><p>正确：</p><blockquote><p>核磁共振成像（NMRI）是什么原理都不知道？JFGI！</p></blockquote><p>错误：</p><blockquote><p>核磁共振成像(NMRI)是什么原理都不知道？JFGI！</p><p>核磁共振成像(NMRI)是什么原理都不知道?JFGI!</p></blockquote><h3 id="中英排版时-遇到完整的英文整句-整句内容使用半角-halfwidth-英文标点" tabindex="-1">中英排版时，遇到完整的英文整句，整句内容使用半角（halfwidth）英文标点 <a class="header-anchor" href="#中英排版时-遇到完整的英文整句-整句内容使用半角-halfwidth-英文标点" aria-label="Permalink to &quot;中英排版时，遇到完整的英文整句，整句内容使用半角（halfwidth）英文标点&quot;">​</a></h3><p>正确：</p><blockquote><p>乔帮主那句话怎么说的？“Stay hungry, stay foolish.”</p></blockquote><p>错误：</p><blockquote><p>乔帮主那句话怎么说的？“Stay hungry，stay foolish。”</p></blockquote><h2 id="使用顿号" tabindex="-1">使用顿号 <a class="header-anchor" href="#使用顿号" aria-label="Permalink to &quot;使用顿号&quot;">​</a></h2><p><strong>中文文档句子内部的并列词应该用全角顿号（、）分隔，而不用逗号，即使并列词是英语也是如此。</strong></p><p>正确：</p><blockquote><p>科技公司有 Google、Facebook、腾讯、阿里和百度等。</p></blockquote><p>错误：</p><blockquote><p>科技公司有 Google, Facebook, 腾讯, 阿里和百度等。</p></blockquote><p><strong>英文句子中，并列词语之间使用半角逗号（,）分隔</strong></p><blockquote><p>e.g.: Microsoft Office includes Word, Excel, PowerPoint, Outlook and other components.</p></blockquote><p><strong>中文句子内部的并列词，最后一个尽量使用（和）来连接，使句子读起来更加连贯</strong></p><p>例如下面两个句子都可以，但第二个更优。</p><blockquote><p>科技公司有 Google、Facebook、腾讯、阿里，以及百度等。</p><p>科技公司有 Google、Facebook、腾讯、阿里和百度等。</p></blockquote><p>更多关于标点符号的使用请参考：<a href="https://github.com/ruanyf/document-style-guide/blob/master/docs/marks.md" target="_blank" rel="noreferrer">https://github.com/ruanyf/document-style-guide/blob/master/docs/marks.md</a>。</p><h2 id="注意事项的书写格式" tabindex="-1">注意事项的书写格式 <a class="header-anchor" href="#注意事项的书写格式" aria-label="Permalink to &quot;注意事项的书写格式&quot;">​</a></h2><blockquote><p>格式：&gt; **注意**：中英文文档的中英文符号不要混用</p></blockquote><p>当注意事项在两点以上时书写格式如下：</p><blockquote><p>&gt; **注意**：<br> &gt; 1. 第一点。<br> &gt; 2. 第二点。<br> &gt; 3. 最后一点。<br></p></blockquote><p>效果如下：</p><blockquote><p><strong>注意</strong>：</p><ol><li>第一点。</li><li>第二点。</li><li>最后一点。</li></ol></blockquote><h2 id="分点介绍" tabindex="-1">分点介绍 <a class="header-anchor" href="#分点介绍" aria-label="Permalink to &quot;分点介绍&quot;">​</a></h2><p>当正文使用 <strong>-</strong> 或者 <strong>数字</strong> 分点介绍时，分点中的正文包括图片都需要保留 4 个空格的缩进。</p><p>例如使用 <strong>-</strong> 分点介绍时：</p><blockquote><p>- 分点介绍 1</p><p>（4 个空格）开始第一个分点的正文部分。</p><p>- 分点介绍 2</p><p>（4 个空格）开始第二个分点的正文部分。</p><p>（4 个空格）![image](图片链接)</p></blockquote><p>效果如下：</p><blockquote><ul><li><p>分点介绍 1</p><p>开始第一个分点的正文部分。</p></li><li><p>分点介绍 2</p><p>开始第二个分点的正文部分。</p><p>![image](图片链接)</p></li></ul></blockquote><p>例如使用 <strong>数字</strong> 分点介绍时：</p><blockquote><p>1. 分点介绍 1</p><p>（4 个空格）开始第一个分点的正文部分。</p><p>2. 分点介绍 2</p><p>（4 个空格）开始第二个分点的正文部分。</p><p>（4 个空格）![image](图片链接)</p></blockquote><p>效果如下：</p><blockquote><ol><li><p>分点介绍 1</p><p>开始第一个分点的正文部分。</p></li><li><p>分点介绍 2</p><p>开始第二个分点的正文部分。</p><p>![image](图片链接)</p></li></ol></blockquote><h2 id="表格统一使用左对齐" tabindex="-1">表格统一使用左对齐 <a class="header-anchor" href="#表格统一使用左对齐" aria-label="Permalink to &quot;表格统一使用左对齐&quot;">​</a></h2><p>例如：</p><blockquote><p>| 属性 | 功能说明 |<br> | :---- | :------ |<br> | 属性 1 | 说明 1 |<br> | 属性 2 | 说明 2 |</p></blockquote><p>前后可保留适当的空格，方便编辑。</p><h2 id="脚注写法" tabindex="-1">脚注写法 <a class="header-anchor" href="#脚注写法" aria-label="Permalink to &quot;脚注写法&quot;">​</a></h2><p>例如：</p><p>这是有脚注的内容。[^1]</p><p>[^1]: 这是脚注的注释内容。</p><p>效果如下：</p><p>这是有脚注的内容。<a href="./这是脚注的注释内容。.html">^1</a></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://github.com/anjuke/coding-style/blob/master/text/chinese.md" target="_blank" rel="noreferrer">中文文档格式规范</a></li><li><a href="https://github.com/sparanoid/chinese-copywriting-guidelines" target="_blank" rel="noreferrer">文案排版指北</a></li><li><a href="https://github.com/ruanyf/document-style-guide" target="_blank" rel="noreferrer">中文技术文档的写作规范</a></li></ul>',134),r=[p];function i(s,c,n,h,b,u){return e(),a("div",null,r)}const q=o(l,[["render",i]]);export{d as __pageData,q as default};
