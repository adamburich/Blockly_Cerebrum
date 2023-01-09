import { gameManagerCategory } from './GameManagerCategory.js';
import { objectMessageHandlerCat } from './ObjectMessageHandlerCategory.js';
import { patientDiagPreset, patientModelPreset } from './PatientPresetCategories.js';
import {custom_block_lib} from '../Blocks/CustomBlockLibrary.mjs'

Blockly.common.defineBlocksWithJsonArray(custom_block_lib);
    //Toolbox def, category toolbox
    export var cerebrumToolbox = {
        'kind': 'categoryToolbox',
        'contents': [
          //Procedures category
          
          //Input category
          {
            'kind':'category',
            'name':'Input',
            "contents": [
              {
                'kind': 'block',
                'type': 'math_number'
              },
              {
                'kind': 'block',
                'type': 'text'
              },
              {
                'kind': 'block',
                'type': 'lists_create_with'
              },
            ]
          },
          {
            "kind": "category",
            "name": "Expression",
            "contents": [
              {
                'kind': 'block',
                'type': 'variables_set_dynamic_double'
              },
              {
                'kind': 'block',
                'type': 'logic_compare'
              },
              {
                'kind': 'block',
                'type': 'expression_arithmetic'
              }
            ],
          },
          //Logic category
          {
            'kind':'category',
            'name':'Logic',
            "contents": [
              {
              "kind": "block",
              "type": "logic_boolean"
              },
              {
                "kind": "block",
                "type": "controls_if"
              },
              {
                "kind": "block",
                "type": "controls_ifelse"
              },
              {
                "kind":"block",
                "type":"logic_compare"
              },
              {
                "kind":"block",
                "type":"logic_operation"
              },
              {
                "kind":"block",
                "type":"logic_negate"
              }
            ]
          },
          {
            'kind':'category',
            'name':'Comment',
            "contents":[
              {
                'kind': 'block',
                'type': 'comment',
                "inputs": {
                  "comment_val":{
                    "shadow":{
                      "type": "text"
                    }
                  },
                }
              },
              {
                'kind': 'block',
                'type': 'multi_line_comment',
                "inputs": {
                }
              },
            ]
          },
          //Variables category
          {
            'kind':'category',
            'name':'Variables',
            'custom': 'VARIABLE'
          },{
            'kind':'category',
            'name':'Do',
            "contents":[
              {
                'kind': 'block',
                'type': 'do_return',
                "inputs": {
                  "fname":{
                    /**
                    "shadow":{
                      "type": "procedures_callreturn"
                    }
                    */
                  },
                }
              },
              {
                'kind': 'block',
                'type': 'do_noreturn',
                "inputs": {
                  "fname":{
                    /**
                    "shadow":{
                      "type": "procedures_callnoreturn"
                    }
                    */
                  },
                }
              },
              {
                'kind': 'block',
                'type': 'do_return',
                "inputs": {
                  "fname":{
                    "shadow":{
                      "type": "text"
                    }
                  },
                },
                "tooltip": "Do filename"
              },
              {
                'kind': 'block',
                'type': 'gotolabelreturn',
                "inputs":{
                  "label":{
                    //  "shadow":{
                    //   "type":"procedures_callreturn"
                    //  }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'gotolabelnoreturn',
                "inputs":{
                  "noreturn":{
                    //  "shadow":{
                    //   "type":"procedures_callnoreturn"
                    //  }
                  }
                }
              }
            ]
          },
          {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE"
          },
          {
            'kind':'category',
            'name':'Call From Object',
            "contents": [
              {
                'kind': 'block',
                'type': 'object_calling'
              },
              
            ]
          },
          objectMessageHandlerCat,
          gameManagerCategory,
          {
            'kind':'category',
            'name':'Params',
            "contents": [
              {
                'kind': 'block',
                'type': 'param'
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "math_number"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "variables_get"
                    }
                  }
                }
              },
            ]
          },
          patientDiagPreset,
          patientModelPreset,
        ]
      }
    