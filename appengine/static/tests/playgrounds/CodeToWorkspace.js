function handleTextXML(workspace){
    let ttd = Blockly.Xml.textToDom(patient_info_xml_str);
    Blockly.Xml.domToWorkspace(ttd, workspace);
}