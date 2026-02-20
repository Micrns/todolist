import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Section =
  | "Audio"
  | "Lighting"
  | "Video"
  | "Rigging"
  | "Power"
  | "XLR"
  | "Miscellaneous";

const sections: Section[] = [
  "Audio",
  "Lighting",
  "Video",
  "Rigging",
  "Power",
  "XLR",
  "Miscellaneous",
];

const PullSheetScreen: React.FC = () => {
  const [expanded, setExpanded] = useState<Section | null>(null);

  const toggleSection = (section: Section) => {
    setExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>SOS</Text>
      <Text style={styles.headerSubtitle}>Entertainment</Text>
      <Text style={styles.pageTitle}>Pull-Sheet</Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Event Row */}
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Event</Text>
          <Text style={styles.infoValue}>Santa Monica Blvd</Text>
          <Text style={styles.infoValue}>Feb 28, 2026</Text>
        </View>

        <View style={styles.divider} />

        {/* Vehicle / Driver */}
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Vehicle/ Driver</Text>
          <Text style={styles.infoValue}>Ernie</Text>
          <Text style={styles.infoValue}>Chris</Text>
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
                  {section} items will appear here...
                </Text>
              </View>
            )}
          </View>
        ))}

        {/* Complete Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Complete task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PullSheetScreen;

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
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: {
    fontWeight: "500",
    fontSize: 14,
  },
  infoValue: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#bbb",
    marginVertical: 15,
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
    marginTop: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
