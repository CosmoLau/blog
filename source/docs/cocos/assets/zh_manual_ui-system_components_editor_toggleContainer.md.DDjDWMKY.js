import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CqnjdYks.js";const t="/docs/cocos/assets/toggle-container.Bvhx2uS7.png",y=JSON.parse('{"title":"ToggleContainer 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/toggleContainer.md","filePath":"zh/manual/ui-system/components/editor/toggleContainer.md"}'),e={name:"zh/manual/ui-system/components/editor/toggleContainer.md"},l=n('<h1 id="togglecontainer-组件参考" tabindex="-1">ToggleContainer 组件参考 <a class="header-anchor" href="#togglecontainer-组件参考" aria-label="Permalink to &quot;ToggleContainer 组件参考&quot;">​</a></h1><p><img src="'+t+`" alt="toggle-container"></p><p>ToggleContainer 不是一个可见的 UI 组件，它可以用来修改一组 Toggle 组件的行为。当一组 Toggle 属于同一个 ToggleContainer 的时候，任何时候只能有一个 Toggle 处于选中状态。</p><blockquote><p><strong>注意</strong>：所有包含 Toggle 组件的一级子节点都会自动被添加到该容器中</p></blockquote><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后选择 <strong>UI/ToggleContainer</strong> 即可添加 ToggleContainer 组件到节点上。</p><p>ToggleContainer 的组件接口请参考 <a href="./__APIDOC__/zh/class/ToggleContainer.html">ToggleContainer API</a>。</p><p>关于使用可以参考范例 <strong>Toggle</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.7/assets/cases/ui/09.toggle" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.7/assets/cases/ui/09.toggle" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="togglecontainer-属性" tabindex="-1">ToggleContainer 属性 <a class="header-anchor" href="#togglecontainer-属性" aria-label="Permalink to &quot;ToggleContainer 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">AllowSwitchOff</td><td style="text-align:left;">如果这个设置为 true，那么 toggle 按钮在被点击的时候可以反复地被选中和未选中。</td></tr><tr><td style="text-align:left;">CheckEvents</td><td style="text-align:left;">选中事件。列表类型，默认为空，用户添加的每一个事件由节点引用，组件名称和一个响应函数组成。</td></tr></tbody></table><h2 id="togglecontainer-事件" tabindex="-1">ToggleContainer 事件 <a class="header-anchor" href="#togglecontainer-事件" aria-label="Permalink to &quot;ToggleContainer 事件&quot;">​</a></h2><p>事件结构参考：<a href="./button.html#组件事件结构">组件事件结构</a></p><p>ToggleContainer 的事件回调有二个参数，第一个参数是 Toggle 本身，第二个参数是 customEventData。</p><h2 id="详细说明" tabindex="-1">详细说明 <a class="header-anchor" href="#详细说明" aria-label="Permalink to &quot;详细说明&quot;">​</a></h2><p>ToggleContainer 一般不会单独使用，它需要与 <code>Toggle</code> 配合使用来实现 RadioButton 的单选效果。</p><h2 id="通过脚本代码添加回调" tabindex="-1">通过脚本代码添加回调 <a class="header-anchor" href="#通过脚本代码添加回调" aria-label="Permalink to &quot;通过脚本代码添加回调&quot;">​</a></h2><p>这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 <code>EventHandler</code> 对象，然后设置好对应的 <code>target</code>、<code>component</code>、<code>handler</code> 和 <code>customEventData</code> 参数。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Event, Node, ToggleContainer, EventHandler } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> containerEventHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        containerEventHandler.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个 node 节点是你的事件处理代码组件所属的节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        containerEventHandler.component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个是脚本类名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        containerEventHandler.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;callback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        containerEventHandler.customEventData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foobar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ToggleContainer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        container.checkEvents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(containerEventHandler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">customEventData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里的 customEventData 参数就等于之前设置的 &#39;foobar&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),h=[l];function p(k,r,o,g,d,E){return a(),i("div",null,h)}const F=s(e,[["render",p]]);export{y as __pageData,F as default};
