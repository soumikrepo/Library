sap.ui.define([
    "sap/ui/core/mvc/Controller",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.library.controller.View1", {
            onInit: function () {
                var oModel = this.getView().getModel()
                this.getView().setModel(oModel);

              
            }
        });
    });
