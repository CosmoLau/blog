import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CqnjdYks.js";const o=JSON.parse('{"title":"线程安全","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/advanced-topics/thread-safety.md","filePath":"zh/manual/advanced-topics/thread-safety.md"}'),h={name:"zh/manual/advanced-topics/thread-safety.md"},l=n(`<h1 id="线程安全" tabindex="-1">线程安全 <a class="header-anchor" href="#线程安全" aria-label="Permalink to &quot;线程安全&quot;">​</a></h1><h2 id="线程安全-1" tabindex="-1">线程安全 <a class="header-anchor" href="#线程安全-1" aria-label="Permalink to &quot;线程安全&quot;">​</a></h2><p>在 Cocos Creator 发布的原生应用中，至少有两个线程：<strong>GL 线程</strong> 和 <strong>原生系统的 UI 线程</strong>。</p><ul><li><strong>GL 线程</strong>：执行 Cocos 引擎的渲染相关代码和 JavaScript 脚本代码</li><li><strong>UI 线程</strong>：平台的原生 UI 创建、响应和更新</li></ul><p>所以，我们需要注意以下两个问题：</p><ol><li>当 UI 线程中的代码要调用 GL 线程中的代码时，需要处理线程安全问题</li><li>当 GL 线程要调用 UI 线程中的代码时，需要处理线程安全问题</li></ol><p>接下来，我们看看不同情况下处理线程安全的方法。</p><h2 id="在-ui-线程中执行" tabindex="-1">在 UI 线程中执行 <a class="header-anchor" href="#在-ui-线程中执行" aria-label="Permalink to &quot;在 UI 线程中执行&quot;">​</a></h2><p>当我们在 Android 平台编写的 Java 方法有 UI 相关的操作，在被 GL 线程中的代码调用时，都需要利用 <code>app.runOnUiThread</code> 方法使代码在 UI 线程中执行，从而确保线程安全。</p><p>我们以弹出一个 Android 的 Alert 对话框为例。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AppActivity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CocosActivity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AppActivity app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Bundle </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">savedInstanceState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> showAlertDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">runOnUiThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                AlertDialog alertDialog </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AlertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(app).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                alertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTitle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(title);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                alertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                alertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.drawable.icon);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                alertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="在-gl-线程中执行" tabindex="-1">在 GL 线程中执行 <a class="header-anchor" href="#在-gl-线程中执行" aria-label="Permalink to &quot;在 GL 线程中执行&quot;">​</a></h2><p>在 UI 线程中的代码要调用 GL 线程中的代码时，需要使用 <code>CocosHelper.runOnGameThread</code> 来确保线程安全。</p><p>我们以按钮事件响应为例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alertDialog.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DialogInterface.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OnClickListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DialogInterface dialog, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> which) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 一定要在 GL 线程中执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        CocosHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">runOnGameThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                CocosJavascriptJavaBridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc.log(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Javascript Java bridge!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="objective-c-c" tabindex="-1">Objective-C / C++ <a class="header-anchor" href="#objective-c-c" aria-label="Permalink to &quot;Objective-C / C++&quot;">​</a></h2><p>如果写的 Objective-C 或者 C++ 代码想要确保线程安全，可以通过 <code>CC_CURRENT_ENGINE()-&gt;getScheduler()-&gt;performFunctionInCocosThread</code> 方法让代码在 GL 线程中执行。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //TO DO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><blockquote><p><strong>注意:</strong> 这是 C++ 方法，如果想要在 Objective-C 代码中调用，需要 Objective-C 代码文件后缀为 *.mm。</p></blockquote>`,19),t=[l];function p(k,e,E,r,d,g){return a(),i("div",null,t)}const y=s(h,[["render",p]]);export{o as __pageData,y as default};
