import{_ as t,c as e,o as n,a4 as o}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/animation-component.Bg5KZJqf.png",u=JSON.parse('{"title":"Animation Component Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/animation-comp.md","filePath":"en/animation/animation-comp.md","lastUpdated":1712305443000}'),a={name:"en/animation/animation-comp.md"},r=o('<h1 id="animation-component-reference" tabindex="-1">Animation Component Reference <a class="header-anchor" href="#animation-component-reference" aria-label="Permalink to &quot;Animation Component Reference&quot;">​</a></h1><p>The Animation component can drive node and component properties on their nodes and children in an animated manner, including properties in user-defined scripts.</p><p><img src="'+i+'" alt="animation component"></p><p>There are several ways to add Animation components:</p><ol><li>Add an Animation component in the <strong>Animation</strong> panel, review the <a href="./animation-create">Creating Animation Components and Animation Clips</a> documentation for details.</li><li>Select the node to be animated in the <strong>Hierarchy</strong> panel, and then select <strong>Add Component -&gt; Animation -&gt; Animation</strong> in the <strong>Inspector</strong> panel to add an Animation component to the node.</li><li>Added via script, review the <a href="./animation-component">Controlling Animation with Scripts</a> documentation for details.</li></ol><h2 id="animation-component-properties" tabindex="-1">Animation Component Properties <a class="header-anchor" href="#animation-component-properties" aria-label="Permalink to &quot;Animation Component Properties&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Clips</td><td style="text-align:left;">The added animation clip asset, default is empty, support adding multiple. The AnimationClip added here can be edited directly in the <strong>Animation</strong> panel.</td></tr><tr><td style="text-align:left;">DefaultClip</td><td style="text-align:left;">The default animation clip. If this option is attached with the <strong>PlayOnLoad</strong> property checked, then the animation will automatically play the content of the Default Clip when it is loaded.</td></tr><tr><td style="text-align:left;">PlayOnLoad</td><td style="text-align:left;">Boolean type. If this option is checked, the content of the Default Clip will be played automatically after the animation is loaded.</td></tr></tbody></table><h2 id="detailed-description" tabindex="-1">Detailed Description <a class="header-anchor" href="#detailed-description" aria-label="Permalink to &quot;Detailed Description&quot;">​</a></h2><p>If an animation needs to contain multiple nodes, usually one creates a new node as the <strong>root node</strong> of the animation, and then the Animation component will be attached to the root node. All the other children nodes under this root node will be automatically entered into this animation clip and displayed in the <strong>Node List</strong> area of the <strong>Animation</strong> panel. For details, please refer to the <a href="./animation-editor#2-node-list">Get Familiar with the Animation Panel - Node list</a> documentation.</p><p>The Animation component also provides some common animation control functions. To control animations using scripts, please refer to the <a href="./animation-component">Controlling Animation with Scripts</a> documentation.</p>',10),l=[r];function d(s,m,p,c,h,f){return n(),e("div",null,l)}const A=t(a,[["render",d]]);export{u as __pageData,A as default};
