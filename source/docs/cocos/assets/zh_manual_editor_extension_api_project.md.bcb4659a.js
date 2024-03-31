import{_ as a,v as s,b as o,R as t}from"./chunks/framework.5ffcbaff.js";const u=JSON.parse('{"title":"Project","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/api/project.md","filePath":"zh/manual/editor/extension/api/project.md"}'),e={name:"zh/manual/editor/extension/api/project.md"},n=t('<h1 id="project" tabindex="-1">Project <a class="header-anchor" href="#project" aria-label="Permalink to &quot;Project&quot;">​</a></h1><p>当前打开的项目基本信息</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>当前项目名称(取自 package.json)</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> projectName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Hello World 3.4.0&quot;</span></span></code></pre></div><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>当前项目路径</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> projectPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// &quot;E:\\\\workSpace\\\\Hello World 3.4.0&quot;</span></span></code></pre></div><h3 id="tmpdir" tabindex="-1">tmpDir <a class="header-anchor" href="#tmpdir" aria-label="Permalink to &quot;tmpDir&quot;">​</a></h3><p>• <strong>tmpDir</strong>: <code>string</code></p><p>当前项目临时文件夹</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> projectTmpDir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tmpDir</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// &quot;E:\\\\workSpace\\\\Hello World 3.4.0\\\\temp&quot;</span></span></code></pre></div><h3 id="uuid" tabindex="-1">uuid <a class="header-anchor" href="#uuid" aria-label="Permalink to &quot;uuid&quot;">​</a></h3><p>• <strong>uuid</strong>: <code>string</code></p><p>当前项目 uuid</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> projectUUID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Project</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">uuid</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// &quot;7aa7c089-8e53-4611-8689-98b69ab28e22&quot;</span></span></code></pre></div>',19),p=[n];function l(r,c,i,d,y,D){return s(),o("div",null,p)}const C=a(e,[["render",l]]);export{u as __pageData,C as default};