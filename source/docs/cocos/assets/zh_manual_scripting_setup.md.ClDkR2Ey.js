import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CqnjdYks.js";const t="/docs/cocos/assets/create-script.Cd5XlUP5.png",l="/docs/cocos/assets/say-hello-1.3Ggq1u34.png",p="/docs/cocos/assets/say-hello-2.BbeCr5ie.png",e="/docs/cocos/assets/add-component.DqiJmOIY.png",h="/docs/cocos/assets/add-component-done.CKrSRrME.png",k="/docs/cocos/assets/preference-script-editor.XMT23hoi.png",r="/docs/cocos/assets/modify-script.zrr75epe.png",o="/docs/cocos/assets/custom-script.BL_AmOyv.png",c="/docs/cocos/assets/custom-script-help.CP61rjzs.png",d="/docs/cocos/assets/custom-script-file.CQppm5TQ.png",g="/docs/cocos/assets/custom-script-menu.BEdzhNbT.png",E="/docs/cocos/assets/custom-script-result.B1txN1yO.png",N=JSON.parse('{"title":"创建脚本","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/scripting/setup.md","filePath":"zh/manual/scripting/setup.md"}'),y={name:"zh/manual/scripting/setup.md"},m=n('<h1 id="创建脚本" tabindex="-1">创建脚本 <a class="header-anchor" href="#创建脚本" aria-label="Permalink to &quot;创建脚本&quot;">​</a></h1><h2 id="创建组件脚本" tabindex="-1">创建组件脚本 <a class="header-anchor" href="#创建组件脚本" aria-label="Permalink to &quot;创建组件脚本&quot;">​</a></h2><p>在 Cocos Creator 中，脚本也是资源的一部分。在 <strong>资源管理器</strong> 中创建的脚本，默认是一个 NewComponent 组件，我们称之为组件脚本。可通过以下两种方式创建：</p><ul><li><strong>资源管理器</strong> 面板空白位置或某个文件夹资源下右击菜单，选择 <strong>Create</strong> &gt; <strong>TypeScript</strong> &gt; <strong>NewComponent</strong>。</li><li><strong>资源管理器</strong> 左上角的 <strong>+</strong> 按钮，点击后选择 <strong>TypeScript</strong> &gt; <strong>NewComponent</strong>。</li></ul><p><img src="'+t+'" alt="create script"></p><p>在创建脚本时，名称不能为空，输入框默认为 <code>NewComponent</code>。我们将其修改为 <code>say-hello</code>，可以看到在 <strong>资源管理器</strong> 中生成了一个名为 <code>say-hello</code> 的脚本文件。</p><p><img src="'+l+'" alt="say-hello-1"></p><p><img src="'+p+`" alt="say-hello-2"></p><p>新建后的初始脚本代码如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;say_hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> say_hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deltaTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><strong>注意点</strong>：</p><ol><li><p>项目中所有脚本的类名 <code>ClassName</code> （如上例中的 &#39;say_hello&#39;） 不允许重复，即使脚本文件在不同的目录下，各自的代码里也不允许有相同的类名。</p></li><li><p>脚本文件名称和脚本的类名不同，在输入初始的文件名之后，文件名会被处理为类名，处理的逻辑详见下文 <strong>类名的生成</strong>。脚本文件生成后，对文件的后续操作<strong>脚本重命名</strong>，新的文件名不会再去生成并替换代码里的类名，不再影响了。</p></li><li><p>我们推荐用户使用 TypeScript 来编写脚本，目前 <strong>资源管理器</strong> 中仅支持创建 TypeScript 文件。但如果用户想要使用 JavaScript 来编写脚本的话，可以直接在操作系统的文件夹中创建 JavaScript 文件，或在其他代码编辑软件中创建 JavaScript 文件。</p></li></ol></blockquote><h2 id="类名的生成" tabindex="-1">类名的生成 <a class="header-anchor" href="#类名的生成" aria-label="Permalink to &quot;类名的生成&quot;">​</a></h2><p>在获得初始文件名数据后，会生成两种规则的类名 <code>ClassName</code>，并以变量的方式提供给<strong>脚本模板</strong>。</p><ul><li>下划线格式，变量名为 <code>&lt;%UnderscoreCaseClassName%&gt;</code>。这种格式是为了保持类名尽可能地与文件名一致，保持一致的好处是有利于代码全局搜索和替换。</li><li>驼峰格式，变量名为 <code>&lt;%CamelCaseClassName%&gt;</code>。这种格式是为了保持与主流的脚本标准一致，首字母大写的驼峰格式。</li></ul><h2 id="添加脚本到场景节点中" tabindex="-1">添加脚本到场景节点中 <a class="header-anchor" href="#添加脚本到场景节点中" aria-label="Permalink to &quot;添加脚本到场景节点中&quot;">​</a></h2><p><strong>将脚本添加到场景节点中，实际上就是为这个节点添加一个脚本组件。</strong> 在 <strong>层级管理器</strong> 选中某个节点，此时 <strong>属性检查器</strong> 面板会显示该节点的属性。以下两种添加方式：</p><ul><li><p>直接将 <strong>资源管理器</strong> 中的脚本拖拽当前节点的到 <strong>属性检查器</strong> 中，即为挂载了一个组件。</p></li><li><p>点击 <strong>属性检查器</strong> 最下方的 <strong>添加组件</strong> 按钮，选择 <strong>自定义脚本 -&gt; say_hello</strong>，即为挂载组件。</p><p><img src="`+e+'" alt="add component"><img src="'+h+'" alt="add component done"></p></li></ul><h2 id="编辑脚本" tabindex="-1">编辑脚本 <a class="header-anchor" href="#编辑脚本" aria-label="Permalink to &quot;编辑脚本&quot;">​</a></h2><p>开发者可根据自己的需求，选择自己喜爱的代码编辑软件（如：Vim、Sublime Text、Web Storm、VSCode 等）进行脚本编辑。编辑器的 <strong>偏好设置</strong> &gt; <strong>外部程序</strong> 可设置指定的脚本打开工具。</p><p><img src="'+k+`" alt="preference script editor"></p><p>外部程序配置完成后，在 <strong>资源管理器</strong> 中双击脚本资源，便会用指定的程序打开该脚本。 编辑脚本代码保存后，鼠标点击回到编辑器，编辑器会自动检测到脚本的改动，重新对其进行编译后使用。</p><p>编写脚本代码，可阅读以下文档了解相关内容：</p><ul><li><a href="./coding-setup.html">配置代码编辑环境</a></li><li><a href="./basic.html">脚本基础</a></li></ul><p>脚本文件创建成功后，再对文件进行重命名，或者对代码里的类名进行修改，文件名和类名均不会再互相影响。</p><ul><li>以 <code>say-hello</code> 为例，我们在 <strong>资源管理器</strong> 中将其重命名为 <code>hello</code>。</li></ul><p>重新选中该资源，查看 <strong>属性检查器</strong>，代码还是显示 <code>class say_hello</code>，不会变动。</p><p>重新选中 <strong>层级管理器</strong> 上刚添加组件的节点 <strong>Node</strong>，查看 <strong>属性检查器</strong>，组件名称还是显示 <code>say_hello</code>，不会变动。</p><p>我们继续双击当前的 <code>hello</code> 资源，将类名改为 <strong>say</strong>，保存后回到编辑器：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;say&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> say</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deltaTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>同样的脚本文件名 <code>hello</code> 不会变化。节点 <strong>Node</strong> 里的组件名称变为 <strong>say</strong>。</p><blockquote><p><strong>注意</strong>：这里需要记得将装饰器 <code>@ccclass(&#39;say_hello&#39;)</code> 中的内容也改为 <code>@ccclass(&#39;say&#39;)</code>。</p></blockquote><p><img src="`+r+'" alt="modify script"></p><h2 id="脚本模板" tabindex="-1"><a id="custom-script-template">脚本模板</a> <a class="header-anchor" href="#脚本模板" aria-label="Permalink to &quot;&lt;a id=&quot;custom-script-template&quot;&gt;脚本模板&lt;/a&gt;&quot;">​</a></h2><p>从编辑器 v3.3 开始，支持在项目中管理不同的脚本模板。</p><ul><li><p>新建一个项目，新项目不会自动创建自定义脚本模板所在的目录 <code>.creator/asset-template/typescript</code>。</p></li><li><p>可以手动创建上述目录。也可以通过 <strong>资源管理器</strong> 的右击菜单里的菜单，点击后才生成目录。</p><p><img src="'+o+`" alt="custom script"></p></li></ul><p>默认的 <code>NewComponent</code> 脚本模板仍在引擎内置资源目录下 <code>resources\\3d\\engine\\editor\\assets\\default_file_content\\ts</code>。 文件代码为：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;%UnderscoreCaseClassName%&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;%</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnderscoreCaseClassName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deltaTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * COMMENTS_GENERATE_IGNORE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Use &quot;COMMENTS_GENERATE_IGNORE&quot; tag if you do not want later created scripts to contain these comments.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Predefined Variables</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * You can use predefined variables below to setup your scripting preference. For example, whether to use camel case style.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%UnderscoreCaseClassName%&gt;, class name in underscore format, like &#39;new_component&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%CamelCaseClassName%&gt;, class name in camel format, like &#39;NewComponent&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%Author%&gt;, Who create this file</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%DateTime%&gt;, when create this file</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%FileBasename%&gt;, creating file name with extension</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%FileBasenameNoExtension%&gt;, creating file name without extension</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%URL%&gt;, url of this file in COCOS ASSET URL format</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%ManualUrl%&gt;, url of office help document, like &#39;https://docs.cocos.com/creator/manual/en/&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Example:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  @ccclass(&#39;&lt;%UnderscoreCaseClassName%&gt;&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  export class &lt;%UnderscoreCaseClassName%&gt; extends Component {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // class member could be defined like this.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    dummy = &#39;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Use &#39;property&#39; decorator if your want the member to be serializable.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @property</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    serializableDummy = 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    start () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Your initialization goes here.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    update (deltaTime: number) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Your update function goes here.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Learn more about scripting: &lt;%ManualUrl%&gt;scripting/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Learn more about CCClass: &lt;%ManualUrl%&gt;scripting/decorator.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Learn more about life-cycle callbacks: &lt;%ManualUrl%&gt;scripting/life-cycle-callbacks.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><blockquote><p><strong>注意</strong>：</p><ol><li><p>脚本模板中大量的注释并不会生成到脚本文件中，因为在注释里我们使用了关键词标注 <code>COMMENTS_GENERATE_IGNORE</code> 只要此关键词在某段注释里，那么生成脚本文件就会将该段注释忽略掉。</p></li><li><p><code>Predefined Variables</code> 我们准备了一些预制的变量，在生成脚本文件的时候可以作为辅助的信息，比如作者 <code>&lt;%Author%&gt;</code>。</p></li><li><p>特别准备了两种类名格式：<code>&lt;%UnderscoreCaseClassName%&gt;</code> 和 <code>&lt;%CamelCaseClassName%&gt;</code>。名称前后仍可以添加自定义的前缀或后缀，如加个 <code>Robot</code> 前缀 <code>Robot&lt;%CamelCaseClassName%&gt;</code>。</p></li><li><p>通过点击右击菜单的方式，项目自定义脚本模板目录下会自动生成一个文档网址快捷链接，双击即会调出浏览器打开指定网页：<code>Custom Script Template Help Documentation</code>。</p><p><img src="`+c+'" alt="custom script help"></p></li></ol></blockquote><h3 id="添加脚本模板" tabindex="-1">添加脚本模板 <a class="header-anchor" href="#添加脚本模板" aria-label="Permalink to &quot;添加脚本模板&quot;">​</a></h3><p>我们从复制上述内置 <code>NewComponent</code> 模板的代码进行修改，类名为驼峰格式，加 <code>Robot</code> 前缀，文件另存为无后缀名的文件 <code>CustomComponent</code>，保存在项目自定义脚本模板的路径下，即 <code>.creator/asset-template/typescript/CustomComponent</code>。</p><p><img src="'+d+`" alt="custom script file"></p><p><code>CustomComponent</code> 模板内容修改为：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%UnderscoreCaseClassName%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%CamelCaseClassName%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%Author%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%DateTime%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%FileBasename%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%FileBasenameNoExtension%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%URL%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;%ManualUrl%&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Robot&lt;%CamelCaseClassName%&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Robot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;%</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CamelCaseClassName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">deltaTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>那么最后的我们新建一个 <code>wake up</code> 脚本资源看看，效果如下图：</p><p><img src="`+g+'" alt="custom script menu"></p><p><img src="'+E+'" alt="custom script result"></p>',46),A=[m];function C(D,u,F,_,b,B){return a(),i("div",null,A)}const T=s(y,[["render",C]]);export{N as __pageData,T as default};