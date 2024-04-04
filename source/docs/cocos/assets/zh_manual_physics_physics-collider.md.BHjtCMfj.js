import{_ as t,c as e,o as l,a5 as s}from"./chunks/framework.CqnjdYks.js";const a="/docs/cocos/assets/physics-add-cube.DHrhh2Ti.png",i="/docs/cocos/assets/physics-add-boxcollider.BAGbW03N.png",r="/docs/cocos/assets/collider-box.DW46JIwL.jpg",o="/docs/cocos/assets/collider-sphere.CDWuRNcR.jpg",n="/docs/cocos/assets/collider-capsule.B5Aspzry.jpg",d="/docs/cocos/assets/capsule-explain.Cs2XUAxG.png",h="/docs/cocos/assets/collider-cylinder.y7HCvUzw.jpg",p="/docs/cocos/assets/collider-cone.C_nCBYY2.jpg",g="/docs/cocos/assets/compound-colliders.BgNgTEnp.png",c="/docs/cocos/assets/collider-plane.T9Y1Evfj.jpg",y="/docs/cocos/assets/collider-mesh.BDFE8pPy.jpg",x="/docs/cocos/assets/collider-simplex.CK6nJ3rm.jpg",f="/docs/cocos/assets/collider-terrain.BCyPNTWO.jpg",C="/docs/cocos/assets/collider-non-uniform-scale.A98FoROL.jpg",b="/docs/cocos/assets/collider-cobblestone.Dm7PdtV2.jpg",k="/docs/cocos/assets/box-all-in-parent.DSCGu2cq.png",S=JSON.parse('{"title":"碰撞组件与基础属性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/physics/physics-collider.md","filePath":"zh/manual/physics/physics-collider.md"}'),m={name:"zh/manual/physics/physics-collider.md"},u=s('<h1 id="碰撞组件与基础属性" tabindex="-1">碰撞组件与基础属性 <a class="header-anchor" href="#碰撞组件与基础属性" aria-label="Permalink to &quot;碰撞组件与基础属性&quot;">​</a></h1><p>碰撞组件可用于定义需要进行物理碰撞的物体形状，不同的几何形状拥有不同的属性。碰撞体通常分为以下几种：</p><ol><li><a href="#基础碰撞体">基础碰撞体</a>。常见的包含 <a href="#盒碰撞器组件-BoxCollider">盒</a>、<a href="#球碰撞器组件-SphereCollider">球</a>、<a href="#圆柱碰撞器组件-CylinderCollider">圆柱</a>、<a href="#圆锥碰撞器组件-ConeCollider">圆锥</a>、<a href="#胶囊碰撞器组件-CapsuleCollider">胶囊</a> 碰撞体。</li><li><a href="#复合碰撞体">复合碰撞体</a>。可以通过在一个节点身上添加一个或多个基础碰撞体，简易模拟游戏对象形状，同时保持较低的性能开销。</li><li><a href="#网格碰撞器组件-MeshCollider">网格碰撞体</a>。根据物体网格信息生成碰撞体，完全的贴合网格。</li><li><a href="#单纯形碰撞器组件-SimplexCollider">单纯形碰撞体</a>。提供点、线、三角面、四面体碰撞。</li><li><a href="#平面碰撞器组件-PlaneCollider">平面碰撞体</a>。可以代表无限平面或半空间。这个形状只能用于静态的、非移动的物体。</li><li><a href="#地形碰撞器组件-TerrainCollider">地形碰撞体</a>。一种用于凹地形的特殊支持。</li></ol><blockquote><p><strong>注意</strong>：在某些（如 Bullet）物理后端中，由于计算精度的原因，应该避免使用比例很高的尺寸，这里建议低于1000。如某个盒碰撞器，其 <strong>Size</strong> 属性的 Y 值为 40 而 Z 值为 0.01，此时他们的 Y、Z 的比例超过了 1000，此时可能会出现浮点数计算不准确的问题。</p></blockquote><h2 id="添加碰撞组件" tabindex="-1">添加碰撞组件 <a class="header-anchor" href="#添加碰撞组件" aria-label="Permalink to &quot;添加碰撞组件&quot;">​</a></h2><p>这里以获取 <strong>BoxCollider</strong> 盒碰撞器组件为例。</p><h3 id="通过编辑器添加" tabindex="-1">通过编辑器添加 <a class="header-anchor" href="#通过编辑器添加" aria-label="Permalink to &quot;通过编辑器添加&quot;">​</a></h3><ol><li><p>新建一个 3D 对象 Cube，在 <strong>资源管理器</strong> 中点击左上角的 <strong>+</strong> 创建按钮，然后选择 <strong>创建 -&gt; 3D 对象 -&gt; Cube 立方体</strong>。</p><p><img src="'+a+'" alt="add-cube"></p></li><li><p>选中新建的 Cube 立方体节点，在右侧的 <strong>属性检查器</strong> 面板下方点击 <strong>添加组件</strong> 按钮，选择 <strong>Physics -&gt; BoxCollider</strong> 添加一个碰撞器组件.</p><p><img src="'+i+`" alt="add-boxcollider"></p></li></ol><h3 id="通过代码添加" tabindex="-1">通过代码添加 <a class="header-anchor" href="#通过代码添加" aria-label="Permalink to &quot;通过代码添加&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BoxCollider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boxCollider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BoxCollider);</span></span></code></pre></div><h2 id="碰撞组件共有属性说明" tabindex="-1">碰撞组件共有属性说明 <a class="header-anchor" href="#碰撞组件共有属性说明" aria-label="Permalink to &quot;碰撞组件共有属性说明&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Attached</strong></td><td style="text-align:left;">碰撞器所绑定的 <a href="./physics-rigidbody.html">刚体</a></td></tr><tr><td style="text-align:left;"><strong>Material</strong></td><td style="text-align:left;">碰撞器所使用的 <a href="./physics-material.html">物理材质</a>，未设置时使用引擎默认的物理材质</td></tr><tr><td style="text-align:left;"><strong>IsTrigger</strong></td><td style="text-align:left;">是否为 <a href="./physics-event.html">触发器</a>，触发器不会产生物理反馈</td></tr></tbody></table><p>刚体获取请注意以下几点：</p><ul><li>在自身节点无 <code>RigidBody</code> 组件时，该属性返回为 <code>null</code>。</li><li>Attached 对应的真实属性名为 attachedRigidBody，attachedRigidbody 是一个只读的属性，不可修改。</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BoxCollider)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collider.attachedRigidBody;</span></span></code></pre></div><p>有关碰撞器的编辑可以查看：<a href="./../editor/scene/collider-gizmo.html">碰撞器 Gizmo</a>。</p><blockquote><p><strong>注意</strong>：在使用碰撞体前请先查阅 <a href="./physics-engine.html#不同物理后端碰撞形状支持情况">不同物理后端碰撞形状支持情况</a>，确保当前使用的物理引擎支持。</p></blockquote><h2 id="碰撞组件" tabindex="-1">碰撞组件 <a class="header-anchor" href="#碰撞组件" aria-label="Permalink to &quot;碰撞组件&quot;">​</a></h2><h3 id="基础碰撞体" tabindex="-1">基础碰撞体 <a class="header-anchor" href="#基础碰撞体" aria-label="Permalink to &quot;基础碰撞体&quot;">​</a></h3><h4 id="盒碰撞器组件-boxcollider" tabindex="-1">盒碰撞器组件 BoxCollider <a class="header-anchor" href="#盒碰撞器组件-boxcollider" aria-label="Permalink to &quot;盒碰撞器组件 BoxCollider&quot;">​</a></h4><p><img src="`+r+'" alt="盒碰撞器组件"></p><p>盒形碰撞体是一个基于长方体形状的碰撞体，可用来实现木箱、墙壁等物体的碰撞。可以用来组合成复合形状。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Size</strong></td><td style="text-align:left;">在本地坐标系中，盒的大小，即长、宽、高</td></tr></tbody></table><p>盒碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.BoxCollider.html">BoxCollider API</a>。</p><h4 id="球碰撞器组件-spherecollider" tabindex="-1">球碰撞器组件 SphereCollider <a class="header-anchor" href="#球碰撞器组件-spherecollider" aria-label="Permalink to &quot;球碰撞器组件 SphereCollider&quot;">​</a></h4><p><img src="'+o+'" alt="球碰撞器组件"></p><p>球碰撞体是一个基于球形的碰撞体。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">在本地坐标系中，球的半径</td></tr></tbody></table><p>球碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.SphereCollider.html">SphereCollider API</a>。</p><h4 id="胶囊碰撞器组件-capsulecollider" tabindex="-1">胶囊碰撞器组件 CapsuleCollider <a class="header-anchor" href="#胶囊碰撞器组件-capsulecollider" aria-label="Permalink to &quot;胶囊碰撞器组件 CapsuleCollider&quot;">​</a></h4><p><img src="'+n+'" alt="胶囊碰撞器组件"></p><p>胶囊碰撞体是一个基于胶囊形状的碰撞体。</p><blockquote><p><strong>注意</strong>：<code>cannon.js</code> 不支持胶囊组件，建议使用两个球体和圆柱拼凑。</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">在本地坐标系中，胶囊体上的球的半径</td></tr><tr><td style="text-align:left;"><strong>CylinderHeight</strong></td><td style="text-align:left;">在本地坐标系中，胶囊体上圆柱体高度</td></tr><tr><td style="text-align:left;"><strong>Direction</strong></td><td style="text-align:left;">在本地坐标系中，胶囊体的朝向</td></tr></tbody></table><p><img src="'+d+'" alt="capsule-explain"></p><p>胶囊碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.CapsuleCollider.html">CapsuleCollider API</a>。</p><h4 id="圆柱碰撞器组件-cylindercollider" tabindex="-1">圆柱碰撞器组件 CylinderCollider <a class="header-anchor" href="#圆柱碰撞器组件-cylindercollider" aria-label="Permalink to &quot;圆柱碰撞器组件 CylinderCollider&quot;">​</a></h4><p><img src="'+h+'" alt="圆柱碰撞器组件"></p><p>圆柱碰撞体是一个基于圆柱体的碰撞体。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">在本地坐标系中，圆柱体上圆面的半径</td></tr><tr><td style="text-align:left;"><strong>Height</strong></td><td style="text-align:left;">在本地坐标系中，圆柱体在相应轴向的高度</td></tr><tr><td style="text-align:left;"><strong>Direction</strong></td><td style="text-align:left;">在本地坐标系中，圆柱体的朝向</td></tr></tbody></table><p>圆柱碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.CapsuleCollider.html">CylinderCollider API</a>。</p><h4 id="圆锥碰撞器组件-conecollider" tabindex="-1">圆锥碰撞器组件 ConeCollider <a class="header-anchor" href="#圆锥碰撞器组件-conecollider" aria-label="Permalink to &quot;圆锥碰撞器组件 ConeCollider&quot;">​</a></h4><p><img src="'+p+'" alt="圆锥碰撞器组件"></p><p>圆锥碰撞体是一个基于圆锥体的碰撞体。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Height</strong></td><td style="text-align:left;">在本地坐标系中，圆锥体在相应轴向的高度</td></tr><tr><td style="text-align:left;"><strong>Direction</strong></td><td style="text-align:left;">在本地坐标系中，圆锥体的朝向</td></tr></tbody></table><p>圆锥碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.ConeCollider.html">ConeCollider API</a>。</p><h3 id="复合碰撞体" tabindex="-1">复合碰撞体 <a class="header-anchor" href="#复合碰撞体" aria-label="Permalink to &quot;复合碰撞体&quot;">​</a></h3><p>复合碰撞体指的不是一个碰撞体类型，而是由多个基础碰撞体组成的可以简易模拟游戏对象形状的碰撞体组合。</p><p><img src="'+g+'" alt="compound-colliders"></p><h3 id="平面碰撞组件-planecollider" tabindex="-1">平面碰撞组件 PlaneCollider <a class="header-anchor" href="#平面碰撞组件-planecollider" aria-label="Permalink to &quot;平面碰撞组件 PlaneCollider&quot;">​</a></h3><p><img src="'+c+'" alt="平面碰撞器组件"></p><p>平面碰撞体是一个所属平面模型的碰撞体。平面模型可以通过在 <strong>层级管理器</strong> 面板右击 <strong>创建-&gt;3D 对象-&gt;Plane 平面</strong> 创建。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Normal</strong></td><td style="text-align:left;">在本地坐标系中，平面的法线</td></tr><tr><td style="text-align:left;"><strong>Constant</strong></td><td style="text-align:left;">在本地坐标系中，平面从原点开始沿着法线运动的距离</td></tr></tbody></table><p>平面碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.PlaneCollider.html">PlaneCollider API</a>。</p><h3 id="网格碰撞组件-meshcollider" tabindex="-1">网格碰撞组件 MeshCollider <a class="header-anchor" href="#网格碰撞组件-meshcollider" aria-label="Permalink to &quot;网格碰撞组件 MeshCollider&quot;">​</a></h3><p><img src="'+y+'" alt="网格碰撞器组件"></p><p>网格碰撞体是一个基于模型网格而形成的碰撞体。</p><blockquote><p><strong>注意</strong>：</p><ol><li><code>cannon.js</code> 对网格碰撞器组件支持程度较差，只允许与少数碰撞器（球、平面）产生检测。</li><li><strong>Convex</strong> 功能目前仅 <code>ammo.js</code> 后端支持。</li></ol></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Mesh</strong></td><td style="text-align:left;">网格碰撞器所使用的网格资源，用于初始化网格碰撞体</td></tr><tr><td style="text-align:left;"><strong>Convex</strong></td><td style="text-align:left;">是否使用网格的凸包近似代替，网格顶点数应小于 <strong>255</strong>，开启后可以支持动力学</td></tr></tbody></table><p>网格碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.MeshCollider.html">MeshCollider API</a>。</p><h3 id="单纯形碰撞组件-simplexcollider" tabindex="-1">单纯形碰撞组件 SimplexCollider <a class="header-anchor" href="#单纯形碰撞组件-simplexcollider" aria-label="Permalink to &quot;单纯形碰撞组件 SimplexCollider&quot;">​</a></h3><p><img src="'+x+'" alt="单纯形碰撞器组件"></p><p>单纯形碰撞体是一个基于点、线、面和四面体的碰撞体。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>ShapeType</strong></td><td style="text-align:left;">单纯形类型，包括四种：点、线、三角面、四面体</td></tr><tr><td style="text-align:left;"><strong>Vertex0</strong></td><td style="text-align:left;">单纯形的顶点 0，点（由 0 组成）</td></tr><tr><td style="text-align:left;"><strong>Vertex1</strong></td><td style="text-align:left;">单纯形的顶点 1，线（由 0、1 组成）</td></tr><tr><td style="text-align:left;"><strong>Vertex2</strong></td><td style="text-align:left;">单纯形的顶点 2，三角面（以此类推）</td></tr><tr><td style="text-align:left;"><strong>Vertex3</strong></td><td style="text-align:left;">单纯形的顶点 3，四面体</td></tr></tbody></table><p>单纯形碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.SimplexCollider.html">SimplexCollider API</a>。</p><blockquote><p><strong>注意</strong>：<code>cannon.js</code> 对线和三角面的支持目前还不完善。</p></blockquote><h3 id="地形碰撞组件-terraincollider" tabindex="-1">地形碰撞组件 TerrainCollider <a class="header-anchor" href="#地形碰撞组件-terraincollider" aria-label="Permalink to &quot;地形碰撞组件 TerrainCollider&quot;">​</a></h3><p><img src="'+f+'" alt="地形碰撞器组件"></p><p>地形碰撞体是一个地形表面生成的碰撞体，具体形状与其附加到 Terrain 属性上的对象相同。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Center</strong></td><td style="text-align:left;">在本地坐标系中，形状的中心位置</td></tr><tr><td style="text-align:left;"><strong>Terrain</strong></td><td style="text-align:left;">获取或设置此碰撞体引用的网格资源</td></tr></tbody></table><p>地形碰撞器组件接口请参考 <a href="./__APIDOC__/zh/class/physics.TerrainCollider.html">TerrainCollider API</a>。</p><h2 id="自动缩放" tabindex="-1">自动缩放 <a class="header-anchor" href="#自动缩放" aria-label="Permalink to &quot;自动缩放&quot;">​</a></h2><p>每个组件都会绑定在一个节点上，有些组件会根据绑定的节点动态更新数据。其中碰撞体组件会根据节点信息自动更新相应的形状数据，让碰撞体可以更贴合渲染模型。以模型组件举例：</p><p>模型组件会根据绑定节点自动更新模型的世界矩阵，从而实现改变节点的位置、缩放、旋转等信息，可以使渲染的模型有相应仿射变换。</p><p>但碰撞体的有些性质导致缩放的处理不太一样：</p><ul><li>碰撞体一般用几何结构来描述</li><li>碰撞体大部分都是凸包类型</li></ul><p>这些性质限制了切变、非均一缩放等变换，以球举例：</p><p>假设绑定节点的缩放信息是 <strong>(1,2,1)</strong>（非均一缩放），由于模型和碰撞体描述的结构不一样，球模型使用多个基础图元（如三角面）来表示，缩放后会形变成类似于鹅卵石的形状；而球碰撞体是根据半径大小来描述，缩放时会取数值最大的维度来缩放半径（这样是为了碰撞体尽可能的包围住模型），<strong>但缩放后还是一个球</strong>，因此无法精确的包裹着类似于鹅卵石大小的球模型。</p><p><img src="'+C+'" alt="非均一缩放球"></p><h3 id="非标准形状" tabindex="-1">非标准形状 <a class="header-anchor" href="#非标准形状" aria-label="Permalink to &quot;非标准形状&quot;">​</a></h3><p>对于像鹅卵石这样非标准形状，可以使用 <a href="./physics-component.html#网格碰撞器组件 MeshCollider">MeshCollider 网格碰撞体</a> 来代替基础的碰撞体。</p><p><strong>注意</strong>：若需要支持动力学刚体，则必须开启 <strong>convex</strong> 功能。</p><p><img src="'+b+'" alt="鹅卵石"></p><h2 id="复合碰撞" tabindex="-1">复合碰撞 <a class="header-anchor" href="#复合碰撞" aria-label="Permalink to &quot;复合碰撞&quot;">​</a></h2><p>对于单个节点是很容易看出是否有物理元素的，但如果以节点链（由节点树构成的物理元素）为单位，则很难看出物理元素是由哪些节点以及哪些组件组成的。</p><p>对于节点链的情况，目前有两个使用方案：</p><ol><li><p>节点链上的每个节点只要有物理组件，就是一个元素，这样父子节点之间的组件没有依赖关系。若节点需要多个碰撞体形状，往该节点上添加相应的 <strong>Collider</strong> 组件即可。 <img src="'+k+'" alt="box-all-in-parent"></p><p><strong>缺点</strong>：</p><ul><li>层级结构不够直观，多个形状只能往一个节点上加，而显示形状需要增加子节点模型，并且难以支持碰撞体的局部旋转。</li><li>对节点链调整参数时，需要同时调整两个地方，分别为子节点的位置信息和父节点上对应 <strong>Collider</strong> 组件的数据信息。</li></ul></li><li><p>从自身节点开始往父链节点上搜索，如果找到了 <strong>RigidBody</strong> 组件，则将自身的 <strong>Collider</strong> 组件绑定到该节点上，否则整条链上的 <strong>Collider</strong> 组件将共享一个 <strong>RigidBody</strong> 组件，元素对应的节点是最顶层的 <strong>Collider</strong> 组件所对应的节点。</p><p><strong>缺点</strong>：</p><ul><li>增加了节点耦合，节点更新时，需要更新相应的依赖节点。</li><li>在节点链被破坏时，需要维护内容更多，节点链在反复被破坏时需要处理复杂的逻辑。</li></ul></li></ol><blockquote><p><strong>注意</strong>：目前 Cocos Creator 使用的是方案 <strong>1</strong>，后续版本也有进行调整的可能，请留意版本更新公告。</p></blockquote>',88),_=[u];function q(P,E,A,D,B,F){return l(),e("div",null,_)}const T=t(m,[["render",q]]);export{S as __pageData,T as default};
