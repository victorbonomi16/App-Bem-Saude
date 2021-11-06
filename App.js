import React, { useState, createContext, useContext, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Icon,
  Alert,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions;

function ContextoResulta() {
  return <></>;
}

function HomeScreen({ navigation }) {
  const [valor, setValor] = useState();
  //const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.1,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/logus.png')}
            style={styles.logoHome}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: height * 0.3,
            width: width * 0.3,
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Peso')}>
            <Image source={require('./assets/1.png')} style={styles.imagem1} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Dormir')}>
            <Image source={require('./assets/2.png')} style={styles.imagem2} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: height * 0.3,
            width: width * 0.3,
            justifyContent: 'normal',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Treino')}>
            <Image
              source={require('./assets/imagem3.png')}
              style={styles.imagem2}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Eu')}>
            <Image source={require('./assets/4.png')} style={styles.imagem4} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const Stack2 = createStackNavigator();

function MyStack() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="Peso" component={PesoScreen} />
      <Stack2.Screen name="Treino" component={TreinoScreen} />
      <Stack2.Screen name="Dormir" component={DormirScreen} />
      <Stack2.Screen name="Eu" component={EuScreen} />
    </Stack2.Navigator>
  );
}

function PesoScreen() {
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setResultado(await AsyncStorage.getItem('@resultado'));
        await AsyncStorage.getItem('@peso')
        
      } catch (err) {
        setResultado(0);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imagemdados}>
        <Image
          source={require('./assets/dadoviski.png')}
          style={styles.imagemdados}
        />
      </View>
      
      <Text 
        style={{fontSize: 24,
          color: 'black',
          fontFamily:"Agency FB",
          position: 'absolute',
          fontWeight: '788',
          top: 190,
          right: 138,
          zIndex: 99,}}>MEU IMC</Text>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontFamily:"Agency FB",
          position: 'absolute',
          fontWeight: '788',
          top: 220,
          right: 160,
          zIndex: 99,
        }}>
        {' '}
        {parseInt(resultado * 100) / 100}{' '}
      </Text>
      <View style={styles.tituloPeso}>
        <Image
          source={require('./assets/TituloPeso.png')}
          style={styles.tituloPeso}
        />
      </View>
    </View>
  );
}

function DormirScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/dorminhoca.png')} style={styles.dormirfoto} />
      
      <Image
      source={require('./assets/pagDomirSF.png')}
      style={styles.dormirfotoDescricao}
      />
    </View>
  );
}
/*

*/

function TreinoScreen() {
  const textoModal1 =
    'Musculação e crossfit são o ideal para pessoas como você. \n Pratique caminhada durante 1 hora, de preferência todos os dias. No entanto, é importante dar um descanso de um ou dois dias após o trabalho de um grupamento muscular para permitir uma recuperação adequada.';

  const textoModal2 =
    'Em seu caso é recomendado caminhar periodicamente e manter uma alimentação com frutas e legumes';

  const textoModal3 =
    'Caminhadas, corridas, dança e ciclismo estão entre as práticas mais simples e eficientes para combater a gordura.';

  const textoModal4 =
    'Caminhadas é a práticas recomendada no início.No entanto você deve manter uma alimentação regulada e procurar orientações pois a partir da obesidade de grau I já é considerado doença.';

  const textoModal5 =
    'Você precisará fazer uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e consultar um médico especialista (endócrino). Também, uma rotina de exercícios intensos, provavelmente aeróbicos (para emagrecer). Neste estágio, é preciso se dedicar muito para conseguir perder peso.';

  const textoModal6 =
    'O último grau de obesidade é o 3, e acredite, nesta fase sua força de vontade tem de ser absurda. Dependendo das suas condições, é provável que receba a orientação de realizar uma cirurgia.Mesmo que difícil a reversão da obesidade grau 3, um tratamento adequado pode solucionar ou diminuir, conseguindo chegar até o sobrepeso.';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./assets/TREINO.png')}
          style={styles.imagemTreino}
        />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> {modalText} </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleButton}>Voltar para menu</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={[styles.buttonAbaixoPeso, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal1);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Abaixo do peso</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonPesoNormal, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal2);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Peso normal</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonSobrePeso, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal3);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Sobre peso</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonGrauI, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal4);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Obesidade grau I</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonGrauII, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal5);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Obesidade grau II</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonGrauIII, styles.buttonOpen]}
          onPress={() => {
            setModalText(textoModal6);
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Obesidade grau III</Text>
        </Pressable>
      </View>
    </View>
  );
}

function EuScreen() {
  const calculaIMC = () => {
    setResultado(peso / altura ** 2);
  };

  const nome = React.useState(null);
  const [altura, onAltura] = React.useState(null);
  const [peso, onPeso] = React.useState(null);
  const [resultado, setResultado] = React.useState(null);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@resultado', resultado.toString());
        await AsyncStorage.setItem('@peso', peso.toString());
      } catch (err) {
        console.error(err);
      }
    })();
  }, [resultado]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logus.png')} style={styles.logoHome} />
      <View style={styles.textEuNome}>
        <Text style={styles.textEu}>INFORME SEU NOME</Text>
        <TextInput style={styles.input2} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.textEu}>
          <Text style={styles.textEu}>ALTURA</Text>
          <TextInput
            style={styles.input}
            onChangeText={onAltura}
            value={altura}
          />
        </View>

        <View style={styles.textEu2}>
          <Text style={styles.textEu}>PESO</Text>
          <TextInput
            style={styles.input}
            onChangeText={onPeso}
            value={peso}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={calculaIMC}>
          <Text style={styles.button_text}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultadinho}>
        {resultado && <Text>seu IMC: {parseInt(resultado * 100) / 100}</Text>}
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            }
            if (route.name === 'Peso') {
              iconName = focused
                ? 'speedometer-outline'
                : 'speedometer-outline';
            }
            if (route.name === 'Dormir') {
              iconName = focused
                ? 'cloudy-night-outline'
                : 'cloudy-night-outline';
            }
            if (route.name === 'Treino') {
              iconName = focused ? 'barbell-outline' : 'barbell-outline';
            } else if (route.name === 'Eu') {
              iconName = focused ? 'man-outline' : 'man-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Peso" component={PesoScreen} />
        <Tab.Screen name="Dormir" component={DormirScreen} />
        <Tab.Screen name="Treino" component={TreinoScreen} />
        <Tab.Screen name="Eu" component={EuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
    borderRadius: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 5,
  },

  buttonAbaixoPeso: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 90,
  },

  buttonPesoNormal: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 20,
  },

  buttonSobrePeso: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 20,
  },

  buttonGrauI: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 20,
  },

  buttonGrauII: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 20,
  },

  buttonGrauIII: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 45,
    width: 350,
    marginTop: 20,
  },

  buttonOpen: {
    backgroundColor: '#EEE9E9',
  },
  buttonClose: {
    backgroundColor: '#419CB4',
    borderRadius: 10,
    alignItems: 'center',
  },
  textStyle: {
    color: '#252827',
    fontWeight: 'Agency FB',
    textAlign: 'center',
    fontSize: 20,
  },
  textStyleButton:{
    color: '#252827',
    fontWeight: 'Agency FB',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 7,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#419CB4',
    alignItems: 'center',
  },

  logoHome: {
    height: 250,
    width: 230,
  },

  dormirfoto: {
    height: 100,
    width: 320,
    marginTop: 20,
  },
  dormirfotoDescricao:{
    height: 550,
    width: 360,
    marginTop: 0,
  },

  title: {
    fontSize: 25,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
    marginTop: 80,
  },

  imagemTreino: {
    textAlign: 'center',
    marginTop: 20,
    height: 100,
    width: 350,
  },

  imagem1: {
    height: 150,
    width: 150,
    borderRadius: 4,
      },

  imagem2: {
    height: 150,
    width: 150,
    borderRadius: 4,
  },

  imagem3: {
    height: 150,
    width: 150,
    borderRadius: 4,
  },

  imagem4: {
    position: 'center',
    height: 150,
    width: 150,
    borderRadius: 4,
  },

  tituloPeso: {
    height: 350,
    width: 350,
    marginRight: 0,
    borderRadius: 4,
    marginTop: -245,
  },

  imagemdados: {
    position: 'center',
    height: 350,
    width: 350,
    marginRight: 15,
    marginTop: 150,
    borderRadius: 4,
  },

  text: {
    fontSize: 15,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
  },

  resultadinho: {
    fontSize: 15,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
    marginTop:-800
  },

  textEu: {
    fontSize: 15,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  meu: {
    fontSize: 15,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textEu2: {
    fontSize: 15,
    color: '#252827',
    fontWeight: '788',
    fontFamily: 'Agency FB',
    position: 'center',
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 15,
  },

  textEuNome: {
    marginTop: 10,
    position: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    width: 100,
    marginTop: 10,
    textcolor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    position: 'center',
    alignItems: 'center',
  },

  input2: {
    height: 40,
    width: 220,
    marginTop: 10,
    textcolor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    position: 'center',
    alignItems: 'center',
    padding: 10,
  },

  button: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 45,
    width: 150,
    marginTop: 30,
    alignItems: 'center',
  },

  button_text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Agency FB',
    position: 'center',
    marginTop: 10,
  },
});
