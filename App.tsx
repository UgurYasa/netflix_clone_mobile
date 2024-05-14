import { SafeAreaView } from "react-native-safe-area-context";
import MainRouter from "./src/routers/MainRouter";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { View } from "react-native";
import Subtitle from "./src/components/Subtitle";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex flex-1 bg-slate-500">
        <View className="h-[10vh] w-full">
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
    </Provider>
  );
}
