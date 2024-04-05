import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/pageview-inspector.BPSXWifV.png",n="/docs/cocos/assets/pageview-event.AUL282r3.png",F=JSON.parse('{"title":"PageView 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/pageview.md","filePath":"zh/ui-system/components/editor/pageview.md","lastUpdated":1712305443000}'),l={name:"zh/ui-system/components/editor/pageview.md"},h=t('<h1 id="pageview-组件参考" tabindex="-1">PageView 组件参考 <a class="header-anchor" href="#pageview-组件参考" aria-label="Permalink to &quot;PageView 组件参考&quot;">​</a></h1><p>PageView 是一种页面视图容器.</p><p><img src="'+e+'" alt="pageview-inspector"></p><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后选择 <strong>UI/PageView</strong> 即可添加 PageView 组件到节点上。</p><p>页面视图的脚本接口请参考 <a href="./__APIDOC__/zh/class/PageView">PageView API</a>。</p><p>关于使用可以参考范例 <strong>PageView</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/15.pageview" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.8/assets/cases/ui/15.pageview" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="pageview-属性" tabindex="-1">PageView 属性 <a class="header-anchor" href="#pageview-属性" aria-label="Permalink to &quot;PageView 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">SizeMode</td><td style="text-align:left;">页面视图中每个页面大小类型，目前有 Unified 和 Free 类型。</td></tr><tr><td style="text-align:left;">Content</td><td style="text-align:left;">它是一个节点引用，用来创建 PageView 的可滚动内容</td></tr><tr><td style="text-align:left;">Direction</td><td style="text-align:left;">页面视图滚动方向</td></tr><tr><td style="text-align:left;">ScrollThreshold</td><td style="text-align:left;">滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原</td></tr><tr><td style="text-align:left;">AutoPageTurningThreshold</td><td style="text-align:left;">快速滑动翻页临界值，当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值，该值与此临界值相比较，如果大于临界值，则进行自动翻页</td></tr><tr><td style="text-align:left;">Inertia</td><td style="text-align:left;">否开启滚动惯性</td></tr><tr><td style="text-align:left;">Brake</td><td style="text-align:left;">开启惯性后，在用户停止触摸后滚动多快停止，0 表示永不停止，1 表示立刻停止</td></tr><tr><td style="text-align:left;">Elastic</td><td style="text-align:left;">布尔值，是否回弹</td></tr><tr><td style="text-align:left;">Bounce Duration</td><td style="text-align:left;">浮点数，回弹所需要的时间。取值范围是 0-10</td></tr><tr><td style="text-align:left;">Indicator</td><td style="text-align:left;">页面视图指示器组件</td></tr><tr><td style="text-align:left;">PageTurningEventTiming</td><td style="text-align:left;">设置 PageView、PageTurning 事件的发送时机</td></tr><tr><td style="text-align:left;">PageEvents</td><td style="text-align:left;">数组，滚动视图的事件回调函数</td></tr><tr><td style="text-align:left;">CancelInnerEvents</td><td style="text-align:left;">布尔值，是否在滚动行为时取消子节点上注册的触摸事件</td></tr></tbody></table><h3 id="pageviewindicator-设置" tabindex="-1">PageViewIndicator 设置 <a class="header-anchor" href="#pageviewindicator-设置" aria-label="Permalink to &quot;PageViewIndicator 设置&quot;">​</a></h3><p>PageViewIndicator 是可选的，该组件是用来显示页面的个数和标记当前显示在哪一页。</p><p>建立关联可以通过在 <strong>层级管理器</strong> 里面拖拽一个带有 PageViewIndicator 组件的节点到 PageView 的相应字段完成。</p><h3 id="pageview-事件" tabindex="-1">PageView 事件 <a class="header-anchor" href="#pageview-事件" aria-label="Permalink to &quot;PageView 事件&quot;">​</a></h3><p><img src="'+n+`" alt="pageview-event"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">Target</td><td style="text-align:left;">带有脚本组件的节点</td></tr><tr><td style="text-align:left;">Component</td><td style="text-align:left;">脚本组件名称</td></tr><tr><td style="text-align:left;">Handler</td><td style="text-align:left;">指定一个回调函数，当 PageView 的事件发生的时候会调用此函数</td></tr><tr><td style="text-align:left;">CustomEventData</td><td style="text-align:left;">用户指定任意的字符串作为事件回调的最后一个参数传入</td></tr></tbody></table><p>PageView 的事件回调有两个参数，第一个参数是 PageView 本身，第二个参数是 PageView 的事件类型。</p><h2 id="详细说明" tabindex="-1">详细说明 <a class="header-anchor" href="#详细说明" aria-label="Permalink to &quot;详细说明&quot;">​</a></h2><p>PageView 组件必须有指定的 content 节点才能起作用，content 中的每个子节点为一个单独页面，且每个页面的大小为 PageView 节点的大小，如果节点大小大于内容大小的话，可能会导致出现滚动不完整的现象。在 PageView 组件下有一个 view 节点对象，该对象结合 ScrollThreshold 决定了当前滑动的距离是否达到可以翻页的条件，操作效果分为以下两种：</p><ul><li><strong>缓慢滑动</strong>：通过拖拽视图中的页面到达指定的 ScrollThreshold 数值（该数值是页面大小的百分比）以后松开会自动滑动到下一页。</li><li><strong>快速滑动</strong>：快速的向一个方向进行拖动，自动滑倒下一页，每次滑动最多只能一页。</li></ul><h2 id="通过脚本代码添加回调" tabindex="-1">通过脚本代码添加回调 <a class="header-anchor" href="#通过脚本代码添加回调" aria-label="Permalink to &quot;通过脚本代码添加回调&quot;">​</a></h2><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h3><p>这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 <code>EventHandler</code> 对象，然后设置好对应的 <code>target</code>、<code>component</code>、<code>handler</code> 和 <code>customEventData</code> 参数。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Event, Node, PageView, EventHandler } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pageChangedEventHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pageChangedEventHandler.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个 node 节点是你的事件处理代码组件所属的节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pageChangedEventHandler.component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个是脚本类名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pageChangedEventHandler.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;callback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pageChangedEventHandler.customEventData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foobar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> page</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PageView);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        page.clickEvents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pageChangedEventHandler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">customEventData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pageview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PageView);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(customEventData); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// foobar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h3><p>通过 <code>pageView.node.on(&#39;page-turning&#39;, ...)</code> 的方式来添加</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Event, Node, PageView } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pageView.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;page-turning&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.callback, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pageView</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PageView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 回调的参数是 pageView 组件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 另外，注意这种方式注册的事件，也无法传递 customEventData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,25),p=[h];function k(r,d,g,E,o,c){return a(),i("div",null,p)}const C=s(l,[["render",k]]);export{F as __pageData,C as default};
