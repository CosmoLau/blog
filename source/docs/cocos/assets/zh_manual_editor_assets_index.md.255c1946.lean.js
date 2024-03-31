import{_ as t,v as s,b as o,R as r}from"./chunks/framework.5ffcbaff.js";const n="/docs/cocos/assets/thumb.f8718db6.gif",g="/docs/cocos/assets/create.3c260f55.png",a="/docs/cocos/assets/drag.00b770a7.png",i="/docs/cocos/assets/search-types.da030119.png",e="/docs/cocos/assets/search-name.9fe64601.png",l="/docs/cocos/assets/search-uuid.fac762db.png",c="/docs/cocos/assets/preview.2d503188.png",p="/docs/cocos/assets/right-click.d30ac07c.png",d="/docs/cocos/assets/exporting.5a4db2a3.png",h="/docs/cocos/assets/importing.ee599794.png",D=JSON.parse('{"title":"资源管理器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/assets/index.md","filePath":"zh/manual/editor/assets/index.md"}'),u={name:"zh/manual/editor/assets/index.md"},m=r('<h1 id="资源管理器" tabindex="-1">资源管理器 <a class="header-anchor" href="#资源管理器" aria-label="Permalink to &quot;资源管理器&quot;">​</a></h1><p><strong>资源管理器</strong> 面板是用于访问和管理项目资源的重要工作区域。在开始制作游戏时，<strong>导入资源</strong> 通常是必须的步骤。在新建项目时可以使用 <strong>HelloWorld</strong> 模板项目，就可以看到 <strong>资源管理器</strong> 中已经包含了一些基本资源类型。</p><p><img src="'+n+'" alt="面板操作预览"></p><h2 id="面板介绍" tabindex="-1">面板介绍 <a class="header-anchor" href="#面板介绍" aria-label="Permalink to &quot;面板介绍&quot;">​</a></h2><p><strong>资源管理器</strong> 面板主要可以分为 <strong>工具栏</strong> 和 <strong>资源列表</strong> 两部分内容：</p><ul><li><p><strong>工具栏</strong> 中的功能包括 <strong>新建资源</strong>、<strong>排序方式</strong>、<strong>搜索过滤</strong>、<strong>搜索框</strong>、<strong>全部折叠/展开</strong> 和 <strong>刷新列表</strong>。详情可参考下文介绍。</p></li><li><p><strong>资源列表</strong> 将项目资源文件夹中的内容以树状结构展示出来，默认包括 <strong>assets</strong> 和 <strong>internal</strong> 两个基本资源库（简称 DB）：</p><ul><li><strong>assets</strong> 类似操作系统中的文件管理器，只有放在项目文件夹的 <code>assets</code> 目录下的资源才会显示在这里。关于项目文件夹结构说明请参考 <a href="./../../getting-started/project-structure/">项目结构</a>。</li><li><strong>internal</strong> 中的是默认的内置资源（只读），内置资源可以复制，但不能进行增删改操作。可以作为资源模板拖拽到 <strong>assets</strong> 中，即新建了一个项目资源。</li></ul></li><li><p>面板目前支持操作资源的快捷方式包括：</p><ul><li><strong>复制</strong>：Ctrl/Cmd + C</li><li><strong>粘贴</strong>：Ctrl/Cmd + V</li><li><strong>克隆</strong>：Ctrl/Cmd + D、Ctrl + 拖动资源</li><li><strong>删除</strong>：Delete</li><li><strong>上下选择</strong>：上箭头，下箭头</li><li><strong>上一层级</strong>：左箭头</li><li><strong>下一层级</strong>：右箭头</li><li><strong>多选</strong>：Ctrl/Cmd + 点击</li><li><strong>连续多选</strong>：Shift + 点击</li><li><strong>全选</strong>：Ctrl/Cmd + A</li><li><strong>重命名</strong>：Enter/F2</li><li><strong>取消输入</strong>：Esc</li></ul></li></ul><h3 id="创建资源" tabindex="-1">创建资源 <a class="header-anchor" href="#创建资源" aria-label="Permalink to &quot;创建资源&quot;">​</a></h3><p>创建资源有两种方式：</p><ol><li>点击 <strong>资源管理器</strong> 左上方的 <strong>+</strong> 按钮。</li><li>在 <strong>资源管理器</strong> 面板中点击鼠标右键，然后选择 <strong>创建</strong>。</li></ol><p><img src="'+g+'" alt="create"></p><blockquote><p><strong>注意</strong>：创建资源时会先出现一个 <strong>输入框</strong> 要求填入新资源的名称，名称不能为空。</p></blockquote><p>创建资源时，可以在树形资源列表中选中要放置资源的文件夹，则新建的资源会创建到当前选中的文件夹目录下。若没有选中任何文件夹，则新建资源会默认创建到当前根目录下（<code>assets</code>）。</p><p>更多资源相关的内容请参考 <a href="./../../asset/">资源手册</a>。</p><h3 id="选择资源" tabindex="-1">选择资源 <a class="header-anchor" href="#选择资源" aria-label="Permalink to &quot;选择资源&quot;">​</a></h3><p>在资源列表中可以使用以下的资源选择操作：</p><ul><li>单击以选中单个资源。选中的资源会呈现 <strong>蓝底黄字</strong> 的高亮状态</li><li>双击以打开某个资源，比如 scene、script、image。双击文件夹则折叠/展开文件夹</li><li>按住 Ctrl/Cmd，然后选择资源，可以同时选中多个资源</li><li>按住 Shift，然后选择资源，可以连续选中多个资源</li></ul><p>对于选中的资源，可以执行移动、删除等操作。</p><h3 id="移动资源" tabindex="-1">移动资源 <a class="header-anchor" href="#移动资源" aria-label="Permalink to &quot;移动资源&quot;">​</a></h3><p>选中资源后（可多选），按住鼠标拖拽可以将资源移动到其他位置。将要移动的资源拖拽到目标文件夹上时，会看到鼠标悬停的文件夹呈现黄字的高亮状态，并且在其周围有一个蓝色的方框。这时松开鼠标，就会将资源移动到高亮显示的文件夹目录下。</p><p><img src="'+a+'" alt="drag"></p><p>资源的移动还包括以下操作：</p><ul><li>将 <strong>资源管理器</strong> 中的资源拖拽到 <strong>场景编辑器</strong> 或 <strong>层级管理器</strong> 面板可生成节点，目前支持拖拽 <code>cc.Prefab</code>、<code>cc.Mesh</code>、<code>cc.SpriteFrame</code> 资源。</li><li>从 <strong>系统的文件管理器</strong> 拖拽文件到 <strong>资源管理器</strong> 列表中，即可导入资源。</li><li>从 <strong>层级管理器</strong> 面板拖拽节点到 <strong>资源管理器</strong> 面板的某个文件夹中，可将节点保存为一个 <code>cc.Prefab</code> 资源，详见 <a href="./../../asset/prefab.html">预制资源（Prefab）</a>。</li></ul><h3 id="排序资源" tabindex="-1">排序资源 <a class="header-anchor" href="#排序资源" aria-label="Permalink to &quot;排序资源&quot;">​</a></h3><p>工具栏中的 <strong>排序方式</strong>包括 <strong>按名称排序</strong> 和 <strong>按类型排序</strong>。当前的排序方式会被记录，下次打开编辑器时会保持当前的排序方式。</p><h3 id="折叠资源" tabindex="-1">折叠资源 <a class="header-anchor" href="#折叠资源" aria-label="Permalink to &quot;折叠资源&quot;">​</a></h3><p>折叠分为单一折叠或含子集的全部折叠：</p><ul><li><strong>工具栏</strong> 中的 <strong>全部折叠/展开</strong> 按钮作用于全局</li><li>单击一个父级资源（例如文件夹）的三角图标，可以展开或折叠它的子集。使用快捷键 <strong>Alt</strong> 并点击三角图标，可全部展开或折叠所有的子资源</li></ul><p>资源当前的折叠状态会被记录，下次打开编辑器时会保持当前的折叠状态。</p><h3 id="搜索资源" tabindex="-1">搜索资源 <a class="header-anchor" href="#搜索资源" aria-label="Permalink to &quot;搜索资源&quot;">​</a></h3><p>搜索功能是一种组合功能，可限定搜索类型并指定搜索字段，这两种都可以达到类型过滤的效果，根据选择的类型/字段，面板中会显示所有相应的资源。</p><p><img src="'+i+'" alt="search-types"></p><ul><li><p><strong>限定搜索类型</strong>：可多选。类型为资源类型 <code>assetType</code>，不是后缀名称或 importer 名称。</p></li><li><p><strong>指定搜索字段</strong>：搜索名称不区分大小写，包括以下几种搜索方式：</p><ol><li><p><strong>搜索名称或 UUID</strong>，支持搜索资源文件扩展名，例如 <code>.png</code>：</p><p><img src="'+e+'" alt="search-name"></p></li><li><p><strong>搜索 UUID</strong></p></li><li><p><strong>搜索 URL</strong>，以 <code>db://</code> 协议开头</p></li><li><p><strong>查找 UUID 的使用</strong>，用于查找该 uuid 资源被哪些资源所使用，如下图：</p><p><img src="'+l+'" alt="search-uuid"></p></li></ol></li></ul><p>若只想在某个父级资源（例如文件夹）中搜索，则右键点击并选择 <strong>在文件夹中查找</strong>，即可缩小搜索范围。</p><p>在搜索结果列表中选中资源，双击资源等同于在正常模式下的操作。清空搜索内容后，会重新定位到选中的资源。</p><h3 id="大图预览" tabindex="-1">大图预览 <a class="header-anchor" href="#大图预览" aria-label="Permalink to &quot;大图预览&quot;">​</a></h3><p>在 <strong>资源管理器</strong> 中选中资源，即可在 <strong>资源预览</strong> 面板中显示资源的缩略图。若选中资源所在的文件夹，即可显示文件夹下所有资源的缩略图，方便查看。</p><p><img src="'+c+'" alt="preview"></p><h2 id="资源的右击菜单" tabindex="-1">资源的右击菜单 <a class="header-anchor" href="#资源的右击菜单" aria-label="Permalink to &quot;资源的右击菜单&quot;">​</a></h2><p>选中具体的资源/文件夹后，点击鼠标右键，可以在弹出的菜单中对资源执行一系列操作：</p><p><img src="'+p+'" alt="right-click"></p><ul><li><strong>创建</strong>：和 <strong>资源管理器</strong> 面板的 <strong>创建</strong> 按钮功能相同，会将资源添加到当前选中的文件夹下，如果当前选中的是资源文件，会将新增资源添加到和当前选中资源所在文件夹中。</li><li><strong>复制</strong>/<strong>剪切</strong>/<strong>粘贴</strong>：将选中的资源（可多选）复制/剪切，然后粘贴到该文件夹下或者另外的文件夹下。</li><li><strong>生成副本</strong>：生成和选中资源（可多选）完全相同的资源副本，生成的资源和选中的资源在同一层级中。</li><li><strong>重命名</strong>：修改资源名称，详情请查看下文介绍。</li><li><strong>删除</strong>：删除资源（资源可多选），也可以使用快捷键 <strong>Delete</strong>。资源删除后会保留在 <strong>系统的回收站</strong> 中，必要时可将其还原。</li><li><strong>全选</strong>：选中同一层级中的所有资源。</li><li><strong>在文件夹中查找</strong>：使用搜索功能时，只搜索该文件夹中的资源。</li><li><strong>查找 UUID 的使用</strong>：通过资源的 UUID 来查找该资源被哪些资源所引用。</li><li><strong>导入/导出资源包</strong>：详情请参考下文介绍。</li><li><strong>在浏览器中预览此场景</strong>：仅对场景资源有效。</li><li><strong>在资源管理器（Windows）或 Finder（Mac）中显示</strong>：在操作系统的文件管理器窗口中打开该资源所在的文件夹。</li><li><strong>重新导入资源</strong>：更新资源到项目的 <code>./library</code> 文件夹，支持多选批量导入。</li><li><strong>在 library 中显示</strong>：打开该资源在项目文件夹的 <code>Library</code> 中的位置，详情请阅读 <a href="./../../getting-started/project-structure/">项目结构</a>。</li><li><strong>UUID/URL/PATH</strong>：复制资源的 UUID/URL/PATH，并且在 <strong>控制台</strong> 面板中输出。</li></ul><p>另外对于特定资源类型，双击资源可以进入该资源的编辑状态，如场景资源和脚本资源。</p><h3 id="重命名资源" tabindex="-1">重命名资源 <a class="header-anchor" href="#重命名资源" aria-label="Permalink to &quot;重命名资源&quot;">​</a></h3><p>选中需要重命名的资源，然后点击右键，选择 <strong>重命名</strong> 即可修改资源名称，或者也可以直接使用快捷键 <strong>Enter</strong> 或者 <strong>F2</strong>。点击面板其他地方或者按快捷键 <strong>Esc</strong> 便可以取消此次重命名。</p><h3 id="导出资源包" tabindex="-1">导出资源包 <a class="header-anchor" href="#导出资源包" aria-label="Permalink to &quot;导出资源包&quot;">​</a></h3><p>选中需要导出的资源并点击右键，然后选择 <strong>导出资源包</strong>，在弹出的 <strong>导出资源</strong> 面板中会自动列出当前选中的资源与其依赖的相关资源。如果不需要导出相关依赖资源，可以在 <strong>导出资源</strong> 面板左下角取消勾选 <strong>包含依赖资源</strong>。</p><p>确定要导出的资源后，点击 <strong>导出</strong> 按钮，会弹出文件存储对话框，用户需要指定一个文件夹位置和文件名，点击 <strong>存储</strong>，就会生成 <strong>文件名.zip</strong> 的压缩包文件，包含导出的全部资源。</p><blockquote><p><strong>注意</strong>：插件会自动把资源打成一个 zip 包，该 zip 包只适用于 <strong>导入资源包</strong> 插件使用。</p></blockquote><p><img src="'+d+'" alt="exporting"></p><h3 id="导入资源包" tabindex="-1">导入资源包 <a class="header-anchor" href="#导入资源包" aria-label="Permalink to &quot;导入资源包&quot;">​</a></h3><p>选中并右键点击要导入资源的文件夹，或者右键点击 <strong>资源管理器</strong> 面板的 <strong>空白处</strong>，然后选择 <strong>导入资源包</strong>，在弹出的文件浏览对话框中选择由 <strong>导出资源包</strong> 导出的 zip 包。zip 包中的资源便会自动解析到弹出的 <strong>导入资源包</strong> 面板。</p><p>导入过程中也会让用户再次确认导入资源，这时候可以通过取消某些资源的勾选来去掉不需要导入的资源。</p><p><img src="'+h+'" alt="importing"></p><blockquote><p><strong>注意</strong>：</p><ol><li>导入的 zip 包，仅支持由 Cocos Creator 3.0.0 及以上版本使用 <strong>导出资源包</strong> 导出的 zip 包。</li><li>不支持导入相同类名的脚本。</li></ol></blockquote><h2 id="增强资源管理器面板" tabindex="-1">增强资源管理器面板 <a class="header-anchor" href="#增强资源管理器面板" aria-label="Permalink to &quot;增强资源管理器面板&quot;">​</a></h2><p>目前支持的扩展包括 <strong>右击菜单</strong> 和 <strong>拖入识别</strong>，详情请参考 <a href="./extension.html">增强资源管理器面板</a>。</p>',56),b=[m];function f(_,q,x,k,P,U){return s(),o("div",null,b)}const z=t(u,[["render",f]]);export{D as __pageData,z as default};
