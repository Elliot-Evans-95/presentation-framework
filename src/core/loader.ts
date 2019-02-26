// class InstanceLoader<T> {
//     private _context: Object;
//
//     constructor(context: Object) {
//         this._context = context;
//
//         console.log(this._context);
//     }
//
//     getInstance(name: string, ...args: any[]) : T {
//         const instance = Object.create(this._context[name].prototype);
//         instance.constructor.apply(instance, args);
//         return <T> instance;
//     }
// }
//
// const loader = new InstanceLoader<Page>(window);
//
// const example = loader.getInstance('Example', 'A', 'B');
//
// console.log(example);
