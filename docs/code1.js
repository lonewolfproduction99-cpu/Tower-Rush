gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.forEachIndex2 = 0;

gdjs.ShopCode.forEachObjects2 = [];

gdjs.ShopCode.forEachTemporary2 = null;

gdjs.ShopCode.forEachTotalCount2 = 0;

gdjs.ShopCode.GDShopTitleObjects1= [];
gdjs.ShopCode.GDShopTitleObjects2= [];
gdjs.ShopCode.GDShopTitleObjects3= [];
gdjs.ShopCode.GDShopTitleObjects4= [];
gdjs.ShopCode.GDShopGemsObjects1= [];
gdjs.ShopCode.GDShopGemsObjects2= [];
gdjs.ShopCode.GDShopGemsObjects3= [];
gdjs.ShopCode.GDShopGemsObjects4= [];
gdjs.ShopCode.GDShopMessageObjects1= [];
gdjs.ShopCode.GDShopMessageObjects2= [];
gdjs.ShopCode.GDShopMessageObjects3= [];
gdjs.ShopCode.GDShopMessageObjects4= [];
gdjs.ShopCode.GDRowPanelObjects1= [];
gdjs.ShopCode.GDRowPanelObjects2= [];
gdjs.ShopCode.GDRowPanelObjects3= [];
gdjs.ShopCode.GDRowPanelObjects4= [];
gdjs.ShopCode.GDRowNameObjects1= [];
gdjs.ShopCode.GDRowNameObjects2= [];
gdjs.ShopCode.GDRowNameObjects3= [];
gdjs.ShopCode.GDRowNameObjects4= [];
gdjs.ShopCode.GDRowInfoObjects1= [];
gdjs.ShopCode.GDRowInfoObjects2= [];
gdjs.ShopCode.GDRowInfoObjects3= [];
gdjs.ShopCode.GDRowInfoObjects4= [];
gdjs.ShopCode.GDBuyButtonObjects1= [];
gdjs.ShopCode.GDBuyButtonObjects2= [];
gdjs.ShopCode.GDBuyButtonObjects3= [];
gdjs.ShopCode.GDBuyButtonObjects4= [];
gdjs.ShopCode.GDBuyTextObjects1= [];
gdjs.ShopCode.GDBuyTextObjects2= [];
gdjs.ShopCode.GDBuyTextObjects3= [];
gdjs.ShopCode.GDBuyTextObjects4= [];
gdjs.ShopCode.GDPlayButtonObjects1= [];
gdjs.ShopCode.GDPlayButtonObjects2= [];
gdjs.ShopCode.GDPlayButtonObjects3= [];
gdjs.ShopCode.GDPlayButtonObjects4= [];
gdjs.ShopCode.GDPlayTextObjects1= [];
gdjs.ShopCode.GDPlayTextObjects2= [];
gdjs.ShopCode.GDPlayTextObjects3= [];
gdjs.ShopCode.GDPlayTextObjects4= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene) {

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
}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

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
}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

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
}

}


};gdjs.ShopCode.eventsList3 = function(runtimeScene) {

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
}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

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
}

}


};gdjs.ShopCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("TowerRush", "TotalGems");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("TowerRush", "TotalGems", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}

{ //Subevents
gdjs.ShopCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}

{ //Subevents
gdjs.ShopCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects2});
gdjs.ShopCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Up_Damage", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects3[i].getBehavior("Text").setText("Gun damage upgraded!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects2[i].getBehavior("Text").setText("Not enough gems");
}
}
}

}


};gdjs.ShopCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RowName"), gdjs.ShopCode.GDRowNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowNameObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowNameObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowNameObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowNameObjects3[k] = gdjs.ShopCode.GDRowNameObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowNameObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowNameObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowNameObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowNameObjects3[i].getBehavior("Text").setText("GUN DAMAGE   LV " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + "/5");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))))) + "" + "   >   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + 1))) + "");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))))) + "" + "   (max)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))))) + " GEMS");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText("MAX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Damage").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects2});
gdjs.ShopCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Up_FireRate", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects3[i].getBehavior("Text").setText("Fire rate upgraded!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects2[i].getBehavior("Text").setText("Not enough gems");
}
}
}

}


};gdjs.ShopCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RowName"), gdjs.ShopCode.GDRowNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowNameObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowNameObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowNameObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowNameObjects3[k] = gdjs.ShopCode.GDRowNameObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowNameObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowNameObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowNameObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowNameObjects3[i].getBehavior("Text").setText("FIRE RATE   LV " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "/5");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))))) + " shots/s" + "   >   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) + 1))) + " shots/s");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))))) + " shots/s" + "   (max)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))))) + " GEMS");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText("MAX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("FireRate").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects2});
gdjs.ShopCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Up_Accuracy", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects3[i].getBehavior("Text").setText("Accuracy upgraded!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects2[i].getBehavior("Text").setText("Not enough gems");
}
}
}

}


};gdjs.ShopCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RowName"), gdjs.ShopCode.GDRowNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowNameObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowNameObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowNameObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowNameObjects3[k] = gdjs.ShopCode.GDRowNameObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowNameObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowNameObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowNameObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowNameObjects3[i].getBehavior("Text").setText("ACCURACY   LV " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + "/5");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))) + " deg" + "   >   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) + " deg");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))) + " deg" + "   (max)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))) + " GEMS");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText("MAX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Accuracy").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects2});
gdjs.ShopCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Up_TrackSpeed", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects3[i].getBehavior("Text").setText("Track speed upgraded!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects2[i].getBehavior("Text").setText("Not enough gems");
}
}
}

}


};gdjs.ShopCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RowName"), gdjs.ShopCode.GDRowNameObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowNameObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowNameObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowNameObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowNameObjects3[k] = gdjs.ShopCode.GDRowNameObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowNameObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowNameObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowNameObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowNameObjects3[i].getBehavior("Text").setText("TRACK SPEED   LV " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) + "/5");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))))) + " px/s" + "   >   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) + 1))) + " px/s");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects3[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects3[k] = gdjs.ShopCode.GDRowInfoObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))))) + " px/s" + "   (max)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))))) + " GEMS");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].getBehavior("Text").setText("MAX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("TrackSpeed").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects3[k] = gdjs.ShopCode.GDBuyButtonObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects3[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects1});
gdjs.ShopCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "TotalGems", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("TowerRush", "Up_PickupRadius", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects2[i].getBehavior("Text").setText("Gem magnet upgraded!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessage"), gdjs.ShopCode.GDShopMessageObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDShopMessageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopMessageObjects1[i].getBehavior("Text").setText("Not enough gems");
}
}
}

}


};gdjs.ShopCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RowName"), gdjs.ShopCode.GDRowNameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowNameObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowNameObjects2[i].getVariableNumber(gdjs.ShopCode.GDRowNameObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowNameObjects2[k] = gdjs.ShopCode.GDRowNameObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowNameObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowNameObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDRowNameObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDRowNameObjects2[i].getBehavior("Text").setText("GEM MAGNET   LV " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + "/5");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects2[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects2[k] = gdjs.ShopCode.GDRowInfoObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))))) + " px" + "   >   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) + 1))) + " px");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RowInfo"), gdjs.ShopCode.GDRowInfoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRowInfoObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRowInfoObjects2[i].getVariableNumber(gdjs.ShopCode.GDRowInfoObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRowInfoObjects2[k] = gdjs.ShopCode.GDRowInfoObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDRowInfoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDRowInfoObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDRowInfoObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDRowInfoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Values").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))))) + " px" + "   (max)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects2[k] = gdjs.ShopCode.GDBuyTextObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))))) + " GEMS");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects2[k] = gdjs.ShopCode.GDBuyTextObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyTextObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects2[i].getBehavior("Text").setText("MAX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects2[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild("PickupRadius").getChild("Costs").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)))));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects2[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects2[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects2[k] = gdjs.ShopCode.GDBuyButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyButtonObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyButtonObjects2[i].setColor("120;120;120");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyButtonObjects1[i].getVariableNumber(gdjs.ShopCode.GDBuyButtonObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyButtonObjects1[k] = gdjs.ShopCode.GDBuyButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList16 = function(runtimeScene) {

{


gdjs.ShopCode.eventsList7(runtimeScene);
}


{


gdjs.ShopCode.eventsList9(runtimeScene);
}


{


gdjs.ShopCode.eventsList11(runtimeScene);
}


{


gdjs.ShopCode.eventsList13(runtimeScene);
}


{


gdjs.ShopCode.eventsList15(runtimeScene);
}


};gdjs.ShopCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ShopCode.GDBuyButtonObjects2, gdjs.ShopCode.GDBuyButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("BuyText"), gdjs.ShopCode.GDBuyTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBuyTextObjects3.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBuyTextObjects3[i].getVariableNumber(gdjs.ShopCode.GDBuyTextObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.ShopCode.GDBuyButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ShopCode.GDBuyButtonObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBuyTextObjects3[k] = gdjs.ShopCode.GDBuyTextObjects3[i];
        ++k;
    }
}
gdjs.ShopCode.GDBuyTextObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDBuyButtonObjects3 */
/* Reuse gdjs.ShopCode.GDBuyTextObjects3 */
{for(var i = 0, len = gdjs.ShopCode.GDBuyTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBuyTextObjects3[i].setPosition((( gdjs.ShopCode.GDBuyButtonObjects3.length === 0 ) ? 0 :gdjs.ShopCode.GDBuyButtonObjects3[0].getCenterXInScene()) - (gdjs.ShopCode.GDBuyTextObjects3[i].getWidth()) / 2,(( gdjs.ShopCode.GDBuyButtonObjects3.length === 0 ) ? 0 :gdjs.ShopCode.GDBuyButtonObjects3[0].getCenterYInScene()) - (gdjs.ShopCode.GDBuyTextObjects3[i].getHeight()) / 2);
}
}
}

}


};gdjs.ShopCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects1);

for (gdjs.ShopCode.forEachIndex2 = 0;gdjs.ShopCode.forEachIndex2 < gdjs.ShopCode.GDBuyButtonObjects1.length;++gdjs.ShopCode.forEachIndex2) {
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;


gdjs.ShopCode.forEachTemporary2 = gdjs.ShopCode.GDBuyButtonObjects1[gdjs.ShopCode.forEachIndex2];
gdjs.ShopCode.GDBuyButtonObjects2.push(gdjs.ShopCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.ShopCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.ShopCode.GDPlayButtonObjects1});
gdjs.ShopCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ShopGems"), gdjs.ShopCode.GDShopGemsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(6).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{for(var i = 0, len = gdjs.ShopCode.GDShopGemsObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopGemsObjects1[i].getBehavior("Text").setText("GEMS  " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))));
}
}
}

}


{


gdjs.ShopCode.eventsList16(runtimeScene);
}


{


gdjs.ShopCode.eventsList18(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.ShopCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0.3);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDShopTitleObjects3.length = 0;
gdjs.ShopCode.GDShopTitleObjects4.length = 0;
gdjs.ShopCode.GDShopGemsObjects1.length = 0;
gdjs.ShopCode.GDShopGemsObjects2.length = 0;
gdjs.ShopCode.GDShopGemsObjects3.length = 0;
gdjs.ShopCode.GDShopGemsObjects4.length = 0;
gdjs.ShopCode.GDShopMessageObjects1.length = 0;
gdjs.ShopCode.GDShopMessageObjects2.length = 0;
gdjs.ShopCode.GDShopMessageObjects3.length = 0;
gdjs.ShopCode.GDShopMessageObjects4.length = 0;
gdjs.ShopCode.GDRowPanelObjects1.length = 0;
gdjs.ShopCode.GDRowPanelObjects2.length = 0;
gdjs.ShopCode.GDRowPanelObjects3.length = 0;
gdjs.ShopCode.GDRowPanelObjects4.length = 0;
gdjs.ShopCode.GDRowNameObjects1.length = 0;
gdjs.ShopCode.GDRowNameObjects2.length = 0;
gdjs.ShopCode.GDRowNameObjects3.length = 0;
gdjs.ShopCode.GDRowNameObjects4.length = 0;
gdjs.ShopCode.GDRowInfoObjects1.length = 0;
gdjs.ShopCode.GDRowInfoObjects2.length = 0;
gdjs.ShopCode.GDRowInfoObjects3.length = 0;
gdjs.ShopCode.GDRowInfoObjects4.length = 0;
gdjs.ShopCode.GDBuyButtonObjects1.length = 0;
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;
gdjs.ShopCode.GDBuyButtonObjects3.length = 0;
gdjs.ShopCode.GDBuyButtonObjects4.length = 0;
gdjs.ShopCode.GDBuyTextObjects1.length = 0;
gdjs.ShopCode.GDBuyTextObjects2.length = 0;
gdjs.ShopCode.GDBuyTextObjects3.length = 0;
gdjs.ShopCode.GDBuyTextObjects4.length = 0;
gdjs.ShopCode.GDPlayButtonObjects1.length = 0;
gdjs.ShopCode.GDPlayButtonObjects2.length = 0;
gdjs.ShopCode.GDPlayButtonObjects3.length = 0;
gdjs.ShopCode.GDPlayButtonObjects4.length = 0;
gdjs.ShopCode.GDPlayTextObjects1.length = 0;
gdjs.ShopCode.GDPlayTextObjects2.length = 0;
gdjs.ShopCode.GDPlayTextObjects3.length = 0;
gdjs.ShopCode.GDPlayTextObjects4.length = 0;

gdjs.ShopCode.eventsList19(runtimeScene);
gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDShopTitleObjects3.length = 0;
gdjs.ShopCode.GDShopTitleObjects4.length = 0;
gdjs.ShopCode.GDShopGemsObjects1.length = 0;
gdjs.ShopCode.GDShopGemsObjects2.length = 0;
gdjs.ShopCode.GDShopGemsObjects3.length = 0;
gdjs.ShopCode.GDShopGemsObjects4.length = 0;
gdjs.ShopCode.GDShopMessageObjects1.length = 0;
gdjs.ShopCode.GDShopMessageObjects2.length = 0;
gdjs.ShopCode.GDShopMessageObjects3.length = 0;
gdjs.ShopCode.GDShopMessageObjects4.length = 0;
gdjs.ShopCode.GDRowPanelObjects1.length = 0;
gdjs.ShopCode.GDRowPanelObjects2.length = 0;
gdjs.ShopCode.GDRowPanelObjects3.length = 0;
gdjs.ShopCode.GDRowPanelObjects4.length = 0;
gdjs.ShopCode.GDRowNameObjects1.length = 0;
gdjs.ShopCode.GDRowNameObjects2.length = 0;
gdjs.ShopCode.GDRowNameObjects3.length = 0;
gdjs.ShopCode.GDRowNameObjects4.length = 0;
gdjs.ShopCode.GDRowInfoObjects1.length = 0;
gdjs.ShopCode.GDRowInfoObjects2.length = 0;
gdjs.ShopCode.GDRowInfoObjects3.length = 0;
gdjs.ShopCode.GDRowInfoObjects4.length = 0;
gdjs.ShopCode.GDBuyButtonObjects1.length = 0;
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;
gdjs.ShopCode.GDBuyButtonObjects3.length = 0;
gdjs.ShopCode.GDBuyButtonObjects4.length = 0;
gdjs.ShopCode.GDBuyTextObjects1.length = 0;
gdjs.ShopCode.GDBuyTextObjects2.length = 0;
gdjs.ShopCode.GDBuyTextObjects3.length = 0;
gdjs.ShopCode.GDBuyTextObjects4.length = 0;
gdjs.ShopCode.GDPlayButtonObjects1.length = 0;
gdjs.ShopCode.GDPlayButtonObjects2.length = 0;
gdjs.ShopCode.GDPlayButtonObjects3.length = 0;
gdjs.ShopCode.GDPlayButtonObjects4.length = 0;
gdjs.ShopCode.GDPlayTextObjects1.length = 0;
gdjs.ShopCode.GDPlayTextObjects2.length = 0;
gdjs.ShopCode.GDPlayTextObjects3.length = 0;
gdjs.ShopCode.GDPlayTextObjects4.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
