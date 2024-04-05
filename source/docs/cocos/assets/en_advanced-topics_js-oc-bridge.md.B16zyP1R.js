import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.uQk9_EO2.js";const E=JSON.parse('{"title":"JavaScript and Objective-C Communication using JsbBridge","description":"","frontmatter":{},"headers":[],"relativePath":"en/advanced-topics/js-oc-bridge.md","filePath":"en/advanced-topics/js-oc-bridge.md","lastUpdated":1712305443000}'),n={name:"en/advanced-topics/js-oc-bridge.md"},t=e(`<h1 id="javascript-and-objective-c-communication-using-jsbbridge" tabindex="-1">JavaScript and Objective-C Communication using JsbBridge <a class="header-anchor" href="#javascript-and-objective-c-communication-using-jsbbridge" aria-label="Permalink to &quot;JavaScript and Objective-C Communication using JsbBridge&quot;">​</a></h1><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p><a href="./oc-reflection">JavaScript and iOS/macOS Communication with Reflection</a>, We need to carefully verify the number of parameters to ensure proper operation. The steps involved are quite complex.</p><p>Therefore, we provide an additional method to simplify the communication between the script and the native. This method acts as a channel or bridge, and we named it <code>JsbBridge</code>, which stands for a bridge between scripts and the native app through JSB binding.</p><blockquote><p><strong>Note</strong>: Both methods can be used effectively, and developers can choose the one that suits their needs based on their specific requirements.</p></blockquote><h2 id="jsbbridge-mechanism" tabindex="-1">JsbBridge Mechanism <a class="header-anchor" href="#jsbbridge-mechanism" aria-label="Permalink to &quot;JsbBridge Mechanism&quot;">​</a></h2><h3 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api" aria-label="Permalink to &quot;JavaScript API&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// JavaScript</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bridge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Send to native with at least one argument.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sendToNative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Save your own callback controller with a JavaScript function,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Use &#39;jsb.bridge.onNative = (arg0: String, arg1: String | null)=&gt;{...}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> : received from native</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onNative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>As the names suggest, <code>sendToNative</code> is used to invoke code in the native layer, while <code>onNative</code> is used to respond to calls from the native layer.</p><p>When using these interfaces, please note the following:</p><ul><li>Since this feature is still in the experimental stage, it only supports the transmission of <code>string</code> data. If you need to transmit objects with multiple parameters, consider converting them to <code>Json</code> format for transmission and parse them before using.</li><li><code>onNative</code> Only one function is recorded at a time for <code>onNative</code>, and setting the property again will override the previously set <code>onNative</code> method.</li><li>The <code>sendToScript</code> method is a one-way communication and does not have return value. It does not inform JavaScript of the success or failure of the operation. Developers need to handle the operation status themselves.</li></ul><h3 id="objective-c-api" tabindex="-1">Objective-C API <a class="header-anchor" href="#objective-c-api" aria-label="Permalink to &quot;Objective-C API&quot;">​</a></h3><p>In <code>Objective-C</code>, there are also two corresponding interfaces: <code>sendToScript</code> and <code>callByScript</code>, defined as follows:</p><div class="language-objc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Objective-c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ICallback)(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JsbBridge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NSObject</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instancetype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sharedInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCallback:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ICallback)cb;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callByScript:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)arg0 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arg1:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)arg1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendToScript:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)arg0 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arg1:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)arg1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendToScript:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)arg0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@end</span></span></code></pre></div><p>Among them, <code>sendToScript</code> is used to invoke code in the script layer, while <code>callByScript</code> is used to respond to calls from the script layer.</p><p>We need to implement the <code>ICallback</code> interface and use <code>setCallback</code> to register and respond to the specific behavior of <code>callByScript</code>.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><h3 id="calling-objective-c-from-javascript" tabindex="-1">Calling Objective-C from JavaScript <a class="header-anchor" href="#calling-objective-c-from-javascript" aria-label="Permalink to &quot;Calling Objective-C from JavaScript&quot;">​</a></h3><p>Suppose we have written an Objective-C interface to open an advertisement, and when the player clicks the button to open the advertisement, it should be triggered by JavaScript calling the corresponding Objective-C interface.</p><p>First, we need to implement an <code>ICallback</code> interface to respond to the operation, and then register it with <code>JsbBridge</code> using the <code>setCallback</code> method.</p><p>Here is the Objective-C code:</p><div class="language-ObjC vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ObjC</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;platform/apple/JsbBridge.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ICallback cb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ^void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _arg0, MSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _arg1){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([_arg0 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isEqual:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;open_ad&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //open Ad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JsbBridge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [JsbBridge </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sharedInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[m </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setCallback:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cb];</span></span></code></pre></div><p>In JavaScript, we can call it like this:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { native } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public static </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    native.bridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendToNative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;open_ad&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultAdUrl);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="calling-javascript-from-objective-c" tabindex="-1">Calling JavaScript from Objective-C <a class="header-anchor" href="#calling-javascript-from-objective-c" aria-label="Permalink to &quot;Calling JavaScript from Objective-C&quot;">​</a></h3><p>Suppose that after our advertisement finishes playing, we need to notify the JavaScript layer. We can do it as follows.</p><p>First, in JavaScript, use <code>onNative</code> to respond to the event:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">native.bridge.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onNative</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ad_close&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;finished&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //ad playback completed.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //ad cancel.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>In actual projects, you can place the above code in the <code>onload</code> function of a script component that needs to be loaded when the program starts to ensure early listening to events from the native layer.</p></blockquote><p>Then, in Objective-C, call it as follows:</p><div class="language-ObjC vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ObjC</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;platform/apple/JsbBridge.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JsbBridge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [JsbBridge </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sharedInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[m </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sendToScript:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;ad_close&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arg1:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;finished&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>Through the above operations, we can notify JavaScript about the playback result of the advertisement.</p><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><p>JsbBridge provides two string-type parameters, <code>arg0</code> and <code>arg1</code>, to pass information, which can be allocated according to different needs.</p><h3 id="_1-both-arg0-and-arg1-used-as-parameters" tabindex="-1">1. Both arg0 and arg1 used as parameters <a class="header-anchor" href="#_1-both-arg0-and-arg1-used-as-parameters" aria-label="Permalink to &quot;1. Both arg0 and arg1 used as parameters&quot;">​</a></h3><p>If the communication requirements are relatively simple and do not require categorization, you can use <code>arg0</code> and <code>arg1</code> as parameters.</p><h3 id="_2-arg0-used-as-command-type-arg1-used-as-a-parameter" tabindex="-1">2. arg0 used as command type, arg1 used as a parameter <a class="header-anchor" href="#_2-arg0-used-as-command-type-arg1-used-as-a-parameter" aria-label="Permalink to &quot;2. arg0 used as command type, arg1 used as a parameter&quot;">​</a></h3><p>If the communication requirements are relatively complex, you can use arg0 as a command type to process different commands, and arg1 can be used as a parameter.</p><h3 id="_3-arg0-used-as-a-command-type-arg1-used-as-a-json-string" tabindex="-1">3. arg0 used as a command type, arg1 used as a JSON string <a class="header-anchor" href="#_3-arg0-used-as-a-command-type-arg1-used-as-a-json-string" aria-label="Permalink to &quot;3. arg0 used as a command type, arg1 used as a JSON string&quot;">​</a></h3><p>For particularly complex requirements where simple string-type parameters are not sufficient, you can convert the objects that need to be passed into a string using <code>JSON.stringify</code> and pass them through <code>arg1</code>. When using them, you can restore them to objects using <code>JSON.parse</code> for further processing.</p><blockquote><p>Since it involves serialization and deserialization operations of JSON, this usage is not recommended for frequent calls.</p></blockquote><h2 id="thread-safety" tabindex="-1">Thread Safety <a class="header-anchor" href="#thread-safety" aria-label="Permalink to &quot;Thread Safety&quot;">​</a></h2><p>Note that if the related code involves native UI, you need to consider thread safety issues. For more details, please refer to:<a href="./thread-safety">Thread Safety</a>。</p><h2 id="sample-multiple-event-calls" tabindex="-1">Sample: Multiple Event Calls <a class="header-anchor" href="#sample-multiple-event-calls" aria-label="Permalink to &quot;Sample: Multiple Event Calls&quot;">​</a></h2><p>Cocos provides the <a href="https://github.com/cocos/cocos-example-projects/tree/v3.8/native-script-bridge" target="_blank" rel="noreferrer">native-script-bridge</a> example, which developers can download for reference use as needed.</p>`,45),h=[t];function l(p,r,k,d,o,c){return a(),i("div",null,h)}const y=s(n,[["render",l]]);export{E as __pageData,y as default};
