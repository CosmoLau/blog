import{_ as s,v as a,b as n,R as o}from"./chunks/framework.5ffcbaff.js";const l="/docs/cocos/assets/add-rigidbody-in-inspector.8ba1ce44.jpg",t="/docs/cocos/assets/rigid-body.7b4aed18.jpg",p="/docs/cocos/assets/rigidybody-type.aaabcceb.png",e="/docs/cocos/assets/physics-type.7d61fa9a.gif",r="/docs/cocos/assets/center-of-mass.c9bf84c0.jpg",c="/docs/cocos/assets/center-add-comp.744a341c.png",i="/docs/cocos/assets/center-add-cupsule.e28f288a.png",y="/docs/cocos/assets/center-result.00d2874d.png",F="/docs/cocos/assets/center-of-mass.23f1de41.gif",x=JSON.parse('{"title":"刚体组件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/physics/physics-rigidbody.md","filePath":"zh/manual/physics/physics-rigidbody.md"}'),D={name:"zh/manual/physics/physics-rigidbody.md"},d=o('<h1 id="刚体组件" tabindex="-1">刚体组件 <a class="header-anchor" href="#刚体组件" aria-label="Permalink to &quot;刚体组件&quot;">​</a></h1><p>刚体是组成物理世界的基本对象，它可以使游戏对象的运动方式受物理控制。例如：刚体可以使游戏对象受重力影响做自由下落，也可以在力和扭矩的作用下，让游戏对象模拟真实世界的物理现象。</p><h2 id="添加刚体" tabindex="-1">添加刚体 <a class="header-anchor" href="#添加刚体" aria-label="Permalink to &quot;添加刚体&quot;">​</a></h2><h3 id="通过编辑器添加" tabindex="-1">通过编辑器添加 <a class="header-anchor" href="#通过编辑器添加" aria-label="Permalink to &quot;通过编辑器添加&quot;">​</a></h3><p>点击 <strong>属性检查器</strong> 下方的 <strong>添加组件 -&gt; Physics -&gt; RigidBody</strong>，即可添加刚体组件到节点上。</p><p><img src="'+l+`" alt="add-rigidbody-in-inspector"></p><h3 id="程序化添加-获取" tabindex="-1">程序化添加/获取 <a class="header-anchor" href="#程序化添加-获取" aria-label="Permalink to &quot;程序化添加/获取&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RigidBody</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加刚体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rigidbody </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(RigidBody)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取刚体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rigidBody </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(RigidBody)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>刚体的 API 接口请参考 <a href="__APIDOC__/zh/class/physics.RigidBody">Class RigidBody</a>。</p><h3 id="什么情况下需要添加刚体" tabindex="-1">什么情况下需要添加刚体 <a class="header-anchor" href="#什么情况下需要添加刚体" aria-label="Permalink to &quot;什么情况下需要添加刚体&quot;">​</a></h3><ol><li>配置碰撞分组并让其生效。</li><li>物体需要具备运动学或动力学行为。</li></ol><blockquote><p><strong>注意</strong>：物体需要具备完全物理特性的前提条件物体同时具备 <strong>刚体</strong> 和 <strong>碰撞体</strong>，并调整好其质心位置和碰撞体的形状。</p></blockquote><h2 id="刚体属性" tabindex="-1">刚体属性 <a class="header-anchor" href="#刚体属性" aria-label="Permalink to &quot;刚体属性&quot;">​</a></h2><p><img src="`+t+'" alt="rigidbody"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Group</strong></td><td style="text-align:left;">刚体分组</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">刚体类型。<br><strong>DYNAMIC</strong>：动力学 <br><strong>STATIC</strong>：静态 <br><strong>KINEMATIC</strong>：运动学</td></tr></tbody></table><blockquote><p><strong>注意</strong>：碰撞体间定义碰撞发生的可能性是通过刚体的 <strong>Group</strong> 属性，而非 <strong>Node</strong> 的 <strong>Layer</strong> 属性。</p></blockquote><p>以下属性仅在 <strong>Type</strong> 设为 <strong>DYNAMIC</strong> 时生效：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Mass</strong></td><td style="text-align:left;">刚体质量，该值需大于 <strong>0</strong></td></tr><tr><td style="text-align:left;"><strong>AllowSleep</strong></td><td style="text-align:left;">是否允许自动休眠</td></tr><tr><td style="text-align:left;"><strong>LinearDamping</strong></td><td style="text-align:left;">线性阻尼，用于衰减线性速度，值越大，衰减越快</td></tr><tr><td style="text-align:left;"><strong>AngularDamping</strong></td><td style="text-align:left;">角阻尼，用于衰减角速度，值越大，衰减越快</td></tr><tr><td style="text-align:left;"><strong>UseGravity</strong></td><td style="text-align:left;">是否使用重力</td></tr><tr><td style="text-align:left;"><strong>LinerFactor</strong></td><td style="text-align:left;">线性因子，用于缩放每个轴方向上的物理数值（速度和力）</td></tr><tr><td style="text-align:left;"><strong>AngularFactor</strong></td><td style="text-align:left;">角因子，用于缩放每个轴方向上的物理数值（速度和力）</td></tr></tbody></table><p>刚体组件接口请参考 <a href="__APIDOC__/zh/class/physics.RigidBody">RigidBody API</a>。</p><h2 id="刚体类型" tabindex="-1">刚体类型 <a class="header-anchor" href="#刚体类型" aria-label="Permalink to &quot;刚体类型&quot;">​</a></h2><p>目前刚体类型包括 <strong>DYNAMIC</strong>、<strong>KINEMATIC</strong> 和 <strong>STATIC</strong>。</p><p><img src="'+p+'" alt="rigidbody-type"></p><ul><li><strong>STATIC</strong>：静态刚体。可以是手动设置刚体类型的游戏对象，也可以是具有碰撞体而没有刚体的游戏对象。如果一个节点默认只添加了碰撞器而没有添加刚体，那么这个节点可以认为默认使用的是 <strong>静态刚体</strong>。静态刚体在大多数情况下用于一些始终停留在一个地方，不会轻易移动的游戏物体，例如：建筑物。若物体需要持续运动，应设置为 <strong>KINEMATIC</strong> 类型。静态刚体与其他物体发生碰撞时，不会产生物理行为，因此，也不会移动。</li><li><strong>DYNAMIC</strong>：动力学刚体。刚体碰撞完全由物理引擎模拟，可以通过 <strong>力的作用</strong> 运动物体（需要保证质量大于 0）。例如：斯诺克游戏击球后，母球滚动与其他球撞击；</li><li><strong>KINEMATIC</strong>：运动学刚体。具有碰撞体和运动刚体，可以直接通过移动刚体对象的变换属性，但不会像动力学刚体一样响应力和碰撞，通常用于表达电梯这类平台运动的物体。它与静态刚体类似，不同的地方在于移动的运动刚体会对其他对象施加摩擦力，并在接触时唤醒其他刚体。</li></ul><p><strong>示例</strong>：通过一个简单的物理模拟说明各种类型刚体所具有的表现。下图方块中白色用了静态刚体，蓝色用了运动学刚体，黄色用了动力学刚体。其中白色和蓝色都是操控的变换信息，很明显的看出几个表现：</p><ol><li>白色和蓝色之间会出现穿透现象。</li><li>白色的静态物体也可以运动。</li><li>两个黄色方块表现不同，白色上方的静止不动，蓝色上方的会跟随着运动。</li></ol><p><img src="'+e+'" alt="physics-type"></p><p>以上现象的原因是：</p><ol><li>静态刚体和运动学刚体都不会受到力的作用，所以产生了穿透，这是正常现象。</li><li>静态物体的确是可以运动的，静态是指在时空中，每一个时刻都是静态，不会考虑其它时刻的状态。</li><li>与静态物体不同，运动学物体会根据附近时刻估算出运动状态（比如速度），又由于摩擦力的作用，因此带动了黄色方块。</li></ol><h2 id="刚体质心" tabindex="-1">刚体质心 <a class="header-anchor" href="#刚体质心" aria-label="Permalink to &quot;刚体质心&quot;">​</a></h2><p>在默认情况下，刚体的质心和模型的原点是一致的。</p><p>下图演示了当模型原点不一致时，质心位置的变化：</p><p><img src="'+r+'" alt="Centroid"></p><p>这里用一个示例来说明如何调整碰撞的质心：</p><ul><li><p>新建一个空的节点 <strong>Node</strong> 并添加下图所示的组件：</p><p><img src="'+c+'" alt="add comp"></p></li><li><p>在 <strong>Node</strong> 的子节点下添加一个胶囊体，如下图所示：</p><p><img src="'+i+'" alt="add capsule"></p></li><li><p>调整 <strong>cc.CapsuleCollider</strong> 的 Center 为下图所示，则此时胶囊体的质心则在胶囊体的底部：</p><p><img src="'+y+'" alt="result"></p></li></ul><p>通过下图可观察到当质心不一致时的运动表现，右边的胶囊体质心位于胶囊体的底部，左边的胶囊体质心位于物体的中心。</p><p><img src="'+F+`" alt="result"></p><h2 id="控制刚体" tabindex="-1">控制刚体 <a class="header-anchor" href="#控制刚体" aria-label="Permalink to &quot;控制刚体&quot;">​</a></h2><h3 id="让刚体运动起来" tabindex="-1">让刚体运动起来 <a class="header-anchor" href="#让刚体运动起来" aria-label="Permalink to &quot;让刚体运动起来&quot;">​</a></h3><p>针对不同的类型，让刚体运动的方式不同：</p><ul><li>对于静态刚体（<strong>STATIC</strong>），应当尽可能保持物体静止，但仍然可以通过变换（位置、旋转等）来改变物体的位置。</li><li>对于运动学刚体（<strong>KINEMATIC</strong>），应当通过改变变换（位置、旋转等）使其运动。</li></ul><p>对于动力学（<strong>DYNAMIC</strong>）刚体，需要改变其速度，有以下几种方式：</p><h4 id="通过重力" tabindex="-1">通过重力 <a class="header-anchor" href="#通过重力" aria-label="Permalink to &quot;通过重力&quot;">​</a></h4><p>刚体组件提供了 <strong>UseGravity</strong> 属性，需要使用重力时候，需将 <strong>UseGravity</strong> 属性设置为 <code>true</code>。</p><h4 id="通过施加力" tabindex="-1">通过施加力 <a class="header-anchor" href="#通过施加力" aria-label="Permalink to &quot;通过施加力&quot;">​</a></h4><p>刚体组件提供了 <code>applyForce</code> 接口，根据牛顿第二定律，可对刚体某点上施加力来改变物体的原有状态。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">math</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyForce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="通过施加扭矩" tabindex="-1">通过施加扭矩 <a class="header-anchor" href="#通过施加扭矩" aria-label="Permalink to &quot;通过施加扭矩&quot;">​</a></h4><p>刚体组件提供了 <code>applyTorque</code> 接口，可用于改变刚体的角速度。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyTorque</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="通过施加冲量" tabindex="-1">通过施加冲量 <a class="header-anchor" href="#通过施加冲量" aria-label="Permalink to &quot;通过施加冲量&quot;">​</a></h4><p>刚体组件提供了 <code>applyImpulse</code> 接口，施加冲量到刚体上的一个点，根据动量定理，将立即改变刚体的线性速度。 如果冲量施加到的点在力方向上的延长线不过刚体的质心，那么将产生一个非零扭矩并影响刚体的角速度。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyImpulse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="通过改变速度" tabindex="-1">通过改变速度 <a class="header-anchor" href="#通过改变速度" aria-label="Permalink to &quot;通过改变速度&quot;">​</a></h4><p>刚体组件提供了 <code>setLinearVelocity</code> 接口，可用于改变线性速度。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLinearVelocity</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>刚体组件提供了 <code>setAngularVelocity</code> 接口，可用于改变旋转速度。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAngularVelocity</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="限制刚体的运动" tabindex="-1">限制刚体的运动 <a class="header-anchor" href="#限制刚体的运动" aria-label="Permalink to &quot;限制刚体的运动&quot;">​</a></h3><h4 id="通过休眠" tabindex="-1">通过休眠 <a class="header-anchor" href="#通过休眠" aria-label="Permalink to &quot;通过休眠&quot;">​</a></h4><p>休眠刚体时，会将刚体所有的力和速度清空，使刚体停下来。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isAwake) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>唤醒刚体时，刚体的力和速度将会恢复。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isSleeping) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wakeUp</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：执行部分接口，例如施加力或冲量、改变速度、分组和掩码会尝试唤醒刚体。</p></blockquote><h4 id="通过阻尼" tabindex="-1">通过阻尼 <a class="header-anchor" href="#通过阻尼" aria-label="Permalink to &quot;通过阻尼&quot;">​</a></h4><p>刚体组件提供了 <strong>linearDamping</strong> 线性阻尼和 <strong>angularDamping</strong> 旋转阻尼属性，可以通过 <code>linearDamping</code> 和 <code>angularDamping</code> 方法对其获取或设置。</p><p>阻尼参数的范围建议在 <strong>0</strong> 到 <strong>1</strong> 之间，<strong>0</strong> 意味着没有阻尼，<strong>1</strong> 意味着满阻尼。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rigidBody) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">linearDamping</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">linearDamping</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">linearDamping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">angularDamping</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">angularDamping</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">angularDamping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="通过因子" tabindex="-1">通过因子 <a class="header-anchor" href="#通过因子" aria-label="Permalink to &quot;通过因子&quot;">​</a></h4><p>刚体组件提供了 <strong>linearFactor</strong> 线性速度因子和 <strong>angularFactor</strong> 旋转速度因子属性，可以通过 <code>linearFactor</code> 和 <code>angularFactor</code> 方法对其获取或设置。</p><p>因子是 <code>Vec3</code> 的类型，相应分量的数值用于缩放相应轴向的速度变化，默认值都为 <strong>1</strong>，表示缩放为 <strong>1</strong> 倍，即无缩放。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (rigidBody) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">linearFactor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">linearFactor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">linearFactor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">angularFactor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vec3</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">angularFactor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rigidBody</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">angularFactor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：</p><ol><li>将因子某分量值设置为 <strong>0</strong>，可以固定某个轴向的移动或旋转。</li><li>在使用 <a href="physics-engine.md#cannon.js"><strong>cannon.js</strong></a> 或 <a href="physics-engine.md#ammo.js"><strong>Bullet (ammo.js)</strong></a> 物理引擎情况下，因子作用的物理量不同，使用 <strong>cannon.js</strong> 时作用于速度，使用 <strong>Bullet (ammo.js)</strong> 时作用于力。</li></ol></blockquote>`,73),g=[d];function C(A,h,u,m,b,f){return a(),n("div",null,g)}const _=s(D,[["render",C]]);export{x as __pageData,_ as default};
