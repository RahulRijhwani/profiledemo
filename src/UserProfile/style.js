import { StyleSheet } from "react-native";

const externalStyle = StyleSheet.create({
    container:{
        flex: 1,
        
        marginTop:10,
    },
    bioText:{
        marginTop:10,
        fontSize:16,
        fontWeight:'500',
        color:'#9C7E5A'
    },

    bioContainer:{alignItems: 'center', padding: 20},
   
    proPic:{
        width: 150, height: 150, borderRadius: 75 
    },
    sectionHeader:{
         paddingHorizontal: 20,
         marginBottom:10,
         fontWeight: 'bold',
        // color:'#9F8462',
         fontSize:18   
    },
    buttonBox:{
       width:'100%',
       alignItems:'center',
       justifyContent:'center',
     
    },
    button:{ 
        width:150,
        padding:8,
        borderRadius:25,
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor:'#9F8462' 
    },
    btnText:{
        fontSize:16,
        color:'#fff'
    },

})

export default externalStyle;