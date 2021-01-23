sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core//Fragment"
	], function(Controller, MessageToast, JSONModel, Fragment){
		"use strict";
		
		return Controller.extend("com.masthan.WalkthroughDemo.controller.HelloPanel",{
			
			onInit : function()
			{
				var oData = {
					recipient:{
						name : "Masthan"
					}
				};
				
				var mod = new JSONModel(oData);
				this.getView().setModel(mod);
			},
			onShowHello: function()
			{
				MessageToast.show("Hello Masthan");
			},
			onOpenDialog: function()
			{
				var view = this.getView();
				
				if(!this.pDialog)
				{
					this.pDialog = Fragment.load({
						id : view.getId(),
						name : "com.masthan.WalkthroughDemo.view.HelloDialog",
						controller : this
					}).then(function(dialog){
						view.addDependent(dialog);
						
						return dialog;
					});
				}
				this.pDialog.then(function(dialog){
					dialog.open();
				});
				
			},
			
			onCloseDialog: function()
			{
				this.byId("d1").close();
			}
			
		});
		
});