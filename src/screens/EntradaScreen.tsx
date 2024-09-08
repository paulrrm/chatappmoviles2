import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { ref, push, onValue } from 'firebase/database';
import {database} from '../firebase'
 
export default function EntradaScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
 
  useEffect(() => {
    const messagesRef = ref(database, 'messages/');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data ? Object.values(data) : [];
      setMessages(messagesArray);
    });
  }, []);
 
  const handleSend = () => {
    const messagesRef = ref(database, 'messages/');
    push(messagesRef, { text: message, timestamp: Date.now() });
    setMessage('');
  };
 
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});