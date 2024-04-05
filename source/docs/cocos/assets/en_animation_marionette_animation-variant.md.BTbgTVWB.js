import{_ as t,c as a,o as e,a4 as n}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/create-asset.Sptv1xC0.png",r="/docs/cocos/assets/variant-asset.DjAxmuJg.png",s="/docs/cocos/assets/empty-varint.BEHA3tiQ.png",o="/docs/cocos/assets/select.CE48b8LE.png",c="/docs/cocos/assets/overrides.CoTR1a4P.png",l="/docs/cocos/assets/controller.1jSiWnyv.png",y=JSON.parse('{"title":"Animation Graph Variants","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/marionette/animation-variant.md","filePath":"en/animation/marionette/animation-variant.md","lastUpdated":1712305443000}'),p={name:"en/animation/marionette/animation-variant.md"},d=n('<h1 id="animation-graph-variants" tabindex="-1">Animation Graph Variants <a class="header-anchor" href="#animation-graph-variants" aria-label="Permalink to &quot;Animation Graph Variants&quot;">​</a></h1><p>If two animation graphs have the same animation logic but different corresponding animation clips, re-creating an animation graph will create an additional maintenance burden. By using animation variants, this problem can be better solved.</p><p>An animated graph variant is an asset that is created by clicking <strong>Animation Graph Variant</strong> within <strong>Assets Manager</strong>.</p><p><img src="'+i+'" alt="create"></p><p>The created variant is shown in the following figure.</p><p><img src="'+r+'" alt="default"></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p><img src="'+s+'" alt="default"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Animation Graph</strong></td><td style="text-align:left;">Animated graph that require variants, selected by drop-down or from within <strong>Assets Manager</strong> <br> <img src="'+o+'" alt="select"></td></tr><tr><td style="text-align:left;"><strong>Clip Overrides</strong></td><td style="text-align:left;">Animation clips that need to be covered <br> <img src="'+c+'" alt="override"> <br> With the Overrides column on the right, select the animation clips to be replaced from the <strong>Assets Manager</strong></td></tr></tbody></table><h2 id="use-of-variants" tabindex="-1">Use of variants <a class="header-anchor" href="#use-of-variants" aria-label="Permalink to &quot;Use of variants&quot;">​</a></h2><p>The different variants can be selected by pulling down the <strong>Animation Graph</strong> property of the Animation Controller component.</p><p><img src="'+l+'" alt="controller"></p>',12),m=[d];function h(g,_,f,v,b,u){return e(),a("div",null,m)}const x=t(p,[["render",h]]);export{y as __pageData,x as default};
