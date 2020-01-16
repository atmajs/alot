
// source ./UMD.js
(function(factory){
	
	var _name = 'alot',
		_global = typeof window === 'undefined' ? global : window,
		_module = {
			exports: {}
		};

	factory(_module, _module.exports, _global);

	if (typeof define === 'function' && define.amd) {
        define([], function () {
        	return _module.exports;
        });
        return;
    } 
    if (typeof module === 'object' && module.exports) {
    	module.exports = _module.exports;
    	return;
    }

	if (_name) {
		_global[_name] = _module.exports;
	}

}(function(module, exports, global){
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
var _src_utils_obj = {};
var _src_utils_r = {};

// source ./ModuleSimplified.js
var _src_streams_IAlotStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_IAlotStream) && isObject(module.exports)) {
		Object.assign(_src_streams_IAlotStream, module.exports);
		return;
	}
	_src_streams_IAlotStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
	var exports = {};
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

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_node_modules_atma_utils_lib_utils) && isObject(module.exports)) {
		Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
		return;
	}
	_node_modules_atma_utils_lib_utils = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Pool;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atma_utils_1 = _node_modules_atma_utils_lib_utils;
var AsyncPool = /** @class */ (function () {
    function AsyncPool(stream, threads, errors) {
        if (threads === void 0) { threads = 2; }
        if (errors === void 0) { errors = 'reject'; }
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
    AsyncPool.prototype.start = function () {
        var _this = this;
        setImmediate(function () { return _this.tick(); });
        return this.promise;
    };
    AsyncPool.prototype.tick = function () {
        while (this.done !== true && this.queue.length < this.threads) {
            var index = ++this.index;
            var promise = this.stream.nextAsync();
            this.waitFor(promise, index);
        }
        if (this.queue.length === 0 && this.resolved !== true) {
            this.resolved = true;
            this.promise.resolve(this.results);
        }
    };
    AsyncPool.prototype.waitFor = function (promise, index) {
        var _this = this;
        this.queue.push(promise);
        promise.then(function (result) {
            setImmediate(function () { return _this.continueFor(promise, index, null, result); });
        }, function (error) {
            setImmediate(function () { return _this.continueFor(promise, index, error, null); });
        });
    };
    AsyncPool.prototype.continueFor = function (promise, index, error, result) {
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
                result = { value: error, index: index };
            }
        }
        if (result != null) {
            if (result.done === true) {
                this.done = true;
            }
            else {
                var i_1 = result.index;
                if (i_1 == null) {
                    i_1 = index;
                }
                this.results[index] = result.value;
            }
        }
        var i = this.queue.indexOf(promise);
        this.queue.splice(i, 1);
        this.tick();
    };
    return AsyncPool;
}());
exports.AsyncPool = AsyncPool;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_async_Pool) && isObject(module.exports)) {
		Object.assign(_src_async_Pool, module.exports);
		return;
	}
	_src_async_Pool = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_Aggregation;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Aggregation;
(function (Aggregation) {
    function getMinMaxBy(stream, getFn, compare) {
        var out = null;
        stream.reset();
        if (stream.isAsync) {
            return getMinMaxByAsync(stream, getFn, compare);
        }
        var i = 0;
        while (true) {
            var entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            var val = getFn(entry.value, i++);
            if (val == null) {
                continue;
            }
            if (out == null) {
                out = val;
                continue;
            }
            if (compare === 'max' && out < val) {
                out = val;
            }
            if (compare === 'min' && out > val) {
                out = val;
            }
        }
        return out;
    }
    Aggregation.getMinMaxBy = getMinMaxBy;
    function getMinMaxByAsync(stream, getFn, compare) {
        return __awaiter(this, void 0, void 0, function () {
            var out, i, entry, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        out = null;
                        stream.reset();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, stream.nextAsync()];
                    case 2:
                        entry = _a.sent();
                        if (entry == null || entry.done === true) {
                            return [3 /*break*/, 4];
                        }
                        return [4 /*yield*/, getFn(entry.value, i++)];
                    case 3:
                        val = _a.sent();
                        if (val == null) {
                            return [3 /*break*/, 1];
                        }
                        if (out == null) {
                            out = val;
                            return [3 /*break*/, 1];
                        }
                        if (compare === 'max' && out < val) {
                            out = val;
                        }
                        if (compare === 'min' && out > val) {
                            out = val;
                        }
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, out];
                }
            });
        });
    }
    Aggregation.getMinMaxByAsync = getMinMaxByAsync;
    function sum(stream, fn) {
        var _a;
        stream.reset();
        if (stream.isAsync) {
            return sumAsync(stream, fn);
        }
        var sum = 0;
        var i = 0;
        while (true) {
            var entry = stream.next();
            if (entry == null || entry.done === true) {
                break;
            }
            sum += (_a = fn(entry.value, i++), (_a !== null && _a !== void 0 ? _a : 0));
        }
        return sum;
    }
    Aggregation.sum = sum;
    function sumAsync(stream, fn) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var sum, i, entry, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        stream.reset();
                        sum = 0;
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, stream.nextAsync()];
                    case 2:
                        entry = _c.sent();
                        if (entry == null || entry.done === true) {
                            return [3 /*break*/, 4];
                        }
                        _b = sum;
                        return [4 /*yield*/, fn(entry.value, i++)];
                    case 3:
                        sum = _b + (_a = (_c.sent()), (_a !== null && _a !== void 0 ? _a : 0));
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, sum];
                }
            });
        });
    }
    Aggregation.sumAsync = sumAsync;
})(Aggregation = exports.Aggregation || (exports.Aggregation = {}));
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_Aggregation) && isObject(module.exports)) {
		Object.assign(_src_utils_Aggregation, module.exports);
		return;
	}
	_src_utils_Aggregation = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_AlotProto;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pool_1 = _src_async_Pool;
var Aggregation_1 = _src_utils_Aggregation;
var exports_1 = _src_streams_exports;
var AlotProto = /** @class */ (function () {
    function AlotProto(stream, opts) {
        var _a, _b;
        this.stream = stream;
        this.isAsync = false;
        this.isAsync = stream.isAsync || (_b = (_a = opts) === null || _a === void 0 ? void 0 : _a.async, (_b !== null && _b !== void 0 ? _b : false));
    }
    AlotProto.prototype.next = function () {
        return this.stream.next();
    };
    AlotProto.prototype.nextAsync = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next()];
            });
        });
    };
    AlotProto.prototype.reset = function () {
        this.stream.reset();
        return this;
    };
    AlotProto.prototype.filter = function (fn) {
        return new exports_1.FilterStream(this, fn);
    };
    AlotProto.prototype.filterAsync = function (fn) {
        return new exports_1.FilterStreamAsync(this, fn);
    };
    AlotProto.prototype.map = function (fn) {
        return new exports_1.MapStream(this, fn);
    };
    AlotProto.prototype.mapAsync = function (fn, meta) {
        return new exports_1.MapStream(this, fn, { async: true });
    };
    AlotProto.prototype.mapMany = function (fn) {
        return new exports_1.MapManyStream(this, fn);
    };
    AlotProto.prototype.mapManyAsync = function (fn) {
        return new exports_1.MapManyStream(this, fn, { async: true });
    };
    AlotProto.prototype.forEach = function (fn) {
        return new exports_1.ForEachStream(this, fn);
    };
    AlotProto.prototype.forEachAsync = function (fn) {
        return new exports_1.ForEachStream(this, fn, { async: true });
    };
    AlotProto.prototype.take = function (count) {
        return new exports_1.TakeStream(this, count);
    };
    AlotProto.prototype.takeWhile = function (fn) {
        return new exports_1.TakeWhileStream(this, fn);
    };
    AlotProto.prototype.skip = function (count) {
        return new exports_1.SkipStream(this, count);
    };
    AlotProto.prototype.skipWhile = function (fn) {
        return new exports_1.SkipWhileStream(this, fn);
    };
    AlotProto.prototype.groupBy = function (fn) {
        return new exports_1.GroupByStream(this, fn);
    };
    /** Join Left Inner  */
    AlotProto.prototype.join = function (inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'inner');
    };
    /** Join Full Outer  */
    AlotProto.prototype.joinOuter = function (inner, getKey, getForeignKey, joinFn) {
        return new exports_1.JoinStream(this, inner, getKey, getForeignKey, joinFn, 'outer');
    };
    AlotProto.prototype.distinctBy = function (fn) {
        return new exports_1.DistinctByStream(this, fn);
    };
    AlotProto.prototype.distinct = function () {
        return new exports_1.DistinctByStream(this);
    };
    AlotProto.prototype.sortBy = function (mix, direction) {
        if (direction === void 0) { direction = 'asc'; }
        return new exports_1.SortByStream(this, mix, direction);
    };
    AlotProto.prototype.fork = function (fn) {
        var inner = new exports_1.ForkStreamInner(this, fn);
        var outer = new exports_1.ForkStreamOuter(this, inner);
        return outer;
    };
    AlotProto.prototype.toDictionary = function (keyFn, valFn) {
        this.reset();
        var hash = Object.create(null);
        while (true) {
            var x = this.next();
            if (x.done) {
                return hash;
            }
            var key = keyFn(x.value);
            hash[key] = valFn ? valFn(x.value) : x.value;
        }
    };
    AlotProto.prototype.toDictionaryAsync = function (keyFn, valFn) {
        return __awaiter(this, void 0, Promise, function () {
            var hash, x, key, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.reset();
                        hash = Object.create(null);
                        _d.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.nextAsync()];
                    case 2:
                        x = _d.sent();
                        if (x.done) {
                            return [2 /*return*/, hash];
                        }
                        return [4 /*yield*/, keyFn(x.value)];
                    case 3:
                        key = _d.sent();
                        _a = hash;
                        _b = key;
                        if (!valFn) return [3 /*break*/, 5];
                        return [4 /*yield*/, valFn(x.value)];
                    case 4:
                        _c = _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _c = x.value;
                        _d.label = 6;
                    case 6:
                        _a[_b] = _c;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AlotProto.prototype.toArray = function () {
        this.reset();
        var out = [];
        while (true) {
            var result = this.next();
            if (result.done === true) {
                break;
            }
            out.push(result.value);
        }
        return out;
    };
    AlotProto.prototype.toArrayAsync = function (meta) {
        if (meta === void 0) { meta = { threads: 4, errors: 'reject' }; }
        this.reset();
        var pool = new Pool_1.AsyncPool(this, meta.threads, meta.errors);
        return pool.start();
    };
    AlotProto.prototype.first = function (matcher) {
        this.reset();
        var i = 0;
        while (true) {
            var entry = this.next();
            if (entry == null || entry.done === true) {
                break;
            }
            if (matcher == null || matcher(entry.value, i++)) {
                return entry.value;
            }
        }
        return null;
    };
    AlotProto.prototype.find = function (matcher) {
        return this.first(matcher);
    };
    AlotProto.prototype.sum = function (getVal) {
        return Aggregation_1.Aggregation.sum(this, getVal);
    };
    AlotProto.prototype.sumAsync = function (getVal) {
        return Aggregation_1.Aggregation.sumAsync(this, getVal);
    };
    AlotProto.prototype.max = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxBy(this, fn, 'max');
    };
    AlotProto.prototype.maxAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxByAsync(this, fn, 'max');
    };
    AlotProto.prototype.min = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxBy(this, fn, 'min');
    };
    AlotProto.prototype.minAsync = function (fn) {
        return Aggregation_1.Aggregation.getMinMaxByAsync(this, fn, 'min');
    };
    return AlotProto;
}());
exports.AlotProto = AlotProto;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_AlotProto) && isObject(module.exports)) {
		Object.assign(_src_AlotProto, module.exports);
		return;
	}
	_src_AlotProto = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_async_Deferred;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.isResolved = false;
        this.isRejected = false;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolveFn = resolve;
            _this.rejectFn = reject;
            if (_this.isResolved === true) {
                resolve(_this.resolvedArg);
            }
            if (_this.isRejected === true) {
                reject(_this.rejectedArg);
            }
        });
    }
    Deferred.prototype.resolve = function (arg) {
        if (this.resolveFn) {
            this.resolveFn(arg);
            return;
        }
        this.isResolved = true;
        this.resolvedArg = arg;
    };
    Deferred.prototype.reject = function (arg) {
        if (this.rejectFn) {
            this.rejectFn(arg);
            return;
        }
        this.isRejected = true;
        this.rejectedArg = arg;
    };
    Deferred.prototype.then = function (fnA, fnB) {
        this.promise.then(fnA, fnB);
    };
    return Deferred;
}());
exports.Deferred = Deferred;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_async_Deferred) && isObject(module.exports)) {
		Object.assign(_src_async_Deferred, module.exports);
		return;
	}
	_src_async_Deferred = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_deco;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deferred_1 = _src_async_Deferred;
exports.Deco = {
    queued: function (opts) {
        if (opts === void 0) { opts = null; }
        return function (target, propertyKey, descriptor) {
            var viaProperty = descriptor == null;
            var fn = viaProperty ? target[propertyKey] : descriptor.value;
            var queue = [];
            var busy = false;
            var resultFn = function () {
                var wrapped = Queued.prepair(fn, this);
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
                var x = queue.shift();
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
var Queued = {
    prepair: function (fn, ctx) {
        var dfr = new Deferred_1.Deferred;
        return {
            promise: dfr,
            run: function () {
                var result = fn.apply(ctx, arguments);
                if ('then' in result === false) {
                    dfr.resolve(result);
                }
                else {
                    result.then(function (_result) {
                        dfr.resolve(_result);
                    }, function (_error) {
                        dfr.reject(_error);
                    });
                }
                return result;
            },
            always: function (fn) {
                dfr.then(fn, fn);
            }
        };
    }
};
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_deco) && isObject(module.exports)) {
		Object.assign(_src_utils_deco, module.exports);
		return;
	}
	_src_utils_deco = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_FilterStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var deco_1 = _src_utils_deco;
var FilterStream = /** @class */ (function (_super) {
    __extends(FilterStream, _super);
    function FilterStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        return _this;
    }
    FilterStream.prototype.next = function () {
        while (true) {
            var result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            var b = this.fn(result.value, result.index);
            if (Boolean(b) === false) {
                continue;
            }
            return result;
        }
    };
    return FilterStream;
}(AlotProto_1.AlotProto));
exports.FilterStream = FilterStream;
var FilterStreamAsync = /** @class */ (function (_super) {
    __extends(FilterStreamAsync, _super);
    function FilterStreamAsync(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = true;
        _this._index = -1;
        _this.next = _this.nextAsync;
        return _this;
    }
    FilterStreamAsync.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, result, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = ++this._index;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.stream.next()];
                    case 2:
                        result = _a.sent();
                        if (result.done === true) {
                            return [2 /*return*/, result];
                        }
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 3:
                        b = _a.sent();
                        if (Boolean(b) === false) {
                            return [3 /*break*/, 1];
                        }
                        result.index = i;
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FilterStreamAsync.prototype.reset = function () {
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    FilterStreamAsync.prototype.toArrayAsync = function (meta) {
        if (meta === void 0) { meta = { threads: 4 }; }
        return __awaiter(this, void 0, Promise, function () {
            var arr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        return [4 /*yield*/, this.mapAsync(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                var flag;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fn(item, i)];
                                        case 1:
                                            flag = _a.sent();
                                            return [2 /*return*/, {
                                                    value: item,
                                                    flag: flag
                                                }];
                                    }
                                });
                            }); }, meta).toArrayAsync()];
                    case 1:
                        arr = _a.sent();
                        return [2 /*return*/, arr.filter(function (x) { return x.flag; }).map(function (x) { return x.value; })];
                }
            });
        });
    };
    __decorate([
        deco_1.Deco.queued()
    ], FilterStreamAsync.prototype, "nextAsync", null);
    return FilterStreamAsync;
}(AlotProto_1.AlotProto));
exports.FilterStreamAsync = FilterStreamAsync;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_FilterStream) && isObject(module.exports)) {
		Object.assign(_src_streams_FilterStream, module.exports);
		return;
	}
	_src_streams_FilterStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_r;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r_DONE = { done: true, value: null };
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_r) && isObject(module.exports)) {
		Object.assign(_src_utils_r, module.exports);
		return;
	}
	_src_utils_r = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_MapStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var r_1 = _src_utils_r;
var MapStream = /** @class */ (function (_super) {
    __extends(MapStream, _super);
    function MapStream(stream, fn, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._index = 0;
        return _this;
    }
    MapStream.prototype.next = function () {
        if (this.isAsync) {
            return this.nextAsync();
        }
        var result = this.stream.next();
        if (result.done) {
            return { value: null, done: true };
        }
        return {
            value: this.fn(result.value, this._index++),
            done: false
        };
    };
    MapStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            //* skipped extra-object
                            result.value = null;
                            return [2 /*return*/, result];
                        }
                        _a = {};
                        return [4 /*yield*/, this.fn(result.value, this._index++)];
                    case 2: return [2 /*return*/, (_a.value = _b.sent(),
                            _a.done = false,
                            _a)];
                }
            });
        });
    };
    MapStream.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return MapStream;
}(AlotProto_1.AlotProto));
exports.MapStream = MapStream;
var MapManyStream = /** @class */ (function (_super) {
    __extends(MapManyStream, _super);
    function MapManyStream(stream, fn, opts) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.opts = opts;
        _this._index = -1;
        _this._many = null;
        _this._mapDfr = null;
        _this._done = false;
        _this.isAsync = stream.isAsync || opts && opts.async;
        return _this;
    }
    MapManyStream.prototype.next = function () {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            var x = this._many[++this._index];
            return { done: false, value: x };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    };
    MapManyStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._done === true) {
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        if (this._many != null && this._index < this._many.length - 1) {
                            x = this._many[++this._index];
                            return [2 /*return*/, { done: false, value: x }];
                        }
                        if (this._mapDfr == null) {
                            this._doMapAsync();
                        }
                        return [4 /*yield*/, this._mapDfr];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.nextAsync()];
                }
            });
        });
    };
    MapManyStream.prototype.reset = function () {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    MapManyStream.prototype._doMapAsync = function () {
        var _this = this;
        return this._mapDfr = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            this._done = true;
                            this._mapDfr = null;
                            resolve();
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        _a._many = _b.sent();
                        this._index = -1;
                        this._mapDfr = null;
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return MapManyStream;
}(AlotProto_1.AlotProto));
exports.MapManyStream = MapManyStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_MapStream) && isObject(module.exports)) {
		Object.assign(_src_streams_MapStream, module.exports);
		return;
	}
	_src_streams_MapStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_TakeStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var TakeStream = /** @class */ (function (_super) {
    __extends(TakeStream, _super);
    function TakeStream(stream, _count) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this._count = _count;
        _this._took = 0;
        return _this;
    }
    TakeStream.prototype.next = function () {
        if (++this._took > this._count) {
            return { value: null, done: true };
        }
        return this.stream.next();
    };
    TakeStream.prototype.reset = function () {
        this._took = 0;
        return _super.prototype.reset.call(this);
    };
    return TakeStream;
}(AlotProto_1.AlotProto));
exports.TakeStream = TakeStream;
var TakeWhileStream = /** @class */ (function (_super) {
    __extends(TakeWhileStream, _super);
    function TakeWhileStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._took = false;
        return _this;
    }
    TakeWhileStream.prototype.next = function () {
        if (this._took === true) {
            return { done: true, value: null };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        if (this.fn(result.value) === false) {
            this._took = true;
            return this.next();
        }
        return result;
    };
    TakeWhileStream.prototype.reset = function () {
        this._took = false;
        return _super.prototype.reset.call(this);
    };
    return TakeWhileStream;
}(AlotProto_1.AlotProto));
exports.TakeWhileStream = TakeWhileStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_TakeStream) && isObject(module.exports)) {
		Object.assign(_src_streams_TakeStream, module.exports);
		return;
	}
	_src_streams_TakeStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SkipStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var SkipStream = /** @class */ (function (_super) {
    __extends(SkipStream, _super);
    function SkipStream(stream, _count) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this._count = _count;
        _this._skipped = 0;
        return _this;
    }
    SkipStream.prototype.next = function () {
        while (++this._skipped <= this._count) {
            var skip = this.stream.next();
            if (skip.done) {
                return skip;
            }
            continue;
        }
        return this.stream.next();
    };
    SkipStream.prototype.reset = function () {
        this._skipped = 0;
        return _super.prototype.reset.call(this);
    };
    return SkipStream;
}(AlotProto_1.AlotProto));
exports.SkipStream = SkipStream;
var SkipWhileStream = /** @class */ (function (_super) {
    __extends(SkipWhileStream, _super);
    function SkipWhileStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._skipped = false;
        return _this;
    }
    SkipWhileStream.prototype.next = function () {
        while (this._skipped === false) {
            var result = this.stream.next();
            if (result.done) {
                return result;
            }
            if (this.fn(result.value)) {
                continue;
            }
            this._skipped = true;
        }
        return this.stream.next();
    };
    SkipWhileStream.prototype.reset = function () {
        this._skipped = false;
        return _super.prototype.reset.call(this);
    };
    return SkipWhileStream;
}(AlotProto_1.AlotProto));
exports.SkipWhileStream = SkipWhileStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_SkipStream) && isObject(module.exports)) {
		Object.assign(_src_streams_SkipStream, module.exports);
		return;
	}
	_src_streams_SkipStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_GroupStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var GroupByStream = /** @class */ (function (_super) {
    __extends(GroupByStream, _super);
    function GroupByStream(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.isAsync = false;
        _this.groups = null;
        _this.hash = null;
        _this.index = -1;
        return _this;
    }
    GroupByStream.prototype.next = function () {
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
            var result = this.stream.next();
            if (result.done === true) {
                break;
            }
            var keyVal = this.fn(result.value, result.index);
            var key = String(keyVal);
            var arr = this.hash[key];
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
    };
    GroupByStream.prototype.reset = function () {
        this.index = -1;
        return _super.prototype.reset.call(this);
    };
    return GroupByStream;
}(AlotProto_1.AlotProto));
exports.GroupByStream = GroupByStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_GroupStream) && isObject(module.exports)) {
		Object.assign(_src_streams_GroupStream, module.exports);
		return;
	}
	_src_streams_GroupStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_DistinctStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var DistinctByStream = /** @class */ (function (_super) {
    __extends(DistinctByStream, _super);
    function DistinctByStream(stream, fn) {
        if (fn === void 0) { fn = null; }
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._track = new Track;
        _this._index = -1;
        return _this;
    }
    DistinctByStream.prototype.next = function () {
        while (true) {
            var result = this.stream.next();
            if (result.done === true) {
                return result;
            }
            var key = this.fn != null
                ? this.fn(result.value, result.index)
                : result.value;
            if (this._track.isUnique(key) === false) {
                continue;
            }
            return result;
        }
    };
    DistinctByStream.prototype.reset = function () {
        this._index = -1;
        this._track = new Track;
        return _super.prototype.reset.call(this);
    };
    return DistinctByStream;
}(AlotProto_1.AlotProto));
exports.DistinctByStream = DistinctByStream;
var Track = /** @class */ (function () {
    function Track() {
        this._hash = Object.create(null);
    }
    Track.prototype.isUnique = function (mix) {
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
    };
    return Track;
}());
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_DistinctStream) && isObject(module.exports)) {
		Object.assign(_src_streams_DistinctStream, module.exports);
		return;
	}
	_src_streams_DistinctStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForEachStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var ForEachStream = /** @class */ (function (_super) {
    __extends(ForEachStream, _super);
    function ForEachStream(stream, fn, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._index = 0;
        return _this;
    }
    ForEachStream.prototype.next = function () {
        if (this.isAsync === true) {
            return this.nextAsync();
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this.fn(result.value, this._index++);
        return result;
    };
    ForEachStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        item = _a.sent();
                        if (item.done) {
                            //* skipped extra-object
                            item.value = null;
                            return [2 /*return*/, item];
                        }
                        return [4 /*yield*/, this.fn(item.value, this._index++)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                value: item.value,
                                done: false
                            }];
                }
            });
        });
    };
    ForEachStream.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return ForEachStream;
}(AlotProto_1.AlotProto));
exports.ForEachStream = ForEachStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_ForEachStream) && isObject(module.exports)) {
		Object.assign(_src_streams_ForEachStream, module.exports);
		return;
	}
	_src_streams_ForEachStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_arr;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arr_last(arr) {
    if (arr == null || arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}
exports.arr_last = arr_last;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_arr) && isObject(module.exports)) {
		Object.assign(_src_utils_arr, module.exports);
		return;
	}
	_src_utils_arr = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_ForkStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var arr_1 = _src_utils_arr;
var ForkStreamInner = /** @class */ (function (_super) {
    __extends(ForkStreamInner, _super);
    function ForkStreamInner(stream, fn) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this._cached = [];
        return _this;
    }
    ForkStreamInner.prototype.next = function () {
        var _a;
        if (this.isAsync) {
            return this.nextAsync();
        }
        var last = arr_1.arr_last(this._cached);
        if ((_a = last) === null || _a === void 0 ? void 0 : _a.done) {
            return last;
        }
        var result = this.stream.next();
        this._cached.push(result);
        return result;
    };
    ForkStreamInner.prototype.nextAsync = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var last, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        last = arr_1.arr_last(this._cached);
                        if ((_a = last) === null || _a === void 0 ? void 0 : _a.done) {
                            return [2 /*return*/, last];
                        }
                        return [4 /*yield*/, this.stream.nextAsync()];
                    case 1:
                        result = _b.sent();
                        this._cached.push(result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ForkStreamInner.prototype.reset = function () {
        this._cached = [];
        return _super.prototype.reset.call(this);
    };
    ForkStreamInner.prototype.pluck = function () {
        return this.fn(this);
    };
    ForkStreamInner.prototype.has = function (i) {
        return i < this._cached.length;
    };
    ForkStreamInner.prototype.get = function (i) {
        return this._cached[i];
    };
    return ForkStreamInner;
}(AlotProto_1.AlotProto));
exports.ForkStreamInner = ForkStreamInner;
var ForkStreamOuter = /** @class */ (function (_super) {
    __extends(ForkStreamOuter, _super);
    function ForkStreamOuter(stream, inner) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.inner = inner;
        _this._index = 0;
        _this._plucked = false;
        return _this;
    }
    ForkStreamOuter.prototype.next = function () {
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._plucked === false) {
            this._plucked = true;
            this.inner.pluck();
        }
        if (this.inner.has(this._index)) {
            var result = this.inner.get(this._index);
            if (result.done !== true) {
                this._index++;
            }
            return result;
        }
        return this.stream.next();
    };
    ForkStreamOuter.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._plucked === false)) return [3 /*break*/, 2];
                        this._plucked = true;
                        return [4 /*yield*/, this.inner.pluck()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.inner.has(this._index)) {
                            result = this.inner.get(this._index);
                            if (result.done !== true) {
                                this._index++;
                            }
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, this.stream.nextAsync()];
                }
            });
        });
    };
    ForkStreamOuter.prototype.reset = function () {
        this._index = 0;
        return _super.prototype.reset.call(this);
    };
    return ForkStreamOuter;
}(AlotProto_1.AlotProto));
exports.ForkStreamOuter = ForkStreamOuter;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_ForkStream) && isObject(module.exports)) {
		Object.assign(_src_streams_ForkStream, module.exports);
		return;
	}
	_src_streams_ForkStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obj_getProperty(obj_, path) {
    if (obj_ == null) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return obj_[path];
    }
    var obj = obj_;
    var chain = path.split('.');
    var imax = chain.length;
    var i = -1;
    while (obj != null && ++i < imax) {
        var key = chain[i];
        obj = obj[key];
    }
    return obj;
}
exports.obj_getProperty = obj_getProperty;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_obj) && isObject(module.exports)) {
		Object.assign(_src_utils_obj, module.exports);
		return;
	}
	_src_utils_obj = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_SortedStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var obj_1 = _src_utils_obj;
var SortByStream = /** @class */ (function (_super) {
    __extends(SortByStream, _super);
    // constructor(stream: IAlotStream<T>, sortByFn: SortMethod<T>, direction?: 'asc' | 'desc')
    // constructor(stream: IAlotStream<T>, sortByKey: string, direction?: 'asc' | 'desc')
    function SortByStream(stream, mix, direction) {
        if (direction === void 0) { direction = 'asc'; }
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.direction = direction;
        _this.isAsync = false;
        _this.arr = null;
        _this.index = -1;
        if (typeof mix === 'string') {
            var path_1 = mix;
            _this.sortByFn = function (x) { return obj_1.obj_getProperty(x, path_1); };
        }
        else {
            _this.sortByFn = mix;
        }
        return _this;
    }
    SortByStream.prototype.next = function () {
        var _this = this;
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
            var result_1 = this.stream.next();
            if (result_1.done === true) {
                break;
            }
            this.arr.push(result_1.value);
        }
        var mapped = [];
        for (var i = 0; i < this.arr.length; i++) {
            mapped[i] = {
                i: i,
                key: this.sortByFn(this.arr[i], i),
                val: this.arr[i]
            };
        }
        ;
        mapped.sort(function (a, b) {
            if (a.key === b.key) {
                return 0;
            }
            if (a.key < b.key) {
                return _this.direction === 'asc' ? -1 : 1;
            }
            return _this.direction === 'asc' ? 1 : -1;
        });
        var result = [];
        for (var i = 0; i < mapped.length; i++) {
            result[i] = mapped[i].val;
        }
        this.arr = result;
        return this.next();
    };
    SortByStream.prototype.reset = function () {
        this.index = -1;
        this.arr = null;
        return _super.prototype.reset.call(this);
    };
    return SortByStream;
}(AlotProto_1.AlotProto));
exports.SortByStream = SortByStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_SortedStream) && isObject(module.exports)) {
		Object.assign(_src_streams_SortedStream, module.exports);
		return;
	}
	_src_streams_SortedStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_JoinStream;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AlotProto_1 = _src_AlotProto;
var r_1 = _src_utils_r;
var JoinStream = /** @class */ (function (_super) {
    __extends(JoinStream, _super);
    function JoinStream(stream, inner, fnKeyOuter, fnKeyInner, joinFn, joinType, opts) {
        var _this = _super.call(this, stream, opts) || this;
        _this.stream = stream;
        _this.inner = inner;
        _this.fnKeyOuter = fnKeyOuter;
        _this.fnKeyInner = fnKeyInner;
        _this.joinFn = joinFn;
        _this.joinType = joinType;
        _this._index = 0;
        _this._innerExtra = null;
        _this._innerExtraIndex = 0;
        _this._innerHash = null;
        _this._innerHashTook = Object.create(null);
        return _this;
    }
    JoinStream.prototype.next = function () {
        var _this = this;
        if (this.isAsync) {
            return this.nextAsync();
        }
        if (this._innerExtra != null) {
            if (this._innerExtraIndex >= this._innerExtra.length) {
                return r_1.r_DONE;
            }
            var x = this._innerExtra[this._innerExtraIndex++];
            var result_1 = this.joinFn(null, x);
            return { done: false, value: result_1, index: this._index++ };
        }
        ;
        var result = this.stream.next();
        if (result.done) {
            if (this.joinType === 'inner') {
                return r_1.r_DONE;
            }
            this._innerExtra = this.inner.filter(function (x) { return _this.fnKeyInner(x) in _this._innerHashTook === false; });
            return this.next();
        }
        if (this._innerHash == null) {
            this._ensureInnerHash();
        }
        var outerKey = this.fnKeyOuter(result.value);
        var innerVal = this._innerHash[outerKey];
        if (innerVal == null) {
            if (this.joinType === 'inner') {
                return this.next();
            }
        }
        else {
            this._innerHashTook[outerKey] = 1;
        }
        var val = this.joinFn(result.value, innerVal);
        return {
            value: val,
            done: false,
            index: ++this._index
        };
    };
    JoinStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Joins on async stream are not supported yet');
            });
        });
    };
    JoinStream.prototype.reset = function () {
        this._index = 0;
        this._innerExtra = null;
        this._innerExtraIndex = 0;
        this._innerHash = null;
        this._innerHashTook = Object.create(null);
        return _super.prototype.reset.call(this);
    };
    JoinStream.prototype._ensureInnerHash = function () {
        var hash = Object.create(null);
        for (var i = 0; i < this.inner.length; i++) {
            var x = this.inner[i];
            var key = this.fnKeyInner(x);
            // @TOOD if should check if key already exists
            hash[key] = x;
        }
        this._innerHash = hash;
    };
    return JoinStream;
}(AlotProto_1.AlotProto));
exports.JoinStream = JoinStream;
var MapManyStream = /** @class */ (function (_super) {
    __extends(MapManyStream, _super);
    function MapManyStream(stream, fn, opts) {
        var _this = _super.call(this, stream) || this;
        _this.stream = stream;
        _this.fn = fn;
        _this.opts = opts;
        _this._index = -1;
        _this._many = null;
        _this._mapDfr = null;
        _this._done = false;
        _this.isAsync = stream.isAsync || opts && opts.async;
        return _this;
    }
    MapManyStream.prototype.next = function () {
        if (this.opts != null && this.opts.async) {
            return this.nextAsync();
        }
        if (this._many != null && this._index < this._many.length - 1) {
            var x = this._many[++this._index];
            return { done: false, value: x };
        }
        var result = this.stream.next();
        if (result.done) {
            return result;
        }
        this._many = this.fn(result.value, result.index);
        this._index = -1;
        return this.next();
    };
    MapManyStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._done === true) {
                            return [2 /*return*/, r_1.r_DONE];
                        }
                        if (this._many != null && this._index < this._many.length - 1) {
                            x = this._many[++this._index];
                            return [2 /*return*/, { done: false, value: x }];
                        }
                        if (this._mapDfr == null) {
                            this._doMapAsync();
                        }
                        return [4 /*yield*/, this._mapDfr];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.nextAsync()];
                }
            });
        });
    };
    MapManyStream.prototype.reset = function () {
        this._many = null;
        this._done = false;
        this._mapDfr = null;
        this._index = -1;
        return _super.prototype.reset.call(this);
    };
    MapManyStream.prototype._doMapAsync = function () {
        var _this = this;
        return this._mapDfr = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.stream.next()];
                    case 1:
                        result = _b.sent();
                        if (result.done) {
                            this._done = true;
                            resolve();
                        }
                        _a = this;
                        return [4 /*yield*/, this.fn(result.value, result.index)];
                    case 2:
                        _a._many = _b.sent();
                        this._index = -1;
                        this._mapDfr = null;
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return MapManyStream;
}(AlotProto_1.AlotProto));
exports.MapManyStream = MapManyStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_JoinStream) && isObject(module.exports)) {
		Object.assign(_src_streams_JoinStream, module.exports);
		return;
	}
	_src_streams_JoinStream = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_streams_exports;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IAlotStream_1 = _src_streams_IAlotStream;
exports.IAlotStream = IAlotStream_1.IAlotStream;
exports.AlotStreamIterationResult = IAlotStream_1.AlotStreamIterationResult;
var FilterStream_1 = _src_streams_FilterStream;
exports.FilterStream = FilterStream_1.FilterStream;
exports.FilterStreamAsync = FilterStream_1.FilterStreamAsync;
var MapStream_1 = _src_streams_MapStream;
exports.MapStream = MapStream_1.MapStream;
exports.MapManyStream = MapStream_1.MapManyStream;
exports.MethodMap = MapStream_1.MethodMap;
exports.MethodMapMany = MapStream_1.MethodMapMany;
var TakeStream_1 = _src_streams_TakeStream;
exports.TakeStream = TakeStream_1.TakeStream;
exports.TakeWhileStream = TakeStream_1.TakeWhileStream;
exports.TakeWhileMethod = TakeStream_1.TakeWhileMethod;
var SkipStream_1 = _src_streams_SkipStream;
exports.SkipStream = SkipStream_1.SkipStream;
exports.SkipWhileMethod = SkipStream_1.SkipWhileMethod;
exports.SkipWhileStream = SkipStream_1.SkipWhileStream;
var GroupStream_1 = _src_streams_GroupStream;
exports.GroupByKeyFn = GroupStream_1.GroupByKeyFn;
exports.GroupByStream = GroupStream_1.GroupByStream;
var DistinctStream_1 = _src_streams_DistinctStream;
exports.DistinctByKeyFn = DistinctStream_1.DistinctByKeyFn;
exports.DistinctByStream = DistinctStream_1.DistinctByStream;
var ForEachStream_1 = _src_streams_ForEachStream;
exports.ForEachStream = ForEachStream_1.ForEachStream;
exports.ForEachMethod = ForEachStream_1.ForEachMethod;
var ForkStream_1 = _src_streams_ForkStream;
exports.ForkStreamInner = ForkStream_1.ForkStreamInner;
exports.ForkStreamOuter = ForkStream_1.ForkStreamOuter;
var SortedStream_1 = _src_streams_SortedStream;
exports.SortByStream = SortedStream_1.SortByStream;
exports.SortMethod = SortedStream_1.SortMethod;
var JoinStream_1 = _src_streams_JoinStream;
exports.JoinStream = JoinStream_1.JoinStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_streams_exports) && isObject(module.exports)) {
		Object.assign(_src_streams_exports, module.exports);
		return;
	}
	_src_streams_exports = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_classify;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Classify(Ctor) {
    var Class = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (Ctor.bind.apply(Ctor, __spreadArrays([void 0], args)))();
    };
    Class.prototype = Ctor.prototype;
    forIn(Ctor, function (key) {
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
    var hash = Object.create(null);
    var cursor = obj;
    do {
        var props = Object.getOwnPropertyNames(cursor);
        for (var i = 0; i < props.length; i++) {
            var key = props[i];
            if (key in hash === false) {
                cb(key);
            }
            hash[key] = null;
        }
    } while (cursor = Object.getPrototypeOf(cursor));
}
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_utils_classify) && isObject(module.exports)) {
		Object.assign(_src_utils_classify, module.exports);
		return;
	}
	_src_utils_classify = module.exports;
}());
// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_alot;
(function () {
	var exports = {};
	var module = { exports: exports };
	"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
_src_streams_exports;
var AlotProto_1 = _src_AlotProto;
var Alot = /** @class */ (function (_super) {
    __extends(Alot, _super);
    function Alot(array, meta) {
        var _this = _super.call(this, new ArrayStream(array)) || this;
        _this.array = array;
        _this.meta = meta;
        return _this;
    }
    Alot.fromObject = function (obj) {
        var arr = Object.keys(obj).map(function (key) {
            return { key: key, value: obj[key] };
        });
        return new Alot(arr);
    };
    return Alot;
}(AlotProto_1.AlotProto));
exports.Alot = Alot;
var ArrayStream = /** @class */ (function () {
    function ArrayStream(array) {
        this.array = array;
        this.isAsync = false;
        this.index = -1;
    }
    ArrayStream.prototype.next = function () {
        while (++this.index < this.array.length) {
            var x = this.array[this.index];
            return { value: x, done: false, index: this.index };
        }
        return { value: null, done: true, index: this.index };
    };
    ArrayStream.prototype.nextAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next()];
            });
        });
    };
    ArrayStream.prototype.reset = function () {
        this.index = -1;
        return this;
    };
    return ArrayStream;
}());
exports.ArrayStream = ArrayStream;
;

	function isObject(x) {
		return x != null && typeof x === 'object' && x.constructor === Object;
	}
	if (isObject(_src_alot) && isObject(module.exports)) {
		Object.assign(_src_alot, module.exports);
		return;
	}
	_src_alot = module.exports;
}());
// end:source ./ModuleSimplified.js

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
_src_streams_exports;
var classify_1 = _src_utils_classify;
var alot_1 = _src_alot;
var Alot = /** @class */ (function (_super) {
    __extends(Alot, _super);
    function Alot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alot.default = alot_1.Alot;
    Alot.Alot = alot_1.Alot;
    Alot = __decorate([
        classify_1.Classify
    ], Alot);
    return Alot;
}(alot_1.Alot));
// Reapply already decorated Alot to default.
Alot.default = Alot;
Alot.Alot = Alot;
module.exports = Alot;

}));
// end:source ./UMD.js
