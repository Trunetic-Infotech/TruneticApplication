import { Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("./screens/navigator");
    },);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
      <View
        // style={{
        //   flex: 1,
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}

        className=" items-center"
      >
        {/* <Text className="text-lg bg-pink-400">
          Edit app/index.tsx to edit this screen.
        </Text> */}
   
      </View>
    </SafeAreaView>
  );
}
