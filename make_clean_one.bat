mkdir dev_toolbox_ext_mozilla
mkdir dev_toolbox_ext_mozilla\html
mkdir dev_toolbox_ext_mozilla\icons
mkdir dev_toolbox_ext_mozilla\js
mkdir dev_toolbox_ext_mozilla\json
mkdir dev_toolbox_ext_mozilla\settings

XCOPY html\* dev_toolbox_ext_mozilla\html\ /s /i
XCOPY icons\* dev_toolbox_ext_mozilla\icons\ /s /i
XCOPY js\* dev_toolbox_ext_mozilla\js\ /s /i
XCOPY json\* dev_toolbox_ext_mozilla\json\ /s /i
XCOPY settings\* dev_toolbox_ext_mozilla\settings\ /s /i

COPY manifest.json dev_toolbox_ext_mozilla\
COPY README.md dev_toolbox_ext_mozilla\