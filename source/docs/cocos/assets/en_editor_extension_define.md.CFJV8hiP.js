import{_ as i,c as s,o as e,a4 as a}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"Definition of Extension","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/extension/define.md","filePath":"en/editor/extension/define.md","lastUpdated":1712305443000}'),t={name:"en/editor/extension/define.md"},n=a(`<h1 id="definition-of-extension" tabindex="-1">Definition of Extension <a class="header-anchor" href="#definition-of-extension" aria-label="Permalink to &quot;Definition of Extension&quot;">​</a></h1><p>The extension package needs to have all the features and some basic information predefined in the <code>package.json</code> file, as follows.</p><div class="language-JSON5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;package_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;first-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;tilte&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:first-panel.description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cocos Creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;editor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=3.4.2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;panels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -w&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="package-version" tabindex="-1">package_version <a class="header-anchor" href="#package-version" aria-label="Permalink to &quot;package_version&quot;">​</a></h2><p>Type {number} Required</p><p>The version number of the extension, which is used to submit the version verification of the extension, as well as some upgrades of the extension itself, and data migration as a basis for comparison.</p><h2 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h2><p>Type {string} Required</p><p>The version number of the extension, mainly used for display, if you want to make logical judgments, <code>package_version</code> is recommended.</p><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h2><p>Type {string} Required</p><p>The name of the extension, this name should correspond to the extension folder.</p><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><p>Type {string} Optional</p><p>The title of the extension, when <code>title</code> is configured, <code>title</code> will be used when the extension needs to be displayed, supports <a href="./i18n">Multilingual System (i18n)</a> configuration.</p><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><p>Type {string} Optional</p><p>The description of the extension, a brief overview of the extension&#39;s functionality. Supports <a href="./i18n">Multilingual System (i18n)</a> for multilingual syntax.</p><h2 id="author" tabindex="-1">author <a class="header-anchor" href="#author" aria-label="Permalink to &quot;author&quot;">​</a></h2><p>type {string} optional</p><p>The name of the author of the extension, which will be shown in the &quot;Extension Manager&quot;.</p><h2 id="editor" tabindex="-1">editor <a class="header-anchor" href="#editor" aria-label="Permalink to &quot;editor&quot;">​</a></h2><p>type {string} Optional</p><p>Description of the editor version supported by the extension, conforming to the <a href="https://semver.org/" target="_blank" rel="noreferrer"><code>semver</code> semantic version control specification</a>.</p><h2 id="main" tabindex="-1">main <a class="header-anchor" href="#main" aria-label="Permalink to &quot;main&quot;">​</a></h2><p>type {string} Optional</p><p>A relative path to a js file that defines the function entry file. When the extension starts, the js file pointed to by the <code>main</code> field will be executed and the corresponding method will be triggered or executed according to the flow.</p><h2 id="panels" tabindex="-1">panels <a class="header-anchor" href="#panels" aria-label="Permalink to &quot;panels&quot;">​</a></h2><p>Type {[name: string]: PanelInfo} Optional</p><p>The panel information defined within the extension. You can use <code>Editor.Panel.open(&#39;hello-world.list&#39;);</code> to open the defined panel. For details, please refer to <a href="./panel">Extension Panel</a>.</p><h2 id="contributions" tabindex="-1">contributions <a class="header-anchor" href="#contributions" aria-label="Permalink to &quot;contributions&quot;">​</a></h2><p>type {[name: string]: any} optional</p><p><code>contributions</code> provides the ability to interact with the editor&#39;s feature system, see the documentation <a href="./contributions">Extend existing functionality</a>.</p><h2 id="scripts" tabindex="-1">scripts <a class="header-anchor" href="#scripts" aria-label="Permalink to &quot;scripts&quot;">​</a></h2><p>type {[name: string]: any} required</p><p>Extends the executable command line.</p>`,36),o=[n];function h(l,p,r,d,k,E){return e(),s("div",null,o)}const g=i(t,[["render",h]]);export{u as __pageData,g as default};