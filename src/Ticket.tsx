import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

const containList = [
  {
    Company: "Air Canada",
    Flight: "AC 1111",
    Departure: "HKG",
    DepartureTime: "2021-01-01 00:00",
    Departure_Regional: "Hong Kong, HKSAR",
    Arrival: "YYZ",
    ArrivalTime: "2021-01-01 12:00",
    Arrival_Regional: "Toronto, Canada",
    Departure_Terminal: "Terminal 1",
    Arrival_Terminal: "Terminal 1",
    Passenger: "1",
    Ticket: "A111-111",
    Baggage: "28",
    Class: "Bussiness",
    Seat: "10A",
  },
  {
    Company: "American Airlines",
    Flight: "AA 2222",
    Departure: "NYC",
    DepartureTime: "2021-01-01 00:00",
    Departure_Regional: "New York City, US",
    Arrival: "HKG",
    ArrivalTime: "2021-01-01 14:00",
    Arrival_Regional: "Hong Kong, HKSAR",
    Departure_Terminal: "Terminal 2",
    Arrival_Terminal: "Terminal 1",
    Passenger: "1",
    Ticket: "A222-222",
    Baggage: "30",
    Class: "Economy",
    Seat: "32B",
  }
]

export default function Ticket() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const handleChange = (index:number) => {
    if (selectedItem === index) {
      setSelectedItem(null); 
    } else {
      setSelectedItem(index); 
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={{ flex: 1 }}>
        {containList.map((e, i) => (
        <TouchableWithoutFeedback onPress={() => handleChange(i)} key={i}>
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
              {e.Company}
              </Text>
              <Text style={{ fontSize: 16, color: "#888" }}>{e.Flight}</Text>
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
                {e.DepartureTime}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {e.ArrivalTime}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 30 }}>{e.Departure}</Text>
              <Text style={{ fontSize: 30 }}>{e.Arrival}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {e.Departure_Regional}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {e.Arrival_Regional}
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
              <Text style={{ fontSize: 14, color: "#888" }}>{e.Departure_Terminal}</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>{e.Arrival_Terminal}</Text>
            </View>
            <View
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderRadius: 1,
              }}
            />
            {selectedItem === i ? (
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
                    <Text style={styles.info}>{e.Passenger} Adult</Text>
                  </View>
                  <View
                    style={[
                      styles.col,
                      {
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text style={styles.info}>{e.Ticket}</Text>
                  </View>
                  <View
                    style={[
                      styles.col,
                      {
                        alignItems: "flex-end",
                      },
                    ]}
                  >
                    <Text style={styles.info}>{e.Baggage}KG</Text>
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
                    <Text style={styles.info}>{e.Flight}</Text>
                  </View>
                  <View
                    style={[
                      styles.col,
                      {
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text style={styles.info}>{e.Class}</Text>
                  </View>
                  <View
                    style={[
                      styles.col,
                      {
                        alignItems: "flex-end",
                      },
                    ]}
                  >
                    <Text style={styles.info}>{e.Seat}</Text>
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
