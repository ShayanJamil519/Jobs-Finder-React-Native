import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";
import { useState } from "react";


const jobTypes = ["Full-time", "Part-time", "Contractor"];


const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        {/* Text Container */}
        <Text style={styles.userName}>Hello, Shayan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job !</Text>
        </View>

        {/* Search Container */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value={searchTerm}
            // onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
            </View>
            <TouchableOpacity style={styles.searchBtn} >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>


          </View>

          {/* Tabs Container */}
          <View style={styles.tabsContainer}>
            <FlatList 
             keyExtractor={item=>item}
             contentContainerStyle={{columnGap:SIZES.small}}
             horizontal
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
             
              style={styles.tab(activeJobType, item)}
              onPress={() =>{ setActiveJobType(item)
              router.push(`/search/${item}`)
              }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}

            />

            </View>
    
      
      
    </View>
  )
}

export default Welcome