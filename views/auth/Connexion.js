import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as auth from '@react-native-firebase/auth';
var s = require('../../style');

function Connexion() {
    return (
      <View style={s.container}>
      <Image
      style={s.topEmoji}
      source={require('../../assets/img/emojis/sunglassesMan.png')}
    />
      <Text style={s.title}>Connexion</Text>
      <Text style={s.sub}>Accède à ton espace</Text>
      <TextInput
      style={s.field}
      placeholder={'Mail'}
      enablesReturnKeyAutomatically={true}
      keyboardType={'email-address'}
      returnKeyType={'next'}
    />
    <TextInput
    style={s.field}
    placeholder={'Mot de passe'}
    secureTextEntry={true}
    returnKeyType={'done'}
  />
  <TouchableOpacity
       style={s.btnBleu}>
       <Text style={s.textBtnBleu}>Me connecter</Text>
     </TouchableOpacity>
      </View>
    )

}
export default Connexion;
