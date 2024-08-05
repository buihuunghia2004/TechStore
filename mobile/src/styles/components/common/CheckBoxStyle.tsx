import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { textStyles } from "~/styles/globalStyles";

export const CheckBoxStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:24,
        width:100
    },
    text:{
        ...textStyles.body_lg,
        marginLeft:16,
        color:'black',
    },
    subText:{
        ...textStyles.body_sm,
        color:colors.grayB4B4B4
    }
    
})