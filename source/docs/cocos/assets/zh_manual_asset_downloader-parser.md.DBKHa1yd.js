import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CqnjdYks.js";const c=JSON.parse('{"title":"下载与解析","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/downloader-parser.md","filePath":"zh/manual/asset/downloader-parser.md"}'),n={name:"zh/manual/asset/downloader-parser.md"},e=t(`<h1 id="下载与解析" tabindex="-1">下载与解析 <a class="header-anchor" href="#下载与解析" aria-label="Permalink to &quot;下载与解析&quot;">​</a></h1><blockquote><p>文：Santy-Wang、Xunyi</p></blockquote><p>Asset Manager 底层使用了多条加载管线来加载和解析资源，每条管线中都使用了 <code>downloader</code> 和 <code>parser</code> 模块，也就是下载器和解析器。开发者可以通过 <code>assetManager.downloader</code> 和 <code>assetManager.parser</code> 来访问。</p><h2 id="下载器" tabindex="-1">下载器 <a class="header-anchor" href="#下载器" aria-label="Permalink to &quot;下载器&quot;">​</a></h2><p>下载器是一个全局单例，包括 <strong>下载重试</strong>、<strong>下载优先级排序</strong> 和 <strong>下载并发数限制</strong> 等功能。</p><h3 id="下载重试" tabindex="-1">下载重试 <a class="header-anchor" href="#下载重试" aria-label="Permalink to &quot;下载重试&quot;">​</a></h3><p>下载器如果下载资源失败，会自动重试下载，开发者可以通过 <code>maxRetryCount</code> 和 <code>retryInterval</code> 属性来设置重试下载的相关参数。</p><ul><li><p><code>maxRetryCount</code> 属性用于设置重试下载的最大次数，默认 3 次。若不需要重试下载，可设置为 0，则下载失败时会立即返回错误。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.downloader.maxRetryCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li><li><p><code>retryInterval</code> 属性用于设置重试下载的间隔时间，默认 2000 ms。若设置为 4000 ms，则下载失败时会先等待 4000 ms，然后再重新下载。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.downloader.retryInterval </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li></ul><h3 id="下载优先级" tabindex="-1">下载优先级 <a class="header-anchor" href="#下载优先级" aria-label="Permalink to &quot;下载优先级&quot;">​</a></h3><p>Creator 开放了四个下载优先级，下载器将会按照优先级 <strong>从大到小</strong> 的顺序来下载资源。</p><table><thead><tr><th style="text-align:left;">资源</th><th style="text-align:left;">优先级</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">脚本或 Asset Bundle</td><td style="text-align:left;">2</td><td style="text-align:left;">优先级最高</td></tr><tr><td style="text-align:left;">场景资源</td><td style="text-align:left;">1</td><td style="text-align:left;">包括场景中的所有资源，确保场景能够快速加载</td></tr><tr><td style="text-align:left;">开发者手动加载的资源</td><td style="text-align:left;">0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">预加载资源</td><td style="text-align:left;">-1</td><td style="text-align:left;">优先级最低，因为预加载更多是提前加载资源，时间要求相对较为宽松</td></tr></tbody></table><p>开发者也可以通过可选参数 <code>priority</code> 传入一个优先级来覆盖默认设置，从而控制加载顺序。详情可参考下方的“通过可选参数设置”部分。</p><h3 id="设置下载并发数" tabindex="-1">设置下载并发数 <a class="header-anchor" href="#设置下载并发数" aria-label="Permalink to &quot;设置下载并发数&quot;">​</a></h3><p>开发者可以通过 <code>maxConcurrency</code> 和 <code>maxRequestsPerFrame</code> 来设置下载器的最大下载并发数等限制。</p><ul><li><p><code>maxConcurrency</code> 用于设置下载的最大并发连接数，若当前连接数超过限制，将会进入等待队列。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.downloader.maxConcurrency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li><li><p><code>maxRequestsPerFrame</code> 用于设置每帧发起的最大请求数，从而均摊发起请求的 CPU 开销，避免单帧过于卡顿。如果此帧发起的连接数已经达到上限，将延迟到下一帧发起请求。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.downloader.maxRequestsPerFrame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li></ul><p>另外，<code>downloader</code> 中使用了一个 <code>jsb.Downloader</code> 类的实例，用于在 <strong>原生平台</strong> 从服务器上下载资源。<code>jsb.Downloader</code> 与 Web 的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer">XMLHttpRequest</a> 类似。目前 <code>jsb.Downloader</code> 类的实例的下载并发数限制默认为 <strong>32</strong>，超时时长默认为 <strong>30s</strong>，如果需要修改默认值，可以在 <code>main.js</code> 中修改：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bundleVers: settings.bundleVers,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    remoteBundles: settings.remoteBundles,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server: settings.server,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    jsbDownloaderMaxTasks: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最大并发数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    jsbDownloaderTimeout: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 超时时长</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="解析器" tabindex="-1">解析器 <a class="header-anchor" href="#解析器" aria-label="Permalink to &quot;解析器&quot;">​</a></h2><p>解析器用于将文件解析为引擎可识别的资源，开发者可以通过 <code>assetManager.parser</code> 来访问。</p><h2 id="通过可选参数设置" tabindex="-1">通过可选参数设置 <a class="header-anchor" href="#通过可选参数设置" aria-label="Permalink to &quot;通过可选参数设置&quot;">​</a></h2><p>在下载器和解析器中的设置都是全局设置，若开发者需要单独设置某个资源，可以通过 <strong>可选参数</strong> 传入专有设置来覆盖全局设置，例如：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadAny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, maxRetryCount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, maxConcurrency: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, callback);</span></span></code></pre></div><p>具体内容可参考文档 <a href="./options.html">可选参数</a>。</p><h2 id="预设" tabindex="-1">预设 <a class="header-anchor" href="#预设" aria-label="Permalink to &quot;预设&quot;">​</a></h2><p>Creator 预先对正常加载、预加载、场景加载、Asset Bundle 加载、远程资源加载、脚本加载这 6 种加载情况的下载/解析参数做了预设，其中预加载因为性能考虑，所以限制较大，最大并发数更小。如下所示：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;preload&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxConcurrency: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxRequestsPerFrame: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;scene&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxConcurrency: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxRequestsPerFrame: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;bundle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxConcurrency: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxRequestsPerFrame: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;remote&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        maxRetryCount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>开发者可以通过 <code>assetManager.presets</code> 对每种预设进行修改，使用时需要传入预设的名称来访问对应的参数项。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改预加载的预设优先级为 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> preset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> assetManager.presets.preload;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">preset.priority </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>也可以增加自定义预设，并通过可选参数 <code>preset</code> 传入。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义预设，并通过可选参数 preset 传入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.presets.mypreset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {maxConcurrency: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, maxRequestsPerFrame: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadAny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {preset: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mypreset&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, callback);</span></span></code></pre></div><p><strong>注意</strong>：通过可选参数、预设以及下载器/解析器本身，均能设置下载和解析过程中的相关参数（例如下载并发数、重试次数等）。当使用多种方式设置了同一个参数时，引擎会按照 <strong>可选参数 &gt; 预设 &gt; 下载器/解析器</strong> 的先后顺序进行选取使用。也就是说，如果引擎在可选参数中找不到相关设置时，会去预设中查找，如果预设中也找不到时，才会去下载器/解析器中查找。</p><h2 id="自定义处理方法" tabindex="-1">自定义处理方法 <a class="header-anchor" href="#自定义处理方法" aria-label="Permalink to &quot;自定义处理方法&quot;">​</a></h2><p>下载器和解析器都拥有一张注册表，在使用 <code>downloader</code> 或 <code>parser</code> 时，下载器和解析器会根据传入的后缀名称去注册表中查找对应的下载方式和解析方式，并将参数传入对应的处理方式之中。当开发者需要修改目前格式的处理方式，或者在项目中增加一个自定义格式时，可以通过注册自定义的处理方式来实现扩展引擎。下载器与解析器都提供了 <code>register</code> 接口用于注册处理方法，使用方式如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.downloader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.myformat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 下载对应资源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.myformat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 解析下载完成的文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>自定义的处理方法需要接收三个参数：</p><ul><li>第一个参数为处理对象，在下载器中是 url，在解析器中是文件。</li><li>第二个参数是可选参数，可选参数可以在调用加载接口时指定。</li><li>第三个参数是完成回调，当注册完成处理方法时，需要调用该函数，并传入错误信息或结果。</li></ul><p>在注册了处理方法之后，当下载器/解析器遇到带相同扩展名的请求时，会使用对应的处理方式，这些自定义的处理方式将供全局所有加载管线使用。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assetManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadAny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://example.com/myAsset.myformat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, callback);</span></span></code></pre></div><p>需要注意的是，处理方法可以接收传入的可选参数，开发者可以利用可选参数实现自定义扩展，具体内容可查看文档 <a href="./options.html#扩展引擎">可选参数</a>。</p>`,39),l=[e];function p(h,k,r,d,E,o){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
