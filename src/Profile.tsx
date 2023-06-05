import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { Avatar, Divider } from "@rneui/themed";

export default function Profile() {
  const [currentMails, setCurrentMails] = useState<string>("0");
  const [currentAccummlatedMiles, setCurrentAccummlatedMiles] =
    useState<number>(90023);
  const [asiaMils, setAsiaMils] = useState<number>(100);

  const handleExchange = () => {
    const newValueOfcurrentAccummlatedMiles =
      currentAccummlatedMiles - Number(currentMails);
    setCurrentAccummlatedMiles(newValueOfcurrentAccummlatedMiles);
    setAsiaMils(asiaMils + Number(currentMails));
    setCurrentMails("0");
  };
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
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            Exchange
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
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#fff" }}>Mails</Text>
              <Text style={{ color: "#fff" }}>Asia Mails</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingBottom: 20,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  color: "#fff",
                  fontSize: 28,
                  fontWeight: "bold",
                  width: "40%",
                }}
                value={currentMails}
                onChangeText={(text) => setCurrentMails(text)}
                placeholder="0"
              />
              <Text style={{ color: "#fff" }}>{"->"}</Text>
              <View style={{ width: "45%", alignItems: "flex-end" }}>
                <Text style={{ color: "#fff", fontSize: 28 }}>{asiaMils}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleExchange}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: "#fff",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            Accummlated Miles
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
                {currentAccummlatedMiles}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#888" }}>Miles accrued</Text>
                <Text style={{ color: "#888" }}>
                  {new Date().toLocaleDateString()}
                </Text>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  23 022
                </Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Air Canada
                </Text>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  23 022
                </Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Air Canada
                </Text>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  23 022
                </Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Air Canada
                </Text>
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
          <View style={{ alignItems: "center", padding: 10 }}>
            <TouchableOpacity>
              <Text style={{ color: "skyblue", fontWeight: "bold" }}>
                How to earn miles?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
