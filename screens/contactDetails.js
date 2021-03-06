import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../shared/card";

export default function ContactDetails(props) {
  const { title, number, email } = props.route.params.item;
  return (
    <View>
      <Card>
        <Text style={styles.desig}>{title}</Text>
        <Text style={styles.contactText}>Phone number: {number}</Text>
        <Text style={styles.contactText}>Email: {email}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  contactText: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  desig: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
});
