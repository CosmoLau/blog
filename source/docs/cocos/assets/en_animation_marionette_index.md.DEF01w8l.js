import{_ as t,c as e,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/example.B8Q_yIpk.png",y=JSON.parse('{"title":"Marionette Animation System","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/index.md","filePath":"en/animation/marionette/index.md","lastUpdated":1712305443000}'),o={name:"en/animation/marionette/index.md"},s=n('<h1 id="marionette-animation-system" tabindex="-1">Marionette Animation System <a class="header-anchor" href="#marionette-animation-system" aria-label="Permalink to &quot;Marionette Animation System&quot;">​</a></h1><p>Cocos Creator 3.5 introduces a new <strong>Marionette</strong> animation system that controls the skeletal animation of objects via state machines, enabling an automated, and reusable animation process.</p><p>To distinguish from the animation system from prior to v3.4 which is also accessible in the later versions of Cocos Creator, the new animation system will be referred as the <strong>Marionette</strong> system in this documentation while the animation system from prior to v3.4 will be referred as the <strong>legacy</strong> system. In general, the distinctions between the two include:</p><ul><li><p><strong>Legacy</strong>: Powered by the <strong>Animation</strong> component, the legacy system animates objects with animation states containing animation clips (which are keyframe animations created in Cocos Creator) and skeletal animations imported from external sources in the format of <code>.fbx</code>, <code>.gltf</code> and <code>.glb</code>.</p></li><li><p><strong>Marionette</strong>: Powered by the <strong>Animation Controller</strong> component, the Marionette system animate objects with pre-constructed animation graphs, which functions as a controller of multiple animation states that can only contain skeletal animations imported from external sources in the format of <code>.fbx</code>, <code>.gltf</code> and <code>.glb</code>.</p></li></ul><h2 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h2><p>The Marionette system consists of four modules:</p><ul><li><a href="./animation-graph">Animation Graph Assets</a></li><li><a href="./animation-controller">Animation Controller Reference</a></li><li><a href="./animation-graph-panel">Animation Graph Panel</a></li><li><a href="./animation-graph-layer">Animation Graph Layer</a></li><li><a href="./animation-graph-basics">Animation State Machine</a></li><li><a href="./state-transition">State Transition</a></li><li><a href="./animation-mask">Animation Mask</a></li><li><a href="./animation-variant">Animation Graph Variants</a></li><li><a href="./procedural-animation/">Procedural Animation</a></li></ul><h2 id="terminology" tabindex="-1">Terminology <a class="header-anchor" href="#terminology" aria-label="Permalink to &quot;Terminology&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Function</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Animation Graph Assets</td><td style="text-align:left;">Asset that contains the flow chart of animation states, Can be created in the <strong>Assets</strong> panel. For more information, please refer to <a href="./animation-graph">Animation Graph Assets</a>.</td></tr><tr><td style="text-align:left;">Animation Controller Component</td><td style="text-align:left;">References to the Animation Graph Assets and applies it to a node in the scene.</td></tr><tr><td style="text-align:left;">Animation Graph Panel</td><td style="text-align:left;">Animation clips can be imported and stored as animation states, which can be assembled into a flow chart to indicate the transition from one clip to another. This is done in the Animation Graph panel once an Animation Graph asset is created. For more information, please see <a href="./animation-graph-panel">Animation Graph Panel</a>.</td></tr><tr><td style="text-align:left;">State</td><td style="text-align:left;">A state is an action that is usually portrayed by an animation clip, such as standby, walk, move, attack, etc. This should be distinguished from an <a href="./../animation-state">animation state</a> as used in the legacy system.</td></tr><tr><td style="text-align:left;">State Transition</td><td style="text-align:left;">An animated actor is likely to perform multiple actions, each portrayed by an animation clip and registered as an animation state. A <a href="./state-transition">state transition</a> contains the logical check for switching between different states. For instance, to create the death animation of a walking character, a state transition is needed to switch the walk state to the death state.</td></tr><tr><td style="text-align:left;">Animated State Machine</td><td style="text-align:left;">Collectively, all the animation states and the transitions between them can be constructed in a flow chart, which is known as an <a href="./animation-graph-basics">Animation State Machine</a>.</td></tr></tbody></table><p>A state machine as displayed in the Animation Graph panel is demonstrated in the screenshot below. In it, each blue rectangle represents a state, while the arrows between them the transitions between different states.</p><p><img src="'+i+'" alt="example"></p><h2 id="example-project" tabindex="-1">Example Project <a class="header-anchor" href="#example-project" aria-label="Permalink to &quot;Example Project&quot;">​</a></h2><p>Creator provides the <a href="https://github.com/cocos-creator/example-marionette" target="_blank" rel="noreferrer">Ms.Amoy</a> demo project, which demonstrates the use of the Marionette animation system, can be downloaded and used as needed.</p>',13),r=[s];function l(m,h,c,d,p,f){return a(),e("div",null,r)}const b=t(o,[["render",l]]);export{y as __pageData,b as default};