import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CqnjdYks.js";const o=JSON.parse('{"title":"基于反射机制实现 JavaScript 与 iOS/macOS 系统原生通信","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/advanced-topics/oc-reflection.md","filePath":"zh/manual/advanced-topics/oc-reflection.md"}'),n={name:"zh/manual/advanced-topics/oc-reflection.md"},h=t(`<h1 id="基于反射机制实现-javascript-与-ios-macos-系统原生通信" tabindex="-1">基于反射机制实现 JavaScript 与 iOS/macOS 系统原生通信 <a class="header-anchor" href="#基于反射机制实现-javascript-与-ios-macos-系统原生通信" aria-label="Permalink to &quot;基于反射机制实现 JavaScript 与 iOS/macOS 系统原生通信&quot;">​</a></h1><h2 id="javascript-调用-objective-c-代码" tabindex="-1">JavaScript 调用 Objective-C 代码 <a class="header-anchor" href="#javascript-调用-objective-c-代码" aria-label="Permalink to &quot;JavaScript 调用 Objective-C 代码&quot;">​</a></h2><p>在 Cocos Creator 中提供了依靠语言反射机制的跨语言通信方式，使 JavaScript 可以直接调用 Objective-C 函数的方法。 方法原型示例如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> native.reflection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callStaticMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(className, methodName, arg1, arg2, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..);</span></span></code></pre></div><p>在 <code>native.reflection.callStaticMethod</code> 方法中，我们通过传入 Objective-C 的类名、方法名、参数就可以直接调用 Objective-C 的静态方法，并且可以获得 Objective-C 方法的返回值。</p><blockquote><p><strong>注意</strong>：仅支持调用可访问类的静态方法。</p></blockquote><p><strong>警告</strong>：苹果 App Store 在 2017 年 3 月对部分应用发出了警告，原因是使用了一些有风险的方法，其中 <code>respondsToSelector:</code> 和 <code>performSelector:</code> 是反射机制使用的核心 API，在使用时请谨慎关注苹果官方对此的态度发展，相关讨论：<a href="https://github.com/bang590/JSPatch/issues/746" target="_blank" rel="noreferrer">JSPatch</a>、<a href="https://github.com/facebook/react-native/issues/12778" target="_blank" rel="noreferrer">React-Native</a> 以及 <a href="https://github.com/alibaba/weex/issues/2875" target="_blank" rel="noreferrer">Weex</a>。</p><p>为了降低提审不通过的风险，建议参考 <a href="./js-oc-bridge.html">使用 JsbBridge 实现 JavaScript 与 Objective-C 通信</a>。</p><h3 id="类名与静态方法" tabindex="-1">类名与静态方法 <a class="header-anchor" href="#类名与静态方法" aria-label="Permalink to &quot;类名与静态方法&quot;">​</a></h3><p>参数中的类名不需要路径，只需要传入 Objective-C 中的类名即可。比如你在工程目录下的任意文件中新建一个类 <code>NativeOcClass</code>，只要你将它引入工程即可。</p><p>再次强调一下，仅支持 JavaScript 调用 Objective-C 中类的静态方法。</p><h3 id="带参方法" tabindex="-1">带参方法 <a class="header-anchor" href="#带参方法" aria-label="Permalink to &quot;带参方法&quot;">​</a></h3><p>方法名比较需要注意。我们需要传入完整的方法名，特别是当某个方法带有参数的时候，需要将它的 <strong>:</strong> 也带上。</p><p>有参方法定义示例：</p><div class="language-objc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Foundation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Foundation.h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NativeOcClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NSObject</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BOOL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callNativeUIWithTitle:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) title </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">andContent:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)content;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@end</span></span></code></pre></div><p>有参方法调用示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sys.isNative </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (sys.os </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IOS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys.os </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> native.reflection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callStaticMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NativeOcClass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                              &quot;callNativeUIWithTitle:andContent:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                              &quot;cocos2d-js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                              &quot;Yes! you call a Native UI from Reflection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>sys.isNative</code> 用于判断是否为原生平台，<code>sys.os</code> 用于判断当前运行系统。由于各平台通信机制不同，建议先判断再处理。</p><blockquote><p><strong>注意</strong>：此时的方法名是 <code>callNativeUIWithTitle:andContent:</code>，不要漏掉了冒号 <strong>:</strong> 。</p></blockquote><h3 id="无参方法" tabindex="-1">无参方法 <a class="header-anchor" href="#无参方法" aria-label="Permalink to &quot;无参方法&quot;">​</a></h3><p>如果是没有参数的函数，那么就不需要 <strong>:</strong>。如下面代码中的方法名是 <code>callNativeWithReturnString</code>，由于没有参数，就不需要 <strong>:</strong>，跟 Objective-C 的 method 写法一致。</p><p>无参方法定义示例：</p><div class="language-objc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)callNativeWithReturnString;</span></span></code></pre></div><p>无参方法调用示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> native.reflection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callStaticMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NativeOcClass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                          &quot;callNativeWithReturnString&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>这里是这个方法在 Objective-C 的实现，可以看到是弹出了一个原生对话框。并把 <code>title</code> 和 <code>content</code> 设置成你传入的参数，并返回一个 boolean 类型的返回值。</p><div class="language-objc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BOOL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)callNativeUIWithTitle:(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) title andContent:(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)content{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  UIAlertView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alertView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[UIAlertView </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">initWithTitle:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">message:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">content </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">delegate:self</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cancelButtonTitle:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;Cancel&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> otherButtonTitles:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;OK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [alertView </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>此时，你就可以在 <code>ret</code> 中接收到从 Objective-C 传回的返回值（true）了。</p><h3 id="参数类型转换" tabindex="-1">参数类型转换 <a class="header-anchor" href="#参数类型转换" aria-label="Permalink to &quot;参数类型转换&quot;">​</a></h3><p>在 Objective-C 的实现中，如果方法的参数需要使用 float、int 和 bool 的，请使用如下类型进行转换：</p><ul><li><strong>float、int 请使用 NSNumber 类型</strong></li><li><strong>bool 请使用 BOOL 类型</strong></li></ul><p>例如下面代码，传入两个浮点数，然后计算它们的合并返回，我们使用 NSNumber 作为参数类型，而不是 int 和 float。</p><div class="language-objc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) addTwoNumber:(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)num1 and:(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)num2{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [num1 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">floatValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[num2 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">floatValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>目前参数和返回值支持以下类型：</p><ul><li><code>int</code></li><li><code>float</code></li><li><code>bool</code></li><li><code>string</code></li></ul><p>其余的类型暂时不支持。</p><p>如果对如何在项目中新增 <code>Objective-C</code> 文件不熟悉，可参考 <a href="./native-secondary-development.html">原生平台二次开发指南</a>。</p><h2 id="objective-c-执行-javascript-代码" tabindex="-1">Objective-C 执行 JavaScript 代码 <a class="header-anchor" href="#objective-c-执行-javascript-代码" aria-label="Permalink to &quot;Objective-C 执行 JavaScript 代码&quot;">​</a></h2><p>在 Cocos Creator 项目中，我们也可以通过 <code>evalString</code> 方法，在 C++ 或者 Objective-C 中执行 JavaScript 代码。</p><p>调用示例如下：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">c_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><blockquote><p><strong>注意</strong>：除非确定当前线程是 <strong>主线程</strong>，否则都需要使用 <code>performFunctionInCocosThread</code> 方法将函数分发到主线程中去执行。</p></blockquote><h3 id="调用全局函数" tabindex="-1">调用全局函数 <a class="header-anchor" href="#调用全局函数" aria-label="Permalink to &quot;调用全局函数&quot;">​</a></h3><p>我们可以在脚本中通过如下代码新增一个全局函数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callByNative</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //to do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><code>window</code> 是 Cocos 引擎脚本环境中的全局对象，如果要让一个变量、函数、对象或者类全局可见，需要将它作为 <code>window</code> 的属性。可以使用 <code>window.变量名</code> 或者 <code>变量名</code> 进行访问。</p></blockquote><p>然后像下面这样调用:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;window.callByNative()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>或者：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;callByNative()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="调用类的静态函数" tabindex="-1">调用类的静态函数 <a class="header-anchor" href="#调用类的静态函数" aria-label="Permalink to &quot;调用类的静态函数&quot;">​</a></h3><p>假如在 TypeScript 脚本中有一个类具有如下静态函数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NativeAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callByNative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //to do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将 NativeAPI 注册为全局类，否则无法在 OC 中被调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.NativeAPI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NativeAPI;</span></span></code></pre></div><p>我们可以像这样调用：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NativeAPI.callByNative()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="调用单例函数" tabindex="-1">调用单例函数 <a class="header-anchor" href="#调用单例函数" aria-label="Permalink to &quot;调用单例函数&quot;">​</a></h3><p>如果脚本代码中，有实现可以全局访问的单例对象</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NativeAPIMgr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> _inst</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NativeAPIMgr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NativeAPIMgr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._inst){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._inst </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NativeAPIMgr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._inst;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callByNative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //to do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将 NativeAPIMgr 注册为全局类，否则无法在 OC 中被调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.NativeAPIMgr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NativeAPIMgr;</span></span></code></pre></div><p>我们可以像下面这样调用：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NativeAPIMgr.inst.callByNative()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="参数传递" tabindex="-1">参数传递 <a class="header-anchor" href="#参数传递" aria-label="Permalink to &quot;参数传递&quot;">​</a></h3><p>以上几种 OC 调用JS的方式，均支持参数传递，但参数只支持 string, number 和 bool 三种基础类型。</p><p>我们以全局函数为例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callByNative</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //to do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可像这样调用：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CC_CURRENT_ENGINE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getScheduler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">performFunctionInCocosThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    se</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ScriptEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">evalString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;window.callByNative(&#39;test&#39;,1,true)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="线程安全" tabindex="-1">线程安全 <a class="header-anchor" href="#线程安全" aria-label="Permalink to &quot;线程安全&quot;">​</a></h2><p>可以看到，上面的代码中，使用了 <code>CC_CURRENT_ENGINE()-&gt;getScheduler()-&gt;performFunctionInCocosThread</code>。这是为了代码在执行时处于正确的线程，详情请参考：<a href="./thread-safety.html">线程安全</a>。</p>`,69),l=[h];function p(e,k,E,r,d,g){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{o as __pageData,y as default};
