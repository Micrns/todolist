import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MenuScreen() {
  const navigation = useNavigation();

  const MenuItem = ({
    label,
    onPress,
    showIcon,
  }: {
    label: string;
    onPress: () => void;
    showIcon?: boolean;
  }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.leftContent}>
        <Text style={styles.menuText}>{label}</Text>
        {showIcon && (
          <Ionicons
            name="clipboard-outline"
            size={22}
            color="#999"
            style={{ marginLeft: 10 }}
          />
        )}
      </View>
      <Ionicons name="chevron-forward" size={18} color="#000" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>SOS</Text>
      <Text style={styles.headerSubtitle}>Entertainment</Text>

      <View style={styles.card}>
        <Text style={styles.menuTitle}>Menu</Text>

        <MenuItem
          label="Pull-Sheet"
          showIcon
          onPress={() => navigation.navigate("PullSheet" as never)}
        />

        <MenuItem
          label="Create Pull-Sheet"
          onPress={() => navigation.navigate("CreatePullSheetList" as never)}
        />

        <MenuItem
          label="Inventory"
          onPress={() => navigation.navigate("Inventory" as never)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 20,
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 20,
  },
  card: {
    backgroundColor: "#e5e5e5",
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    minHeight: 600,
  },
  menuTitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontSize: 22,
  },
});