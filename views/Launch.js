import React, { Component,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as styleVariables from '../styleVariables.js';
import { useNavigation } from '@react-navigation/native';
var s = require('../style.js')
function Launch() {
  const navigation = useNavigation();
  return (
    <View style={s.container}>
    <Text style={s.title}>inter — val</Text>
      <Text style={s.sub}>Entraînement aux intervalles de notes</Text>
      <Image
      style={s.launchImg}
      source={require('../assets/img/musicMan.png')}
    />
<TouchableOpacity
     style={s.btnBleu}>
     <Text style={s.textBtnBleu}>Commencer</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
          <Text style={s.blueSmallText}>J'ai déjà un compte</Text>
        </TouchableOpacity>
    </View>
  );
}
export default Launch;
