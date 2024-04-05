import{_ as t}from"./chunks/animation-graph-panel.BWy8hI3d.js";import{_ as e,c as a,o as n,a4 as i}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/edit.DBAwtcT3.png",o="/docs/cocos/assets/state-property.BAH5TIeM.png",r="/docs/cocos/assets/speed-multiplier.DvRAEiqP.png",l="/docs/cocos/assets/add-motion.BfWq839w.png",h="/docs/cocos/assets/change-state.BguSjv6z.png",p="/docs/cocos/assets/blend-edit.DghS3CxV.png",d="/docs/cocos/assets/create-blend.Dp8MBESX.gif",c="/docs/cocos/assets/add-motion-of-blend1D.BsfpDmmU.png",g="/docs/cocos/assets/choose-clip.AXmJVG8V.png",m="/docs/cocos/assets/blend1-speed.x1qkvjwC.png",k="/docs/cocos/assets/blend2.CaoiEdJv.png",u="/docs/cocos/assets/set-sub-state.J8-JuJ0X.png",b="/docs/cocos/assets/edit-sub-state.BfTez1TQ.png",y="/docs/cocos/assets/create-graph-script.CHRWVTB0.png",f="/docs/cocos/assets/animation-graph-component.DymxG4pX.png",E="/docs/cocos/assets/add-graph-script.CXDFRYpS.png",q=JSON.parse('{"title":"Animation State Machine","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/animation-graph-basics.md","filePath":"en/animation/marionette/animation-graph-basics.md","lastUpdated":1712305443000}'),w={name:"en/animation/marionette/animation-graph-basics.md"},A=i('<h1 id="animation-state-machine" tabindex="-1">Animation State Machine <a class="header-anchor" href="#animation-state-machine" aria-label="Permalink to &quot;Animation State Machine&quot;">​</a></h1><p>A state refers to an action performed by an animated actor in the form of animations being triggered and played, such as being idle, moving, running, attacking, etc.</p><p>An actor may have multiple states and switches between them as different actions are performed. The act of switching from one state to another is called a <a href="./state-transition">transition</a>. The condition that predetermines the transition is called a <strong>transition condition</strong>.</p><p>A state machines manages all the states and transitions of an actor. Typically, the logical connections of states and transitions are depicted as a flow chart, which is editable in the <a href="./animation-graph-panel">Animation Graph panel</a>. Currently, one animation graph corresponds to one state machine. When the state machine is at a certain state, animation corresponding that state will be played. Depending on the intricacy of the animation graph, the actor can perform a myriad of complex actions by switching between simple skeletal animations.</p><h2 id="state-basics" tabindex="-1">State Basics <a class="header-anchor" href="#state-basics" aria-label="Permalink to &quot;State Basics&quot;">​</a></h2><p>Besides states that contains animations, users can also create 4 special states in the animation graph including <strong>Entry</strong>, <strong>Exit</strong>, <strong>Any</strong> and <strong>Sub State Machine</strong>. As these states do not contain any animation, they will be referred as <strong>pseudo states</strong> from this point on.</p><p>A <a href="#sub-state-machine">sub state machine</a> serves as a container for a state machine nested within another state machine, primarily used to break down complex state machine designs into controllable chunks. By convention, the state machine with the highest hierarchy is referred as the <strong>Top Level State Machine</strong>. It is comparable to the root node in the scene.</p><p><strong>Entry</strong>, <strong>Exit</strong> and <strong>Any</strong> are mandatory pseudo states that cannot be deleted from the graph. They are accessible in the Animation Graph panel by default. Please take note that the <strong>Exit</strong> state is only available in a <strong>sub state machine</strong>.</p><p><img src="'+t+'" alt="animation-graph-panel"></p><ul><li><p><strong>Entry</strong>: Represents the entry point of the current state machine. It can only be used as the beginning state of a transition and never the end state.</p></li><li><p><strong>Exit</strong>: Represents the end point of the current state machine. When the state machine reaches the end point, it is considered completed and will shut down. <strong>Exit</strong> can only be used as the end state of a transition and never the beginning state.</p><p>As the current sub state machine is completed, it will be shut down and transitioned to the next nearest state in its parent state machine. The actor will cease all animation if the top level state machine is shut down, which defeats the purpose of having the animation system in the first place. For this reason, <strong>Exit</strong> is only available in sub state machines.</p><p>To manually cease all animation for the actor, users may disable the <strong>Animation Controller</strong> component of the actor.</p></li><li><p><strong>Any</strong>: Represents any state in the graph that is not a pseudo state. It can only be used as the beginning state of a transition and never the end state.</p><p>A transition beginning from <strong>Any</strong> is equivalent to a transition from all available states currently in the graph. In other words, no matter which state it is currently at, it will be transitioned to the end state as long as the transition conditions are met. For instance, a character can switch to the wounding animation from any other animation, be it walking, running, jumping, etc.</p><blockquote><p><strong>Note</strong>: <strong>Any</strong> also includes any state from the sub state machines of the current state machine. Transitions from the sub state machines will be triggered if the transition conditions are met.</p></blockquote></li></ul><h2 id="creating-states" tabindex="-1">Creating states <a class="header-anchor" href="#creating-states" aria-label="Permalink to &quot;Creating states&quot;">​</a></h2><p>A state machine is the collection of all states, pseudo states and the transitions that connect them together under specific conditions.</p><p>Right click on the grid in the <a href="./animation-graph-panel">Animation Graph panel</a> and select one of the following to add to the graph:</p><ul><li><strong>Add State – Animation Clip</strong>: Add an animation clip asset as a state, named <code>Clip Motion</code> by default.</li><li><strong>Add State – Blend 1D / 2D</strong>: Add a new animation by blending multiple animations as a new state with a default name of <code>Blend 1D</code> / <code>Blend 2D</code>. Please see below in section <strong>Animation Blending</strong> for more details.</li><li><strong>Add Sub State Machine</strong>: Add a new sub state machine named <code>State Machine</code> by default, Please see below in section <strong>Sub State Machine</strong> for more details.</li></ul><p>All states except sub state machines are represented as blue rectangles in the graph.</p><p><img src="'+s+'" alt="Edit"></p><h3 id="setting-state-properties" tabindex="-1">Setting state properties <a class="header-anchor" href="#setting-state-properties" aria-label="Permalink to &quot;Setting state properties&quot;">​</a></h3><p>Select a state in the graph and the blue rectangle will be highlighted with yellow edges. Properties of the selected state will also be available in the <strong>Inspector</strong> panel to the left of the Animation Graph panel.</p><p><img src="'+o+'" alt="state-property"></p><ul><li><p>Name of the selected state is displayed on the top of the <strong>Inspector</strong> panel. Clicking the gear icon will yield options for the selected state to be renamed, deleted, or replaced by a state of a different type.</p></li><li><p><strong>Speed</strong>: Playback speed for the animation attached to the selected state with a default value of 1. Lower value will result in slower animation.</p></li><li><p><strong>Speed Multiplier</strong>: When enabled, a multiplication factor can be specified for the speed. The speed multiplier factor will base speed multiplication to control the speed of the animation state.</p><p><img src="'+r+'" alt="speed-multiplier"></p></li><li><p><strong>Animation Clip Motion</strong>: Specify the animation clip attached to the selected state. Users can drag and drop the animation clip asset from the Assets panel to the <strong>Clip</strong> property or select from its drop-down menu. Once specified, the animation clip will be attached to the selected state, and the selected state will be automatically renamed according to the attached animation clip.</p><blockquote><p><strong>Note</strong>: If the animation clip is left unspecified, it could cause errors to the state machine.</p></blockquote><p><img src="'+l+'" alt="add-motion"></p></li><li><p><strong>State Component</strong>: Attach an animation graph script to the selected state. Users may call from the StateMachineComponent to insert events at certain junctions of the flow chart. For more information, please see below in section <strong>Animation State Component</strong> for more details.</p></li><li><p>Clicking the gear icon will yield options for the selected state to be renamed, deleted, or replaced by a state of a different type. Right click on the state note in the graph will also yield the same options.</p><p><img src="'+h+'" alt="change-state"></p></li></ul><h2 id="animation-blending" tabindex="-1">Animation Blending <a class="header-anchor" href="#animation-blending" aria-label="Permalink to &quot;Animation Blending&quot;">​</a></h2><p>Blend Motion creates new animations by blending existing ones with pre-determined parameters, commonly used to create mixed animations such as jumping while running. To achieve optimal results, it is not advisable to blend animations that are excessively different from one another. Based on the parameters used, Blend Motion can be categorized as follows:</p><ul><li><p><strong>Blend 1D</strong>: Use <strong>one parameter</strong> to <strong>linearly interpolate</strong> between multiple animations.</p></li><li><p><strong>Blend 2D</strong>: Use <strong>two parameters</strong> to <strong>barycentrically interpolate</strong> between multiple animations.</p></li></ul><p>Blend Motion should be distinguished from <a href="./state-transition">State Transitions</a> as:</p><ul><li><p>Transitions create a brief intersection period for one animation to morph into a second animation.</p></li><li><p>Blend Motion combines multiple animations with varying parameters, yielding one combined animation.</p></li></ul><h3 id="adding-animation-blending" tabindex="-1">Adding animation blending <a class="header-anchor" href="#adding-animation-blending" aria-label="Permalink to &quot;Adding animation blending&quot;">​</a></h3><p>Right click on the grid in the Animation Graph panel and select <strong>Add State – Blend 1D</strong> or <strong>Add State – Blend 2D</strong> to create new states. Their respective properties can be accessed in the <strong>Inspector</strong> panel on the left.</p><p><img src="'+p+'" alt="blend edit"></p><p>Users can access the parameters for blending in either of the following ways:</p><ul><li>Select the Blend Motion state and click the <strong>Edit</strong> button in the Inspector panel</li><li>Double click on the Blend Motion state node as seen in the animation graph</li><li>Right click on the Blend Motion state node and select <strong>Edit</strong></li></ul><p>To exit the Blend Motion state, users may:</p><ul><li>Right click on the grid and select <strong>Return to Parent</strong></li><li>Select a higher hierarchy in the <strong>Position</strong> bar on top of the grid window</li></ul><p><img src="'+d+'" alt="create blend"></p><h3 id="_1d-animation-blending" tabindex="-1">1D Animation Blending <a class="header-anchor" href="#_1d-animation-blending" aria-label="Permalink to &quot;1D Animation Blending&quot;">​</a></h3><p>Blend 1D <strong>linearly interpolates</strong> multiple animation with <strong>one parameter</strong>, with each target animation assigned with a threshold value.</p><ul><li>When the parameter’s value equates to the threshold value of a target animation, said animation will be the output of the Blend 1D state.</li><li>When the parameter’s value is between the threshold value of 2 target animations, Blend 1D will output the linear interpolation between the two. The formula is <code>A * (1 - t) + B * t</code> where A and B are the threshold value of target animations, and t the percentage value of the parameter value in proportion to the range between the two thresholds.</li></ul><p>Double click on the Blend Motion state node to enter its sub graph. In it, users may import animation clips by creating a new Clip Motion state, or create additional Blend Motion states.</p><p><img src="'+c+'" alt="add-motion-of-blend"></p><ul><li><p><strong>Parameter</strong>: Select the parameter to be used to blend between states. A parameter needs to be created under the <strong>Variables</strong> tab first. Blend Motion states require a float type parameter as the input variable. Users may also select from pre-existing variables to be used as the parameter at the Blend Motion state nodes in the graph. For more information, please see <a href="./animation-graph-panel">Animation Graph Panel - Variables</a> for details.</p></li><li><p><strong>Threshold</strong>: With every animation clip imported, a new corresponding threshold variable will be added. Users may manually define the value, or enable <strong>Automata Threshold</strong> to allow Cocos Creator to assign threshold values automatically. Threshold variables will be listed in an ascending order.</p></li><li><p>Animation clips can be assigned from the drop-down menu from the state nodes in the graph, or from the <strong>Inspector</strong> panel while a Clip Motion state node is selected.</p><p><img src="'+g+'" alt="choose clip"></p><p>To remove an animation, select the Clip Motion state, go to the Inspector panel and click the gear icon, then select <strong>Remove this Motion</strong>.</p></li></ul><p>As an example, a state machine that plays different animations when the character is at different movement speeds should look like the screenshot below:</p><p><img src="'+m+'" alt="blend-speed"></p><h3 id="_2d-animation-blending" tabindex="-1">2D Animation Blending <a class="header-anchor" href="#_2d-animation-blending" aria-label="Permalink to &quot;2D Animation Blending&quot;">​</a></h3><p>Blend 2D <strong>barycentrically interpolates</strong> multiple animation with <strong>two parameters</strong>, with each target animation assigned with a threshold value.</p><p>Users may set up a Blend 2D state in the same way as setting up a Blend 1D state, with a few exceptions:</p><ul><li>Blend 2D requires 2 parameters (X, Y) to blend animations.</li><li>Clip Motion states have threshold value in 2 dimensions (<code>[x, y]</code>). Threshold variables are listed by the order of their creation. There is no option for <strong>Automata Threshold</strong>.</li><li>Parameter X corresponds to the x dimension of threshold variables while parameter Y the y dimension.</li></ul><p>Blend 2D is commonly used to create state machine for character motions, such as:</p><p><img src="'+k+'" alt="animation-blend 2D"></p><p>In the example above, the range for parameter X is <code>[-1, 1]</code>, and the range for parameter Y is <code>[-1. 1]</code>.</p><h2 id="sub-state-machine" tabindex="-1">Sub State Machine <a class="header-anchor" href="#sub-state-machine" aria-label="Permalink to &quot;Sub State Machine&quot;">​</a></h2><p>Users can create sub state machines to be used recursively anywhere in the animation graph. By convention, the state machine with the highest hierarchy is referred as the <strong>Top Level State Machine</strong>. It is comparable to the root node in the scene.</p><p>Right click on the grid and select <strong>Add Sub State Machine</strong> to create a new sub state machine with the default name of <code>State Machine</code>.</p><p><img src="'+u+'" alt="set sub state"></p><ul><li><p>Button ① is for entering the sub graph of the sub state machine to edit its content. It can also be done by double clicking the sub state machine node in the graph or right click on the node and select <strong>Edit</strong>.</p></li><li><p>Button 2 is for adding state components. Please see below in section <strong>Animation State Components</strong> for more details.</p></li><li><p>Click the gear icon to rename, remove, or add state components for the selected sub state machine.</p></li></ul><h3 id="editing-sub-state-machine" tabindex="-1">Editing Sub State Machine <a class="header-anchor" href="#editing-sub-state-machine" aria-label="Permalink to &quot;Editing Sub State Machine&quot;">​</a></h3><p>The sub graph of a sub state machine is identical to a typical graph except for the <strong>Exit</strong> pseudo state. As the current sub state machine is completed, it will be shut down and transitioned to the next nearest state in its parent state machine.</p><p><img src="'+b+'" alt="edit sub state"></p><p>To exit the Blend Motion state, users may right click on the grid and select <strong>Return to Parent</strong> or select a higher hierarchy in the <strong>Position</strong> bar on top of the grid window.</p><h2 id="animation-state-component" tabindex="-1">Animation State Component <a class="header-anchor" href="#animation-state-component" aria-label="Permalink to &quot;Animation State Component&quot;">​</a></h2><p>States and sub state machines can be attached with state components, which can be created in the <strong>Assets</strong> panel by clicking the + button on the top and select <strong>Animation Graph Script</strong>.</p><p><img src="'+y+'" alt="create-graph-script"></p><p>A new Animation Graph Script component will be named <code>AnimationGraphComponent</code> by default which is a .ts script.</p><p><img src="'+f+'" alt="animation-graph-component"></p><p>The Animation Graph Script can be attached to a state node in the animation graph by clicking the Add State Component button in the Inspector panel, or click the gear icon on the top and select Add State Component. A state node can be attached with multiple State Components.</p><p>Click the gear icon on the right of the added state component and select Remove State Component to remove it.</p><p>Animation Graph Script assets can call from the <code>animation.StateMachineComponent</code> class which includes methods that registers events of the state machine, which includes:</p><table><thead><tr><th style="text-align:left;">Method Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onMotionStateEnter</code></td><td style="text-align:left;">Triggered when entering a state</td></tr><tr><td style="text-align:left;"><code>onMotionStateExit</code></td><td style="text-align:left;">Triggered when exiting a state</td></tr><tr><td style="text-align:left;"><code>onMotionStateUpdate</code></td><td style="text-align:left;">Triggered when a state is updated</td></tr><tr><td style="text-align:left;"><code>onStateMachineEnter</code></td><td style="text-align:left;">Triggered when entering a sub state machine</td></tr><tr><td style="text-align:left;"><code>onStateMachineExit</code></td><td style="text-align:left;">Triggered when exiting a sub state machine</td></tr></tbody></table><p>Methods listed above can also use the following parameters:</p><ul><li><p><code>controller: animation.AnimationController</code>: The Animation Controller component which the state machine is attached to. This parameter is appliable to all the methods above.</p></li><li><p><code>motionStateStatus: animation.MotionStateStatus</code>: Status of the current state. This parameter is only applicable to methods intended for states (<code>onMotionStateEnter</code>, <code>onMotionStateExit</code>.)</p></li></ul><p><img src="'+E+`" alt="add-graph-script"></p><h3 id="example-enable-particles-when-entering-a-state" tabindex="-1">Example: Enable particles when entering a state <a class="header-anchor" href="#example-enable-particles-when-entering-a-state" aria-label="Permalink to &quot;Example: Enable particles when entering a state&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, animation, PhysicsSystem, ParticleSystem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AnimationGraphComponent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AnimationGraphComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">StateMachineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Called when a motion state right after it entered.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> controller</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> The animation controller it within.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stateStatus</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> The status of the motion.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onMotionStateEnter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AnimationController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">stateStatus</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MotionStateStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Enable all particles attached to the node where the animation controller is also located</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> particleSystem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> controller.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ParticleSystem)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            particleSystem.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,71),S=[A];function B(C,v,_,D,x,F){return n(),a("div",null,S)}const P=e(w,[["render",B]]);export{q as __pageData,P as default};
