import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { borderRadius } from "~/styles/dimensions";
import { containerStyles, iconStyles, textStyles } from "~/styles/globalStyles";

export const CartCardStyle = StyleSheet.create({
    container:{
        ...containerStyles.card,
        padding:8,
        flexDirection:'row',
        alignContent:'center',
        gap:12
    },
    containerImage:{
        alignItems:'center',
        justifyContent:'center'
    },
    containerPrice:{
        flexDirection:'row',
        gap:8,
        marginVertical:12,
        alignItems:'center'
    },
    containerColor:{
        flexDirection:'row',
        marginTop:12
    },
    containerQuantity:{
        ...containerStyles.containerRow,
        marginLeft:8,
        alignItems:'center'
    },
    textName:{
        ...textStyles.h4,
        color:'black'
    },
    textOldPrice:{
        textDecorationLine: 'line-through',
        fontSize: 12,
        color: 'gray',
    },
    textPrice:{
        fontSize:16,
        color:'black'
    },
    color:{
        ...iconStyles.icon14,
        borderRadius:borderRadius.max
    },
    text:{
        ...textStyles.caption,
        color:colors.gray717171,
        marginLeft:4
    },
    quantity:{
        marginHorizontal:12
    },
    line:{
        width:'100%',
        backgroundColor:'black',
        height:1,
        marginLeft:4,
    },
})