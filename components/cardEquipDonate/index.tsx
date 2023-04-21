import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import { styles } from './styles';
import { Text, View } from '../Themed';

const tempPosts = [
  { id: 0, nome: 'Ana Clara', equipment: 'Shower chair', specification: 'Kids size', typeContact:'Whatsapp' , contact: '(xx)xxxxx-xxxx'},
  { id: 1, nome: 'Victor Carvalho', equipment: 'Shower chair', specification: 'Kids size',typeContact:'Whatsapp' , contact: '(xx)xxxxx-xxxx'},
  { id: 2, nome: 'Bruno ', equipment: 'Shower chair', specification: 'Kids size', typeContact:'Whatsapp' ,contact: '(xx)xxxxx-xxxx'},
  { id: 3, nome: 'Ana Clara', equipment: 'Shower chair', specification: 'Kids size', typeContact:'Whatsapp' ,contact: '(xx)xxxxx-xxxx'},
]

export default function CardEquipDonate() {

  const listaPosts = tempPosts.map((post) => {
    return (
      <View key={post.id} style={styles.card}>
        <Text style={styles.tittle}>{post.nome}</Text>
        <Text style={styles.text}><Text style={styles.secText}>Equipment: </Text>{post.equipment}</Text>
        <Text style={styles.text}><Text style={styles.secText}>Specification: </Text>{post.specification}</Text>
        <Text style={styles.text}><Text style={styles.secText}>Contact: </Text>{post.typeContact} - {post.contact} </Text>
      </View>
    );
  });


  return (
      <View style={styles.container}>
        {listaPosts}
      </View>
  );
}