import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

import { Avatar, Divider } from "@rneui/themed";

import Svg, { Path, Circle } from "react-native-svg";

export default function Ticket() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#ffff00",
            padding: 10,
            borderRadius: 5,
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}
            >
              Air Canada
            </Text>
            <Text style={{ fontSize: 16, color: "#888" }}>AC 1111</Text>
          </View>
          <View
            style={{
              borderStyle: "dashed",
              borderWidth: 1,
              borderRadius: 1,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {new Date().toLocaleDateString() +
                " " +
                new Date().getHours() +
                ":" +
                new Date().getMinutes()}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {new Date().toLocaleDateString() +
                " " +
                new Date().getHours() +
                ":" +
                new Date().getMinutes()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 30 }}>HKG</Text>
            <Text style={{ fontSize: 30 }}>YYZ</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Hong Kong, HKSAR
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Toronto, Canada
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "#888" }}>Terminal 1</Text>
            <Text style={{ fontSize: 14, color: "#888" }}>Terminal 1</Text>
          </View>
          <View
            style={{
              borderStyle: "dashed",
              borderWidth: 1,
              borderRadius: 1,
            }}
          />
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.title}>Passenger</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={styles.title}>Ticket</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Text style={styles.title}>Baggage</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.info}>1 Adult</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={styles.info}>A111-111</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Text style={styles.info}>28KG</Text>
              </View>
            </View>
            <View
              style={[
                styles.row,
                {
                  marginTop: 10,
                },
              ]}
            >
              <View style={styles.col}>
                <Text style={styles.title}>Flight</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={styles.title}>Class</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Text style={styles.title}>Seat</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.info}>AC 1111</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={styles.info}>Bussiness</Text>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Text style={styles.info}>10A</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // height: "25%",
  },
  col: {
    width: "33%",
    height: "100%",
    padding: 2.5,
  },
  title: {
    color: "#888",
  },
  info: {
    fontWeight: "bold",
  },
});
