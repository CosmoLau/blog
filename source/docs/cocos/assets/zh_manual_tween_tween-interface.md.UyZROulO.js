import{_ as t,c as s,o as i,a5 as e}from"./chunks/framework.CqnjdYks.js";const E=JSON.parse('{"title":"缓动接口","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/tween/tween-interface.md","filePath":"zh/manual/tween/tween-interface.md"}'),a={name:"zh/manual/tween/tween-interface.md"},n=e(`<h1 id="缓动接口" tabindex="-1">缓动接口 <a class="header-anchor" href="#缓动接口" aria-label="Permalink to &quot;缓动接口&quot;">​</a></h1><h2 id="tween-属性和接口说明" tabindex="-1">Tween 属性和接口说明 <a class="header-anchor" href="#tween-属性和接口说明" aria-label="Permalink to &quot;Tween 属性和接口说明&quot;">​</a></h2><h3 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明" aria-label="Permalink to &quot;接口说明&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">接口</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>tag</strong></td><td style="text-align:left;">为当前缓动添加一个数值类型（<code>number</code>）的标签</td></tr><tr><td style="text-align:left;"><strong>to</strong></td><td style="text-align:left;">添加一个对属性进行 <strong>绝对值</strong> 计算的间隔动作</td></tr><tr><td style="text-align:left;"><strong>by</strong></td><td style="text-align:left;">添加一个对属性进行 <strong>相对值</strong> 计算的间隔动作</td></tr><tr><td style="text-align:left;"><strong>set</strong></td><td style="text-align:left;">添加一个 <strong>直接设置目标属性</strong> 的瞬时动作</td></tr><tr><td style="text-align:left;"><strong>delay</strong></td><td style="text-align:left;">添加一个 <strong>延迟时间</strong> 的瞬时动作</td></tr><tr><td style="text-align:left;"><strong>call</strong></td><td style="text-align:left;">添加一个 <strong>调用回调</strong> 的瞬时动作</td></tr><tr><td style="text-align:left;"><strong>target</strong></td><td style="text-align:left;">添加一个 <strong>直接设置缓动目标</strong> 的瞬时动作</td></tr><tr><td style="text-align:left;"><strong>union</strong></td><td style="text-align:left;"><strong>将上下文的缓动动作打包成一个</strong></td></tr><tr><td style="text-align:left;"><strong>then</strong></td><td style="text-align:left;"><strong>插入一个 Tween 到缓动队列中</strong></td></tr><tr><td style="text-align:left;"><strong>repeat</strong></td><td style="text-align:left;"><strong>执行几次</strong>（此前为重复几次，请及时适配）</td></tr><tr><td style="text-align:left;"><strong>repeatForever</strong></td><td style="text-align:left;"><strong>一直重复执行</strong></td></tr><tr><td style="text-align:left;"><strong>sequence</strong></td><td style="text-align:left;"><strong>添加一个顺序执行的缓动</strong></td></tr><tr><td style="text-align:left;"><strong>parallel</strong></td><td style="text-align:left;"><strong>添加一个同时进行的缓动</strong></td></tr><tr><td style="text-align:left;"><strong>start</strong></td><td style="text-align:left;"><strong>启动缓动</strong></td></tr><tr><td style="text-align:left;"><strong>stop</strong></td><td style="text-align:left;"><strong>停止缓动</strong></td></tr><tr><td style="text-align:left;"><strong>clone</strong></td><td style="text-align:left;"><strong>克隆缓动</strong></td></tr><tr><td style="text-align:left;"><strong>show</strong></td><td style="text-align:left;"><strong>启用节点链上的渲染，缓动目标需要为 Node</strong></td></tr><tr><td style="text-align:left;"><strong>hide</strong></td><td style="text-align:left;"><strong>禁用节点链上的渲染，缓动目标需要为 Node</strong></td></tr><tr><td style="text-align:left;"><strong>removeSelf</strong></td><td style="text-align:left;"><strong>将节点移出场景树，缓动目标需要为 Node</strong></td></tr></tbody></table><h3 id="静态接口说明" tabindex="-1">静态接口说明 <a class="header-anchor" href="#静态接口说明" aria-label="Permalink to &quot;静态接口说明&quot;">​</a></h3><p>这些方法为 <code>Tween</code> 的静态方法，调用方式示例：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tween.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tween.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAllByTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tween.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAllByTarget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node);</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">接口</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>stopAll</strong></td><td style="text-align:left;">停止所有缓动 <br> 该接口会移除底层所有已注册的缓动动画 <br> <strong>注意</strong>：该方法会影响所有对象</td></tr><tr><td style="text-align:left;"><strong>stopAllByTag</strong></td><td style="text-align:left;">停止所有指定标签的缓动 <br> 该接口将移除通过 <strong>tag</strong> 方法指定的所有缓动 <br> 可通过指定第二个参数 <code>target?: object</code> 来指定是否仅移除该对象上带有某个标签的缓动</td></tr><tr><td style="text-align:left;"><strong>stopAllByTarget</strong></td><td style="text-align:left;">停止所有指定对象的缓动</td></tr></tbody></table><h2 id="工具函数说明" tabindex="-1">工具函数说明 <a class="header-anchor" href="#工具函数说明" aria-label="Permalink to &quot;工具函数说明&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">接口</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>tween&lt;T&gt;</strong></td><td style="text-align:left;">这是一个工具函数，帮助实例化 <code>Tween</code> 类 <br> <strong>注意</strong>：该方法并非 <code>Tween</code> 类的成员，开发者也可自行调用 <code>new Tween&lt;T&gt;(target:T)</code> 的方式实例化缓动。</td></tr></tbody></table><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>这里以一个的 <code>to</code> 缓动动画作为示例演示缓动的用法：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tweenDuration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓动的时长</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.position).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( tweenDuration, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里以node的位置信息坐标缓动的目标 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {                                                               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ITweenOption 的接口实现：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ratio</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{                       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// onUpdate 接受当前缓动的进度</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target;                                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将缓动系统计算出的结果赋予 node 的位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();                                                         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用 start 方法，开启缓动</span></span></code></pre></div><p>更多示例可查看 <a href="./tween-example.html">缓动示例</a></p><h2 id="一些限制" tabindex="-1">一些限制 <a class="header-anchor" href="#一些限制" aria-label="Permalink to &quot;一些限制&quot;">​</a></h2><p>为了降低更新 <code>Node Transform</code> 信息的频率，<code>Node</code> 内部维护了一个 <code>dirty</code> 状态，只有在调用了可能会改变 <code>Node Transform</code> 信息的接口，才会将 <code>dirty</code> 置为需要更新的状态。</p><p>但目前的接口存在一定的限制，例如：通过 <code>this.node.position</code> 获取到的 <code>position</code> 是一个通用的 <code>Vec3</code>。</p><p>当执行 <code>this.node.position.x = 1</code> 这段代码的时候，只执行了 <code>position</code> 的 <code>getter</code>，并没有执行 <code>position</code> 的 <code>setter</code>。由于 <code>dirty</code> 并没有更新，便会导致渲染时使用的节点的 <code>Transform</code> 信息没有更新。</p><p>目前，我们也不支持这样的调用，而是鼓励使用 <code>setPosition</code> 或 <code>position</code> 的 <code>setter</code>，如下所示：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _pos;      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里将通过 position 的 setter</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_pos);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里将通过接口 setPosition</span></span></code></pre></div>`,20),l=[n];function h(r,d,o,p,k,g){return i(),s("div",null,l)}const c=t(a,[["render",h]]);export{E as __pageData,c as default};
