import{_ as t}from"./chunks/menu_event.DcjW3Ua0.js";import{_ as n,c as a,o,a5 as r}from"./chunks/framework.CqnjdYks.js";const i="/docs/cocos/assets/animation-event-menu.C8XUlfkT.png",s="/docs/cocos/assets/event-editor.DJFNU0Bv.png",e="/docs/cocos/assets/add-animation-event.CnyH3A6y.png",v=JSON.parse('{"title":"添加动画事件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/animation/animation-event.md","filePath":"zh/manual/animation/animation-event.md"}'),l={name:"zh/manual/animation/animation-event.md"},p=r('<h1 id="添加动画事件" tabindex="-1">添加动画事件 <a class="header-anchor" href="#添加动画事件" aria-label="Permalink to &quot;添加动画事件&quot;">​</a></h1><p>通过在动画时间轴的指定帧调用 <strong>动画事件</strong> 函数可以更好地充实动画剪辑。在动画时间轴某一帧上添加 <strong>事件帧</strong> 后，动画系统将会在动画执行到该帧时，根据事件帧中设置的触发函数名称去匹配动画根节点中对应的函数方法并执行。</p><p>若要通过脚本添加动画事件，详情请参考 <a href="./animation-component.html#帧事件">帧事件</a>。</p><h2 id="添加事件帧" tabindex="-1">添加事件帧 <a class="header-anchor" href="#添加事件帧" aria-label="Permalink to &quot;添加事件帧&quot;">​</a></h2><p>在 <strong>动画编辑器</strong> 中添加事件帧包括以下两种方式：</p><ol><li><p>将时间控制线拖动到需要添加事件帧的位置，然后点击 <strong>菜单工具栏</strong> 中的 <img src="'+t+'" alt="add event"> 按钮，即可在 <strong>动画时间轴</strong> 上方添加事件帧。</p></li><li><p>在动画时间轴上方区域点击右键，然后选择 <strong>新建事件帧</strong> 即可。</p></li></ol><p>事件帧添加完成后，将鼠标移动到事件帧，颜色会从白色变成黄色。右键点击事件帧即可执行 <strong>编辑</strong>、<strong>删除</strong>、<strong>复制粘贴</strong> 等操作。同时也支持批量操作事件帧，在按住 <kbd>Ctrl</kbd> 的同时点击多个事件帧即可。</p><p><img src="'+i+'" alt="add-event"></p><ul><li><strong>编辑</strong>：用于打开事件编辑器，添加事件函数</li><li><strong>删除</strong>：用于删除事件帧</li><li><strong>复制/粘贴</strong>：事件帧数据的复制和粘贴，支持跨编辑器（v3.x）使用。</li></ul><h3 id="编辑事件帧" tabindex="-1">编辑事件帧 <a class="header-anchor" href="#编辑事件帧" aria-label="Permalink to &quot;编辑事件帧&quot;">​</a></h3><p>右键点击添加的事件帧并选择 <strong>编辑</strong> 或者直接双击，即可打开事件编辑器。在事件编辑器中可以手动输入需要触发的事件函数名称，触发时会根据这个函数名，去动画根节点的各个组件内匹配相应的函数方法，并对其进行调用，传入参数。</p><p><img src="'+s+'" alt="event editor"></p><ul><li><p>1 — 用于添加新的触发函数</p></li><li><p>2 — 用于保存事件函数</p></li><li><p>3 — 填写需要触发的函数名称</p></li><li><p>4 — 用于删除当前事件函数</p></li><li><p>5 — 用于添加传入的参数，目前支持 <strong>String</strong>、<strong>Number</strong>、<strong>Boolean</strong> 三种类型</p><p><img src="'+e+'" alt="add animation event"></p><ul><li>1 — 用于添加传入的参数，可根据需要选择参数类型</li><li>2 — 用于删除下方所有已添加的传入参数</li><li>3 — 当鼠标移动到某一参数上时，便会出现该按钮，点击即可删除当前选中的参数</li></ul></li></ul><h3 id="删除事件帧" tabindex="-1">删除事件帧 <a class="header-anchor" href="#删除事件帧" aria-label="Permalink to &quot;删除事件帧&quot;">​</a></h3><p>在动画时间轴上方右键点击已经添加的事件帧（可多选），然后选择 <strong>删除</strong> 或者使用快捷键 <kbd>Delete</kbd> 即可删除该事件帧及所有的事件函数。</p><h3 id="复制粘贴事件帧" tabindex="-1">复制粘贴事件帧 <a class="header-anchor" href="#复制粘贴事件帧" aria-label="Permalink to &quot;复制粘贴事件帧&quot;">​</a></h3><p>事件帧及其事件函数的复制和粘贴，支持跨编辑器（v3.x）使用。复制粘贴包括以下两种使用方式：</p><ul><li>选中事件帧后（可多选），使用快捷键 <kbd>Ctrl</kbd> + <kbd>C</kbd> 和 <kbd>Ctrl</kbd> + <kbd>V</kbd> 即可进行复制粘贴。需要注意的是快捷键粘贴的位置将会以当前时间控制线所在的位置为起点。</li><li>选中事件帧后（可多选），右键点击（任一）事件帧，在弹出的菜单中选择 <strong>复制</strong>，然后在动画时间轴上方点击右键，选择 <strong>粘贴事件帧</strong> 即可。</li></ul>',18),d=[p];function g(c,m,h,_,u,b){return o(),a("div",null,d)}const q=n(l,[["render",g]]);export{v as __pageData,q as default};