import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';
import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';
import XLSX from 'xlsx';

// Permissions
import { PermissionsAndroid } from 'react-native';

// react-native-fs
import { writeFile, readFile, ExternalStorageDirectoryPath } from 'react-native-fs';
const DDP = ExternalStorageDirectoryPath + "/";
const output = str => str;


const make_cols = refstr => Array.from({ length: XLSX.utils.decode_range(refstr).e.c + 1 }, (x, i) => XLSX.utils.encode_col(i));
const make_width = refstr => Array.from({ length: XLSX.utils.decode_range(refstr).e.c + 1 }, () => 60);

export default class SheetJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                ["08:40", "08:45", "5 Test"],
                ["08:40", "08:40", "0 mins"],
                ["08:40", "08:40", "0 mins"],
                ["08:40", "08:50", "10 mins"],
                ["08:40", "08:40", "0 mins"],
            ],
            Expdata: [
                [
                    "","","",'Session Two',"","",""
                ],
                [
                    "Actual_TimeIn",
                    "Teacher_TimeIn",
                    "TimeIN_difference",
                    "Actual_TimeOut",
                    "Teacher_TimeOut",
                    "TimeOut_difference",
                    "Total_Difference"
                ],
                [
                    "10:15 AM",
                    "10:15 AM",
                    "0 Mins",
                    "11:40 AM",
                    "11:35 AM",
                    "5 Mins",
                    "5 Min"
                ],
                [
                    "10:15 AM",
                    "10:15 AM",
                    "0 Mins",
                    "11:40 AM",
                    "11:35 AM",
                    "5 Mins",
                    "5 Min"
                ]
            ],
            widthArr: [130, 120, 245],
            // cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
            // cols: make_cols("A1:C2")
        };
    };


    componentDidMount = () => {
        this.requestStoragePermission();
    }

    requestStoragePermission = async () => {
        try {
            if (Platform.OS === "android") {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

                    {
                        title: 'Permission Alert',
                        message:
                            'App needs access to your storage',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the storage');
                } else {
                    console.log('Storage permission denied');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    }


    exportFile = () => {
        /* convert AOA back to worksheet */
        const ws = XLSX.utils.aoa_to_sheet(this.state.Expdata);

        /* build new workbook */
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");

        /* write file */
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
        const file = DDP + "report.xlsx";

        writeFile(file, output(wbout), 'ascii')
            .then((res) => {
                Alert.alert("exportFile success", "Exported to " + file);
            })
            .catch((err) => {
                Alert.alert("exportFile Error", "Error " + err.message);
            });
    };

    render() {
        return (
            <View style={styles.container} >


                <View>
                    <Text style={styles.instructions}>Export Data</Text>
                    <Button disabled={!this.state.data.length} onPress={this.exportFile} title="Export data to XLSX" />
                </View>

                {/* <View style={{ height: 320 }}> */}
                {/* <Text style={styles.instructions}>Current Data</Text> */}

                {/* <ScrollView style={{ backgroundColor: 'lightgreen' }} */}
                {/* contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} */}
                {/* horizontal={true} > */}
                {/* <Table style={styles.table}> */}
                {/* Table Head */}
                {/* <TableWrapper> */}
                {/* <Row */}
                {/* data={this.state.cols} */}
                {/* style={styles.thead} */}
                {/* textStyle={styles.text} */}
                {/* widthArr={this.state.widthArr} */}
                {/* /> */}
                {/* </TableWrapper> */}

                {/* <TouchableWithoutFeedback> */}
                {/* <ScrollView vertical={true}> */}
                {/* <TableWrapper> */}
                {/* <Rows */}
                {/* data={this.state.data} */}
                {/* style={styles.tr} */}
                {/* textStyle={styles.text} */}
                {/* widthArr={this.state.widthArr} */}
                {/* /> */}
                {/* </TableWrapper> */}
                {/* </ScrollView> */}
                {/* </TouchableWithoutFeedback> */}

                {/* </Table> */}
                {/* </ScrollView> */}
                {/* </View> */}

            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', },
    instructions: { textAlign: 'center', color: '#333333', marginBottom: 5 },
    thead: { height: 55, backgroundColor: 'lightgreen' },
    tr: { height: 30, },
    text: { fontSize: 20, textAlign: 'center' },
    table: { width: "100%", }
});