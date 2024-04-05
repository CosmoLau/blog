import{_ as t}from"./chunks/curve-btn.BDTcipj3.js";import{_ as o,c as a,o as r,a4 as e}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/add-property.CP9ytjTr.png",n="/docs/cocos/assets/add-keyframe.3hOIYSnq.gif",i="/docs/cocos/assets/add-spriteframe.BzuXB5f9.gif",p="/docs/cocos/assets/animation-sprite.CZTT2plp.gif",d="/docs/cocos/assets/node-operation.DLq3fU1I.png",c="/docs/cocos/assets/move-data.5Ihu-OFa.png",l="/docs/cocos/assets/change-node.Bjtfc8i8.png",g="/docs/cocos/assets/same-name-node.CmGdAveo.png",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAADySURBVDiNY/T18WEgFzCRrXNANbMgc+S8MiJ0+d+enbPhr1+8mRgLhuo/z08tXLT/LVbNX189ffr8y9uXX97+e/LyOQMrhubfb95+QeIyUhLaqE7jVTbV43955twjBjkjK3UhZnRXv7t97NzDn9g1a7n5OqqwfxX5uIPB00WDG4tdavwfp224i93Z7MLSkhw/nj99yyAsLcmNbjEDw9/PL5++xWEzw8+3Tx9AWG+fPnjLQAigaBa2DvBV5nlxfvV+BqcQQwlsoX12zbZLP7Fq5uYXERLh+S3Cw8MgLCKCEV4MDH//C/MwMMA1UxRVQzRjAADJKVSUfAFIRAAAAABJRU5ErkJggg==",h="/docs/cocos/assets/pro-operation.zARUc64Q.png",b="/docs/cocos/assets/change-pro.b-wob1y2.png",k="/docs/cocos/assets/set-animation-clip.BWjrmo5-.png",F=JSON.parse('{"title":"编辑动画剪辑","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/edit-animation-clip.md","filePath":"zh/animation/edit-animation-clip.md","lastUpdated":1712305443000}'),u={name:"zh/animation/edit-animation-clip.md"},A=e('<h1 id="编辑动画剪辑" tabindex="-1">编辑动画剪辑 <a class="header-anchor" href="#编辑动画剪辑" aria-label="Permalink to &quot;编辑动画剪辑&quot;">​</a></h1><p>在节点的动画组件上挂载了动画剪辑后，点击 <strong>进入动画编辑模式</strong> 或者使用快捷键 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>E</kbd> 进入动画编辑模式，便可以在动画剪辑中添加关键帧数据，以此实现节点的动画化。在编辑动画剪辑之前请先 <a href="./animation-editor">熟悉动画编辑器</a>。</p><p>一个动画剪辑内可能包含了多个节点（节点及其子节点），每个节点上可挂载多个动画属性。通过对节点进行移动、旋转、缩放等操作，便会在当前选中节点相对应的动画属性上添加关键帧，动画属性上添加的所有关键帧在对应的动画属性中显示为线性轨迹的清单模式，我们可以称之为动画曲线。</p><h2 id="创建动画曲线" tabindex="-1">创建动画曲线 <a class="header-anchor" href="#创建动画曲线" aria-label="Permalink to &quot;创建动画曲线&quot;">​</a></h2><p>在添加关键帧之前需要先了解一下动画属性，动画属性包括了节点自有的 <code>position</code>、<code>rotation</code>、<code>scale</code> 等属性，也包含了组件 Component 中自定义的属性。组件包含的属性前会加上组件的名字，比如 <code>cc.Sprite.spriteFrame</code>。</p><p>点击 <strong>属性列表</strong> 区域右上角的 <strong>+</strong> 按钮即可根据需要添加动画属性，根据节点类型的不同，可添加的动画属性也有所不同。已添加的动画属性则为置灰状态，不可重复添加。</p><p><img src="'+s+'" alt="add property"></p><p>添加了动画属性后便可以在右侧的属性轨道上添加关键帧了。当节点及其动画属性在列表中显示为蓝色时，表示确定该节点的属性为当前创建关键帧的目标对象。然后在 <strong>动画编辑器</strong> / <strong>属性检查器</strong> / <strong>场景编辑器</strong> 中修改对应属性时，便会在动画属性右侧时间轴的时间控制线所在位置上生成一个蓝色实心的菱形，便是关键帧。（也可以通过该方法修改选中的关键帧数据）</p><p><img src="'+n+'" alt="add keyframe"></p><p>更多关于动画剪辑的设计以及如何通过代码程序化控制，请参考 <a href="./use-animation-curve">程序化编辑动画剪辑</a>。</p><h3 id="编辑-sprite-动画" tabindex="-1">编辑 Sprite 动画 <a class="header-anchor" href="#编辑-sprite-动画" aria-label="Permalink to &quot;编辑 Sprite 动画&quot;">​</a></h3><p>接下来我们以创建 Sprite 动画为例，来看一下具体的操作流程。</p><ol><li><p>创建 Sprite 节点</p><p>在 <strong>层级管理器</strong> 中创建一个 Sprite 节点。或者在节点上添加 Sprite 组件，选中节点后在 <strong>属性检查器</strong> 中点击 <strong>添加组件</strong> 按钮，选择 <strong>2D -&gt; Sprite</strong> 即可。</p></li><li><p>在节点上添加 Animation 组件，并挂载 Clip 文件，然后进入动画编辑模式。详情可参考 <a href="./animation-create">创建 Animation 组件和动画剪辑</a>。</p></li><li><p>在属性列表中添加 <code>cc.Sprite.spriteFrame</code> 动画属性</p><p>点击属性列表右上角的 <strong>+</strong> 按钮，然后选择 <strong>cc.Sprite -&gt; spriteFrame</strong> 即可添加一个 <code>cc.Sprite.spriteFrame</code> 动画属性。</p><p><img src="'+i+'" alt="add SpriteFrame"></p></li><li><p>添加关键帧</p><p>从 <strong>资源管理器</strong> 中将 spriteFrame 资源拖拽到 <code>cc.Sprite.spriteFrame</code> 动画属性右侧的属性轨道上，再将下一关键帧需要显示的 spriteFrame 拖到指定位置，或者在属性轨道上方的属性框中选择所需的 spriteFrame。然后点击播放就可以预览刚刚创建的动画了。</p><p><img src="'+p+'" alt="add SpriteFrame"></p></li></ol><h2 id="关键帧数据编辑" tabindex="-1">关键帧数据编辑 <a class="header-anchor" href="#关键帧数据编辑" aria-label="Permalink to &quot;关键帧数据编辑&quot;">​</a></h2><h3 id="节点数据常见操作" tabindex="-1">节点数据常见操作 <a class="header-anchor" href="#节点数据常见操作" aria-label="Permalink to &quot;节点数据常见操作&quot;">​</a></h3><p>动画剪辑通过节点的名字定义动画数据的位置，本身忽略了根节点，其余的子节点通过与根节点的相对路径索引找到对应的数据。</p><p>目前支持在 <strong>动画编辑器</strong> 的 <strong>节点列表</strong> 区域右键点击节点来选择清空节点数据、迁移节点数据，以及复制粘贴节点数据。</p><p><img src="'+d+'" alt="node operation"></p><h4 id="清空节点数据" tabindex="-1">清空节点数据 <a class="header-anchor" href="#清空节点数据" aria-label="Permalink to &quot;清空节点数据&quot;">​</a></h4><p>右键点击需要清空所有动画数据（关键帧）的节点，然后选择 <strong>清空数据</strong>，在弹出的窗口中点击 <strong>清除</strong> 即可。</p><h4 id="迁移节点数据" tabindex="-1">迁移节点数据 <a class="header-anchor" href="#迁移节点数据" aria-label="Permalink to &quot;迁移节点数据&quot;">​</a></h4><p>右键点击需要迁移所有动画数据的节点，然后选择 <strong>迁移数据</strong>，节点便会显示动态的虚线外框，当鼠标移动到其他节点时，便会显示“迁移数据到该节点”的提示，单击后在弹出的窗口选择 <strong>迁移</strong> 即可，若不需要迁移则选择 <strong>取消</strong> 即可。</p><p><img src="'+c+'" alt="move data"></p><blockquote><p><strong>注意</strong>：节点数据迁移默认会覆盖原节点上的数据</p></blockquote><p>因为动画剪辑会记录所有参与动画数据编辑的节点路径信息，所以当节点信息发生变化（例如节点重命名/删除/移动位置），与原本保存在动画剪辑中的不一致时，<strong>动画编辑器</strong> 便会将其在节点列表中显示为黄色的不可编辑的丢失状态，关键帧也是置灰的不可编辑状态。此时便可以通过节点的 <strong>迁移数据</strong> 功能将丢失节点的动画数据迁移到其他节点上。</p><p><img src="'+l+'" alt="change node"></p><h4 id="复制粘贴节点数据" tabindex="-1">复制粘贴节点数据 <a class="header-anchor" href="#复制粘贴节点数据" aria-label="Permalink to &quot;复制粘贴节点数据&quot;">​</a></h4><p>节点动画数据的复制和粘贴，支持跨编辑器（v3.x）使用。</p><ul><li><strong>复制</strong>：在节点列表中选中要复制数据的节点，点击右键并选择 <strong>复制数据</strong>，或者直接使用快捷键 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>C</kbd> 即可。</li><li><strong>粘贴</strong>：在节点列表中选中要粘贴动画数据的目标节点，点击右键并选择 <strong>粘贴数据</strong>，或者直接使用快捷键 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd> 即可。</li></ul><blockquote><p><strong>注意</strong>：粘贴功能不支持自动创建动画属性，因此复制和粘贴的节点至少要有一个相同的动画属性，如果没有，请预先创建。当在同一个节点上粘贴多个节点的动画数据时，重叠部分的动画数据会被后者覆盖，差异部分则会互相融合。</p></blockquote><h4 id="编辑同名子节点数据" tabindex="-1">编辑同名子节点数据 <a class="header-anchor" href="#编辑同名子节点数据" aria-label="Permalink to &quot;编辑同名子节点数据&quot;">​</a></h4><p>在父节点的动画剪辑中编辑动画数据时也可以对子节点进行动画编辑，动画数据都会保存到父节点的动画剪辑中，用于实现类似人物模型的手以不同的速度跟随身体一起移动等效果。但若父节点下同时包含多个同名子节点，只支持对第一个同名子节点进行编辑，其他的同名字节点会置灰为不可编辑状态。</p><p><img src="'+g+'" alt="same name node"></p><p>但分别为同名子节点添加动画组件和动画剪辑并单独进行编辑是支持的。</p><h3 id="属性数据常见操作" tabindex="-1">属性数据常见操作 <a class="header-anchor" href="#属性数据常见操作" aria-label="Permalink to &quot;属性数据常见操作&quot;">​</a></h3><p>右键点击动画属性或者单击轨道右侧的 <img src="'+m+'" alt="property"> 按钮即可选择 <strong>移除当前属性轨道</strong>、<strong>清空关键帧</strong>，或者 <strong>复制粘贴当前属性轨道</strong>。</p><p><img src="'+h+'" alt="property operation"></p><ul><li><p>移除当前动画属性：移除当前选中的动画属性，包括该轨道上的所有关键帧。或者也可以使用快捷键 <kbd>Delete</kbd> 键（Windows）或者 <kbd>Cmd</kbd> + <kbd>Backspace</kbd>（macOS）。</p></li><li><p>清空关键帧数据：删除当前选中的动画属性上的所有关键帧</p></li><li><p>复制/粘贴当前动画属性：复制当前选中的动画属性上的所有动画数据，并粘贴到目标动画属性上，支持使用快捷键 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>C</kbd> 和 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd>。粘贴时，重叠部分的关键帧会被后者覆盖，差异部分则会互相融合。</p><p>目前支持在不同编辑器（v3.x）之间复制/粘贴动画属性数据。动画数据的复制粘贴仅支持 <code>ccType</code> 同类型数据。</p></li></ul><p>与节点一样，动画属性也存在丢失的可能。例如在 <strong>属性检查器</strong> 中移除了与动画属性对应的属性，则在动画属性列表中便会将其显示为黄色的不可编辑的丢失状态，关键帧也是置灰的不可编辑状态。在这种情况下可以退出编辑模式后为对应节点添加相关属性或是直接移除该丢失的属性轨道。</p><p><img src="'+b+'" alt="change property"></p><h3 id="节点-属性轨道关键帧数据编辑" tabindex="-1">节点 / 属性轨道关键帧数据编辑 <a class="header-anchor" href="#节点-属性轨道关键帧数据编辑" aria-label="Permalink to &quot;节点 / 属性轨道关键帧数据编辑&quot;">​</a></h3><p>动画编辑器的关键帧有两种视图显示方式：<strong>关键帧编辑视图与曲线编辑视图</strong>。进入动画编辑器后，默认是关键帧模式，通过点击属性列表边上的切换视图按钮 <img src="'+t+'" alt="curve btn"> 可以将属性轨道区域的关键帧切换到曲线编辑视图，再次点击即可恢复关键帧编辑视图。</p><h4 id="关键帧编辑模式" tabindex="-1">关键帧编辑模式 <a class="header-anchor" href="#关键帧编辑模式" aria-label="Permalink to &quot;关键帧编辑模式&quot;">​</a></h4><p>关键帧编辑模式的一些关键帧常见操作方式，请参见 <a href="./animation-keyFrames">关键帧编辑模式</a> 的文档说明。</p><h4 id="曲线编辑模式" tabindex="-1">曲线编辑模式 <a class="header-anchor" href="#曲线编辑模式" aria-label="Permalink to &quot;曲线编辑模式&quot;">​</a></h4><p>曲线编辑模式的一些关键帧操作细节，请参见 <a href="./animation-curve">曲线编辑模式</a> 的文档说明。</p><h2 id="动画剪辑属性设置" tabindex="-1">动画剪辑属性设置 <a class="header-anchor" href="#动画剪辑属性设置" aria-label="Permalink to &quot;动画剪辑属性设置&quot;">​</a></h2><p>当前动画剪辑在 <strong>动画编辑器</strong> 上可直接设置的属性包括：<strong>WrapMode</strong>、<strong>Sample</strong>、<strong>Speed</strong> 和 <strong>Duration</strong>。</p><p><img src="'+k+'" alt="set AnimationClip"></p><ul><li><p><strong>WrapMode</strong>：用于设置当前动画剪辑播放的循环模式，目前包括：</p><ul><li>Default：效果与 Normal 一致</li><li>Normal：正向单次播放</li><li>Loop：循环正向播放</li><li>PingPong：以先正向播放再逆向播放的方式循环播放</li><li>Reverse：反向单次播放</li><li>LoopReverse：循环反向播放</li></ul><p>更多关于如何通过脚本代码设置循环模式，请参考 <a href="./use-animation-curve#循环模式">循环模式</a>。</p></li><li><p><strong>Sample</strong>：定义当前动画数据每秒的帧率，也就是一秒要划分为多少帧，默认为 60。详情请参考上文 <strong>时间轴的刻度单位显示</strong> 部分的内容。</p></li><li><p><strong>Speed</strong>：用于设置当前动画的播放速度，默认为 1，值越小播放速度越慢。</p></li><li><p><strong>Duration</strong>：前面的数字表示当动画播放速度为 1 的时候，动画的持续时间，根据最后一个关键帧所在位置决定。后面括号中的数字表示实际运行的持续时间，当调整 Speed 时，会随之变化。</p></li></ul><p>动画剪辑是可以复用的，其状态保存在称为动画状态的对象中，通过动画状态的接口我们可以对动画进行播放、暂停、停止、变速等控制。详情请参考 <a href="./animation-state">动画状态</a>。</p>',51),_=[A];function f(q,S,C,P,x,B){return r(),a("div",null,_)}const R=o(u,[["render",f]]);export{F as __pageData,R as default};
