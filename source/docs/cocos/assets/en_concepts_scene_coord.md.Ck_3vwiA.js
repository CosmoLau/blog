import{_ as e,c as o,o as t,a4 as s}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/right_hand.D6ze-Iei.png",r="/docs/cocos/assets/node-tree.BAKtF6Yx.png",a="/docs/cocos/assets/transform-properties.hc-wm3H9.png",i="/docs/cocos/assets/position-nodeA.BDBSfoFb.png",d="/docs/cocos/assets/position-nodeB.DwFCyxBS.png",c="/docs/cocos/assets/position-nodeB-world.C2VOw1u4.png",h="/docs/cocos/assets/rotation.Bja8yUFE.png",l="/docs/cocos/assets/scale.PxlxAgGz.png",P=JSON.parse('{"title":"Coordinate Systems and Node Transformation Properties","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/coord.md","filePath":"en/concepts/scene/coord.md","lastUpdated":1712305443000}'),p={name:"en/concepts/scene/coord.md"},g=s('<h1 id="coordinate-systems-and-node-transformation-properties" tabindex="-1">Coordinate Systems and Node Transformation Properties <a class="header-anchor" href="#coordinate-systems-and-node-transformation-properties" aria-label="Permalink to &quot;Coordinate Systems and Node Transformation Properties&quot;">​</a></h1><p>In the documents, <a href="./../../editor/scene/">Scene Panel</a>, and <a href="./node-component">Nodes and Components</a>, the ability to change the display behavior of nodes by using the <strong>transformation tool Gizmo</strong> and editing the properties of nodes in the <strong>Inspector</strong> panel was introduced. This document will take a deeper look at the coordinate system of the scene space in which the node is located and how the <strong>Position</strong>, <strong>Rotation</strong>, and <strong>Scale</strong> transformation properties of the node work.</p><h2 id="coordinate-systems" tabindex="-1">Coordinate Systems <a class="header-anchor" href="#coordinate-systems" aria-label="Permalink to &quot;Coordinate Systems&quot;">​</a></h2><p>Position properties for nodes can be set, but where will a node with a specific position property be rendered on the screen when the game is running? Just as longitude and latitude specify coordinates for a location on a planet it is necessary to understand the coordinate system of Cocos Creator 3.x to understand the meaning of node positions.</p><h3 id="world-coordinate" tabindex="-1">World Coordinate <a class="header-anchor" href="#world-coordinate" aria-label="Permalink to &quot;World Coordinate&quot;">​</a></h3><p>The world coordinate system, also called absolute coordinate system, represents a unified coordinate system in the scene space in Cocos Creator game development, and &quot;world&quot; is used to represent our game scene.</p><p>The world coordinate system of Creator 3.x uses a Cartesian right-handed coordinate system with default <strong>x</strong> to the right, <strong>y</strong> to the top, <strong>z</strong> to the outside, and the <strong>-z</strong> axis for the front.</p><p><img src="'+n+'" alt="right hand"></p><h3 id="local-coordinate" tabindex="-1">Local Coordinate <a class="header-anchor" href="#local-coordinate" aria-label="Permalink to &quot;Local Coordinate&quot;">​</a></h3><p>The local coordinate system, also called the relative coordinate system, is the coordinate system associated with the node. Each node has a separate coordinate system, and when the node moves or changes direction, the coordinate system associated with that node will move or change direction with it.</p><p>Creator has a hierarchy of parent-child relationships between <strong>Nodes</strong>, and the position of a node set by modifying its <code>Position</code> property is the node&#39;s <strong>local coordinate system</strong> with respect to its parent, not the world coordinate system.</p><p>Finally when drawing the whole scene, Creator will map the local coordinates of these nodes to world coordinate system coordinates. <br> Suppose there are three nodes in the scene: NodeA, NodeB, and NodeC. The structure of the nodes is shown in the following figure.</p><p><img src="'+r+'" alt="node tree"></p><p>When the scene contains nodes at different levels, the position of each node under the world coordinate system is determined according to the following steps:</p><ol><li>Process each node starting from the root level, NodeA in the above figure is a root level node. The first step is to determine the position of the origin of NodeA&#39;s local coordinate system (i.e. <code>Position</code>) in the world coordinate system based on NodeA&#39;s <strong>Position</strong> property.</li><li>Next, process all the direct children of NodeA, which is NodeB in the above figure (as well as other nodes of the same level as NodeB). Based on NodeB&#39;s <code>Position</code> property, determine NodeB&#39;s position in the world coordinate system in NodeA&#39;s local coordinate system.</li><li>Each node uses the parent&#39;s coordinate system and its own position property to determine its position in the world coordinate system.</li></ol><h2 id="transformation-properties" tabindex="-1">Transformation Properties <a class="header-anchor" href="#transformation-properties" aria-label="Permalink to &quot;Transformation Properties&quot;">​</a></h2><p>Nodes include three main transformation properties, <strong>Position</strong>, <strong>Rotation</strong> and <strong>Scale</strong>, which are described below in turn.</p><p><img src="'+a+'" alt="transform properties"></p><h3 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;Position&quot;">​</a></h3><p><strong>Position</strong> consists of the <code>X</code>, <code>Y</code> and <code>Z</code> properties, which specify the coordinates of the node on the X-axis, Y-axis and Z-axis of the current coordinate system, respectively, and default to <code>(0, 0, 0)</code>.</p><p><img src="'+i+'" alt="position"></p><p><img src="'+d+'" alt="position"></p><p>In the above figure, the world coordinates of NodeA are <code>(50, 50, 50)</code> and the local coordinates of child NodeB are <code>(0, 2, 0)</code>. If NodeB is moved to the root of the scene, the world coordinates of NodeB become <code>(50, 52, 50)</code>.</p><p><img src="'+c+'" alt="position"></p><p>The <code>Position</code> of the child NodeB is based on the <code>Position</code> of the parent NodeA as the origin of the coordinate system.</p><p>If the parent NodeA changes its <code>Position</code>, the child NodeB will also change its position (world coordinate system), but the <code>Position</code> property of the child NodeB will not change, because the child NodeB does not change in the local coordinate system with the parent NodeA&#39;s <code>Position</code> as the origin.</p><p>In the <strong>Scene</strong> panel, use the <a href="./../../editor/toolbar/">Move Transform Tool</a> to change the node position.</p><h3 id="rotation" tabindex="-1">Rotation <a class="header-anchor" href="#rotation" aria-label="Permalink to &quot;Rotation&quot;">​</a></h3><p><strong>Rotation</strong> consists of the <code>X</code>, <code>Y</code> and <code>Z</code> properties, which default to <code>(0, 0, 0)</code>, and is another important property that affects the node&#39;s local coordinate system. When the <code>X</code> property is changed, it means that the node will be rotated counterclockwise/clockwise around the x-axis, and so on, and the same applies when the <code>Y</code> or <code>Z</code> property is changed.</p><ul><li>When the property value is <strong>positive</strong>, the node rotates <strong>counterclockwise</strong>.</li><li>When the property value is <strong>negative</strong>, the node rotates <strong>clockwise</strong>.</li></ul><p><img src="'+h+'" alt="rotation"></p><p>The node hierarchy shown above is the same as the previous figure, except that the <strong>Rotation</strong> property of NodeA on the z-axis is set to <strong>60</strong> degrees, notice that in addition to NodeA itself being <strong>counterclockwise</strong> rotated by 60 degrees on the z-axis, its child NodeB is also <strong>centered</strong> on the z-axis. NodeB is also rotated <strong>counterclockwise</strong> on NodeA&#39;s z-axis. This also means that the rotation property affects the child nodes.</p><blockquote><p><strong>Note</strong>: the quaternion <a href="./__APIDOC__/en/class/Node?id=rotation">rotation</a> property on a node represents the angle of rotation about any axis. The property corresponding to <code>Rotation</code> in the <strong>Inspector</strong> panel is the property <a href="./__APIDOC__/en/class/Node?id=eulerAngles">EulerAngles</a>, and the value of <code>Rotation</code> can be obtained in the script via <code>Node.eulerAngles</code>. These two properties can be used separately according to your needs. When using the API, make sure to pay attention to the difference between them and the editor panel property names.</p></blockquote><p>In the <strong>Scene</strong> panel, use the <a href="./../../editor/toolbar/">Rotate Transform Tool</a> to set the rotation of the node.</p><h3 id="scale" tabindex="-1">Scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;Scale&quot;">​</a></h3><p>The <strong>Scale</strong> property also consists of the <code>X</code>, <code>Y</code> and <code>Z</code> properties, which represent the scaling of the node on the x-axis, y-axis and z-axis, respectively, and defaults to <code>(1, 1, 1)</code>.</p><p><img src="'+l+'" alt="scale"></p><p>The node hierarchy shown above is the same as when <code>Position</code> was introduced. Setting the scale property of NodeA to <code>(2, 1, 1)</code> means that NodeA is scaled to <strong>2</strong> times its original size in the x-axis direction, while the y-axis and z-axis remain unchanged. You can see that the child node NodeB is also scaled to twice its original size in the x-axis direction, so the scaling property affects all child nodes.</p><p>The <code>Scale</code> property set on a child node are superimposed on its parent node&#39;s scaling, and the child nodes of the child node <strong>multiply</strong> all the <code>Scale</code> properties at each level to obtain the scaling multiplier displayed in the world coordinate system. This is actually the same as the <strong>position</strong> and <strong>rotation</strong> properties, except that the <strong>position</strong> and <strong>rotation</strong> properties are <strong>additive</strong>, while the <strong>scaling</strong> property is <strong>multiplicative</strong>, which has a more pronounced effect.</p><p>The <strong>Scale</strong> property does not affect the <strong>Position</strong> and <strong>Rotation</strong> of the current node, but it does affect the <strong>Position</strong> of the child nodes.</p><p>In the <strong>Scene</strong> panel, use the <a href="./../../editor/toolbar/">Scale Transform Tool</a> to modify the node scaling.</p>',41),m=[g];function f(u,y,w,b,_,N){return t(),o("div",null,m)}const T=e(p,[["render",f]]);export{P as __pageData,T as default};
