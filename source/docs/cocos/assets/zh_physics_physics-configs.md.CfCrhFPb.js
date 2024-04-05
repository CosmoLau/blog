import{_ as s}from"./chunks/set-collider-config.a-PRM8yq.js";import{_ as t,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/physics-config-index.gbu55Jjv.png",l="/docs/cocos/assets/physics-collision.BRGDOybD.png",h="/docs/cocos/assets/collider-matrix.Cx1de2d2.png",p="/docs/cocos/assets/set-group.DZc3zNpm.png",x=JSON.parse('{"title":"物理系统配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/physics/physics-configs.md","filePath":"zh/physics/physics-configs.md","lastUpdated":1712305443000}'),r={name:"zh/physics/physics-configs.md"},o=n('<h1 id="物理系统配置" tabindex="-1">物理系统配置 <a class="header-anchor" href="#物理系统配置" aria-label="Permalink to &quot;物理系统配置&quot;">​</a></h1><p>物理系统模块（PhysicsSystem）用于管理整个物理系统，负责同步物理元素、触发物理事件和调度物理世界的迭代。</p><h2 id="物理配置" tabindex="-1">物理配置 <a class="header-anchor" href="#物理配置" aria-label="Permalink to &quot;物理配置&quot;">​</a></h2><p>有两种办法可以配置物理系统，一种是在编辑器中配置，另一种是通过代码配置。</p><h3 id="通过物理配置面板" tabindex="-1">通过物理配置面板 <a class="header-anchor" href="#通过物理配置面板" aria-label="Permalink to &quot;通过物理配置面板&quot;">​</a></h3><p>通过 <strong>项目设置 -&gt; 物理配置</strong> 可以对物理系统进行相关配置。</p><p><img src="'+e+`" alt="Physics"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Gravity X</strong></td><td style="text-align:left;">重力矢量，设置 x 分量上的重力值</td></tr><tr><td style="text-align:left;"><strong>Gravity Y</strong></td><td style="text-align:left;">重力矢量，设置 y 分量上的重力值</td></tr><tr><td style="text-align:left;"><strong>Gravity Z</strong></td><td style="text-align:left;">重力矢量，设置 z 分量上的重力值</td></tr><tr><td style="text-align:left;"><strong>AllowSleep</strong></td><td style="text-align:left;">是否允许系统进入休眠状态，默认值 <code>true</code></td></tr><tr><td style="text-align:left;"><strong>SleepThreshold</strong></td><td style="text-align:left;">进入休眠的默认速度临界值，默认值 <code>0.1</code>，最小值 <code>0</code></td></tr><tr><td style="text-align:left;"><strong>AutoSimulation</strong></td><td style="text-align:left;">是否开启自动模拟, 默认值 <code>true</code></td></tr><tr><td style="text-align:left;"><strong>FixedTimeStep</strong></td><td style="text-align:left;">每步模拟消耗的固定时间，默认值 <code>1/60</code>，最小值 <code>0</code></td></tr><tr><td style="text-align:left;"><strong>MaxSubSteps</strong></td><td style="text-align:left;">每步模拟的最大子步数，默认值 <code>1</code>，最小值 <code>0</code></td></tr><tr><td style="text-align:left;"><strong>Friction</strong></td><td style="text-align:left;">摩擦系数，默认值 <code>0.5</code></td></tr><tr><td style="text-align:left;"><strong>RollingFriction</strong></td><td style="text-align:left;">滚动摩擦系数，默认值 <code>0.1</code></td></tr><tr><td style="text-align:left;"><strong>SpinningFriction</strong></td><td style="text-align:left;">自旋摩擦系数，默认值 <code>0.1</code></td></tr><tr><td style="text-align:left;"><strong>Restitution</strong></td><td style="text-align:left;">弹性系数，默认值 <code>0.1</code></td></tr><tr><td style="text-align:left;"><strong>CollisionMatrix</strong></td><td style="text-align:left;">碰撞矩阵，仅用于初始化</td></tr></tbody></table><blockquote><p><strong>注意</strong>：目前 <strong>2D</strong> / <strong>3D</strong> 物理共用一个配置。</p></blockquote><h3 id="程序化配置" tabindex="-1">程序化配置 <a class="header-anchor" href="#程序化配置" aria-label="Permalink to &quot;程序化配置&quot;">​</a></h3><p>程序化配置目前可以通过直接访问 <code>PhysicsSystem.instance</code> 对物理系统进行配置。部分代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Node, Vec3, PhysicsSystem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PhysicsSystem.instance.enable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PhysicsSystem.instance.gravity </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PhysicsSystem.instance.allowSleep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：物理系统是单例类，通过 <code>PhysicsSystem.instance</code> 获取物理系统的实例。</p></blockquote><p>也可通过 <code>PhysicsSystem.resetConfiguration</code> 接口来重置物理配置，代码示例如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> game.config.physics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf.gravity </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PhysicsSystem.instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resetConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(conf);</span></span></code></pre></div><p>更多 API 内容请查看物理系统接口请参考：<a href="./__APIDOC__/zh/class/physics.PhysicsSystem">PhysicsSystem API</a>。</p><h2 id="碰撞矩阵" tabindex="-1">碰撞矩阵 <a class="header-anchor" href="#碰撞矩阵" aria-label="Permalink to &quot;碰撞矩阵&quot;">​</a></h2><p>碰撞矩阵是 <a href="./physics-group-mask">分组和掩码</a> 功能的进一步封装，它用于初始化物理元素的分组和掩码。</p><p><img src="`+l+'" alt="Physics-collision"></p><p>碰撞矩阵默认情况下只有一个 <strong>DEFAULT</strong> 分组，新建分组默认不与其它组碰撞。</p><p>点击 <strong>+</strong> 按钮可以新增分组。新增分组的 <strong>Index</strong> 和 <strong>Name</strong> 均不能不填。</p><ul><li><strong>Index</strong> 代表的是碰撞分组值， 最高支持 32 位，即数值范围为 <code>[0, 31)</code>。分组值不可重复。</li><li><strong>Name</strong> 代表的是碰撞分组名。此处在这里设置的名字只是为了用户进行碰撞分组配置方便，无法通过代码获取，代码能获取到的只有分组值。</li></ul><p><img src="'+h+'" alt="collider-matrix"></p><p>图上所示的就是一个飞行射击类游戏碰撞分组的配置。从图中可以看出，当添加一个分组的时候，面板上会出现横向和纵向都有分组的名字。我们把横向的部分称之为 <strong>分组</strong>，纵向的部分称之为 <strong>掩码</strong>。假设我现在进行了如下勾选：</p><p><img src="'+s+'" alt="set-collider-config"></p><p>此配置代表的意思是分组 <strong>ENEMY_PLANE</strong> 可以与分组 <strong>ENEMY_BULLET</strong> 和 <strong>SELF_BULLET</strong> 产生碰撞。这里的分组 <strong>ENEMY_BULLET</strong> 和 <strong>SELF_BULLET</strong> 就是分组 <strong>ENEMY_PLANE</strong> 的掩码。同样，对于分组 <strong>ENEMY_BULLET</strong> 来说 <strong>ENEMY_PLANE</strong> 也是它的掩码。</p><p>配置完成碰撞矩阵之后，就可以对需要产生碰撞的对象添加 <strong>刚体（RigidBody）</strong> 组件，设置碰撞分组 <code>Group</code>。</p><p><img src="'+p+'" alt="set-group"></p><blockquote><p><strong>注意</strong>：分组在 v3.5 之前的版本不可以删除，但可以修改分组的名称。</p></blockquote>',29),d=[o];function k(g,c,E,y,F,f){return a(),i("div",null,d)}const u=t(r,[["render",k]]);export{x as __pageData,u as default};
