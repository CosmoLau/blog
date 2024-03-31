import{_ as s,v as a,b as n,R as e}from"./chunks/framework.5ffcbaff.js";const y=JSON.parse('{"title":"获取 npm 包","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/scripting/modules/config.md","filePath":"zh/manual/scripting/modules/config.md"}'),p={name:"zh/manual/scripting/modules/config.md"},o=e(`<h1 id="获取-npm-包" tabindex="-1">获取 npm 包 <a class="header-anchor" href="#获取-npm-包" aria-label="Permalink to &quot;获取 npm 包&quot;">​</a></h1><h2 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h2><p>npm 包管理工具 <code>npm</code> 附带在 Node.js 发行版中。安装 Node.js 之后即可使用。</p><p>通过以下命令确认 <code>npm</code> 的安装已成功：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npm -v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可能的输出：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 6.14.9</span></span></code></pre></div><h2 id="安装-npm-包" tabindex="-1">安装 npm 包 <a class="header-anchor" href="#安装-npm-包" aria-label="Permalink to &quot;安装 npm 包&quot;">​</a></h2><p>在项目根目录中执行以下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npm install --save protobufjs</span></span></code></pre></div><p>会将 npm 包 <code>protobufjs</code> 安装到 <code>/node_modules</code> 目录中，并将对此包的依赖关系写入到文件 <code>package.json</code> 中。</p><p><code>package.json</code> 文件是 npm 的清单文件，需要纳入版本控制。</p><blockquote><p>Cocos Creator 推荐将自动生成的 <code>package-lock.json</code> 也纳入版本控制，以确保多个开发者之间安装相同版本的包。</p></blockquote><p><code>/node_modules</code> 目录一般不纳入版本控制。</p><p>当 <code>package.json</code> 记录了依赖之后，后续可直接执行以下命令重新安装或在其它环境中安装：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npm install</span></span></code></pre></div><h2 id="拓展-使用-npm-镜像" tabindex="-1">拓展：使用 npm 镜像 <a class="header-anchor" href="#拓展-使用-npm-镜像" aria-label="Permalink to &quot;拓展：使用 npm 镜像&quot;">​</a></h2><p>npm 默认从 <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">官方 npmjs 源</a> 读取和下载包。有些国家或地区可能因为网络问题导致安装失败或安装速度过慢，推荐通过切换镜像的方式来解决。</p><p>首先，全局安装 npm 包 <a href="https://www.npmjs.com/package/nrm" target="_blank" rel="noreferrer">nrm</a>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npm install -g nrm</span></span></code></pre></div><blockquote><p><code>-g</code> 表示全局，会将 npm 包直接安装到当前计算机中，只要执行一次后续就不需要再次执行。</p></blockquote><p>查看有效的 npm 镜像：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npx nrm ls</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可能的输出：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># * npm -------- https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   yarn ------- https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   cnpm ------- http://r.cnpmjs.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   taobao ----- https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   nj --------- https://registry.nodejitsu.com/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   npmMirror -- https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   edunpm ----- http://registry.enpmjs.org/</span></span></code></pre></div><p>可根据当前地区选择合适的镜像。中国大陆用户使用 <code>taobao</code> 镜像是不错的选择。执行以下命令来切换镜像：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npx nrm use taobao </span><span style="color:#676E95;font-style:italic;"># 或任何合适的镜像</span></span></code></pre></div><blockquote><p>该命令也是全局的。也可选择仅切换当前项目的镜像，见 <a href="https://www.npmjs.com/package/nrm#usage" target="_blank" rel="noreferrer">nrm 选项</a>。</p></blockquote><p>镜像名 <code>npm</code> 是官方源的名称，因此，可通过以下命令切换回官方源：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> npx nrm use npm</span></span></code></pre></div>`,26),t=[o];function l(c,r,i,d,m,h){return a(),n("div",null,t)}const u=s(p,[["render",l]]);export{y as __pageData,u as default};
