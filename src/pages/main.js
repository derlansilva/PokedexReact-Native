import React , { useEffect , useState } from 'react';

import {View , FlatList , SafeAreaView, Image , Text  , StyleSheet , TouchableOpacity} from 'react-native'



export default function Main({navigation}) {

    const [pokemons , setPokemons ] = useState([])
    

    useEffect((id) => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0' , {
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
            <View style={{ alignItems: 'center'}}>
            <Image style={{width: 100 , height: 50 ,alignItems: 'center'}} source={require('../../assets/splash.png')}/>
            <Text style={{ color: 'white' , marginTop: 10 , fontFamily: 'Verdana-Bold'}}>
                Click na imagem para detalhes</Text>
            </View>
            <FlatList
                data={pokemons}
                keyExtractor={(pokemon) => pokemon.name}
                numColumns={3}
                contentContainerStyle = {{ flexGrow : 1}}
                renderItem = {PokemonShow}
            ></FlatList>
        </SafeAreaView>
    )
}

function PokemonShow(item){
    const { name , url , type } = item.item
    const pokemonNumber = url.split('/')[url.split('/').length -2]
    //const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/' , '').replace('/' , '')
    const imageurl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`


    return(
        <View style={styles.pokecontainer}>
            <View style={styles.viewimage}>
                <Image style={styles.img} source={{ uri : imageurl}}/>
            </View>
            <View style={{flexDirection: 'column'}}>

            <View style={styles.viewtxt}>
                <View>
                    <Text style={styles.pokename}> {name}</Text>
                </View>
            </View>
            <View style={styles.viewnumber}>
                <View style={{
                    width: 50 ,
                    height: 30,
                    marginTop:-2,
                    backgroundColor: '#fff',   
                    alignItems: 'center',
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                    borderWidth: 2,

                     
                }} >
                    <Text style={{color: '#111' , fontSize: 10 , fontFamily: 'Verdana-Bold', marginTop: 5}}>N°</Text>
                </View>
                <View>
                    <Text style={styles.numbername}>{pokemonNumber}</Text>
                </View>
            </View>

            <View style={styles.viewtype}>
                <View style={{
                    width: 50 ,
                    height: 30,
                    marginTop:-2,
                    backgroundColor: '#fff',   
                    alignItems: 'center',
                    borderBottomLeftRadius: 15,
                    borderTopLeftRadius: 15,
                    borderWidth: 2,

                     
                }} >
                    <Text style={{color: '#111' , fontSize: 10 , fontFamily: 'Verdana-Bold', marginTop: 5}}>Tipo</Text>
                </View>
                <View>
                    <Text style={styles.numbername}>{type}</Text>
                </View>
            </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#050404',
        justifyContent: "space-between",
    
    },
    img: {
        width:80,
        height:80,
        marginTop: -15
       
    },
    viewimage: {
        width:80,
        height:80,
        borderRadius: 150,
        backgroundColor: 'beige',
        padding: 15,
        alignItems: 'center',
        alignContent: 'center'
    },
    viewtxt: {
        width: 110,
        height: 30,
        backgroundColor: 'beige',
        marginTop: 2,
        borderRadius: 15,
        flexDirection: 'row',
        borderWidth: 2,
        marginHorizontal: 15 ,
        
    },

    viewnumber:{
        width: 110,
        height: 30,
        backgroundColor: 'beige',
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 2,
        marginHorizontal: 15 ,
    }, 

    viewtype:{
        width: 110,
        height: 30,
        backgroundColor: 'beige',
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 2,
        marginHorizontal: 15 ,
    }, 
    pokename: {
        fontSize: 12,
        color: '#111',
        fontFamily: 'Verdana-Bold',
        marginHorizontal: 15,
        marginTop: 6
    }, 
    numbername: {
        fontSize: 10,
        color: '#111',
        marginHorizontal: 5,
        marginTop: 6,
        fontFamily: 'Verdana-Bold',
    },
    pokecontainer: {
        flex: 1,
        height:200,
        width: 100,
        borderColor: "#555",
        padding: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        margin: 4,
        padding: 20,
        borderRadius:15
    
    },
    
})

//backgroundColor: '#050404',