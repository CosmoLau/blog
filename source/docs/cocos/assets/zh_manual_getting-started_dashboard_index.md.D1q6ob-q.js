import{_ as r,c as t,o as s,a5 as a}from"./chunks/framework.CqnjdYks.js";const o="/docs/cocos/assets/dashboard-editor.BzQaObYp.png",n="/docs/cocos/assets/project-window.Cs2CkYhK.png",e="/docs/cocos/assets/add-project.D56MtGbd.png",g="/docs/cocos/assets/dashboard-download.DAiVXG7g.png",i="/docs/cocos/assets/community.FipDmTrD.png",l="/docs/cocos/assets/learn.B3xVc3rc.png",x=JSON.parse('{"title":"使用 Dashboard","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/getting-started/dashboard/index.md","filePath":"zh/manual/getting-started/dashboard/index.md"}'),c={name:"zh/manual/getting-started/dashboard/index.md"},d=a('<h1 id="使用-dashboard" tabindex="-1">使用 Dashboard <a class="header-anchor" href="#使用-dashboard" aria-label="Permalink to &quot;使用 Dashboard&quot;">​</a></h1><p>启动 Cocos Dashboard 并使用 Cocos 开发者帐号登录以后，就会打开 Dashboard 界面，在这里你可以下载引擎、新建项目、打开已有项目或者获得帮助信息。</p><h2 id="界面总览" tabindex="-1">界面总览 <a class="header-anchor" href="#界面总览" aria-label="Permalink to &quot;界面总览&quot;">​</a></h2><p><img src="'+o+'" alt="Dashboard"></p><p>上图所示的就是 Cocos Dashboard 界面，可以点击右上角的设置图标按钮来指定通过 Dashboard 下载的 Creator 编辑器的存放位置，以及 Dashboard 界面显示的语言等。</p><p>Cocos Dashboard 界面主要包括以下几种选项卡：</p><ul><li><strong>项目</strong>: 列出最近打开项目，第一次运行 Cocos Dashboard 时，这个列表是空的。可以在这个选项卡中新建项目。</li><li><strong>编辑器</strong>: 列出已下载的所有 Creator 编辑器版本，也可以点击右下角的 <strong>下载</strong> 按钮继续下载编辑器。</li><li><strong>动态</strong>: 用于发布 Cocos Creator 的一些官方信息或者活动等，包括 <strong>公告</strong>、<strong>新闻</strong> 和 <strong>更新日志</strong> 三部分内容。</li><li><strong>教程</strong>: 帮助信息，一个包括各种新手指引信息和文档的静态页面。</li></ul><p>下面我们来依次看一下这些分页面。</p><h2 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h2><p>可以通过 <strong>项目</strong> 选项卡快速访问近期打开过的项目，点击具体的项目条目时，即可打开该项目。</p><p><img src="'+n+'" alt="Dashboard"></p><ul><li><strong>1</strong> — 包括 <strong>使用其他编辑器打开项目</strong>、<strong>打开项目所在文件夹</strong>、<strong>从列表中移除</strong>、<strong>选择项目的图标</strong>、<strong>设置项目的描述</strong> 和 <strong>重命名项目</strong> 等功能。 <ul><li><strong>选择项目的图标</strong>：项目图标目前支持 BMP、PNG、GIF、JPG 四种格式（Dashboard 1.0.12 新增）。</li><li><strong>重命名项目</strong>：重命名项目将重命名项目文件夹（Dashboard 1.0.12 新增）。</li><li><strong>设置项目的描述</strong>：项目备注记录在项目目录下 <code>package.json</code> 文件的 <code>description</code> 字段中（Dashboard 1.0.19 新增）。</li></ul></li><li><strong>2</strong> — 可选择其他编辑器打开项目。</li><li><strong>3</strong> — 可根据时间正序/反序排列项目（Dashboard 1.0.12 新增）。</li><li><strong>4</strong> — 可通过项目名称直接搜索项目（Dashboard 1.0.12 新增）。</li><li><strong>导入</strong> 按钮 — 用于导入其他项目。从 <strong>v1.0.13</strong> 开始，支持直接将项目从操作系统的文件管理器拖拽到列表中。</li><li><strong>新建</strong> 按钮 — 用于新建项目，点击该按钮后会进入 <strong>新建项目</strong> 页面，详情可参考下方介绍。</li></ul><h3 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h3><p>在新建项目页面，点击上方的 <strong>类型</strong> 和 <strong>编辑器版本</strong> 可选择 Creator 的引擎和编辑器版本。</p><p>Creator 提供了一些项目模板，包括了各种不同类型的游戏基本架构，以及学习用的范例资源和脚本，来帮助开发者更快进入到创造性的工作当中。随着 Cocos Creator 功能越来越完整，我们也会持续添加更多的项目模板。</p><p><img src="'+e+'" alt="Dashboard"></p><p>点击选择其中一个项目模板，在页面下方可以看到 <strong>项目名称</strong> 和 <strong>项目存放位置</strong>。</p><ul><li><strong>项目名称</strong>：项目名称只能包含 <strong>a-z</strong>、<strong>A-Z</strong>、<strong>0-9</strong> 以及 <strong>_</strong> 和 <strong>-</strong>。</li><li><strong>项目存放位置</strong>：点击项目路径输入框后面的图标即可选择项目的存放路径。</li></ul><p>一切都设置好后，点击 <strong>创建并打开</strong> 按钮来完成项目的创建。Dashboard 界面会被关闭，然后新创建的项目会在 Cocos Creator 编辑器主窗口中打开。</p><h2 id="编辑器" tabindex="-1">编辑器 <a class="header-anchor" href="#编辑器" aria-label="Permalink to &quot;编辑器&quot;">​</a></h2><p>该页面会列出已下载安装的所有 Creator 编辑器版本。</p><p><img src="'+o+'" alt="Dashboard"></p><p>需要注意的是，第一次运行 Cocos Dashboard 时，这个列表是空的，可以点击右下角的两个按钮导入本地已有的 Creator 编辑器或者直接下载安装。</p><ul><li><p><strong>添加本地版本</strong>：用于添加本地已有的 Creator 编辑器到 <strong>编辑器</strong> 版本列表。从 <strong>v1.0.13</strong> 开始，支持直接将本地已有的 Creator 编辑器从操作系统的文件管理器拖拽到 <strong>编辑器</strong> 版本列表中。</p></li><li><p><strong>下载编辑器</strong>：点击该按钮会跳转到编辑器下载页面，该页面会列出所有已安装和未安装的编辑器版本，可选择所需的编辑器版本进行下载。</p><p><img src="'+g+'" alt="Download"></p></li></ul><h2 id="动态" tabindex="-1">动态 <a class="header-anchor" href="#动态" aria-label="Permalink to &quot;动态&quot;">​</a></h2><p>该页面用于发布 Cocos Creator 的一些官方通知或者活动等，包括 <strong>公告</strong>、<strong>新闻</strong> 和 <strong>更新日志</strong> 三个模块。</p><p><img src="'+i+'" alt="community"></p><h2 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h2><p>可以通过 <strong>教程</strong> 页面访问 Cocos Creator 用户手册、API 手册和其他帮助文档，以及教程和范例项目等。</p><p><img src="'+l+'" alt="learn"></p><p>开发者也可以通过点击左下角各网站的图标访问 Cocos 官方获取更多教程等信息，目前包括微信公众号、<a href="https://weibo.com/cocos2dx" target="_blank" rel="noreferrer">微博</a>、<a href="https://twitter.com/cocos2dx" target="_blank" rel="noreferrer">Twitter</a>、<a href="https://space.bilibili.com/491120849" target="_blank" rel="noreferrer">哔哩哔哩</a>、<a href="https://www.youtube.com/channel/UCAsPLdpiAQbFuYqiZvi0P5A" target="_blank" rel="noreferrer">YouTube</a> 和 <a href="https://github.com/cocos/cocos-engine" target="_blank" rel="noreferrer">GitHub</a>。</p>',31),h=[d];function p(b,_,m,u,C,D){return s(),t("div",null,h)}const P=r(c,[["render",p]]);export{x as __pageData,P as default};
