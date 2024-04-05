import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const l="/docs/cocos/assets/scrollview-content.iyau4JQn.png",n="/docs/cocos/assets/scrollview-inspector.BLv2R60K.png",e="/docs/cocos/assets/scrollview-event.BjN8HgFO.png",h="/docs/cocos/assets/scrollview-hierarchy.B1Th4pxC.png",C=JSON.parse('{"title":"ScrollView 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/scrollview.md","filePath":"zh/ui-system/components/editor/scrollview.md","lastUpdated":1712305443000}'),p={name:"zh/ui-system/components/editor/scrollview.md"},r=t('<h1 id="scrollview-组件参考" tabindex="-1">ScrollView 组件参考 <a class="header-anchor" href="#scrollview-组件参考" aria-label="Permalink to &quot;ScrollView 组件参考&quot;">​</a></h1><p>ScrollView 是一种带滚动功能的容器，它提供一种方式可以在有限的显示区域内浏览更多的内容。通常 ScrollView 会与 <strong>Mask</strong> 组件配合使用，同时也可以添加 <strong>ScrollBar</strong> 组件来显示浏览内容的位置。</p><p><img src="'+l+'" alt="scrollview-content"></p><p><img src="'+n+'" alt="scrollview-inspector"></p><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后选择 <strong>UI/ScrollView</strong> 即可添加 ScrollView 组件到节点上。</p><p>滚动视图的脚本接口请参考 <a href="./__APIDOC__/zh/class/ScrollView">ScrollView API</a>。</p><p>关于使用可以参考范例 <strong>ScrollView</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/06.scrollview" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.8/assets/cases/ui/06.scrollview" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="scrollview-属性" tabindex="-1">ScrollView 属性 <a class="header-anchor" href="#scrollview-属性" aria-label="Permalink to &quot;ScrollView 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;">它是一个节点引用，用来创建 ScrollView 的可滚动内容，通常这可能是一个包含一张巨大图片的节点。</td></tr><tr><td style="text-align:left;">Horizontal</td><td style="text-align:left;">布尔值，是否允许横向滚动。</td></tr><tr><td style="text-align:left;">Vertical</td><td style="text-align:left;">布尔值，是否允许纵向滚动。</td></tr><tr><td style="text-align:left;">Inertia</td><td style="text-align:left;">滚动的时候是否有加速度。</td></tr><tr><td style="text-align:left;">Brake</td><td style="text-align:left;">浮点数，滚动之后的减速系数。取值范围是 0-1，如果是 1 则立马停止滚动，如果是 0，则会一直滚动到 content 的边界。</td></tr><tr><td style="text-align:left;">Elastic</td><td style="text-align:left;">布尔值，是否回弹。</td></tr><tr><td style="text-align:left;">BounceDuration</td><td style="text-align:left;">浮点数，回弹所需要的时间。取值范围是 0-10。</td></tr><tr><td style="text-align:left;">HorizontalScrollBar</td><td style="text-align:left;">它是一个节点引用，用来创建一个滚动条来显示 content 在水平方向上的位置。</td></tr><tr><td style="text-align:left;">VerticalScrollBar</td><td style="text-align:left;">它是一个节点引用，用来创建一个滚动条来显示 content 在垂直方向上的位置</td></tr><tr><td style="text-align:left;">ScrollEvents</td><td style="text-align:left;">列表类型，默认为空，用户添加的每一个事件由节点引用，组件名称和一个响应函数组成。详情见下方的 ScrollView 事件</td></tr><tr><td style="text-align:left;">CancelInnerEvents</td><td style="text-align:left;">如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。</td></tr></tbody></table><h3 id="scrollview-事件" tabindex="-1">ScrollView 事件 <a class="header-anchor" href="#scrollview-事件" aria-label="Permalink to &quot;ScrollView 事件&quot;">​</a></h3><p><img src="'+e+'" alt="scrollview-event"></p><p>事件结构参考：<a href="./button#组件事件结构">组件事件结构</a></p><p>ScrollView 的事件回调有两个参数，第一个参数是 ScrollView 本身，第二个参数是 ScrollView 的事件类型。</p><h3 id="scrollbar-设置" tabindex="-1">ScrollBar 设置 <a class="header-anchor" href="#scrollbar-设置" aria-label="Permalink to &quot;ScrollBar 设置&quot;">​</a></h3><p>ScrollBar 是可选的，你可以选择只设置 Horizontal ScrollBar 或者 Vertical ScrollBar，当然也可以两者都设置。建立关联可以通过在 <strong>层级管理器</strong> 里面拖拽一个带有 ScrollBar 组件的节点到 ScrollView 的相应字段完成。</p><h2 id="详细说明" tabindex="-1">详细说明 <a class="header-anchor" href="#详细说明" aria-label="Permalink to &quot;详细说明&quot;">​</a></h2><p>ScrollView 组件必须有指定的 content 节点才能起作用，通过指定滚动方向和 content 节点在此方向上的长度来计算滚动时的位置信息，Content 节点也可以通过添加 <code>Widget</code> 设置自动 resize，也可以通过添加 <code>Layout</code> 来完成子节点布局，但是这两个组件不应该同时添加到一个节点上以避免产生不可预料的后果。</p><p>通常一个 ScrollView 的节点树如下图：</p><p><img src="'+h+`" alt="scrollview-hierarchy"></p><p>这里的 view 用来定义一个可以显示的滚动区域，所以通常 MaskComponent 组件会被添加到 view 上。可以滚动的内容可以直接放到 content 节点或者添加节 content 的子节点上。</p><h2 id="通过脚本代码添加回调" tabindex="-1">通过脚本代码添加回调 <a class="header-anchor" href="#通过脚本代码添加回调" aria-label="Permalink to &quot;通过脚本代码添加回调&quot;">​</a></h2><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h3><p>这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 <code>EventHandler</code> 对象，然后设置好对应的 <code>target</code>、<code>component</code>、<code>handler</code> 和 <code>customEventData</code> 参数。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, ScrollView, EventHandler } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scrollViewEventHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scrollViewEventHandler.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个 node 节点是你的事件处理代码组件所属的节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scrollViewEventHandler.component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个是脚本类名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scrollViewEventHandler.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;callback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scrollViewEventHandler.customEventData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foobar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scrollview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ScrollView);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scrollview.scrollEvents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scrollViewEventHandler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scrollview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">eventType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">customEventData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里 scrollview 是一个 Scrollview 组件对象实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里的 eventType === ScrollView.EventType enum 里面的值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里的 customEventData 参数就等于你之前设置的 &#39;foobar&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h3><p>通过 <code>scrollview.node.on(&#39;scroll-to-top&#39;, ...)</code> 的方式来添加</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, ScrollView } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ScrollView)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    scrollview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScrollView</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.scrollview.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll-to-top&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.callback, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scrollView</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScrollView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 回调的参数是 ScrollView 组件，注意这种方式注册的事件，无法传递 customEventData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>同样的，你也可以注册 <code>scrolling</code>、<code>touch-up</code>、<code>scroll-began</code> 等事件，这些事件的回调函数的参数与 <code>scroll-to-top</code> 的参数一致。</p><p>关于完整的 ScrollView 的事件列表，可以参考 ScrollView 的 API 文档 <a href="./__APIDOC__/zh/class/ScrollView">ScrollView API</a>。</p>`,29),k=[r];function o(c,d,E,g,y,F){return a(),i("div",null,k)}const v=s(p,[["render",o]]);export{C as __pageData,v as default};
