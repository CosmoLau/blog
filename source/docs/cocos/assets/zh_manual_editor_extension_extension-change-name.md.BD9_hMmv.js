import{_ as s,c as a,o as e,a5 as t}from"./chunks/framework.CqnjdYks.js";const i="/docs/cocos/assets/extension-hello-world.C4Hq8a8F.png",m=JSON.parse('{"title":"扩展改名","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/extension-change-name.md","filePath":"zh/manual/editor/extension/extension-change-name.md"}'),n={name:"zh/manual/editor/extension/extension-change-name.md"},o=t(`<h1 id="扩展改名" tabindex="-1">扩展改名 <a class="header-anchor" href="#扩展改名" aria-label="Permalink to &quot;扩展改名&quot;">​</a></h1><h2 id="修改显示名称" tabindex="-1">修改显示名称 <a class="header-anchor" href="#修改显示名称" aria-label="Permalink to &quot;修改显示名称&quot;">​</a></h2><p>如果想对扩展改名，只需修改 <code>package.json</code> 文件中的 <code>name</code> 字段即可。代码示例如下：</p><div class="language-JSON5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;name&quot;: &quot;simple-1649426645745&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span></span></code></pre></div><p>像上面一样将 <code>name</code> 字段改为 &quot;hello-world&quot; 并在扩展管理器面板刷新扩展，就可以看到扩展的名称改成了 <strong>hello-world</strong>。</p><p><img src="`+i+`" alt="extension"></p><h2 id="修改扩展文件夹名称" tabindex="-1">修改扩展文件夹名称 <a class="header-anchor" href="#修改扩展文件夹名称" aria-label="Permalink to &quot;修改扩展文件夹名称&quot;">​</a></h2><p>如果想连同文件夹名称一并修改，需要在文件夹修改后重启 Cocos Creator，才能让修改过文件夹名称的扩展重新生效。</p><p>如果修改了文件夹名称，<strong>i18n</strong> 多语言相关的字符串路径也需要一并修改，如下所示：</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;description&quot;: &quot;i18n:simple-1649426645745.description&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:hello-world.description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div>`,10),l=[o];function h(p,r,d,c,u,k){return e(),a("div",null,l)}const _=s(n,[["render",h]]);export{m as __pageData,_ as default};