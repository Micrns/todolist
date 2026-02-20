import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


type Section =
  | "Audio"
  | "Lighting"
  | "Video"
  | "Rigging"
  | "Power"
  | "XLR"
  | "Miscellaneous";

interface InventoryItem {
  id: string;
  name: string;
  total: number;
}

const initialInventory: Record<Section, InventoryItem[]> = {
  Audio: [
    { id: "1", name: "Yamaha MG 10", total: 2 },
    { id: "2", name: "Yamaha MG 10", total: 1 },
    { id: "3", name: "Yamaha MG 10", total: 4 },
    { id: "4", name: "Yamaha MG 10", total: 3 },
  ],
  Lighting: [],
  Video: [],
  Rigging: [],
  Power: [],
  XLR: [],
  Miscellaneous: [],
};

const sections: Section[] = [
  "Audio",
  "Lighting",
  "Video",
  "Rigging",
  "Power",
  "XLR",
  "Miscellaneous",
];

const InventoryScreen: React.FC = () => {
  const [expanded, setExpanded] = useState<Section | null>("Audio");
  const [inventory, setInventory] =
    useState<Record<Section, InventoryItem[]>>(initialInventory);

  const toggleSection = (section: Section) => {
    setExpanded((prev) => (prev === section ? null : section));
  };

  // const navigation = useNavigation();

  const addItem = (section: Section) => {
    const newItem: InventoryItem = {
      id: Date.now().toString(),
      name: "New Item",
      total: 0,
    };

    

    setInventory((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>SOS</Text>
      <Text style={styles.headerSubtitle}>Entertainment</Text>
      <Text style={styles.pageTitle}>Inventory</Text>

      {/* Card */}
      <View style={styles.card}>
        {sections.map((section) => (
          <View key={section}>
            {/* Section Header */}
            <TouchableOpacity
              style={styles.expandRow}
              onPress={() => toggleSection(section)}
            >
              <Text style={styles.expandText}>{section}</Text>
              <Ionicons
                name={
                  expanded === section
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={20}
                color="#000"
              />
            </TouchableOpacity>

            {/* Expanded Content */}
            {expanded === section && (
              <View style={styles.sectionContent}>
                <View style={styles.columnHeader}>
                  <Text style={styles.columnTitle}>Item</Text>
                  <Text style={styles.columnTitle}>Total</Text>
                </View>

                {inventory[section].map((item) => (
                  <View key={item.id} style={styles.itemRow}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.totalBox}>
                      <Text>{item.total}</Text>
                    </View>
                  </View>
                ))}

                {/* Add Button */}
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => addItem(section)}
                >
                  <Ionicons name="add-circle-outline" size={20} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}

        {/* Bottom Button */}
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Save</Text>
        </TouchableOpacity>

        {/* <Button title="Go to create Pull sheet" onPress={() => navigation.navigate("CreatePullSheetList")}/> */}
      </View>
    </ScrollView>
  );
};

export default InventoryScreen;

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
  pageTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
  },
  card: {
    backgroundColor: "#e5e5e5",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 700,
  },
  expandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  expandText: {
    fontSize: 16,
  },
  sectionContent: {
    marginBottom: 10,
  },
  columnHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  columnTitle: {
    fontWeight: "500",
    fontSize: 13,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#bbb",
  },
  itemName: {
    fontSize: 14,
  },
  totalBox: {
    width: 30,
    height: 25,
    backgroundColor: "#ccc",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    marginTop: 10,
  },
  bottomButton: {
    backgroundColor: "#000",
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 40,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});