import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { textStyles } from "~/styles/globalStyles";
import { DropCheckBoxStyle } from "./DropCheckBoxStyle";

export const DropPriceStyle = StyleSheet.create({
    header: {
        ...DropCheckBoxStyle.header
      },
      text: {
        ...textStyles.body_lg,
        color: 'black',
      },
      inputContainer: {
        gap: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
      },
      input: {
        width: '25%',
        borderWidth: 1,
        borderColor: colors.gray717171,
        borderRadius: 8,
        padding: 8,
        textAlign: 'center',
      },
      sliderContainer: {
        alignItems: 'center',
      },
      marker: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
      markerInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'white',
      },
})
