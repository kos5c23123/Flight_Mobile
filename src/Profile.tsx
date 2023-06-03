import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

import { Avatar, Divider } from "@rneui/themed";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 15 }}
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            Danny Tan
          </Text>
          <Text style={{ color: "#888" }}>Hong Kong</Text>
        </View>
      </View>
      <Divider width={2} style={{ margin: 5 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
          Accummlated miles
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#888",
            borderRadius: 10,
            marginVertical: 10,
            paddingBottom: 10,
          }}
        >
          <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
            <Text
              style={{
                fontSize: 40,
                letterSpacing: 5,
                alignSelf: "center",
                paddingBottom: 10,
                color: "#ffff00",
              }}
            >
              90823
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#888" }}>Miles accrued</Text>
              <Text style={{ color: "#888" }}>{new Date().toLocaleDateString()}</Text>
            </View>
          </View>
          <Divider width={1} style={{ margin: 5 }} />
          <View style={{ paddingVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>23 022</Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Air Canada</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#888" }}>Miles</Text>
              <Text style={{ color: "#888" }}>Received from</Text>
            </View>
          </View>
          <Divider width={1} style={{ margin: 5 }} />
          <View style={{ paddingVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>23 022</Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Air Canada</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#888" }}>Miles</Text>
              <Text style={{ color: "#888" }}>Received from</Text>
            </View>
          </View>
          <Divider width={1} style={{ margin: 5 }} />
          <View style={{ paddingVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>23 022</Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Air Canada</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#888" }}>Miles</Text>
              <Text style={{ color: "#888" }}>Received from</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: "center", padding: 10}}>
          <Text style={{color: "skyblue", fontWeight: "bold"}}>
            How to earn miles?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
