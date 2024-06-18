import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Link,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

const jobListings = [
  {
    jobTitle: "Software Engineering",
    jobShortText: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    image: require("../Images/fb.jpg"),
  },
  {
    jobTitle: "Data Scientist",
    jobShortText: "Google",
    salary: "$150,000",
    location: "India",
    image: require("../Images/Google.png"),
  },
  {
    jobTitle: "Mobile App Developer",
    jobShortText: "Apple",
    salary: "$200,000",
    location: "Accra, Ghana",
    image: require("../Images/apple.png"),
  },
];

const popularJobs = [
  {
    title: "Jr. Executive",
    bottomText: "Burger King",
    amount: "$96,000/yr",
    location: "Los Angeles",
    image: require("../Images/burger.jpg"),
  },
  {
    title: "Product Manager",
    bottomText: "Beats",
    amount: "$84,000/yr",
    location: "Florida, US",
    image: require("../Images/beats.jpg"),
  },
  {
    title: "Product Manager",
    bottomText: "Facebook",
    amount: "$86,000/yr",
    location: "Florida, US",
    image: require("../Images/fb.jpg"),
  },
];

const Homescreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 50 }}>
        <ScrollView>
          {/*container for the upper text and name*/}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
              top: 10,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>Melissa</Text>
              <Text
                style={{ fontSize: 25, fontStyle: "italic", color: "grey" }}
              >
                melissa@gmail.com
              </Text>
            </View>
            <Image
              style={{ borderRadius: 50, width: 80, height: 80 }}
              source={require("../Images/fb.jpg")}
            />
          </View>
          <View>
            <TextInput
              style={{ margin: 20 }}
              placeholder="Search a job position"
            />
          </View>
          {/*Flatlist container*/}
          <View>
            <FlatList
              ListHeaderComponent={
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  {" "}
                  Featured Jobs
                </Text>
              }
              data={jobListings}
              renderItem={({ item }) => (
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                      style={{ width: 62, height: 62 }}
                      source={item.image}
                    />
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <Text>{item.jobTitle}</Text>
                      <Text>{item.jobShortText}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{item.salary}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View>
            <FlatList
              data={popularJobs}
              renderItem={({ item }) => (
                <View>
                  <View>
                    <Image source={item.image} />
                    <View>
                      <Text>{item.title}</Text>
                      <Text>{item.bottomText}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{item.amount}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
