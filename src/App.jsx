import { SafeAreaView } from "react-native-safe-area-context";
import MainRouter from "./routers/MainRouter";
import { View } from "react-native";
import Subtitle from "./components/Subtitle";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
  return (
      <SafeAreaView className="flex flex-1 bg-slate-500">
        <View className="h-[10vh]">
          <Header />
        </View>
        <View className="h-[8vh] bg-gray-400 flex justify-center px-5 ">
          <Subtitle />
        </View>
        <View className="h-[70vh]">
          <MainRouter />
        </View>
        <View className="h-[12vh] bg-gray-100 ">
          <Footer />
        </View>
      </SafeAreaView>
  );
}
