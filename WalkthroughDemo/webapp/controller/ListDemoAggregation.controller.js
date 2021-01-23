sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	],function(Controller, JSONModel){
		"use strict";
		
		return Controller.extend("com.masthan.WalkthroughDemo.controller.ListDemoAggregation",{
			onInit : function()
			{
				var model = new JSONModel({
					cur : "INR"
				});
				
				this.getView().setModel(model, "view");
			}
		});
	});