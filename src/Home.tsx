import { View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Divider } from "@rneui/themed";

import { FontAwesome } from "@expo/vector-icons";

import Picker from "@ouroboros/react-native-picker";

import { useNavigation } from "@react-navigation/native";

const AirlineList = [
  {
    From: "YYZ",
    To: "HKG",
    Company: "Air Canada",
    Code: "AC",
    Price: 1000,
    SDate: "2 Jun, Fri",
    EDate: "14 Jun, Mon",
    STime: "10:00",
    ETime: "12:00",
    TimeNeed: "13",
    Class: "Bussiness",
  },
  {
    From: "YYZ",
    To: "NYC",
    Company: "Air Canada",
    Code: "AC",
    Price: 300,
    SDate: "2 Jun, Fri",
    EDate: "5 Jun, Wed",
    STime: "09:15",
    ETime: "22:00",
    TimeNeed: "6",
    Class: "Economy",
  },
  {
    From: "NYC",
    To: "HKG",
    Company: "Cathay Pacific",
    Code: "CX",
    Price: 632,
    SDate: "1 Jun, Tue",
    EDate: "7 Jun, Wed",
    STime: "12:23",
    ETime: "05:76",
    TimeNeed: "8",
    Class: "Economy",
  },
  {
    From: "HKG",
    To: "YYZ",
    Company: "Cathay Pacific",
    Code: "CX",
    Price: 1200,
    SDate: "1 Jun, Tue",
    EDate: "1 Jun, Tue",
    STime: "12:23",
    ETime: "12:44",
    TimeNeed: "12",
    Class: "Economy",
  },
  {
    From: "YYZ",
    To: "NYC",
    Company: "American Airlines",
    Code: "AA",
    Price: 366,
    SDate: "2 Jun, Fri",
    EDate: "4 Jun, Mon",
    STime: "15:22",
    ETime: "17:44",
    TimeNeed: "6",
    Class: "Bussiness",
  },
  {
    From: "HKG",
    To: "NYC",
    Company: "American Airlines",
    Code: "AA",
    Price: 894,
    SDate: "12 Jun, Mon",
    EDate: "28 Jun, Wed",
    STime: "00:22",
    ETime: "08:12",
    TimeNeed: "16",
    Class: "Economy",
  },
];

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState<string>("YYZ");
  const [currentDirection, setCurrentDirection] = useState<string>("HKG");
  const [currentList, setCurrentList] = useState<any[]>([]);

  const navigation = useNavigation();

  const handleSwipe = () => {
    const temp = currentLocation;
    setCurrentLocation(currentDirection);
    setCurrentDirection(temp);
  };

  const handleComfirm = () => {
    const temp = AirlineList.filter(
      (e) => e.From === currentLocation && e.To === currentDirection
    );
    setCurrentList(temp);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 26 }}>Hello, Danny!</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 15 }}
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ borderRadius: 10, padding: 10 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>
            From ------------{">"}
          </Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            {"<"}------------ To
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 20,
            alignItems: "center",
          }}
        >
          <Picker
            style={{
              color: "#fff",
              fontSize: 50,
              fontWeight: "bold",
            }}
            onChanged={setCurrentLocation}
            options={[
              { value: "HKG", text: "HKG" },
              { value: "YYZ", text: "YYZ" },
              { value: "NYC", text: "NYC" },
            ]}
            value={currentLocation}
          />
          <TouchableOpacity onPress={handleSwipe}>
            <FontAwesome name="exchange" color="#FFFF00" size={18} />
          </TouchableOpacity>
          <Picker
            style={{
              color: "#fff",
              fontSize: 50,
              fontWeight: "bold",
            }}
            onChanged={setCurrentDirection}
            options={[
              { value: "HKG", text: "HKG" },
              { value: "YYZ", text: "YYZ" },
              { value: "NYC", text: "NYC" },
            ]}
            value={currentDirection}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>2 Jun, Fri</Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>14 Jun, Fri</Text>
        </View>
        <TouchableOpacity onPress={handleComfirm}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "#fff",
              alignItems: "center",
              padding: 20,
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {currentList.map((e, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#ffff00",
              padding: 10,
              borderRadius: 25,
              margin: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}
            >
              {e.Company}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, color: "#888" }}>{e.From}</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>{e.To}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingVertical: 5,
              }}
            >
              <Text style={{ fontSize: 18 }}>{e.STime}</Text>
              <Text style={{ fontSize: 12, color: "#888" }}>
                {e.TimeNeed} Hours
              </Text>
              <Text style={{ fontSize: 18 }}>{e.ETime}</Text>
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
                <Text style={{ fontSize: 14, color: "#fff" }}>{e.Class}</Text>
              </View>
              <Text style={{ fontSize: 14 }}>{e.SDate}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                ${e.Price}
              </Text>
              <Avatar
                size={38}
                rounded
                icon={{ name: "angle-right", type: "font-awesome" }}
                titleStyle={{ color: "#fff" }}
                containerStyle={{ backgroundColor: "#000" }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
