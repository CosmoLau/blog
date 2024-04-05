import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const h="/docs/cocos/assets/raycast.29eVNysE.jpg",o=JSON.parse('{"title":"射线和线段检测","description":"","frontmatter":{},"headers":[],"relativePath":"zh/physics/physics-raycast.md","filePath":"zh/physics/physics-raycast.md","lastUpdated":1712305443000}'),t={name:"zh/physics/physics-raycast.md"},l=n('<h1 id="射线和线段检测" tabindex="-1">射线和线段检测 <a class="header-anchor" href="#射线和线段检测" aria-label="Permalink to &quot;射线和线段检测&quot;">​</a></h1><p>本文将说明如何通过射线和线段对物理世界内的碰撞体进行检测。</p><h2 id="射线检测" tabindex="-1">射线检测 <a class="header-anchor" href="#射线检测" aria-label="Permalink to &quot;射线检测&quot;">​</a></h2><h2 id="射线检测-1" tabindex="-1">射线检测 <a class="header-anchor" href="#射线检测-1" aria-label="Permalink to &quot;射线检测&quot;">​</a></h2><p>射线检测是对一条射线和另一个形状进行 <strong>相交性判断</strong>，如下图所示。</p><p><img src="'+h+`" alt="图解"></p><h3 id="构造射线" tabindex="-1">构造射线 <a class="header-anchor" href="#构造射线" aria-label="Permalink to &quot;构造射线&quot;">​</a></h3><p>射线 <strong>ray</strong> 由 <strong>起点</strong> 和 <strong>方向</strong> 组成，构造一条射线有以下几种比较常见的方法：</p><ol><li><p>通过 <strong>起点</strong> + <strong>方向</strong>，<strong>ray</strong> 的构造函数或静态接口 <code>create</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { geometry } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构造一条从（0，-1，0）出发，指向 Y 轴的射线</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 前三个参数是起点，后三个参数是方向</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outRay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者通过静态方法 create</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outRay2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.Ray.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>通过 <strong>起点</strong> + <strong>射线上的另一点</strong>，<strong>ray</strong> 的静态接口 <code>fromPoints</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { geometry, math } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构造一条从原点出发，指向 Z 轴的射线</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outRay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">geometry.Ray.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromPoints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outRay, math.Vec3.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ZERO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, math.Vec3.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNIT_Z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>用相机构造一条从相机原点到屏幕某点发射出的射线：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { geometry, Camera } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以脚本挂载在 Camera 下为例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> camera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Camera);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获得一条途径屏幕坐标（0，0）发射出的一条射线</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outRay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">camera?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screenPointToRay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, outRay);</span></span></code></pre></div><blockquote><p><strong>注意</strong>：</p><ol><li>首先需要获取一个相机组件或者相机实例的引用。</li><li>相机组件和相机实例两者暴露的接口参数顺序不一样。</li></ol></blockquote></li></ol><h3 id="接口介绍" tabindex="-1">接口介绍 <a class="header-anchor" href="#接口介绍" aria-label="Permalink to &quot;接口介绍&quot;">​</a></h3><p>Cocos Creator 提供了一套基于物理引擎的射线检测功能。</p><p>目前接口由 <a href="./__APIDOC__/zh/class/physics.PhysicsSystem"><strong>PhysicsSystem</strong></a> 提供，有以下两类：</p><ul><li><code>raycast</code> : 检测所有的碰撞体，并记录所有被检测到的结果，通过 <code>PhysicsSystem.instance.raycastResults</code> 获取。接口返回布尔值，返回 <code>true</code> 表示射线是否和碰撞体相交。</li><li><code>raycastClosest</code> ：检测所有的碰撞体，并记录与射线距离最短的检测结果，通过 <code>PhysicsSystem.instance.raycastClosestResult</code> 获取。同样返回布尔值，表示是否和碰撞体相交。</li></ul><blockquote><p><strong>注意</strong>：</p><ol><li>检测的对象是物理碰撞器，在场景面板上与之对应的是碰撞器组件，例如 <strong>BoxCollider</strong>。</li><li>检测结果返回对象是只读并且复用的，每次调用检测接口后会更新相应结果。</li></ol></blockquote><p>基于相机位置和屏幕坐标进行射线检测最近物体的常用示例：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ray </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.camera.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screenPointToRay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventMouse.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocationX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), eventMouse.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocationY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), ray);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下参数可选</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xffffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> maxDistance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> queryTrigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (PhysicsSystem.instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">raycastClosest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ray, mask, maxDistance, queryTrigger)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> raycastClosestResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PhysicsSystem.instance.raycastClosestResult;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hitPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> raycastClosestResult.hitPoint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hitNormal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> raycastClosestResult.hitNormal;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> raycastClosestResult.collider;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> distance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> raycastClosestResult.distance;            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>下列代码演示了如何检测多个物体：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worldRay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下参数可选</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mask</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xffffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> maxDistance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> queryTrigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PhysicsSystem.instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">raycast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldRay, mask, maxDistance, queryTrigger);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bResult){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PhysicsSystem.instance.raycastResults;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> results.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> results[i];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.collider;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> distance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.distance;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hitPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.hitPoint;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hitNormal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.hitNormal;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h4><ul><li><code>worldRay</code>：世界空间下的射线</li><li><code>mask</code>：用于过滤的 <a href="./physics-group-mask">掩码</a>，可以传入需要检测的分组，默认为 0xffffffff</li><li><code>maxDistance</code>：最大检测距离，默认为 10000000，目前请勿传入 <code>Infinity</code> 或 <code>Number.MAX_VALUE</code></li><li><code>queryTrigger</code>：是否检测触发器</li></ul><h4 id="返回结果说明" tabindex="-1">返回结果说明 <a class="header-anchor" href="#返回结果说明" aria-label="Permalink to &quot;返回结果说明&quot;">​</a></h4><p>射线检测的结果由 <a href="./__APIDOC__/zh/class/physics.PhysicsRayResult">PhysicsRayResult</a> 进行存储，主要有以下信息：</p><ul><li><code>collider</code>：击中的碰撞器</li><li><code>distance</code>：击中点与射线起点的距离</li><li><code>hitPoint</code>：击中点（世界坐标系中）</li><li><code>hitNormal</code>：击中点所处面的法线（世界坐标系中）</li></ul><h2 id="线段检测" tabindex="-1">线段检测 <a class="header-anchor" href="#线段检测" aria-label="Permalink to &quot;线段检测&quot;">​</a></h2><p>自 v3.7 起，Cocos Creator 支持线段/采样点检测。线段检测分为两个方法 <code>lineStripCast</code> 以及 <code>lineStripCastClosest</code>。</p><h3 id="接口描述" tabindex="-1">接口描述 <a class="header-anchor" href="#接口描述" aria-label="Permalink to &quot;接口描述&quot;">​</a></h3><p>该方法内部由 <code>raycast</code> 实现，通过定义 <code>samplePointsWorldSpace</code> 参数可以很方便的检测曲线是否有击中其他碰撞体。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineStripCast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (samplePointsWorldSpace: Array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vec3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xffffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, maxDistance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, queryTrigger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): boolean;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineStripCastClosest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (samplePointsWorldSpace: Array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vec3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xffffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, maxDistance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, queryTrigger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): boolean;</span></span></code></pre></div><h4 id="参数说明-1" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明-1" aria-label="Permalink to &quot;参数说明&quot;">​</a></h4><ul><li><code>samplePointsWorldSpace</code>：世界空间下的采样点/直线段</li><li><code>mask</code>：用于过滤的 <a href="./physics-group-mask">掩码</a>，可以传入需要检测的分组，默认为 0xffffffff</li><li><code>maxDistance</code>：最大检测距离，默认为 10000000，目前请勿传入 <code>Infinity</code> 或 <code>Number.MAX_VALUE</code></li><li><code>queryTrigger</code>：是否检测触发器</li></ul><h4 id="返回结果说明-1" tabindex="-1">返回结果说明 <a class="header-anchor" href="#返回结果说明-1" aria-label="Permalink to &quot;返回结果说明&quot;">​</a></h4><p>返回 true 时，表示曲线和碰撞体相交。结果存储在 <code>PhysicsSystem.Instance.lineStripCastResults</code> 以及 <code>PhysicsSystem.Instance.lineStripCastResults</code>，请参考下文：</p><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><p>调用后如果方法返回 true，则可以通过 <code>lineStripCastClosestResult</code> 和 <code>lineStripCastResults</code> 获取检测结果。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (PhysicsSystem.instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineStripCastClosest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sampleArray, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PhysicsSystem.instance.lineStripCastClosestResult;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>检测的结果类型为 <code>PhysicsLineStripCastResult</code>，<code>PhysicsLineStripCastResult</code> 继承自 <code>PhysicsRayResult</code>，属性描述如下：</p><ul><li><code>id</code>：发生相交时线段的索引</li><li><code>collider</code>：击中的碰撞器</li><li><code>distance</code>：击中点与射线起点的距离</li><li><code>hitPoint</code>：击中点（世界坐标系中）</li><li><code>hitNormal</code>：击中点所处面的法线（世界坐标系中）</li></ul><p><code>lineStripCast</code> 检测的结果是一个 <code>PhysicsLineStripCastResult</code> 类型的数组，属性描述如上所示，代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (PhysicsSystem.instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineStripCast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sampleArray, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )) {    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PhysicsSystem.instance.lineStripCastResults;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> results.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> results[i];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果要投射其他几何体，请参考 <a href="./physics-sweep">几何投射检测</a>。</p>`,40),k=[l];function p(e,r,d,E,y,g){return a(),i("div",null,k)}const F=s(t,[["render",p]]);export{o as __pageData,F as default};
