import{_ as t,c as e,o as a,a5 as o}from"./chunks/framework.CqnjdYks.js";const p=JSON.parse('{"title":"资源工作流","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/asset/asset-workflow.md","filePath":"zh/manual/asset/asset-workflow.md"}'),r={name:"zh/manual/asset/asset-workflow.md"},s=o('<h1 id="资源工作流" tabindex="-1">资源工作流 <a class="header-anchor" href="#资源工作流" aria-label="Permalink to &quot;资源工作流&quot;">​</a></h1><h2 id="导入资源" tabindex="-1">导入资源 <a class="header-anchor" href="#导入资源" aria-label="Permalink to &quot;导入资源&quot;">​</a></h2><p>Creator 提供了三种 <strong>导入资源</strong> 的方式：</p><ul><li>以新建文件的方式，通过 Cocos Creator 窗口的 <strong>资源管理器</strong> 面板 <strong>创建按钮</strong> 导入资源</li><li>以复制文件的方式，在操作系统的文件管理器中，将资源文件复制到项目资源文件夹下，之后打开编辑器或激活编辑器窗口会自动刷新 <strong>资源管理器</strong> 的资源列表，完成导入资源。</li><li>以拖拽文件的方式，从操作系统的文件管理器中拖拽资源文件到 <strong>资源管理器</strong> 面板的某个文件夹位置，完成导入资源。</li></ul><p>资源相关的名称如下：</p><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">dataBase</td><td style="text-align:left;">数据库</td></tr><tr><td style="text-align:left;">asset-db</td><td style="text-align:left;">项目资源数据库</td></tr><tr><td style="text-align:left;">internal-db</td><td style="text-align:left;">内置数据库</td></tr><tr><td style="text-align:left;">uuid</td><td style="text-align:left;">唯一标识符</td></tr><tr><td style="text-align:left;">meta</td><td style="text-align:left;">元信息</td></tr></tbody></table><h2 id="同步资源" tabindex="-1">同步资源 <a class="header-anchor" href="#同步资源" aria-label="Permalink to &quot;同步资源&quot;">​</a></h2><p><strong>资源管理器</strong> 面板中的资源和 <strong>操作系统的文件管理器</strong> 中看到的项目资源文件是同步的，在 <strong>资源管理器</strong> 中对资源的移动、重命名和删除，都会同步到 <strong>操作系统的文件管理器</strong>，反之亦然。</p><h2 id="资源配置信息-meta-文件" tabindex="-1">资源配置信息 <code>.meta</code> 文件 <a class="header-anchor" href="#资源配置信息-meta-文件" aria-label="Permalink to &quot;资源配置信息 `.meta` 文件&quot;">​</a></h2><p>所有资源文件都会在导入时生成一份同名的 <code>.meta</code> 后缀的配置文件 这份配置文件提供了该资源在项目中的唯一标识 <strong>UUID</strong> 以及其他的一些配置信息，如图集中的小图引用，贴图资源的裁剪数据等，是识别一份合法资源的必要因素。</p><p>在 <strong>资源管理器</strong> 面板中 <code>.meta</code> 文件是不可见的，对资源的重命名，移动，删除，都会由编辑器自动同步该资源对应的 <code>.meta</code> 文件，以确保配置信息如 <strong>UUID</strong> 等保持不变，即不影响现有的引用。</p><p>不推荐直接在 <strong>操作系统的文件管理器</strong> 对资源文件进行操作，如有操作，请同步处理相应的 <code>.meta</code> 文件，如下建议：</p><ul><li>关闭正在使用的编辑器，避免因为文件锁定或资源名称相同导致更新失败。</li><li>删除，重命名，移动资源时，请连同 <code>.meta</code> 文件一起删除，重命名，移动。</li><li>复制资源时如果连同 <code>.meta</code> 文件一起复制，将直接使用复制进来的 <code>.meta</code> 文件，而不是再生成新的 <code>.meta</code> 文件；如果只复制了资源文件，则会生成对应名称的新的 <code>.meta</code> 文件。</li></ul><h2 id="library-中的资源" tabindex="-1">Library 中的资源 <a class="header-anchor" href="#library-中的资源" aria-label="Permalink to &quot;Library 中的资源&quot;">​</a></h2><p>资源经过导入后会生成一份新的数据存在项目的 <strong>Library</strong> 文件夹里。在 <strong>Library</strong> 里的文件，其结构和资源是面向引擎的，是最终游戏时需要的格式，即机器友好，但对人的阅读不友好。这块。</p><p>当 library 丢失或损坏的时候，只要删除整个 library 文件夹再打开项目，就会重新生成资源库。</p><h2 id="如何定位资源" tabindex="-1">如何定位资源 <a class="header-anchor" href="#如何定位资源" aria-label="Permalink to &quot;如何定位资源&quot;">​</a></h2><p>一个资源有唯一的 uuid 来定位到该资源，但这种方式不够直观，还有另一种直观的方式：<strong>Database URL</strong> 格式例如 <code>asset-db</code> 对应的协议头是 <code>db://assets</code>，<code>internal-db</code> 对应的协议头是 <code>db://internal</code>。</p><p>有文件夹层级的资源格式，如 <code>db://assets/prefabs/fire.prefab</code></p><h2 id="svn-或-git-同步资源" tabindex="-1">SVN 或 GIT 同步资源 <a class="header-anchor" href="#svn-或-git-同步资源" aria-label="Permalink to &quot;SVN 或 GIT 同步资源&quot;">​</a></h2><p>需要注意 <code>.meta</code> 文件的换行符，建议统一下团队成员电脑的换行符风格和规则，避免同步项目资源后打开项目，出现了大量的 <code>.meta</code> 文件修改</p>',21),l=[s];function d(n,i,c,h,g,b){return a(),e("div",null,l)}const f=t(r,[["render",d]]);export{p as __pageData,f as default};
