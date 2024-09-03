import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { containerStyles, textStyles, globalStyles } from "~/styles/globalStyles";
export const BillCardStyle = StyleSheet.create({
    contaiberBill: {
        ...containerStyles.card,
        padding:8
      },
      containerItem: {
        ...containerStyles.containerBetween,
        marginTop:8
      },
      textTitle:{
        ...textStyles.button_sm,
        color:colors.gray717171,
      },
      textPrice:{
        ...textStyles.button_sm,
        color:colors.gray444444,
      },
      textTotal:{
        ...textStyles.h4,
        color:colors.gray2D2D2D
      },
      line:{
        ...globalStyles.line,
        marginVertical:12
      }
})