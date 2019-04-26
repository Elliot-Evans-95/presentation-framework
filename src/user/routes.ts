import {Route} from "../types/types";

export const routes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'hello',
        routeHTML: '<p>Design Patterns in Javascript - a Case Study</p>',
        routeStyle: `
            #app-shell { 
                //background: aqua;
            }
        `,
        isActive: true
    },
    {
        id: 2,
        routeName: 'aboutMe',
        routeHTML: `
        <h5>Web app developer</h5>
        <p>Codeweavers</p>
        `,
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 3,
        routeName: 'rockstarDeveloper',
        routeHTML: `<h1>Story of a rockstar developer</h1>
            <li>September Software Craftsmanship in London</li>
            <li>Saw Bob Martin who played rock music when he entered the stage</li>
            <li>Path to being a rockstar</li>
            <li>Learning and implementing design patterns is where i am now</li>
        `,
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 4,
        routeName: 'caseStudy',
        routeHTML: `<p>Case Study</p>
            <li>Problem</li>
            <li>Solution</li>
            <li>Process</li>
        `,
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 5,
        routeName: 'conceptOfTheProject',
        routeHTML: '<p>The Spike of the idea</p>',
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 6,
        routeName: 'skeletonOfTheProject',
        routeHTML: '<p>The skeleton of the project</p>',
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 7,
        routeName: 'bestDesignPatternForProject',
        routeHTML: '<p>Best design pattern for the project</p>',
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 8,
        routeName: 'decisions',
        routeHTML: '<p>Why I made these decisions</p>',
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 9,
        routeName: 'decisions',
        routeHTML: `
            <h5>The Project at its current stage:</h5>
            <li>I am happy for the project</li>
            <li>Would I change anything</li>
            <li>conclusion</li>
        `,
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    },
    {
        id: 10,
        routeName: 'conclusion',
        routeHTML: `
            <p>Link to framework</p>
            <p>Link to website</p>
        `,
        routeStyle: `
            #app-shell { 
                //background: fuchsia;
            }
        `,
        isActive: false
    }
];
