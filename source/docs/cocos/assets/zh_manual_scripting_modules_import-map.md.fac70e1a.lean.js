import{_ as s,v as a,b as o,R as n}from"./chunks/framework.5ffcbaff.js";const C=JSON.parse('{"title":"导入映射（实验性）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/scripting/modules/import-map.md","filePath":"zh/manual/scripting/modules/import-map.md"}'),l={name:"zh/manual/scripting/modules/import-map.md"},p=n(`<h1 id="导入映射-实验性" tabindex="-1">导入映射（实验性） <a class="header-anchor" href="#导入映射-实验性" aria-label="Permalink to &quot;导入映射（实验性）&quot;">​</a></h1><p>Cocos Creator 从 v3.3 开始实验性支持 <a href="https://github.com/WICG/import-maps" target="_blank" rel="noreferrer">导入映射（Import maps）</a>。</p><p>导入映射控制 TypeScript/JavaScript 的导入行为，尤其是可指定对 <a href="./spec.html#裸说明符">裸说明符</a> 的解析。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>通过编辑器顶部菜单栏的 <strong>项目 -&gt; 项目设置 -&gt; 脚本</strong> 中的 <strong>导入映射</strong> 项即可指定导入映射文件的路径。设置完成后，导入映射功能开启，使用的导入映射将从指定的文件中读取。</p><blockquote><p><strong>注意</strong>：导入映射文件的路径是至关重要的，因为导入映射中的所有相对路径都是相对于导入映射文件本身路径。</p></blockquote><h3 id="别名映射" tabindex="-1">别名映射 <a class="header-anchor" href="#别名映射" aria-label="Permalink to &quot;别名映射&quot;">​</a></h3><p>若有一个模块被项目中所有的模块所使用，而开发者并不希望其他模块以相对路径的方式引用它，而是为它起一个别名，那么便可以选择使用导入映射。</p><p>例如，某个模块真实的绝对路径为 <code>&lt;项目&gt;/assets/lib/foo.ts</code>，我们希望所有模块可以以 <code>import {} from &#39;foo&#39;;</code> 的方式来引用它，操作步骤如下：</p><p>首先，在项目目录下创建一个导入映射文件 <code>import-map.json</code>：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// import-map.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">imports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/lib/foo.ts</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li><code>&quot;imports&quot;</code>：指定应用到所有模块的 <strong>顶级映射</strong>（Top level imports）。</li><li><code>&quot;foo&quot;</code>：指定我们要映射的模块名。</li><li><code>&quot;./assets/lib/foo.ts&quot;</code>：指定如何映射 <code>&quot;foo&quot;</code>。<code>&quot;./assets/lib/foo.ts&quot;</code> 是相对路径，<strong>导入映射中的所有相对路径都是相对于导入映射文件本身的位置的</strong>，因此 <code>./assets/lib/foo.ts</code> 将解析为绝对路径 <code>&lt;项目&gt;/assets/lib/foo.ts</code>。</li></ul><p>然后在任意模块中使用以下方式引用模块时，<code>&#39;foo&#39;</code> 都将解析为模块 <code>&lt;项目&gt;/assets/lib/foo.ts</code>：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="目录映射" tabindex="-1">目录映射 <a class="header-anchor" href="#目录映射" aria-label="Permalink to &quot;目录映射&quot;">​</a></h3><p>导入映射还允许映射指定目录下的所有模块。</p><p>例如，要映射项目 <code>assets/lib/bar-1.2.3</code> 目录下的所有模块，则导入映射的 json 文件如下所示：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// import-map.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">imports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">bar/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/lib/bar-1.2.3/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>除了 <code>&quot;bar/&quot;</code> 指定的是我们要映射的目录，其余的与 <strong>别名映射</strong> 一致。</p><p>这样项目中的模块都能以 <code>import {} from &#39;bar/...&#39;</code> 的形式来引用目录 <code>bar-1.2.3</code> 中的模块。</p><p>例如：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> baz </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar/baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> quux </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar/qux/quux</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>&#39;bar/baz&#39;</code> 将解析为模块 <code>&lt;项目&gt;/assets/lib/bar-1.2.3/baz.ts</code><br><code>&#39;bar/qux/quux&#39;</code> 将解析为模块 <code>&lt;项目&gt;/assets/lib/bar-1.2.3/qux/quux.ts</code>。</p><h3 id="typescript-配置" tabindex="-1">TypeScript 配置 <a class="header-anchor" href="#typescript-配置" aria-label="Permalink to &quot;TypeScript 配置&quot;">​</a></h3><p>TypeScript 并不支持导入映射，在使用时可能会导致出现找不到模块的报错，所以我们需要通过额外的配置来告诉 TypeScript 类型检查器额外的模块解析信息。</p><p>例如上述中的两个例子，可以在项目目录下的 <code>tsconfig.json</code> 文件中配置 <a href="https://www.typescriptlang.org/tsconfig#paths" target="_blank" rel="noreferrer">paths</a> 字段（若没有该字段，可自行补上），如下所示：</p><div class="language-json5"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">// 注意：这里的相对路径是相对于 tsconfig.json 所在的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">// 由于本例中 tsconfig.json 和 import-map.json 位于同一目录，因此这里的相对路径也相似。</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/lib/foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/lib/bar-1.2.3/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>更多关于导入映射的功能，请参考 <a href="https://github.com/WICG/import-maps" target="_blank" rel="noreferrer">导入映射</a>。</p><h2 id="支持情况" tabindex="-1">支持情况 <a class="header-anchor" href="#支持情况" aria-label="Permalink to &quot;支持情况&quot;">​</a></h2><p>Cocos Creator 支持 <a href="https://wicg.github.io/import-maps/" target="_blank" rel="noreferrer">Import Maps Draft Community Group Report, 12 January 2021</a> 中的所有功能。</p>`,30),t=[p];function e(c,r,i,D,y,F){return a(),o("div",null,t)}const u=s(l,[["render",e]]);export{C as __pageData,u as default};
