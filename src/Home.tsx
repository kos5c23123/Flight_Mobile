import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Avatar, Divider } from "@rneui/themed";

import { FontAwesome } from "@expo/vector-icons";

const AirlineList = [
  {
    Code: "AC",
    Name: "Air Canada",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg",
    Ticket: [
      {
        direction: "YYZ -> HKG",
        price: 1000,
        date: "2 Jun, Fri",
        StartTime: "10:00",
        EndTime: "12:00",
        TimeNeed: "13h",
      },
      {
        direction: "YYZ -> NYC",
        price: 300,
        date: "10 May, Fri",
        StartTime: "09:15",
        EndTime: "22:00",
        TimeNeed: "6h",
      },
    ],
  },
  {
    Code: "CX",
    Name: "Cathay Pacific",
    Image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Cathay_Pacific_logo.svg",
    Ticket: [
      {
        direction: "YYZ -> HKG",
        price: 1000,
        date: "2 Jun, Fri",
        StartTime: "10:00",
        EndTime: "12:00",
        TimeNeed: "13h",
      },
      {
        direction: "YYZ -> NYC",
        price: 300,
        date: "10 May, Fri",
        StartTime: "09:15",
        EndTime: "22:00",
        TimeNeed: "6h",
      },
    ],
  },
  {
    Code: "AA",
    Name: "American Airlines",
    Image:
      "https://upload.wikimedia.org/wikipedia/en/2/23/American_Airlines_logo_2013.svg",
    Ticket: [
      {
        direction: "YYZ -> HKG",
        price: 1000,
        date: "2 Jun, Fri",
        StartTime: "10:00",
        EndTime: "12:00",
        TimeNeed: "13h",
      },
      {
        direction: "YYZ -> NYC",
        price: 300,
        date: "10 May, Fri",
        StartTime: "09:15",
        EndTime: "22:00",
        TimeNeed: "6h",
      },
    ],
  },
];

export default function Home() {
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
        <Text style={{ color: "#fff", fontSize: 26 }}>Hello, there!</Text>
        <Avatar
          size={64}
          rounded
          title="HI"
          titleStyle={{ color: "#000" }}
          containerStyle={{ backgroundColor: "#FFFF00" }}
        />
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
          <Text style={{ color: "#fff", fontSize: 50, fontWeight: "bold" }}>
            HKG
          </Text>
          <FontAwesome name="exchange" color="#FFFF00" size={18} />
          <Text style={{ color: "#fff", fontSize: 50, fontWeight: "bold" }}>
            YYZ
          </Text>
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
      </View>
      <ScrollView>
        {AirlineList.map((e, i) => (
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
              {e.Name}
            </Text>
            {/* <Image
              style={{ width: 200, height: 200 }}
              source={{
                uri: e.Image,
              }}
            /> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, color: "#888" }}>HKG</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>YYZ</Text>
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
        ))}
      </ScrollView>
    </View>
  );
}
