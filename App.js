import React from 'react' ;
import {ScrollView} from 'react-native';
import Titulo from './componentes/Titulo'

export default function App(){
  return(
<ScrollView style={{padding:20}}>
  <Titulo />
  <Saudacao nome="Natalia"/>
  <Saudacao nome="Maria"/>
  <Saudacao nome="Andre"/>
  
</ScrollView>
  )
}