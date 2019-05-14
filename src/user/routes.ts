import {Route} from "../router/router.type";

export const routes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'welcome',
        routeHTML: `
            <h1>Design Patterns in Javascript (typescript) - a Case Study</h1>
        `,
        routeStyle: ``,
        isActive: true
    },
    {
        id: 2,
        routeName: 'toCover',
        routeHTML: `
            <h1>To Cover:</h1>
            <ul class="point">
                <li>Case Study</li>
                <li>
                    Development
                    <ul>
                        <li>Problems</li>
                        <li>Solutions</li>
                        <li>Processes used</li>
                    </ul>
                </li>
                <li>Retrospective</li>
            </ul>
        `,
        routeStyle: `
            .point {
                width: 50%;
                margin: 4rem auto;
                font-size: 1.25rem;
            }
        `,
        isActive: false
    },
    {
        id: 3,
        routeName: 'aboutMe',
        routeHTML: `
            <h1>About me:</h1>
            <p>Elliot Evans</p>
            <img class="about-me--img" src="assets/presntation_image.jpg" alt="me"/>
            <p>Web App Developer at Codeweavers</p>
        `,
        routeStyle: `
            p {
                font-size: 1.5rem;
                text-align: center;
            }
        
            .about-me--img {
                display: block;
                max-width: 100%;
                width: 20vw;
                border: 1rem solid black;
                padding: 1rem;
                margin: auto;
            }
        `,
        isActive: false
    },
    {
        id: 4,
        routeName: 'caseStudy',
        routeHTML: `
            <h1>Case Study</h1>
            
            <div class="case-study-container">
                <div class="case-study-section">
                    <h2>Problem:</h2>
                    <ul>
                        <li>Existing Frameworks are hard to style</li>
                        <li>Existing Frameworks are hard to add slides and custom start positions</li>
                        <li>Existing Frameworks are difficult to add components too</li>
                        <li>Existing Frameworks are difficult to add custom code</li>
                        <li>Existing Frameworks are difficult to manage</li>
                    </ul>    
                </div>

                <div class="case-study-section">
                    <h2>Solution:</h2>
                    <ul>
                        <li>Ability to add custom styling per slide and per presentation via routes</li>
                        <li>Ability to implement custom routing</li>
                        <li>Ability to implement start position for presentation</li>
                        <li>Ability to add web components which can send and retrieve events</li>
                        <li>Ability to add custom code in every slide</li>
                        <li>Can manage the whole presentation in one routes file that can be linked with individual html and style files</li>
                    </ul> 
                </div>       
            </div>

        `,
        routeStyle: `
            .case-study-container {
                display: flex;
            }
            
            .case-study-section {
                display: flex;
                flex-direction: column;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 75%;
                margin-bottom: 1rem;
            }
        `,
        isActive: false
    },
    {
        id: 5,
        routeName: 'conceptOfTheProject',
        routeHTML: `
            <h1>The Spike of the idea</h1>
            <pre>
                <code class="code-block language-typescript">
                    document.addEventListener("keydown", (event) => {
                        if (event.key === "ArrowRight") {
                            while (appShell.firstChild) {
                                appShell.removeChild(appShell.firstChild);
                            }
                    
                            window.history.pushState(
                                setActivePage(nextPage), 
                                nextPage,
                                window.location.origin + nextPage
                            );
                    
                            createPageComponent(nextPage);
                            removeContent();
                            setPageState(nextPage);
                            addContentToPage(nextPage);
                        }
                    });
                </code>
            </pre>
        `,
        routeStyle: `
            .code-block { 
                margin-left: 5rem;
                margin-right: 5rem;
                max-width: 100%;
                overflow: hidden;
                padding: 1rem;
                border: 1rem solid;
            }
        `,
        isActive: false
    },
    {
        id: 6,
        routeName: 'skeletonOfTheProject',
        routeHTML: `
            <h1>The skeleton of the project</h1>
            <img class="skeleton--img" src="assets/presentation_sheketon.png" alt="project skeleton">
            
        `,
        routeStyle: `
            .skeleton--img {
                display: block;
                max-width: 28%;
                margin: 4rem auto;
                padding: 1rem;
                border: 1rem solid #5a5a5a;
            }
        `,
        isActive: false
    },
    {
        id: 7,
        routeName: 'designPattern',
        routeHTML: `
            <h1>Design Patterns</h1>
            
            <div class="design-pattern-container">
                <div class="design-pattern-section">
                    <h2>Types of design patterns:</h2>
                    <ul>
                        <li>Behavioural</li>
                        <li>Structural</li>
                        <li>Creation</li>
                    </ul>    
                </div>

                <div class="design-pattern-section">
                    <h2>Design patterns that I used:</h2>
                    <ul>
                        <li>Meditator</li>
                        <li>Facade</li>
                        <li>State</li>
                        <li>Proxy</li>
                    </ul> 
                </div> 
                      
            </div>

        `,
        routeStyle: `
            .design-pattern-container {
                display: flex;
                justify-content: space-around;
            }
            
            .design-pattern-section {
                display: flex;
                flex-direction: column;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 75%;
                margin-bottom: 1rem;
            }
        `,
        isActive: false
    },
    {
        id: 8,
        routeName: 'designPatternForProject',
        routeHTML: `
            <h1>Design Patterns used</h1>
            <h2>Structural</h2>
            <div class="patterns--container">
                <div class="patterns--section">
                    <div>
                        <p class="patterns--sub-heading">Facade</p>
                        <pre><code class="code-block language-typescript">
                            setPage(direction: Direction): void {
                                this._router = RouterController.setActiveRoute(this._router, direction, this._messageEvents);
                                RouterHelper.updateHistoryPushState(this._router);
                                this.generateNewSlide();
                                new Highlighter(this._document);
                                this._animation.triggerPageAnimation();
                            }
                        </code></pre>
                    </div>
                </div>       
            </div>

        `,
        routeStyle: `
            .code-block { 
                max-width: 100%;
                border: 1rem solid;
            }
            
            .patterns--sub-heading {
                font-weight: bold;
                font-size: 1rem;
            }
            
            .patterns--section {
                flex: 0 0 75%;
                width: 75%;
                padding: 1rem;
            }
        
            .patterns--container {
                display: flex;
                width: 100vw;
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 9,
        routeName: 'designPatternForProject',
        routeHTML: `
            <h1>Design Patterns used</h1>
            <h2>Structural</h2>
            <div class="patterns--container">
                <div class="patterns--section">
                    <div>
                        <p class="patterns--sub-heading">Proxy</p>
                        <pre><code class="code-block language-typescript">
                        export abstract class RouterHelper {
                            static retrieveActiveRoute(router: Router): Route {
                                return router.state.find((route) => route.isActive);
                            }
                        
                            static updateHistoryPushState(router: Router): void {
                                window.history.pushState(
                                    null,
                                    \RouterHelper.retrieveActiveRoute(router),
                                    window.location.origin + \RouterHelper.retrieveActiveRoute(router).routeName}
                                );
                            }
                        }
                        </code></pre>
                    </div>
                </div>   
                                 
            </div>

        `,
        routeStyle: `
            .code-block { 
                max-width: 100%;
                border: 1rem solid;
            }
            
            .patterns--sub-heading {
                font-weight: bold;
                font-size: 1rem;
            }
            
            .patterns--section {
                flex: 0 0 75%;
                width: 75%;
                padding: 1rem;
            }
        
            .patterns--container {
                display: flex;
                width: 100vw;
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 10,
        routeName: 'designPatternForProject',
        routeHTML: `
            <h1>Design Patterns used</h1>
            <h2>Behavioural</h2> 
            <div class="patterns--container">
                <div class="patterns--sub-section">
                    <p class="patterns--sub-heading">State</p>
                    <pre><code class="code-block language-typescript">
                    export class Router {
                        private readonly _routerState: Array<Route>;
                    
                        constructor(userRoutes: Array<Route>) {
                            this._routerState = userRoutes;
                        }
                    
                        get state(): Array<Route> {
                            return this._routerState;
                        }
                    
                    }
                    </code></pre>
                </div> 
            </div>

        `,
        routeStyle: `
            .code-block { 
                max-width: 100%;
                border: 1rem solid;
            }
            
            .patterns--sub-heading {
                font-weight: bold;
                font-size: 1rem;
            }
            
            .patterns--section {
                flex: 0 0 75%;
                width: 75%;
                padding: 1rem;
            }
        
            .patterns--container {
                display: flex;
                width: 100vw;
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 11,
        routeName: 'designPatternForProject',
        routeHTML: `
            <h1>Design Patterns used</h1>
            <h2>Behavioural</h2> 
            <div class="patterns--container">
                <div class="patterns--sub-section">
                    <p class="patterns--sub-heading">Mediator</p>
                    <pre><code class="code-block language-typescript">
                    export class Bus implements Mediator {
                        subscriptions = {};
                        private _index: number = 0;
                    
                        subscribe(eventType, callback): Subscription {
                            const id = this.getIdGenerator();
                    
                            if(!this.subscriptions[eventType])
                                this.subscriptions[eventType] = {};
                    
                            this.subscriptions[eventType][id] = callback;
                    
                            return {
                                unsubscribe: () => {
                                    delete this.subscriptions[eventType][id];
                                    if(Object.keys(this.subscriptions[eventType]).length === 0) delete this.subscriptions[eventType];
                                }
                            }
                        }
                    
                        publish(eventType, arg): void {
                            if(!this.subscriptions[eventType]) return;
                    
                            Object
                                .keys(this.subscriptions[eventType])
                                .forEach(key => this.subscriptions[eventType][key](arg))
                        }
                    }
                    </code></pre>
                </div> 
            </div>

        `,
        routeStyle: `
            .code-block { 
                max-width: 100%;
                border: 1rem solid;
            }
            
            .patterns--sub-heading {
                font-weight: bold;
                font-size: 1rem;
            }
            
            .patterns--section {
                flex: 0 0 75%;
                width: 75%;
                padding: 1rem;
            }
        
            .patterns--container {
                display: flex;
                width: 100vw;
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 12,
        routeName: 'designPatternCouldUse',
        routeHTML: `
            <h1>Design Patterns I could of used</h1>
            <h2>Behavioural</h2> 
            <div class="patterns--container">
                    <div class="patterns--sub-section">
                        <p class="patterns--sub-heading">Command</p>
                        <pre><code class="code-block language-typescript">
                        interface PresentationCommand {
                            navigate(): void;
                        }
                        
                        class PreviousCommand impliments PresentationCommand {
                            navigate(): void {
                                //navigate code here
                            }
                        }
                        </code></pre>
                    </div> 
                       
                </div>

        `,
        routeStyle: `
            .code-block { 
                max-width: 100%;
                border: 1rem solid;
            }
            
            .patterns--sub-heading {
                font-weight: bold;
                font-size: 1rem;
            }
            
            .patterns--section {
                flex: 0 0 75%;
                width: 75%;
                padding: 1rem;
            }
        
            .patterns--container {
                display: flex;
                width: 100vw;
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 13,
        routeName: 'whydecisions',
        routeHTML: `
            <h1>Why I choose these design patterns?</h1>
        `,
        routeStyle: ``,
        isActive: false
    },
    {
        id: 14,
        routeName: 'projectProgress',
        routeHTML: `
            <h1>The progress of the project:</h1>
            <li>Spike</li>
            <li>Skeleton</li>
            <li>Tests</li>
            <li>Refactor</li>
            <li>Polish</li>
        `,
        routeStyle: `
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 15,
        routeName: 'decisions',
        routeHTML: `
            <h1>The Project at its current stage:</h1>
            <li>thoughts about the project outcome</li>
            <li>Would I change anything?</li>
        `,
        routeStyle: `
            li { 
                font-size: 1.25rem;
                margin: auto;
                width: 50%;
            }
        `,
        isActive: false
    },
    {
        id: 16,
        routeName: 'conclusion',
        routeHTML: `
            <h2>Link to framework: <a href="https://github.com/Elliot-Evans-95/presenation-framework">github.com/Elliot-Evans-95/presentation-framework</a></h2>
            <h2>Link to website: <a href="https://elliotevans.site">elliotevans.site</a></h2>
        `,
        routeStyle: `
            main {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 75vh;
            }
        `,
        isActive: false
    }
];
