
/**
 * Blockly Cerebrum Implementation
 * 
 * VariableSetup.js
 * - Here we initialize some variables that are commonly used (commonly because these are required for patient creation and they will always be named the same)
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

export function populatePatientVars(workspace){
    workspace.createVariable("PatientName", "", "PatientName");
    workspace.createVariable("isEWS", "", "isEWS");
    workspace.createVariable("PatientIC", "", "PatientIC");
    workspace.createVariable("BloodType", "", "BloodType");
    workspace.createVariable("AgeInYears", "", "AgeInYears");
    workspace.createVariable("PatientModel", "", "PatientModel");
    workspace.createVariable("PatientDiag", "", "PatientDiag");
    workspace.createVariable("PatientGender", "", "PatientGender");
    workspace.createVariable("PatientSummary", "", "PatientSummary");
    workspace.createVariable("PatientType", "", "PatientType");
    workspace.createVariable("Temperature", "", "Temperature");
    workspace.createVariable("HR", "", "HR");
    workspace.createVariable("BP", "", "BP");
    workspace.createVariable("BPSys", "", "BPSys");
    workspace.createVariable("Respiration", "", "Respiration");
    workspace.createVariable("SpO2", "", "SpO2");
    workspace.createVariable("PainScore", "", "PainScore");
    workspace.createVariable("AbnormalResponse", "", "AbnormalResponse");
    workspace.createVariable("PatientSpeak", "", "PatientSpeak");
    workspace.createVariable("PatientObjName", "", "PatientObjName");
    workspace.createVariable("PatientBedLoc", "", "PatientBedLoc");
    workspace.createVariable("RigType", "", "RigType");
    workspace.createVariable("HeadAmount", "", "HeadAmount");
    workspace.createVariable("WeightAmount", "", "WeightAmount");
    workspace.createVariable("Patient", "", "Patient");
  }