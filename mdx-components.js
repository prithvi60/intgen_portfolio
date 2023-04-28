"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMDXComponents = void 0;
// This file is required to use MDX in `app` directory.
function useMDXComponents(components) {
    return __assign({ 
        // Allows customizing built-in components, e.g. to add styling.
        h1: function (_a) {
            var children = _a.children;
            return (<h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 md:text-center sm:text-4xl">
				{children}
			</h1>);
        }, h2: function (_a) {
            var children = _a.children;
            return (<h2 className="text-zinc-50">{children}</h2>);
        } }, components);
}
exports.useMDXComponents = useMDXComponents;
