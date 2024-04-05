import{_ as t,a as s}from"./chunks/extension-manager.CIMEBW9W.js";import{_ as e}from"./chunks/refresh.cYJgJaZU.js";import{_ as a,c as r,o as n,a4 as i}from"./chunks/framework.uQk9_EO2.js";const p="/docs/cocos/assets/dashboard-store.CN1ivaku.png",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAfCAIAAADx1KMsAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAHsSURBVEiJ7ZY9r7IwFMe5LyYdTGCwsNXNmBia1EQncUMXPoE6wrfCjY/g5sgGYdFJBo1skBgZGDA43IE8hNQnoV6vcof731rO6flxek7bt16vx9Wq93rD/wqCT2rcbDZFUWw0Go8sutvt2I3pHDwe/l7RBC8O/x+C16uaACFUJwFCaLFYYIyfR0D3AqUgCLbbraZpaZr6vp9PqqoqSVLZzLKsbxNU78J6vQ7DUNM0AMDtV57nH9ymD1EUy+NWq0VZXK/Xw+HQ7/cFQcjTsN/vN/8EAGi327Ztl11OpxM7AVMvxHHsOI4sy/f+LkJoMplQk9PptLwOaze6rnu5XMbj8V0EEML5fK7rejFjGMZsNoMQ3k2QpqnjOAghQRAwxoPBgMXL8zzTNBVFySEMwxiNRqZpep5X2FT0QiFVVTebjaIohBBCSBRFruuyOOYlout6t9uFEJqmSRUNE4EkSRhjWZbP5zMhBACwWq0Y0csQt+ErCBRFOR6PQRCEYbhcLjVNyyvItu04jtkJcpfb2EwEHMcFQcBxXBzHlmV1Op3hcMiYf0ax1kEu3/eLk/GnVP/dWJGDykOX5/nnEmCMn3oxVhA8cuN9nyDLsuKhlnfBs0VXYhRFWZa9IHAhOgdJkiRJ8kqC+rvxj+A3EHwBAMC23zzvI2oAAAAASUVORK5CYII=",l="/docs/cocos/assets/enable-extension.B93hCej8.png",c="/docs/cocos/assets/import-drop-menu.Dye74U6Y.png",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEHSURBVDiNY9TX12cgFzCRrZNSzSy4JNzZuQxYGBgYGH7++bX555+7xGs24JEoEGJ8/P0vAwMDKyev/rv7iV/+EdCszMQky8jAwMDszs/9+N3DZd//MTAwsHMyFPDzRnz//IKBgeH/vwNIhjAih3aKkJyvACsbw99fmNYwMbMx/P364XnIu5/YbZ7z7tH7f7KRDC9CPvxG0xssgEUce2j78EnO52Hy4ZOcz8fiwCM2nw970GAXZWdi4WViZmdg4WVgFGZi52VgxKps4BIJDVLY0S+vBBl+H2VAkAw8RNrMxKTx//ed/yikIBOWMEO3ee3XDz6SkoV8GAr//Tj9HD3yGYdmfqZIMwCFfFWRnOb6/wAAAABJRU5ErkJggg==",d="/docs/cocos/assets/extension-first-panel-folder-origin.dl1RL4Cm.png",g="/docs/cocos/assets/extension-first-panel-install.OGlICzob.png",q=JSON.parse('{"title":"安装与分享","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/install.md","filePath":"zh/editor/extension/install.md","lastUpdated":1712305443000}'),h={name:"zh/editor/extension/install.md"},m=i('<h1 id="安装与分享" tabindex="-1">安装与分享 <a class="header-anchor" href="#安装与分享" aria-label="Permalink to &quot;安装与分享&quot;">​</a></h1><h2 id="安装位置" tabindex="-1">安装位置 <a class="header-anchor" href="#安装位置" aria-label="Permalink to &quot;安装位置&quot;">​</a></h2><p>Cocos Creator 在启动项目的过程中会搜索并加载 <strong>项目</strong> 路径下的扩展。</p><h3 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h3><p>扩展存放的地址为：</p><ul><li><code>${你的项目地址}/extensions</code></li></ul><h2 id="安装扩展" tabindex="-1">安装扩展 <a class="header-anchor" href="#安装扩展" aria-label="Permalink to &quot;安装扩展&quot;">​</a></h2><p>可以通过三种方式获得扩展：</p><ul><li><p>其他开发者打包分享，请参考下文 <a href="#打包扩展">打包扩展</a>。</p></li><li><p>从 <strong>Dashboard-&gt;商城</strong> 下载。</p><p><img src="'+p+'" alt="dashboard-store"></p></li><li><p>从 <a href="http://store.cocos.com" target="_blank" rel="noreferrer">Cocos Store·资源商城</a> 页面下载。</p></li></ul><p>获得扩展压缩包（zip 文件）后，在编辑器顶部菜单栏中点击 <strong>扩展 -&gt; 扩展管理器</strong>：</p><p><img src="'+t+'" alt="extension-manager-menu"></p><p>点击后可打开如下图所示的 <strong>扩展管理器</strong> 面板。</p><p><img src="'+s+'" alt="extension-manager"></p><p>在 <strong>扩展管理器</strong> 中选择 <strong>项目</strong>（上图所示 1） 选项卡，点击 <img src="'+o+'" alt="import"> (上图所示 3) 按钮。</p><p>在弹出的文件选择框中选择要导入的扩展压缩包，点击 <strong>打开</strong> 按钮即可导入。</p><p>导入的扩展压缩包会被解压并放到指定的 <a href="#安装位置">安装位置</a>。</p><p>最后在 <strong>扩展管理器</strong> 对应的 <strong>项目</strong> 选项卡中找到扩展，点击右边的 <strong>启用</strong> 按钮，刚刚导入的扩展就可以正常运行了。如下图所示：</p><p><img src="'+l+'" alt="enable-extension"></p><p>对于解压后的扩展，也可以通过点击 <img src="'+o+'" alt="import"> 右侧的下拉按钮导入。</p><p><img src="'+c+'" alt="import"></p><h2 id="卸载已安装的扩展" tabindex="-1">卸载已安装的扩展 <a class="header-anchor" href="#卸载已安装的扩展" aria-label="Permalink to &quot;卸载已安装的扩展&quot;">​</a></h2><p>在 <strong>扩展管理器</strong> 中找到需要删除的扩展，点击 <strong>删除按钮</strong> <img src="'+A+'" alt="delete"> 即可，同时扩展所在的文件夹也会删除。如果只需要禁用，可以只选择 &quot;关闭&quot;。</p><h2 id="重载扩展" tabindex="-1">重载扩展 <a class="header-anchor" href="#重载扩展" aria-label="Permalink to &quot;重载扩展&quot;">​</a></h2><p>若扩展的内容有修改，是不会自动更新的，这时候就需要在编辑器内手动重新载入一次扩展。</p><p>在 <strong>扩展管理器</strong> 中找到对应的扩展，然后点击 <strong>重新载入按钮</strong> <img src="'+e+'" alt="refresh">，这时候编辑器中的扩展将使用最新的代码和文件重新运行。</p><h2 id="打包扩展" tabindex="-1">打包扩展 <a class="header-anchor" href="#打包扩展" aria-label="Permalink to &quot;打包扩展&quot;">​</a></h2><p>当编写好一个扩展后，如果要将扩展分享给其使用者，则需要将该扩展打包为 zip 格式的压缩包。</p><p>我们以 <code>first-panel</code> 扩展为例，其目录结构如下：</p><p><img src="'+d+'" alt="extension-first-panel-folder-origin"></p><p>进入扩展根目录，选择相应文件并将所有文件压缩成 zip 包，如下图所示（截图为 macOS 系统，其余平台同理）：</p><p><img src="'+g+'" alt="extension-first-panel-install"></p><p>上图中所选文件（夹）为必选，缺一不可，它们作用如下：</p><ul><li><code>dist</code> - 生成的 javascript 代码。</li><li><code>i18n</code> - 多语言配置。</li><li><code>node_modules</code> - 依赖的 Node.js 模块。</li><li><code>package.json</code> - 扩展描述文件。</li><li><code>static</code> - 静态资源文件。</li></ul><p>将压缩包命名为 <code>first-panel.zip</code>（建议与扩展文件夹同名），分享给其他人或者上传 Cocos Store 即可完成分享。</p><blockquote><p><strong>注意</strong>：要在扩展的目录下进行文件选择操作，否则可能导致目录结构不对。</p></blockquote><p>若想上架扩展到 <a href="https://store.cocos.com" target="_blank" rel="noreferrer">资源商店（Cocos Store）</a>，请参考文档 <a href="./store/upload-store">上架扩展到资源商店</a>。</p>',36),_=[m];function f(u,b,x,C,B,E){return n(),r("div",null,_)}const w=a(h,[["render",f]]);export{q as __pageData,w as default};
