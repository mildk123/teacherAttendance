import React, { Component } from "react"
import { Text, View } from "react-native";
import NavIconCard from "../components/NavIconCard";
import { Grid, Row, Col } from "native-base";

import Colors from "../modules/Colors";

export class HomeNav extends Component {
  render() {
    return (
      <Grid style={{maxHeight: 300, padding: 5}}>
        {/* First ROW */}
        <Row>
          <Col>
            <NavIconCard
              pathTo="DiaryScreen"
              label="Diary"
              iconType="SimpleLineIcons"
              iconName="notebook"
            />
          </Col>
          <Col>
            <NavIconCard
              pathTo="TimeTableScreen"
              label="Timetable"
              iconType="MaterialCommunityIcons"
              iconName="timetable"
            />
          </Col>

          <Col>
            <NavIconCard
              pathTo="BooklistScreen"
              label="Booklist"
              iconType="FontAwesome"
              iconName="book"
            />
          </Col>
        </Row>
        {/* Second ROW */}
        <Row>
          <Col>
            <NavIconCard
              pathTo="AttendanceScreen"
              label="Attendance"
              iconType="MaterialCommunityIcons"
              iconName="chair-school"
            />
          </Col>
          <Col>
            <NavIconCard
              pathTo="AssessmentScreen"
              label="Assessments"
              iconType="Ionicons"
              iconName="md-paper"
            />
          </Col>
          <Col>
            <NavIconCard
              pathTo="SyllabusScreen"
              label="Syllabus"
              iconType="MaterialCommunityIcons"
              iconName="library-books"
            />
          </Col>
        </Row>

        {/* Third ROW */}
        <Row>
          <Col>
            <NavIconCard
              pathTo="PTMRequestScreen"
              label="PTM Request"
              iconType="FontAwesome"
              iconName="group"
            />
          </Col>

          <Col>
            <NavIconCard
              pathTo="PaymentScreen"
              label="Payment"
              iconType="MaterialCommunityIcons"
              iconName="square-inc-cash"
            />
          </Col>
        
        </Row>
      </Grid>
    );
  }
}

export default HomeNav;
