import{_ as e,c as t,o as i,a4 as s}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/visualstudio.CDB05ueJ.png",a="/docs/cocos/assets/androidstudio.8HyQ5me4.png",n="/docs/cocos/assets/xcode.Bw8n0fGW.png",_=JSON.parse('{"title":"Native Engine Memory Leak Detection System","description":"","frontmatter":{},"headers":[],"relativePath":"en/advanced-topics/memory-leak-detector.md","filePath":"en/advanced-topics/memory-leak-detector.md","lastUpdated":1712305443000}'),l={name:"en/advanced-topics/memory-leak-detector.md"},r=s(`<h1 id="native-engine-memory-leak-detection-system" tabindex="-1">Native Engine Memory Leak Detection System <a class="header-anchor" href="#native-engine-memory-leak-detection-system" aria-label="Permalink to &quot;Native Engine Memory Leak Detection System&quot;">​</a></h1><p>The native engine is developed using the C++ language. In order to facilitate game &amp; engine developers to quickly find memory leaks, Cocos Creator provides a <strong>memory leak detection system</strong> since v3.4.0.</p><p>Compared with other memory leak detection tools, the built-in memory leak detection tool in Cocos Creator has the following advantages:</p><ul><li><strong>Cross-platform</strong>: support Windows/Android/Mac/iOS platforms.</li><li><strong>Ease of use</strong>: no need to download additional tools and perform complex configurations. Support output of stack information at memory leaks, which is convenient for quickly locating leaks.</li><li><strong>Consistency</strong>: the usage process of each platform is almost the same: start the game from the IDE -&gt; run for a period of time -&gt; close the game -&gt; view the IDE output log.</li><li><strong>Real-time</strong>: although the frame rate of the game in the profiling mode has dropped, it still maintains the real-time running frame rate.</li><li><strong>Accuracy</strong>: theoretically zero false positives.</li></ul><h2 id="usage-steps" tabindex="-1">Usage steps <a class="header-anchor" href="#usage-steps" aria-label="Permalink to &quot;Usage steps&quot;">​</a></h2><ol><li><p>The memory leak detection system is disabled by default. To enable it, you need to modify the value of the macro <code>USE_MEMORY_LEAK_DETECTOR</code> in the <code>engine/native/cocos/base/Config.h</code> file of the engine directory to <strong>1</strong>.</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USE_MEMORY_LEAK_DETECTOR</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USE_MEMORY_LEAK_DETECTOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div></li><li><p>The Android platform requires one additional step as a result of the different implementation mechanisms amongst platforms:</p><p>Add a line of code <code>set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -finstrument-functions&quot;)</code> to the <code>native/engine/android/CMakeLists.txt</code> file in the project directory, as follows:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set(CC_PROJ_SOURCES)</span></span>
<span class="line"><span>set(CC_COMMON_SOURCES)</span></span>
<span class="line"><span>set(CC_ALL_SOURCES)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -finstrument-functions&quot;)</span></span></code></pre></div></li><li><p>Start the game from the IDE corresponding to the native platform (such as Visual Studio, Android Studio, Xcode), and close the game after running for a period of time. If there is any memory leak, the detailed information of the memory leak will be output in the output window of the IDE at this time.</p><ul><li><p><strong>Windows platform</strong></p><p><img src="`+o+'" alt="visual studio"></p><p>In the Release version, if more friendly stack information is needed, right-click the executable project-properties, open the project properties page, and make the following settings:</p><ul><li><p>Linker -&gt; Debugging -&gt; Generate Debug Info: Generate Debug Information(/DEBUG)</p></li><li><p>C/C++ -&gt; Optimization -&gt; Optimization: Disabled(/Od)\\</p></li><li><p>C/C++ -&gt; Optimization -&gt; Inline Function Expansion：Disabled(/Ob0)</p></li></ul></li><li><p><strong>Android platform</strong></p><p><img src="'+a+'" alt="android studio"></p></li><li><p><strong>Mac/iOS platform</strong></p><p><img src="'+n+'" alt="xcode"></p></li></ul></li><li><p>Fix the leak according to the information output by the Native platform IDE, and repeat until there is no leak.</p></li></ol>',6),p=[r];function d(c,m,h,g,u,f){return i(),t("div",null,p)}const y=e(l,[["render",d]]);export{_ as __pageData,y as default};