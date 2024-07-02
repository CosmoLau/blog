import{_ as i}from"./chunks/enable-contact.DDXFnxQ8.js";import{_ as s,c as t,o as a,a4 as e}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/add-rigid.BLbQvHFD.png",l="/docs/cocos/assets/rigidbody-2d.C8lNm_zh.png",o="/docs/cocos/assets/fix-rotation.CzNcVOhb.png",h="/docs/cocos/assets/rigidbody-type.DF-2A6Em.png",v=JSON.parse('{"title":"2D Rigidbody","description":"","frontmatter":{},"headers":[],"relativePath":"en/physics-2d/physics-2d-rigid-body.md","filePath":"en/physics-2d/physics-2d-rigid-body.md","lastUpdated":1712305443000}'),d={name:"en/physics-2d/physics-2d-rigid-body.md"},r=e('<h1 id="_2d-rigidbody" tabindex="-1">2D Rigidbody <a class="header-anchor" href="#_2d-rigidbody" aria-label="Permalink to &quot;2D Rigidbody&quot;">​</a></h1><p>A rigid body is the basic object that makes up the physical world and can be imagined as an object that you cannot see (draw) or touch (collide) and that cannot be deformed.</p><p>Since the Builtin 2D physics system only has collision detection, rigid bodies do not work for the Builtin 2D physics system, and this setup only works for the Box2D physics system.</p><h2 id="add-rigidbody" tabindex="-1">Add Rigidbody <a class="header-anchor" href="#add-rigidbody" aria-label="Permalink to &quot;Add Rigidbody&quot;">​</a></h2><p>Click the <strong>Add Component</strong> button in the <strong>Inspector</strong> panel and enter Rigidbody2D to add a 2D rigid body component.</p><p><img src="'+n+'" alt="add-rigid"></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p><img src="'+l+`" alt="rigidbody-2d"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Group</strong></td><td style="text-align:left;">The group of rigid bodies. The <a href="./../editor/project/physics-configs">Collision Matrix</a> you can set the possibility of collision between different groups</td></tr><tr><td style="text-align:left;"><strong>EnabledContactListener</strong></td><td style="text-align:left;">Whether to enable listening for <a href="./physics-2d-contact-callback">CollisionCallback</a></td></tr><tr><td style="text-align:left;"><strong>Bullet</strong></td><td style="text-align:left;">Is this rigid body a fast-moving rigid body and needs to be prohibited from passing through other fast-moving rigid bodies <br>Please refer to <a href="./__APIDOC__/zh/class/RigidBody2D">Rigidbody2D API</a> for more information Information</td></tr><tr><td style="text-align:left;"><strong>Type</strong></td><td style="text-align:left;">Rigid body types, please refer to <strong>Rigidbody Type</strong> below for details</td></tr><tr><td style="text-align:left;"><strong>AllowSleep</strong></td><td style="text-align:left;">Whether to allow rigid body sleep <br> <a href="./../editor/project/physics-configs">physics-configuration</a> can be adjusted in the threshold for sleep</td></tr><tr><td style="text-align:left;"><strong>GravityScale</strong></td><td style="text-align:left;">Gravity Scaling <br> Only for rigid bodies of type <strong>Dynamic</strong></td></tr><tr><td style="text-align:left;"><strong>LinearDamping</strong></td><td style="text-align:left;">Linear velocity damping factor</td></tr><tr><td style="text-align:left;"><strong>AngularDamping</strong></td><td style="text-align:left;">Angular velocity damping factor</td></tr><tr><td style="text-align:left;"><strong>LinearVelocity</strong></td><td style="text-align:left;">Linear velocity <br> Only for rigid bodies of type <strong>Dynamic</strong> and <strong>Kinematic</strong></td></tr><tr><td style="text-align:left;"><strong>AngularVelocity</strong></td><td style="text-align:left;">Angular velocity <br> Only for rigid bodies of type <strong>Dynamic</strong> and <strong>Kinematic</strong></td></tr><tr><td style="text-align:left;"><strong>FixedRotation</strong></td><td style="text-align:left;">Whether fixed rotation</td></tr><tr><td style="text-align:left;"><strong>AwakeOnLoad</strong></td><td style="text-align:left;">Wake up the rigid body as soon as the loading is completed</td></tr></tbody></table><p>Rigidbody component interface please refer to <a href="./__APIDOC__/zhclass/RigidBody2D">Rigidbody2D API</a>.</p><h2 id="rigidbody-properties" tabindex="-1">RigidBody Properties <a class="header-anchor" href="#rigidbody-properties" aria-label="Permalink to &quot;RigidBody Properties&quot;">​</a></h2><h3 id="mass" tabindex="-1">Mass <a class="header-anchor" href="#mass" aria-label="Permalink to &quot;Mass&quot;">​</a></h3><p>The mass of the rigid body is calculated automatically from the <strong>density</strong> and <strong>size</strong> of the <a href="./physics-2d-collider">Collider</a>. If you need to calculate how much force the object should be subjected to, you may need to use this property.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fetch the mass of rigidbody</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mass</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getMass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="velocity" tabindex="-1">Velocity <a class="header-anchor" href="#velocity" aria-label="Permalink to &quot;Velocity&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get linear velocity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> velocity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.linearVelocity;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Set linear velocity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.linearVelocity </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> velocity;</span></span></code></pre></div><p>Linear velocity damping factor, the larger the value the slower the object moves, can be used to simulate the effect of air friction and so on.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get linear damping</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> damping</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.linearDamping;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// set linear damping</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.linearDamping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> damping;</span></span></code></pre></div><p>If you want to get the velocity of a point on a rigid body, you can get it with <code>getLinearVelocityFromWorldPoint</code>. For example, if a box is spinning and flying forward and hits a wall, you may want to get the velocity of the box at the point where the collision occurred.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> velocity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLinearVelocityFromWorldPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldPoint);</span></span></code></pre></div><p>Or pass a <code>Vec2</code> object as the second argument to receive the return value, so you can use your cached object to receive the value and avoid creating too many objects for efficiency.</p><p><strong>The rigid get methods all provide out arguments to receive the function return value.</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> velocity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vec2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLinearVelocityFromWorldPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldPoint, velocity);</span></span></code></pre></div><h3 id="angular-velocity" tabindex="-1">Angular Velocity <a class="header-anchor" href="#angular-velocity" aria-label="Permalink to &quot;Angular Velocity&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get angular velocity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> velocity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.angularVelocity;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// set angular velocity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.angularVelocity </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> velocity;</span></span></code></pre></div><p>Angular velocity damping factor, same as the linear velocity damping factor.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get angular damping factor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> damping</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.angularDamping;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// set angular damping factor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.angularDamping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> damping;</span></span></code></pre></div><h3 id="rotation-translation-and-scaling" tabindex="-1">Rotation, Translation and Scaling <a class="header-anchor" href="#rotation-translation-and-scaling" aria-label="Permalink to &quot;Rotation, Translation and Scaling&quot;">​</a></h3><p>The rotation, translation and scaling are the most commonly used functions in game development, and almost every node sets these properties. The physical system automatically synchronizes these properties of the node with the corresponding properties in Box2D.</p><blockquote><p><strong>Note</strong>:</p><ol><li>There is only rotation and translation in Box2D, not scaling, so if you set the scaling property of a node, it will reconstruct all the collision bodies that this rigid body depends on. An effective way to avoid this is to treat the rendered node as a child of the rigid body node and only scale this rendered node, avoiding direct scaling of the rigid body node as much as possible.</li><li>At the end of each iteration of the physics system (the physics system is iterated in postUpdate), all rigid body information is synchronized to the corresponding node, and for performance reasons, the node information is only synchronized to the rigid body when the developer sets the display properties of the node where the rigid body is located, and the rigid body only monitors the node where it is located, i.e., if the That is, if the rotation of the node&#39;s parent node is modified, this information will not be synchronized.</li></ol></blockquote><h3 id="fix-rotation" tabindex="-1">Fix Rotation <a class="header-anchor" href="#fix-rotation" aria-label="Permalink to &quot;Fix Rotation&quot;">​</a></h3><p><img src="`+o+'" alt="fix ratation"></p><p>When doing platform jumping games, you usually don&#39;t want the rotation property of the main character to be added to the physics simulation, because it will cause the main character to fall over during the movement, so you can set <code>fixedRotation</code> of the rigid body to true to fix the rotation, the code example is as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.fixedRotation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="enablecontactlistener" tabindex="-1">EnableContactListener <a class="header-anchor" href="#enablecontactlistener" aria-label="Permalink to &quot;EnableContactListener&quot;">​</a></h3><p><img src="'+i+'" alt="contact"></p><p>Only when the collision listener of rigid body is enabled, the rigid body will call back to the corresponding component when a collision occurs. The code example is as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.enabledContactListener </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="rigidbody-type" tabindex="-1">Rigidbody Type <a class="header-anchor" href="#rigidbody-type" aria-label="Permalink to &quot;Rigidbody Type&quot;">​</a></h2><p><img src="'+h+`" alt="type"></p><p>Box2D originally had three rigid body types: <strong>Static</strong>, <strong>Dynamic</strong>, <strong>Kinematic</strong>. In Cocos Creator, one more type has been added: <strong>Animated</strong>.</p><p>Animated is derived from the Kinematic type. Generally, when modifying <strong>Rotation</strong> or <strong>Position</strong> properties of rigid body types, the properties are set directly, while Animated will calculate the required velocity based on the current rotation or translation property and the target rotation or translation property, and assign it to the corresponding movement or rotation velocity.</p><p>The main reason for adding the Animated type is to prevent strange phenomena that may occur when animating rigid bodies, such as penetration.</p><table><thead><tr><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Static</strong></td><td style="text-align:left;">Static rigid body, zero mass, zero velocity, that is, will not be affected by gravity or velocity, but can set his position to move. This type is usually used for making scenes</td></tr><tr><td style="text-align:left;"><strong>Dynamic</strong></td><td style="text-align:left;">Dynamic rigid body, with mass, can set velocity, and will be affected by gravity <br> the only rigid body type that can be modified by &#39;applyforce&#39; and &#39;applytorque&#39; methods</td></tr><tr><td style="text-align:left;"><strong>Kinematic</strong></td><td style="text-align:left;">Kinematic rigid body, zero mass, can set the velocity, will not be affected by gravity, but can set the velocity to move</td></tr><tr><td style="text-align:left;"><strong>Animated</strong></td><td style="text-align:left;">Animated rigid, already mentioned above, is a type derived from Kinematic, mainly used for rigid bodies in combination with animation editors</td></tr></tbody></table><p>The type of rigid body can be obtained or modified by code, the code example is as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RigidBody2D, ERigidBody2DType } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rigibodyType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.rigidbody2D.type</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.rigidbody2D.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ERigidBody2DType.Animated</span></span></code></pre></div><p>The type of the 2D rigid body is defined in the enumeration <code>ERigidBody2DType</code>, please note the distinction with the <code>ERigidBodyType</code> of the 3D physics.</p><h3 id="collision-response" tabindex="-1">Collision Response <a class="header-anchor" href="#collision-response" aria-label="Permalink to &quot;Collision Response&quot;">​</a></h3><p>Collisions between different types of rigid bodies are not always possible, and the results are organized as follows:</p><table><thead><tr><th style="text-align:left;">--</th><th style="text-align:left;">Static</th><th style="text-align:left;">Dynamic</th><th style="text-align:left;">Kinematic</th><th style="text-align:left;">Animated</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Static</strong></td><td style="text-align:left;"></td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td></tr><tr><td style="text-align:left;"><strong>Dynamic</strong></td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td></tr><tr><td style="text-align:left;"><strong>Kinematic</strong></td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td></tr><tr><td style="text-align:left;"><strong>Animated</strong></td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">√</td></tr></tbody></table><h2 id="rigidbody-methods" tabindex="-1">Rigidbody Methods <a class="header-anchor" href="#rigidbody-methods" aria-label="Permalink to &quot;Rigidbody Methods&quot;">​</a></h2><h3 id="get-or-convert-rotation-and-position-properties" tabindex="-1">Get or Convert Rotation and Position Properties <a class="header-anchor" href="#get-or-convert-rotation-and-position-properties" aria-label="Permalink to &quot;Get or Convert Rotation and Position Properties&quot;">​</a></h3><p>Using these APIs to get rotations and translations in the world coordinate system is faster than using the nodes, because the nodes also require a matrix operation to get the result, whereas using the APIs gives the result directly.</p><h4 id="local-coordinates-and-world-coordinate-transformation" tabindex="-1">Local Coordinates and World Coordinate Transformation <a class="header-anchor" href="#local-coordinates-and-world-coordinate-transformation" aria-label="Permalink to &quot;Local Coordinates and World Coordinate Transformation&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// world coordinates to local coordinates</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> localPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldPoint);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localPoint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldPoint, localPoint);</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// local coordinates to world coordinates</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worldPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localPoint);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worldPoint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localPoint, worldPoint);</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// local vector to world vector</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worldVector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localVector);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worldVector </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localVector, worldVector);</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> localVector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldVector);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localVector </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalVector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldVector, localVector);</span></span></code></pre></div><h3 id="get-the-rigidbody-mass-center" tabindex="-1">Get the RigidBody Mass Center <a class="header-anchor" href="#get-the-rigidbody-mass-center" aria-label="Permalink to &quot;Get the RigidBody Mass Center&quot;">​</a></h3><p>When force is applied to a RigidBody, the mass center of the RigidBody is generally chosen as the point of application of the force, which ensures that the force does not affect the rotation value.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the mass center in the local coordinate system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> localCenter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalCenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or through the parameters to receive the return value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localCenter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalCenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localCenter);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the mass center in the world coordinate system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worldCenter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldCenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or through the parameters to receive the return value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worldCenter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldCenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldCenter);</span></span></code></pre></div><h3 id="force-and-impulse" tabindex="-1">Force and Impulse <a class="header-anchor" href="#force-and-impulse" aria-label="Permalink to &quot;Force and Impulse&quot;">​</a></h3><p>There are two ways to move an object:</p><ol><li>Apply a force or impulse to the object. The force will slowly change the velocity of the object over time, and the impulse will immediately modify the velocity of the object.</li><li>It is possible to directly modify the location of the object, but this does not give you the real physics simulation, you should try to use force or impulse to move a RigidBody to make the physics world more consistent.</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Apply a force to the point specified on the RigidBody, this point is a point in the world coordinate system</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyForce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(force, point);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or apply force directly to the mass of the rigid body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyForceToCenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(force);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Apply a punch to the point specified on the rigid body, this point is a point in the world coordinate system</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyLinearImpulse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(impulse, point);</span></span></code></pre></div><p>Force and impulse can also affect the rotation only, this kind of force is called torque.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Apply torque to RigidBody. because it only affects the rotation, so no longer need to specify a point</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyTorque</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(torque);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Apply the impulse on the rotating shaft to the RigidBody</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyAngularImpulse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(impulse);</span></span></code></pre></div><h3 id="other-information" tabindex="-1">Other Information <a class="header-anchor" href="#other-information" aria-label="Permalink to &quot;Other Information&quot;">​</a></h3><p>Sometimes you need to get the velocity of a RigidBody at a certain point, you can get by <code>getLinearVelocityFromWorldPoint</code> API, such as when the object collides with a platform, we need to determine whether the object is colliding from top or bottom of the platform according to the velocity of the collision point relative to the platform.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rigidbody.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLinearVelocityFromWorldPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worldPoint);</span></span></code></pre></div><p>More rigid body methods can be found in <a href="./__APIDOC__/zh/class/RigidBody2D">Rigidbody2D API</a></p>`,71),p=[r];function g(c,k,y,E,b,m){return a(),t("div",null,p)}const F=s(d,[["render",g]]);export{v as __pageData,F as default};