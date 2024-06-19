import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "react-native-vector-icons";

const jobListings = [
  {
    jobTitle: "Software Engineer",
    jobShortText: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    image: require("../Images/fb.jpg"),
  },
  {
    jobTitle: "Data Scientist",
    jobShortText: "Google",
    salary: "$160,000",
    location: "India",
    image: require("../Images/Google.png"),
  },
  {
    jobTitle: "UI/UX Designer",
    jobShortText: "Spotify",
    salary: "$120,000",
    location: "Berlin, Germany",
    image: require("../Images/Spotify.jpg"),
  },
  {
    jobTitle: "DevOps Engineer",
    jobShortText: "Amazon",
    salary: "$150,000",
    location: "Seattle, USA",
    image: require("../Images/amazon.jpg"),
  },
  {
    jobTitle: "Product Manager",
    jobShortText: "Apple",
    salary: "$140,000",
    location: "Cupertino, USA",
    image: require("../Images/apple.png"),
  },
  {
    jobTitle: "Mobile Developer",
    jobShortText: "Twitter",
    salary: "$130,000",
    location: "San Francisco, USA",
    image: require("../Images/twitter.jpg"),
  },
  {
    jobTitle: "Cybersecurity Analyst",
    jobShortText: "Microsoft",
    salary: "$145,000",
    location: "Redmond, USA",
    image: require("../Images/microsoft.jpg"),
  },
  {
    jobTitle: "Database Administrator",
    jobShortText: "Oracle",
    salary: "$110,000",
    location: "Austin, USA",
    image: require("../Images/oracle.jpg"),
  },
];

const popularJobs = [
  {
    title: "Jr Executive",
    bottomText: "Burger King",
    amount: "$96,000/y",
    location: "Los Angeles, US",
    image: require("../Images/burger.jpg"),
  },
  {
    title: "Product Manager",
    bottomText: "Beats",
    amount: "$84,000/y",
    location: "Florida, US",
    image: require("../Images/beats.jpg"),
  },
  {
    title: "Product Manager",
    bottomText: "Facebook",
    amount: "$86,000/y",
    location: "Florida, US",
    image: require("../Images/fb.jpg"),
  },
  {
    title: "Marketing Specialist",
    bottomText: "Nike",
    amount: "$70,000/y",
    location: "Portland, US",
    image: require("../Images/nike.jpg"),
  },
  {
    title: "Business Analyst",
    bottomText: "Deloitte",
    amount: "$75,000/y",
    location: "New York, US",
    image: require("../Images/deloitte.jpg"),
  },
  {
    title: "Sales Manager",
    bottomText: "PepsiCo",
    amount: "$90,000/y",
    location: "Chicago, US",
    image: require("../Images/pepsico.jpg"),
  },
  {
    title: "Content Writer",
    bottomText: "BuzzFeed",
    amount: "$65,000/y",
    location: "New York, US",
    image: require("../Images/buzzfeed.jpg"),
  },
  {
    title: "HR Specialist",
    bottomText: "Amazon",
    amount: "$68,000/y",
    location: "Seattle, US",
    image: require("../Images/amazon.jpg"),
  },
];

const Homescreen = ({ route }) => {
  const { name, email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
          <Image
            style={styles.userImage}
            source={require("../Images/user.jpg")}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              size={20}
              color="grey"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search a job or position"
            />
          </View>
          <View style={styles.filterContainer}>
            <Icon name="sliders" size={24} color="grey" />
          </View>
        </View>

        {/* Featured Jobs */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={jobListings}
          keyExtractor={(item) => item.jobTitle}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.featuredJobCard}>
              <Image style={styles.featuredJobImage} source={item.image} />
              <View style={styles.featuredJobTextContainer}>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.jobCompany}>{item.jobShortText}</Text>
                <View style={styles.featuredJobBottom}>
                  <Text style={styles.jobSalary}>{item.salary}</Text>
                  <Text style={styles.jobLocation}>{item.location}</Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* Popular Jobs */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.jobItem}>
              <Image style={styles.jobImage} source={item.image} />
              <View style={styles.jobDetails}>
                <Text style={styles.jobTitlePopular}>{item.title}</Text>
                <Text style={styles.jobCompanyPopular}>{item.bottomText}</Text>
                <View style={styles.popularJobBottom}>
                  <Text style={styles.jobSalaryPopular}>{item.amount}</Text>
                  <Text style={styles.jobLocationPopular}>{item.location}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollView: {
    padding: 10,
    margin: 7,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "grey",
  },
  userImage: {
    borderRadius: 40,
    width: 50,
    height: 50,
    marginTop: 10,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  filterContainer: {
    marginLeft: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "#95969D",
  },
  featuredJobCard: {
    backgroundColor: "#5386E4",
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
    width: 280,
    height: 186,
    justifyContent: "space-between",
  },
  featuredJobImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredJobTextContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  jobCompany: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  featuredJobBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobSalary: {
    fontSize: 16,
    color: "white",
  },
  jobLocation: {
    fontSize: 14,
    color: "white",
  },
  jobItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    height: 74,
  },
  jobImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitlePopular: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jobCompanyPopular: {
    fontSize: 12,
    color: "grey",
  },
  popularJobBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  jobSalaryPopular: {
    fontSize: 14,
    fontWeight: "bold",
  },
  jobLocationPopular: {
    fontSize: 12,
    color: "grey",
  },
});

export default Homescreen;
