
// source ./UMD.js
(function (factory) {

    var _name = 'alot',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    var _node_modules_atma_utils_lib_utils = {};
var _src_AlotProto = {};
var _src_alot = {};
var _src_async_Deferred = {};
var _src_async_Pool = {};
var _src_streams_DistinctStream = {};
var _src_streams_FilterStream = {};
var _src_streams_ForEachStream = {};
var _src_streams_ForkStream = {};
var _src_streams_GroupStream = {};
var _src_streams_IAlotStream = {};
var _src_streams_JoinStream = {};
var _src_streams_MapStream = {};
var _src_streams_SkipStream = {};
var _src_streams_SortedStream = {};
var _src_streams_TakeStream = {};
var _src_streams_exports = {};
var _src_utils_Aggregation = {};
var _src_utils_arr = {};
var _src_utils_classify = {};
var _src_utils_deco = {};
var _src_utils_is = {};
var _src_utils_obj = {};
var _src_utils_r = {};

// source ./ModuleSimplified.js
var _src_streams_IAlotStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_IAlotStream != null ? _src_streams_IAlotStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=IAlotStream.js.map
//# sourceMappingURL=IAlotStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_IAlotStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_IAlotStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_IAlotStream, module.exports);
    } else {
        _src_streams_IAlotStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_atma_utils_lib_utils != null ? _node_modules_atma_utils_lib_utils : {};
    var module = { exports: exports };

    (function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		obj_getProperty = function (obj_, path) {
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		//@TODO remove constructr run
		class_Dfr = function (mix) {
		    if (typeof mix === 'function') {
		        return class_Dfr.run(mix);
		    }
		};
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    }
		};
		class_Dfr.resolve = function (a, b, c) {
		    var dfr = new class_Dfr();
		    return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		};
		class_Dfr.reject = function (error) {
		    var dfr = new class_Dfr();
		    return dfr.reject(error);
		};
		class_Dfr.run = function (fn, ctx) {
		    var dfr = new class_Dfr();
		    if (ctx == null)
		        ctx = dfr;
		    fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		    return dfr;
		};
		class_Dfr.all = function (promises) {
		    var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		    if (wait === 0) {
		        return dfr.resolve(arr);
		    }
		    function tick(index) {
		        if (error != null) {
		            return;
		        }
		        var args = _Array_slice.call(arguments, 1);
		        arr.splice.apply(arr, [index, 0].concat(args));
		        if (--wait === 0) {
		            dfr.resolve(arr);
		        }
		    }
		    function onReject(err) {
		        dfr.reject(error = err);
		    }
		    var imax = promises.length, i = -1;
		    while (++i < imax) {
		        var x = promises[i];
		        if (x == null || x.then == null) {
		            tick(i);
		            continue;
		        }
		        x.then(tick.bind(null, i), onReject);
		    }
		    return dfr;
		};
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
		        fn_apply(callback, dfr, arguments_);
		    else
		        listeners.push(callback);
		    return dfr;
		}
		function dfr_clearListeners(dfr) {
		    dfr._done = null;
		    dfr._fail = null;
		    dfr._always = null;
		}
		function arr_callOnce(arr, ctx, args) {
		    if (arr == null)
		        return;
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger() {
		    var args = _Array_slice.call(arguments), event = args.shift(), fns = this._listeners[event], fn, imax, i = 0;
		    if (fns == null)
		        return this;
		    for (imax = fns.length; i < imax; i++) {
		        fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		            imax--;
		        }
		    }
		    return this;
		}
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_atma_utils_lib_utils === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_atma_utils_lib_utils) && __isObj(module.exports)) {
        Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
    } else {
        _node_modules_atma_utils_lib_utils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Pool;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_async_Pool != null ? _src_async_Pool : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncPool = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const $$setImmediate = typeof setImmediate === 'undefined'
    ? function (fn) {
        new Promise(() => fn());
    }
    : setImmediate;
class AsyncPool {
    constructor(stream, threads = 2, errors = 'reject') {
        this.stream = stream;
        this.threads = threads;
        this.errors = errors;
        this.index = -1;
        this.resolved = false;
        this.rejected = false;
        this.done = false;
        this.time = Date.now();
        this.results = [];
        this.queue = [];
        this.promise = new atma_utils_1.class_Dfr;
    }
    start() {
        $$setImmediate(() => this.tick());
        return this.promise;
    }
    tick() {
        while (this.done !== true && this.queue.length < this.threads) {
            let index = ++this.index;
            let promise = this.stream.nextAsync();
            this.waitFor(promise, index);
        }
        if (this.queue.length === 0 && this.resolved !== true) {
            this.resolved = true;
            this.promise.resolve(this.results);
        }
    }
    waitFor(promise, index) {
        this.queue.push(promise);
        promise.then(result => {
            $$setImmediate(() => this.continueFor(promise, index, null, result));
        }, error => {
            $$setImmediate(() => this.continueFor(promise, index, error, null));
        });
    }
    continueFor(promise, index, error, result) {
        if (this.rejected === true) {
            return;
        }
        if (error != null) {
            if (this.errors === 'reject') {
                this.rejected = true;
                this.promise.reject(error);
                return;
            }
            if (this.errors === 'include') {
                result = { value: error, index };
            }
        }
        if (result != null) {
            if (result.done === true) {
                this.done = true;
            }
            else {
                let i = result.index;
                if (i == null) {
                    i = index;
                }
                this.results[index] = result.value;
            }
        }
        let i = this.queue.indexOf(promise);
        this.queue.splice(i, 1);
        this.tick();
    }
}
exports.AsyncPool = AsyncPool;
//# sourceMappingURL=Pool.js.map
//# sourceMappingURL=Pool.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_async_Pool === module.exports) {
        // do nothing if
    } else if (__isObj(_src_async_Pool) && __isObj(module.exports)) {
        Object.assign(_src_async_Pool, module.exports);
    } else {
        _src_async_Pool = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_Aggregation;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_Aggregation != null ? _src_utils_Aggregation : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregation = void 0;
var Aggregation;
(function (Aggregation) {
    function getMinMaxByEntryInner(stream, getFn, compare) {
        let outVal = null;
        let outEntry = null;
        stream.reset();
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        let i = 0;
        while (true) {
            let entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            let val = getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (outVal == null) {
                outVal = val;
                outEntry = entry.value;
                continue;
            }
            if (compare === 'max' && outVal < val) {
                outVal = val;
                outEntry = entry.value;
            }
            if (compare === 'min' && outVal > val) {
                outVal = val;
                outEntry = entry.value;
            }
        }
        return { value: outVal, entry: outEntry };
    }
    async function getMinMaxByEntryInnerAsync(stream, getFn, compare) {
        let outVal = null;
        let outEntry = null;
        stream.reset();
        let i = 0;
        while (true) {
            let entry = await stream.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            let val = await getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (outVal == null) {
                outVal = val;
                outEntry = entry.value;
                continue;
            }
            if (compare === 'max' && outVal < val) {
                outVal = val;
                outEntry = entry.value;
            }
            if (compare === 'min' && outVal > val) {
                outVal = val;
                outEntry = entry.value;
            }
        }
        return { value: outVal, entry: outEntry };
    }
    function getMinMaxValueBy(stream, getFn, compare) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        let x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.value;
    }
    Aggregation.getMinMaxValueBy = getMinMaxValueBy;
    async function getMinMaxValueByAsync(stream, getFn, compare) {
        let x = await getMinMaxByEntryInner(stream, getFn, compare);
        return x.value;
    }
    Aggregation.getMinMaxValueByAsync = getMinMaxValueByAsync;
    function getMinMaxItemBy(stream, getFn, compare) {
        if (stream.isAsync) {
            return getMinMaxByEntryInnerAsync(stream, getFn, compare);
        }
        let x = getMinMaxByEntryInner(stream, getFn, compare);
        return x.entry;
    }
    Aggregation.getMinMaxItemBy = getMinMaxItemBy;
    async function getMinMaxItemByAsync(stream, getFn, compare) {
        let x = await getMinMaxByEntryInner(stream, getFn, compare);
        return x.entry;
    }
    Aggregation.getMinMaxItemByAsync = getMinMaxItemByAsync;
    function sum(stream, fn, startVal) {
        stream.reset();
        if (stream.isAsync) {
            return sumAsync(stream, fn, startVal);
        }
        let sum = startVal;
        let i = 0;
        while (true) {
            let entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            let value = fn(entry.value, i++);
            if (value == null) {
                continue;
            }
            sum += value;
        }
        return sum;
    }
    Aggregation.sum = sum;
    async function sumAsync(stream, fn, startVal) {
        stream.reset();
        let sum = startVal;
        let i = 0;
        while (true) {
            let entry = await stream.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            let value = await fn(entry.value, i++);
            if (value == null) {
                continue;
            }
            sum += value;
        }
        return sum;
    }
    Aggregation.sumAsync = sumAsync;
})(Aggregation = exports.Aggregation || (exports.Aggregation = {}));
//# sourceMappingURL=Aggregation.js.map
//# sourceMappingURL=Aggregation.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_Aggregation === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_Aggregation) && __isObj(module.exports)) {
        Object.assign(_src_utils_Aggregation, module.exports);
    } else {
        _src_utils_Aggregation = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_is;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_is != null ? _src_utils_is : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_Promise = void 0;
function is_Promise(val) {
    return val != null
        && typeof val === 'object'
        && typeof val.then === 'function';
}
exports.is_Promise = is_Promise;
//# sourceMappingURL=is.js.map
//# sourceMappingURL=is.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_is === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_is) && __isObj(module.exports)) {
        Object.assign(_src_utils_is, module.exports);
    } else {
        _src_utils_is = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_AlotProto;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_AlotProto != null ? _src_AlotProto : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlotProto = void 0;
const Pool_1 = _src_async_Pool;
const Aggregation_1 = _src_utils_Aggregation;
/** Loading all stream from extra exports file to fix circular dependencies */
const exports_1 = _src_streams_exports;
const is_1 = _src_utils_is;
class AlotProto {
    constructor(stream, opts) {
        this.stream = stream;
        this.isAsync = false;
        this.isAsync = stream.isAsync || (opts?.async ?? false);
    }
    next() {
        let x = this.stream.next();
        return x;
    }
    async nextAsync() {
        return this.next();
    }
    [Symbol.iterator]() {
        return this;
    }
    /**
     * Resets current stream to the beginning.
     */
    reset() {
        this.stream.reset();
        return this;
    }
    /**
     * Creates filtered stream. Is Lazy.
     * ```
     * alot(users).filter(x => x.age > 20).take(3).toArray();
     * ```
     * Filter is evaluated only N times, to match only 3 items.
     */
    filter(fn) {
        return new exports_1.FilterStream(this, fn);
    }
    /**
     * Creates async filted stream. Same as filter, but accepts async methods, and returns awaitable stream.
     */
    filterAsync(fn) {
        return new exports_1.FilterStreamAsync(this, fn);
    }
    map(fn) {
        return new exports_1.MapStream(this, fn);
    }
    mapAsync(fn, meta) {
        return new exports_1.MapStream(this, fn, { async: true });
    }
    mapMany(fn) {
        return new exports_1.MapManyStream(this, fn);
    }
    mapManyAsync(fn) {
        return new exports_1.MapManyStream(this, fn, { async: true });
    }
    forEach(fn) {
        return new exports_1.ForEachStream(this, fn);
    }
    forEachAsync(fn) {
        return new exports_1.ForEachStream(this, fn, { async: true });
    }
    take(count) {
        return new exports_1.TakeStream(this, count);
    }
    takeWhile(fn) {
        return new exports_1.TakeWhileStream(this, fn);
    }
    takeWhileAsync(fn) {
        return new exports_1.TakeWhileStreamAsync(this, fn);
    }
    skip(count) {
        return new exports_1.SkipStream(this, count);
    }
    skipWhile(fn) {
        return new exports_1.SkipWhileStream(this, fn);
    }
    skipWhileAsync(fn) {
        return new exports_1.SkipWhileStreamAsync(this, fn);
    }
    groupBy(fn) {
        return new exports_1.GroupByStream(this, fn);
    }
    /** Join Left Inner  */
    join(inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'inner');
    }
    /** Join Full Outer  */
    joinOuter(inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'outer');
    }
    distinctBy(fn) {
        return new exports_1.DistinctByStream(this, fn);
    }
    distinct() {
        return new exports_1.DistinctByStream(this);
    }
    sortBy(mix, direction = 'asc') {
        return new exports_1.SortByStream(this, mix, direction);
    }
    sortByAsync(mix, direction = 'asc') {
        return new exports_1.SortByStream(this, mix, direction, /*isAsync*/ true);
    }
    sortByLocalCompare(getValFn, direction, ...params) {
        return new exports_1.SortByLocalCompareStream(this, getValFn, direction, params);
    }
    fork(fn) {
        let inner = new exports_1.ForkStreamInner(this, fn);
        let outer = new exports_1.ForkStreamOuter(this, inner);
        return outer;
    }
    toDictionary(keyFn, valFn) {
        this.reset();
        let hash = Object.create(null);
        while (true) {
            let x = this.next();
            if (x.done) {
                return hash;
            }
            let key = keyFn(x.value);
            hash[key] = valFn ? valFn(x.value) : x.value;
        }
    }
    async toDictionaryAsync(keyFn, valFn) {
        this.reset();
        let hash = Object.create(null);
        while (true) {
            let x = await this.nextAsync();
            if (x.done) {
                return hash;
            }
            let key = await keyFn(x.value);
            hash[key] = valFn ? await valFn(x.value) : x.value;
        }
        return hash;
    }
    toMap(keyFn, valFn) {
        this.reset();
        let map = new Map();
        while (true) {
            let x = this.next();
            if (x.done) {
                return map;
            }
            let key = keyFn(x.value);
            let value = valFn != null ? valFn(x.value) : x.value;
            map.set(key, value);
        }
    }
    async toMapAsync(keyFn, valFn) {
        this.reset();
        let map = new Map();
        while (true) {
            let x = await this.nextAsync();
            if (x.done) {
                return map;
            }
            let key = await keyFn(x.value);
            let value = valFn != null ? await valFn(x.value) : x.value;
            map.set(key, value);
        }
        return map;
    }
    toArray() {
        this.reset();
        let out = [];
        while (true) {
            let result = this.next();
            if (result.done === true) {
                break;
            }
            out.push(result.value);
        }
        return out;
    }
    toArrayAsync(meta = { threads: 4, errors: 'reject' }) {
        this.reset();
        let pool = new Pool_1.AsyncPool(this, meta.threads, meta.errors);
        return pool.start();
    }
    first(matcher) {
        this.reset();
        let i = 0;
        while (true) {
            let entry = this.next();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null || matcher(entry.value, i++)) {
                return entry.value;
            }
        }
        return null;
    }
    async firstAsync(matcher) {
        this.reset();
        let i = 0;
        while (true) {
            let entry = await this.nextAsync();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null) {
                return entry.value;
            }
            let mix = matcher(entry.value, i++);
            let result = (0, is_1.is_Promise)(mix) ? await mix : mix;
            if (result) {
                return entry.value;
            }
        }
        return null;
    }
    find(matcher) {
        return this.first(matcher);
    }
    findAsync(matcher) {
        return this.firstAsync(matcher);
    }
    sum(getVal, initialValue) {
        return Aggregation_1.Aggregation.sum(this, getVal, initialValue ?? 0);
    }
    sumAsync(getVal, initialValue) {
        return Aggregation_1.Aggregation.sumAsync(this, getVal, initialValue ?? 0);
    }
    sumBigInt(getVal) {
        return Aggregation_1.Aggregation.sum(this, getVal, BigInt(0));
    }
    sumBigIntAsync(getVal, initialValue) {
        return Aggregation_1.Aggregation.sumAsync(this, getVal, initialValue ?? BigInt(0));
    }
    max(fn) {
        return Aggregation_1.Aggregation.getMinMaxValueBy(this, fn, 'max');
    }
    maxAsync(fn) {
        return Aggregation_1.Aggregation.getMinMaxValueByAsync(this, fn, 'max');
    }
    maxItem(fn) {
        return Aggregation_1.Aggregation.getMinMaxItemBy(this, fn, 'max');
    }
    maxItemAsync(fn) {
        return Aggregation_1.Aggregation.getMinMaxItemByAsync(this, fn, 'max');
    }
    min(fn) {
        return Aggregation_1.Aggregation.getMinMaxValueBy(this, fn, 'min');
    }
    minAsync(fn) {
        return Aggregation_1.Aggregation.getMinMaxValueByAsync(this, fn, 'min');
    }
    minItem(fn) {
        return Aggregation_1.Aggregation.getMinMaxItemBy(this, fn, 'min');
    }
    minItemAsync(fn) {
        return Aggregation_1.Aggregation.getMinMaxItemByAsync(this, fn, 'min');
    }
}
exports.AlotProto = AlotProto;
//# sourceMappingURL=AlotProto.js.map
//# sourceMappingURL=AlotProto.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_AlotProto === module.exports) {
        // do nothing if
    } else if (__isObj(_src_AlotProto) && __isObj(module.exports)) {
        Object.assign(_src_AlotProto, module.exports);
    } else {
        _src_AlotProto = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Deferred;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_async_Deferred != null ? _src_async_Deferred : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deferred = void 0;
class Deferred {
    constructor() {
        this.isResolved = false;
        this.isRejected = false;
        this.promise = new Promise((resolve, reject) => {
            this.resolveFn = resolve;
            this.rejectFn = reject;
            if (this.isResolved === true) {
                resolve(this.resolvedArg);
            }
            if (this.isRejected === true) {
                reject(this.rejectedArg);
            }
        });
    }
    resolve(arg) {
        if (this.resolveFn) {
            this.resolveFn(arg);
            return;
        }
        this.isResolved = true;
        this.resolvedArg = arg;
    }
    reject(arg) {
        if (this.rejectFn) {
            this.rejectFn(arg);
            return;
        }
        this.isRejected = true;
        this.rejectedArg = arg;
    }
    then(fnA, fnB) {
        this.promise.then(fnA, fnB);
    }
}
exports.Deferred = Deferred;
//# sourceMappingURL=Deferred.js.map
//# sourceMappingURL=Deferred.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_async_Deferred === module.exports) {
        // do nothing if
    } else if (__isObj(_src_async_Deferred) && __isObj(module.exports)) {
        Object.assign(_src_async_Deferred, module.exports);
    } else {
        _src_async_Deferred = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_deco;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_deco != null ? _src_utils_deco : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deco = void 0;
const Deferred_1 = _src_async_Deferred;
exports.Deco = {
    queued(opts = null) {
        return function (target, propertyKey, descriptor) {
            var viaProperty = descriptor == null;
            var fn = viaProperty ? target[propertyKey] : descriptor.value;
            var queue = [];
            var busy = false;
            var resultFn = function () {
                let wrapped = Queued.prepair(fn, this);
                if (opts != null && opts.trimQueue && queue.length > 0) {
                    queue.splice(0);
                }
                queue.push(wrapped);
                if (busy === false) {
                    busy = true;
                    tick();
                }
                return wrapped.promise;
            };
            var tick = function () {
                let x = queue.shift();
                if (x == null) {
                    busy = false;
                    return;
                }
                x.always(tick);
                x.run.apply(this, arguments);
            };
            if (viaProperty) {
                target[propertyKey] = resultFn;
                return;
            }
            descriptor.value = resultFn;
            return descriptor;
        };
    }
};
const Queued = {
    prepair(fn, ctx) {
        let dfr = new Deferred_1.Deferred;
        return {
            promise: dfr,
            run() {
                let result = fn.apply(ctx, arguments);
                if ('then' in result === false) {
                    dfr.resolve(result);
                }
                else {
                    result.then(_result => {
                        dfr.resolve(_result);
                    }, _error => {
                        dfr.reject(_error);
                    });
                }
                return result;
            },
            always(fn) {
                dfr.then(fn, fn);
            }
        };
    }
};
//# sourceMappingURL=deco.js.map
//# sourceMappingURL=deco.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_deco === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_deco) && __isObj(module.exports)) {
        Object.assign(_src_utils_deco, module.exports);
    } else {
        _src_utils_deco = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_FilterStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_FilterStream != null ? _src_streams_FilterStream : {};
    var module = { exports: exports };

    "use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterStreamAsync = exports.FilterStream = void 0;
const AlotProto_1 = _src_AlotProto;
const deco_1 = _src_utils_deco;
class FilterStream extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
    }
    next() {
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            let b = this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            return result;
        }
    }
}
exports.FilterStream = FilterStream;
class FilterStreamAsync extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.isAsync = true;
        this._index = -1;
        this.next = this.nextAsync;
    }
    async nextAsync() {
        let i = ++this._index;
        while (true) {
            let result = await this.stream.next();
            if (result.done === true) {
                return result;
            }
            let b = await this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            result.index = i;
            return result;
        }
    }
    reset() {
        this._index = -1;
        return super.reset();
    }
    async toArrayAsync(meta = { threads: 4 }) {
        this.reset();
        let arr = await this.mapAsync(async (item, i) => {
            let flag = await this.fn(item, i);
            return {
                value: item,
                flag
            };
        }, meta).toArrayAsync();
        return arr.filter(x => x.flag).map(x => x.value);
    }
}
__decorate([
    deco_1.Deco.queued()
], FilterStreamAsync.prototype, "nextAsync", null);
exports.FilterStreamAsync = FilterStreamAsync;
//# sourceMappingURL=FilterStream.js.map
//# sourceMappingURL=FilterStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_FilterStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_FilterStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_FilterStream, module.exports);
    } else {
        _src_streams_FilterStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_r;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_r != null ? _src_utils_r : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r_DONE = void 0;
exports.r_DONE = { done: true, value: null };
//# sourceMappingURL=r.js.map
//# sourceMappingURL=r.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_r === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_r) && __isObj(module.exports)) {
        Object.assign(_src_utils_r, module.exports);
    } else {
        _src_utils_r = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_MapStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_MapStream != null ? _src_streams_MapStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapManyStream = exports.MapStream = void 0;
const AlotProto_1 = _src_AlotProto;
const r_1 = _src_utils_r;
class MapStream extends AlotProto_1.AlotProto {
    constructor(stream, fn, opts) {
        super(stream, opts);
        this.stream = stream;
        this.fn = fn;
        this._index = 0;
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        let result = this.stream.next();
        if (result.done) {
            return { value: null, done: true };
        }
        return {
            value: this.fn(result.value, this._index++),
            done: false
        };
    }
    async nextAsync() {
        let result = await this.stream.nextAsync();
        if (result.done) {
            //* skipped extra-object
            result.value = null;
            return result;
        }
        return {
            value: await this.fn(result.value, this._index++),
            done: false
        };
    }
    reset() {
        this._index = 0;
        return super.reset();
    }
}
exports.MapStream = MapStream;
class MapManyStream extends AlotProto_1.AlotProto {
    constructor(stream, fn, opts) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.opts = opts;
        this._index = -1;
        this._many = null;
        this._mapDfr = null;
        this._done = false;
        this.isAsync = stream.isAsync || opts && opts.async;
    }
    next() {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[++this._index];
            return { done: false, value: x };
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    }
    async nextAsync() {
        if (this._done === true) {
            return r_1.r_DONE;
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[++this._index];
            return { done: false, value: x };
        }
        if (this._mapDfr == null) {
            this._doMapAsync();
        }
        await this._mapDfr;
        return this.nextAsync();
    }
    reset() {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return super.reset();
    }
    _doMapAsync() {
        return this._mapDfr = new Promise(async (resolve, reject) => {
            let result = await this.stream.next();
            if (result.done) {
                this._done = true;
                this._mapDfr = null;
                resolve(null);
                return;
            }
            this._many = await this.fn(result.value, result.index);
            this._index = -1;
            this._mapDfr = null;
            resolve(null);
        });
    }
}
exports.MapManyStream = MapManyStream;
//# sourceMappingURL=MapStream.js.map
//# sourceMappingURL=MapStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_MapStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_MapStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_MapStream, module.exports);
    } else {
        _src_streams_MapStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_TakeStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_TakeStream != null ? _src_streams_TakeStream : {};
    var module = { exports: exports };

    "use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeWhileStreamAsync = exports.TakeWhileStream = exports.TakeStream = void 0;
const AlotProto_1 = _src_AlotProto;
const deco_1 = _src_utils_deco;
const r_1 = _src_utils_r;
class TakeStream extends AlotProto_1.AlotProto {
    constructor(stream, _count) {
        super(stream);
        this.stream = stream;
        this._count = _count;
        this._took = 0;
    }
    next() {
        if (++this._took > this._count) {
            return { value: null, done: true };
        }
        return this.stream.next();
    }
    reset() {
        this._took = 0;
        return super.reset();
    }
}
exports.TakeStream = TakeStream;
class TakeWhileStream extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this._took = false;
    }
    next() {
        if (this._took === true) {
            return { done: true, value: null };
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        if (this.fn(result.value, result.index) === false) {
            this._took = true;
            return this.next();
        }
        return result;
    }
    reset() {
        this._took = false;
        return super.reset();
    }
}
exports.TakeWhileStream = TakeWhileStream;
class TakeWhileStreamAsync extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.isAsync = true;
        this._took = false;
        this.next = this.nextAsync;
    }
    async nextAsync() {
        if (this._took === true) {
            return r_1.r_DONE;
        }
        let result = await this.stream.next();
        if (result.done === true) {
            return result;
        }
        let b = await this.fn(result.value, result.index);
        if (Boolean(b) === false) {
            this._took = true;
            return r_1.r_DONE;
        }
        return result;
    }
    reset() {
        this._took = false;
        return super.reset();
    }
}
__decorate([
    deco_1.Deco.queued()
], TakeWhileStreamAsync.prototype, "nextAsync", null);
exports.TakeWhileStreamAsync = TakeWhileStreamAsync;
//# sourceMappingURL=TakeStream.js.map
//# sourceMappingURL=TakeStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_TakeStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_TakeStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_TakeStream, module.exports);
    } else {
        _src_streams_TakeStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SkipStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_SkipStream != null ? _src_streams_SkipStream : {};
    var module = { exports: exports };

    "use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipWhileStreamAsync = exports.SkipWhileStream = exports.SkipStream = void 0;
const AlotProto_1 = _src_AlotProto;
const deco_1 = _src_utils_deco;
class SkipStream extends AlotProto_1.AlotProto {
    constructor(stream, _count) {
        super(stream);
        this.stream = stream;
        this._count = _count;
        this._skipped = 0;
    }
    next() {
        while (++this._skipped <= this._count) {
            let skip = this.stream.next();
            if (skip.done) {
                return skip;
            }
            continue;
        }
        return this.stream.next();
    }
    reset() {
        this._skipped = 0;
        return super.reset();
    }
}
exports.SkipStream = SkipStream;
class SkipWhileStream extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this._skipped = false;
    }
    next() {
        while (this._skipped === false) {
            let result = this.stream.next();
            if (result.done) {
                return result;
            }
            if (this.fn(result.value, result.index)) {
                continue;
            }
            this._skipped = true;
            return result;
        }
        return this.stream.next();
    }
    reset() {
        this._skipped = false;
        return super.reset();
    }
}
exports.SkipWhileStream = SkipWhileStream;
class SkipWhileStreamAsync extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.isAsync = true;
        this._skipped = false;
        this.next = this.nextAsync;
    }
    // No matter how many streams do we have, ensure we call this no simultanously
    async nextAsync() {
        while (this._skipped === false) {
            let result = await this.stream.next();
            if (result.done === true) {
                return result;
            }
            let b = await this.fn(result.value, result.index);
            if (Boolean(b) === true) {
                continue;
            }
            this._skipped = true;
            return result;
        }
        return this.stream.next();
    }
    reset() {
        this._skipped = false;
        return super.reset();
    }
}
__decorate([
    deco_1.Deco.queued()
], SkipWhileStreamAsync.prototype, "nextAsync", null);
exports.SkipWhileStreamAsync = SkipWhileStreamAsync;
//# sourceMappingURL=SkipStream.js.map
//# sourceMappingURL=SkipStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_SkipStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_SkipStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_SkipStream, module.exports);
    } else {
        _src_streams_SkipStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_GroupStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_GroupStream != null ? _src_streams_GroupStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStream = void 0;
const AlotProto_1 = _src_AlotProto;
class GroupByStream extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.isAsync = false;
        this.groups = null;
        this.hash = null;
        this.index = -1;
    }
    next() {
        if (this.groups) {
            if (++this.index >= this.groups.length) {
                return { done: true, value: null };
            }
            return {
                done: false,
                index: this.index,
                value: this.groups[this.index]
            };
        }
        this.groups = [];
        this.hash = Object.create(null);
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                break;
            }
            let keyVal = this.fn(result.value, result.index);
            let key = String(keyVal);
            let arr = this.hash[key];
            if (arr == null) {
                arr = this.hash[key] = [];
                this.groups.push({
                    key: keyVal,
                    values: arr
                });
            }
            arr.push(result.value);
        }
        return this.next();
    }
    reset() {
        this.index = -1;
        return super.reset();
    }
}
exports.GroupByStream = GroupByStream;
//# sourceMappingURL=GroupStream.js.map
//# sourceMappingURL=GroupStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_GroupStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_GroupStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_GroupStream, module.exports);
    } else {
        _src_streams_GroupStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_DistinctStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_DistinctStream != null ? _src_streams_DistinctStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistinctByStream = void 0;
const AlotProto_1 = _src_AlotProto;
class DistinctByStream extends AlotProto_1.AlotProto {
    constructor(stream, fn = null) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this._track = new Track;
        this._index = -1;
    }
    next() {
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            let key = this.fn != null
                ? this.fn(result.value, result.index)
                : result.value;
            if (this._track.isUnique(key) === false) {
                continue;
            }
            return result;
        }
    }
    reset() {
        this._index = -1;
        this._track = new Track;
        return super.reset();
    }
}
exports.DistinctByStream = DistinctByStream;
class Track {
    constructor() {
        this._hash = Object.create(null);
    }
    isUnique(mix) {
        if (mix == null || typeof mix !== 'object') {
            if (mix in this._hash) {
                return false;
            }
            this._hash[mix] = 1;
            return true;
        }
        if (this._map == null) {
            this._map = new Map();
        }
        if (this._map.has(mix)) {
            return false;
        }
        this._map.set(mix, 1);
        return true;
    }
}
//# sourceMappingURL=DistinctStream.js.map
//# sourceMappingURL=DistinctStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_DistinctStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_DistinctStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_DistinctStream, module.exports);
    } else {
        _src_streams_DistinctStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForEachStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_ForEachStream != null ? _src_streams_ForEachStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForEachStream = void 0;
const AlotProto_1 = _src_AlotProto;
class ForEachStream extends AlotProto_1.AlotProto {
    constructor(stream, fn, opts) {
        super(stream, opts);
        this.stream = stream;
        this.fn = fn;
        this._index = 0;
    }
    next() {
        if (this.isAsync === true) {
            return this.nextAsync();
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this.fn(result.value, this._index++);
        return result;
    }
    async nextAsync() {
        let item = await this.stream.nextAsync();
        if (item.done) {
            //* skipped extra-object
            item.value = null;
            return item;
        }
        await this.fn(item.value, this._index++);
        return {
            value: item.value,
            done: false
        };
    }
    reset() {
        this._index = 0;
        return super.reset();
    }
}
exports.ForEachStream = ForEachStream;
//# sourceMappingURL=ForEachStream.js.map
//# sourceMappingURL=ForEachStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_ForEachStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_ForEachStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_ForEachStream, module.exports);
    } else {
        _src_streams_ForEachStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_arr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_arr != null ? _src_utils_arr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_last = void 0;
function arr_last(arr) {
    if (arr == null || arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}
exports.arr_last = arr_last;
//# sourceMappingURL=arr.js.map
//# sourceMappingURL=arr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_arr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_arr) && __isObj(module.exports)) {
        Object.assign(_src_utils_arr, module.exports);
    } else {
        _src_utils_arr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForkStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_ForkStream != null ? _src_streams_ForkStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForkStreamOuter = exports.ForkStreamInner = void 0;
const AlotProto_1 = _src_AlotProto;
const arr_1 = _src_utils_arr;
class ForkStreamInner extends AlotProto_1.AlotProto {
    constructor(stream, fn) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this._cached = [];
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        let last = (0, arr_1.arr_last)(this._cached);
        if (last?.done) {
            return last;
        }
        let result = this.stream.next();
        this._cached.push(result);
        return result;
    }
    async nextAsync() {
        let last = (0, arr_1.arr_last)(this._cached);
        if (last?.done) {
            return last;
        }
        let result = await this.stream.nextAsync();
        this._cached.push(result);
        return result;
    }
    reset() {
        this._cached = [];
        return super.reset();
    }
    pluck() {
        return this.fn(this);
    }
    has(i) {
        return i < this._cached.length;
    }
    get(i) {
        return this._cached[i];
    }
}
exports.ForkStreamInner = ForkStreamInner;
class ForkStreamOuter extends AlotProto_1.AlotProto {
    constructor(stream, inner) {
        super(stream);
        this.stream = stream;
        this.inner = inner;
        this._index = 0;
        this._plucked = false;
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._plucked === false) {
            this._plucked = true;
            this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            let result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.next();
    }
    async nextAsync() {
        if (this._plucked === false) {
            this._plucked = true;
            await this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            let result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.nextAsync();
    }
    reset() {
        this._index = 0;
        return super.reset();
    }
}
exports.ForkStreamOuter = ForkStreamOuter;
//# sourceMappingURL=ForkStream.js.map
//# sourceMappingURL=ForkStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_ForkStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_ForkStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_ForkStream, module.exports);
    } else {
        _src_streams_ForkStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_obj != null ? _src_utils_obj : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_getProperty = void 0;
function obj_getProperty(obj_, path) {
    if (obj_ == null) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return obj_[path];
    }
    let obj = obj_;
    let chain = path.split('.');
    let imax = chain.length;
    let i = -1;
    while (obj != null && ++i < imax) {
        let key = chain[i];
        obj = obj[key];
    }
    return obj;
}
exports.obj_getProperty = obj_getProperty;
//# sourceMappingURL=obj.js.map
//# sourceMappingURL=obj.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_obj === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_obj) && __isObj(module.exports)) {
        Object.assign(_src_utils_obj, module.exports);
    } else {
        _src_utils_obj = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SortedStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_SortedStream != null ? _src_streams_SortedStream : {};
    var module = { exports: exports };

    "use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByLocalCompareStream = exports.SortByStream = void 0;
const AlotProto_1 = _src_AlotProto;
const obj_1 = _src_utils_obj;
const r_1 = _src_utils_r;
const deco_1 = _src_utils_deco;
class SortByStream extends AlotProto_1.AlotProto {
    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    constructor(stream, mix, direction = 'asc', isAsync) {
        super(stream);
        this.stream = stream;
        this.direction = direction;
        this.isAsync = false;
        this.arr = null;
        this.index = -1;
        if (typeof mix === 'string') {
            let path = mix;
            this.sortByFn = x => (0, obj_1.obj_getProperty)(x, path);
        }
        else {
            this.sortByFn = mix;
        }
        this.isAsync = isAsync ?? this.stream.isAsync;
    }
    next() {
        if (this.arr != null) {
            return Utils.next(++this.index, this.arr);
        }
        const arr = Utils.bufferSync(this.stream);
        this.arr = Utils.sort(arr, this.sortByFn, this.direction);
        return this.next();
    }
    async nextAsync() {
        if (this.arr != null) {
            return Utils.next(++this.index, this.arr);
        }
        const arr = await Utils.bufferAsync(this.stream);
        this.arr = Utils.sort(arr, this.sortByFn, this.direction);
        return this.next();
    }
    reset() {
        this.index = -1;
        this.arr = null;
        return super.reset();
    }
}
__decorate([
    deco_1.Deco.queued()
], SortByStream.prototype, "nextAsync", null);
exports.SortByStream = SortByStream;
class SortByLocalCompareStream extends AlotProto_1.AlotProto {
    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    constructor(stream, getValue, direction = 'asc', params) {
        super(stream);
        this.stream = stream;
        this.getValue = getValue;
        this.direction = direction;
        this.params = params;
        this.isAsync = false;
        this.arr = null;
        this.index = -1;
    }
    next() {
        if (this.arr) {
            if (++this.index >= this.arr.length) {
                return { done: true, value: null };
            }
            return {
                done: false,
                index: this.index,
                value: this.arr[this.index]
            };
        }
        this.arr = [];
        while (true) {
            let result = this.stream.next();
            if (result.done === true) {
                break;
            }
            this.arr.push(result.value);
        }
        let mapped = [];
        for (let i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i,
                key: this.getValue(this.arr[i], i),
                val: this.arr[i]
            };
        }
        ;
        mapped.sort((a, b) => {
            let x = a.key.localeCompare(b.key, ...this.params);
            if (this.direction === 'asc') {
                return x;
            }
            return x * -1;
        });
        let result = [];
        for (let i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        this.arr = result;
        return this.next();
    }
    reset() {
        this.index = -1;
        this.arr = null;
        return super.reset();
    }
}
exports.SortByLocalCompareStream = SortByLocalCompareStream;
var Utils;
(function (Utils) {
    function next(index, arr) {
        if (index >= arr.length) {
            return r_1.r_DONE;
        }
        return {
            done: false,
            index: index,
            value: arr[index]
        };
    }
    Utils.next = next;
    async function bufferAsync(stream) {
        const arr = [];
        while (true) {
            let result = await stream.nextAsync();
            if (result.done === true) {
                break;
            }
            arr.push(result.value);
        }
        return arr;
    }
    Utils.bufferAsync = bufferAsync;
    function bufferSync(stream) {
        const arr = [];
        while (true) {
            let result = stream.next();
            if (result.done === true) {
                break;
            }
            arr.push(result.value);
        }
        return arr;
    }
    Utils.bufferSync = bufferSync;
    function sort(arr, getValueFn, direction) {
        let mapped = [];
        for (let i = 0; i < arr.length; i++) {
            mapped[i] = {
                i,
                key: getValueFn(arr[i], i),
                val: arr[i]
            };
        }
        ;
        mapped.sort((a, b) => {
            if (a.key === b.key) {
                return 0;
            }
            if (a.key < b.key) {
                return direction === 'asc' ? -1 : 1;
            }
            return direction === 'asc' ? 1 : -1;
        });
        let result = [];
        for (let i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        return result;
    }
    Utils.sort = sort;
})(Utils || (Utils = {}));
//# sourceMappingURL=SortedStream.js.map
//# sourceMappingURL=SortedStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_SortedStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_SortedStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_SortedStream, module.exports);
    } else {
        _src_streams_SortedStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_JoinStream;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_JoinStream != null ? _src_streams_JoinStream : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapManyStream = exports.JoinStream = void 0;
const AlotProto_1 = _src_AlotProto;
const r_1 = _src_utils_r;
class JoinStream extends AlotProto_1.AlotProto {
    constructor(stream, inner, fnKeyOuter, fnKeyInner, joinFn, joinType, opts) {
        super(stream, opts);
        this.stream = stream;
        this.inner = inner;
        this.fnKeyOuter = fnKeyOuter;
        this.fnKeyInner = fnKeyInner;
        this.joinFn = joinFn;
        this.joinType = joinType;
        this._index = 0;
        this._innerExtra = null;
        this._innerExtraIndex = 0;
        this._innerHash = null;
        this._innerHashTook = Object.create(null);
    }
    next() {
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._innerExtra != null) {
            if (this._innerExtraIndex >= this._innerExtra.length) {
                return r_1.r_DONE;
            }
            let x = this._innerExtra[this._innerExtraIndex++];
            let result = this.joinFn(null, x);
            return { done: false, value: result, index: this._index++ };
        }
        ;
        let result = this.stream.next();
        if (result.done) {
            if (this.joinType === 'inner') {
                return r_1.r_DONE;
            }
            this._innerExtra = this.inner.filter(x => this.fnKeyInner(x) in this._innerHashTook === false);
            return this.next();
        }
        if (this._innerHash == null) {
            this._ensureInnerHash();
        }
        let outerKey = this.fnKeyOuter(result.value);
        let innerVal = this._innerHash[outerKey];
        if (innerVal == null) {
            if (this.joinType === 'inner') {
                return this.next();
            }
        }
        else {
            this._innerHashTook[outerKey] = 1;
        }
        let val = this.joinFn(result.value, innerVal);
        return {
            value: val,
            done: false,
            index: ++this._index
        };
    }
    async nextAsync() {
        throw new Error('Joins on async stream are not supported yet');
        return null;
    }
    reset() {
        this._index = 0;
        this._innerExtra = null;
        this._innerExtraIndex = 0;
        this._innerHash = null;
        this._innerHashTook = Object.create(null);
        return super.reset();
    }
    _ensureInnerHash() {
        let hash = Object.create(null);
        for (let i = 0; i < this.inner.length; i++) {
            let x = this.inner[i];
            let key = this.fnKeyInner(x);
            // @TOOD if should check if key already exists
            hash[key] = x;
        }
        this._innerHash = hash;
    }
}
exports.JoinStream = JoinStream;
class MapManyStream extends AlotProto_1.AlotProto {
    constructor(stream, fn, opts) {
        super(stream);
        this.stream = stream;
        this.fn = fn;
        this.opts = opts;
        this._index = -1;
        this._many = null;
        this._mapDfr = null;
        this._done = false;
        this.isAsync = stream.isAsync || opts && opts.async;
    }
    next() {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[++this._index];
            return { done: false, value: x };
        }
        let result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    }
    async nextAsync() {
        if (this._done === true) {
            return r_1.r_DONE;
        }
        if (this._many != null && this._index < this._many.length - 1) {
            let x = this._many[++this._index];
            return { done: false, value: x };
        }
        if (this._mapDfr == null) {
            this._doMapAsync();
        }
        await this._mapDfr;
        return this.nextAsync();
    }
    reset() {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return super.reset();
    }
    _doMapAsync() {
        return this._mapDfr = new Promise(async (resolve, reject) => {
            let result = await this.stream.next();
            if (result.done) {
                this._done = true;
                resolve(null);
            }
            this._many = await this.fn(result.value, result.index);
            this._index = -1;
            this._mapDfr = null;
            resolve(null);
        });
    }
}
exports.MapManyStream = MapManyStream;
//# sourceMappingURL=JoinStream.js.map
//# sourceMappingURL=JoinStream.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_JoinStream === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_JoinStream) && __isObj(module.exports)) {
        Object.assign(_src_streams_JoinStream, module.exports);
    } else {
        _src_streams_JoinStream = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_exports;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_streams_exports != null ? _src_streams_exports : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinStream = exports.SortByLocalCompareStream = exports.SortMethod = exports.SortByStream = exports.ForkStreamOuter = exports.ForkStreamInner = exports.ForEachMethod = exports.ForEachStream = exports.DistinctByStream = exports.DistinctByKeyFn = exports.GroupByStream = exports.GroupByKeyFn = exports.SkipWhileStreamAsync = exports.SkipWhileStream = exports.SkipWhileMethodAsync = exports.SkipWhileMethod = exports.SkipStream = exports.TakeWhileMethodAsync = exports.TakeWhileMethod = exports.TakeWhileStreamAsync = exports.TakeWhileStream = exports.TakeStream = exports.MethodMapMany = exports.MethodMap = exports.MapManyStream = exports.MapStream = exports.FilterStreamAsync = exports.FilterStream = exports.AlotStreamIterationResult = exports.IAlotStream = void 0;
var IAlotStream_1 = _src_streams_IAlotStream;
Object.defineProperty(exports, "IAlotStream", { enumerable: true, get: function () { return IAlotStream_1.IAlotStream; } });
Object.defineProperty(exports, "AlotStreamIterationResult", { enumerable: true, get: function () { return IAlotStream_1.AlotStreamIterationResult; } });
var FilterStream_1 = _src_streams_FilterStream;
Object.defineProperty(exports, "FilterStream", { enumerable: true, get: function () { return FilterStream_1.FilterStream; } });
Object.defineProperty(exports, "FilterStreamAsync", { enumerable: true, get: function () { return FilterStream_1.FilterStreamAsync; } });
var MapStream_1 = _src_streams_MapStream;
Object.defineProperty(exports, "MapStream", { enumerable: true, get: function () { return MapStream_1.MapStream; } });
Object.defineProperty(exports, "MapManyStream", { enumerable: true, get: function () { return MapStream_1.MapManyStream; } });
Object.defineProperty(exports, "MethodMap", { enumerable: true, get: function () { return MapStream_1.MethodMap; } });
Object.defineProperty(exports, "MethodMapMany", { enumerable: true, get: function () { return MapStream_1.MethodMapMany; } });
var TakeStream_1 = _src_streams_TakeStream;
Object.defineProperty(exports, "TakeStream", { enumerable: true, get: function () { return TakeStream_1.TakeStream; } });
Object.defineProperty(exports, "TakeWhileStream", { enumerable: true, get: function () { return TakeStream_1.TakeWhileStream; } });
Object.defineProperty(exports, "TakeWhileStreamAsync", { enumerable: true, get: function () { return TakeStream_1.TakeWhileStreamAsync; } });
Object.defineProperty(exports, "TakeWhileMethod", { enumerable: true, get: function () { return TakeStream_1.TakeWhileMethod; } });
Object.defineProperty(exports, "TakeWhileMethodAsync", { enumerable: true, get: function () { return TakeStream_1.TakeWhileMethodAsync; } });
var SkipStream_1 = _src_streams_SkipStream;
Object.defineProperty(exports, "SkipStream", { enumerable: true, get: function () { return SkipStream_1.SkipStream; } });
Object.defineProperty(exports, "SkipWhileMethod", { enumerable: true, get: function () { return SkipStream_1.SkipWhileMethod; } });
Object.defineProperty(exports, "SkipWhileMethodAsync", { enumerable: true, get: function () { return SkipStream_1.SkipWhileMethodAsync; } });
Object.defineProperty(exports, "SkipWhileStream", { enumerable: true, get: function () { return SkipStream_1.SkipWhileStream; } });
Object.defineProperty(exports, "SkipWhileStreamAsync", { enumerable: true, get: function () { return SkipStream_1.SkipWhileStreamAsync; } });
var GroupStream_1 = _src_streams_GroupStream;
Object.defineProperty(exports, "GroupByKeyFn", { enumerable: true, get: function () { return GroupStream_1.GroupByKeyFn; } });
Object.defineProperty(exports, "GroupByStream", { enumerable: true, get: function () { return GroupStream_1.GroupByStream; } });
var DistinctStream_1 = _src_streams_DistinctStream;
Object.defineProperty(exports, "DistinctByKeyFn", { enumerable: true, get: function () { return DistinctStream_1.DistinctByKeyFn; } });
Object.defineProperty(exports, "DistinctByStream", { enumerable: true, get: function () { return DistinctStream_1.DistinctByStream; } });
var ForEachStream_1 = _src_streams_ForEachStream;
Object.defineProperty(exports, "ForEachStream", { enumerable: true, get: function () { return ForEachStream_1.ForEachStream; } });
Object.defineProperty(exports, "ForEachMethod", { enumerable: true, get: function () { return ForEachStream_1.ForEachMethod; } });
var ForkStream_1 = _src_streams_ForkStream;
Object.defineProperty(exports, "ForkStreamInner", { enumerable: true, get: function () { return ForkStream_1.ForkStreamInner; } });
Object.defineProperty(exports, "ForkStreamOuter", { enumerable: true, get: function () { return ForkStream_1.ForkStreamOuter; } });
var SortedStream_1 = _src_streams_SortedStream;
Object.defineProperty(exports, "SortByStream", { enumerable: true, get: function () { return SortedStream_1.SortByStream; } });
Object.defineProperty(exports, "SortMethod", { enumerable: true, get: function () { return SortedStream_1.SortMethod; } });
Object.defineProperty(exports, "SortByLocalCompareStream", { enumerable: true, get: function () { return SortedStream_1.SortByLocalCompareStream; } });
var JoinStream_1 = _src_streams_JoinStream;
Object.defineProperty(exports, "JoinStream", { enumerable: true, get: function () { return JoinStream_1.JoinStream; } });
//# sourceMappingURL=exports.js.map
//# sourceMappingURL=exports.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_streams_exports === module.exports) {
        // do nothing if
    } else if (__isObj(_src_streams_exports) && __isObj(module.exports)) {
        Object.assign(_src_streams_exports, module.exports);
    } else {
        _src_streams_exports = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_classify;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_classify != null ? _src_utils_classify : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnPrototypeAlias = exports.Classify = void 0;
function Classify(Ctor) {
    const Class = function (...args) {
        return new Ctor(...args);
    };
    Class.prototype = Ctor.prototype;
    forIn(Ctor, key => {
        if (key in Class === false) {
            Class[key] = Ctor[key];
        }
    });
    return Class;
}
exports.Classify = Classify;
function FnPrototypeAlias(Ctor) {
    Ctor.fn = Ctor.prototype;
    return Ctor;
}
exports.FnPrototypeAlias = FnPrototypeAlias;
function forIn(obj, cb) {
    let hash = Object.create(null);
    let cursor = obj;
    do {
        let props = Object.getOwnPropertyNames(cursor);
        for (let i = 0; i < props.length; i++) {
            let key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }
    } while (cursor = Object.getPrototypeOf(cursor));
}
//# sourceMappingURL=classify.js.map
//# sourceMappingURL=classify.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_classify === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_classify) && __isObj(module.exports)) {
        Object.assign(_src_utils_classify, module.exports);
    } else {
        _src_utils_classify = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_alot;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_alot != null ? _src_alot : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayStream = exports.Alot = void 0;
_src_streams_exports;
const AlotProto_1 = _src_AlotProto;
class Alot extends AlotProto_1.AlotProto {
    constructor(array, meta) {
        super(new ArrayStream(array));
        this.array = array;
        this.meta = meta;
    }
    static fromObject(obj) {
        let arr = Object.keys(obj).map(key => {
            return { key, value: obj[key] };
        });
        return new Alot(arr);
    }
    static fromRange(start, endExcluded) {
        let arr = new Array(endExcluded - start);
        for (let i = start; i < endExcluded; i++) {
            arr[i - start] = i;
        }
        return new Alot(arr);
    }
}
exports.Alot = Alot;
class ArrayStream {
    constructor(array) {
        this.array = array;
        this.isAsync = false;
        this.index = -1;
    }
    next() {
        while (++this.index < this.array.length) {
            let x = this.array[this.index];
            return { value: x, done: false, index: this.index };
        }
        return { value: null, done: true, index: this.index };
    }
    async nextAsync() {
        return this.next();
    }
    reset() {
        this.index = -1;
        return this;
    }
}
exports.ArrayStream = ArrayStream;
//# sourceMappingURL=alot.js.map
//# sourceMappingURL=alot.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_alot === module.exports) {
        // do nothing if
    } else if (__isObj(_src_alot) && __isObj(module.exports)) {
        Object.assign(_src_alot, module.exports);
    } else {
        _src_alot = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
_src_streams_exports;
const classify_1 = _src_utils_classify;
const alot_1 = _src_alot;
let Alot = class Alot extends alot_1.Alot {
};
Alot.Alot = alot_1.Alot;
Alot.default = alot_1.Alot;
Alot = __decorate([
    classify_1.Classify
], Alot);
// Reapply already decorated Alot to default.
Alot.default = Alot;
Alot.Alot = Alot;
const alot = Alot;
module.exports = alot;
//# sourceMappingURL=export.js.map
//# sourceMappingURL=export.ts.map

}));

// end:source ./UMD.js
