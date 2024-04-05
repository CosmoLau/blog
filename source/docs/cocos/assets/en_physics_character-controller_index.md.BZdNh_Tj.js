import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/backend.CJd9QxgW.jpg",o="/docs/cocos/assets/add-capsule-charactercontroller.BC-icEBm.jpg",i="/docs/cocos/assets/capsule-property.DzOgZepP.jpg",l="/docs/cocos/assets/add-box-charactercontroller.esNccayq.jpg",n="/docs/cocos/assets/box-property.BhPcI2wK.jpg",b=JSON.parse('{"title":"Character Controller","description":"","frontmatter":{},"headers":[],"relativePath":"en/physics/character-controller/index.md","filePath":"en/physics/character-controller/index.md","lastUpdated":1712305443000}'),h={name:"en/physics/character-controller/index.md"},c=r('<h1 id="character-controller" tabindex="-1">Character Controller <a class="header-anchor" href="#character-controller" aria-label="Permalink to &quot;Character Controller&quot;">​</a></h1><blockquote><p>Cocos Creator supports character controllers since v3.8.</p></blockquote><p>The character controllers provide a simple way to add a character controller to your game.</p><h2 id="add-character-controller" tabindex="-1">Add Character Controller <a class="header-anchor" href="#add-character-controller" aria-label="Permalink to &quot;Add Character Controller&quot;">​</a></h2><p>There are two types of character controllers in Cocos Creator, box character controller, and capsule character controller, both of them are inherited from the base class <code>CharacterController</code>.</p><p>It is recommended that character controllers are invalid only in the <strong>Bullet</strong> and <strong>PhysX</strong> backends. By clicking on the <strong>Project</strong> menu, open the <strong>Project Setting</strong> panel, and find <strong>Physics System</strong> in the <strong>Feature Cropping</strong> page, choose <strong>Bullet</strong> or <strong>PhysX</strong> in the drop-down menu.</p><p><img src="'+s+'" alt="backend.jpg"></p><h3 id="common-properties" tabindex="-1">Common Properties <a class="header-anchor" href="#common-properties" aria-label="Permalink to &quot;Common Properties&quot;">​</a></h3><p>The following properties are the common properties of the character controller which can be found in the <strong>Inspector</strong> panel of <strong>Box Character Controller</strong> and <strong>Capsule Character Controller</strong> component.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Group</td><td style="text-align:left;">Physics group，refer to <a href="./physics-configs#collision-matrix">Collision Matrix</a> for more details.</td></tr><tr><td style="text-align:left;">Min Move Distance</td><td style="text-align:left;">The minimum movement distance of the character controller. If the move distance invoked by the <code>move</code> method is smaller than this value, the character controller will not move.</td></tr><tr><td style="text-align:left;">Center</td><td style="text-align:left;">The center of the character controller in local space</td></tr><tr><td style="text-align:left;">Step Offset</td><td style="text-align:left;">The maximum height the character controller can automatically climb.</td></tr><tr><td style="text-align:left;">Slope Limit</td><td style="text-align:left;">The slope limit of the character controller in degrees.</td></tr><tr><td style="text-align:left;">Skin Width</td><td style="text-align:left;">The skin width of the character controller, please see below for more details</td></tr></tbody></table><h3 id="capsule-character-controller" tabindex="-1">Capsule Character Controller <a class="header-anchor" href="#capsule-character-controller" aria-label="Permalink to &quot;Capsule Character Controller&quot;">​</a></h3><p>By clicking the <strong>Add Component</strong> button in the <strong>Inspector</strong> panel add a <strong>CapsuleCharacterController</strong>.</p><p><img src="'+o+'" alt="add-capsule-charactercontroller.jpg"></p><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><p><img src="'+i+'" alt="capsule-property.jpg"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Radius</td><td style="text-align:left;">The radius of the sphere of the capsule shape of the CharacterController in local space</td></tr><tr><td style="text-align:left;">Height</td><td style="text-align:left;">The distance between the center of two half-sphere</td></tr></tbody></table><h3 id="box-character-controller" tabindex="-1">Box Character Controller <a class="header-anchor" href="#box-character-controller" aria-label="Permalink to &quot;Box Character Controller&quot;">​</a></h3><p>By clicking the <strong>Add Component</strong> button in the <strong>Inspector</strong> panel to add a <strong>BoxCharacterController</strong>.</p><p><img src="'+l+'" alt="add-box-character-controller.jpg"></p><h4 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><p><img src="'+n+`" alt="box-property.jpg"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Half Height</td><td style="text-align:left;">The half height of the box shape of the CharacterController in local space</td></tr><tr><td style="text-align:left;">Half Side Extent</td><td style="text-align:left;">The half-side extent of the box shape of the CharacterController in local space</td></tr><tr><td style="text-align:left;">Half Forward Extent</td><td style="text-align:left;">The half-forward extent of the box on the CharacterController in local space</td></tr></tbody></table><h2 id="manipulating-the-character-controllers" tabindex="-1">Manipulating the Character Controllers <a class="header-anchor" href="#manipulating-the-character-controllers" aria-label="Permalink to &quot;Manipulating the Character Controllers&quot;">​</a></h2><p>To drive a character controller to move, you can use the <code>move</code> method with the following code.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> movement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> characterController </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CharacterController);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">characterController.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">move</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movement);</span></span></code></pre></div><p>The <code>move</code> method which uses the algorithm of the <code>sweep</code> method as its internal takes into all the colliders on its path. On the one hand, it will judge the angle between the character controller and the collider, if it is smaller than the slope limit, the character controller will continue to walk along the surface of the collider, on the other hand, if the height difference between the character controller and the collider is smaller than the step offset, the character controller also automatically climbing the step. But if the two conditions above are not satisfied, the controller will stop.</p><p>To reset the position of a character controller, use the <code>setPosition</code> method of the character controller instead of using <code>setPosition</code> of the node, as follows.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let characterController = this.node.getComponent(CharacterController);</span></span>
<span class="line"><span>characterController.setPosition(new Vec3(-3,5,6));</span></span></code></pre></div><p>When a character controller node is moved via the <code>setPosition</code> method, it will automatically set the position of the physics world simultaneously, however, the <code>setPosition</code> or <code>setWorldPosition</code> method of the node may cause the scene and physics world position out of sync.</p><blockquote><p>That is because when every frame when the synchronization of the position from the render scene to the physics world, the center offset must be taken into consideration.</p></blockquote><p>It can be noticed that the Character Controller applies no force like gravity by default, developers need to add custom forces or change the velocity to simulate the movement or rotation.</p><h2 id="determine-if-on-the-ground" tabindex="-1">Determine if on the Ground <a class="header-anchor" href="#determine-if-on-the-ground" aria-label="Permalink to &quot;Determine if on the Ground&quot;">​</a></h2><p>Use the <code>isGrounded</code> method to determine whether a character controller is standing on some colliders with the following code.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> characterController </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CharacterController);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isOnGround</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> characterController.isGrounded;</span></span></code></pre></div><h2 id="collision-callback" tabindex="-1">Collision Callback <a class="header-anchor" href="#collision-callback" aria-label="Permalink to &quot;Collision Callback&quot;">​</a></h2><p>The <code>onColliderHit</code> event will be emitted when a collision occurs between the character controller and the collider, the code example is as follows.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> characterController </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CharacterController)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">characterController.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;onControllerColliderHit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.onColliderHit, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The callback of the collision is declared as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onColliderHit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (contact: CharacterControllerContact){}</span></span></code></pre></div><p>The description of the callback is below.</p><ul><li>contact: the contact information when the collision occurs, refer to <a href="./__APIDOC__/en/classes/physics.CharacterControllerContact">CharacterControllerContact</a></li></ul><p>A trigger event occurs when the character controller hits or leaves a trigger collider, as described below.</p><table><thead><tr><th style="text-align:left;">Event</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onControllerTriggerEnter</code></td><td style="text-align:left;">Triggered when the trigger starts</td></tr><tr><td style="text-align:left;"><code>onControllerTriggerStay</code></td><td style="text-align:left;">Triggered frequently when the trigger is held</td></tr><tr><td style="text-align:left;"><code>onControllerTriggerExit</code></td><td style="text-align:left;">Triggered at the end of a trigger</td></tr></tbody></table><h2 id="details" tabindex="-1">Details <a class="header-anchor" href="#details" aria-label="Permalink to &quot;Details&quot;">​</a></h2><p>Normally a character is not a fully simulated physics object when we try to simulate a character, which means it will not exhibit full physics characteristics. This means that when the collision occurs, the force situation of the character controller is different from a dynamic rigid body. Changing the position, or simulating velocity in the collision callback to implement the fore effect.</p><p>To simulate the full physics effect, please use <a href="./../physics-rigidbody">Dynamic Rigibody</a>. Note that if you attach a rigid body component to the node containing a character controller, this may cause unexpected errors which normally we do not recommend.</p><p>There is no physics effect between character controllers, and this feature will be added in the future version.</p><h3 id="skin-width" tabindex="-1">Skin Width <a class="header-anchor" href="#skin-width" aria-label="Permalink to &quot;Skin Width&quot;">​</a></h3><p>The <strong>Skin Width</strong> property allows slight penetration between a character controller and a collider to avoid shaking or stuck.</p><p>It is usually a small, floating number above zero.</p><p>If stuck frequently, you can adjust the <strong>Skin Width</strong> to a large number to avoid precision problems with floating-point numbers.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>The address of the character controller is <a href="https://github.com/cocos/cocos-example-projects" target="_blank" rel="noreferrer">GIT</a>. Import the project, and run the <strong>case-character-controller.scene</strong> scene to see the character controller example.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>For the API of the character controller, please refer to <a href="./__APIDOC__/en/class/physics.CharacterController.html">Character Controller</a>, <a href="./__APIDOC__/en/class/physics.BoxCharacterController.html">Box Character Controller</a> and <a href="./__APIDOC__/en/class/physics.CapsuleCharacterController.html">Capsule Character Controller</a>.</p><h2 id="note" tabindex="-1">Note <a class="header-anchor" href="#note" aria-label="Permalink to &quot;Note&quot;">​</a></h2><p>The character controller is not supported on Douyin mini-game wasm. Use the builtin wasm in Cocos Creator to enable this feature.</p>`,57),d=[c];function p(g,k,y,m,f,u){return a(),e("div",null,d)}const E=t(h,[["render",p]]);export{b as __pageData,E as default};
