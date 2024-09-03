import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { textStyles } from "~/styles/globalStyles";

export const RadioButtonStyle = StyleSheet.create({
    container:{
      
    },
    containerInfor:{
        flexDirection:'row',
        backgroundColor:'red',
        justifyContent:'space-between'
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    textTitle:{
        ...textStyles.body_md,
        color:'black',
        marginLeft:12
    },

    textSub:{
        ...textStyles.body_sm,
        color:colors.gray505050,
        width:'100%'
    }
})