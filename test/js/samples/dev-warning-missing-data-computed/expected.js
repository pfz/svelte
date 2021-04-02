/* generated by Svelte vX.Y.Z */
import {
	SvelteComponentDev,
	add_location,
	append_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	set_data_dev,
	space,
	text,
	validate_slots
} from "svelte/internal";

const file = undefined;

function create_fragment(ctx) {
	let p;
	let t0_value = Math.max(0, /*foo*/ ctx[0]) + "";
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			t2 = text(/*bar*/ ctx[1]);
			add_location(p, file, 7, 0, 67);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			append_dev(p, t1);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*foo*/ 1 && t0_value !== (t0_value = Math.max(0, /*foo*/ ctx[0]) + "")) set_data_dev(t0, t0_value);
			if (dirty & /*bar*/ 2) set_data_dev(t2, /*bar*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Component", slots, []);
	let { foo } = $$props;
	let bar;
	const writable_props = ["foo"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Component> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("foo" in $$props) $$invalidate(0, foo = $$props.foo);
	};

	$$self.$capture_state = () => ({ foo, bar });

	$$self.$inject_state = $$props => {
		if ("foo" in $$props) $$invalidate(0, foo = $$props.foo);
		if ("bar" in $$props) $$invalidate(1, bar = $$props.bar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*foo*/ 1) {
			$: $$invalidate(1, bar = foo * 2);
		}
	};

	return [foo, bar];
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { foo: 0 }, null);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Component",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*foo*/ ctx[0] === undefined && !("foo" in props)) {
			console.warn("<Component> was created without expected prop 'foo'");
		}
	}

	get foo() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set foo(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Component;