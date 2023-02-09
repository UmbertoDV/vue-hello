"use strict";

const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello Vue!",
			image: "https://picsum.photos/300/300",
		};
	},
}).mount("#app");
