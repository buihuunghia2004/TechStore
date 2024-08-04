import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { borderRadius } from "~/styles/dimensions";
import { iconStyles, switchStyle } from "~/styles/globalStyles";

export const SwitchButtonStyle = StyleSheet.create({
    containerOn:{
        ...switchStyle.switchButton,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    containerOff:{
        ...switchStyle.switchButton,
        backgroundColor:colors.grayCBCBCB,
        justifyContent:'center',
    },
    circle:{
        ...iconStyles.icon16,
        borderRadius:borderRadius.max,
        backgroundColor:'white',
        marginHorizontal:4,
    }
})