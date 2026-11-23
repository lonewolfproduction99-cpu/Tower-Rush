gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDTowerObjects1= [];
gdjs.GameCode.GDTowerObjects2= [];
gdjs.GameCode.GDTowerObjects3= [];
gdjs.GameCode.GDTowerObjects4= [];
gdjs.GameCode.GDTowerObjects5= [];
gdjs.GameCode.GDTowerObjects6= [];
gdjs.GameCode.GDTurretObjects1= [];
gdjs.GameCode.GDTurretObjects2= [];
gdjs.GameCode.GDTurretObjects3= [];
gdjs.GameCode.GDTurretObjects4= [];
gdjs.GameCode.GDTurretObjects5= [];
gdjs.GameCode.GDTurretObjects6= [];
gdjs.GameCode.GDBulletObjects1= [];
gdjs.GameCode.GDBulletObjects2= [];
gdjs.GameCode.GDBulletObjects3= [];
gdjs.GameCode.GDBulletObjects4= [];
gdjs.GameCode.GDBulletObjects5= [];
gdjs.GameCode.GDBulletObjects6= [];
gdjs.GameCode.GDMuzzleFlashObjects1= [];
gdjs.GameCode.GDMuzzleFlashObjects2= [];
gdjs.GameCode.GDMuzzleFlashObjects3= [];
gdjs.GameCode.GDMuzzleFlashObjects4= [];
gdjs.GameCode.GDMuzzleFlashObjects5= [];
gdjs.GameCode.GDMuzzleFlashObjects6= [];
gdjs.GameCode.GDCellObjects1= [];
gdjs.GameCode.GDCellObjects2= [];
gdjs.GameCode.GDCellObjects3= [];
gdjs.GameCode.GDCellObjects4= [];
gdjs.GameCode.GDCellObjects5= [];
gdjs.GameCode.GDCellObjects6= [];
gdjs.GameCode.GDCrackObjects1= [];
gdjs.GameCode.GDCrackObjects2= [];
gdjs.GameCode.GDCrackObjects3= [];
gdjs.GameCode.GDCrackObjects4= [];
gdjs.GameCode.GDCrackObjects5= [];
gdjs.GameCode.GDCrackObjects6= [];
gdjs.GameCode.GDRamObjects1= [];
gdjs.GameCode.GDRamObjects2= [];
gdjs.GameCode.GDRamObjects3= [];
gdjs.GameCode.GDRamObjects4= [];
gdjs.GameCode.GDRamObjects5= [];
gdjs.GameCode.GDRamObjects6= [];
gdjs.GameCode.GDRegrowthObjects1= [];
gdjs.GameCode.GDRegrowthObjects2= [];
gdjs.GameCode.GDRegrowthObjects3= [];
gdjs.GameCode.GDRegrowthObjects4= [];
gdjs.GameCode.GDRegrowthObjects5= [];
gdjs.GameCode.GDRegrowthObjects6= [];
gdjs.GameCode.GDRegionBannerObjects1= [];
gdjs.GameCode.GDRegionBannerObjects2= [];
gdjs.GameCode.GDRegionBannerObjects3= [];
gdjs.GameCode.GDRegionBannerObjects4= [];
gdjs.GameCode.GDRegionBannerObjects5= [];
gdjs.GameCode.GDRegionBannerObjects6= [];
gdjs.GameCode.GDRocketObjects1= [];
gdjs.GameCode.GDRocketObjects2= [];
gdjs.GameCode.GDRocketObjects3= [];
gdjs.GameCode.GDRocketObjects4= [];
gdjs.GameCode.GDRocketObjects5= [];
gdjs.GameCode.GDRocketObjects6= [];
gdjs.GameCode.GDBlastObjects1= [];
gdjs.GameCode.GDBlastObjects2= [];
gdjs.GameCode.GDBlastObjects3= [];
gdjs.GameCode.GDBlastObjects4= [];
gdjs.GameCode.GDBlastObjects5= [];
gdjs.GameCode.GDBlastObjects6= [];
gdjs.GameCode.GDLaserBeamObjects1= [];
gdjs.GameCode.GDLaserBeamObjects2= [];
gdjs.GameCode.GDLaserBeamObjects3= [];
gdjs.GameCode.GDLaserBeamObjects4= [];
gdjs.GameCode.GDLaserBeamObjects5= [];
gdjs.GameCode.GDLaserBeamObjects6= [];
gdjs.GameCode.GDPowerButtonObjects1= [];
gdjs.GameCode.GDPowerButtonObjects2= [];
gdjs.GameCode.GDPowerButtonObjects3= [];
gdjs.GameCode.GDPowerButtonObjects4= [];
gdjs.GameCode.GDPowerButtonObjects5= [];
gdjs.GameCode.GDPowerButtonObjects6= [];
gdjs.GameCode.GDPowerShadeObjects1= [];
gdjs.GameCode.GDPowerShadeObjects2= [];
gdjs.GameCode.GDPowerShadeObjects3= [];
gdjs.GameCode.GDPowerShadeObjects4= [];
gdjs.GameCode.GDPowerShadeObjects5= [];
gdjs.GameCode.GDPowerShadeObjects6= [];
gdjs.GameCode.GDGemObjects1= [];
gdjs.GameCode.GDGemObjects2= [];
gdjs.GameCode.GDGemObjects3= [];
gdjs.GameCode.GDGemObjects4= [];
gdjs.GameCode.GDGemObjects5= [];
gdjs.GameCode.GDGemObjects6= [];
gdjs.GameCode.GDGemMarkObjects1= [];
gdjs.GameCode.GDGemMarkObjects2= [];
gdjs.GameCode.GDGemMarkObjects3= [];
gdjs.GameCode.GDGemMarkObjects4= [];
gdjs.GameCode.GDGemMarkObjects5= [];
gdjs.GameCode.GDGemMarkObjects6= [];
gdjs.GameCode.GDGemPopupObjects1= [];
gdjs.GameCode.GDGemPopupObjects2= [];
gdjs.GameCode.GDGemPopupObjects3= [];
gdjs.GameCode.GDGemPopupObjects4= [];
gdjs.GameCode.GDGemPopupObjects5= [];
gdjs.GameCode.GDGemPopupObjects6= [];
gdjs.GameCode.GDDebrisObjects1= [];
gdjs.GameCode.GDDebrisObjects2= [];
gdjs.GameCode.GDDebrisObjects3= [];
gdjs.GameCode.GDDebrisObjects4= [];
gdjs.GameCode.GDDebrisObjects5= [];
gdjs.GameCode.GDDebrisObjects6= [];
gdjs.GameCode.GDSparkObjects1= [];
gdjs.GameCode.GDSparkObjects2= [];
gdjs.GameCode.GDSparkObjects3= [];
gdjs.GameCode.GDSparkObjects4= [];
gdjs.GameCode.GDSparkObjects5= [];
gdjs.GameCode.GDSparkObjects6= [];
gdjs.GameCode.GDCrosshairObjects1= [];
gdjs.GameCode.GDCrosshairObjects2= [];
gdjs.GameCode.GDCrosshairObjects3= [];
gdjs.GameCode.GDCrosshairObjects4= [];
gdjs.GameCode.GDCrosshairObjects5= [];
gdjs.GameCode.GDCrosshairObjects6= [];
gdjs.GameCode.GDCloudObjects1= [];
gdjs.GameCode.GDCloudObjects2= [];
gdjs.GameCode.GDCloudObjects3= [];
gdjs.GameCode.GDCloudObjects4= [];
gdjs.GameCode.GDCloudObjects5= [];
gdjs.GameCode.GDCloudObjects6= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundObjects5= [];
gdjs.GameCode.GDGroundObjects6= [];
gdjs.GameCode.GDHillsObjects1= [];
gdjs.GameCode.GDHillsObjects2= [];
gdjs.GameCode.GDHillsObjects3= [];
gdjs.GameCode.GDHillsObjects4= [];
gdjs.GameCode.GDHillsObjects5= [];
gdjs.GameCode.GDHillsObjects6= [];
gdjs.GameCode.GDSkyObjects1= [];
gdjs.GameCode.GDSkyObjects2= [];
gdjs.GameCode.GDSkyObjects3= [];
gdjs.GameCode.GDSkyObjects4= [];
gdjs.GameCode.GDSkyObjects5= [];
gdjs.GameCode.GDSkyObjects6= [];
gdjs.GameCode.GDDistanceTextObjects1= [];
gdjs.GameCode.GDDistanceTextObjects2= [];
gdjs.GameCode.GDDistanceTextObjects3= [];
gdjs.GameCode.GDDistanceTextObjects4= [];
gdjs.GameCode.GDDistanceTextObjects5= [];
gdjs.GameCode.GDDistanceTextObjects6= [];
gdjs.GameCode.GDBestTextObjects1= [];
gdjs.GameCode.GDBestTextObjects2= [];
gdjs.GameCode.GDBestTextObjects3= [];
gdjs.GameCode.GDBestTextObjects4= [];
gdjs.GameCode.GDBestTextObjects5= [];
gdjs.GameCode.GDBestTextObjects6= [];
gdjs.GameCode.GDGasTextObjects1= [];
gdjs.GameCode.GDGasTextObjects2= [];
gdjs.GameCode.GDGasTextObjects3= [];
gdjs.GameCode.GDGasTextObjects4= [];
gdjs.GameCode.GDGasTextObjects5= [];
gdjs.GameCode.GDGasTextObjects6= [];
gdjs.GameCode.GDGemTextObjects1= [];
gdjs.GameCode.GDGemTextObjects2= [];
gdjs.GameCode.GDGemTextObjects3= [];
gdjs.GameCode.GDGemTextObjects4= [];
gdjs.GameCode.GDGemTextObjects5= [];
gdjs.GameCode.GDGemTextObjects6= [];
gdjs.GameCode.GDGemsResultTextObjects1= [];
gdjs.GameCode.GDGemsResultTextObjects2= [];
gdjs.GameCode.GDGemsResultTextObjects3= [];
gdjs.GameCode.GDGemsResultTextObjects4= [];
gdjs.GameCode.GDGemsResultTextObjects5= [];
gdjs.GameCode.GDGemsResultTextObjects6= [];
gdjs.GameCode.GDOffsetButtonObjects1= [];
gdjs.GameCode.GDOffsetButtonObjects2= [];
gdjs.GameCode.GDOffsetButtonObjects3= [];
gdjs.GameCode.GDOffsetButtonObjects4= [];
gdjs.GameCode.GDOffsetButtonObjects5= [];
gdjs.GameCode.GDOffsetButtonObjects6= [];
gdjs.GameCode.GDOffsetTextObjects1= [];
gdjs.GameCode.GDOffsetTextObjects2= [];
gdjs.GameCode.GDOffsetTextObjects3= [];
gdjs.GameCode.GDOffsetTextObjects4= [];
gdjs.GameCode.GDOffsetTextObjects5= [];
gdjs.GameCode.GDOffsetTextObjects6= [];
gdjs.GameCode.GDHintTextObjects1= [];
gdjs.GameCode.GDHintTextObjects2= [];
gdjs.GameCode.GDHintTextObjects3= [];
gdjs.GameCode.GDHintTextObjects4= [];
gdjs.GameCode.GDHintTextObjects5= [];
gdjs.GameCode.GDHintTextObjects6= [];
gdjs.GameCode.GDWarningEdgeObjects1= [];
gdjs.GameCode.GDWarningEdgeObjects2= [];
gdjs.GameCode.GDWarningEdgeObjects3= [];
gdjs.GameCode.GDWarningEdgeObjects4= [];
gdjs.GameCode.GDWarningEdgeObjects5= [];
gdjs.GameCode.GDWarningEdgeObjects6= [];
gdjs.GameCode.GDPanelObjects1= [];
gdjs.GameCode.GDPanelObjects2= [];
gdjs.GameCode.GDPanelObjects3= [];
gdjs.GameCode.GDPanelObjects4= [];
gdjs.GameCode.GDPanelObjects5= [];
gdjs.GameCode.GDPanelObjects6= [];
gdjs.GameCode.GDGameOverTitleObjects1= [];
gdjs.GameCode.GDGameOverTitleObjects2= [];
gdjs.GameCode.GDGameOverTitleObjects3= [];
gdjs.GameCode.GDGameOverTitleObjects4= [];
gdjs.GameCode.GDGameOverTitleObjects5= [];
gdjs.GameCode.GDGameOverTitleObjects6= [];
gdjs.GameCode.GDResultTextObjects1= [];
gdjs.GameCode.GDResultTextObjects2= [];
gdjs.GameCode.GDResultTextObjects3= [];
gdjs.GameCode.GDResultTextObjects4= [];
gdjs.GameCode.GDResultTextObjects5= [];
gdjs.GameCode.GDResultTextObjects6= [];
gdjs.GameCode.GDBestResultTextObjects1= [];
gdjs.GameCode.GDBestResultTextObjects2= [];
gdjs.GameCode.GDBestResultTextObjects3= [];
gdjs.GameCode.GDBestResultTextObjects4= [];
gdjs.GameCode.GDBestResultTextObjects5= [];
gdjs.GameCode.GDBestResultTextObjects6= [];
gdjs.GameCode.GDRestartButtonObjects1= [];
gdjs.GameCode.GDRestartButtonObjects2= [];
gdjs.GameCode.GDRestartButtonObjects3= [];
gdjs.GameCode.GDRestartButtonObjects4= [];
gdjs.GameCode.GDRestartButtonObjects5= [];
gdjs.GameCode.GDRestartButtonObjects6= [];
gdjs.GameCode.GDRestartTextObjects1= [];
gdjs.GameCode.GDRestartTextObjects2= [];
gdjs.GameCode.GDRestartTextObjects3= [];
gdjs.GameCode.GDRestartTextObjects4= [];
gdjs.GameCode.GDRestartTextObjects5= [];
gdjs.GameCode.GDRestartTextObjects6= [];
gdjs.GameCode.GDUpgradesButtonObjects1= [];
gdjs.GameCode.GDUpgradesButtonObjects2= [];
gdjs.GameCode.GDUpgradesButtonObjects3= [];
gdjs.GameCode.GDUpgradesButtonObjects4= [];
gdjs.GameCode.GDUpgradesButtonObjects5= [];
gdjs.GameCode.GDUpgradesButtonObjects6= [];
gdjs.GameCode.GDUpgradesTextObjects1= [];
gdjs.GameCode.GDUpgradesTextObjects2= [];
gdjs.GameCode.GDUpgradesTextObjects3= [];
gdjs.GameCode.GDUpgradesTextObjects4= [];
gdjs.GameCode.GDUpgradesTextObjects5= [];
gdjs.GameCode.GDUpgradesTextObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SaveProgress")) == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("TowerRush");
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Up_Damage");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Up_Damage", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.clamp(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), 0, 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(62).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Up_FireRate");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Up_FireRate", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.clamp(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))), 0, 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(63).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Up_Accuracy");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Up_Accuracy", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.clamp(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))), 0, 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(64).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Up_TrackSpeed");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Up_TrackSpeed", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.clamp(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))), 0, 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(65).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Up_PickupRadius");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Up_PickupRadius", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.clamp(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))), 0, 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(66).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Best");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Best", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9));
}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestResultText"), gdjs.GameCode.GDBestResultTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("GemsResultText"), gdjs.GameCode.GDGemsResultTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.GameCode.GDPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.GameCode.GDResultTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpgradesButton"), gdjs.GameCode.GDUpgradesButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpgradesText"), gdjs.GameCode.GDUpgradesTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(5).setString("Run");
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDPanelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPanelObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDGameOverTitleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverTitleObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDResultTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDResultTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDBestResultTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBestResultTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDGemsResultTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGemsResultTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDUpgradesButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradesButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDUpgradesTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradesTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects1[i].hide();
}
}

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(Math.min(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MaxFrameTime"))));
}
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter")));
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBestResultTextObjects2, gdjs.GameCode.GDBestResultTextObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Best", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
{for(var i = 0, len = gdjs.GameCode.GDBestResultTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBestResultTextObjects3[i].getBehavior("Text").setText("NEW BEST!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBestResultTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBestResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestResultTextObjects2[i].getBehavior("Text").setText("BEST  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))) + " m");
}
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Dying");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestResultText"), gdjs.GameCode.GDBestResultTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameCode.GDCrosshairObjects2);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("GemsResultText"), gdjs.GameCode.GDGemsResultTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects2);
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.GameCode.GDPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.GameCode.GDResultTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpgradesButton"), gdjs.GameCode.GDUpgradesButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpgradesText"), gdjs.GameCode.GDUpgradesTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).setString("Over");
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDPanelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPanelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDGameOverTitleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverTitleObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDResultTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDBestResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestResultTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDGemsResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemsResultTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDUpgradesButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradesButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDUpgradesTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradesTextObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCrosshairObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrosshairObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDResultTextObjects2[i].getBehavior("Text").setText("DISTANCE  " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)))) + " m");
}
}

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameCode.GDRestartButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUpgradesButtonObjects2Objects = Hashtable.newFrom({"UpgradesButton": gdjs.GameCode.GDUpgradesButtonObjects2});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpgradesButton"), gdjs.GameCode.GDUpgradesButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUpgradesButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RegionBanner"), gdjs.GameCode.GDRegionBannerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRegionBannerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRegionBannerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(0).getChild("Name")));
}
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(47)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EasyStart")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(2)) > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) - 1))));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(47)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EasyStart")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(4)) > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(4)) - 1))));
}
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(14))));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_stone.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_hard.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_hard.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_concrete.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_concrete.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_metal.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_metal.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_glass.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_glass.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_wood.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_wood.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_explosive.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_explosive.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_fracture.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_fracture.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_reinforced.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_reinforced.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_growth.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_growth.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_core.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("tile_core.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "|");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(21).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "#");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Stone");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stone").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stone").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "H");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Hardstone");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hardstone").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Hardstone").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "h");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Hardstone");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "C");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Concrete");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Concrete").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Concrete").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "c");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Concrete");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "M");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Metal");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "m");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Metal");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "G");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Glass");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Glass").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Glass").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "g");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Glass");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "W");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Wood");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Wood").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Wood").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "w");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Wood");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "X");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Explosive");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Explosive").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Explosive").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "x");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Explosive");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "F");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Fracture");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Fracture").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Fracture").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "f");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Fracture");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "R");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Reinforced");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Reinforced").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Reinforced").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "r");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Reinforced");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "V");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Growth");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Growth").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Growth").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "v");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Growth");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "O");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Core");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Core").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Core").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() == "o");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Core");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PartialHP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(23).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(20).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).add(1);
}
}

}


};gdjs.GameCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_building_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_building_02.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_building_03.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_building_04.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_frame_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_house_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_rubble_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_tower_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects2[i].getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects2[k] = gdjs.GameCode.GDCellObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].setTexture("formation_owner_wall_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(11))));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects = Hashtable.newFrom({"GemMark": gdjs.GameCode.GDGemMarkObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects = Hashtable.newFrom({"GemMark": gdjs.GameCode.GDGemMarkObjects4});
gdjs.GameCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber() >= 0.0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber() < 70.0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(51).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber() >= 70.0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber() < 95.0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(51).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber() >= 95.0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(51).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomFloat(1) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemAboveLaneChance")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getY() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - 96 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
gdjs.GameCode.GDGemMarkObjects4.length = 0;

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects);
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(51)));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getX()) + 2, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getY()) + 2, "");
}
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects4[i].setZOrder(12);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects4[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(51)) - 1);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDCellObjects4.length !== 0 ? gdjs.GameCode.GDCellObjects4[0] : null), (gdjs.GameCode.GDGemMarkObjects4.length !== 0 ? gdjs.GameCode.GDGemMarkObjects4[0] : null));
}
{runtimeScene.getScene().getVariables().getFromIndex(49).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
gdjs.GameCode.GDGemMarkObjects4.length = 0;

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects);
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(51)));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getX()) + 2, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getY()) + 2, "");
}
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects4[i].setZOrder(12);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects4[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(51)) - 1);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDCellObjects4.length !== 0 ? gdjs.GameCode.GDCellObjects4[0] : null), (gdjs.GameCode.GDGemMarkObjects4.length !== 0 ? gdjs.GameCode.GDGemMarkObjects4[0] : null));
}
{runtimeScene.getScene().getVariables().getFromIndex(49).setNumber(1);
}
}

}


};gdjs.GameCode.eventsList41 = function(runtimeScene) {

{


const repeatCount3 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(48));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(49).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(50).setNumber(gdjs.randomFloat(100));
}

{ //Subevents: 
gdjs.GameCode.eventsList40(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomFloat(1) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(83)));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(48).setNumber(gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemsMin")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemsMax"))));
}

{ //Subevents
gdjs.GameCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList43 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomFloat(1) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ClusterChance")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")) + gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ClusterGapMin")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ClusterGapMax"))));
}
}

}


};gdjs.GameCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EasyStart")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(4)) > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(4)) - 1))));
}
}

}


{


const repeatCount3 = 6;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList15(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TestFormation")) >= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TestFormation")));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(14).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13))).getChild("Shape")));
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13))).getChild("Art")));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(14)), "|"));
}

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber((gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(14))) + 1) / (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) + 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)), (( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MinSpawnAheadOfTower"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(0);
}
}

}


{


const repeatCount3 = gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(14)));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(22).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(14)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(19)), 1));
}

{ //Subevents: 
gdjs.GameCode.eventsList38(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.GameCode.eventsList39(runtimeScene);
}


{


gdjs.GameCode.eventsList42(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(17)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")) + gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GapMin")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GapMax"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(47).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList43(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList45 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 270 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SpawnAhead")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) - 1))));
}

{ //Subevents
gdjs.GameCode.eventsList44(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList46 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects2[k] = gdjs.GameCode.GDCellObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crack"), gdjs.GameCode.GDCrackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCrackObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCrackObjects2[k] = gdjs.GameCode.GDCrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCrackObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrackObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GemMark"), gdjs.GameCode.GDGemMarkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemMarkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemMarkObjects1[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemMarkObjects1[k] = gdjs.GameCode.GDGemMarkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGemMarkObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemMarkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList47 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "AimOffset");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "AimOffset", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(37));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDOffsetButtonObjects2Objects = Hashtable.newFrom({"OffsetButton": gdjs.GameCode.GDOffsetButtonObjects2});
gdjs.GameCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetMax")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "AimOffset", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(37)));
}
}

}


};gdjs.GameCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetDefault")));
}

{ //Subevents
gdjs.GameCode.eventsList47(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OffsetButton"), gdjs.GameCode.GDOffsetButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDOffsetButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(37).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetStep")));
}

{ //Subevents
gdjs.GameCode.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OffsetText"), gdjs.GameCode.GDOffsetTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDOffsetTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOffsetTextObjects1[i].getBehavior("Text").setText("AIM +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(37))));
}
}
}

}


};gdjs.GameCode.eventsList50 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(33)) > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0) + gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1);
}
}

}


};gdjs.GameCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber((( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointX("TurretMount")));
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber((( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointY("TurretMount")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonStripY")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(37)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)) + 200);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(gdjs.toDegrees(Math.atan2(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(29)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)))));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretMaxDown")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() < 134);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretMaxDown")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() >= 134);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(-180);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.GameCode.GDTurretObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(31).add(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(30)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)), -(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretTurnSpeed"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretTurnSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{for(var i = 0, len = gdjs.GameCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTurretObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTurretObjects1[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrosshairObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(29)));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects2});
gdjs.GameCode.eventsList52 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(36).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) > 96);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonStripY")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() <= 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(35).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() < 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(35).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects2);
gdjs.GameCode.GDBulletObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(36).add(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(63)));
}
{runtimeScene.getScene().getVariables().getFromIndex(38).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)), "");
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)) + gdjs.randomFloatInRange(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(64))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(64))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].returnVariable(gdjs.GameCode.GDBulletObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].setZOrder(22);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].resetTimer("shown");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)) + Math.cos(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)) + Math.sin(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMuzzleFlashObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMuzzleFlashObjects1[i].getTimerElapsedTimeInSecondsOrNaN("shown") > 0.05 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMuzzleFlashObjects1[k] = gdjs.GameCode.GDMuzzleFlashObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMuzzleFlashObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMuzzleFlashObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList53 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects1[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects1[k] = gdjs.GameCode.GDPowerButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects = Hashtable.newFrom({"PowerButton": gdjs.GameCode.GDPowerButtonObjects2});
gdjs.GameCode.eventsList54 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonStripY")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() <= 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(67).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(67).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects = Hashtable.newFrom({"PowerButton": gdjs.GameCode.GDPowerButtonObjects2});
gdjs.GameCode.eventsList55 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonStripY")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() <= 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(68).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(85).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Rockets")));
}
{runtimeScene.getScene().getVariables().getFromIndex(86).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(68).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(85).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Rockets")));
}
{runtimeScene.getScene().getVariables().getFromIndex(86).setNumber(0);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects = Hashtable.newFrom({"PowerButton": gdjs.GameCode.GDPowerButtonObjects2});
gdjs.GameCode.eventsList56 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPowerButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonStripY")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber() <= 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(69).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Cooldown")));
}
{runtimeScene.getScene().getVariables().getFromIndex(69).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Duration")));
}
{runtimeScene.getScene().getVariables().getFromIndex(87).add(1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRamObjects2Objects = Hashtable.newFrom({"Ram": gdjs.GameCode.GDRamObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects2});
gdjs.GameCode.eventsList57 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);
/* Reuse gdjs.GameCode.GDRamObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRamObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].returnVariable(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Dps")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
}

}


};gdjs.GameCode.eventsList58 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ram"), gdjs.GameCode.GDRamObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDRamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRamObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRamObjects2[i].setPosition((( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointX("")) + 22,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Height")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRamObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Reach")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Height")));
}
}

{ //Subevents
gdjs.GameCode.eventsList57(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ram"), gdjs.GameCode.GDRamObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRamObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRamObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.GameCode.GDRocketObjects2});
gdjs.GameCode.eventsList59 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(86).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDRocketObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRocketObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)), "");
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)) + gdjs.randomFloatInRange(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Spread"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Spread"))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].returnVariable(gdjs.GameCode.GDRocketObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].setZOrder(23);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(85).sub(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(86).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Interval")));
}
{runtimeScene.getScene().getVariables().getFromIndex(90).add(1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects4Objects = Hashtable.newFrom({"Blast": gdjs.GameCode.GDBlastObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects4Objects = Hashtable.newFrom({"Blast": gdjs.GameCode.GDBlastObjects4});
gdjs.GameCode.eventsList60 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDBlastObjects4 */
gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Radius")), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Damage")));
}
}
}

}


};gdjs.GameCode.eventsList61 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects4);
gdjs.copyArray(gdjs.GameCode.GDRocketObjects3, gdjs.GameCode.GDRocketObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, (( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getPointX("")), (( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getPointY("")), (( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getAngle()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(88)) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRocketObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRocketObjects4[0].getVariables()).getFromIndex(0))), runtimeScene.getScene().getVariables().getFromIndex(41), runtimeScene.getScene().getVariables().getFromIndex(42), false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(89).setNumber(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDRocketObjects3, gdjs.GameCode.GDRocketObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(89).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getPointY("")) + Math.sin(gdjs.toRad((( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getAngle()))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(88)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRocketObjects4 */
{runtimeScene.getScene().getVariables().getFromIndex(89).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(41).setNumber((( gdjs.GameCode.GDRocketObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects4[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(89).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDRocketObjects3, gdjs.GameCode.GDRocketObjects4);

gdjs.GameCode.GDBlastObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(41)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(42)), "");
}
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects4[i].setZOrder(28);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects4[i].getBehavior("Resizable").setSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Radius")) * 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Radius")) * 2);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects4[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(91).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList60(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(89).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDRocketObjects3, gdjs.GameCode.GDRocketObjects4);

{for(var i = 0, len = gdjs.GameCode.GDRocketObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects4[i].setPosition((gdjs.GameCode.GDRocketObjects4[i].getPointX("")) + Math.cos(gdjs.toRad((gdjs.GameCode.GDRocketObjects4[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(88)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDRocketObjects4[i].getVariables().getFromIndex(0)))),(gdjs.GameCode.GDRocketObjects4[i].getPointY("")) + Math.sin(gdjs.toRad((gdjs.GameCode.GDRocketObjects4[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(88)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDRocketObjects4[i].getVariables().getFromIndex(0)))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects4[i].returnVariable(gdjs.GameCode.GDRocketObjects4[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.GameCode.eventsList62 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(85).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(86).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}

{ //Subevents
gdjs.GameCode.eventsList59(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(88).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Speed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDRocketObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDRocketObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDRocketObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDRocketObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(89).setNumber(0);
}

{ //Subevents: 
gdjs.GameCode.eventsList61(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRocketObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRocketObjects2[i].getX() > gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 320 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRocketObjects2[k] = gdjs.GameCode.GDRocketObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRocketObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRocketObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRocketObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRocketObjects2[i].getY() < -60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRocketObjects2[k] = gdjs.GameCode.GDRocketObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRocketObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRocketObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blast"), gdjs.GameCode.GDBlastObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects2[i].returnVariable(gdjs.GameCode.GDBlastObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects2[i].getBehavior("Opacity").setOpacity(255 * (1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDBlastObjects2[i].getVariables().getFromIndex(0))) / 0.35));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blast"), gdjs.GameCode.GDBlastObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBlastObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlastObjects1[i].getVariableNumber(gdjs.GameCode.GDBlastObjects1[i].getVariables().getFromIndex(0)) > 0.35 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBlastObjects1[k] = gdjs.GameCode.GDBlastObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBlastObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBlastObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLaserBeamObjects2Objects = Hashtable.newFrom({"LaserBeam": gdjs.GameCode.GDLaserBeamObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects2});
gdjs.GameCode.eventsList63 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);
/* Reuse gdjs.GameCode.GDLaserBeamObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLaserBeamObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].returnVariable(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Dps")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
}

}


};gdjs.GameCode.eventsList64 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserBeam"), gdjs.GameCode.GDLaserBeamObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)) + Math.cos(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)) + Math.sin(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(31)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Range")), 6 + gdjs.randomFloat(4));
}
}

{ //Subevents
gdjs.GameCode.eventsList63(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserBeam"), gdjs.GameCode.GDLaserBeamObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList65 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PowerShade"), gdjs.GameCode.GDPowerShadeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerShadeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerShadeObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerShadeObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerShadeObjects2[k] = gdjs.GameCode.GDPowerShadeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerShadeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerShadeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerShadeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerShadeObjects2[i].getBehavior("Resizable").setHeight(60 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(70)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Cooldown")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;240;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("150;150;150");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerShade"), gdjs.GameCode.GDPowerShadeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerShadeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerShadeObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerShadeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerShadeObjects2[k] = gdjs.GameCode.GDPowerShadeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerShadeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerShadeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerShadeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerShadeObjects2[i].getBehavior("Resizable").setHeight(60 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(71)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Cooldown")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;240;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("150;150;150");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerShade"), gdjs.GameCode.GDPowerShadeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerShadeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerShadeObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerShadeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerShadeObjects2[k] = gdjs.GameCode.GDPowerShadeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerShadeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerShadeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerShadeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerShadeObjects2[i].getBehavior("Resizable").setHeight(60 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(72)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Cooldown")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;240;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects2[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects1[i].getVariableNumber(gdjs.GameCode.GDPowerButtonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects1[k] = gdjs.GameCode.GDPowerButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPowerButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPowerButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPowerButtonObjects1[i].setColor("150;150;150");
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects3Objects = Hashtable.newFrom({"Spark": gdjs.GameCode.GDSparkObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects4Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects3Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects3});
gdjs.GameCode.eventsList66 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects3, gdjs.GameCode.GDCellObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(4)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
gdjs.GameCode.GDCrackObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects4Objects, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getX()), (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getY()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects4[i].setZOrder(11);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDCellObjects4.length !== 0 ? gdjs.GameCode.GDCellObjects4[0] : null), (gdjs.GameCode.GDCrackObjects4.length !== 0 ? gdjs.GameCode.GDCrackObjects4[0] : null));
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(5)).setNumber(1);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Crack"), gdjs.GameCode.GDCrackObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects3Objects, (gdjs.GameCode.GDCellObjects3.length !== 0 ? gdjs.GameCode.GDCellObjects3[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
/* Reuse gdjs.GameCode.GDCrackObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects3[i].getBehavior("Animation").setAnimationName("Crack" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(4)))));
}
}
}

}


};gdjs.GameCode.eventsList67 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCellObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setColor("255;170;140");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].resetTimer("flash");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(4)).setNumber(Math.min(2, Math.floor((1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(1)))) * 3)));
}
}

{ //Subevents
gdjs.GameCode.eventsList66(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList68 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDBulletObjects2, gdjs.GameCode.GDBulletObjects3);

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects, (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getPointX("")), (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getPointY("")), (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getAngle()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(39)) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBulletObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBulletObjects3[0].getVariables()).getFromIndex(0))), runtimeScene.getScene().getVariables().getFromIndex(41), runtimeScene.getScene().getVariables().getFromIndex(42), false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects3 */
/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.GameCode.GDSparkObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(40).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(43).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(62)));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(41)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(42)), "");
}
{for(var i = 0, len = gdjs.GameCode.GDSparkObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSparkObjects3[i].setZOrder(26);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects3[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameCode.eventsList67(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(40).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBulletObjects2, gdjs.GameCode.GDBulletObjects3);

{for(var i = 0, len = gdjs.GameCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects3[i].setPosition((gdjs.GameCode.GDBulletObjects3[i].getPointX("")) + Math.cos(gdjs.toRad((gdjs.GameCode.GDBulletObjects3[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(39)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)))),(gdjs.GameCode.GDBulletObjects3[i].getPointY("")) + Math.sin(gdjs.toRad((gdjs.GameCode.GDBulletObjects3[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(39)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects3[i].returnVariable(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects2Objects = Hashtable.newFrom({"Spark": gdjs.GameCode.GDSparkObjects2});
gdjs.GameCode.eventsList69 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects2[i].getY() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects2[k] = gdjs.GameCode.GDBulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects2 */
gdjs.GameCode.GDSparkObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects2Objects, (( gdjs.GameCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects2[0].getPointX("")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDSparkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSparkObjects2[i].setZOrder(26);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects2[i].getX() > gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 320 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects2[k] = gdjs.GameCode.GDBulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 320 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects2[k] = gdjs.GameCode.GDBulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBulletObjects1[i].getY() < -60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBulletObjects1[k] = gdjs.GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects3Objects = Hashtable.newFrom({"Blast": gdjs.GameCode.GDBlastObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects3Objects = Hashtable.newFrom({"Blast": gdjs.GameCode.GDBlastObjects3});
gdjs.GameCode.eventsList70 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDBlastObjects3 */
/* Reuse gdjs.GameCode.GDCellObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ExplosionRadius")), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ExplosionDamage")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects3});
gdjs.GameCode.eventsList71 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCellObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(75)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getY() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(74)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getX() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(73)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("FractureReach")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getX() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(73)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("FractureReach")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRegrowthObjects3Objects = Hashtable.newFrom({"Regrowth": gdjs.GameCode.GDRegrowthObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects3Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects3Objects = Hashtable.newFrom({"Gem": gdjs.GameCode.GDGemObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects = Hashtable.newFrom({"GemMark": gdjs.GameCode.GDGemMarkObjects4});
gdjs.GameCode.eventsList72 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects3, gdjs.GameCode.GDCellObjects4);

gdjs.copyArray(runtimeScene.getObjects("GemMark"), gdjs.GameCode.GDGemMarkObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemMarkObjects4Objects, (gdjs.GameCode.GDCellObjects4.length !== 0 ? gdjs.GameCode.GDCellObjects4[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemMarkObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGemMarkObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemMarkObjects4[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDGemObjects3, gdjs.GameCode.GDGemObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects4[i].getVariableNumber(gdjs.GameCode.GDGemObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects4[k] = gdjs.GameCode.GDGemObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects4[i].returnVariable(gdjs.GameCode.GDGemObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Common").getChild("Value")));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDGemObjects3, gdjs.GameCode.GDGemObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects4[i].getVariableNumber(gdjs.GameCode.GDGemObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects4[k] = gdjs.GameCode.GDGemObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects4[i].returnVariable(gdjs.GameCode.GDGemObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Rare").getChild("Value")));
}
}
}

}


{

/* Reuse gdjs.GameCode.GDGemObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Legendary").getChild("Value")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDebrisObjects4Objects = Hashtable.newFrom({"Debris": gdjs.GameCode.GDDebrisObjects4});
gdjs.GameCode.eventsList73 = function(runtimeScene) {

};gdjs.GameCode.eventsList74 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableString(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(2)) == "Explosive" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.GameCode.GDBlastObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBlastObjects3Objects, (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getCenterXInScene()), (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects3[i].setZOrder(28);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBlastObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlastObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ExplosionRadius")) * 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ExplosionRadius")) * 2);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(78).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList70(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableString(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(2)) == "Fracture" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(73).setNumber((( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(74).setNumber((( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(75).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(79).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList71(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableString(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(2)) == "Growth" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.GameCode.GDRegrowthObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRegrowthObjects3Objects, (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getX()), (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getY()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].returnVariable(gdjs.GameCode.GDRegrowthObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(6))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].returnVariable(gdjs.GameCode.GDRegrowthObjects3[i].getVariables().getFromIndex(1)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(8))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].returnVariable(gdjs.GameCode.GDRegrowthObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].returnVariable(gdjs.GameCode.GDRegrowthObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(11))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].setZOrder(9);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);

gdjs.copyArray(runtimeScene.getObjects("Crack"), gdjs.GameCode.GDCrackObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects3Objects, (gdjs.GameCode.GDCellObjects3.length !== 0 ? gdjs.GameCode.GDCellObjects3[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrackObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects3[k] = gdjs.GameCode.GDCellObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.GameCode.GDGemObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects3Objects, (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getCenterXInScene()), (( gdjs.GameCode.GDCellObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects3[0].getVariables()).getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomFloatInRange(-40, 90));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3)).setNumber(gdjs.randomFloatInRange(-280, -170));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].setZOrder(27);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].getBehavior("Animation").setAnimationIndex((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(0))) - 1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(52).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList72(runtimeScene);} //End of subevents
}

}


{


const repeatCount4 = 3;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects4);

gdjs.GameCode.GDDebrisObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDebrisObjects4Objects, (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getCenterXInScene()), (( gdjs.GameCode.GDCellObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects4[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects4[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.GameCode.GDCellObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects4[0].getVariables()).getFromIndex(2)))).getChild("DebrisColor")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects4[i].returnVariable(gdjs.GameCode.GDDebrisObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomFloatInRange(-60, 160));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects4[i].returnVariable(gdjs.GameCode.GDDebrisObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomFloatInRange(-260, -60));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects4[i].setZOrder(25);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCellObjects2, gdjs.GameCode.GDCellObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList75 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCellObjects1 */

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDCellObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDCellObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDCellObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDCellObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(44).add(1);
}

{ //Subevents: 
gdjs.GameCode.eventsList74(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList76 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects1[i].getVariableNumber(gdjs.GameCode.GDCellObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects1[k] = gdjs.GameCode.GDCellObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList75(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList77 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_building_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_building_02.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_building_03.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_building_04.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_frame_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_house_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_rubble_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects5[i].getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(8)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects5[k] = gdjs.GameCode.GDCellObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setTexture("formation_owner_tower_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects5[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects5[i].getVariables().getFromIndex(11))));
}
}
}

}


{

/* Reuse gdjs.GameCode.GDCellObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)) == 12 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setTexture("formation_owner_wall_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11))));
}
}
}

}


};gdjs.GameCode.eventsList78 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCellObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCellObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects4[0].getVariables()).getFromIndex(8)))).getChild("Art")) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList77(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList79 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects4);
gdjs.copyArray(gdjs.GameCode.GDRegrowthObjects3, gdjs.GameCode.GDRegrowthObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableString(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)) == "Core" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRegrowthObjects4[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(76).setNumber(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDRegrowthObjects3, gdjs.GameCode.GDRegrowthObjects4);

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRegrowthObjects4[0].getPointX("")) + 12 > (( gdjs.GameCode.GDTowerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects4[0].getPointX("")) - 22);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRegrowthObjects4[0].getPointX("")) < (( gdjs.GameCode.GDTowerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects4[0].getPointX("")) + 21.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRegrowthObjects4[0].getPointY("")) + 12 > (( gdjs.GameCode.GDTowerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects4[0].getPointY("")) - 80);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(77).setNumber(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDRegrowthObjects3, gdjs.GameCode.GDRegrowthObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRegrowthObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDRegrowthObjects4[i].getVariableNumber(gdjs.GameCode.GDRegrowthObjects4[i].getVariables().getFromIndex(4)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RegrowTime")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRegrowthObjects4[k] = gdjs.GameCode.GDRegrowthObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDRegrowthObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRegrowthObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects4[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDRegrowthObjects3, gdjs.GameCode.GDRegrowthObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRegrowthObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDRegrowthObjects4[i].getVariableNumber(gdjs.GameCode.GDRegrowthObjects4[i].getVariables().getFromIndex(4)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RegrowTime")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRegrowthObjects4[k] = gdjs.GameCode.GDRegrowthObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDRegrowthObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(77).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRegrowthObjects4 */
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, (( gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRegrowthObjects4[0].getPointX("")), (( gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDRegrowthObjects4[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(2)).setString("Growth");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Growth").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Growth").getChild("HP")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRegrowthObjects4[0].getVariables()).getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRegrowthObjects4[0].getVariables()).getFromIndex(1))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(10)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRegrowthObjects4[0].getVariables()).getFromIndex(2))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(11)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDRegrowthObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDRegrowthObjects4[0].getVariables()).getFromIndex(3))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(9)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setTexture("tile_growth.png", runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(80).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects4[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameCode.eventsList78(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList80 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Regrowth"), gdjs.GameCode.GDRegrowthObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDRegrowthObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDRegrowthObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDRegrowthObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDRegrowthObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects3[i].returnVariable(gdjs.GameCode.GDRegrowthObjects3[i].getVariables().getFromIndex(4)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(76).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(77).setNumber(0);
}

{ //Subevents: 
gdjs.GameCode.eventsList79(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Regrowth"), gdjs.GameCode.GDRegrowthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRegrowthObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRegrowthObjects1[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRegrowthObjects1[k] = gdjs.GameCode.GDRegrowthObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRegrowthObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRegrowthObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRegrowthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRegrowthObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList81 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects1[i].getVariableNumber(gdjs.GameCode.GDCellObjects1[i].getVariables().getFromIndex(3)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects1[k] = gdjs.GameCode.GDCellObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects1[i].getTimerElapsedTimeInSecondsOrNaN("flash") > 0.06 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects1[k] = gdjs.GameCode.GDCellObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects1[i].returnVariable(gdjs.GameCode.GDCellObjects1[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
}

}


};gdjs.GameCode.eventsList82 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Debris"), gdjs.GameCode.GDDebrisObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spark"), gdjs.GameCode.GDSparkObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].returnVariable(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(1)).add(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].setPosition((gdjs.GameCode.GDDebrisObjects2[i].getPointX("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(0))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)),(gdjs.GameCode.GDDebrisObjects2[i].getPointY("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(1))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].returnVariable(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(2)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDSparkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSparkObjects2[i].returnVariable(gdjs.GameCode.GDSparkObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Debris"), gdjs.GameCode.GDDebrisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDebrisObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDebrisObjects2[i].getVariableNumber(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(2)) > 0.7 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDebrisObjects2[k] = gdjs.GameCode.GDDebrisObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDebrisObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDebrisObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Debris"), gdjs.GameCode.GDDebrisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDebrisObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDebrisObjects2[i].getY() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDebrisObjects2[k] = gdjs.GameCode.GDDebrisObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDebrisObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDebrisObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spark"), gdjs.GameCode.GDSparkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSparkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSparkObjects1[i].getVariableNumber(gdjs.GameCode.GDSparkObjects1[i].getVariables().getFromIndex(0)) > 0.07 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSparkObjects1[k] = gdjs.GameCode.GDSparkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSparkObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSparkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSparkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSparkObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTowerObjects2Objects = Hashtable.newFrom({"Tower": gdjs.GameCode.GDTowerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects2});
gdjs.GameCode.eventsList83 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);
gdjs.copyArray(gdjs.GameCode.GDTowerObjects1, gdjs.GameCode.GDTowerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTowerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects2[i].setX(gdjs.GameCode.GDTowerObjects2[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24))));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTowerObjects1, gdjs.GameCode.GDTowerObjects2);

{for(var i = 0, len = gdjs.GameCode.GDTowerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


};gdjs.GameCode.eventsList84 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "TotalGems");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "TotalGems", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(54));
}
}

}


};gdjs.GameCode.eventsList85 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDGemObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDGemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDGemObjects3[0].getVariables()).getFromIndex(3)))) < 60);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}

}


};gdjs.GameCode.eventsList86 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDGemObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getY() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - 6 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].setPosition((gdjs.GameCode.GDGemObjects3[i].getPointX("")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - 6);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3)).setNumber(-((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemBounce")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(2)).mul(0.7);
}
}

{ //Subevents
gdjs.GameCode.eventsList85(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemPopupObjects3Objects = Hashtable.newFrom({"GemPopup": gdjs.GameCode.GDGemPopupObjects3});
gdjs.GameCode.eventsList87 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDGemObjects2, gdjs.GameCode.GDGemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(4)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemGravity")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].setPosition((gdjs.GameCode.GDGemObjects3[i].getPointX("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(2))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)),(gdjs.GameCode.GDGemObjects3[i].getPointY("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(3))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

{ //Subevents
gdjs.GameCode.eventsList86(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDGemObjects2, gdjs.GameCode.GDGemObjects3);

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(58).setNumber((( gdjs.GameCode.GDTowerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects3[0].getPointX("")) - (( gdjs.GameCode.GDGemObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGemObjects3[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(59).setNumber((( gdjs.GameCode.GDTowerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects3[0].getPointY("")) - 48 - (( gdjs.GameCode.GDGemObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDGemObjects3[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(60).setNumber(Math.sqrt(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(58)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(58)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(59)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(59))));
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDGemObjects2, gdjs.GameCode.GDGemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(4)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(60).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(66)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(4)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(5)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemMagnetSpeed")));
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDGemObjects2, gdjs.GameCode.GDGemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(4)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(60).getAsNumber() < 14);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects3);
gdjs.GameCode.GDGemPopupObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(53).add((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDGemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDGemObjects3[0].getVariables()).getFromIndex(1))));
}
{runtimeScene.getScene().getVariables().getFromIndex(55).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemPopupObjects3Objects, (( gdjs.GameCode.GDTowerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects3[0].getPointX("")) - 10, (( gdjs.GameCode.GDTowerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects3[0].getPointY("")) - 120, "");
}
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects3[i].getBehavior("Text").setText("+" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDGemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDGemObjects3[0].getVariables()).getFromIndex(1)))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects3[i].setZOrder(60);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDGemObjects2, gdjs.GameCode.GDGemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects3[i].getVariableNumber(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(4)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects3[k] = gdjs.GameCode.GDGemObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(60).getAsNumber() >= 14);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].returnVariable(gdjs.GameCode.GDGemObjects3[i].getVariables().getFromIndex(5)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GemMagnetAccel")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(61).setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(60)), (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDGemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDGemObjects3[0].getVariables()).getFromIndex(5))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].setPosition((gdjs.GameCode.GDGemObjects3[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(58)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(60)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(61)),(gdjs.GameCode.GDGemObjects3[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(59)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(60)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(61)));
}
}
}

}


};gdjs.GameCode.eventsList88 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GemPopup"), gdjs.GameCode.GDGemPopupObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects2[i].returnVariable(gdjs.GameCode.GDGemPopupObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects2[i].setPosition((gdjs.GameCode.GDGemPopupObjects2[i].getX()),(gdjs.GameCode.GDGemPopupObjects2[i].getY()) - 50 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects2[i].setOpacity(255 * (1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDGemPopupObjects2[i].getVariables().getFromIndex(0))) / 0.8));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GemPopup"), gdjs.GameCode.GDGemPopupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemPopupObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemPopupObjects1[i].getVariableNumber(gdjs.GameCode.GDGemPopupObjects1[i].getVariables().getFromIndex(0)) > 0.8 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemPopupObjects1[k] = gdjs.GameCode.GDGemPopupObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGemPopupObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemPopupObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGemPopupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGemPopupObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList89 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(57).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GemsResultText"), gdjs.GameCode.GDGemsResultTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(54).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(53)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(54)));
}
{runtimeScene.getScene().getVariables().getFromIndex(57).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDGemsResultTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGemsResultTextObjects1[i].getBehavior("Text").setText("GEMS  +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(53))) + "   (TOTAL " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(54))) + ")");
}
}
}

}


};gdjs.GameCode.eventsList90 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BestText"), gdjs.GameCode.GDBestTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("DistanceText"), gdjs.GameCode.GDDistanceTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("GasText"), gdjs.GameCode.GDGasTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("WarningEdge"), gdjs.GameCode.GDWarningEdgeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDistanceTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDistanceTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)))) + " m");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBestTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestTextObjects2[i].getBehavior("Text").setText("BEST " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))) + " m");
}
}
{for(var i = 0, len = gdjs.GameCode.GDGasTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGasTextObjects2[i].getBehavior("Text").setText("GAS " + gdjs.evtTools.common.toString(Math.max(0, Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(46)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter"))))) + " m BEHIND");
}
}
{for(var i = 0, len = gdjs.GameCode.GDWarningEdgeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWarningEdgeObjects2[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(46))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")), 0, 1) * (190 + 65 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 14)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GemText"), gdjs.GameCode.GDGemTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGemTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemTextObjects2[i].getBehavior("Text").setText("GEMS " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(53))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(46).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GasText"), gdjs.GameCode.GDGasTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGasTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGasTextObjects2[i].setColor("255;80;60");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(46).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GasText"), gdjs.GameCode.GDGasTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGasTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGasTextObjects2[i].setColor("200;235;150");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HintText"), gdjs.GameCode.GDHintTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHintTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHintTextObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList91 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(81).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(84).setNumber(2.5);
}

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(81).getAsNumber() < 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81)) + 1).getChild("Start")));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RegionBanner"), gdjs.GameCode.GDRegionBannerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(81).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(84).setNumber(2.5);
}
{for(var i = 0, len = gdjs.GameCode.GDRegionBannerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRegionBannerObjects1[i].getBehavior("Text").setText("REGION " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81)) + 1) + ":  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81))).getChild("Name")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RegionBanner"), gdjs.GameCode.GDRegionBannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.GameCode.GDSkyObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(82).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81))).getChild("CloudSpeed")));
}
{runtimeScene.getScene().getVariables().getFromIndex(83).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81))).getChild("GemChance")));
}
{for(var i = 0, len = gdjs.GameCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSkyObjects1[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(81))).getChild("Tint")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(84).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(84)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{for(var i = 0, len = gdjs.GameCode.GDRegionBannerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRegionBannerObjects1[i].setOpacity(255 * Math.min(1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(84))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRegionBannerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRegionBannerObjects1[i].setPosition(270 - (gdjs.GameCode.GDRegionBannerObjects1[i].getWidth()) / 2,190);
}
}
}

}


{


gdjs.GameCode.eventsList45(runtimeScene);
}


{


gdjs.GameCode.eventsList46(runtimeScene);
}


{


gdjs.GameCode.eventsList49(runtimeScene);
}


{


gdjs.GameCode.eventsList50(runtimeScene);
}


{


gdjs.GameCode.eventsList51(runtimeScene);
}


{


gdjs.GameCode.eventsList52(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Ram").getChild("Cooldown")) * (1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PowerStartCharged"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Salvo").getChild("Cooldown")) * (1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PowerStartCharged"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Laser").getChild("Cooldown")) * (1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PowerStartCharged"))));
}

{ //Subevents
gdjs.GameCode.eventsList53(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(70)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(71)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(72)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(67).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(67)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(68).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(68)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
{runtimeScene.getScene().getVariables().getFromIndex(69).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(69)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
}

}


{


gdjs.GameCode.eventsList54(runtimeScene);
}


{


gdjs.GameCode.eventsList55(runtimeScene);
}


{


gdjs.GameCode.eventsList56(runtimeScene);
}


{


gdjs.GameCode.eventsList58(runtimeScene);
}


{


gdjs.GameCode.eventsList62(runtimeScene);
}


{


gdjs.GameCode.eventsList64(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserBeam"), gdjs.GameCode.GDLaserBeamObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ram"), gdjs.GameCode.GDRamObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLaserBeamObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLaserBeamObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRamObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRamObjects1[i].hide();
}
}
}

}


{


gdjs.GameCode.eventsList65(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(39).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BulletSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDBulletObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDBulletObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDBulletObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDBulletObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(40).setNumber(0);
}

{ //Subevents: 
gdjs.GameCode.eventsList68(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.GameCode.eventsList69(runtimeScene);
}


{


gdjs.GameCode.eventsList76(runtimeScene);
}


{


gdjs.GameCode.eventsList80(runtimeScene);
}


{


gdjs.GameCode.eventsList81(runtimeScene);
}


{


gdjs.GameCode.eventsList82(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(65)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects1[i].setX(gdjs.GameCode.GDTowerObjects1[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24))));
}
}

{ //Subevents
gdjs.GameCode.eventsList83(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList84(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gem"), gdjs.GameCode.GDGemObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDGemObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDGemObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDGemObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDGemObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList87(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gem"), gdjs.GameCode.GDGemObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGemObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGemObjects1[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGemObjects1[k] = gdjs.GameCode.GDGemObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGemObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(56).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDGemObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


gdjs.GameCode.eventsList88(runtimeScene);
}


{


gdjs.GameCode.eventsList89(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(45).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - 22 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CloudStartGap")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(45).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(82)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(45)) < (( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) + 60);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(45).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(82)) * 2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.GameCode.GDCloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(46).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - 22 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(45)));
}
{for(var i = 0, len = gdjs.GameCode.GDCloudObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCloudObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(45)),-20 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.7) * 8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(46).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setString("Dying");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hills"), gdjs.GameCode.GDHillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CameraLead")), "", 0);
}
{/* Skipped action (empty type) */}
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 270,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 270);
}
}
{for(var i = 0, len = gdjs.GameCode.GDHillsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHillsObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 270,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) + 20 - 260);
}
}
{for(var i = 0, len = gdjs.GameCode.GDHillsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHillsObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.3);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShowFarLayer")) == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hills"), gdjs.GameCode.GDHillsObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHillsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHillsObjects1[i].hide();
}
}
}

}


{


gdjs.GameCode.eventsList90(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDTowerObjects1.length = 0;
gdjs.GameCode.GDTowerObjects2.length = 0;
gdjs.GameCode.GDTowerObjects3.length = 0;
gdjs.GameCode.GDTowerObjects4.length = 0;
gdjs.GameCode.GDTowerObjects5.length = 0;
gdjs.GameCode.GDTowerObjects6.length = 0;
gdjs.GameCode.GDTurretObjects1.length = 0;
gdjs.GameCode.GDTurretObjects2.length = 0;
gdjs.GameCode.GDTurretObjects3.length = 0;
gdjs.GameCode.GDTurretObjects4.length = 0;
gdjs.GameCode.GDTurretObjects5.length = 0;
gdjs.GameCode.GDTurretObjects6.length = 0;
gdjs.GameCode.GDBulletObjects1.length = 0;
gdjs.GameCode.GDBulletObjects2.length = 0;
gdjs.GameCode.GDBulletObjects3.length = 0;
gdjs.GameCode.GDBulletObjects4.length = 0;
gdjs.GameCode.GDBulletObjects5.length = 0;
gdjs.GameCode.GDBulletObjects6.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects1.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects2.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects3.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects4.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects5.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects6.length = 0;
gdjs.GameCode.GDCellObjects1.length = 0;
gdjs.GameCode.GDCellObjects2.length = 0;
gdjs.GameCode.GDCellObjects3.length = 0;
gdjs.GameCode.GDCellObjects4.length = 0;
gdjs.GameCode.GDCellObjects5.length = 0;
gdjs.GameCode.GDCellObjects6.length = 0;
gdjs.GameCode.GDCrackObjects1.length = 0;
gdjs.GameCode.GDCrackObjects2.length = 0;
gdjs.GameCode.GDCrackObjects3.length = 0;
gdjs.GameCode.GDCrackObjects4.length = 0;
gdjs.GameCode.GDCrackObjects5.length = 0;
gdjs.GameCode.GDCrackObjects6.length = 0;
gdjs.GameCode.GDRamObjects1.length = 0;
gdjs.GameCode.GDRamObjects2.length = 0;
gdjs.GameCode.GDRamObjects3.length = 0;
gdjs.GameCode.GDRamObjects4.length = 0;
gdjs.GameCode.GDRamObjects5.length = 0;
gdjs.GameCode.GDRamObjects6.length = 0;
gdjs.GameCode.GDRegrowthObjects1.length = 0;
gdjs.GameCode.GDRegrowthObjects2.length = 0;
gdjs.GameCode.GDRegrowthObjects3.length = 0;
gdjs.GameCode.GDRegrowthObjects4.length = 0;
gdjs.GameCode.GDRegrowthObjects5.length = 0;
gdjs.GameCode.GDRegrowthObjects6.length = 0;
gdjs.GameCode.GDRegionBannerObjects1.length = 0;
gdjs.GameCode.GDRegionBannerObjects2.length = 0;
gdjs.GameCode.GDRegionBannerObjects3.length = 0;
gdjs.GameCode.GDRegionBannerObjects4.length = 0;
gdjs.GameCode.GDRegionBannerObjects5.length = 0;
gdjs.GameCode.GDRegionBannerObjects6.length = 0;
gdjs.GameCode.GDRocketObjects1.length = 0;
gdjs.GameCode.GDRocketObjects2.length = 0;
gdjs.GameCode.GDRocketObjects3.length = 0;
gdjs.GameCode.GDRocketObjects4.length = 0;
gdjs.GameCode.GDRocketObjects5.length = 0;
gdjs.GameCode.GDRocketObjects6.length = 0;
gdjs.GameCode.GDBlastObjects1.length = 0;
gdjs.GameCode.GDBlastObjects2.length = 0;
gdjs.GameCode.GDBlastObjects3.length = 0;
gdjs.GameCode.GDBlastObjects4.length = 0;
gdjs.GameCode.GDBlastObjects5.length = 0;
gdjs.GameCode.GDBlastObjects6.length = 0;
gdjs.GameCode.GDLaserBeamObjects1.length = 0;
gdjs.GameCode.GDLaserBeamObjects2.length = 0;
gdjs.GameCode.GDLaserBeamObjects3.length = 0;
gdjs.GameCode.GDLaserBeamObjects4.length = 0;
gdjs.GameCode.GDLaserBeamObjects5.length = 0;
gdjs.GameCode.GDLaserBeamObjects6.length = 0;
gdjs.GameCode.GDPowerButtonObjects1.length = 0;
gdjs.GameCode.GDPowerButtonObjects2.length = 0;
gdjs.GameCode.GDPowerButtonObjects3.length = 0;
gdjs.GameCode.GDPowerButtonObjects4.length = 0;
gdjs.GameCode.GDPowerButtonObjects5.length = 0;
gdjs.GameCode.GDPowerButtonObjects6.length = 0;
gdjs.GameCode.GDPowerShadeObjects1.length = 0;
gdjs.GameCode.GDPowerShadeObjects2.length = 0;
gdjs.GameCode.GDPowerShadeObjects3.length = 0;
gdjs.GameCode.GDPowerShadeObjects4.length = 0;
gdjs.GameCode.GDPowerShadeObjects5.length = 0;
gdjs.GameCode.GDPowerShadeObjects6.length = 0;
gdjs.GameCode.GDGemObjects1.length = 0;
gdjs.GameCode.GDGemObjects2.length = 0;
gdjs.GameCode.GDGemObjects3.length = 0;
gdjs.GameCode.GDGemObjects4.length = 0;
gdjs.GameCode.GDGemObjects5.length = 0;
gdjs.GameCode.GDGemObjects6.length = 0;
gdjs.GameCode.GDGemMarkObjects1.length = 0;
gdjs.GameCode.GDGemMarkObjects2.length = 0;
gdjs.GameCode.GDGemMarkObjects3.length = 0;
gdjs.GameCode.GDGemMarkObjects4.length = 0;
gdjs.GameCode.GDGemMarkObjects5.length = 0;
gdjs.GameCode.GDGemMarkObjects6.length = 0;
gdjs.GameCode.GDGemPopupObjects1.length = 0;
gdjs.GameCode.GDGemPopupObjects2.length = 0;
gdjs.GameCode.GDGemPopupObjects3.length = 0;
gdjs.GameCode.GDGemPopupObjects4.length = 0;
gdjs.GameCode.GDGemPopupObjects5.length = 0;
gdjs.GameCode.GDGemPopupObjects6.length = 0;
gdjs.GameCode.GDDebrisObjects1.length = 0;
gdjs.GameCode.GDDebrisObjects2.length = 0;
gdjs.GameCode.GDDebrisObjects3.length = 0;
gdjs.GameCode.GDDebrisObjects4.length = 0;
gdjs.GameCode.GDDebrisObjects5.length = 0;
gdjs.GameCode.GDDebrisObjects6.length = 0;
gdjs.GameCode.GDSparkObjects1.length = 0;
gdjs.GameCode.GDSparkObjects2.length = 0;
gdjs.GameCode.GDSparkObjects3.length = 0;
gdjs.GameCode.GDSparkObjects4.length = 0;
gdjs.GameCode.GDSparkObjects5.length = 0;
gdjs.GameCode.GDSparkObjects6.length = 0;
gdjs.GameCode.GDCrosshairObjects1.length = 0;
gdjs.GameCode.GDCrosshairObjects2.length = 0;
gdjs.GameCode.GDCrosshairObjects3.length = 0;
gdjs.GameCode.GDCrosshairObjects4.length = 0;
gdjs.GameCode.GDCrosshairObjects5.length = 0;
gdjs.GameCode.GDCrosshairObjects6.length = 0;
gdjs.GameCode.GDCloudObjects1.length = 0;
gdjs.GameCode.GDCloudObjects2.length = 0;
gdjs.GameCode.GDCloudObjects3.length = 0;
gdjs.GameCode.GDCloudObjects4.length = 0;
gdjs.GameCode.GDCloudObjects5.length = 0;
gdjs.GameCode.GDCloudObjects6.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDGroundObjects6.length = 0;
gdjs.GameCode.GDHillsObjects1.length = 0;
gdjs.GameCode.GDHillsObjects2.length = 0;
gdjs.GameCode.GDHillsObjects3.length = 0;
gdjs.GameCode.GDHillsObjects4.length = 0;
gdjs.GameCode.GDHillsObjects5.length = 0;
gdjs.GameCode.GDHillsObjects6.length = 0;
gdjs.GameCode.GDSkyObjects1.length = 0;
gdjs.GameCode.GDSkyObjects2.length = 0;
gdjs.GameCode.GDSkyObjects3.length = 0;
gdjs.GameCode.GDSkyObjects4.length = 0;
gdjs.GameCode.GDSkyObjects5.length = 0;
gdjs.GameCode.GDSkyObjects6.length = 0;
gdjs.GameCode.GDDistanceTextObjects1.length = 0;
gdjs.GameCode.GDDistanceTextObjects2.length = 0;
gdjs.GameCode.GDDistanceTextObjects3.length = 0;
gdjs.GameCode.GDDistanceTextObjects4.length = 0;
gdjs.GameCode.GDDistanceTextObjects5.length = 0;
gdjs.GameCode.GDDistanceTextObjects6.length = 0;
gdjs.GameCode.GDBestTextObjects1.length = 0;
gdjs.GameCode.GDBestTextObjects2.length = 0;
gdjs.GameCode.GDBestTextObjects3.length = 0;
gdjs.GameCode.GDBestTextObjects4.length = 0;
gdjs.GameCode.GDBestTextObjects5.length = 0;
gdjs.GameCode.GDBestTextObjects6.length = 0;
gdjs.GameCode.GDGasTextObjects1.length = 0;
gdjs.GameCode.GDGasTextObjects2.length = 0;
gdjs.GameCode.GDGasTextObjects3.length = 0;
gdjs.GameCode.GDGasTextObjects4.length = 0;
gdjs.GameCode.GDGasTextObjects5.length = 0;
gdjs.GameCode.GDGasTextObjects6.length = 0;
gdjs.GameCode.GDGemTextObjects1.length = 0;
gdjs.GameCode.GDGemTextObjects2.length = 0;
gdjs.GameCode.GDGemTextObjects3.length = 0;
gdjs.GameCode.GDGemTextObjects4.length = 0;
gdjs.GameCode.GDGemTextObjects5.length = 0;
gdjs.GameCode.GDGemTextObjects6.length = 0;
gdjs.GameCode.GDGemsResultTextObjects1.length = 0;
gdjs.GameCode.GDGemsResultTextObjects2.length = 0;
gdjs.GameCode.GDGemsResultTextObjects3.length = 0;
gdjs.GameCode.GDGemsResultTextObjects4.length = 0;
gdjs.GameCode.GDGemsResultTextObjects5.length = 0;
gdjs.GameCode.GDGemsResultTextObjects6.length = 0;
gdjs.GameCode.GDOffsetButtonObjects1.length = 0;
gdjs.GameCode.GDOffsetButtonObjects2.length = 0;
gdjs.GameCode.GDOffsetButtonObjects3.length = 0;
gdjs.GameCode.GDOffsetButtonObjects4.length = 0;
gdjs.GameCode.GDOffsetButtonObjects5.length = 0;
gdjs.GameCode.GDOffsetButtonObjects6.length = 0;
gdjs.GameCode.GDOffsetTextObjects1.length = 0;
gdjs.GameCode.GDOffsetTextObjects2.length = 0;
gdjs.GameCode.GDOffsetTextObjects3.length = 0;
gdjs.GameCode.GDOffsetTextObjects4.length = 0;
gdjs.GameCode.GDOffsetTextObjects5.length = 0;
gdjs.GameCode.GDOffsetTextObjects6.length = 0;
gdjs.GameCode.GDHintTextObjects1.length = 0;
gdjs.GameCode.GDHintTextObjects2.length = 0;
gdjs.GameCode.GDHintTextObjects3.length = 0;
gdjs.GameCode.GDHintTextObjects4.length = 0;
gdjs.GameCode.GDHintTextObjects5.length = 0;
gdjs.GameCode.GDHintTextObjects6.length = 0;
gdjs.GameCode.GDWarningEdgeObjects1.length = 0;
gdjs.GameCode.GDWarningEdgeObjects2.length = 0;
gdjs.GameCode.GDWarningEdgeObjects3.length = 0;
gdjs.GameCode.GDWarningEdgeObjects4.length = 0;
gdjs.GameCode.GDWarningEdgeObjects5.length = 0;
gdjs.GameCode.GDWarningEdgeObjects6.length = 0;
gdjs.GameCode.GDPanelObjects1.length = 0;
gdjs.GameCode.GDPanelObjects2.length = 0;
gdjs.GameCode.GDPanelObjects3.length = 0;
gdjs.GameCode.GDPanelObjects4.length = 0;
gdjs.GameCode.GDPanelObjects5.length = 0;
gdjs.GameCode.GDPanelObjects6.length = 0;
gdjs.GameCode.GDGameOverTitleObjects1.length = 0;
gdjs.GameCode.GDGameOverTitleObjects2.length = 0;
gdjs.GameCode.GDGameOverTitleObjects3.length = 0;
gdjs.GameCode.GDGameOverTitleObjects4.length = 0;
gdjs.GameCode.GDGameOverTitleObjects5.length = 0;
gdjs.GameCode.GDGameOverTitleObjects6.length = 0;
gdjs.GameCode.GDResultTextObjects1.length = 0;
gdjs.GameCode.GDResultTextObjects2.length = 0;
gdjs.GameCode.GDResultTextObjects3.length = 0;
gdjs.GameCode.GDResultTextObjects4.length = 0;
gdjs.GameCode.GDResultTextObjects5.length = 0;
gdjs.GameCode.GDResultTextObjects6.length = 0;
gdjs.GameCode.GDBestResultTextObjects1.length = 0;
gdjs.GameCode.GDBestResultTextObjects2.length = 0;
gdjs.GameCode.GDBestResultTextObjects3.length = 0;
gdjs.GameCode.GDBestResultTextObjects4.length = 0;
gdjs.GameCode.GDBestResultTextObjects5.length = 0;
gdjs.GameCode.GDBestResultTextObjects6.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects5.length = 0;
gdjs.GameCode.GDRestartButtonObjects6.length = 0;
gdjs.GameCode.GDRestartTextObjects1.length = 0;
gdjs.GameCode.GDRestartTextObjects2.length = 0;
gdjs.GameCode.GDRestartTextObjects3.length = 0;
gdjs.GameCode.GDRestartTextObjects4.length = 0;
gdjs.GameCode.GDRestartTextObjects5.length = 0;
gdjs.GameCode.GDRestartTextObjects6.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects1.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects2.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects3.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects4.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects5.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects6.length = 0;
gdjs.GameCode.GDUpgradesTextObjects1.length = 0;
gdjs.GameCode.GDUpgradesTextObjects2.length = 0;
gdjs.GameCode.GDUpgradesTextObjects3.length = 0;
gdjs.GameCode.GDUpgradesTextObjects4.length = 0;
gdjs.GameCode.GDUpgradesTextObjects5.length = 0;
gdjs.GameCode.GDUpgradesTextObjects6.length = 0;

gdjs.GameCode.eventsList91(runtimeScene);
gdjs.GameCode.GDTowerObjects1.length = 0;
gdjs.GameCode.GDTowerObjects2.length = 0;
gdjs.GameCode.GDTowerObjects3.length = 0;
gdjs.GameCode.GDTowerObjects4.length = 0;
gdjs.GameCode.GDTowerObjects5.length = 0;
gdjs.GameCode.GDTowerObjects6.length = 0;
gdjs.GameCode.GDTurretObjects1.length = 0;
gdjs.GameCode.GDTurretObjects2.length = 0;
gdjs.GameCode.GDTurretObjects3.length = 0;
gdjs.GameCode.GDTurretObjects4.length = 0;
gdjs.GameCode.GDTurretObjects5.length = 0;
gdjs.GameCode.GDTurretObjects6.length = 0;
gdjs.GameCode.GDBulletObjects1.length = 0;
gdjs.GameCode.GDBulletObjects2.length = 0;
gdjs.GameCode.GDBulletObjects3.length = 0;
gdjs.GameCode.GDBulletObjects4.length = 0;
gdjs.GameCode.GDBulletObjects5.length = 0;
gdjs.GameCode.GDBulletObjects6.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects1.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects2.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects3.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects4.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects5.length = 0;
gdjs.GameCode.GDMuzzleFlashObjects6.length = 0;
gdjs.GameCode.GDCellObjects1.length = 0;
gdjs.GameCode.GDCellObjects2.length = 0;
gdjs.GameCode.GDCellObjects3.length = 0;
gdjs.GameCode.GDCellObjects4.length = 0;
gdjs.GameCode.GDCellObjects5.length = 0;
gdjs.GameCode.GDCellObjects6.length = 0;
gdjs.GameCode.GDCrackObjects1.length = 0;
gdjs.GameCode.GDCrackObjects2.length = 0;
gdjs.GameCode.GDCrackObjects3.length = 0;
gdjs.GameCode.GDCrackObjects4.length = 0;
gdjs.GameCode.GDCrackObjects5.length = 0;
gdjs.GameCode.GDCrackObjects6.length = 0;
gdjs.GameCode.GDRamObjects1.length = 0;
gdjs.GameCode.GDRamObjects2.length = 0;
gdjs.GameCode.GDRamObjects3.length = 0;
gdjs.GameCode.GDRamObjects4.length = 0;
gdjs.GameCode.GDRamObjects5.length = 0;
gdjs.GameCode.GDRamObjects6.length = 0;
gdjs.GameCode.GDRegrowthObjects1.length = 0;
gdjs.GameCode.GDRegrowthObjects2.length = 0;
gdjs.GameCode.GDRegrowthObjects3.length = 0;
gdjs.GameCode.GDRegrowthObjects4.length = 0;
gdjs.GameCode.GDRegrowthObjects5.length = 0;
gdjs.GameCode.GDRegrowthObjects6.length = 0;
gdjs.GameCode.GDRegionBannerObjects1.length = 0;
gdjs.GameCode.GDRegionBannerObjects2.length = 0;
gdjs.GameCode.GDRegionBannerObjects3.length = 0;
gdjs.GameCode.GDRegionBannerObjects4.length = 0;
gdjs.GameCode.GDRegionBannerObjects5.length = 0;
gdjs.GameCode.GDRegionBannerObjects6.length = 0;
gdjs.GameCode.GDRocketObjects1.length = 0;
gdjs.GameCode.GDRocketObjects2.length = 0;
gdjs.GameCode.GDRocketObjects3.length = 0;
gdjs.GameCode.GDRocketObjects4.length = 0;
gdjs.GameCode.GDRocketObjects5.length = 0;
gdjs.GameCode.GDRocketObjects6.length = 0;
gdjs.GameCode.GDBlastObjects1.length = 0;
gdjs.GameCode.GDBlastObjects2.length = 0;
gdjs.GameCode.GDBlastObjects3.length = 0;
gdjs.GameCode.GDBlastObjects4.length = 0;
gdjs.GameCode.GDBlastObjects5.length = 0;
gdjs.GameCode.GDBlastObjects6.length = 0;
gdjs.GameCode.GDLaserBeamObjects1.length = 0;
gdjs.GameCode.GDLaserBeamObjects2.length = 0;
gdjs.GameCode.GDLaserBeamObjects3.length = 0;
gdjs.GameCode.GDLaserBeamObjects4.length = 0;
gdjs.GameCode.GDLaserBeamObjects5.length = 0;
gdjs.GameCode.GDLaserBeamObjects6.length = 0;
gdjs.GameCode.GDPowerButtonObjects1.length = 0;
gdjs.GameCode.GDPowerButtonObjects2.length = 0;
gdjs.GameCode.GDPowerButtonObjects3.length = 0;
gdjs.GameCode.GDPowerButtonObjects4.length = 0;
gdjs.GameCode.GDPowerButtonObjects5.length = 0;
gdjs.GameCode.GDPowerButtonObjects6.length = 0;
gdjs.GameCode.GDPowerShadeObjects1.length = 0;
gdjs.GameCode.GDPowerShadeObjects2.length = 0;
gdjs.GameCode.GDPowerShadeObjects3.length = 0;
gdjs.GameCode.GDPowerShadeObjects4.length = 0;
gdjs.GameCode.GDPowerShadeObjects5.length = 0;
gdjs.GameCode.GDPowerShadeObjects6.length = 0;
gdjs.GameCode.GDGemObjects1.length = 0;
gdjs.GameCode.GDGemObjects2.length = 0;
gdjs.GameCode.GDGemObjects3.length = 0;
gdjs.GameCode.GDGemObjects4.length = 0;
gdjs.GameCode.GDGemObjects5.length = 0;
gdjs.GameCode.GDGemObjects6.length = 0;
gdjs.GameCode.GDGemMarkObjects1.length = 0;
gdjs.GameCode.GDGemMarkObjects2.length = 0;
gdjs.GameCode.GDGemMarkObjects3.length = 0;
gdjs.GameCode.GDGemMarkObjects4.length = 0;
gdjs.GameCode.GDGemMarkObjects5.length = 0;
gdjs.GameCode.GDGemMarkObjects6.length = 0;
gdjs.GameCode.GDGemPopupObjects1.length = 0;
gdjs.GameCode.GDGemPopupObjects2.length = 0;
gdjs.GameCode.GDGemPopupObjects3.length = 0;
gdjs.GameCode.GDGemPopupObjects4.length = 0;
gdjs.GameCode.GDGemPopupObjects5.length = 0;
gdjs.GameCode.GDGemPopupObjects6.length = 0;
gdjs.GameCode.GDDebrisObjects1.length = 0;
gdjs.GameCode.GDDebrisObjects2.length = 0;
gdjs.GameCode.GDDebrisObjects3.length = 0;
gdjs.GameCode.GDDebrisObjects4.length = 0;
gdjs.GameCode.GDDebrisObjects5.length = 0;
gdjs.GameCode.GDDebrisObjects6.length = 0;
gdjs.GameCode.GDSparkObjects1.length = 0;
gdjs.GameCode.GDSparkObjects2.length = 0;
gdjs.GameCode.GDSparkObjects3.length = 0;
gdjs.GameCode.GDSparkObjects4.length = 0;
gdjs.GameCode.GDSparkObjects5.length = 0;
gdjs.GameCode.GDSparkObjects6.length = 0;
gdjs.GameCode.GDCrosshairObjects1.length = 0;
gdjs.GameCode.GDCrosshairObjects2.length = 0;
gdjs.GameCode.GDCrosshairObjects3.length = 0;
gdjs.GameCode.GDCrosshairObjects4.length = 0;
gdjs.GameCode.GDCrosshairObjects5.length = 0;
gdjs.GameCode.GDCrosshairObjects6.length = 0;
gdjs.GameCode.GDCloudObjects1.length = 0;
gdjs.GameCode.GDCloudObjects2.length = 0;
gdjs.GameCode.GDCloudObjects3.length = 0;
gdjs.GameCode.GDCloudObjects4.length = 0;
gdjs.GameCode.GDCloudObjects5.length = 0;
gdjs.GameCode.GDCloudObjects6.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDGroundObjects6.length = 0;
gdjs.GameCode.GDHillsObjects1.length = 0;
gdjs.GameCode.GDHillsObjects2.length = 0;
gdjs.GameCode.GDHillsObjects3.length = 0;
gdjs.GameCode.GDHillsObjects4.length = 0;
gdjs.GameCode.GDHillsObjects5.length = 0;
gdjs.GameCode.GDHillsObjects6.length = 0;
gdjs.GameCode.GDSkyObjects1.length = 0;
gdjs.GameCode.GDSkyObjects2.length = 0;
gdjs.GameCode.GDSkyObjects3.length = 0;
gdjs.GameCode.GDSkyObjects4.length = 0;
gdjs.GameCode.GDSkyObjects5.length = 0;
gdjs.GameCode.GDSkyObjects6.length = 0;
gdjs.GameCode.GDDistanceTextObjects1.length = 0;
gdjs.GameCode.GDDistanceTextObjects2.length = 0;
gdjs.GameCode.GDDistanceTextObjects3.length = 0;
gdjs.GameCode.GDDistanceTextObjects4.length = 0;
gdjs.GameCode.GDDistanceTextObjects5.length = 0;
gdjs.GameCode.GDDistanceTextObjects6.length = 0;
gdjs.GameCode.GDBestTextObjects1.length = 0;
gdjs.GameCode.GDBestTextObjects2.length = 0;
gdjs.GameCode.GDBestTextObjects3.length = 0;
gdjs.GameCode.GDBestTextObjects4.length = 0;
gdjs.GameCode.GDBestTextObjects5.length = 0;
gdjs.GameCode.GDBestTextObjects6.length = 0;
gdjs.GameCode.GDGasTextObjects1.length = 0;
gdjs.GameCode.GDGasTextObjects2.length = 0;
gdjs.GameCode.GDGasTextObjects3.length = 0;
gdjs.GameCode.GDGasTextObjects4.length = 0;
gdjs.GameCode.GDGasTextObjects5.length = 0;
gdjs.GameCode.GDGasTextObjects6.length = 0;
gdjs.GameCode.GDGemTextObjects1.length = 0;
gdjs.GameCode.GDGemTextObjects2.length = 0;
gdjs.GameCode.GDGemTextObjects3.length = 0;
gdjs.GameCode.GDGemTextObjects4.length = 0;
gdjs.GameCode.GDGemTextObjects5.length = 0;
gdjs.GameCode.GDGemTextObjects6.length = 0;
gdjs.GameCode.GDGemsResultTextObjects1.length = 0;
gdjs.GameCode.GDGemsResultTextObjects2.length = 0;
gdjs.GameCode.GDGemsResultTextObjects3.length = 0;
gdjs.GameCode.GDGemsResultTextObjects4.length = 0;
gdjs.GameCode.GDGemsResultTextObjects5.length = 0;
gdjs.GameCode.GDGemsResultTextObjects6.length = 0;
gdjs.GameCode.GDOffsetButtonObjects1.length = 0;
gdjs.GameCode.GDOffsetButtonObjects2.length = 0;
gdjs.GameCode.GDOffsetButtonObjects3.length = 0;
gdjs.GameCode.GDOffsetButtonObjects4.length = 0;
gdjs.GameCode.GDOffsetButtonObjects5.length = 0;
gdjs.GameCode.GDOffsetButtonObjects6.length = 0;
gdjs.GameCode.GDOffsetTextObjects1.length = 0;
gdjs.GameCode.GDOffsetTextObjects2.length = 0;
gdjs.GameCode.GDOffsetTextObjects3.length = 0;
gdjs.GameCode.GDOffsetTextObjects4.length = 0;
gdjs.GameCode.GDOffsetTextObjects5.length = 0;
gdjs.GameCode.GDOffsetTextObjects6.length = 0;
gdjs.GameCode.GDHintTextObjects1.length = 0;
gdjs.GameCode.GDHintTextObjects2.length = 0;
gdjs.GameCode.GDHintTextObjects3.length = 0;
gdjs.GameCode.GDHintTextObjects4.length = 0;
gdjs.GameCode.GDHintTextObjects5.length = 0;
gdjs.GameCode.GDHintTextObjects6.length = 0;
gdjs.GameCode.GDWarningEdgeObjects1.length = 0;
gdjs.GameCode.GDWarningEdgeObjects2.length = 0;
gdjs.GameCode.GDWarningEdgeObjects3.length = 0;
gdjs.GameCode.GDWarningEdgeObjects4.length = 0;
gdjs.GameCode.GDWarningEdgeObjects5.length = 0;
gdjs.GameCode.GDWarningEdgeObjects6.length = 0;
gdjs.GameCode.GDPanelObjects1.length = 0;
gdjs.GameCode.GDPanelObjects2.length = 0;
gdjs.GameCode.GDPanelObjects3.length = 0;
gdjs.GameCode.GDPanelObjects4.length = 0;
gdjs.GameCode.GDPanelObjects5.length = 0;
gdjs.GameCode.GDPanelObjects6.length = 0;
gdjs.GameCode.GDGameOverTitleObjects1.length = 0;
gdjs.GameCode.GDGameOverTitleObjects2.length = 0;
gdjs.GameCode.GDGameOverTitleObjects3.length = 0;
gdjs.GameCode.GDGameOverTitleObjects4.length = 0;
gdjs.GameCode.GDGameOverTitleObjects5.length = 0;
gdjs.GameCode.GDGameOverTitleObjects6.length = 0;
gdjs.GameCode.GDResultTextObjects1.length = 0;
gdjs.GameCode.GDResultTextObjects2.length = 0;
gdjs.GameCode.GDResultTextObjects3.length = 0;
gdjs.GameCode.GDResultTextObjects4.length = 0;
gdjs.GameCode.GDResultTextObjects5.length = 0;
gdjs.GameCode.GDResultTextObjects6.length = 0;
gdjs.GameCode.GDBestResultTextObjects1.length = 0;
gdjs.GameCode.GDBestResultTextObjects2.length = 0;
gdjs.GameCode.GDBestResultTextObjects3.length = 0;
gdjs.GameCode.GDBestResultTextObjects4.length = 0;
gdjs.GameCode.GDBestResultTextObjects5.length = 0;
gdjs.GameCode.GDBestResultTextObjects6.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects5.length = 0;
gdjs.GameCode.GDRestartButtonObjects6.length = 0;
gdjs.GameCode.GDRestartTextObjects1.length = 0;
gdjs.GameCode.GDRestartTextObjects2.length = 0;
gdjs.GameCode.GDRestartTextObjects3.length = 0;
gdjs.GameCode.GDRestartTextObjects4.length = 0;
gdjs.GameCode.GDRestartTextObjects5.length = 0;
gdjs.GameCode.GDRestartTextObjects6.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects1.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects2.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects3.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects4.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects5.length = 0;
gdjs.GameCode.GDUpgradesButtonObjects6.length = 0;
gdjs.GameCode.GDUpgradesTextObjects1.length = 0;
gdjs.GameCode.GDUpgradesTextObjects2.length = 0;
gdjs.GameCode.GDUpgradesTextObjects3.length = 0;
gdjs.GameCode.GDUpgradesTextObjects4.length = 0;
gdjs.GameCode.GDUpgradesTextObjects5.length = 0;
gdjs.GameCode.GDUpgradesTextObjects6.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
