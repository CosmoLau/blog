import{_ as e}from"./chunks/edit.BLtLVl0o.js";import{_ as t,c as a,o as n,a4 as o}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/add-layer.B3lxZWIR.png",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAACESURBVEiJ7ZTBCcAgDEWT4hzm7E5/E8+O4mDZpIeCtJTaCBW0+G/G7zvkx3AIgfpo68Rd6IX+Eg0AgN3v7FYRsZtplIYMhObKegLgvS/Ho9eqWiqqmnN+ev4SIzNXKvfbi9O+VGOMRJRSMvrnjLEjuuE3nmfDooYYWzVnrxf6F2g35VzvJ1IT2SUnOxYAAAAASUVORK5CYII=",s="/docs/cocos/assets/remove-layer.olWNsBj7.png",l="/docs/cocos/assets/rename-layer.DpewLDe6.png",h="/docs/cocos/assets/layer-inspector.zZlAvh7C.png",p="/docs/cocos/assets/select.BX9TpTSt.png",m="/docs/cocos/assets/create-empty.BQOOVMCc.png",c="/docs/cocos/assets/empty-state.BMryjAfe.png",d="/docs/cocos/assets/transit-empty-state.DWCwFQ7-.png",T=JSON.parse('{"title":"Animation Graph Layer","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/animation-graph-layer.md","filePath":"en/animation/marionette/animation-graph-layer.md","lastUpdated":1712305443000}'),y={name:"en/animation/marionette/animation-graph-layer.md"},g=o('<h1 id="animation-graph-layer" tabindex="-1">Animation Graph Layer <a class="header-anchor" href="#animation-graph-layer" aria-label="Permalink to &quot;Animation Graph Layer&quot;">​</a></h1><p>The animation graph can have multiple layers, with layers running simultaneously between them, and the animation effects played on them can be mixed according to the configuration of the layers.</p><h2 id="create-layers" tabindex="-1">Create layers <a class="header-anchor" href="#create-layers" aria-label="Permalink to &quot;Create layers&quot;">​</a></h2><p><img src="'+r+'" alt="add-layer"></p><p>Click the <strong>Layers</strong> button in the animation graph, click the <img src="'+i+'" alt="add layer"> button, and enter the name of the layer in the popup input box to create the layer.</p><h2 id="delete-layers" tabindex="-1">Delete Layers <a class="header-anchor" href="#delete-layers" aria-label="Permalink to &quot;Delete Layers&quot;">​</a></h2><p>After hovering over the layers, you can click <strong>×</strong> on the right side of the layers to delete them, this operation only takes effect when there are multiple layers.</p><p><img src="'+s+'" alt="remove"></p><h2 id="rename-the-layers" tabindex="-1">Rename the layers <a class="header-anchor" href="#rename-the-layers" aria-label="Permalink to &quot;Rename the layers&quot;">​</a></h2><p>Rename a layer by double-clicking the left mouse button at the layer name.</p><p><img src="'+l+'" alt="rename"></p><h2 id="layer-properties" tabindex="-1">Layer Properties <a class="header-anchor" href="#layer-properties" aria-label="Permalink to &quot;Layer Properties&quot;">​</a></h2><p>After selecting any layer in the animation graph, you can view the layer properties in the <strong>Inspector</strong> panel.</p><p><img src="'+h+'" alt="inspector"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Mask</strong></td><td style="text-align:left;">The animation mask to specify the corresponding <a href="./animation-mask">Animation Mask</a></td></tr><tr><td style="text-align:left;"><strong>Weight</strong></td><td style="text-align:left;">The weight of the layer to be used when mixing with <strong>previous layers</strong>, in the range [0, 1]</td></tr></tbody></table><h3 id="animation-masks" tabindex="-1">Animation Masks <a class="header-anchor" href="#animation-masks" aria-label="Permalink to &quot;Animation Masks&quot;">​</a></h3><p>A mask can be assigned to a layer by dragging an animation mask from the <strong>Assets</strong> panel to the <strong>Mask</strong> property of the Animation Graph window or by checking the <strong>Mask</strong> property in the layer.</p><p>Refer to the following figure and follow steps 1, 2 and 3.</p><ul><li>Select any layer</li><li>Click on the drop-down menu in the <strong>Inspector</strong> panel.</li><li>Select a pre-created <strong>Mask</strong> resource or drag it from the <strong>Assets</strong> panel.</li></ul><p><img src="'+p+'" alt="select"></p><p>When specified, all animation effects on that layer are affected by that mask.</p><p>For example, you can specify an animation mask to a layer that keeps only the upper body skeleton, with all lower body skeletons disabled, and the animation effect on that layer will only work on the upper body.</p><h3 id="layer-weights" tabindex="-1">Layer weights <a class="header-anchor" href="#layer-weights" aria-label="Permalink to &quot;Layer weights&quot;">​</a></h3><p>The animation effect of each layer will be blended with the animation effect of the previous layer in a certain proportion, the proportion of the blending is specified by the weight property of the layer.</p><p>0 means that the animation of the previous level is used completely, 1 means that the level completely overwrites the animation of the previous layer, when it is at [0,1] then the blending is done properly.</p><p>Blending of layers will only blend those bones that are not disabled by the animation mask. For example, if Layer 1 has a skeleton enabled, but a subsequent Layer 2 has disabled it with an animation mask, then The skeleton will only play the animation of Layer 1 in full, regardless of the weight specified for Layer 2.</p><p>You can also dynamically modify the layer weights in code via <code>AnimationController.prototype.setLayerWeight</code>.</p><h2 id="grid-layout-area-manipulation" tabindex="-1">Grid layout area manipulation <a class="header-anchor" href="#grid-layout-area-manipulation" aria-label="Permalink to &quot;Grid layout area manipulation&quot;">​</a></h2><p>Right-clicking on a blank space within the grid opens the layer menu.</p><p><img src="'+e+'" alt="Edit"></p><p>You can add <strong>states, sub-state machines, blends and empty states</strong> to the menu.</p><ul><li><p>See <a href="./animation-graph-basics">Animation State Machine</a> for how to use <strong>sub-states, sub-state machines</strong> and <strong>blends</strong>.</p></li><li><p><strong>Add Empty State</strong>: This menu creates a default empty state named Empty on the hierarchy, please refer to the <strong>Empty State</strong> section below for more information.</p><p><img src="'+m+'" alt="create empty"></p></li><li><p><strong>Return to center view</strong>: This menu returns the view of the layer to the center of the layer.</p></li><li><p>Hold down the right or middle mouse button to move the layer grid; use the scroll wheel to zoom in and out of the layer.</p></li></ul><h2 id="empty-state" tabindex="-1">Empty state <a class="header-anchor" href="#empty-state" aria-label="Permalink to &quot;Empty state&quot;">​</a></h2><p>In many cases, a requirement is to enable a layer only in certain situations; in all other cases make this layer inactive.</p><p>For this requirement, <strong>Empty State</strong> can be used. The <strong>Empty State</strong> can be considered as an animation whose animation effect is the animation effect of the previous level.</p><p>The transition from the <strong>Empty State</strong> state is equivalent to the gradual transition from the animation effect of the previous level to the target animation. Transition conditions and transition period can be specified on this transition. However, the transition period can only be specified as an absolute duration (in seconds).</p><p><img src="'+c+'" alt="layer"></p><p>The transition leading to the <strong>Empty</strong> state is equivalent to the source animation&#39;s animation decaying until the transition is complete, which is equivalent to the current level being disabled.</p><p>As in the example below, when <strong>Empty</strong> transitions to the <strong>RunShoot</strong> state only after the trigger <strong>Trigger</strong> is triggered, and in the <strong>Empty</strong> state, the layer does not affect the animation effects of the preceding layers.</p><p><img src="'+d+'" alt="duration"></p>',40),f=[g];function u(b,A,_,w,k,v){return n(),a("div",null,f)}const E=t(y,[["render",u]]);export{T as __pageData,E as default};
