import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {Table, Row, Rows, TableWrapper} from 'react-native-table-component';
import {Button, Text, Picker, Icon, Label, Item} from 'native-base';
import XLSX from 'xlsx';

// Permissions
import {PermissionsAndroid} from 'react-native';

// react-native-fs
import {
  writeFile,
  readFile,
  ExternalStorageDirectoryPath,
} from 'react-native-fs';
import Colors from '../../modules/Colors';
import axios from 'axios';
import moment from 'moment';
import {connectionObjects} from '../../modules/connection';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const DDP = ExternalStorageDirectoryPath + '/';
const output = str => str;

const make_cols = refstr =>
  Array.from({length: XLSX.utils.decode_range(refstr).e.c + 1}, (x, i) =>
    XLSX.utils.encode_col(i),
  );
const make_width = refstr =>
  Array.from({length: XLSX.utils.decode_range(refstr).e.c + 1}, () => 60);

export default class SheetJS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFromDate: 'Select from Date',
      selectedTillDate: 'Select till Date',
      from: false,
      till: false,
      selectedTeacher: undefined,
      data: [
        [
          '',
          '',
          '',
          'MORNING SHIFT',
          '',
          '',
          '',
          '',
          '',
          '',
          'EVENING SHIFT',
          '',
          '',
          '',
          '',
        ],
        [
          'Actual_TimeIn',
          'Teacher_TimeIn',
          'TimeIN_difference',
          'Actual_TimeOut',
          'Teacher_TimeOut',
          'TimeOut_difference',
          'Total_Difference',
          '',
          '',
          '',
          '',
          '',
          '',
          'Actual_TimeIn',
          'Teacher_TimeIn',
          'TimeIN_difference',
          'Actual_TimeOut',
          'Teacher_TimeOut',
          'TimeOut_difference',
          'Total_Difference',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '',
          '',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
      ],
      Expdata: [
        [
          '',
          '',
          '',
          'MORNING SHIFT',
          '',
          '',
          '',
          '',
          '',
          '',
          'EVENING SHIFT',
          '',
          '',
          '',
          '',
        ],
        [
          'Actual_TimeIn',
          'Teacher_TimeIn',
          'TimeIN_difference',
          'Actual_TimeOut',
          'Teacher_TimeOut',
          'TimeOut_difference',
          'Total_Difference',
          '',
          '',
          'Actual_TimeIn',
          'Teacher_TimeIn',
          'TimeIN_difference',
          'Actual_TimeOut',
          'Teacher_TimeOut',
          'TimeOut_difference',
          'Total_Difference',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
        [
          '10:15 AM',
          '10:15 AM',
          '0 Mins',

          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
          '',
          '',
          '10:15 AM',
          '10:15 AM',
          '0 Mins',
          '11:40 AM',
          '11:35 AM',
          '5 Mins',
          '5 Min',
        ],
      ],
      widthArr: [130, 120, 245],

      // cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
      // cols: make_cols("A1:C2")
    };
  }

  // componentDidMount = () => {
  //   this.requestStoragePermission();
  //   this.getReportData();
  // };

  requestStoragePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

          {
            title: 'Permission Alert',
            message: 'App needs access to your storage',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
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
  };
  exportFile = () => {
    const ws = XLSX.utils.aoa_to_sheet(this.state.Expdata);

    /* build new workbook */
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');

    /* write file */
    const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
    const file = DDP + 'report.xlsx';

    writeFile(file, output(wbout), 'ascii')
      .then(res => {
        Alert.alert('exportFile success', 'Exported to ' + file);
      })
      .catch(err => {
        Alert.alert('exportFile Error', 'Error ' + err.message);
      });
  };
  getReportData = () => {
    axios(connectionObjects.myServerIp_+connectionObjects.reportsAPI, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: {
        InstructorID: '102',
        FromDate: 'abcd',
        ToDate: 'tpstps',
        CourseID: '103',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
      .then(response => {
        return response;
      })
      .then(data => {
        if (data.status == 200) {
          console.log(data.data.AttendanceHistoryList);
          this.setState({
            newExpdata: [...data.data.AttendanceHistoryList],
          });
        }
      })
      .catch(err => {
        if(err.response.status == 403){
        alert(`Error: ${err.response.data.ResponseMessage}`)
        }
        else{
          console.log('msg',err.message); // Just the message , no error
          let errMSG = JSON.parse(err.request._response.response) ;//request details
            alert(errMSG.ResponseMessage);
        }
      });
  };

  showDatepicker = key => {
    this.setState({
      show: true,
      [key]: true,
    });
  };
  onChange = (event, selectedDate) => {
    var date = moment(event.nativeEvent.timestamp).format('MM/DD/YYYY');
    if (this.state.from) {
      this.setState({
        selectedFromDate: date,
        from: false,
        show: false,
      });
    } else {
      this.setState({
        selectedTillDate: date,
        till: false,
        show: false,
      });
    }
  };

  onTeacherChange(value) {
    this.setState({
      selectedTeacher: value,
    });
  }

  render() {
    return (
      <View style={{flex: 1, padding: 30, backgroundColor: Colors.appBarColor}}>
        <View>
          {this.state.show && (
            <RNDateTimePicker
              value={new Date()}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={this.onChange}
            />
          )}
        </View>

        <View style={{padding: 5}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
            Generate a Report
          </Text>
          <Text style={styles.instructions}>
            You can generate a report from start date till end date. All the
            records wil be saved in an excel file.
          </Text>
        </View>

        <View>
          <View style={{borderBottomWidth: 2, borderBottomColor: 'white'}}>
            <Label style={{color: 'white', fontSize: 22, fontWeight: '700'}}>
              From:{' '}
            </Label>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 20, color: 'white'}}>
              {this.state.selectedFromDate}
            </Text>
            <Button
              style={styles.dateBtn}
              onPress={() => this.showDatepicker('from')}>
              <Text style={{color: 'black'}}>From Date</Text>
            </Button>
          </View>
        </View>

        <View>
          <View style={{borderBottomWidth: 2, borderBottomColor: 'white'}}>
            <Label style={{color: 'white', fontSize: 22, fontWeight: '700'}}>
              To:{' '}
            </Label>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 20, color: 'white'}}>
              {this.state.selectedTillDate}
            </Text>
            <Button
              style={styles.dateBtn}
              onPress={() => this.showDatepicker('till')}>
              <Text style={{color: 'black'}}>Till Date</Text>
            </Button>
          </View>
        </View>

        <Item picker>
          <Label style={{color: 'white', fontSize: 22, fontWeight: '700'}}>
            Select Teacher
          </Label>
          <Picker
            mode="dialog"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            selectedValue={this.state.selectedTeacher}
            onValueChange={this.onTeacherChange.bind(this)}>
            <Picker.Item label="Wallet" value="key0" />
          </Picker>
        </Item>

        <View
          style={{
            marginVertical: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            style={{
              width: 150,
              justifyContent: 'center',
              backgroundColor: '#ff009d',
              elevation: 0,
            }}
            disabled={!this.state.data.length}
            onPress={this.exportFile}>
            <Text>Generate</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'left',
    color: Colors.appBarTextColor,
    marginBottom: 15,
    fontSize: 18,
  },
  dateBtn: {
    width: 130,
    borderRadius: 25,
    backgroundColor: Colors.appBarTextColor,
    elevation: 0,
    justifyContent: 'center',
  },
  thead: {height: 55, backgroundColor: 'limegreen'},
  tr: {height: 35},
  text: {fontSize: 16, textAlign: 'center'},
  table: {width: '100%'},
});

{
  /* <View style={{maxHeight: 200}}>
<ScrollView
  style={{backgroundColor: 'white'}}
  contentContainerStyle={{
    justifyContent: 'center',
    alignItems: 'center',
  }}
  horizontal={true}>
  <Table style={styles.table}>
    <TableWrapper>
      <Row
        data={this.state.cols}
        style={styles.thead}
        textStyle={styles.text}
        widthArr={this.state.widthArr}
      />
    </TableWrapper>

    <TouchableWithoutFeedback>
      <ScrollView vertical={true}>
        <TableWrapper>
          <Rows
            data={this.state.data}
            style={styles.tr}
            textStyle={styles.text}
            widthArr={this.state.widthArr}
          />
        </TableWrapper>
      </ScrollView>
    </TouchableWithoutFeedback>
  </Table>
</ScrollView>
</View> */
}
