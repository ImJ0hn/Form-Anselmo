import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        color:'#f00',
    },
    campos:{
        padding:'3%',
        width:'100%',
        borderWidth:1,
        borderColor:'#d9d9d9',
        borderRadius:20,
        backgroundColor:'#ddd',
        margin:2,
    }
  });

  export default estilo;