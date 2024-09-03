import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { containerStyles, textStyles } from "~/styles/globalStyles";

export const ShippingMethodCardStyle = StyleSheet.create({
    container:{
        ...containerStyles.card,
        padding:8,
    },
    containerSelect:{
        ...containerStyles.card,
        padding:7,
        backgroundColor:colors.primary25,
        borderWidth:1,
        borderColor:colors.primary
    },
    containerInfor:{
        marginTop:6,
        ...containerStyles.containerBetween,
    },
    textName:{
        ...textStyles.body_md,
        color:'black'
    },
    textPrice:{
        ...textStyles.body_sm,
    },
    textDescription:{
        ...textStyles.body_sm,
        color:colors.gray2D2D2D,
        marginLeft:28
    }
})