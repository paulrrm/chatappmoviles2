import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
 
interface LoginFormData {
  email: string;
  password: string;
}
 
export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit } = useForm<LoginFormData>();
 
  const onSubmit = (data: LoginFormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        navigation.navigate('entrada');
      })
      .catch((error) => {
        console.error(error);
      });
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('registro')}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});