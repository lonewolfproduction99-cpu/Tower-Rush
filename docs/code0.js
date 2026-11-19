gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

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


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "Best");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "Best", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestResultText"), gdjs.GameCode.GDBestResultTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.GameCode.GDPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.GameCode.GDResultTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Run");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
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
for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects1[i].hide();
}
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(Math.min(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MaxFrameTime"))));
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter")));
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBestResultTextObjects2, gdjs.GameCode.GDBestResultTextObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Best", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBestResultTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBestResultTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestResultTextObjects2[i].getBehavior("Text").setText("BEST  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + " m");
}
}
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Dying");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestResultText"), gdjs.GameCode.GDBestResultTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameCode.GDCrosshairObjects2);
gdjs.copyArray(runtimeScene.getObjects("GameOverTitle"), gdjs.GameCode.GDGameOverTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects2);
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.GameCode.GDPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.GameCode.GDRestartTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.GameCode.GDResultTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Over");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
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
for(var i = 0, len = gdjs.GameCode.GDRestartButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRestartButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDRestartTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRestartTextObjects2[i].hide(false);
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
    gdjs.GameCode.GDResultTextObjects2[i].getBehavior("Text").setText("DISTANCE  " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))) + " m");
}
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Over");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameCode.GDRestartButtonObjects2});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 0.5);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 0.5);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 0.5);
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


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9))));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects4});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(8)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")));
}
}
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "|");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "#");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "H");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "C");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "M");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "G");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() == "W");
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCellObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GroundY")) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")), "");
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
    gdjs.GameCode.GDCellObjects4[i].returnVariable(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(6)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].setZOrder(10);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(15).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(14).add(1);
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_owner_wall_01.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects3[i].getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects3[i].setTexture("formation_placeholder_boulder.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(8))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 13);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects2[i].getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) ) {
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
    gdjs.GameCode.GDCellObjects2[i].setTexture("formation_placeholder_ruin.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(7))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects2[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCellObjects2[i].getVariables().getFromIndex(8))));
}
}
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("IntroFormations")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TestFormation")) >= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TestFormation")));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(9).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))).getChild("Shape")));
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))).getChild("Art")));
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.string.strFind(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)), "|"));
}

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber((gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9))) + 1) / (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) + 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)), (( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MinSpawnAheadOfTower"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0);
}
}

}


{


const repeatCount3 = gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(17).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)), 1));
}

{ //Subevents: 
gdjs.GameCode.eventsList14(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CellSize")) + gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GapMin")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("GapMax"))));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 270 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SpawnAhead")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("IntroFormations")), gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(2)) - 1));
}

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Crack"), gdjs.GameCode.GDCrackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCrackObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCrackObjects1[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 330 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCrackObjects1[k] = gdjs.GameCode.GDCrackObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCrackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrackObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTowerObjects2Objects = Hashtable.newFrom({"Tower": gdjs.GameCode.GDTowerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects2});
gdjs.GameCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects2);
gdjs.copyArray(gdjs.GameCode.GDTowerObjects1, gdjs.GameCode.GDTowerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTowerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects2[i].setX(gdjs.GameCode.GDTowerObjects2[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(19))));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber() == 0);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTowerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "AimOffset");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "AimOffset", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(32));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDOffsetButtonObjects2Objects = Hashtable.newFrom({"OffsetButton": gdjs.GameCode.GDOffsetButtonObjects2});
gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetMax")));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "AimOffset", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)));
}
}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetDefault")));
}

{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("AimOffsetStep")));
}

{ //Subevents
gdjs.GameCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OffsetText"), gdjs.GameCode.GDOffsetTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDOffsetTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOffsetTextObjects1[i].getBehavior("Text").setText("AIM +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32))));
}
}
}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
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
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0) + gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(1);
}
}

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber((( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointX("TurretMount")));
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber((( gdjs.GameCode.GDTowerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects2[0].getPointY("TurretMount")));
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(27)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + 200);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(gdjs.toDegrees(Math.atan2(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)))));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretMaxDown")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() < 134);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretMaxDown")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() >= 134);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(-180);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.GameCode.GDTurretObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(26).add(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(25)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)), -(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretTurnSpeed"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TurretTurnSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
{for(var i = 0, len = gdjs.GameCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTurretObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTurretObjects1[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrosshairObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24)));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects2});
gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0) > 96);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber() < 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MuzzleFlash"), gdjs.GameCode.GDMuzzleFlashObjects2);
gdjs.GameCode.GDBulletObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(31).add(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("FireRate")));
}
{runtimeScene.getScene().getVariables().getFromIndex(33).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)), "");
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)));
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
    gdjs.GameCode.GDMuzzleFlashObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)) + Math.cos(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)) + Math.sin(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BarrelLength")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMuzzleFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMuzzleFlashObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(26)));
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


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects = Hashtable.newFrom({"Cell": gdjs.GameCode.GDCellObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects3Objects = Hashtable.newFrom({"Spark": gdjs.GameCode.GDSparkObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects5Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDebrisObjects6Objects = Hashtable.newFrom({"Debris": gdjs.GameCode.GDDebrisObjects6});
gdjs.GameCode.eventsList26 = function(runtimeScene) {

};gdjs.GameCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects5);

gdjs.copyArray(runtimeScene.getObjects("Crack"), gdjs.GameCode.GDCrackObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects5Objects, (gdjs.GameCode.GDCellObjects5.length !== 0 ? gdjs.GameCode.GDCellObjects5[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrackObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCrackObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCrackObjects5[i].deleteFromScene(runtimeScene);
}
}
}

}


{


const repeatCount6 = 3;
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {
gdjs.copyArray(gdjs.GameCode.GDCellObjects4, gdjs.GameCode.GDCellObjects6);

gdjs.GameCode.GDDebrisObjects6.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDebrisObjects6Objects, (( gdjs.GameCode.GDCellObjects6.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects6[0].getCenterXInScene()), (( gdjs.GameCode.GDCellObjects6.length === 0 ) ? 0 :gdjs.GameCode.GDCellObjects6[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects6[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.GameCode.GDCellObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCellObjects6[0].getVariables()).getFromIndex(2)))).getChild("DebrisColor")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects6[i].returnVariable(gdjs.GameCode.GDDebrisObjects6[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomFloatInRange(-60, 160));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects6[i].returnVariable(gdjs.GameCode.GDDebrisObjects6[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomFloatInRange(-260, -60));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects6[i].setZOrder(25);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDCellObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCellObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects4[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects4Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrackObjects3Objects = Hashtable.newFrom({"Crack": gdjs.GameCode.GDCrackObjects3});
gdjs.GameCode.eventsList28 = function(runtimeScene) {

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


};gdjs.GameCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCellObjects3, gdjs.GameCode.GDCellObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCellObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCellObjects4[i].getVariableNumber(gdjs.GameCode.GDCellObjects4[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCellObjects4[k] = gdjs.GameCode.GDCellObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCellObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(39).add(1);
}

{ //Subevents
gdjs.GameCode.eventsList27(runtimeScene);} //End of subevents
}

}


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
gdjs.GameCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDBulletObjects2, gdjs.GameCode.GDBulletObjects3);

gdjs.copyArray(runtimeScene.getObjects("Cell"), gdjs.GameCode.GDCellObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCellObjects3Objects, (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getPointX("")), (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getPointY("")), (( gdjs.GameCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBulletObjects3[0].getAngle()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(34)) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBulletObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBulletObjects3[0].getVariables()).getFromIndex(0))), runtimeScene.getScene().getVariables().getFromIndex(36), runtimeScene.getScene().getVariables().getFromIndex(37), false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects3 */
/* Reuse gdjs.GameCode.GDCellObjects3 */
gdjs.GameCode.GDSparkObjects3.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(38).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCellObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCellObjects3[i].returnVariable(gdjs.GameCode.GDCellObjects3[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BulletDamage")));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(36)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(37)), "");
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
gdjs.GameCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(35).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBulletObjects2, gdjs.GameCode.GDBulletObjects3);

{for(var i = 0, len = gdjs.GameCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects3[i].setPosition((gdjs.GameCode.GDBulletObjects3[i].getPointX("")) + Math.cos(gdjs.toRad((gdjs.GameCode.GDBulletObjects3[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(34)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)))),(gdjs.GameCode.GDBulletObjects3[i].getPointY("")) + Math.sin(gdjs.toRad((gdjs.GameCode.GDBulletObjects3[i].getAngle()))) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(34)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects3[i].returnVariable(gdjs.GameCode.GDBulletObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSparkObjects2Objects = Hashtable.newFrom({"Spark": gdjs.GameCode.GDSparkObjects2});
gdjs.GameCode.eventsList31 = function(runtimeScene) {

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


};gdjs.GameCode.eventsList32 = function(runtimeScene) {

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


};gdjs.GameCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Debris"), gdjs.GameCode.GDDebrisObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spark"), gdjs.GameCode.GDSparkObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].returnVariable(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(1)).add(900 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].setPosition((gdjs.GameCode.GDDebrisObjects2[i].getPointX("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(0))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),(gdjs.GameCode.GDDebrisObjects2[i].getPointY("")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(1))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDDebrisObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebrisObjects2[i].returnVariable(gdjs.GameCode.GDDebrisObjects2[i].getVariables().getFromIndex(2)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDSparkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSparkObjects2[i].returnVariable(gdjs.GameCode.GDSparkObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
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


};gdjs.GameCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BestText"), gdjs.GameCode.GDBestTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("DistanceText"), gdjs.GameCode.GDDistanceTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("GasText"), gdjs.GameCode.GDGasTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("WarningEdge"), gdjs.GameCode.GDWarningEdgeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDistanceTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDistanceTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))) + " m");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBestTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestTextObjects2[i].getBehavior("Text").setText("BEST " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + " m");
}
}
{for(var i = 0, len = gdjs.GameCode.GDGasTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGasTextObjects2[i].getBehavior("Text").setText("GAS " + gdjs.evtTools.common.toString(Math.max(0, Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(41)) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PixelsPerMeter"))))) + " m BEHIND");
}
}
{for(var i = 0, len = gdjs.GameCode.GDWarningEdgeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWarningEdgeObjects2[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.clamp((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(41))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")), 0, 1) * (190 + 65 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 14)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WarningDistance")));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HintText"), gdjs.GameCode.GDHintTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHintTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHintTextObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList35 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TowerSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDTowerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTowerObjects1[i].setX(gdjs.GameCode.GDTowerObjects1[i].getX() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(19))));
}
}

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList22(runtimeScene);
}


{


gdjs.GameCode.eventsList23(runtimeScene);
}


{


gdjs.GameCode.eventsList24(runtimeScene);
}


{


gdjs.GameCode.eventsList25(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BulletSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(0);
}

{ //Subevents: 
gdjs.GameCode.eventsList30(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.GameCode.eventsList31(runtimeScene);
}


{


gdjs.GameCode.eventsList32(runtimeScene);
}


{


gdjs.GameCode.eventsList33(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(40).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - 22 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CloudStartGap")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(40).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CloudSpeed")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Over");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(40)) < (( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) + 60);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(40).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CloudSpeed")) * 2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.GameCode.GDCloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tower"), gdjs.GameCode.GDTowerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(41).setNumber((( gdjs.GameCode.GDTowerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTowerObjects1[0].getPointX("")) - 22 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(40)));
}
{for(var i = 0, len = gdjs.GameCode.GDCloudObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCloudObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(40)),-20 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.7) * 8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Run");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Dying");
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


gdjs.GameCode.eventsList34(runtimeScene);
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

gdjs.GameCode.eventsList35(runtimeScene);
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


return;

}

gdjs['GameCode'] = gdjs.GameCode;
