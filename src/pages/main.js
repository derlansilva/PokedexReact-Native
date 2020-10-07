import React , { Component } from 'react';

import { View , Text , StyleSheet  , TouchableOpacity , FlatList , Image} from 'react-native'


export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state={
            poke: []
        }
    }
    componentDidMount(){
        this.loadPokemon()
    }
    loadPokemon =() => {
        //let url = 'http://192.168.100.4:3000';
        let url = 'https://pokeapi.co/api/v2/pokemon/25'
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({ poke: json})
        })
    }

    renderItem = ({item}) => (
        <View key={item.id} style={styles.pokecontainer}>
            <View style={styles.text}>
                <Text style={styles.pokename}> { item.name} </Text>
            </View>

            <Image source={{ url: "https://pokeres.bastionbot.org/images/pokemon/25.png"}} style={styles.img}/>

            <View style={styles.txt}>
                <Text style={styles.num}>Numero</Text>
                <Text style={styles.numbername}>{item.order}</Text>
            </View>
                <View style={styles.describ}>
                    <Text style={styles.tipo}>Tipo</Text>
                    <Text style={styles.descricao}>{item.description}</Text>
                </View>
    
            
            <TouchableOpacity style={styles.pokeBtn} onPress={() => {
                 this.props.navigation.navigate("Description" , {poke : item})
             }}>
                 <Text style={styles.pokeBtnText}>Visualisar 3D</Text>
             </TouchableOpacity>
        </View>
    )

    render(){
        return(
            <View style={styles.container}>
               <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.poke}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#000000',
        flex: 1,
    },
    img: {
        width:360,
        height:360,
        borderRadius: 15,
        backgroundColor: '#000',
        padding: 15
       
    },

    pokename: {
        fontSize: 20,
        color: '#ddd'
    },
    numbername: {
        fontSize: 15,
        color: '#ddd',
        marginHorizontal: 55
    },
    descricao: {
        fontSize: 15,
        color: '#ddd'
        ,marginHorizontal: 76
    },
    pokeBtnText:{
        fontSize: 15,
        color: '#ddd'
    },
    num: {
        fontSize: 15,
        color: '#ddd',
    },
    tipo: {
        fontSize: 15,
        color: '#ddd'
    },
    pokecontainer: {
        flex: 1,
        width: 375,
        height:650,
        borderColor: "#555",
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#2C2D23',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        backgroundColor: '#000',
        width: 360, 
        height: 50,
        alignItems: 'center',
        color:'#ddd',
        borderRadius: 15,
        marginBottom: 15,
        padding: 10,
        borderColor: "#555", 

    },
    txt: {
        backgroundColor: '#000',
        width: 360, 
        height: 50,
        alignItems: 'center',
        color:'#ddd',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    describ: {
        backgroundColor: '#000',
        width: 360, 
        height: 50,
        alignItems: 'center',
        color:'#ddd',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        flexDirection: 'row'
    },
    pokeBtn: {
        backgroundColor: '#000',
        width: 360, 
        height: 50,
        alignItems: 'center',
        color:'#ddd',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,

    }
    
})