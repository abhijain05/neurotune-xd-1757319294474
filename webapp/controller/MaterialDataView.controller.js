sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/library"
], function(Controller, JSONModel, MessageToast, coreLibrary) {
	"use strict";

	const MessageType = coreLibrary.MessageType;

	return Controller.extend("converted.materialdataview.controller.MaterialDataView", {
		onInit: function() {
			// Load mock data
			const oMockDataModel = new JSONModel();
			oMockDataModel.loadData("model/mockData/mockData.json");
			this.getView().setModel(oMockDataModel, "mockData");

			// Initialize message model for MessageArea/MessagePopover (Not used in this example)
			// const oMessageModel = new JSONModel({ messages: [] });
			// this.getView().setModel(oMessageModel, "messages");
		},

		/**
		 * Event handler for 'GET DATA' button press
		 */
		onActionGetData: function() {
			MessageToast.show("GET DATA button pressed");
		},

		/**
		 * Event handler for 'EXIT' button press
		 */
		onActionExit: function() {
			MessageToast.show("EXIT button pressed");
			// Add any closing logic here, such as closing a dialog or navigating away from the view
		},

		/**
		 * Event handler for search button press
		 */
		onActionSearchMaterial: function() {
			MessageToast.show("Search Material button pressed");
			// Add search logic here.  This would typically involve filtering a table based on the input value
		},

		/**
		 * Event handler for checkbox 1 selection change
		 * @param {sap.ui.base.Event} oEvent - The event object
		 */
		onActionSelectCheckbox1: function(oEvent) {
			const bChecked = oEvent.getSource().getChecked();
			const oModel = this.getView().getModel("mockData");
			oModel.setProperty("/checkbox1Selected", bChecked); // Update the model
		},

		/**
		 * Event handler for checkbox 2 selection change
		 * @param {sap.ui.base.Event} oEvent - The event object
		 */
		onActionSelectCheckbox2: function(oEvent) {
			const bChecked = oEvent.getSource().getChecked();
			const oModel = this.getView().getModel("mockData");
			oModel.setProperty("/checkbox2Selected", bChecked); // Update the model
		},
		/**
		 * Event handler for radio button selection change
		 * @param {sap.ui.base.Event} oEvent - The event object
		 */
		onActionSelectRadio: function(oEvent) {
			const sSelectedKey = oEvent.getSource().getKey();
			const oModel = this.getView().getModel("mockData");
			oModel.setProperty("/selectedRadio", sSelectedKey);
		}
	});
});
