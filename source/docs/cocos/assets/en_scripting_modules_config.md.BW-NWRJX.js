import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.uQk9_EO2.js";const m=JSON.parse('{"title":"How to Get npm Packages","description":"","frontmatter":{},"headers":[],"relativePath":"en/scripting/modules/config.md","filePath":"en/scripting/modules/config.md","lastUpdated":1712305443000}'),n={name:"en/scripting/modules/config.md"},t=i(`<h1 id="how-to-get-npm-packages" tabindex="-1">How to Get npm Packages <a class="header-anchor" href="#how-to-get-npm-packages" aria-label="Permalink to &quot;How to Get npm Packages&quot;">​</a></h1><h2 id="installing-node-js" tabindex="-1">Installing Node.js <a class="header-anchor" href="#installing-node-js" aria-label="Permalink to &quot;Installing Node.js&quot;">​</a></h2><p>The npm package management tool <code>npm</code> is included in the Node.js distribution. It is ready to use after installing Node.js.</p><p>To confirm if the installation of <code>npm</code> was successful issue the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible output.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6.14.9</span></span></code></pre></div><h2 id="installing-npm-packages" tabindex="-1">Installing npm packages <a class="header-anchor" href="#installing-npm-packages" aria-label="Permalink to &quot;Installing npm packages&quot;">​</a></h2><p>To install an <code>npm</code> package, execute the following command in the project root directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install --save protobufjs</span></span></code></pre></div><p>The above command will install the <code>npm</code> package <code>protobufjs</code> into the <code>/node_modules</code> directory and write the dependencies for this package to the file <code>package.json</code>.</p><p>The <code>package.json</code> file is an <code>npm</code> manifest file and needs to be included in version control.</p><blockquote><p><strong>Note</strong>: Cocos Creator recommends that the automatically generated <code>package-lock.json</code> be included in version control to ensure that the same version of the package is installed between multiple developers.</p></blockquote><p>The <code>/node_modules</code> directory is generally not included in version control.</p><p>Once the dependencies have been written into the <code>package.json</code>, the following commands can be executed directly to reinstall or install in other environments:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install</span></span></code></pre></div><h2 id="expansion-using-npm-mirrors" tabindex="-1">Expansion: Using npm mirrors <a class="header-anchor" href="#expansion-using-npm-mirrors" aria-label="Permalink to &quot;Expansion: Using npm mirrors&quot;">​</a></h2><p><code>npm</code> reads and downloads packages from the <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">official npmjs source</a> by default. Some countries or regions may have network issues that cause the installation to fail or install too slowly, it is recommended to fix this by switching mirrors.</p><p>First, install the <code>npm</code> package <a href="https://www.npmjs.com/package/nrm" target="_blank" rel="noreferrer">nrm</a> globally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm install -g nrm</span></span></code></pre></div><blockquote><p><strong>Note</strong>: <code>-g</code> means global, the npm package will be installed directly on the current computer. Once it is done, there is no need to do it again.</p></blockquote><p>To view valid npm images:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npx nrm ls</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Possible output.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * npm -------- https://registry.npmjs.org/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yarn ------- https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cnpm ------- http://r.cnpmjs.org/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># taobao ----- https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nj --------- https://registry.nodejitsu.com/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npmMirror -- https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># edunpm ----- http://registry.enpmjs.org/</span></span></code></pre></div><p>Choose the appropriate mirror according to the current region. The <code>taobao</code> mirror is a good choice for users in mainland China. Execute the following command to switch mirrors.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npx nrm use taobao </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or any suitable mirror</span></span></code></pre></div><blockquote><p><strong>Note</strong>: this command is also global. Optionally, to switch only the mirror of the current project, see the <a href="https://www.npmjs.com/package/nrm#usage" target="_blank" rel="noreferrer">nrm options</a> documentation.</p></blockquote><p>The mirror name <code>npm</code> is the name of the official source, and can be switched back to the official source with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npx nrm use npm</span></span></code></pre></div>`,26),o=[t];function l(p,r,c,h,d,g){return a(),e("div",null,o)}const u=s(n,[["render",l]]);export{m as __pageData,u as default};
