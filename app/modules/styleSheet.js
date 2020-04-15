"use strict";
import { Dimensions, StatusBar, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

import React, { Component } from "react"
import Colors from './Colors';

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

exports.containerStyles = {
  container: {
    flex: 1
  },
  containerColumnStart: {
    flex: 1,
    flexDirection: "column"
  },
  centerContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  centerLogo: {
    flex: 1,
    justifyContent: "center"
  },
  rowCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  policyListContainer: {
    paddingHorizontal: 15
  },
  cardStatusContainer : {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 20,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
};

// CustomSplash Styles
exports.ImgStyles = {
  splashImg: {
    width: '65%', 
    height: '100%',
    alignSelf: 'center'
  }
};

// Button Styles
exports.BtnStyles = {
  headerBtnTransparentStyle: {
    backgroundColor: "transparent",
    marginRight: 25
  },
  headerBtnTextStyle: {
    color: Colors.brandBlue
  },
  resendOTPBtn: {
    backgroundColor: "transparent",
    width: 150
  }
};

// Button Styles
exports.IconStyles = {
  headerIconleft: {
    color: Colors.iconColorPrimary,
    paddingLeft: 15,
    fontSize: 30
  },
  headerIconRight: {
    color: Colors.iconColorPrimary,
    paddingRight: 15,
    fontSize: 30
  },
  drawerIcon: {
    fontSize: 25,
    color: "#777777"
  },
  inputIconStyle: {
    color: "#636363",
    marginLeft: 15
  },
  inputRightIconStyle: {
    color: "#636363",
  },
  InputContIconStyle : {
    fontSize: 30,
    color: "#636363",
    marginLeft: 15
  },
  
};

// Text Styles
exports.TextStyles = {
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: "300"
  },
  stepperText: {
    fontSize: 20,
    color: "black"
  },
  policyTitleText: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 10
  },
  policySubHeaderText: {
    fontSize: 18,
    color: Colors.brandRed
  },
  ListItemHeader : {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "600"
  }
};

exports.BoxStyles = {
  StepperBox: {
    backgroundColor: "#ccc",
    padding: 10
  },
  policyTitleBox: {
    backgroundColor: "#fff0af",
    padding: 10
  }
};

exports.InputStyles = {
  inputWithIconCont  :{
    padding: 3, 
  },
  inputSubtitleStyle : {
    paddingVertical: 3,
    fontSize: 14,
    paddingHorizontal: 10
  },
  inputTitleStyle : {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
};




