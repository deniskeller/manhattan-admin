//@ts-nocheck
import React, {useEffect, useState} from "react";
import type {RootState, Value} from '@react-page/editor';
import EditorComponent, { ThemeProvider } from '@react-page-styled/editor';
import {Button, Card, Grid, Input, Loading, Modal, Spacer, Text, Tooltip} from "@nextui-org/react";
import SaveIcon from "@mui/icons-material/Save";
import RestoreIcon from "@mui/icons-material/Restore";
import {CellPlugin} from "@react-page/editor";
import styles from "./styles.module.scss";
import ModalPortal from "@content/Editor/PanelEdit";
import ButtonIcon from "@content/Editor/ButtonIcon";
import {BaseButton} from "@base/index";


type Props = {
  onSave: (val: any)=>void;
  initialValue: any;
  pluginsList: CellPlugin[]
}

const Editor: React.FC<Props> = ({onSave, initialValue, pluginsList})=> {
  const [value, _setValue] = useState<Value | null>(initialValue);
  console.log("initialValue=", initialValue);
  const setValue = (val: any) => {
    console.log("setValue val:", val);
    _setValue(val);
  }

  useEffect(()=>{
    setValue(initialValue);
  }, [initialValue])
  console.log("value Editor", value);

//const token = useSelector((state: AppState)=>state.auth.accessToken);
//const isAdmin = typeof token !== "undefined" && token?.length > 0;
//console.log("isAdmin",isAdmin);
  const isAdmin = true;


  const [allowEdit, setAllowEdit] = useState(isAdmin)
/*  const [isEditorEnabled, setIsEditorEnabled] = useState(isAdmin &&
    (typeof localstorage !==  "undefined") && localStorage.getItem("editor") === "true");*/

  const [isEditorEnabled, setIsEditorEnabled] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setAllowEdit(true)
    } else {
      setAllowEdit(false)
      setIsEditorEnabled(false);
    }
  }, [isAdmin])


  useEffect(() => {
    localStorage.setItem('editor', isEditorEnabled.toString())
  }, [isEditorEnabled])


 /* const [allowEdit, setAllowEdit] = useState(isAdmin);
  const [isEditorEnabled, setIsEditorEnabled] = useState(true);*/
  /*const [isEditorEnabled, setIsEditorEnabled] =
    useState(isAdmin &&
      typeof window !== "undefined" ?  window.localStorage?.getItem("editor") === "true" : false);*/
  return(
    <div
      id={"editor"}
      className={isEditorEnabled ? "editMode" : "previewMode"  }
      style={{
        minHeight: '100px',
      }}>


            {allowEdit && (
              <ModalPortal>
                <div className={styles.panelEdit}>

                <Card
                  variant="flat"
                  className={styles.buttonsContainer}
                  style={{
                    zIndex: 3001,
                  }}
                  css={{
                    mw: 'fit-content',
                    opacity:  1,
                  }}>
                  <Card.Body>
                    <Grid.Container gap={0.5} direction={'column'}>
                      {isEditorEnabled && (
                        <Grid>
                         {/* <Text className={styles.idText}>{id === "index" ? "main" : id}</Text>*/}
                        </Grid>
                      )}
                      {isEditorEnabled && (
                        <Grid.Container gap={0.5}>
                          <Grid>
                              <ButtonIcon
                                onClick={()=>{onSave(value)}}>
                                <SaveIcon />
                              </ButtonIcon>
                          </Grid>
                          <Grid>
                            <ButtonIcon onClick={() => {
                              setValue(initialValue)
                            }}>
                              <RestoreIcon />
                            </ButtonIcon>
                          </Grid>
                        </Grid.Container>
                      )}
                      {isEditorEnabled && <Spacer y={0.5} />}
                      {isEditorEnabled && <Card.Divider />}
                      {isEditorEnabled && <Spacer y={0.5} />}

                      <Grid.Container gap={0.5} direction="column">
                       {/* <Grid>
                          <Link href="/admin">
                            <a target={'_blank'}>
                              <Button size={'sm'}
                                      className={`${styles.button} ${styles.buttonCustom}`}
                              >Admin panel</Button>
                            </a>
                          </Link>
                        </Grid>*/}
                        <Grid>
                          <div>
                            <BaseButton
                              title={isEditorEnabled ? 'Preview Mode' : 'Edit Mode'}
                              style={{borderRadius: "10px"}}
                              onClick={() => {
                                setIsEditorEnabled(!isEditorEnabled)
                              }}
                            />
                            {/*<Button
                              size={'sm'}
                              className={`${styles.button} ${styles.buttonCustom}`}
                              onClick={() => {
                                setIsEditorEnabled(!isEditorEnabled)
                              }}>
                              {isEditorEnabled ? 'Preview Mode' : 'Edit Mode'}
                            </Button>*/}
                          </div>
                        </Grid>
                      </Grid.Container>
                    </Grid.Container>
                  </Card.Body>
                </Card>
              </div>
              </ModalPortal>
            )}

            <EditorComponent cellPlugins={pluginsList}
                             value={value}
                             onChange={setValue}
                             readOnly={!isEditorEnabled}
            />

    </div>
  )
}

export default Editor;