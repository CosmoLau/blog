import{_ as t,c as e,o as r,a4 as o}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/shape-module.Bo81hOk1.png",i="/docs/cocos/assets/box_emitter_property.CMTOKo8H.png",n="/docs/cocos/assets/box_emitter.BawKRfjX.png",a="/docs/cocos/assets/box-gizmo.BlXmRmhQ.gif",l="/docs/cocos/assets/circle_emitter_property.CMp86irk.png",h="/docs/cocos/assets/circle_emitter.Dgy4rseZ.png",c="/docs/cocos/assets/circle-gizmo.DPyZ6ZRk.gif",g="/docs/cocos/assets/cone_emitter.C44fZv02.png",d="/docs/cocos/assets/cone_emitter_property.DfdCI3AG.png",p="/docs/cocos/assets/sphere-emitter-property.B4b-zag2.png",m="/docs/cocos/assets/sphere-emitter.DS_EEDyX.png",f="/docs/cocos/assets/hemisphere-emitter.DtPLY_2H.png",k=JSON.parse('{"title":"ShapeModule","description":"","frontmatter":{},"headers":[],"relativePath":"en/particle-system/emitter.md","filePath":"en/particle-system/emitter.md","lastUpdated":1712305443000}'),y={name:"en/particle-system/emitter.md"},b=o('<h1 id="shapemodule" tabindex="-1">ShapeModule <a class="header-anchor" href="#shapemodule" aria-label="Permalink to &quot;ShapeModule&quot;">​</a></h1><p>The shape module is mainly used to set the particle emitter shape, particle emission direction and velocity.</p><p><img src="'+s+'" alt="shape-module"></p><h2 id="public-properties" tabindex="-1">Public properties <a class="header-anchor" href="#public-properties" aria-label="Permalink to &quot;Public properties&quot;">​</a></h2><p>There are a number of properties that are common to all types of emitters, including:</p><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Features</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>ShapeType</strong></td><td style="text-align:left;">Emitter shapes. The types <strong>Box</strong>, <strong>Circle</strong>, <strong>Cone</strong>, <strong>Sphere</strong>, <strong>Hemisphere</strong> are currently supported.</td></tr><tr><td style="text-align:left;"><strong>Position</strong></td><td style="text-align:left;">The position of the emitter relative to the node where it is located</td></tr><tr><td style="text-align:left;"><strong>Rotation</strong></td><td style="text-align:left;">Rotation of the emitter relative to its node, which can be used to adjust the particle emission direction</td></tr><tr><td style="text-align:left;"><strong>Scale</strong></td><td style="text-align:left;">Scaling of the emitter relative to the node it is on can be used to adjust the size of the emitter shape, i.e. the particle emission range</td></tr><tr><td style="text-align:left;"><strong>AlignToDirection</strong></td><td style="text-align:left;">The direction of particle movement is determined by the initial direction of particle emission, which can be used to simulate an effect similar to water spilling out of a bucket</td></tr><tr><td style="text-align:left;"><strong>RandomDirectionAmount</strong></td><td style="text-align:left;">Particle generation direction random mix setting. <br>No effect when set to 0; <br>Random direction when set to 1</td></tr><tr><td style="text-align:left;"><strong>SphericalDirectionAmount</strong></td><td style="text-align:left;">Indicates the interpolation between the current emission direction and the direction of the line from the current position to the center of the node.<br>When this value is set to 1, particles are emitted from the center to the outside (the same behavior as when <strong>ShapeType</strong> is set to <strong>Sphere</strong>)</td></tr><tr><td style="text-align:left;"><strong>RandomPositionAmount</strong></td><td style="text-align:left;">The particle generation position is set randomly, when this value is set <strong>not 0</strong>, the particle generation position will be out of the size range of the generator</td></tr></tbody></table><h2 id="box" tabindex="-1">Box <a class="header-anchor" href="#box" aria-label="Permalink to &quot;Box&quot;">​</a></h2><p>When the <strong>ShapeType</strong> property is set to <strong>Box</strong>, it is a box emitter.</p><p><img src="'+i+'" alt="box_emitter_property"></p><p>The special property items if box emitter are described as follows.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">The part of the box from which the emitter emits particles, including: <br><strong>Volume</strong>: Emitted from inside the box<br><strong>Shell</strong>: Emitted from the box surface<br><strong>Edge</strong>: Emitted from the box edge</td></tr><tr><td style="text-align:left;"><strong>BoxThickness</strong></td><td style="text-align:left;">The thickness of the box in each emitting direction, effective only when <strong>EmitFrom</strong> is selected for <strong>Shell</strong> mode</td></tr></tbody></table><p>Also in the <strong>Scene Editor</strong> there will be a box Gizmo that shows the shape size of the box emitter.</p><p><img src="'+n+'" alt="box_emitter"></p><p>The <strong>Scale</strong> property of the box emitter can be adjusted by dragging the box Gizmo&#39;s square control point directly:</p><p><img src="'+a+'" alt="box_gizmo"></p><h2 id="circle" tabindex="-1">Circle <a class="header-anchor" href="#circle" aria-label="Permalink to &quot;Circle&quot;">​</a></h2><p>When the <strong>ShapeType</strong> property is set to <strong>Circle</strong>, it is a circle emitter.</p><p><img src="'+l+'" alt="circle_emitter_property"></p><p>The special property items are described as follows:</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">Set the radius of the circle emitter</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">The position of the round emitter emitting particles.<br>When set to <strong>0</strong>, it means firing from the circumference of the circle<br>When set to <strong>1</strong>, it means firing from the center of the circle<br>When set to between <strong>0~1</strong>, it means firing from the center of the circle to the circumference of the circle, within a certain proportional range</td></tr><tr><td style="text-align:left;"><strong>Arc</strong></td><td style="text-align:left;">Set the fan area where the circle emitter emits particles</td></tr><tr><td style="text-align:left;"><strong>ArcMode</strong></td><td style="text-align:left;">Sets how the particles are emitted in the sector, including.<br><strong>Random</strong>: random firing<br><strong>Loop</strong>: cyclic firing in a certain direction, each cycle in the same direction<br><strong>PingPong</strong>: cyclic firing, each cycle in the opposite direction of the previous one</td></tr><tr><td style="text-align:left;"><strong>ArcSpread</strong></td><td style="text-align:left;">Sets the discrete interval around the arcs where particles may be generated. Example:<br>When set to 0, particles can be generated anywhere in the arc;<br>when set to 0.2, particles are generated only at 20% intervals around the arc.</td></tr><tr><td style="text-align:left;"><strong>ArcSpeed</strong></td><td style="text-align:left;">Indicates the velocity of the particle emitted along the arc. Click the down icon button on the right to open the curve editor to edit the curve for this property.</td></tr></tbody></table><p>Also in the <strong>Scene Editor</strong> there will be a circular Gizmo showing the shape size of the emitter.</p><p><img src="'+h+'" alt="circle_emitter"></p><p>The <strong>Radius</strong> property of the circle emitter can be adjusted by directly dragging the square control point of the circular Gizmo.</p><p><img src="'+c+'" alt="circle_gizmo"></p><h2 id="cone" tabindex="-1">Cone <a class="header-anchor" href="#cone" aria-label="Permalink to &quot;Cone&quot;">​</a></h2><p>When the <strong>ShapeType</strong> property is set to <strong>Cone</strong>, we call it a cone emitter. In the <strong>Scene Editor</strong> there will be a Cone Gizmo that shows the shape size of the emitter:</p><p><img src="'+g+'" alt="cone_emitter"></p><blockquote><p>The cross section below the cone with the smaller radius is called the bottom of the cone, as shown in the above illustration.</p></blockquote><p>The properties of the cone emitter are shown in the <strong>Inspector</strong> panel as follows.</p><p><img src="'+d+'" alt="cone_emitter_property"></p><p>The special property items are described as follows.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">From which part of the cone the emitter emits particles, including：<br><strong>Base</strong>: Emitted from the bottom of the cone<br><strong>Shell</strong>: Emitted from the circumference of the bottom of the cone<br><strong>Volume</strong>: Emitted from the inside of the cone</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">Set the radius of the bottom cross section of the cone</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">The position of the emitted particles from the cone emitter.<br>When set to <strong>0</strong>, it means emitting from the surface of the cone<br>When set to <strong>1</strong>, it means emitting from the center of the cone<br>When set to between <strong>0~1</strong>, it means emitting from the center of the cone to the surface, within a certain proportional range</td></tr><tr><td style="text-align:left;"><strong>Angle</strong></td><td style="text-align:left;">The angle between the axis of the cone and the bus, the larger the value the greater the angle, the greater the degree of opening and closing of the cone emitter</td></tr><tr><td style="text-align:left;"><strong>Arc</strong></td><td style="text-align:left;">Set the fan area where the cone emitter emits particles</td></tr><tr><td style="text-align:left;"><strong>ArcMode</strong></td><td style="text-align:left;">indicates how the particles are emitted in the fan area.<br><strong>Random</strong>: random position<br><strong>Loop</strong>: Emitted cyclically in a certain direction, each cycle in the same direction<br><strong>PingPong</strong>: Emitted cyclically, each cycle in the opposite direction<br><strong>spread</strong>: indicates that the particle is emitted at a certain interval, for example, 0 means it can be emitted at any position; 0.1 means it is emitted every tenth of the circumference of the circle</td></tr><tr><td style="text-align:left;"><strong>ArcSpeed</strong></td><td style="text-align:left;">The speed of the particle emitted along the arc</td></tr><tr><td style="text-align:left;"><strong>ArcSpread</strong></td><td style="text-align:left;">indicates the velocity of the particle along the arc. Click the down icon button on the right to open the curve editor to edit the curve</td></tr><tr><td style="text-align:left;"><strong>Length</strong></td><td style="text-align:left;">The axis length of the top section of the cone from the bottom</td></tr></tbody></table><p>The <strong>Angle</strong>, <strong>Length</strong>, and <strong>Radius</strong> properties of the cone emitter can also be set by directly dragging the cone Gizmo&#39;s square control point in the scene.</p><h2 id="sphere-hemisphere" tabindex="-1">Sphere / Hemisphere <a class="header-anchor" href="#sphere-hemisphere" aria-label="Permalink to &quot;Sphere / Hemisphere&quot;">​</a></h2><p>When the <strong>ShapeType</strong> property is set to <strong>Sphere</strong>/<strong>Hemisphere</strong>, we call it a sphere/hemisphere emitter.</p><p>The properties of the sphere emitter and the hemisphere emitter are the same, and here we use the sphere emitter as an example.</p><p><img src="'+p+'" alt="Sphere_emitter_property"></p><p>The special property items are described as follows.</p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>EmitFrom</strong></td><td style="text-align:left;">From which part of the sphere the emitter emits particles, including:<br><strong>Volume</strong>: Emits from inside the sphere<br><strong>Shell</strong>: Emits from the surface of the sphere (not in effect yet, can be set by <strong>RadiusThickness</strong>)</td></tr><tr><td style="text-align:left;"><strong>Radius</strong></td><td style="text-align:left;">The radius of the sphere. You can also set it by dragging the control point of the sphere Gizmo in the <strong>Scene Editor</strong> directly</td></tr><tr><td style="text-align:left;"><strong>RadiusThickness</strong></td><td style="text-align:left;">The position of the particle emitted by the sphere emitter.<br>When set to <strong>0</strong>, it means emitting from the surface of the ball<br>When set to <strong>1</strong>, it means emitting from the center of the sphere<br>When set to between <strong>0~1</strong>, it means emitting from the surface to the center of the sphere, within a certain proportional range</td></tr></tbody></table><p>The sphere emitter will have a sphere Gizmo in the <strong>Scene Editor</strong> that shows the shape size of the emitter.</p><p><img src="'+m+'" alt="Sphere_emitter"></p><p>Similarly, the hemisphere emitter has a hemisphere Gizmo in the <strong>Scene Editor</strong> that shows the shape size of the emitter:</p><p><img src="'+f+'" alt="Hemisphere_emitter"></p>',43),u=[b];function x(_,w,S,T,E,v){return r(),e("div",null,u)}const z=t(y,[["render",x]]);export{k as __pageData,z as default};
