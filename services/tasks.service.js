"use strict";

global.dataTasks = [{listName:"Lista 1", taskName:"Tarea 1.1", taskDesc:"Descripción tarea 1.1"},
					{listName:"Lista 3", taskName:"Tarea 3.1", taskDesc:"Descripción tarea 3.1"},
					{listName:"Lista 3", taskName:"Tarea 3.2", taskDesc:"Descripción tarea 3.2"},
					{listName:"Lista 1", taskName:"Tarea 1.2", taskDesc:"Descripción tarea 1.2"},
					{listName:"Lista 2", taskName:"Tarea 2.1", taskDesc:"Descripción tarea 2.1"}];

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "tasks",

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
		getTasks: {
			rest: {
				method: "GET",
				path: "/tasks"
			},
			async handler(ctx) {
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
				return ({tasks: global.dataTasks});
			}
		},
		addTasks: {
			rest: {
				method: "POST",
				path: "/tasks"
			},
			async handler(ctx) {
				/**
				 * Add a new list
				 *
				 * @param {String} listName - List name
				 * @param {String} taskName - Task name
				 * @param {String} taskDesc - Task description
				 * 
				 */
				console.log("Payload:", ctx.params);
				console.log("Sender:", ctx.nodeID);
				console.log("Metadata:", ctx.meta);
				console.log("The called event name:", ctx.eventName);
				global.dataTasks.push ({listName: ctx.params.listName, taskName: ctx.params.taskName, taskDesc: ctx.params.taskDesc});
				return ({success: true, 
						message: `Tarea añadida: ${ctx.params.taskName} - ${ctx.params.taskDesc}`,
						tasks: global.dataTasks});
			}
		}
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
