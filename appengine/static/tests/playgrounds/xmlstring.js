const patient_info_xml_str = `
<xml xmlns='https://developers.google.com/blockly/xml'>
  <block type='variables_set' id='PatientInfoRootBlock' x='188' y='63'>
    <field name='VAR' id='PatientName' variabletype='text'>PatientName</field>
    <value name='VALUE'>
      <shadow type='text' id='oQ.5M1gmEuiFD+]E}g(d'>
        <field name='TEXT'></field>
      </shadow>
    </value>
    <next>
      <block type='variables_set' id='Fq9z)C]nGs/%Zwo;]fZZ'>
        <field name='VAR' id='isEWS' variabletype='int'>isEWS</field>
        <value name='VALUE'>
          <shadow type='logic_boolean' id='nx@^?d+*sG|@u{Fh2*9g'>
            <field name='BOOL'>TRUE</field>
          </shadow>
        </value>
        <next>
          <block type='variables_set' id='_UW]uL/Lv;AVIl05TUfY'>
            <field name='VAR' id='PatientIC' variabletype='int'>PatientIC</field>
            <value name='VALUE'>
              <shadow type='text' id='QP50:2H%m-*r69pShZ|6'>
                <field name='TEXT'></field>
              </shadow>
            </value>
            <next>
              <block type='variables_set' id='5*0Ze41_)S0R\`oHaUCNU'>
                <field name='VAR' id='BloodType' variabletype='int'>BloodType</field>
                <value name='VALUE'>
                  <shadow type='text' id='@ytZBK}W(R=bXDFLsLdt'>
                    <field name='TEXT'></field>
                  </shadow>
                </value>
                <next>
                  <block type='variables_set' id='/!ePkl1m4K_{uAS{)1fA'>
                    <field name='VAR' id='AgeInYears' variabletype='int'>AgeInYears</field>
                    <value name='VALUE'>
                      <shadow type='math_number' id='^kY%gV{UfQVKO7t$V0W5'>
                        <field name='NUM'>0</field>
                      </shadow>
                    </value>
                    <next>
                      <block type='variables_set' id='!{t/Qx_dajO71)iD=g.;'>
                        <field name='VAR' id='PatientModel' variabletype='int'>PatientModel</field>
                        <value name='VALUE'>
                          <shadow type='text' id='3\`%FW#Q;|VGuLKaZ4oB5'>
                            <field name='TEXT'></field>
                          </shadow>
                        </value>
                        <next>
                          <block type='variables_set' id='UGquBB^C|i]4OX4OGIYd'>
                            <field name='VAR' id='PatientDiag' variabletype='int'>PatientDiag</field>
                            <value name='VALUE'>
                              <shadow type='text' id='\`-(ol76Mee#C.nBDDW|r'>
                                <field name='TEXT'></field>
                              </shadow>
                            </value>
                            <next>
                              <block type='variables_set' id='v?4SMuViHXyuu0tD}HW7'>
                                <field name='VAR' id='PatientGender'>PatientGender</field>
                                <value name='VALUE'>
                                  <shadow type='text' id='0?}($)*@2E7HTl}/JNjY'>
                                    <field name='TEXT'></field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type='variables_set' id='v8N6h12qB-V%B^ghI=~|'>
                                    <field name='VAR' id='PatientSummary'>PatientSummary</field>
                                    <value name='VALUE'>
                                      <shadow type='text' id='8L?n/]2yGY,zs~W2u,F}'>
                                        <field name='TEXT'></field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type='variables_set' id='d#)xsKsv(#^^F*I03^(R'>
                                        <field name='VAR' id='PatientType'>PatientType</field>
                                        <value name='VALUE'>
                                          <shadow type='text' id='omd[0W^.nFF)p-qgznNW'>
                                            <field name='TEXT'></field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type='variables_set' id='w4b1^#NEgf{z,bt/6,yl'>
                                            <field name='VAR' id='Temperature'>Temperature</field>
                                            <value name='VALUE'>
                                              <shadow type='math_number' id=']eg_~j_V:tpsF+I0iy~k'>
                                                <field name='NUM'>0</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type='variables_set' id='gG6bRtkphGVH;T~;|S]^'>
                                                <field name='VAR' id='HR'>HR</field>
                                                <value name='VALUE'>
                                                  <shadow type='math_number' id='RxTzqw;RIc1Enf/RCG8d'>
                                                    <field name='NUM'>0</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type='variables_set' id='?r\`b*^TkrP)Ar(GZ?icn'>
                                                    <field name='VAR' id='BP'>BP</field>
                                                    <value name='VALUE'>
                                                      <shadow type='text' id='hGA_)^.e%vAj^2XDV5j4'>
                                                        <field name='TEXT'></field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type='variables_set' id='+\`J(R*,Ou;0]bO4EOa0o'>
                                                        <field name='VAR' id='BPSys'>BPSys</field>
                                                        <value name='VALUE'>
                                                          <shadow type='math_number' id='MR;=@o]TTqGNmk#HPC2T'>
                                                            <field name='NUM'>0</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type='variables_set' id='~5{x2;Ug7+ryo+:2_cBi'>
                                                            <field name='VAR' id='Respiration'>Respiration</field>
                                                            <value name='VALUE'>
                                                              <shadow type='math_number' id='MUg$aUU60s(S+?cr8$@K'>
                                                                <field name='NUM'>0</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type='variables_set' id='~JA3)vX;dlH#:s9x_}wJ'>
                                                                <field name='VAR' id='SpO2'>SpO2</field>
                                                                <value name='VALUE'>
                                                                  <shadow type='math_number' id='p6]p+aksbj],#8aHp[aB'>
                                                                    <field name='NUM'>0</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type='variables_set' id='mD$)JTYUaV3wwJMUrWEL'>
                                                                    <field name='VAR' id='PainScore'>PainScore</field>
                                                                    <value name='VALUE'>
                                                                      <shadow type='text' id='rt}1K25DP0.%P/2BYO-@'>
                                                                        <field name='TEXT'></field>
                                                                      </shadow>
                                                                    </value>
                                                                    <next>
                                                                      <block type='variables_set' id='fzD91Dr*|wXjf:OX4Je5'>
                                                                        <field name='VAR' id='AbnormalResponse'>AbnormalResponse</field>
                                                                        <value name='VALUE'>
                                                                          <shadow type='text' id='9P!U\`}-}zUhtrEgk6N5d'>
                                                                            <field name='TEXT'></field>
                                                                          </shadow>
                                                                        </value>
                                                                        <next>
                                                                          <block type='variables_set' id='wx/$T/r$30@Iv$97|_5W'>
                                                                            <field name='VAR' id='PatientSpeak'>PatientSpeak</field>
                                                                            <value name='VALUE'>
                                                                              <shadow type='text' id='[-?gX%@1XsveO,)-YHF7'>
                                                                                <field name='TEXT'></field>
                                                                              </shadow>
                                                                            </value>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`

