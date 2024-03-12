import { Text, View, TextInput, Button,} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';






export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.containerlogin}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button style={styles.buttonLogin} title="          Entrar           " />
            <Text>Lembrar senha</Text>
        </View>
    );
}