import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const h="/docs/cocos/assets/tweener.BNQlFCk9.png",c=JSON.parse('{"title":"缓动函数","description":"","frontmatter":{},"headers":[],"relativePath":"zh/tween/tween-function.md","filePath":"zh/tween/tween-function.md","lastUpdated":1712305443000}'),k={name:"zh/tween/tween-function.md"},t=n(`<h1 id="缓动函数" tabindex="-1">缓动函数 <a class="header-anchor" href="#缓动函数" aria-label="Permalink to &quot;缓动函数&quot;">​</a></h1><p>引擎实现了一系列不同类型的缓动函数，通过这些缓动函数，可以实现不同的实时动画效果。这些缓动函数主要用于 <code>Tween.to</code> 和 <code>Tween.by</code> 这两个接口中。</p><h2 id="内置缓动函数" tabindex="-1">内置缓动函数 <a class="header-anchor" href="#内置缓动函数" aria-label="Permalink to &quot;内置缓动函数&quot;">​</a></h2><p>目前引擎提供的缓动函数如下所示：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TweenEasing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;linear&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;smooth&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fade&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;constant&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quadIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quadOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quadInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quadOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cubicIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cubicOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cubicInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cubicOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quartIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quartOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quartInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quartOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;quintIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quintOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quintInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;quintOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sineIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sineOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sineInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sineOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;expoIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;expoOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;expoInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;expoOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;circIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;circOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;circInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;circOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;elasticIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;elasticOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;elasticInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;elasticOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;backIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;backOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;backInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;backOutIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bounceIn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bounceOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bounceInOut&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bounceOutIn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>其缓动效果可参考下图：</p><p><img src="`+h+`" alt="tweener"></p><p>图片源自 <a href="http://hosted.zeh.com.br/tweener/docs/en-us/" target="_blank" rel="noreferrer">http://hosted.zeh.com.br/tweener/docs/en-us/</a></p><p>通过 <code>ITweenOption</code> 接口，可以修改缓动函数。其代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tweenDuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓动的时长</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tweenDuration, { position: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }, {  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里以node的位置信息坐标缓动的目标 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        easing: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;backIn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓动函数，可以使用已有的，也可以传入自定义的函数。      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();                                               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用 start 方法，开启缓动</span></span></code></pre></div><h2 id="itweenoption-接口说明" tabindex="-1">ITweenOption 接口说明 <a class="header-anchor" href="#itweenoption-接口说明" aria-label="Permalink to &quot;ITweenOption 接口说明&quot;">​</a></h2><p><code>ITweenOption</code> 为缓动的可选属性接口定义。其接口皆为 <strong>可选</strong>，可按需使用。完整示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tweenDuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓动的时长</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tweenDuration, { position: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }, {  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里以node的位置信息坐标缓动的目标 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        easing: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;backIn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓动函数，可以使用已有的，也可以传入自定义的函数。      </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        onStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回调，当缓动动作启动时触发。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        onUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ratio</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// onUpdate 接受当前缓动的进度</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target;                    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将缓动系统计算出的结果赋予 node 的位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        onComplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回调，当缓动动作更新时触发。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ratio</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 返回自定义插值进度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();                                               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用 start 方法，开启缓动</span></span></code></pre></div><p>通过 <code>progress</code> 接口，也可以自定义缓动的进度，代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        position: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ratio</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lerp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start, end, ratio);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>完整 API 描述请参考： <a href="./__APIDOC__/zh/interface/ITweenOption">ITweenOption</a></p>`,16),p=[t];function l(e,r,E,d,F,g){return a(),i("div",null,p)}const o=s(k,[["render",l]]);export{c as __pageData,o as default};
