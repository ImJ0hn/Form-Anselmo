import React,{useState} from 'react';

import {Text, View, TextInput
,TouchableOpacity} from 'react-native';

import estilo from './css/estilo';


export default function App() {

const[username,setUsername] = useState('');
const[email, setEmail] = useState('');
const[password,setPassword] = useState('');

function gravar(){

   if(username === '' || email === '' || 
   password === '')
   {
     alert("Preencha os campos");
     return;
   }
  
   



  const dados = {
    username,email,password,
  } 
  console.log(dados);
}

  return (
    <View style={estilo.container}>
          <Text style={estilo.texto}>Seja bem vindo(a)!</Text>
    
    <TextInput style={estilo.campos} onChangeText={setUsername}
    value={username} placeholder={"Dg seu nome"}/>
    
    <TextInput style={estilo.campos} onChangeText={setEmail} 
    value={email} placeholder={"Dg seu e-mail"} 
    />

<TextInput style={estilo.campos} onChangeText={setPassword} 
    value={password} placeholder={"Dg a senha"} 
    />
<TouchableOpacity onPress={gravar}>
  <Text>Gravar</Text>
</TouchableOpacity>




    
    
    </View>
  );
}


