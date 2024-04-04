import{_ as a,c as s,o as t,a5 as e}from"./chunks/framework.CqnjdYks.js";const u=JSON.parse('{"title":"App","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/api/app.md","filePath":"zh/manual/editor/extension/api/app.md"}'),i={name:"zh/manual/editor/extension/api/app.md"},p=e('<h1 id="app" tabindex="-1">App <a class="header-anchor" href="#app" aria-label="Permalink to &quot;App&quot;">​</a></h1><p>Creator 基本信息</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="dev" tabindex="-1">dev <a class="header-anchor" href="#dev" aria-label="Permalink to &quot;dev&quot;">​</a></h3><p>• <strong>dev</strong>: <code>boolean</code></p><p>是否是开发模式</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Editor.App.dev;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h3 id="home" tabindex="-1">home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;home&quot;">​</a></h3><p>• <strong>home</strong>: <code>string</code></p><p>Creator 的主目录，存放一些临时文件和配置信息</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Editor.App.home;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;C:\\\\Users\\\\Administrator\\\\.CocosCreator_Develop&quot;</span></span></code></pre></div><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>Creator 程序所在文件夹</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Editor.App.path;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;D:\\\\Program\\\\CocosEditor\\\\Creator\\\\3.4.0\\\\resources\\\\app.asar&quot;</span></span></code></pre></div><h3 id="temp" tabindex="-1">temp <a class="header-anchor" href="#temp" aria-label="Permalink to &quot;temp&quot;">​</a></h3><p>• <strong>temp</strong>: <code>string</code></p><p>获取当前编辑器的临时缓存目录</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Editor.App.temp;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;C:\\\\Users\\\\ADMINI~1\\\\AppData\\\\Local\\\\Temp\\\\CocosCreator\\\\3.4.0&quot;</span></span></code></pre></div><h3 id="useragent" tabindex="-1">userAgent <a class="header-anchor" href="#useragent" aria-label="Permalink to &quot;userAgent&quot;">​</a></h3><p>• <strong>userAgent</strong>: <code>string</code></p><p>Creator 使用的用户代理信息</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.App.userAgent;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) CocosCreator/3.4.0 Chrome/91.0.4472.106 Electron/13.1.4 Safari/537.36&quot;</span></span></code></pre></div><h3 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h3><p>• <strong>version</strong>: <code>string</code></p><p>Creator 版本号</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.App.version;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;3.4.0&quot;</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="quit" tabindex="-1">quit <a class="header-anchor" href="#quit" aria-label="Permalink to &quot;quit&quot;">​</a></h3><p>▸ <strong>quit</strong>(): <code>void</code></p><p>正常退出 Creator，会逐个询问所有扩展，当所有扩展都允许关闭后，才会开始关闭流程</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Editor.App.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">quit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>',32),o=[p];function n(r,h,l,d,c,k){return t(),s("div",null,o)}const m=a(i,[["render",n]]);export{u as __pageData,m as default};
