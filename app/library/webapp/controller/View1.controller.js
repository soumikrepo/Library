sap.ui.define([
    'sap/ui/core/HTML',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/controls/Popover',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (HTMLControl, Controller, JSONModel, Popover, ChartFormatter, Format) {
        "use strict";

        return Controller.extend("com.app.library.controller.View1", {
        
            oVizFrame : null, oPopOver : null,
            onInit: function () {

                var oModel = this.getView().getModel()
                this.getView().setModel(oModel);
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;
                // set explored app's demo model on this sample
                var oModel = new JSONModel(this.settingsModel);
                this.getView().setModel(oModel);
    
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString:formatPattern.SHORTFLOAT_MFD2,
                            visible: true
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel);
    
                this.oPopOver = this.getView().byId("idPopOver");
                this.oPopOver.connect(oVizFrame.getVizUid());
                this.oPopOver.setActionItems([{
                    type: 'action',
                    text: 'Action',
                    press: function() {
                                console.log('This is a callback function from "Action Button" Action.');
                            }
                }]);
                this.oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
   


            },
            onAfterRendering : function(){
                var datasetRadioGroup = this.getView().byId('datasetRadioGroup');
                datasetRadioGroup.setSelectedIndex(this.settingsModel.dataset.defaultSelected);
            },
            onDatasetSelected : function(oEvent){
                var datasetRadio = oEvent.getSource();
                if (this.oVizFrame && datasetRadio.getSelected()){
                    var bindValue = datasetRadio.getBindingContext().getObject();
                    this.oPopOver = new Popover(bindValue.popoverProps);
                    this.oPopOver.connect(this.oVizFrame.getVizUid());
                    this.oPopOver.setActionItems(bindValue.value);
                }
            }




        });
    });
