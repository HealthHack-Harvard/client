import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import { styles } from './styles';
import { Text, View } from '../Themed';

const tempPosts = [
  { id: 0, nome: 'Ana Clara', preco: 500, purpose: 'pay for the “x” treatment', description:'"Hi guys, Im undergoing x treatment, and my health plan does not cover the amount of x exam."' , pixKey: '(xx)xxxxx-xxxx'},
  { id: 1, nome: 'Victor Carvalho', preco: 500, purpose: 'pay for the “x” treatment',description:'"Hi guys, Im undergoing x treatment, and my health plan does not cover the amount of x exam."' , pixKey: '(xx)xxxxx-xxxx'},
  { id: 2, nome: 'Bruno ', preco: 500, purpose: 'pay for the “x” treatment', description:'"Hi guys, Im undergoing x treatment, and my health plan does not cover the amount of x exam."' ,pixKey: '(xx)xxxxx-xxxx'},
  { id: 3, nome: 'Mariana Souza', preco: 500, purpose: 'pay for the “x” treatment', description:'"Hi guys, Im undergoing x treatment, and my health plan does not cover the amount of x exam."' ,pixKey: '(xx)xxxxx-xxxx'},
]

export default function CardMoneyDonate() {

  const listaPosts = tempPosts.map((post) => {
    return (
      <View key={post.id} style={styles.card}>
        <View style={styles.precoView}>
          <Text style={styles.precoText}>R${post.preco}</Text>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.tittle}>{post.nome}</Text>
          <Text style={styles.text}>Purpose: <Text style={styles.secText}>{post.purpose}</Text></Text>
          <Text style={styles.text}>Description: <Text style={styles.secText}>{post.description}</Text></Text>
          <Text style={styles.text}>PIX Key: <Text style={styles.secText}>{post.pixKey}</Text></Text>
        </View>
      </View>
    );
  });


  return (
      <View style={styles.container}>
        {listaPosts}
      </View>
  );
}