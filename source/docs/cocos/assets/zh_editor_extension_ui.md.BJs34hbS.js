import{_ as e,c as a,o,a4 as i}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/ui-component-menu.r8w9LQP9.png",l="/docs/cocos/assets/ui-component.BFW0Bwv4.png",f=JSON.parse('{"title":"UI 组件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/ui.md","filePath":"zh/editor/extension/ui.md","lastUpdated":1712305443000}'),c={name:"zh/editor/extension/ui.md"},r=i('<h1 id="ui-组件" tabindex="-1">UI 组件 <a class="header-anchor" href="#ui-组件" aria-label="Permalink to &quot;UI 组件&quot;">​</a></h1><h2 id="ui-组件面板" tabindex="-1">UI 组件面板 <a class="header-anchor" href="#ui-组件面板" aria-label="Permalink to &quot;UI 组件面板&quot;">​</a></h2><p>为了方便布局，编辑器内提供了许多预设的 UI 组件。</p><p>1、找到编辑器顶部主菜单中的 <strong>开发者 -&gt; UI 组件</strong> 查看。</p><p><img src="'+t+'" alt="ui-component-menu"></p><p>2、点击后可打开如下的面板：</p><p><img src="'+l+'" alt="ui component"></p><p>该面板由两部分组成，左边栏列出了目前引擎支持的 UI 种类，右侧栏提供了部分示例，开发者可按需使用。</p><h2 id="在-html-中使用" tabindex="-1">在 HTML 中使用 <a class="header-anchor" href="#在-html-中使用" aria-label="Permalink to &quot;在 HTML 中使用&quot;">​</a></h2><p>在 HTML 使用 UI 组件非常简单，只需要将对应代码复制到你的 HTML 文件中，即可使用。</p><h2 id="在扩展面板时使用" tabindex="-1">在扩展面板时使用 <a class="header-anchor" href="#在扩展面板时使用" aria-label="Permalink to &quot;在扩展面板时使用&quot;">​</a></h2><p>在扩展编辑器面板时，可以使用 json 方式进行配置。理论上所有带 <code>value</code> 属性的 UI 组件都可以用于扩展编辑器面板，下面列出常见的几种：</p><h3 id="输入框" tabindex="-1">输入框 <a class="header-anchor" href="#输入框" aria-label="Permalink to &quot;输入框&quot;">​</a></h3><ul><li>组件：<code>ui-num-input</code></li><li>无额外属性</li></ul><h3 id="滑动条" tabindex="-1">滑动条 <a class="header-anchor" href="#滑动条" aria-label="Permalink to &quot;滑动条&quot;">​</a></h3><ul><li>组件：<code>ui-slider</code></li><li><code>attributes</code> 组件属性 <ul><li><code>min</code> 最小值</li><li><code>max</code> 最大值</li><li><code>step</code> 步长</li></ul></li></ul><h3 id="复选框" tabindex="-1">复选框 <a class="header-anchor" href="#复选框" aria-label="Permalink to &quot;复选框&quot;">​</a></h3><ul><li>组件：<code>ui-checkbox</code></li><li>无额外属性</li></ul><h3 id="选择列表" tabindex="-1">选择列表 <a class="header-anchor" href="#选择列表" aria-label="Permalink to &quot;选择列表&quot;">​</a></h3><ul><li>组件 <code>ui-select</code></li><li><code>items</code> 列表元素 <ul><li><code>value</code> 值</li><li><code>label</code> 显示标签</li></ul></li></ul><p>具体使用示例请参考文档 <a href="./contributions-preferences">自定义偏好设置面板</a> 和 <a href="./contributions-project">自定义项目设置面板</a>。</p>',21),n=[r];function d(s,u,h,p,m,_){return o(),a("div",null,n)}const q=e(c,[["render",d]]);export{f as __pageData,q as default};
