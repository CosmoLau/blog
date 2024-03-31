import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const d=JSON.parse('{"title":"加载与预加载","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/preload-load.md","filePath":"zh/manual/asset/preload-load.md"}'),o={name:"zh/manual/asset/preload-load.md"},p=l(`<h1 id="加载与预加载" tabindex="-1">加载与预加载 <a class="header-anchor" href="#加载与预加载" aria-label="Permalink to &quot;加载与预加载&quot;">​</a></h1><blockquote><p>文：Santy-Wang，Xunyi</p></blockquote><p>为了尽可能缩短下载时间，很多游戏都会使用预加载。Asset Manager 中的大部分加载接口包括 <code>load</code>、<code>loadDir</code>、<code>loadScene</code> 都有其对应的预加载版本。加载接口与预加载接口所用的参数是完全一样的，两者的区别在于：</p><ol><li>预加载只会下载资源，不会对资源进行解析和初始化操作。</li><li>预加载在加载过程中会受到更多限制，例如最大下载并发数会更小。</li><li>预加载的下载优先级更低，当多个资源在等待下载时，预加载的资源会放在最后下载。</li><li>因为预加载没有做任何解析操作，所以当所有的预加载完成时，不会返回任何可用资源。</li></ol><p>相比 Creator v2.4 以前的版本，以上优化手段充分降低了预加载的性能损耗，确保了游戏体验顺畅。开发者可以充分利用游戏过程中的网络带宽缩短后续资源的加载时间。</p><p>因为预加载没有去解析资源，所以需要在预加载完成后配合加载接口进行资源的解析和初始化，来完成资源加载。例如：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> SpriteFrame)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// wait for while </span></span>
<span class="line"><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">images/background/spriteFrame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> SpriteFrame</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">spriteFrame</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Sprite</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong>注意</strong>：加载不需要等到预加载完成后再调用，开发者可以在任何时候进行加载。正常加载接口会直接复用预加载过程中已经下载好的内容，缩短加载时间。</p>`,8),e=[p];function t(r,c,F,D,y,i){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
