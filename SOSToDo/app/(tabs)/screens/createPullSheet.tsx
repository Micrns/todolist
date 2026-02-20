import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const sections = [
  "Audio",
  "Lighting",
  "Video",
  "Rigging",
  "Power",
  "XLR",
  "Miscellaneous",
];

const CreatePullSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>SOS</Text>
      <Text style={styles.headerSubtitle}>Entertainment</Text>
      <Text style={styles.pageTitle}>Create Pull-Sheet</Text>

      <View style={styles.card}>
        {/* Event Info */}
        <Text style={styles.sectionTitle}>Event Info.</Text>
        <View style={styles.row}>
          <TextInput
            placeholder="Event Name.."
            placeholderTextColor="#777"
            style={styles.input}
          />
          <TextInput
            placeholder="Date..."
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <View style={styles.divider} />

        {/* Vehicle/Driver */}
        <Text style={styles.sectionTitle}>Vehicle/Driver</Text>
        <View style={styles.row}>
          <TextInput
            placeholder="Vehicle..."
            placeholderTextColor="#777"
            style={styles.input}
          />
          <TextInput
            placeholder="Driver..."
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <View style={styles.divider} />

        {/* Expandable Sections */}
        {sections.map((section) => (
          <View key={section}>
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

            {expanded === section && (
              <View style={styles.expandContent}>
                <Text style={{ color: "#666" }}>
                  Add {section} items here...
                </Text>
              </View>
            )}
          </View>
        ))}

        {/* Submit Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreatePullSheet;

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
  sectionTitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "48%",
  },
  divider: {
    height: 1,
    backgroundColor: "#bbb",
    marginVertical: 20,
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
  expandContent: {
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});