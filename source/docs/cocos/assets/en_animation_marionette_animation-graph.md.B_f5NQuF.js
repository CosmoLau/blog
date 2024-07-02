import{_ as t}from"./chunks/animation-controller.BGlynBO0.js";import{_ as a,c as n,o as e,a4 as o}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/create-animation-graph.DtcT9SNu.png",r="/docs/cocos/assets/animation-graph-asset.Dv4o4aEH.png",s="/docs/cocos/assets/add-animation-controller.C-6oJdrZ.png",p="/docs/cocos/assets/animation-graph-select.z1p2id4b.png",y=JSON.parse('{"title":"Animation Graph Assets","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/animation-graph.md","filePath":"en/animation/marionette/animation-graph.md","lastUpdated":1712305443000}'),h={name:"en/animation/marionette/animation-graph.md"},c=o('<h1 id="animation-graph-assets" tabindex="-1">Animation Graph Assets <a class="header-anchor" href="#animation-graph-assets" aria-label="Permalink to &quot;Animation Graph Assets&quot;">​</a></h1><p>The animation graph asset is used to store the entire animation flow data of the object. The flow of the animation is described by a state machine, currently an animation graph only supports one state machine.</p><h2 id="creating" tabindex="-1">Creating <a class="header-anchor" href="#creating" aria-label="Permalink to &quot;Creating&quot;">​</a></h2><p>In the <strong>Assets</strong> panel click the <strong>+</strong> button on the top left, then select <strong>Animation Graph</strong>.</p><p><img src="'+i+'" alt="create-animation-graph"></p><p>This creates an animation graph asset named <code>Animation Graph</code> by default.</p><p><img src="'+r+'" alt="animation-graph-asset"></p><h2 id="editing" tabindex="-1">Editing <a class="header-anchor" href="#editing" aria-label="Permalink to &quot;Editing&quot;">​</a></h2><p>Once the animation graph is created, it can be edited it in the Animation Graph panel, please refer to the <a href="./animation-graph-panel">Animation Graph Panel</a> documentation for details.</p><h2 id="applying" tabindex="-1">Applying <a class="header-anchor" href="#applying" aria-label="Permalink to &quot;Applying&quot;">​</a></h2><p>Animation graph assets need to depend on the Animation Controller component to be applied to the object.</p><p>Click <strong>Add Component -&gt; Animation -&gt; Animation Controller</strong> at the bottom of the <strong>Inspector</strong> panel to add the Animation Controller component to the node.</p><p><img src="'+s+'" alt="add-animation-controller"></p><blockquote><p><strong>Note</strong>: since the Marionette animation system and the old animation system cannot be used together, the animation controller component cannot be attached on the same node as the animation component or the skeletal animation component either.</p></blockquote><p>Then click the arrow icon button behind the <strong>Graph</strong> property box of the animation controller component to select the animation graph asset.</p><p><img src="'+p+'" alt="animation-graph-select"></p><p>Or just drag and drop the animation graph asset from the <strong>Assets</strong> panel into the <strong>Graph</strong> property box of the Animation Controller component:</p><p><img src="'+t+'" alt="animation-controller"></p>',18),m=[c];function l(d,g,_,b,f,u){return e(),n("div",null,m)}const C=a(h,[["render",l]]);export{y as __pageData,C as default};