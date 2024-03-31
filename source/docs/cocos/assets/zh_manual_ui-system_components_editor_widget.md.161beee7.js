import{_ as s,v as t,b as a,R as n}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/widget-default.2edf5edd.png",e="/docs/cocos/assets/widget-left-100px.96711373.png",o="/docs/cocos/assets/widget-bottom-0.5.52adbe5d.png",p="/docs/cocos/assets/widget-bottom-right-0px.b31b7fc1.png",r="/docs/cocos/assets/widget-h-center.f474c941.png",c="/docs/cocos/assets/widget-v-center-right-0.5.20d2f632.png",i="/docs/cocos/assets/widget-h-stretch.2fb9c359.png",d="/docs/cocos/assets/widget-v-stretch.71c3d7fd.png",y="/docs/cocos/assets/widget-margin-50px.478918cf.png",_=JSON.parse('{"title":"Widget 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/widget.md","filePath":"zh/manual/ui-system/components/editor/widget.md"}'),g={name:"zh/manual/ui-system/components/editor/widget.md"},F=n('<h1 id="widget-组件参考" tabindex="-1">Widget 组件参考 <a class="header-anchor" href="#widget-组件参考" aria-label="Permalink to &quot;Widget 组件参考&quot;">​</a></h1><p>Widget (对齐挂件) 是一个很常用的 UI 布局组件。它能使当前节点自动对齐到父物体的任意位置，或者约束尺寸，让你的游戏可以方便地适配不同的分辨率。对齐方案详细说明请参考 <a href="./../engine/widget-align.html">对齐方案</a></p><p><img src="'+l+'" alt="default"></p><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后选择 <strong>UI/Widget</strong> 即可添加 Widget 组件到节点上。</p><p>对齐挂件的脚本接口请参考 <a href="./__APIDOC__/zh/class/Widget.html">Widget API</a>。</p><p>关于使用可以参考范例 <strong>Widget</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.7/assets/cases/ui/04.widget" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.7/assets/cases/ui/04.widget" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">Top</td><td style="text-align:left;">对齐上边界</td><td style="text-align:left;">选中后，将在旁边显示一个输入框，用于设定当前节点的上边界和父物体的上边界之间的距离。</td></tr><tr><td style="text-align:left;">Bottom</td><td style="text-align:left;">对齐下边界</td><td style="text-align:left;">选中后，将在旁边显示一个输入框，用于设定当前节点的下边界和父物体的下边界之间的距离。</td></tr><tr><td style="text-align:left;">Left</td><td style="text-align:left;">对齐左边界</td><td style="text-align:left;">选中后，将在旁边显示一个输入框，用于设定当前节点的左边界和父物体的左边界之间的距离。</td></tr><tr><td style="text-align:left;">Right</td><td style="text-align:left;">对齐右边界</td><td style="text-align:left;">选中后，将在旁边显示一个输入框，用于设定当前节点的右边界和父物体的右边界之间的距离。</td></tr><tr><td style="text-align:left;">HorizontalCenter</td><td style="text-align:left;">水平方向居中</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">VerticalCenter</td><td style="text-align:left;">竖直方向居中</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Target</td><td style="text-align:left;">对齐目标</td><td style="text-align:left;">指定对齐参照的节点，当这里未指定目标时会使用直接父级节点作为对齐目标</td></tr><tr><td style="text-align:left;">AlignMode</td><td style="text-align:left;">指定 Widget 的对齐方式，用于决定运行时 Widget 应何时更新</td><td style="text-align:left;">通常设置为 <strong>ALWAYS</strong>，每次节点产生变动时重新对齐。<br>设置为 <strong>ONCE</strong> 时，仅在组件初始化时进行一次对齐。<strong>ON_WINDOW_RESIZE</strong> 时会在每次窗口变动时候更新一次</td></tr></tbody></table><h2 id="对齐边界" tabindex="-1">对齐边界 <a class="header-anchor" href="#对齐边界" aria-label="Permalink to &quot;对齐边界&quot;">​</a></h2><p>我们可以在 Canvas 下新建一个 sprite，在 sprite 节点上添加一个 Widget 组件，然后做如下一些测试：</p><h3 id="左对齐-左边界距离-100-px" tabindex="-1">左对齐，左边界距离 100 px <a class="header-anchor" href="#左对齐-左边界距离-100-px" aria-label="Permalink to &quot;左对齐，左边界距离 100 px&quot;">​</a></h3><p><img src="'+e+'" alt="left-100px"></p><h3 id="下对齐-下边界距离-50" tabindex="-1">下对齐，下边界距离 50% <a class="header-anchor" href="#下对齐-下边界距离-50" aria-label="Permalink to &quot;下对齐，下边界距离 50%&quot;">​</a></h3><p>百分比将以父节点的宽或高作为基准。</p><p><img src="'+o+'" alt="bottom-0.5"></p><h3 id="右下对齐-边界距离-0-px" tabindex="-1">右下对齐，边界距离 0 px <a class="header-anchor" href="#右下对齐-边界距离-0-px" aria-label="Permalink to &quot;右下对齐，边界距离 0 px&quot;">​</a></h3><p><img src="'+p+'" alt="bottom-right-0px"></p><h2 id="居中对齐" tabindex="-1">居中对齐 <a class="header-anchor" href="#居中对齐" aria-label="Permalink to &quot;居中对齐&quot;">​</a></h2><h3 id="水平方向居中" tabindex="-1">水平方向居中 <a class="header-anchor" href="#水平方向居中" aria-label="Permalink to &quot;水平方向居中&quot;">​</a></h3><p><img src="'+r+'" alt="bottom-right-0px"></p><h3 id="竖直方向居中-并且右边界距离-50" tabindex="-1">竖直方向居中，并且右边界距离 50% <a class="header-anchor" href="#竖直方向居中-并且右边界距离-50" aria-label="Permalink to &quot;竖直方向居中，并且右边界距离 50%&quot;">​</a></h3><p><img src="'+c+'" alt="v-center-right-0.5"></p><h2 id="约束尺寸" tabindex="-1">约束尺寸 <a class="header-anchor" href="#约束尺寸" aria-label="Permalink to &quot;约束尺寸&quot;">​</a></h2><p>如果左右同时对齐，或者上下同时对齐，那么在相应方向上的尺寸就会被拉伸。 下面演示一下，在场景中放置两个矩形 Sprite，大的作为对话框背景，小的作为对话框上的按钮。按钮节点作为对话框的子节点，并且按钮设置成 Sliced 模式以便展示拉伸效果。</p><h3 id="宽度拉伸-左右边距-10" tabindex="-1">宽度拉伸，左右边距 10% <a class="header-anchor" href="#宽度拉伸-左右边距-10" aria-label="Permalink to &quot;宽度拉伸，左右边距 10%&quot;">​</a></h3><p><img src="'+i+'" alt="h-stretch"></p><h3 id="高度拉伸-上下边距-0-同时水平居中" tabindex="-1">高度拉伸，上下边距 0，同时水平居中 <a class="header-anchor" href="#高度拉伸-上下边距-0-同时水平居中" aria-label="Permalink to &quot;高度拉伸，上下边距 0，同时水平居中&quot;">​</a></h3><p><img src="'+d+'" alt="v-stretch"></p><h3 id="水平和竖直同时拉伸-边距-50-px" tabindex="-1">水平和竖直同时拉伸，边距 50 px <a class="header-anchor" href="#水平和竖直同时拉伸-边距-50-px" aria-label="Permalink to &quot;水平和竖直同时拉伸，边距 50 px&quot;">​</a></h3><p><img src="'+y+`" alt="margin-50px"></p><h2 id="对节点位置、尺寸的限制" tabindex="-1">对节点位置、尺寸的限制 <a class="header-anchor" href="#对节点位置、尺寸的限制" aria-label="Permalink to &quot;对节点位置、尺寸的限制&quot;">​</a></h2><p>如果 <strong>Align Mode</strong> 属性设为 <strong>ALWAYS</strong> 时，会在运行时每帧都按照设置的对齐策略进行对齐，组件所在节点的位置（position）和尺寸（width，height）属性可能会被限制，不能通过 API 或动画系统自由修改。这是因为通过 Widget 对齐是在每帧的最后阶段进行处理的，因此对 Widget 组件中已经设置了对齐的相关属性进行设置，最后都会被 Widget 组件本身的更新所重置。</p><p>如果需要同时满足对齐策略和可以在运行时改变位置和尺寸的需要，可以通过以下两种方式实现：</p><ol><li>确保 <strong>Widget</strong> 组件的 <strong>Align Mode</strong> 属性设置为 <strong>ONCE</strong>，该属性只会负责在组件初始化（onEnable）时进行一次对齐，而不会每帧再进行一次对齐。可以在初始化时自动完成对齐，然后就可以通过 API 或动画系统对 UI 进行移动变换了。</li><li>通过调用 <strong>Widget</strong> 组件的对齐边距 API，包括 <strong>top</strong>、 <strong>bottom</strong>、 <strong>left</strong>、 <strong>right</strong>，直接修改 Widget 所在节点的位置或某一轴向的拉伸。这些属性也可以在动画编辑器中添加相应关键帧，保证对齐的同时实现各种丰富的 UI 动画。</li></ol><h3 id="通过脚本代码修改对齐距离" tabindex="-1">通过脚本代码修改对齐距离 <a class="header-anchor" href="#通过脚本代码修改对齐距离" aria-label="Permalink to &quot;通过脚本代码修改对齐距离&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_decorator</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Widget</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ccclass</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> property </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _decorator</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">ccclass</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Example</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">widget</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Widget</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 设置默认对齐单位是 px</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">bottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 设置对齐单位是 %</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">isAbsoluteTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">isAbsoluteBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">bottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 10%</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">widget</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 10%</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,36),D=[F];function h(C,A,f,m,x,b){return t(),a("div",null,D)}const q=s(g,[["render",h]]);export{_ as __pageData,q as default};
