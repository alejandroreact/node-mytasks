"use strict";

global.dataLists = [{listName:"Lista 1", listDesc:"Descripción lista 1"},
					{listName:"Lista 2", listDesc:"Descripción lista 2"},
					{listName:"Lista 3", listDesc:"Descripción lista 3"},
					{listName:"Lista 4", listDesc:"Descripción lista 4"}];

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "lists",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		getLists: {
			rest: {
				method: "GET",
				path: "/lists"
			},
			async handler(ctx) {
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
				return {lists: global.dataLists};
			}
		},
		addLists: {
			rest: {
				method: "POST",
				path: "/lists"
			},
			/**
			 * Add a new list
			 *
			 * @param {String} listName - List name
			 * @param {String} listDesc - List description
			 * 
			 */
			 async handler(ctx) {
				console.log("Payload:", ctx.params);
				console.log("Sender:", ctx.nodeID);
				console.log("Metadata:", ctx.meta);
				console.log("The called event name:", ctx.eventName);
				global.dataLists.push({listName: ctx.params.listName, listDesc: ctx.params.listDesc});
				return {success: true, 
						message: `Lista añadida: ${ctx.params.listName} - ${ctx.params.listDesc}`,
						lists: global.dataLists};
			}
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
