import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import crm from "./development/crm";

// Data array for services
const serviceData = [
  {
    title: "Software Development",
    image: require("../../assets/software development.png"),
    route: "/screens/development/software_development"
  },
  {
    title: "App Development",
    image: require("../../assets/App Development.png"),
    route: "/screens/development/app_development"
  },
  {
    title: "Web Development",
    image: require("../../assets/webdevelopment.png"),
    route: "/screens/development/web_development"
  },
  {
    title: "CRM",
    image: require("../../assets/CRM.png"),
    route: "/screens/development/crm"
  },
  {
    title: "ERP",
    image: require("../../assets/ERP.png"),
    route: "/screens/development/erp"
  },
  {
    title: "Internship",
    image: require("../../assets/INTERNSHIP.png"),
    route: "/screens/development/internship"
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the services based on search query
  const filteredServices = serviceData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
      <View className="w-full min-h-screen bg-custom-gradient py-[20px] px-[20px]">
        <Text
          className="text-center text-[32px] text-[#1c4ac9] font-bold mb-[30px]"
          style={{
            textShadowColor: "#000",
            textShadowOffset: { width: 4, height: 8 },
            textShadowRadius: 15,
          }}
        >
          SERVICES!
        </Text>

        <View className="w-full min-h-screen bg-[white] rounded-t-[50px] py-[30px] px-[20px]">
          {/* Search Input */}
          <View className="flex-row w-full h-[50px] items-center px-[20px] rounded-[80px] bg-[#1b3b8f] mb-[20px]">
            <Feather name="search" size={20} color="#fff" />
            <TextInput
              className="w-full text-white"
              placeholder="Search here..."
              placeholderTextColor="#fff"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Filtered Services */}
          <View className="flex-wrap flex-row justify-between">
            {filteredServices.length > 0 ? (
              filteredServices.map((item, index) => (
                <TouchableOpacity key={index} className="mb-[20px] w-[48%]" onPress={() => router.push(item.route)}>
                  <Image
                    className="w-full h-[150px] rounded-[10px]"
                    source={item.image}
                  />
                  <Text className="text-center mt-[5px]">{item.title}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-center w-full text-gray-500 mt-10">
                No services found.
              </Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;
