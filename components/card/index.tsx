import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import { styles } from './styles';
import { Text, View } from '../Themed';

const tempPosts = [
  { id: 0, nome: 'Ana Clara', usuario: 'anaclaralmz', patologia: 'Doença arterial coronariana',dia: "20/04/2023" ,content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.'},
  { id: 1, nome: 'Bruno Meira', usuario: 'brun0meira', patologia: 'Pressão alta',dia: "21/04/2023" , content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.' },
  { id: 2, nome: 'Marcelo Feitoza', usuario: 'marcelofeitoza', patologia: 'Cardiopatia congênita',dia: "22/04/2023" , content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.' },
  { id: 3, nome: 'Pedro Baptista', usuario: 'PedroHaggeBaptista', patologia: 'Doença arterial periférica',dia: "23/04/2023" , content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.' },
  { id: 4, nome: 'Victor Carvalho', usuario: 'vict0rcarvalh0', patologia: 'AVC', dia: "24/04/2023" , content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.' },
  { id: 5, nome: 'Eduardo Barreto', usuario: 'Eduardo-Barreto', patologia: 'Diabete', dia: "25/04/2023" , content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam malesuada nulla in vestibulum. Duis pretium arcu nec leo suscipit volutpat.' },
]

export default function Card() {

  const listaPosts = tempPosts.map((post) => {
    return (
      <View key={post.id} style={styles.card}>
        <View style={styles.topContent}>
          <Image style={styles.imgCard} source={{uri: `https://github.com/${post.usuario}.png`}}></Image>
          <View>
            <Text style={styles.userInfo}>{post.nome}  ·  <Text style={styles.postDate}>{post.dia}</Text></Text>
            <Text style={styles.userPatho}>{post.patologia}</Text>
          </View>
        </View>
        <Text style={styles.contentPost}>{post.content}</Text>
      </View>
    );
  });


  return (
      <View style={styles.container}>
        {listaPosts}
      </View>
  );
}