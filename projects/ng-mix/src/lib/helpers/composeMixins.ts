export const composeMixins = (...functions: any): any => functions.reduce((a: any, b: any) => (...args: any) => a(b(...args)));