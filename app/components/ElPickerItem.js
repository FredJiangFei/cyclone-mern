import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function ElPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})
