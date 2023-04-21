import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { styles } from './styles';
import { ExternalLink } from '../../components/ExternalLink';
import { Icon } from '../../components/BackIcon';
import Plus from '../../assets/images/plusIcon';
import { DataTable } from 'react-native-paper';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Medication() {

    const router = useRouter();

    const [meds, setMeds] = useState([])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@id')
            if(value !== null) {
                // value previously stored
                return value
            }
        } catch(e) {
            // error reading value
        }
    }

    async function getMeds() {
        await getData().then(async (id) => {
            console.log(id)

            const response = await axios.get("http://10.254.18.177:3001/v1/medicine/getByUser/" + id);

            console.log("response", response.data)

            setMeds(response.data)
        })
    }

    useEffect(() => {
        getMeds()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'transparent',
            }}>
                <TouchableOpacity style={styles.mainMed} onPress={() => {router.back()}}>
                    <Icon name='chevron-left' size={28} color='#000'></Icon>
                    <Text style={styles.title}>Medication</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Here you can find all of your medication, be free to add or exclude meds at any time! </Text>
            </View>
            <View style={{
                backgroundColor: 'transparent',
                marginTop: 50,
                marginLeft: 20,
            }}>
                <View style={styles.medTitle}>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                    }}>daily meds</Text>
                    <View style={{
                        marginBottom: -5,
                    }}><TouchableOpacity onPress={() => {router.push("/createMed")}}><Plus width={28}/></TouchableOpacity></View>
                </View>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
            }}>
                <View style={styles.boardMed}>
                    <DataTable style={styles.containerTable}>
                        <DataTable.Header style={styles.tableHeader}>
                            <DataTable.Title><Text style={styles.nameTable}>Time</Text></DataTable.Title>
                            <DataTable.Title><Text style={styles.nameTable}>Medication</Text></DataTable.Title>
                            <DataTable.Title><Text style={styles.nameTable}>Dosage</Text></DataTable.Title>
                            <DataTable.Title><Text style={styles.nameTable}>Obs.</Text></DataTable.Title>
                        </DataTable.Header>
                        {
                            meds.map((med) => {
                                return (
                                    <DataTable.Row style={styles.line}>
                                        <DataTable.Cell>{JSON.parse(med.time).map((time) => {console.log(time); return (<Text>{time}</Text>)})}</DataTable.Cell>
                                        <DataTable.Cell><Text>{med.name}</Text></DataTable.Cell>
                                        <DataTable.Cell><Text>{med.dosage}</Text></DataTable.Cell>
                                        <DataTable.Cell><Text>{med.observations}</Text></DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }
                        {/* <DataTable.Row style={styles.line}>
                            <DataTable.Cell><Text>2pm</Text></DataTable.Cell>
                            <DataTable.Cell><Text></Text></DataTable.Cell>
                            <DataTable.Cell><Text>10ml</Text></DataTable.Cell>
                            <DataTable.Cell><Text>after a meal</Text></DataTable.Cell>
                        </DataTable.Row>
                    
                        <DataTable.Row>
                            <DataTable.Cell><Text>2pm</Text></DataTable.Cell>
                            <DataTable.Cell><Text>Esc</Text></DataTable.Cell>
                            <DataTable.Cell><Text>10ml</Text></DataTable.Cell>
                            <DataTable.Cell><Text>after a meal</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text>2pm</Text></DataTable.Cell>
                            <DataTable.Cell><Text>Esc</Text></DataTable.Cell>
                            <DataTable.Cell><Text>10ml</Text></DataTable.Cell>
                            <DataTable.Cell><Text>after a meal</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text>2pm</Text></DataTable.Cell>
                            <DataTable.Cell><Text>Esc</Text></DataTable.Cell>
                            <DataTable.Cell><Text>10ml</Text></DataTable.Cell>
                            <DataTable.Cell><Text>after a meal</Text></DataTable.Cell>
                        </DataTable.Row> */}
                    </DataTable>
                </View>
            </View>
            
        </View>
    );
}
