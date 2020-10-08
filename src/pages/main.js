import React , { useEffect , useState } from 'react';

import {View , FlatList , SafeAreaView, Image , Text  , StyleSheet} from 'react-native'


export default function Main() {

    const [pokemons , setPokemons ] = useState([])
    

    useEffect((id) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' , {
            method: 'GET' ,
            headers: {
                'Accept' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
        })
    } , [])

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemons}
                keyExtractor={(pokemon) => pokemon.name}
                contentContainerStyle = {{ flexGrow : 1}}
                renderItem = {PokemonShow}
            />
        </SafeAreaView>
    )
}

function PokemonShow(item){
    const { name , url , type } = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/' , '').replace('/' , '')
    const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`

    return(
        <View style={styles.pokecontainer}>
            <View style={styles.viewimage}>
                <Image style={styles.img} source={{ uri : imageurl}}/>
            </View>
            <View style={styles.viewtxt}>
                <View style={{
                    width: 100 ,
                    height: 50,
                    marginTop:-2,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderBottomStartRadius: 15,
                    borderTopLeftRadius: 15,
                    borderWidth: 2,

            
                }}>
                    <Text style={{color: '#111' , fontSize: 25 ,  fontFamily: 'Palatino-Bold', marginTop: 9}}>
                        Nome</Text>
                </View>
                <View>
                    <Text style={styles.pokename}> {name}</Text>
                </View>
            </View>
            <View style={styles.viewnumber}>
                <View style={{
                    width: 100 ,
                    height: 50,
                    marginTop:-2,
                    backgroundColor: '#fff',   
                    alignItems: 'center',
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                    borderWidth: 2,

                     
                }} >
                    <Text style={{color: '#111' , fontSize: 25 , fontFamily: 'Palatino-Bold', marginTop: 9}}>N°</Text>
                </View>
                <View>
                    <Text style={styles.numbername}>{pokemonNumber}</Text>
                </View>
            </View>

            <View style={styles.viewtype}>
                <View style={{
                    width: 100 ,
                    height: 50,
                    marginTop:-2,
                    backgroundColor: '#fff',   
                    alignItems: 'center',
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                    borderWidth: 2,

                     
                }} >
                    <Text style={{color: '#111' , fontSize: 25 , fontFamily: 'Palatino-Bold', marginTop: 9}}>Tipo</Text>
                </View>
                <View>
                    <Text style={styles.numbername}>{type}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'beige',
        justifyContent: "space-between",
    },
    img: {
        width:300,
        height:300,
        marginTop: 5
       
    },
    viewimage: {
        width:300,
        height:300,
        borderRadius: 150,
        backgroundColor: 'beige',
        padding: 15,
        alignItems: 'center',
        alignContent: 'center'
    },
    viewtxt: {
        width: 300,
        height: 50,
        backgroundColor: 'beige',
        marginTop: 45,
        borderRadius: 15,
        flexDirection: 'row',
        borderWidth: 2,
    },

    viewnumber:{
        width: 300,
        height: 50,
        backgroundColor: 'beige',
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 2,
    }, 

    viewtype:{
        width: 300,
        height: 50,
        backgroundColor: 'beige',
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 2,
    }, 
    pokename: {
        fontSize: 30,
        color: '#111',
        fontFamily: 'Palatino-Bold',
        fontWeight: 'normal',
        marginHorizontal: 15,
        marginTop: 5
    }, 
    numbername: {
        fontSize: 30,
        color: '#111',
        marginHorizontal: 15,
        marginTop: 8,
        fontFamily: 'Palatino-Bold',
    },
    pokecontainer: {
        flex: 1,
        width: 375,
        height:650,
        borderColor: "#555",
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#AAE8AA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})