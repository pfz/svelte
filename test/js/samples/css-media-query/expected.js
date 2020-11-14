/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	addCssToComponent,
	appendStyleIfNotPresent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

function add_css(customStyleTag) {
	appendStyleIfNotPresent(customStyleTag, "1slhpfn", "@media(min-width: 1px){div.svelte-1slhpfn{color:red}}");
}

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "class", "svelte-1slhpfn");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		addCssToComponent(this, add_css, options);
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;