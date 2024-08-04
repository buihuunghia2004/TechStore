import { StyleSheet } from 'react-native'
import { containerStyles } from '~/styles/globalStyles'
export const DropSelectStyle = StyleSheet.create({
  container:{
    flex:1,
  },
  titleContainer:{
    ...containerStyles.containerRow,
    maxHeight:40,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'space-between',
    borderRadius:8,
    paddingHorizontal:8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title:{
    borderRadius:8,
  },
  dataContainer:{
    borderRadius:8,
    padding:8,
    marginTop:6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
  }
})