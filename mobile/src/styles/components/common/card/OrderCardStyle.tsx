import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { containerStyles, imageStyle, textStyles } from "~/styles/globalStyles";

export const OrderCardStyle = StyleSheet.create({
    containerItem: {
        gap: 12,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.grayF9F9F9,
      },
      containerRow: {
        ...containerStyles.containerBetween,
        marginBottom: 12,
        alignItems: 'center',
        borderRadius: 8,
      },
      containerImages: {
        ...containerStyles.containerRow,
        marginTop: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        gap: 16,
      },
      containerTextSumHiden:{
        ...imageStyle.image62_48,
        justifyContent:'center',
        alignItems:'center'
      },
      textSumHiden: {
        ...textStyles.body_lg,
        textAlign: 'center',
        color: colors.gray444444,
      },      
})