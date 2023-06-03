import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { Avatar, Divider } from "@rneui/themed";

export default function Ticket() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#ffff00",
            padding: 10,
            borderRadius: 25,
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>HKG</Text>
            <Text style={{ fontSize: 20 }}>YYZ</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 18 }}>18:05</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>4 Hours</Text>
            <Text style={{ fontSize: 18 }}>19:00</Text>
          </View>
          <View>
            <Divider width={2} style={{ marginVertical: 5 }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#000",
                borderRadius: 5,
                padding: 5,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "#fff" }}>Bussiness</Text>
            </View>
            <Text style={{ fontSize: 14 }}>2 Jun, Fri</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>$1000</Text>
            <Avatar
              size={38}
              rounded
              icon={{ name: "angle-right", type: "font-awesome" }}
              titleStyle={{ color: "#fff" }}
              containerStyle={{ backgroundColor: "#000" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
