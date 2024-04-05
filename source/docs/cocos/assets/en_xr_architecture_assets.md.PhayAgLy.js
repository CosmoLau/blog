import{_ as t,c as e,o as r,a4 as a}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/create_xr_node.BEH_985t.png",i="/docs/cocos/assets/prefabs.Dcyn80sT.png",o="/docs/cocos/assets/material.Dtq4Rvjd.png",s="/docs/cocos/assets/model.C7kXSNg6.png",_=JSON.parse('{"title":"Built-in Resources and Prefabs","description":"","frontmatter":{},"headers":[],"relativePath":"en/xr/architecture/assets.md","filePath":"en/xr/architecture/assets.md","lastUpdated":1712336288000}'),d={name:"en/xr/architecture/assets.md"},c=a('<h1 id="built-in-resources-and-prefabs" tabindex="-1">Built-in Resources and Prefabs <a class="header-anchor" href="#built-in-resources-and-prefabs" aria-label="Permalink to &quot;Built-in Resources and Prefabs&quot;">​</a></h1><p>After enabling the XR extension in the Cocos Creator Extension Manager, you can create XR-related objects just as the way you create a general node.</p><p>Right-click in the Hierarchy and select <strong>Create -&gt; XR</strong>. On the right menu, you will see all the available XR prefabs that you can create instances of in the scene.</p><p><img src="'+n+'" alt="assets/create_xr_node.png"></p><table><thead><tr><th>Name</th><th>Description</th><th>Components</th></tr></thead><tbody><tr><td>XR Agent</td><td>A proxy node in the virtual scene that represents information related to the real-world main character and controls the lifecycle of the XR main character in the virtual world.</td><td>TrackingOrigin</td></tr><tr><td>XR HMD</td><td>An abstract node representing a head-mounted display device in the virtual world, based on the Camera object, used to synchronize input signals from the real-world head-mounted display and output the engine rendering result to the device.</td><td>Camera<br>AudioSource<br>HMDCtrl<br>PoseTracker<br>TargetEye</td></tr><tr><td>AR Camera</td><td>An abstract representation of the camera on mobile devices with AR capabilities, used to map the camera&#39;s AR functionality to the physical device.</td><td>Camera<br>PoseTracker<br>ARCameraMgr</td></tr><tr><td>Ray Interactor</td><td>A ray interactor used for long-distance interaction, including mapping of XR device controller I/O and ray interaction functionality.</td><td>PoseTracker<br>XRController<br>RayInteractor<br>Line</td></tr><tr><td>Direct Interactor</td><td>An interactor used for close-range direct interaction, which also includes mapping of XR device controller I/O and interaction functionality.</td><td>PoseTracker<br>XRController<br>DirectInteractor</td></tr><tr><td>Gaze Pointer Interactor</td><td>An interactor used for gaze-based interaction, follows head movement, and triggers interaction based on gaze duration.</td><td>UITransform<br>RenderRoot2D<br>XRGazeInteractor</td></tr><tr><td>ScreenTouchInteractor</td><td>An interactor for screen gesture interaction on handheld mobile devices, converts screen gestures into interaction behaviors with objects in the scene.</td><td>ScreenTouchInteractor</td></tr><tr><td>Locomotion Checker</td><td>A motion checker that acts as an arbiter for all virtual motion drivers to access the XR Agent, ensuring the maintenance of a unique motion state within a fixed time.</td><td>LocomotionChecker</td></tr><tr><td>Teleportable</td><td>An interaction object that can trigger teleportation interaction with the interactor, allowing the XR Agent to be teleported to a location related to this object.</td><td>Teleportable<br>InteractableEvents</td></tr><tr><td>Simple Interactable</td><td>A simple interactive object where users can customize and extend arbitrary interaction behaviors.</td><td>InteractableEvents</td></tr><tr><td>Grab Interactable</td><td>An interactable object that supports grabbing behavior with the interactor.</td><td>RigidBody<br>GrabInteractable<br>InteractableEvents</td></tr><tr><td>XR Simulator</td><td>Used for previewing XR content, provides web-based and wireless streaming options.</td><td>XRInteractiveSimulator</td></tr><tr><td>XR Video Player</td><td>An XR video player that supports playing videos in windowed, 180-degree, and 360-degree modes in space.</td><td>XRVideoPlayer<br>XRVideoController<br>XRVideoCaption</td></tr><tr><td>XRUI</td><td>3D UI that can be rendered and interacted with in space.</td><td>RaycastChecker<br>RenderRoot2D<br>BoxCollider</td></tr><tr><td>Plane Tracking</td><td>Empowers the application with plane recognition capabilities, using the device&#39;s AR capabilities to identify plane features in the physical world during runtime, and visualizes and displays these plane data in the application.</td><td>ARPlaneTracking</td></tr><tr><td>Image Tracking</td><td>Empowers the application with image recognition capabilities, using the device&#39;s AR capabilities to recognize 2D image resources during runtime.</td><td>ARImageTracking</td></tr><tr><td>Meshing</td><td>Empowers the application with environment reconstruction capabilities, creating 3D meshes based on the real-world environment.</td><td>ARMeshing</td></tr></tbody></table><h2 id="built-in-resources" tabindex="-1">Built-in Resources <a class="header-anchor" href="#built-in-resources" aria-label="Permalink to &quot;Built-in Resources&quot;">​</a></h2><p>After enabling the XR extension, the XR prefabs, materials, models, and other resources will be added to the built-in resource database (xr-plugin) and can be directly used by users. The specific location is shown in the following image.</p><h3 id="prefabs" tabindex="-1">Prefabs <a class="header-anchor" href="#prefabs" aria-label="Permalink to &quot;Prefabs&quot;">​</a></h3><p><img src="'+i+'" alt="prefabs"></p><h3 id="materials" tabindex="-1">Materials <a class="header-anchor" href="#materials" aria-label="Permalink to &quot;Materials&quot;">​</a></h3><p><img src="'+o+'" alt="material"></p><h3 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-label="Permalink to &quot;Models&quot;">​</a></h3><p><img src="'+s+'" alt="model"></p>',13),l=[c];function h(b,p,u,m,g,f){return r(),e("div",null,l)}const v=t(d,[["render",h]]);export{_ as __pageData,v as default};
